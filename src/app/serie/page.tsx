"use client";

import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SeriePage() {
  const { progress } = useProgress();
  
  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(today.getDate() - (6 - i));
    return d;
  });

  const isDayPlayed = (date: Date) => {
    const iso = date.toISOString().split('T')[0];
    return progress.lastPlayDate === iso || progress.streakDays?.includes(iso);
  };

  return (
    <div className="min-h-screen bg-background pb-24 px-6 pt-10">
      <div className="max-w-md mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition-all text-2xl">
            ←
          </Link>
          <h1 className="text-2xl font-space font-black tracking-tighter uppercase italic">Ma Série 🔥</h1>
          <div className="w-12"></div>
        </div>

        {/* Big Flame Card */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass p-10 rounded-[3rem] border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent flex flex-col items-center text-center relative overflow-hidden ring-1 ring-orange-500/10"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="text-8xl mb-4 drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]"
          >
            🔥
          </motion.div>
          <div className="text-6xl font-space font-black text-orange-500 mb-2">{progress.streak}</div>
          <div className="text-sm font-black uppercase tracking-[0.3em] opacity-40">Jours de Série</div>
          
          <div className="mt-8 p-4 bg-orange-500/10 rounded-2xl border border-orange-500/10 text-xs font-bold text-orange-400">
            {progress.streak >= 7 ? "Incroyable ! Tu es une légende ! 🏆" : "Continue comme ça pour débloquer des bonus ! ✨"}
          </div>
        </motion.div>

        {/* Calendar View */}
        <div className="glass p-8 rounded-[2.5rem] space-y-6">
          <h2 className="text-lg font-space font-black uppercase italic tracking-tight flex items-center gap-3">
             📅 Cette Semaine
          </h2>
          <div className="flex justify-between items-center gap-2">
            {last7Days.map((date, i) => {
              const played = isDayPlayed(date);
              const isToday = date.toISOString().split('T')[0] === today.toISOString().split('T')[0];
              
              return (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="text-[10px] font-black uppercase opacity-40">
                    {date.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', '')}
                  </div>
                  <motion.div 
                    initial={played ? { scale: 0 } : {}}
                    animate={played ? { scale: 1 } : {}}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg border-2 transition-all ${
                      played 
                        ? 'bg-orange-500 border-orange-400 text-white shadow-lg shadow-orange-500/20' 
                        : isToday ? 'border-primary border-dashed opacity-100' : 'border-white/10 opacity-30'
                    }`}
                  >
                    {played ? '⚡' : ''}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 30 Days Reward Progress */}
        <div className="glass p-8 rounded-[2.5rem] bg-amber-500/5 border-amber-500/10 space-y-5">
           <h3 className="font-space font-black uppercase text-sm flex items-center gap-2 text-amber-600">
             🎁 RÉCOMPENSE MENSUELLE
           </h3>
           <div className="flex items-center justify-between gap-4">
              <div className="flex-1 h-3 bg-amber-500/10 rounded-full overflow-hidden border border-amber-500/10">
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(progress.streak % 30) / 30 * 100}%` }}
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
                 />
              </div>
              <span className="text-xs font-black opacity-40">{progress.streak % 30}/30j</span>
           </div>
           <p className="text-[10px] leading-relaxed font-bold opacity-60">
             Chaque palier de **30 jours** t&apos;offre **1 Étoile ⭐** et **5 Gemmes 💎** bonus !
           </p>
        </div>

        {/* Info Box */}
        <div className="glass p-8 rounded-[2.5rem] bg-violet/5 border-violet/20 space-y-4">
           <h3 className="font-space font-black uppercase text-sm flex items-center gap-2">
             💡 LE SAVAIS-TU ?
           </h3>
           <p className="text-xs leading-relaxed opacity-70">
             Une série de **7 jours** te donne un **Coffre Mythique** gratuit ! 📦
             Si tu n&apos;as plus de **Boucliers**, ta série retombera à zéro si tu manques un jour. ⚠️
           </p>
           <div className="flex items-center gap-3 pt-2">
              <span className="p-2.5 bg-slate-500/10 rounded-xl text-lg">🛡️</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase opacity-40">Protection</span>
                <span className="text-xs font-black">{progress.shields} Boucliers restants</span>
              </div>
           </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-[10px] font-black uppercase opacity-30 tracking-widest">
           v1.0.1 — Étoiles & Ligues activées 🚀
        </p>
      </div>
    </div>
  );
}
