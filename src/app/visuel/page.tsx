"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import QuizEngine from "@/components/quiz/QuizEngine";
import { allVisuelQuizzes } from "@/data/visuel/allVisuelQuizzes";
import { useSearchParams } from "next/navigation";

interface Quiz {
  id: string;
  titre: string;
  questions: unknown[];
}

export default function VisuelPage() {
  const searchParams = useSearchParams();
  const [manualQuiz, setManualQuiz] = useState<Quiz | null>(null);

  const quizFromUrl = (() => {
    const quizId = searchParams.get("quiz");
    if (!quizId) return null;
    return allVisuelQuizzes.find((quiz) => quiz.id === quizId) ?? null;
  })();

  const currentQuiz = manualQuiz ?? quizFromUrl;

  const startQuiz = (quiz: Quiz) => {
    setManualQuiz(quiz);
  };

  if (currentQuiz) {
    return (
      <div className="max-w-5xl mx-auto py-6 px-4 animate-in fade-in zoom-in duration-500">
        <div className="glass p-8 rounded-[2rem] border-rose-500/20 shadow-2xl relative bg-white/40">
           <QuizEngine 
              quiz={currentQuiz} 
              backUrl="/modes" 
              matiereId="visuel"
              quizType="visuel"
              onComplete={(finalScore) => {
                 console.log("Visuel complete", finalScore);
              }}
           />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20 px-4 md:px-8">
      <header className="text-center space-y-4 pt-10">
        <h1 className="text-5xl md:text-7xl font-space font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-500 drop-shadow-2xl uppercase">
          MODE VISUEL 👁️
        </h1>
        <p className="opacity-70 font-black uppercase tracking-[0.2em] text-xs md:text-sm">
          Un mot vaut-il vraiment mille images ?
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        {allVisuelQuizzes.map((quiz, idx) => (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <button
              onClick={() => startQuiz(quiz)}
              className="w-full h-full glass flex flex-col items-center justify-between p-6 rounded-3xl border-rose-500/20 hover:border-rose-500 hover:shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 transition-all group bg-gradient-to-t from-white to-rose-50/50"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                🖼️
              </div>
              <span className="font-space font-bold text-center text-slate-800 flex-1 flex items-center">
                {quiz.titre}
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-500/70 mt-4 bg-rose-500/10 px-3 py-1 rounded-full">
                5 Questions
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16 pb-8">
        <Link href="/modes" className="glass px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg">
          ← Retour
        </Link>
      </div>
    </div>
  );
}
