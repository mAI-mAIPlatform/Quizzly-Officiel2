"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useProgress } from "@/context/ProgressContext";
import { useState } from "react";

export default function ReglagesPage() {
  const { progress, updateProfile } = useProgress();

  const activeClasses = ["6ème", "5ème", "4ème", "3ème", "Seconde", "Première", "Terminale"];
  const metiersPossibles = ["Mathématiques", "Français", "Histoire-Géo", "SVT", "Physique-Chimie", "Anglais"];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="space-y-2">
        <h1 className="text-5xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet">RÉGLAGES ⚙️</h1>
        <p className="opacity-70 font-bold uppercase tracking-widest text-xs">Personnalise ton expérience d'apprentissage.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
             <span className="text-3xl">🎓</span> Scolarité
          </h2>
          
          <div className="space-y-4">
             <label className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Ma classe actuelle</label>
             <div className="grid grid-cols-2 gap-3">
                {activeClasses.map(c => (
                  <button 
                    key={c}
                    onClick={() => updateProfile({ selectedClass: c })}
                    className={`p-4 rounded-2xl font-black transition-all border-2 text-sm font-space tracking-tight ${progress.selectedClass === c ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30 scale-105' : 'bg-white/5 border-white/5 hover:border-primary/30 hover:bg-white/10 opacity-70'}`}
                  >
                    {c}
                  </button>
                ))}
             </div>
          </div>
        </section>

        <section className="glass p-8 space-y-6">
          <h2 className="text-xl font-bold font-space border-b border-white/10 pb-4">Préférences</h2>
          
          <div className="space-y-4">
             <label className="block text-sm font-bold opacity-60">Matières favorites</label>
             <div className="flex flex-wrap gap-2">
                {metiersPossibles.map(m => (
                  <div key={m} className="flex items-center gap-2 glass px-4 py-2 rounded-full border-white/10 hover:border-primary/50 cursor-pointer transition-colors">
                     <input type="checkbox" className="accent-primary" defaultChecked />
                     <span className="text-sm font-medium">{m}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>

      <section className="glass p-8 bg-rose/5 border-rose/20">
        <h2 className="text-xl font-bold font-space text-rose mb-4">Zone de danger</h2>
        <button className="px-6 py-3 bg-rose text-white font-bold rounded-xl hover:brightness-110 shadow-lg shadow-rose/20">
          Réinitialiser ma progression
        </button>
      </section>
    </div>
  );
}
