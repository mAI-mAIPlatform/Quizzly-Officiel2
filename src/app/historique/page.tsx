"use client";

import { useProgress } from "@/context/ProgressContext";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function HistoriquePage() {
  const { progress } = useProgress();
  const [filter, setFilter] = useState<string>("all");

  const history = progress.history || [];

  const filteredHistory = history.filter((entry) => 
    filter === "all" ? true : entry.type === filter
  );

  const totalPlayed = history.length;
  const avgScore = totalPlayed > 0 
    ? Math.round((history.reduce((acc, curr) => acc + (curr.score / Math.max(1, curr.maxScore)), 0) / totalPlayed) * 100)
    : 0;
  
  const perfectGames = history.filter(h => h.score === h.maxScore && h.maxScore > 0).length;

  return (
    <div className="flex bg-background min-h-screen text-foreground font-inter selection:bg-primary/30">
      <Sidebar className="hidden md:flex w-64 flex-col fixed inset-y-0" />
      <div className="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
        <Navbar />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-thin scrollbar-thumb-primary/20">
          <div className="max-w-4xl mx-auto space-y-8 pb-32">
            
            <header className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-space font-black tracking-tighter mb-2">
                Ton <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">Historique</span>
              </h1>
              <p className="text-foreground/60 text-lg">Retrouve tes statistiques et anciennes parties.</p>
            </header>

            {/* Statistiques rapides */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass p-6 rounded-3xl border border-foreground/5 flex flex-col items-center justify-center">
                <div className="text-5xl mb-2">🎮</div>
                <div className="text-3xl font-black">{totalPlayed}</div>
                <div className="text-sm font-medium opacity-60 uppercase tracking-widest">Parties jouées</div>
              </div>
              <div className="glass p-6 rounded-3xl border border-foreground/5 flex flex-col items-center justify-center">
                <div className="text-5xl mb-2">🎯</div>
                <div className="text-3xl font-black">{avgScore}%</div>
                <div className="text-sm font-medium opacity-60 uppercase tracking-widest">Précision Moyenne</div>
              </div>
              <div className="glass p-6 rounded-3xl border border-foreground/5 flex flex-col items-center justify-center">
                <div className="text-5xl mb-2">✨</div>
                <div className="text-3xl font-black">{perfectGames}</div>
                <div className="text-sm font-medium opacity-60 uppercase tracking-widest">Sans-fautes</div>
              </div>
            </div>

            {/* Filtres */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {["all", "classic", "ranked", "survival", "duel", "blitz", "vrai_faux", "visuel"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${filter === t ? 'bg-primary text-white scale-105 shadow-lg shadow-primary/20' : 'glass hover:bg-foreground/5'}`}
                >
                  {t === "all" ? "Toutes les parties" : t.replace('_', ' ').toUpperCase()}
                </button>
              ))}
            </div>

            {/* Liste historique */}
            <div className="space-y-4">
              {filteredHistory.length === 0 ? (
                <div className="text-center p-12 glass rounded-3xl opacity-50 font-bold">
                  Aucune partie jouée dans ce mode pour le moment.
                </div>
              ) : (
                filteredHistory.map((item, idx) => {
                  const percentage = Math.round((item.score / Math.max(1, item.maxScore)) * 100);
                  const isPerfect = item.score === item.maxScore;
                  
                  return (
                    <div key={idx} className="glass p-4 rounded-2xl border border-foreground/5 flex items-center justify-between hover:scale-[1.01] transition-transform">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner ${isPerfect ? 'bg-green-500/20 text-green-500' : 'bg-primary/10 text-primary'}`}>
                          {isPerfect ? '🌟' : '📝'}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{item.title}</h3>
                          <div className="flex gap-2 text-sm opacity-60 font-medium">
                            <span className="uppercase">{item.type.replace('_', ' ')}</span>
                            <span>•</span>
                            <span>{new Date(item.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-black text-2xl ${isPerfect ? 'text-green-500' : ''}`}>
                          {item.score} <span className="opacity-50 text-sm">/ {item.maxScore}</span>
                        </div>
                        <div className="text-xs font-bold opacity-60">{percentage}%</div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
