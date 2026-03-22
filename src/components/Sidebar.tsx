/* eslint-disable @next/next/no-img-element */
// v1.1.0 - Harmonisation police Boutique et Social & Tribus
"use client";

import Link from 'next/link';
import { useProgress } from '@/context/ProgressContext';

export default function Sidebar({ className = "" }: { className?: string }) {
  const { progress } = useProgress();
  const passProgress = (progress.xp % 200) / 2;

  return (
    <aside className={`flex flex-col glass m-4 mr-0 p-6 h-[calc(100vh-2rem)] overflow-hidden ${className}`}>
      <div className="flex flex-col items-center mb-8 gap-4">
        {/* Profile Avatar - Only point of access to Profile */}
        <Link href="/profil" className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet/20 to-primary/20 border-2 border-primary/20 relative hover:scale-110 transition-all flex items-center justify-center text-3xl shadow-xl group cursor-pointer">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
          {progress.avatar}
          <span className="absolute -bottom-2 -right-2 bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-lg border-2 border-white shadow-lg">
            LVL {progress.level}
          </span>
        </Link>

        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 relative opacity-80">
             <img src="/images/logo.png" alt="Quizzly Logo" className="w-full h-full object-contain drop-shadow-lg" />
          </div>
          <div className="text-center">
            <div className="font-space font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan tracking-tighter italic">
              QUIZZLY
            </div>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 custom-scrollbar">
        <Link href="/" className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold transition-colors">
          <span className="text-xl">📊</span> Tableau de bord
        </Link>
        <Link href="/matieres" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">📚</span> Matières
        </Link>
        <Link href="/quetes" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">🎯</span> Quêtes
        </Link>
        <Link href="/profil" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100 italic font-black text-primary">
          <span className="text-xl">👤</span> Mon Profil
        </Link>
        <Link href="/classe" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100 italic font-black text-orange-500">
          <span className="text-xl">⚔️</span> Mode Classé
        </Link>
        <Link href="/survie" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100 italic font-black text-rose-500">
          <span className="text-xl">🔥</span> Mode Survie
        </Link>
        <Link href="/boutique" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">🛍️</span> Boutique
        </Link>
        <Link href="/social" className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-foreground/5 font-medium transition-colors opacity-80 hover:opacity-100">
          <span className="text-xl">🤝</span> Social & Tribus
        </Link>
      </nav>


      <div className="mt-6">
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
