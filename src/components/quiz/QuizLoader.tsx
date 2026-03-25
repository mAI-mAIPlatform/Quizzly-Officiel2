"use client";

import { useProgress } from "@/context/ProgressContext";
import QuizEngine from "@/components/quiz/QuizEngine";
import Link from "next/link";

interface QuizLoaderProps {
  quizData: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  niveau: string;
  matiereId: string;
  chapitre: string;
}

export default function QuizLoader({ quizData, niveau, matiereId, chapitre }: QuizLoaderProps) {
  const { progress } = useProgress();

  if (progress.stars <= 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 glass rounded-3xl text-center gap-6 animate-in zoom-in-95">
        <div className="text-8xl">⭐</div>
        <h2 className="text-3xl font-bold font-space text-rose">Plus d&apos;Étoiles !</h2>
        <p className="opacity-70 text-lg">
          Tu as utilisé toute ton énergie. Patiente un peu que tes étoiles se rechargent ou fais un tour dans la boutique !
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
