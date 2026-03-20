"use client";

import { useProgress } from "@/context/ProgressContext";
import { useState } from "react";

export default function ReglagesPage() {
  const { progress, updateProfile } = useProgress();

  const classes = ["6ème", "5ème", "4ème", "3ème", "Lycée"];
  const metiersPossibles = ["Mathématiques", "Français", "Histoire-Géo", "SVT", "Physique-Chimie", "Anglais"];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700">
      <header className="space-y-2">
        <h1 className="text-4xl font-space font-black">Réglages ⚙️</h1>
        <p className="opacity-70">Personnalise ton expérience d'apprentissage.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="glass p-8 space-y-6">
          <h2 className="text-xl font-bold font-space border-b border-white/10 pb-4">Scolarité</h2>
          
          <div className="space-y-4">
             <label className="block text-sm font-bold opacity-60">Ma classe actuelle</label>
             <div className="grid grid-cols-2 gap-2">
                {classes.map(c => (
                  <button 
                    key={c}
                    className={`p-3 rounded-xl font-bold transition-all border ${c === "6ème" ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}
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
