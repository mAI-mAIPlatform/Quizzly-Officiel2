"use client";

import { FormEvent, useMemo, useState } from "react";

type Difficulty = "facile" | "moyen" | "difficile";
type QuizStep = "form" | "playing" | "results";

type GeneratedQuestion = {
  id: string;
  type: "qcm" | "vrai_faux" | "courte";
  question: string;
  options?: string[];
  reponse: string;
  explication?: string;
};

type GeneratedQuiz = {
  id: string;
  titre: string;
  description: string;
  sujet: string;
  niveau: Difficulty;
  classe: string;
  questions: GeneratedQuestion[];
};

type GenerateQuizResponse = {
  quiz: GeneratedQuiz;
  modelUsed?: string;
  fallbackNotice?: string;
  error?: string;
};

const CLASSES = ["6ème", "5ème", "4ème", "3ème", "2nde", "1ère", "Terminale"];
const DIFFICULTES: Difficulty[] = ["facile", "moyen", "difficile"];

const normalizeAnswer = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ");

export default function MatieresPage() {
  const [sujet, setSujet] = useState("");
  const [niveau, setNiveau] = useState<Difficulty>("moyen");
  const [classe, setClasse] = useState(CLASSES[0]);

  const [quiz, setQuiz] = useState<GeneratedQuiz | null>(null);
  const [step, setStep] = useState<QuizStep>("form");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatorInfo, setGeneratorInfo] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null);

  const currentQuestion = quiz?.questions[currentIndex];
  const totalQuestions = quiz?.questions.length ?? 0;

  const progress = useMemo(() => {
    if (!totalQuestions) return 0;
    return Math.round((currentIndex / totalQuestions) * 100);
  }, [currentIndex, totalQuestions]);

  async function handleGenerateQuiz(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/quiz/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sujet, niveau, classe }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Impossible de générer le quiz.");
      }

      const payload = data as GenerateQuizResponse;
      setQuiz(payload.quiz);
      setStep("playing");
      setGeneratorInfo(
        payload.fallbackNotice ?? (payload.modelUsed ? `Quiz généré via ${payload.modelUsed}.` : "Quiz généré avec succès."),
      );
      setCurrentIndex(0);
      setScore(0);
      setSelectedAnswer("");
      setIsAnswerLocked(false);
      setLastAnswerCorrect(null);
    } catch (caughtError) {
      const message = caughtError instanceof Error ? caughtError.message : "Erreur inconnue";
      setError(message);
      setGeneratorInfo(null);
    } finally {
      setLoading(false);
    }
  }

  function handleValidateAnswer() {
    if (!quiz || !currentQuestion || isAnswerLocked || selectedAnswer.trim().length === 0) return;

    const isCorrect = normalizeAnswer(selectedAnswer) === normalizeAnswer(currentQuestion.reponse);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setLastAnswerCorrect(isCorrect);
    setIsAnswerLocked(true);
  }

  function handleNextQuestion() {
    if (!quiz) return;

    if (currentIndex >= quiz.questions.length - 1) {
      setStep("results");
      return;
    }

    setCurrentIndex((prev) => prev + 1);
    setSelectedAnswer("");
    setIsAnswerLocked(false);
    setLastAnswerCorrect(null);
    setGeneratorInfo(null);
  }

  function handleRestart() {
    setStep("form");
    setQuiz(null);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer("");
    setIsAnswerLocked(false);
    setLastAnswerCorrect(null);
    setGeneratorInfo(null);
  }

  const earnedXp = score * 12;
  const earnedCrystals = Math.max(1, Math.floor(score / 2));

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 pb-24">
      <header className="glass p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/70">Liquid Glass • IA Native</p>
        <h1 className="mt-3 text-4xl font-space font-black uppercase italic tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan">
          Quizz
        </h1>
        <p className="mt-3 max-w-3xl text-sm opacity-80">
          Génère un quiz intelligent en indiquant le sujet, la difficulté et la classe. Le moteur IA produit les questions automatiquement,
          puis tu termines avec une synthèse de récompenses.
        </p>
      </header>

      {step === "form" && (
        <form onSubmit={handleGenerateQuiz} className="glass p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="sujet" className="text-xs font-black uppercase tracking-widest opacity-70">
              Sujet
            </label>
            <input
              id="sujet"
              value={sujet}
              onChange={(event) => setSujet(event.target.value)}
              placeholder="Exemple : Fraction, Révolution française, ADN..."
              className="h-14 w-full rounded-2xl border border-white/20 bg-white/15 px-4 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
              required
              minLength={3}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="niveau" className="text-xs font-black uppercase tracking-widest opacity-70">
                Difficulté
              </label>
              <select
                id="niveau"
                value={niveau}
                onChange={(event) => setNiveau(event.target.value as Difficulty)}
                className="h-12 w-full rounded-2xl border border-white/20 bg-white/15 px-4 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
              >
                {DIFFICULTES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="classe" className="text-xs font-black uppercase tracking-widest opacity-70">
                Classe
              </label>
              <select
                id="classe"
                value={classe}
                onChange={(event) => setClasse(event.target.value)}
                className="h-12 w-full rounded-2xl border border-white/20 bg-white/15 px-4 text-sm outline-none transition focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
              >
                {CLASSES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error && <p className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading || sujet.trim().length < 3}
            className="h-14 w-full rounded-2xl bg-primary text-sm font-black uppercase tracking-widest text-white transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Génération en cours..." : "Générer mon quiz IA"}
          </button>
        </form>
      )}

      {step === "playing" && quiz && currentQuestion && (
        <section className="space-y-4">
          {generatorInfo && <p className="glass px-4 py-3 text-xs font-bold">{generatorInfo}</p>}
          <div className="glass p-6 space-y-4">
            <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-widest opacity-70">
              <span>
                Question {currentIndex + 1} / {totalQuestions}
              </span>
              <span>
                Score : {score}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/20">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-cyan transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <article className="glass p-8 space-y-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">{currentQuestion.type.replace("_", " ")}</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight">{currentQuestion.question}</h2>
            </div>

            {currentQuestion.type === "qcm" && currentQuestion.options && (
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedAnswer(option)}
                    disabled={isAnswerLocked}
                    className={`rounded-2xl border p-4 text-left text-sm font-semibold transition ${
                      selectedAnswer === option
                        ? "border-primary bg-primary/10"
                        : "border-white/20 bg-white/10 hover:border-primary/40"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === "vrai_faux" && (
              <div className="grid gap-3 sm:grid-cols-2">
                {["Vrai", "Faux"].map((option) => (
                  <button
                    key={option}
                    onClick={() => setSelectedAnswer(option)}
                    disabled={isAnswerLocked}
                    className={`rounded-2xl border p-4 text-sm font-semibold transition ${
                      selectedAnswer === option
                        ? "border-primary bg-primary/10"
                        : "border-white/20 bg-white/10 hover:border-primary/40"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === "courte" && (
              <input
                value={selectedAnswer}
                onChange={(event) => setSelectedAnswer(event.target.value)}
                disabled={isAnswerLocked}
                placeholder="Écris ta réponse ici"
                className="h-14 w-full rounded-2xl border border-white/20 bg-white/10 px-4 text-sm outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10"
              />
            )}

            {!isAnswerLocked ? (
              <button
                onClick={handleValidateAnswer}
                className="h-12 w-full rounded-2xl bg-primary text-sm font-black uppercase tracking-widest text-white disabled:opacity-60"
                disabled={selectedAnswer.trim().length === 0}
              >
                Valider ma réponse
              </button>
            ) : (
              <div className="space-y-4">
                <p className={`rounded-2xl border p-4 text-sm ${lastAnswerCorrect ? "border-green-500/30 bg-green-500/10" : "border-red-500/30 bg-red-500/10"}`}>
                  {lastAnswerCorrect ? "✅ Bonne réponse !" : `❌ Mauvaise réponse. Réponse attendue : ${currentQuestion.reponse}`}
                  {currentQuestion.explication ? ` — ${currentQuestion.explication}` : ""}
                </p>

                <button onClick={handleNextQuestion} className="h-12 w-full rounded-2xl border border-white/20 bg-white/10 text-sm font-black uppercase tracking-widest">
                  {currentIndex === totalQuestions - 1 ? "Voir mes récompenses" : "Question suivante"}
                </button>
              </div>
            )}
          </article>
        </section>
      )}

      {step === "results" && quiz && (
        <section className="glass p-8 space-y-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/70">Récompenses</p>
          <h2 className="text-3xl font-space font-black uppercase italic tracking-tight">Quiz terminé 🎉</h2>
          <p className="opacity-70">
            {quiz.titre} • {quiz.classe} • Difficulté {quiz.niveau}
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5">
              <p className="text-[10px] uppercase tracking-widest opacity-50">Score</p>
              <p className="mt-2 text-3xl font-black">
                {score}/{totalQuestions}
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5">
              <p className="text-[10px] uppercase tracking-widest opacity-50">XP gagnée</p>
              <p className="mt-2 text-3xl font-black">+{earnedXp}</p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-5">
              <p className="text-[10px] uppercase tracking-widest opacity-50">Cristaux</p>
              <p className="mt-2 text-3xl font-black">+{earnedCrystals} 💎</p>
            </div>
          </div>

          <button onClick={handleRestart} className="h-12 w-full rounded-2xl bg-primary text-sm font-black uppercase tracking-widest text-white">
            Générer un nouveau quiz IA
          </button>
        </section>
      )}
    </div>
  );
}
