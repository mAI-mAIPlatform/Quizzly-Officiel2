"use client";

import { useProgress } from "@/context/ProgressContext";
import QuizEngine from "@/components/quiz/QuizEngine";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuizLoader({ quizData, niveau, matiereId, chapitre }: any) {
  const { progress } = useProgress();

  if (progress.neurones <= 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 glass rounded-3xl text-center gap-6 animate-in zoom-in-95">
        <div className="text-8xl">🧠</div>
        <h2 className="text-3xl font-bold font-space text-rose">Plus de Neurones !</h2>
        <p className="opacity-70 text-lg">
          Ton cerveau a besoin de repos. Attends un peu que tes neurones se rechargent ou achètes-en dans la boutique !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link href="/boutique" className="flex-1 py-4 bg-cyan text-white font-bold rounded-2xl shadow-lg shadow-cyan/20 hover:scale-105 transition-transform">
            Aller à la boutique 🛒
          </Link>
          <Link href={`/matiere/${matiereId}-${niveau}/${chapitre}`} className="flex-1 py-4 glass font-bold rounded-2xl hover:bg-white/10 transition-colors">
            Plus tard 👋
          </Link>
        </div>
      </div>
    );
  }

  return (
    <QuizEngine quiz={quizData} backUrl={`/matiere/${matiereId}-${niveau}/${chapitre}`} matiereId={matiereId} />
  );
}
