"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
 
/* eslint-disable react-hooks/set-state-in-effect */
 
import { useProgress } from "@/context/ProgressContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import QuizEngine from "@/components/quiz/QuizEngine";
import { motion } from "framer-motion";

import { getRankedQuizData } from "@/data/ranked/allQuizzes";

export default function RankedQuizPage() {
  const params = useParams();
  const router = useRouter();
  const { addRankedPoints, markRankedQuizCompleted, progress } = useProgress();
  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    if (params.class && params.id) {
       setQuiz(getRankedQuizData(params.class as string, params.id as string));
    }
  }, [params.class, params.id]);

  if (!quiz) return <div className="min-h-screen flex items-center justify-center font-black italic">CHARGEMENT DU DÉFI... ⚔️</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 relative">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-80 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 top-40 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex justify-between items-center bg-primary/5 p-6 rounded-3xl border border-primary/10 shadow-2xl shadow-primary/5 backdrop-blur-xl"
      >
         <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
              ⚔️ Ranked Arena
            </div>
            <h1 className="text-3xl font-space font-black italic tracking-tighter uppercase text-primary leading-none">{quiz.titre}</h1>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-1">Mode Classé • {params.class} • Points à gagner</p>
         </div>
         <div className="text-right">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-2xl font-black text-primary"
            >
              {progress.rankedRank}
            </motion.div>
            <div className="text-[9px] font-bold opacity-40 uppercase tracking-widest">Ton Rang</div>
         </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="glass p-10 min-h-[600px] border-primary/20 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_50%)] opacity-80" />
        <QuizEngine 
          quiz={quiz} 
          backUrl="/classe" 
          matiereId="ranked"
          quizType="ranked"
          onComplete={(score: number) => {
            const points = score * 10;
            addRankedPoints(points);
            markRankedQuizCompleted(quiz.id);
            // Confetti and redirect happened in engine or we can wrap it
          }}
        />
      </motion.div>
    </div>
  );
}
