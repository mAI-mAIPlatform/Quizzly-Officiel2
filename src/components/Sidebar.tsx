"use client";

import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';

export default function Sidebar({ className = "" }: { className?: string }) {
  const { progress } = useProgress();
  const passProgress = (progress.xp % 200) / 2;

  return (
    <aside className={`flex-col glass m-4 mr-0 p-6 ${className}`}>
      <div className="font-space font-bold text-3xl mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan tracking-tight">
        Quizzly.
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <Link href="/" className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold transition-colors">
          <span className="text-xl">📊</span> Tableau de bord
        </Link>
        <Link href="/matieres" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">📚</span> Matières
        </Link>
        <Link href="/quetes" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">🎯</span> Quêtes
        </Link>
        <Link href="/classement" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">🏆</span> Classement
        </Link>
        <Link href="/boutique" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">🛍️</span> Boutique
        </Link>
        <Link href="/profil" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">👤</span> Mon Profil
        </Link>
        <Link href="/reglages" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">⚙️</span> Réglages
        </Link>
      </nav>

      <div className="mt-auto">
        <Link href="/pass" className="block p-4 rounded-xl bg-gradient-to-br from-violet/20 to-primary/20 border border-violet/20 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-violet/5">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-bold text-sm text-violet drop-shadow-sm">Quizzly Pass</h4>
            <span className="text-xs font-bold text-violet bg-violet/10 px-2 py-0.5 rounded-full">Lvl {progress.passTier}</span>
          </div>
          <p className="text-xs opacity-70 mb-3">Saison 1 en cours</p>
          <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
            <div className="h-full bg-violet rounded-full transition-all duration-1000" style={{ width: `${passProgress}%` }}></div>
          </div>
        </Link>
      </div>
    </aside>
  );
}
