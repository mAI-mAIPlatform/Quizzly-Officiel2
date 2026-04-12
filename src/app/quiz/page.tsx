"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
import { ACTIVE_AI_MODELS } from "@/lib/ai-models";
import { useProgress } from "@/context/ProgressContext";

type GeneratedQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

type GeneratedQuiz = {
  title: string;
  mode: string;
  classLevel: string;
  questions: GeneratedQuestion[];
};

type UploadAttachment = {
  name: string;
  mimeType: string;
  dataUrl: string;
};

const modes = ["Classé", "Survie", "Blitz", "Duel", "Vrai/Faux"];
const levels = ["6ème", "5ème", "4ème", "3ème", "Seconde", "Première", "Terminale"];

export default function QuizAIPage() {
  const searchParams = useSearchParams();
  const { progress } = useProgress();
  const initialMode = searchParams.get("mode") && modes.includes(searchParams.get("mode") as string) ? (searchParams.get("mode") as string) : "Classé";

  const [topic, setTopic] = useState("");
  const [classLevel, setClassLevel] = useState("3ème");
  const [mode, setMode] = useState(initialMode);
  const [questionCount, setQuestionCount] = useState(8);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quiz, setQuiz] = useState<GeneratedQuiz | null>(null);
  const [attachments, setAttachments] = useState<UploadAttachment[]>([]);

  const selectedModel = progress.settings.gameplay.defaultAIModel;
  const selectedModelLabel = useMemo(
    () => ACTIVE_AI_MODELS.find((model) => model.model === selectedModel)?.name ?? selectedModel,
    [selectedModel],
  );

  async function handleGenerate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/quiz-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, classLevel, mode, questionCount, model: selectedModel, attachments }),
      });

      const data = (await response.json()) as GeneratedQuiz & { error?: string; details?: string };
      if (!response.ok) {
        setQuiz(null);
        setError(data.error ? `${data.error}${data.details ? `: ${data.details}` : ""}` : "Impossible de générer le quiz.");
        return;
      }

      setQuiz(data);
    } catch {
      setQuiz(null);
      setError("Une erreur réseau est survenue pendant la génération.");
    } finally {
      setLoading(false);
    }
  }

  async function handleFileImport(files: FileList | null) {
    if (!files || files.length === 0) return;
    const selectedFiles = Array.from(files).slice(0, 3);

    try {
      const processed = await Promise.all(
        selectedFiles.map(
          (file) =>
            new Promise<UploadAttachment>((resolve, reject) => {
              if (file.size > 5 * 1024 * 1024) {
                reject(new Error(`Le fichier ${file.name} dépasse 5MB.`));
                return;
              }
              const reader = new FileReader();
              reader.onload = () => {
                if (typeof reader.result !== "string") {
                  reject(new Error(`Lecture impossible pour ${file.name}`));
                  return;
                }
                resolve({
                  name: file.name,
                  mimeType: file.type || "application/octet-stream",
                  dataUrl: reader.result,
                });
              };
              reader.onerror = () => reject(new Error(`Erreur de lecture pour ${file.name}`));
              reader.readAsDataURL(file);
            }),
        ),
      );
      setAttachments(processed);
      setError(null);
    } catch (fileError) {
      setAttachments([]);
      setError(fileError instanceof Error ? fileError.message : "Import impossible.");
    }
  }

  return (
    <div className="max-w-6xl mx-auto pb-24 space-y-8 animate-in fade-in duration-700">
      <Script src="https://cdn.botpress.cloud/webchat/v3.6/inject.js" strategy="afterInteractive" />
      <Script src="https://files.bpcontent.cloud/2026/03/30/13/20260330135905-MDUMO8ID.js" strategy="afterInteractive" />

      <header className="glass rounded-[2.2rem] p-8 border-white/20 bg-white/10 backdrop-blur-3xl shadow-2xl shadow-primary/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <span className="inline-flex px-4 py-1.5 rounded-full bg-white/20 border border-white/25 text-[10px] font-black uppercase tracking-[0.26em]">
              Liquid Glass Quiz Lab
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-space font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan">
              QUIZ IA ✨
            </h1>
            <p className="opacity-70 mt-2 font-medium max-w-2xl">
              Génère des sessions personnalisées pour les révisions, et adapte automatiquement le niveau selon le mode d&apos;apprentissage.
            </p>
          </div>
          <div className="glass rounded-3xl border-white/15 bg-white/10 p-5 min-w-[260px]">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50">Mode rapide</p>
            <p className="text-3xl font-space font-black mt-2">{mode}</p>
            <p className="text-xs opacity-60 mt-1">{questionCount} questions • {classLevel}</p>
            <p className="text-[10px] opacity-50 mt-1">Modèle par défaut : {selectedModelLabel}</p>
          </div>
        </div>
      </header>

      <section className="glass rounded-[2rem] border-white/20 bg-white/10 backdrop-blur-3xl p-6 md:p-8">
        <form className="grid lg:grid-cols-2 gap-6" onSubmit={handleGenerate}>
          <div className="space-y-2 lg:col-span-2">
            <label htmlFor="topic" className="text-xs uppercase font-black tracking-[0.2em] opacity-60">Sujet du quiz</label>
            <input
              id="topic"
              required
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
              placeholder="Ex: Révolution française, équations, SVT cellule..."
              className="w-full h-12 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl px-4 text-sm outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
            />
          </div>

          <div className="space-y-2 lg:col-span-2">
            <label htmlFor="attachments" className="text-xs uppercase font-black tracking-[0.2em] opacity-60">Importer un support (images / PDF)</label>
            <input
              id="attachments"
              type="file"
              accept="image/*,application/pdf"
              multiple
              onChange={(event) => void handleFileImport(event.target.files)}
              className="w-full h-12 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl px-4 text-sm outline-none file:mr-4 file:border-0 file:bg-primary/15 file:text-primary file:px-3 file:py-2 file:rounded-xl"
            />
            <p className="text-[10px] uppercase tracking-widest opacity-50">3 fichiers max, 5MB max par fichier.</p>
            {attachments.length > 0 && (
              <div className="glass rounded-2xl p-3 border border-white/15 text-xs">
                {attachments.map((file) => (
                  <div key={file.name} className="flex items-center justify-between py-1">
                    <span className="font-bold">{file.name}</span>
                    <span className="opacity-60">{file.mimeType}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="mode" className="text-xs uppercase font-black tracking-[0.2em] opacity-60">Mode d&apos;apprentissage</label>
            <select
              id="mode"
              value={mode}
              onChange={(event) => setMode(event.target.value)}
              className="w-full h-12 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl px-4 text-sm outline-none"
            >
              {modes.map((entry) => (
                <option key={entry} value={entry}>{entry}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="class" className="text-xs uppercase font-black tracking-[0.2em] opacity-60">Niveau</label>
            <select
              id="class"
              value={classLevel}
              onChange={(event) => setClassLevel(event.target.value)}
              className="w-full h-12 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl px-4 text-sm outline-none"
            >
              {levels.map((entry) => (
                <option key={entry} value={entry}>{entry}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="count" className="text-xs uppercase font-black tracking-[0.2em] opacity-60">Nombre de questions</label>
            <input
              id="count"
              type="number"
              min={3}
              max={15}
              value={questionCount}
              onChange={(event) => setQuestionCount(Number(event.target.value))}
              className="w-full h-12 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl px-4 text-sm outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs uppercase font-black tracking-[0.2em] opacity-60">Modèle IA</label>
            <div className="w-full h-12 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-xl px-4 text-sm flex items-center justify-between">
              <span>{selectedModelLabel}</span>
              <Link href="/reglages" className="text-[10px] uppercase tracking-widest font-black text-primary hover:underline">
                Modifier
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 flex items-center gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-8 h-12 rounded-2xl bg-gradient-to-r from-primary to-violet text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-primary/20 disabled:opacity-50"
            >
              {loading ? "Génération..." : "Générer le quiz"}
            </button>
            <Link href="/modes" className="h-12 px-6 rounded-2xl border border-white/20 bg-white/10 flex items-center text-xs font-black uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity">
              Retour aux modes
            </Link>
          </div>
        </form>

        {error && <p className="mt-5 text-sm text-rose-600 font-bold">{error}</p>}
      </section>

      {quiz && (
        <section className="glass rounded-[2rem] border-white/20 bg-white/10 backdrop-blur-3xl p-6 md:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-3xl font-space font-black tracking-tight">{quiz.title}</h2>
              <p className="opacity-60 text-sm mt-1">{quiz.mode} • {quiz.classLevel} • {quiz.questions.length} questions</p>
            </div>
          </div>

          <div className="space-y-4">
            {quiz.questions.map((question, index) => (
              <article key={`${question.question}-${index}`} className="rounded-2xl border border-white/20 bg-white/10 p-5 space-y-3">
                <h3 className="font-bold text-lg">{index + 1}. {question.question}</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={`${option}-${optionIndex}`}
                      className={`rounded-xl px-3 py-2 text-sm ${
                        optionIndex === question.answerIndex
                          ? "bg-emerald-500/20 border border-emerald-500/40"
                          : "bg-white/10 border border-white/15"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
                <p className="text-xs opacity-70">💡 {question.explanation}</p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
