"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
 
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
 
/* eslint-disable react-hooks/set-state-in-effect */
 
import { useProgress } from "@/context/ProgressContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import QuizEngine from "@/components/quiz/QuizEngine";

import { getSurvivalQuizData } from "@/data/survie/allSurvivalQuizzes";

export default function SurvivalQuizPage() {
  const params = useParams();
  const { updateSurvivalScore, addXP } = useProgress();
  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    if (params.id) {
       setQuiz(getSurvivalQuizData(params.id as string));
    }
  }, [params.id]);

  if (!quiz) return <div className="min-h-screen flex items-center justify-center font-black italic">PRÉPARATION DE L'ARÈNE... 🔥💀</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="mb-10 flex justify-between items-end bg-rose-600 p-8 rounded-3xl text-white shadow-2xl">
         <div>
            <h1 className="text-4xl font-space font-black italic tracking-tighter uppercase leading-none">{quiz.titre}</h1>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mt-2">Mode Survie • Mort Subite • XP Max</p>
         </div>
         <div className="text-right flex flex-col items-end">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl animate-pulse">💀</div>
         </div>
      </div>

      <div className="glass p-10 min-h-[600px] border-rose-500/20 shadow-2xl relative overflow-hidden bg-white/40">
        <QuizEngine 
          quiz={quiz} 
          backUrl="/survie" 
          matiereId="survival"
          isSurvival={true}
          onComplete={(score: number) => {
            updateSurvivalScore(score);
            // XP is handled inside QuizEngine usually, but we ensure it persists
          }}
        />
      </div>
    </div>
  );
}
