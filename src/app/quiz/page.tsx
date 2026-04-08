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

const DIFFICULTY_OPTIONS: { id: QuizDifficulty; label: string; icon: string }[] = [
  { id: "facile", label: "Facile", icon: "🌱" },
  { id: "moyen", label: "Moyen", icon: "⚡" },
  { id: "difficile", label: "Difficile", icon: "🔥" },
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
      setError("Le sujet doit contenir au moins 10 caractères.");
      showToast("Sujet trop court (10 caractères minimum).", "error");
      return;
    }

    if (!schoolYear) {
      setError("Année scolaire non définie. Va dans Réglages pour la configurer.");
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

      const data = (await response.json()) as { quiz?: GeneratedQuiz; error?: string };
      if (!response.ok || !data.quiz) {
        throw new Error(data.error || "Génération du quiz impossible pour le moment.");
      }

      setQuiz(data.quiz);
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
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-700 pb-24">
      <header className="glass p-8 md:p-10 border border-white/20 shadow-2xl rounded-[2.2rem] bg-white/10 backdrop-blur-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/15 text-[10px] font-black uppercase tracking-[0.25em]">
          ✨ Quizzly 1.0.0 • IA Gemini 2.0 Flash Lite
        </div>
        <h1 className="mt-4 text-4xl md:text-6xl font-black font-space italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan">
          QUIZ IA
        </h1>
        <p className="mt-3 text-sm md:text-base opacity-75 font-semibold">
          L&apos;ancienne page « Matières » devient « Quiz » : tu décris ton sujet et l&apos;IA génère un quiz de 10 questions.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass p-6 md:p-8 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl space-y-6">
          <div>
            <label htmlFor="subject" className="block text-xs font-black uppercase tracking-[0.2em] opacity-50 mb-2">
              Sujet (minimum 10 caractères)
            </label>
            <textarea
              id="subject"
              value={subjectPrompt}
              onChange={(event) => setSubjectPrompt(event.target.value)}
              placeholder="Ex: Révolution française, causes et conséquences"
              rows={4}
              className="w-full rounded-2xl border border-white/20 bg-white/10 p-4 text-sm font-medium outline-none focus:ring-4 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
            <div className={`mt-2 text-xs font-bold ${promptTooShort ? "text-red-400" : "opacity-50"}`}>
              {promptLength}/10 caractères minimum
            </div>
            {promptTooShort && <p className="mt-1 text-xs text-red-400">Le sujet doit contenir au moins 10 caractères.</p>}
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] opacity-50 mb-3">Difficulté</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {DIFFICULTY_OPTIONS.map((option) => {
                const active = difficulty === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => setDifficulty(option.id)}
                    className={`rounded-2xl border px-4 py-4 text-left transition-all ${
                      active
                        ? "bg-primary text-white border-primary shadow-xl shadow-primary/25"
                        : "bg-white/10 border-white/20 hover:border-primary/30"
                    }`}
                  >
                    <div className="text-xl">{option.icon}</div>
                    <div className="mt-2 font-black uppercase text-xs tracking-widest">{option.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full h-14 rounded-2xl bg-gradient-to-r from-primary via-violet to-cyan text-white font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Génération en cours..." : "Générer 10 questions IA"}
          </button>

          {error && <div className="rounded-2xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-300">{error}</div>}
        </div>

        <aside className="glass p-6 rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-2xl space-y-4">
          <h2 className="font-black font-space text-xl italic tracking-tight">Configuration</h2>
          <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
            <div className="text-[10px] uppercase tracking-[0.25em] opacity-50 font-black">Année scolaire</div>
            <div className="text-lg font-black mt-2">{schoolYear || "Non définie"}</div>
            {!schoolYear && (
              <p className="text-xs text-red-300 mt-2">
                Tu dois d&apos;abord choisir ton année scolaire dans <Link href="/reglages" className="underline font-black">Réglages</Link>.
              </p>
            )}
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/15 p-4 text-xs leading-relaxed opacity-80">
            Types possibles: QCM, Vrai/Faux, Texte à trous, Associer, Réponse courte.
          </div>
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
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-primary/15 text-primary">
                    {getTypeLabel(question.type)}
                  </span>
                </div>
                <h3 className="font-bold text-sm leading-relaxed">{question.question}</h3>
                {Array.isArray(question.options) && question.options.length > 0 && (
                  <ul className="space-y-1 text-xs opacity-85">
                    {question.options.map((option, optionIndex) => (
                      <li key={`${question.id}_opt_${optionIndex}`} className="rounded-xl bg-white/10 px-3 py-2">
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
                {Array.isArray(question.pairs) && question.pairs.length > 0 && (
                  <div className="space-y-1 text-xs opacity-85">
                    {question.pairs.map((pair, pairIndex) => (
                      <div key={`${question.id}_pair_${pairIndex}`} className="rounded-xl bg-white/10 px-3 py-2">
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
