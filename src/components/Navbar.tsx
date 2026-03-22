/* eslint-disable @typescript-eslint/no-unused-vars */
// v1.1.0 - Masque la navbar dans le mode play pour éviter les superpositions avec les headers de quiz
"use client";

import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { progress } = useProgress();
  const pathname = usePathname();

  if (pathname.includes('/play/') || pathname.includes('/quiz/')) {
    return null;
  }

  return (
    <header className="h-20 glass border-b-0 md:border-b flex items-center justify-between px-6 z-40 sticky top-0 rounded-none w-full bg-background/80 backdrop-blur-xl">
      <div className="font-space font-bold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet md:hidden">
        Quizzly
      </div>
      
      <div className="hidden md:flex flex-1">
        {/* Barre de recherche (si besoin plus tard) */}
        <div className="w-96 h-10 rounded-full bg-foreground/5 p-4 flex items-center text-sm opacity-50 font-medium">Rechercher une matière...</div>
      </div>

      <div className="flex items-center gap-4">
        {/* Neurones */}
        <Link href="/boutique" className="flex items-center gap-2 font-black text-rose bg-rose/10 px-4 py-2 rounded-2xl border border-rose/10 shadow-sm cursor-pointer hover:scale-105 transition-all">
          <span className="text-xl">🧠</span> {progress.neurones}/5
        </Link>

        {/* Streak */}
        <div className="flex items-center gap-2 font-black text-orange-500 bg-orange-500/10 px-4 py-2 rounded-2xl border border-orange-500/10 shadow-sm">
          <span className="text-xl">🔥</span> {progress.streak}j
        </div>
        
        {/* Cristaux -> Boutique */}
        <Link href="/boutique" className="flex items-center gap-2 font-black text-cyan bg-cyan/10 px-4 py-2 rounded-2xl border border-cyan/10 hover:scale-105 transition-all shadow-sm">
          <span className="text-xl">💎</span> {progress.crystals}
        </Link>

        {/* Profil */}
        <Link href="/profil" className="ml-2 w-10 h-10 rounded-xl bg-gradient-to-tr from-violet/20 to-primary/20 border-2 border-primary/20 relative hover:scale-110 transition-all flex items-center justify-center text-xl shadow-lg group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
          {progress.avatar}
          <span className="absolute bottom-0 right-0 bg-primary text-white text-[8px] font-black px-1 rounded-tl-lg border-t border-l border-white/20">
            {progress.level}
          </span>
        </Link>
      </div>

    </header>
  );
}
