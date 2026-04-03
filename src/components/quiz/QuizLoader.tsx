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
  
  // v1.3.0 - Gestion des quiz verrouillés
  const quizIdNum = parseInt(quizData.id?.toString() || "0");
  const isLocked = quizIdNum >= 901 && quizIdNum <= 1000 && !progress.unlockedQuizIds.includes(quizData.id?.toString());

  if (isLocked) {
    return (
      <div className="flex flex-col items-center justify-center p-8 glass rounded-[2.5rem] text-center gap-8 animate-in slide-in-from-bottom-10 border-amber-500/20 shadow-2xl shadow-amber-500/10">
        <div className="w-24 h-24 rounded-full bg-amber-500/20 flex items-center justify-center text-5xl shadow-inner border-2 border-amber-500/30">
          🔒
        </div>
        <div>
          <h2 className="text-3xl font-black font-space text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
            Contenu Premium
          </h2>
          <p className="opacity-70 text-lg mt-3 max-w-sm">
            Ce pack de quiz est verrouillé. Obtiens-le dans la boutique contre quelques gemmes !
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link href="/boutique" className="group relative overflow-hidden py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">
            <span className="relative z-10">Débloquer en Boutique 🛒</span>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 group-hover:h-full transition-all duration-300" />
          </Link>
          <Link href={`/matiere/${matiereId}-${niveau}/${chapitre}`} className="py-4 glass font-bold rounded-2xl hover:bg-white/10 transition-colors uppercase text-[10px] tracking-widest">
            Plus tard 👋
          </Link>
        </div>
      </div>
    );
  }

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
