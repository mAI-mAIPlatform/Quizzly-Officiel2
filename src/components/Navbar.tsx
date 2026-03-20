"use client";

import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { progress } = useProgress();

  return (
    <header className="h-20 glass border-b-0 md:border-b flex items-center justify-between px-6 z-40 sticky top-0 rounded-none w-full">
      <div className="font-space font-bold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet md:hidden">
        Quizzly
      </div>
      
      <div className="hidden md:flex flex-1">
        {/* Barre de recherche (si besoin plus tard) */}
        <div className="w-96 h-10 rounded-full bg-foreground/5 p-4 flex items-center text-sm opacity-50 font-medium">Rechercher une matière...</div>
      </div>

      <div className="flex items-center gap-4 cursor-pointer">
        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Neurones */}
        <div className="flex items-center gap-2 font-bold text-rose bg-rose/10 px-4 py-2 rounded-full border border-rose/20">
          <span className="text-xl">🧠</span> {progress.neurones}/5
        </div>

        {/* Streak */}
        <div className="flex items-center gap-2 font-bold text-orange-400 bg-orange-400/10 px-4 py-2 rounded-full border border-orange-400/20">
          <span className="text-xl">🔥</span> {progress.streak}
        </div>
        
        {/* Monnaie (Cristaux) -> Lien Boutique */}
        <Link href="/boutique" className="flex items-center gap-2 font-bold text-cyan bg-cyan/10 px-4 py-2 rounded-full border border-cyan/20 hover:scale-105 transition-transform">
          <span className="text-xl">💎</span> {progress.crystals}
        </Link>
        
        {/* Profil Mini */}
        <Link href="/profil" className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet/20 to-primary/20 ml-2 border-2 border-primary/30 relative hover:scale-110 transition-all flex items-center justify-center text-xl shadow-lg">
          {progress.avatar}
          <span className="absolute -bottom-1 -right-1 bg-background text-[8px] font-black px-1.5 py-0.5 rounded-full border border-primary/30 text-primary shadow-sm">
            L{progress.level}
          </span>
        </Link>
      </div>
    </header>
  );
}
