"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import QuizEngine from "@/components/quiz/QuizEngine";
import { allVraiFauxQuizzes } from "@/data/vrai_faux/allVraiFauxQuizzes";

export default function VraiFauxPage() {
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);

  const startQuiz = (quiz: any) => {
    setCurrentQuiz(quiz);
  };

  if (currentQuiz) {
    return (
      <div className="max-w-5xl mx-auto py-6 px-4 animate-in fade-in zoom-in duration-500">
        <div className="glass p-8 rounded-[2rem] border-emerald-500/20 shadow-2xl relative bg-white/40">
           <QuizEngine 
              quiz={currentQuiz} 
              backUrl="/modes" 
              matiereId="vrai-faux"
              quizType="vrai_faux"
              onComplete={(finalScore) => {
                 console.log("Vrai/Faux complete", finalScore);
              }}
           />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20 px-4 md:px-8">
      <header className="text-center space-y-4 pt-10">
        <h1 className="text-5xl md:text-7xl font-space font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 drop-shadow-2xl uppercase">
          VRAI OU FAUX ⚖️
        </h1>
        <p className="opacity-70 font-black uppercase tracking-[0.2em] text-xs md:text-sm">
          50% de chance. 100% de logique.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {allVraiFauxQuizzes.map((quiz, idx) => (
          <motion.div
            key={quiz.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <button
              onClick={() => startQuiz(quiz)}
              className="w-full aspect-square glass flex flex-col items-center justify-center p-4 rounded-3xl border-emerald-500/20 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all group bg-gradient-to-br from-white to-emerald-50/30"
            >
              <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">🤔</span>
              <span className="font-space font-bold text-lg text-slate-800">
                Séance {idx + 1}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mt-1">
                20 Questions
              </span>
            </button>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/modes" className="text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
          ← Retour aux modes
        </Link>
      </div>
    </div>
  );
}
