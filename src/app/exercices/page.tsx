"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useToast } from "@/components/Toast";
import { useProgress } from "@/context/ProgressContext";

type Difficulty = "facile" | "moyen" | "difficile";

type ExerciseQuestion = {
  id: string;
  type: "qcm" | "vrai_faux" | "texte_a_trous" | "reponse_courte" | "reponse_longue";
  prompt: string;
  options?: string[];
  expectedAnswer: string;
  correctionGuide: string;
  points: number;
};

type Exercise = {
  title: string;
  schoolYear: string;
  topic: string;
  difficulty: Difficulty;
  questions: ExerciseQuestion[];
};

type Evaluation = {
  score: number;
  feedback: string;
  corrections: Array<{ id: string; pointsAwarded: number; feedback: string }>;
};

const difficultyOptions: Array<{ id: Difficulty; label: string }> = [
  { id: "facile", label: "Facile" },
  { id: "moyen", label: "Moyen" },
  { id: "difficile", label: "Difficile" },
];

export default function ExercicesPage() {
  const { progress, addXP } = useProgress();
  const { showToast } = useToast();

  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("moyen");
  const [loading, setLoading] = useState(false);
  const [correcting, setCorrecting] = useState(false);
  const [exercise, setExercise] = useState<Exercise | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [xpAwardedForRun, setXpAwardedForRun] = useState(false);

  const schoolYear = useMemo(() => progress.settings.gameplay.schoolYear?.trim() || progress.selectedClass || "", [progress]);

  const totalPoints = useMemo(() => exercise?.questions.reduce((sum, q) => sum + q.points, 0) ?? 0, [exercise]);

  const promptTooShort = topic.trim().length > 0 && topic.trim().length < 10;

  const generateExercise = async () => {
    if (topic.trim().length < 10) {
      showToast("Sujet trop court (minimum 10 caractères).", "error");
      return;
    }

    if (!schoolYear) {
      showToast("Configure ton année scolaire dans Réglages.", "error");
      return;
    }

    setLoading(true);
    setEvaluation(null);

    try {
      const response = await fetch("/api/exercices/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), schoolYear, difficulty }),
      });

      const data = (await response.json()) as { exercise?: Exercise; error?: string };
      if (!response.ok || !data.exercise) {
        throw new Error(data.error || "Génération impossible");
      }

      setExercise(data.exercise);
      setAnswers({});
      setXpAwardedForRun(false);
      showToast("Exercice IA généré ✨", "success");
    } catch (error) {
      showToast(error instanceof Error ? error.message : "Erreur inconnue", "error");
    } finally {
      setLoading(false);
    }
  };

  const submitAnswers = async () => {
    if (!exercise) return;

    setCorrecting(true);
    try {
      const payload = exercise.questions.map((question) => ({
        id: question.id,
        userAnswer: answers[question.id] || "",
        expectedAnswer: question.expectedAnswer,
        correctionGuide: question.correctionGuide,
        maxPoints: question.points,
      }));

      const response = await fetch("/api/exercices/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: payload }),
      });

      const data = (await response.json()) as { evaluation?: Evaluation; error?: string };
      if (!response.ok || !data.evaluation) {
        throw new Error(data.error || "Correction impossible");
      }

      const score = Math.max(0, Math.min(20, data.evaluation.score));
      const xp = Math.round(score * 2);

      // Anti-abus: on crédite l'XP une seule fois par exercice généré.
      if (!xpAwardedForRun) {
        addXP(xp);
        setXpAwardedForRun(true);
      }

      setEvaluation({ ...data.evaluation, score });
      showToast(`Note: ${score}/20 • +${xp} XP`, "success");
    } catch (error) {
      showToast(error instanceof Error ? error.message : "Erreur inconnue", "error");
    } finally {
      setCorrecting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-24 animate-in fade-in duration-700">
      <header className="glass border border-white/20 bg-white/10 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl">
        <span className="inline-flex px-4 py-1.5 rounded-full border border-white/20 bg-white/15 text-[10px] font-black uppercase tracking-[0.25em]">
          Quizzly v1.0.0 • Exercices IA
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-space font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan">
          EXERCICES 🧠
        </h1>
        <p className="mt-3 text-sm opacity-75 font-semibold">
          Demande des exercices variés à l&apos;IA (QCM, textes à trous, réponses longues...) puis récupère une note sur 20 et jusqu&apos;à 40 XP (x2).
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass border border-white/20 bg-white/10 backdrop-blur-2xl rounded-[2rem] p-6 space-y-5">
          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Sujet (min 10 caractères)</span>
            <textarea
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-sm"
              placeholder="Ex: les fonctions affines et applications concrètes"
            />
            {promptTooShort && <p className="text-red-300 text-xs mt-1">Le sujet doit contenir au moins 10 caractères.</p>}
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {difficultyOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setDifficulty(option.id)}
                className={`rounded-xl p-3 border text-sm font-black transition-all ${
                  difficulty === option.id ? "bg-primary text-white border-primary" : "bg-white/10 border-white/20"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            onClick={generateExercise}
            disabled={loading}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary via-violet to-cyan text-white text-xs font-black uppercase tracking-[0.2em] disabled:opacity-60"
          >
            {loading ? "Génération..." : "Générer l'exercice IA"}
          </button>
        </div>

        <aside className="glass border border-white/20 bg-white/10 backdrop-blur-2xl rounded-[2rem] p-6 space-y-4">
          <h2 className="text-lg font-black font-space italic">Paramètres</h2>
          <div className="rounded-xl p-3 bg-white/10 border border-white/10">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Année scolaire</p>
            <p className="font-black mt-1">{schoolYear || "Non définie"}</p>
            {!schoolYear && (
              <p className="text-xs text-red-300 mt-2">Définis-la dans <Link href="/reglages" className="underline">Réglages</Link>.</p>
            )}
          </div>
          <div className="rounded-xl p-3 bg-white/10 border border-white/10 text-xs opacity-80">
            Barème: note /20, XP = note × 2 (max 40 XP).
          </div>
        </aside>
      </section>

      {exercise && (
        <section className="glass border border-white/20 bg-white/10 backdrop-blur-2xl rounded-[2rem] p-6 space-y-5">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h2 className="text-2xl font-black font-space italic">{exercise.title}</h2>
            <p className="text-xs opacity-70">Total points: {totalPoints}/20</p>
          </div>

          {exercise.questions.map((question, index) => (
            <article key={question.id} className="rounded-2xl border border-white/15 bg-white/10 p-4 space-y-3">
              <div className="flex justify-between gap-3 text-xs opacity-70">
                <span className="font-black uppercase tracking-wider">Question {index + 1}</span>
                <span className="font-black">{question.points} pts</span>
              </div>
              <h3 className="font-bold text-sm">{question.prompt}</h3>
              {question.options && question.options.length > 0 && (
                <ul className="space-y-1 text-xs">
                  {question.options.map((option, idx) => (
                    <li key={`${question.id}_${idx}`} className="rounded-lg px-3 py-2 bg-white/10">
                      {option}
                    </li>
                  ))}
                </ul>
              )}
              <textarea
                value={answers[question.id] || ""}
                onChange={(event) => setAnswers((prev) => ({ ...prev, [question.id]: event.target.value }))}
                rows={question.type === "reponse_longue" ? 5 : 3}
                className="w-full rounded-xl border border-white/15 bg-white/10 p-3 text-sm"
                placeholder={question.type === "reponse_longue" ? "Rédige une réponse détaillée..." : "Ta réponse"}
              />
            </article>
          ))}

          <button
            onClick={submitAnswers}
            disabled={correcting}
            className="w-full h-12 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-[0.2em] disabled:opacity-60"
          >
            {correcting ? "Correction IA..." : "Corriger mes réponses"}
          </button>
        </section>
      )}

      {evaluation && (
        <section className="glass border border-emerald-300/40 bg-emerald-500/10 backdrop-blur-2xl rounded-[2rem] p-6 space-y-3">
          <h2 className="text-2xl font-black font-space italic">Résultat: {evaluation.score}/20</h2>
          <p className="text-sm">{evaluation.feedback}</p>
          <p className="text-sm font-black text-emerald-200">XP gagné: {Math.round(evaluation.score * 2)} / 40</p>
          <div className="space-y-2">
            {evaluation.corrections.map((item) => (
              <div key={item.id} className="rounded-xl bg-white/10 border border-white/15 p-3 text-xs">
                <div className="font-black">{item.id} • {item.pointsAwarded} pts</div>
                <div className="opacity-80 mt-1">{item.feedback}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
