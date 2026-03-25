"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { progress } = useProgress();
  const pathname = usePathname();
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      if (progress.activeBoosters.length > 0) {
        const ms = new Date(progress.activeBoosters[0].expiresAt).getTime() - Date.now();
        setTimeLeft(Math.max(0, Math.floor(ms / 60000)));
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [progress.activeBoosters]);

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
        <div className="flex items-center gap-2">
          <Link href="/boutique" className="flex items-center gap-2 font-black text-rose bg-rose/10 px-4 py-2 rounded-2xl border border-rose/10 shadow-sm cursor-pointer hover:scale-105 transition-all">
            <span className="text-xl">⭐</span> {progress.stars}/5
          </Link>
          
          {progress.activeBoosters.length > 0 && (
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2 font-black text-violet bg-violet/10 px-3 py-2 rounded-2xl border border-violet/10 shadow-sm animate-pulse"
            >
              <span className="text-lg">⚡</span>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase tracking-tighter">x{progress.xpBoost}</span>
                <span className="text-[8px] opacity-60">
                  {timeLeft}m
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Streak */}
        <Link href="/serie" className="flex items-center gap-2 font-black text-orange-500 bg-orange-500/10 px-4 py-2 rounded-2xl border border-orange-500/10 shadow-sm hover:scale-105 transition-all">
          <span className="text-xl">🔥</span> {progress.streak}j
        </Link>
        
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
