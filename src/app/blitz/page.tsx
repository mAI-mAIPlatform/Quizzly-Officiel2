"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import QuizEngine from "@/components/quiz/QuizEngine";
import { allBlitzQuizzes } from "@/data/blitz/allBlitzQuizzes";

export default function BlitzPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);

  const startBlitz = () => {
    // Pick a random quiz from the pool of 20
    const randomIndex = Math.floor(Math.random() * allBlitzQuizzes.length);
    setCurrentQuiz(allBlitzQuizzes[randomIndex]);
    setIsPlaying(true);
  };

  if (isPlaying && currentQuiz) {
    return (
      <div className="max-w-5xl mx-auto py-6 px-4 animate-in fade-in zoom-in duration-500">
        <div className="glass p-8 rounded-[2rem] border-cyan-500/20 shadow-2xl relative bg-white/40">
           <QuizEngine 
              quiz={currentQuiz} 
              backUrl="/modes" 
              matiereId="blitz"
              quizType="blitz"
              onComplete={(finalScore) => {
                 console.log("Blitz complete", finalScore);
              }}
           />
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="text-center space-y-4">
        <h1 className="text-7xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-2xl uppercase">
          BLITZ ⚡
        </h1>
        <p className="opacity-70 font-black uppercase tracking-[0.3em] text-xs">Rapide. Intense. Prêt en 5 minutes.</p>
      </header>

      <div className="glass p-12 text-center rounded-[3xl] border-cyan-500/10 bg-gradient-to-br from-white to-cyan-50/20 shadow-2xl">
        <div className="w-32 h-32 mx-auto rounded-full bg-cyan-100 flex items-center justify-center text-6xl mb-8 animate-pulse">
            ⚡
        </div>
        <h2 className="text-2xl font-space font-black mb-4">Préparation de ta révision express...</h2>
        <p className="max-w-md mx-auto opacity-60 text-sm font-medium leading-relaxed mb-10">
          Ce mode est conçu pour tester ta rapidité pure. Moins de temps pour réfléchir, plus d'instinct. Parfait pour réviser avant un cours !
        </p>

        <button 
          onClick={startBlitz}
          className="px-12 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
        >
          LANCER LE CHRONO ⏱️
        </button>
      </div>

      <Link href="/modes" className="block text-center text-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
        ← Retour aux modes
      </Link>
    </div>
  );
}
