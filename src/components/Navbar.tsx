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
        <div className="w-96 h-10 rounded-full bg-foreground/5 p-4 flex items-center text-sm opacity-50 font-medium">Rechercher un quiz...</div>
      </div>

      <div className="flex items-center gap-3">
        {/* Profil - Avatar en premier (v0.8.0) */}
        <Link href="/profil" className="w-10 h-10 rounded-2xl bg-primary/10 border-2 border-primary/20 relative hover:scale-110 transition-all flex items-center justify-center text-xl shadow-lg group cursor-pointer overflow-hidden backdrop-blur-md">
          {progress.avatar}
          <span className="absolute bottom-0 right-0 bg-primary text-white text-[8px] font-black px-1.5 py-0.5 rounded-tl-lg border-t border-l border-white/20">
            {progress.level}
          </span>
        </Link>

        {/* Streak (Série) */}
        <Link href="/serie" className="flex items-center gap-2 font-black text-orange-500 bg-orange-500/5 px-4 py-2 rounded-2xl border border-orange-500/10 hover:bg-orange-500/10 transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.7,2.5c0,0-5.8,5.8-5.8,10.2c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C17.5,8.3,11.7,2.5,11.7,2.5z M11.7,16.5c-2.1,0-3.8-1.7-3.8-3.8c0-2,3.8-5.5,3.8-5.5s3.8,3.5,3.8,5.5C15.5,14.8,13.8,16.5,11.7,16.5z"/>
          </svg>
          <span className="text-sm">{progress.streak}j</span>
        </Link>

        {/* Neurones (Étoiles) */}
        <Link href="/boutique" className="flex items-center gap-2 font-black text-violet bg-violet/5 px-4 py-2 rounded-2xl border border-violet/10 hover:bg-violet/10 transition-all">
          <svg className="w-5 h-5 text-violet" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2L14.5,8.5L21.5,9L16.5,14L18,21L12,17.5L6,21L7.5,14L2.5,9L9.5,8.5L12,2Z"/>
          </svg>
          <span className="text-sm">{progress.stars}/5</span>
        </Link>

        {/* Diamants (Redimensionnés -30%) */}
        <Link href="/boutique" className="flex items-center gap-2 font-black text-cyan bg-cyan/5 px-3 py-1.5 rounded-2xl border border-cyan/10 hover:bg-cyan/10 transition-all scale-[0.7] md:scale-[0.8]">
          <svg className="w-6 h-6 text-cyan" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2L4.5,11L12,22L19.5,11L12,2Z M12,4.5L17.5,11L12,19.1L6.5,11L12,4.5Z"/>
          </svg>
          <span className="text-lg">{progress.crystals}</span>
        </Link>

        {/* Boosters (si actifs) */}
        {progress.activeBoosters.length > 0 && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-2 font-black text-primary bg-primary/5 px-3 py-1.5 rounded-2xl border border-primary/10 shadow-sm animate-pulse"
          >
            <span className="text-sm">⚡ x{progress.xpBoost} ({timeLeft}m)</span>
          </motion.div>
        )}

        {/* Réglages */}
        <Link href="/reglages" className="hidden md:flex w-10 h-10 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all items-center justify-center">
          <svg className="w-5 h-5 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        </Link>
      </div>

    </header>
  );
}
