"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useDeferredValue, useMemo, useState } from "react";
import { normalizeText } from "@/lib/quizzly-utils";
import type { QuizCatalogEntry } from "@/lib/quizzly-quiz-catalog";

type ChapterQuiz = {
  id: string;
  titre: string;
  questions: Array<Record<string, unknown>>;
  partie: number;
  href: string;
};

type QuizCatalogExplorerProps = {
  currentQuizzes: ChapterQuiz[];
  globalCatalog: QuizCatalogEntry[];
  chapterTitle: string;
  chapterSubtitle: string;
};

function ChapterQuizCard({ quiz, index }: { quiz: ChapterQuiz; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-center w-full ${isLeft ? "justify-start md:pr-[50%]" : "justify-end md:pl-[50%]"}`}>
      <div className="relative group mx-auto md:mx-0">
        <div className={`absolute -top-4 ${isLeft ? "-right-4" : "-left-4"} w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black z-20 shadow-lg border-2 border-white/20`}>
          {index + 1}
        </div>

        <Link href={quiz.href}>
          <motion.div
            whileHover={{ scale: 1.08, rotate: isLeft ? -4 : 4 }}
            whileTap={{ scale: 0.96 }}
            className="relative flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 rounded-full bg-white border-4 border-emerald-100 shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-50" />
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl -mr-12 -mt-12" />
            <div className="text-4xl md:text-5xl mb-1 relative z-10 filter drop-shadow-sm">⭐</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-emerald-700 relative z-10 px-4 text-center leading-tight">
              {quiz.titre}
            </div>
            <div className="absolute -bottom-1 bg-cyan-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg">
              {quiz.questions.length} QUESTIONS
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default function QuizCatalogExplorer({
  currentQuizzes,
  globalCatalog,
  chapterTitle,
  chapterSubtitle,
}: QuizCatalogExplorerProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const normalizedQuery = useMemo(() => normalizeText(deferredQuery), [deferredQuery]);

  const matchedCatalog = useMemo(() => {
    if (!normalizedQuery) return [];
    return globalCatalog.filter((quiz) => quiz.searchText.includes(normalizedQuery)).slice(0, 60);
  }, [globalCatalog, normalizedQuery]);

  const groupedCurrentQuizzes = useMemo(() => {
    return [1, 2, 3]
      .map((partieNum) => ({
        partieNum,
        quizzes: currentQuizzes.filter((quiz) => quiz.partie === partieNum),
      }))
      .filter((entry) => entry.quizzes.length > 0);
  }, [currentQuizzes]);

  const hasSearch = normalizedQuery.length > 0;

  return (
    <section className="mt-8 space-y-8 pb-20">
      <div className="glass p-6 md:p-8 border-primary/10 bg-white/60 shadow-xl space-y-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.35em] opacity-40">Recherche globale</div>
            <h2 className="text-2xl md:text-3xl font-space font-black uppercase tracking-tighter italic text-primary">
              Trouve ton quiz
            </h2>
            <p className="text-sm opacity-60 mt-2 max-w-2xl">
              Recherche dans tout le catalogue Quizzly, puis ouvre directement le bon quiz, même s’il vit dans un autre mode.
            </p>
          </div>

          <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">
            {globalCatalog.length} quiz indexés
          </div>
        </div>

        <div className="relative">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Chercher un quiz, un chapitre, une matière, un mode..."
            className="w-full rounded-3xl border-2 border-primary/10 bg-background/80 px-5 py-4 font-semibold outline-none transition-all focus:border-primary/30 focus:ring-4 focus:ring-primary/10"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-foreground/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest hover:bg-foreground/10"
            >
              Effacer
            </button>
          )}
        </div>
      </div>

      {hasSearch ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 px-2">
            <div className="text-sm font-black uppercase tracking-widest opacity-50">
              {matchedCatalog.length} résultat(s)
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-primary/50">
              Recherche active dans tout Quizzly
            </div>
          </div>

          {matchedCatalog.length === 0 ? (
            <div className="glass p-10 text-center rounded-[2rem] border-primary/10">
              <div className="text-5xl mb-4">🔎</div>
              <p className="font-black uppercase tracking-widest">Aucun quiz trouvé</p>
              <p className="text-sm opacity-60 mt-2">Essaie un titre, une matière, un chapitre ou un mode différent.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {matchedCatalog.map((entry, index) => (
                  <motion.article
                    key={entry.id}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22, delay: index * 0.02 }}
                    className="glass p-5 rounded-[1.75rem] border-primary/10 flex flex-col gap-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${entry.accentClass} flex items-center justify-center text-white text-xl shadow-lg shrink-0`}>
                        {entry.source === "Classé" ? "⚔️" : entry.source === "Survie" ? "💀" : entry.source === "Blitz" ? "⚡" : entry.source === "Visuel" ? "🖼️" : entry.source === "Vrai/Faux" ? "⚖️" : "⭐"}
                      </div>
                      <div className="min-w-0">
                        <div className="font-black uppercase tracking-tight text-sm leading-tight">{entry.title}</div>
                        <div className="text-[10px] uppercase tracking-widest opacity-45 mt-1">
                          {entry.source} • {entry.level || chapterTitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[9px] font-black uppercase tracking-widest">
                      {entry.subject && <span className="px-2 py-1 rounded-full bg-primary/10 text-primary">{entry.subject}</span>}
                      {entry.chapter && <span className="px-2 py-1 rounded-full bg-cyan/10 text-cyan">{entry.chapter}</span>}
                      <span className="px-2 py-1 rounded-full bg-foreground/5 opacity-70">{entry.questionCount} questions</span>
                    </div>

                    <Link href={entry.href} className="mt-auto inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-white font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all">
                      Ouvrir le quiz
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-16">
          <header className="glass p-8 relative overflow-hidden mx-4 sm:mx-0">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue/10 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="inline-block px-3 py-1 bg-foreground/5 rounded-md text-sm font-semibold mb-4 text-primary">
              {chapterSubtitle}
            </div>
            <h1 className="text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet">
              {chapterTitle}
            </h1>
            <p className="opacity-70 mt-3 text-lg">
              {currentQuizzes.length} quiz disponibles dans ce chapitre
            </p>
          </header>

          <section className="relative w-full pb-10">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400/40 via-cyan-400/40 to-transparent -translate-x-1/2 border-l-2 border-dashed border-emerald-500/20" />

            <div className="flex flex-col gap-16 relative z-10 pt-10">
              {groupedCurrentQuizzes.map(({ partieNum, quizzes }) => (
                <div key={`partie-${partieNum}`} className="flex flex-col gap-12">
                  <div className="flex items-center gap-4 px-4 sm:px-0">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                    <h2 className="text-xl font-black uppercase tracking-tighter text-primary/60">
                      Partie {partieNum}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
                  </div>

                  <div className="flex flex-col gap-24">
                    {quizzes.map((quiz, index) => (
                      <ChapterQuizCard
                        key={quiz.id}
                        quiz={quiz}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
