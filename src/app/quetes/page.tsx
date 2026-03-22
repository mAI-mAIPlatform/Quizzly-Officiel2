"use client";

import { useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";

export default function QuetesPage() {
  const { progress, claimQuestReward, updateWeekendQuest, claimChest } = useProgress();

  useEffect(() => {
    updateWeekendQuest();
  }, [updateWeekendQuest]);

  const dailyQuests = progress.quests.filter(q => q.id.startsWith("q_daily"));
  const weeklyQuests = progress.quests.filter(q => q.id.startsWith("q_weekly"));
  const weekendQuest = progress.quests.find(q => q.id === "q_weekend");

  const QuestCard = ({ quest, isWeekend = false }: { quest: any; isWeekend?: boolean }) => {
    const isReady = quest.current >= quest.target && !quest.isCompleted;
    const progressPercent = Math.min(100, (quest.current / quest.target) * 100);

    return (
      <div className={`glass p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 ${quest.isCompleted ? 'opacity-50 grayscale' : ''} ${isWeekend ? 'border-primary ring-2 ring-primary/20 bg-primary/5' : ''}`}>
        {quest.isCompleted && (
          <div className="absolute top-2 right-2 bg-green/20 text-green-500 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase">Complété</div>
        )}
        
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg font-space">{quest.title}</h3>
          <span className="font-bold text-primary">{isWeekend ? "📦 Coffre Mystère" : `+${quest.xpReward} XP`}</span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs opacity-60">
            <span>Progression</span>
            <span>{quest.current} / {quest.target}</span>
          </div>
          <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${isWeekend ? 'bg-gradient-to-r from-primary to-violet' : 'bg-primary'}`} 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={() => {
            claimQuestReward(quest.id);
            if (isWeekend) {
                const types = ["Rare", "Epique", "Mythique", "Légendaire", "Ultra"];
                const type = types[Math.floor(Math.random() * types.length)];
                claimChest(type);
                alert(`Félicitations ! Tu as ouvert un coffre ${type} ! 🎁`);
            }
          }}
          disabled={!isReady}
          className={`w-full py-2 rounded-xl font-bold transition-all ${
            isReady 
            ? "bg-primary text-primary-foreground hover:scale-105 shadow-lg shadow-primary/20" 
            : "bg-foreground/5 opacity-50 cursor-not-allowed"
          }`}
        >
          {quest.isCompleted ? "Réclamé" : isReady ? "Réclamer" : "En cours"}
        </button>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="space-y-4 text-center">
        <h1 className="text-6xl font-space font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet tracking-tighter italic drop-shadow-sm uppercase">
          Tes Quêtes 🎯
        </h1>
        <p className="text-lg opacity-60 font-medium">Relève les défis pour gagner un maximum d'XP et de titres !</p>
      </header>

      {weekendQuest && (
        <section className="space-y-6">
           <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-2xl border-l-4 border-primary">
            <span className="text-3xl">🗓️</span>
            <div>
                <h2 className="text-2xl font-black font-space uppercase">Événement Week-end</h2>
                <p className="text-xs font-bold opacity-50 uppercase tracking-widest text-primary">Disponible jusqu'à Dimanche Minuit</p>
            </div>
          </div>
          <QuestCard quest={weekendQuest} isWeekend={true} />
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <h2 className="text-2xl font-black font-space uppercase">Pression Quotidienne</h2>
          </div>
          <div className="flex flex-col gap-4">
            {dailyQuests.map(q => <QuestCard key={q.id} quest={q} />)}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚡</span>
            <h2 className="text-2xl font-black font-space uppercase">Objectifs Hebdo</h2>
          </div>
          <div className="flex flex-col gap-4">
            {weeklyQuests.map(q => <QuestCard key={q.id} quest={q} />)}
          </div>
        </section>
      </div>

      <div className="glass p-10 bg-gradient-to-br from-primary/10 to-transparent text-center border-primary/20 rounded-[2rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mt-16 blur-2xl"></div>
        <h3 className="text-2xl font-black font-space uppercase mb-2 relative z-10">Besoin de plus de défis ?</h3>
        <p className="opacity-60 mb-6 font-medium relative z-10">Les quêtes journalières se réinitialisent chaque jour à minuit. Reviens vendredi à 15h pour la quête spéciale !</p>
        <div className="text-5xl animate-bounce">🕒</div>
      </div>
    </div>
  );
}

