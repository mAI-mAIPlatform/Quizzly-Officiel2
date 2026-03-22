 
 
 
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
 
 
// v1.1.0 - Correction du style des badges (fond blanc, bordure noire)
"use client";

import { useProgress } from "@/context/ProgressContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const ranksData = [
  { id: 'Apprenti', name: 'Apprenti', range: '0 - 500', icon: '🌱', image: '/images/ranks/apprenti.png', color: 'from-emerald-400 to-teal-500' },
  { id: 'Etudiant', name: 'Etudiant', range: '501 - 1500', icon: '📖', image: '/images/ranks/etudiant.png', color: 'from-blue-400 to-indigo-500' },
  { id: 'Expert', name: 'Expert', range: '1501 - 3000', icon: '🔭', image: '/images/ranks/expert.png', color: 'from-violet-400 to-purple-600' },
  { id: 'Savant', name: 'Savant', range: '3001 - 6000', icon: '🧙', image: '/images/ranks/savant.png', color: 'from-amber-400 to-orange-600' },
  { id: 'Génie', name: 'Génie', range: '6001+', icon: '🧬', image: '/images/ranks/genie.png', color: 'from-yellow-400 to-primary' },
];

export default function RankedPage() {
  const { progress } = useProgress();
  const currentRankIndex = ranksData.findIndex(r => r.id === progress.rankedRank);
  const currentRank = ranksData[currentRankIndex];
  
  const [selectedClass, setSelectedClass] = useState(progress.selectedClass);

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-7xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 drop-shadow-2xl">
            MODE CLASSÉ ⚔️
          </h1>
          <p className="opacity-70 font-black uppercase tracking-[0.3em] text-xs">Prouve ta supériorité intellectuelle et grimpe les rangs.</p>
        </div>

        <div className="glass p-8 flex items-center gap-6 border-primary/20 shadow-2xl ring-4 ring-primary/5 rounded-3xl group transition-all hover:scale-105">
           <div className="w-24 h-24 rounded-2xl bg-white border-[3px] border-black p-1 shadow-lg flex items-center justify-center">
              <img src={currentRank.image} alt={currentRank.name} className="w-full h-full object-contain p-2" />
           </div>
           <div>
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Ton Rang Actuel</div>
              <div className="text-4xl font-space font-black uppercase italic tracking-tighter text-primary">{progress.rankedRank}</div>
              <div className="flex items-center gap-2 mt-1">
                 <div className="w-32 h-2 bg-foreground/10 rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${(progress.rankedPoints % 1500) / 15}%` }}></div>
                 </div>
                 <span className="text-[10px] font-black text-primary">{progress.rankedPoints} RP</span>
              </div>
           </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Progression des Rangs */}
        <div className="space-y-4">
           <h2 className="text-sm font-black uppercase tracking-widest opacity-40 px-4">Échelle des Rangs</h2>
           <div className="space-y-2">
              {ranksData.map((rank, idx) => (
                <div 
                  key={rank.id}
                  className={`p-5 rounded-2xl border-2 flex items-center gap-4 transition-all ${idx <= currentRankIndex ? 'bg-white border-primary/20 shadow-lg' : 'opacity-30 grayscale border-transparent bg-foreground/5'}`}
                >
                   <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${rank.color} flex items-center justify-center text-xl`}>
                      {rank.icon}
                   </div>
                   <div>
                      <div className="font-black uppercase tracking-tighter text-sm leading-none">{rank.name}</div>
                      <div className="text-[9px] font-bold opacity-40 uppercase tracking-widest mt-1">{rank.range} RP</div>
                   </div>
                   {idx === currentRankIndex && (
                     <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-ping"></div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* Quizz List */}
        <div className="lg:col-span-3 space-y-8">
           <div className="flex justify-between items-end border-b border-primary/10 pb-6">
              <div className="flex gap-4">
                 {["6ème", "5ème", "4ème", "3ème", "Seconde", "Première", "Terminale"].map(c => (
                   <button 
                    key={c}
                    onClick={() => setSelectedClass(c)}
                    className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${selectedClass === c ? 'bg-primary text-white shadow-lg' : 'opacity-40 hover:opacity-100 hover:bg-foreground/5'}`}
                   >
                    {c}
                   </button>
                 ))}
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">Saison 1 - 2026</div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 25 }, (_, i) => {
                const quizId = `ranked_${selectedClass.toLowerCase()}_${i + 1}`;
                const isCompleted = progress.rankedCompletedQuizzes.includes(quizId);
                
                return (
                  <div 
                    key={i}
                    className={`glass p-8 flex flex-col gap-6 group transition-all duration-500 hover:scale-[1.02] border-primary/5 ${isCompleted ? 'bg-green/5 border-green/20' : 'hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5'}`}
                  >
                    <div className="flex justify-between items-start">
                       <div className={`w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform ${isCompleted ? 'bg-green/10 text-green-500' : ''}`}>
                          {isCompleted ? '✅' : '⚔️'}
                       </div>
                       <div className="text-[10px] font-black uppercase tracking-widest opacity-40"># {i + 1}</div>
                    </div>
                    <div>
                       <h3 className="text-xl font-space font-black uppercase italic tracking-tighter leading-none mb-2">Quiz Ranked {i + 1}</h3>
                       <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40">{selectedClass} • 10 Questions</p>
                    </div>

                    <Link 
                      href={`/quiz/ranked/${selectedClass.toLowerCase()}/${i + 1}`}
                      className={`w-full py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all text-center ${isCompleted ? 'bg-green text-white shadow-lg shadow-green/20' : 'bg-primary text-white shadow-xl shadow-primary/20 hover:brightness-110'}`}
                    >
                      {isCompleted ? 'REFAIRE (0 RP)' : 'LANCER LE DÉFI'}
                    </Link>
                  </div>
                );
              })}
           </div>
        </div>
      </div>
    </div>
  );
}
