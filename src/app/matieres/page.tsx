"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Link from "next/link";

const NIVEAUX = [
  { id: "6eme", nom: "6ème" },
  { id: "5eme", nom: "5ème" },
  { id: "4eme", nom: "4ème" },
  { id: "3eme", nom: "3ème" },
  { id: "2nde", nom: "2nde" },
  { id: "1ere", nom: "1ère" },
  { id: "terminale", nom: "Terminale" },
];

const MATIERES = [
  { id: 'maths', nom: 'Mathématiques', color: 'from-blue-500 to-cyan-400', icon: '🧮', dispo: true },
  { id: 'francais', nom: 'Français', color: 'from-purple-500 to-pink-400', icon: '🖋️', dispo: true },
  { id: 'histoire', nom: 'Histoire-Géo', color: 'from-orange-500 to-yellow-400', icon: '🏛️', dispo: true },
  { id: 'svt', nom: 'SVT', icon: '🌿', color: 'from-green to-emerald-500', dispo: true },
  { id: 'physique', nom: 'Physique-Chimie', icon: '🧪', color: 'from-violet to-purple-500', dispo: true },
  { id: "anglais", nom: "Anglais", icon: "🗣️", color: "from-rose-500 to-red-600", dispo: true },
  { id: "espagnol", nom: "Espagnol", icon: "🇪🇸", color: "from-yellow-400 to-orange-500", dispo: true },
  { id: "allemand", nom: "Allemand", icon: "🇩🇪", color: "from-gray-700 to-black", dispo: true },
  { id: "techno", nom: "Technologie", icon: "⚙️", color: "from-slate-500 to-blue-600", dispo: true },
  { id: "emc", nom: "EMC", icon: "⚖️", color: "from-blue-600 to-red-600", dispo: true },
  { id: "ses", nom: "SES", icon: "📈", color: "from-emerald-400 to-teal-600", dispo: true },
  { id: "snt", nom: "SNT", icon: "💻", color: "from-cyan-500 to-blue-500", dispo: true },
  { id: "philo", nom: "Philosphie", icon: "🧘", color: "from-indigo-400 to-purple-600", dispo: true },
];

export default function MatieresPage() {
  const [activeNiveau, setActiveNiveau] = useState("6eme");

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto text-foreground relative z-10 animate-in fade-in duration-500">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan drop-shadow-sm">
          Toutes les Matières 📚
        </h1>
        <p className="opacity-80 text-lg">Choisis ta classe et explore les chapitres disponibles pour t'entraîner.</p>
      </header>

      {/* Selector de Niveaux */}
      <div className="flex overflow-x-auto pb-2 gap-2 snap-x hide-scrollbar">
        {NIVEAUX.map(niv => (
          <button
            key={niv.id}
            onClick={() => setActiveNiveau(niv.id)}
            className={`px-6 py-3 rounded-2xl font-bold font-space whitespace-nowrap transition-all snap-center ${
              activeNiveau === niv.id 
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105" 
                : "glass hover:bg-foreground/5 opacity-70 hover:opacity-100"
            }`}
          >
            {niv.nom}
          </button>
        ))}
      </div>

      {/* Grille des Matières */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {MATIERES.map(matiere => (
          <div key={matiere.id} className="relative group">
            {matiere.dispo ? (
              <Link 
                href={`/matiere/${matiere.id}-${activeNiveau}`}
                className="glass p-6 rounded-3xl flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl cursor-pointer block h-full overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 opacity-20 bg-gradient-to-br blur-2xl group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${matiere.color} flex items-center justify-center text-4xl text-white shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                  {matiere.icon}
                </div>
                <div className="relative z-10 mt-2">
                  <h2 className="text-2xl font-space font-bold">{matiere.nom}</h2>
                  <p className="opacity-70 mt-2 text-sm">Découvre tous les chapitres et exercices.</p>
                </div>
              </Link>
            ) : (
              <div className="glass p-6 rounded-3xl flex flex-col items-center text-center gap-4 opacity-50 grayscale select-none h-full">
                <div className={`w-20 h-20 rounded-2xl bg-foreground/10 flex items-center justify-center text-4xl text-white shadow-inner`}>
                  {matiere.icon}
                </div>
                <div className="mt-2">
                  <h2 className="text-2xl font-space font-bold">{matiere.nom}</h2>
                  <p className="opacity-60 mt-2 text-sm">Bientôt disponible...</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="px-4 py-2 bg-background/80 backdrop-blur-sm font-bold text-xs uppercase tracking-widest rounded-full border border-foreground/10 shadow-xl">
                    En construction
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
