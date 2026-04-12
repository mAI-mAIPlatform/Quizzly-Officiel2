/* eslint-disable react/no-unescaped-entities */
"use client";

import { useProgress } from "@/context/ProgressContext";
import { } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SurvivalDashboard() {
  const { progress } = useProgress();

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden p-12 rounded-[3xl] bg-slate-900 text-white shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-transparent pointer-events-none"></div>
        <div className="z-10 space-y-4 text-center md:text-left">
          <h1 className="text-7xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400 drop-shadow-2xl">
            SURVIE 🔥💀
          </h1>
          <p className="opacity-70 font-black uppercase tracking-[0.3em] text-xs">Une seule erreur, et tout s'arrête. Es-tu prêt ?</p>
        </div>

        <div className="z-10 flex gap-10">
           <div className="text-center">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Record Personnel</div>
              <div className="text-6xl font-space font-black text-rose-500 tabular-nums">{progress.survivalHighScore}</div>
              <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Questions</div>
           </div>
           <div className="w-px h-16 bg-white/10 self-center"></div>
           <div className="text-center">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">XP Survie Totale</div>
              <div className="text-6xl font-space font-black text-orange-400 tabular-nums">{progress.survivalTotalXP}</div>
              <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest">XP Gagnés</div>
           </div>
        </div>
      </header>

      <section className="glass p-5 rounded-2xl border-rose-500/20 bg-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-widest opacity-60">Tu veux un entraînement ciblé ? Génère une version Survie par IA.</p>
        <Link href="/quiz?mode=Survie" className="h-10 px-4 rounded-xl bg-rose-500 text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center">Générer Quiz IA</Link>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <h2 className="text-3xl font-space font-black italic tracking-tighter uppercase border-b border-rose-500/10 pb-4">Défis du Jour ⚔️</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 50 }, (_, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 10) * 0.05 }}
                  className="glass group hover:border-rose-500/30 transition-all p-8 flex flex-col gap-6 relative overflow-hidden border-rose-500/5 shadow-xl hover:shadow-rose-500/10"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 -mr-16 -mt-16 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
                   <div className="flex justify-between items-start">
                      <div className="text-4xl group-hover:scale-110 transition-transform">💀</div>
                      <div className="text-[10px] font-black bg-rose-500/10 text-rose-600 px-4 py-1.5 rounded-full uppercase tracking-widest border border-rose-500/10">Niveau {Math.floor(i/5)+1}</div>
                   </div>
                   <div>
                      <h3 className="text-2xl font-space font-black tracking-tighter italic uppercase text-slate-800 transition-colors group-hover:text-rose-600">Épreuve Survie #{i + 1}</h3>
                      <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mt-1">Multi-classe • 50 Questions</p>
                   </div>
                   <Link 
                     href={`/quiz/survie/${i + 1}`}
                     className="w-full py-5 rounded-2xl bg-rose-500 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-rose-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center relative z-10"
                   >
                     ENTRER DANS L'ARÈNE ⚔️
                   </Link>
                </motion.div>
              ))}
            </div>
        </div>

        <div className="space-y-6">
           <section className="glass p-8 border-orange-500/10 bg-gradient-to-br from-white to-orange-50/30 shadow-2xl">
              <h3 className="text-xl font-space font-black italic tracking-tighter text-orange-600 mb-6 flex items-center gap-3">
                 <span className="text-2xl">🔥</span> RÈGLES DE SURVIE
              </h3>
              <ul className="space-y-6">
                 <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0">💀</div>
                    <p className="text-[11px] font-black uppercase tracking-tight leading-relaxed opacity-70">
                       <span className="text-rose-600">Mort Subite :</span> Une seule erreur met fin au quiz immédiatement.
                    </p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">⚡</div>
                    <p className="text-[11px] font-black uppercase tracking-tight leading-relaxed opacity-70">
                       <span className="text-orange-600">Multiplicateur :</span> Plus tu enchaînes, plus l'XP est multiplié.
                    </p>
                 </li>
                 <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">🌐</div>
                    <p className="text-[11px] font-black uppercase tracking-tight leading-relaxed opacity-70">
                       <span className="text-blue-600">Omniscient :</span> Les questions proviennent de toutes les matières et classes.
                    </p>
                 </li>
              </ul>
           </section>

           <section className="glass p-8 bg-slate-900 text-white border-white/10 shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -mr-12 -mt-12 rounded-full blur-xl"></div>
              <h3 className="text-sm font-black uppercase tracking-widest opacity-40 mb-6">Récompense de Saison</h3>
              <div className="text-4xl font-space font-black italic tracking-tighter mb-2">BADGE DE SANG</div>
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest leading-relaxed mb-8">Atteins un score de 20 questions pour débloquer ce badge exclusif.</p>
              <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center text-4xl border border-white/10 grayscale opacity-40">🩸</div>
           </section>
        </div>
      </div>
    </div>
  );
}
