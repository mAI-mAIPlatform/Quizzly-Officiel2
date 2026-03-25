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
        <div className="glass p-8 rounded-[2.5rem] space-y-6 bg-white/50 backdrop-blur-2xl border-white/20 shadow-xl">
          <h2 className="text-xl font-space font-black uppercase italic tracking-tight flex items-center gap-3 text-primary">
             📅 Cette Semaine
          </h2>
          <div className="flex justify-between items-center gap-2">
            {last7Days.map((date, i) => {
              const played = isDayPlayed(date);
              const isToday = date.toISOString().split('T')[0] === today.toISOString().split('T')[0];
              
              return (
                <div key={i} className="flex flex-col items-center gap-3 group">
                  <div className={`text-[10px] font-black uppercase transition-opacity ${isToday ? 'opacity-100 text-primary' : 'opacity-40 group-hover:opacity-60'}`}>
                    {date.toLocaleDateString('fr-FR', { weekday: 'short' }).replace('.', '')}
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    initial={played ? { scale: 0 } : {}}
                    animate={played ? { scale: 1 } : {}}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl border-2 transition-all duration-300 ${
                      played 
                        ? 'bg-gradient-to-br from-orange-400 to-orange-600 border-orange-300 text-white shadow-lg shadow-orange-500/40 scale-105' 
                        : isToday 
                          ? 'border-primary border-dashed bg-primary/5 shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]' 
                          : 'border-white/10 bg-white/5 opacity-30 hover:opacity-50'
                    }`}
                  >
                    {played ? '⚡' : isToday ? '📍' : ''}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 30 Days Reward Progress */}
        <div className="glass p-8 rounded-[2.5rem] bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/20 space-y-5 shadow-lg">
           <h3 className="font-space font-black uppercase text-sm flex items-center gap-2 text-amber-600">
             🎁 RÉCOMPENSE MENSUELLE
           </h3>
           <div className="flex items-center justify-between gap-4">
              <div className="flex-1 h-4 bg-amber-500/10 rounded-full overflow-hidden border border-amber-500/20 p-0.5">
                 <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(progress.streak % 30) / 30 * 100}%` }}
                    className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-600 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                 />
              </div>
              <span className="text-xs font-black text-amber-700">{progress.streak % 30}/30j</span>
           </div>
           <p className="text-[11px] leading-relaxed font-bold opacity-70">
              <MarkdownText text="Chaque palier de **30 jours** t'offre **1 Étoile ⭐** et **5 Gemmes 💎** bonus !" />
           </p>
        </div>

        {/* Info Box */}
        <div className="glass p-8 rounded-[2.5rem] bg-violet/5 border-violet/20 space-y-4 shadow-lg">
           <h3 className="font-space font-black uppercase text-sm flex items-center gap-2 text-violet">
             💡 LE SAVAIS-TU ?
           </h3>
           <div className="text-xs leading-relaxed opacity-80 space-y-1">
             <MarkdownText text="Une série de **7 jours** te donne un **Coffre Mythique** gratuit ! 📦" />
             <MarkdownText text="Si tu n'as plus de **Boucliers**, ta série retombera à zéro si tu manques un jour. ⚠️" />
           </div>
           <div className="flex items-center gap-3 pt-2">
              <div className="p-3 bg-slate-500/10 rounded-2xl text-2xl shadow-inner">🛡️</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase opacity-40 tracking-widest">Protection Automatique</span>
                <span className="text-sm font-black text-foreground">{progress.shields} Boucliers disponibles</span>
              </div>
           </div>
        </div>

        {/* Footer info removed as requested */}
      </div>
    </div>
  );
}

function MarkdownText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="text-primary font-black">{part.slice(2, -2)}</strong>;
        }
        return part;
      })}
    </span>
  );
}
