"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";

type QuizDifficulty = "facile" | "moyen" | "difficile";

type QuizQuestion = {
  id: string;
  type: "qcm" | "vrai_faux" | "texte_a_trous" | "associer" | "reponse_courte";
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  pairs?: { left: string; right: string }[];
};

type GeneratedQuiz = {
  title: string;
  schoolYear: string;
  subjectPrompt: string;
  difficulty: QuizDifficulty;
  questions: QuizQuestion[];
};

const DIFFICULTY_OPTIONS: Array<{ id: QuizDifficulty; label: string }> = [
  { id: "facile", label: "Facile" },
  { id: "moyen", label: "Moyen" },
  { id: "difficile", label: "Difficile" },
];

function getTypeLabel(type: QuizQuestion["type"]) {
  switch (type) {
    case "qcm":
      return "QCM";
    case "vrai_faux":
      return "Vrai/Faux";
    case "texte_a_trous":
      return "Texte à trous";
    case "associer":
      return "Associer";
    default:
      return "Réponse courte";
  }
}

export default function QuizPage() {
  const { progress } = useProgress();
  const { showToast } = useToast();

  const [subjectPrompt, setSubjectPrompt] = useState("");
  const [difficulty, setDifficulty] = useState<QuizDifficulty>("moyen");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modelUsed, setModelUsed] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<GeneratedQuiz | null>(null);

  const schoolYear = useMemo(() => {
    const saved = progress.settings.gameplay.schoolYear?.trim();
    return saved || progress.selectedClass || "";
  }, [progress.settings.gameplay.schoolYear, progress.selectedClass]);

  const promptLength = subjectPrompt.trim().length;
  const promptTooShort = promptLength > 0 && promptLength < 10;

  const handleGenerate = async () => {
    const trimmedPrompt = subjectPrompt.trim();

    if (trimmedPrompt.length < 10) {
      const message = "Le sujet doit contenir au moins 10 caractères.";
      setError(message);
      showToast("Sujet trop court (10 caractères minimum).", "error");
      return;
    }

    if (!schoolYear) {
      const message = "Année scolaire non définie. Va dans Réglages pour la configurer.";
      setError(message);
      showToast("Configure d'abord ton année scolaire dans Réglages.", "error");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/quiz/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subjectPrompt: trimmedPrompt,
          schoolYear,
          difficulty,
        }),
      });

      const data = (await response.json()) as { quiz?: GeneratedQuiz; model?: string; error?: string };
      if (!response.ok || !data.quiz || !Array.isArray(data.quiz.questions)) {
        throw new Error(data.error || "Génération du quiz impossible pour le moment.");
      }

      setQuiz(data.quiz);
      setModelUsed(data.model || null);
      showToast("Quiz IA généré avec succès 🎉", "success");
    } catch (requestError) {
      const message = requestError instanceof Error ? requestError.message : "Erreur inconnue";
      setError(message);
      showToast(message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-24 animate-in fade-in duration-700">
      <header className="glass border border-white/20 bg-white/10 backdrop-blur-2xl rounded-[2rem] p-8 shadow-2xl">
        <span className="inline-flex px-4 py-1.5 rounded-full border border-white/20 bg-white/15 text-[10px] font-black uppercase tracking-[0.25em]">
          Quizzly v1.0.0 • Quiz IA
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-space font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan">
          QUIZ 🧠
        </h1>
        <p className="mt-3 text-sm opacity-75 font-semibold">
          Décris ton sujet et obtiens un quiz de 10 questions (QCM, Vrai/Faux, Texte à trous, Associer, Réponse courte).
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass border border-white/20 bg-white/10 backdrop-blur-2xl rounded-[2rem] p-6 space-y-5">
          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Sujet (min 10 caractères)</span>
            <textarea
              id="subject"
              value={subjectPrompt}
              onChange={(event) => {
                setSubjectPrompt(event.target.value);
                if (error) setError(null);
              }}
              placeholder="Ex: Révolution française, causes et conséquences"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-sm font-medium outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
            <div className={`mt-2 text-xs font-bold ${promptTooShort ? "text-red-400" : "opacity-50"}`}>{promptLength}/10 caractères minimum</div>
            {promptTooShort && <p className="mt-1 text-xs text-red-400">Le sujet doit contenir au moins 10 caractères.</p>}
          </label>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] opacity-50 mb-3">Difficulté</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {DIFFICULTY_OPTIONS.map((option) => (
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
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary via-violet to-cyan text-white text-xs font-black uppercase tracking-[0.2em] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Génération..." : "Générer 10 questions IA"}
          </button>

          {error && <div className="rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-300">{error}</div>}
        </div>

        <aside className="glass border border-white/20 bg-white/10 backdrop-blur-2xl rounded-[2rem] p-6 space-y-4">
          <h2 className="text-lg font-black font-space italic">Paramètres</h2>
          <div className="rounded-xl p-3 bg-white/10 border border-white/10">
            <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Année scolaire</p>
            <p className="font-black mt-1">{schoolYear || "Non définie"}</p>
            {!schoolYear && (
              <p className="text-xs text-red-300 mt-2">
                Définis-la dans <Link href="/reglages" className="underline">Réglages</Link>.
              </p>
            )}
          </div>
          <div className="rounded-xl p-3 bg-white/10 border border-white/10 text-xs opacity-80">Objectif: 10 questions générées automatiquement.</div>
          {modelUsed && <div className="rounded-xl p-3 bg-primary/10 border border-primary/20 text-xs">Modèle utilisé: {modelUsed}</div>}
        </aside>
      </section>

      {quiz && (
        <section className="glass p-6 md:p-8 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl space-y-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h2 className="text-2xl md:text-3xl font-black font-space italic tracking-tight">{quiz.title}</h2>
              <p className="opacity-70 text-sm mt-1">
                {quiz.schoolYear} • {quiz.difficulty} • {quiz.questions.length} questions
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {quiz.questions.map((question, index) => (
              <article key={question.id || `q_${index + 1}`} className="rounded-2xl border border-white/20 bg-white/10 p-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Question {index + 1}</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-primary/15 text-primary">{getTypeLabel(question.type)}</span>
                </div>
                <h3 className="font-bold text-sm leading-relaxed">{question.question}</h3>
                {Array.isArray(question.options) && question.options.length > 0 && (
                  <ul className="space-y-1 text-xs opacity-85">
                    {question.options.map((option, optionIndex) => (
                      <li key={`${question.id || index}_opt_${optionIndex}`} className="rounded-xl bg-white/10 px-3 py-2">
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
                {Array.isArray(question.pairs) && question.pairs.length > 0 && (
                  <div className="space-y-1 text-xs opacity-85">
                    {question.pairs.map((pair, pairIndex) => (
                      <div key={`${question.id || index}_pair_${pairIndex}`} className="rounded-xl bg-white/10 px-3 py-2">
                        {pair.left} → {pair.right}
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-xs opacity-75">
                  <span className="font-black">Réponse:</span> {Array.isArray(question.answer) ? question.answer.join(", ") : question.answer}
                </p>
                <p className="text-xs opacity-75">
                  <span className="font-black">Explication:</span> {question.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
