"use client";

import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";

export default function PassPage() {
  const { progress, claimPassReward } = useProgress();
  const xpInTier = progress.xp % 200;
  const progressPercent = (xpInTier / 200) * 100;

  const tiers = Array.from({ length: 20 }, (_, i) => ({
    level: i + 1,
    reward: i === 19 ? "Lion de Légende (Avatar)" : (i + 1) % 5 === 0 ? "Gros Pack Diamants" : (i + 1) % 2 === 0 ? "50 Diamants" : "Neurone Bonus",
    icon: i === 19 ? "🦁" : (i + 1) % 5 === 0 ? "💰" : (i + 1) % 2 === 0 ? "💎" : "🧠",
    color: i === 19 ? "from-yellow-400 to-orange-600" : (i + 1) % 5 === 0 ? "from-emerald-400 to-green-600" : "from-blue-400 to-violet-500",
    free: (i + 1) % 3 !== 0
  }));

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700 pb-20">
      <header className="glass p-8 bg-gradient-to-br from-violet/20 to-primary/20 text-center space-y-4">
        <h1 className="text-6xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-violet to-primary drop-shadow-xl">
          QUIZZLY PASS
        </h1>
        <p className="text-lg font-bold opacity-80 uppercase tracking-[0.3em] text-primary">Saison 1 : L'Origine 🧬</p>
        
        <div className="flex flex-col items-center gap-2 pt-6">
          <div className="flex justify-between w-full max-w-md text-sm font-black uppercase tracking-tighter opacity-70">
            <span>Palier {progress.passTier}</span>
            <span>{xpInTier} / 200 XP</span>
          </div>
          <div className="w-full max-w-md h-6 bg-foreground/10 rounded-full overflow-hidden border-2 border-white/10 shadow-inner relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              className="h-full bg-gradient-to-r from-violet to-primary shadow-[0_0_20px_rgba(124,58,237,0.5)]"
            ></motion.div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-3">
        {tiers.map((tier, idx) => {
          const isLocked = tier.level > progress.passTier;
          const isClaimed = progress.claimedPassRewards.includes(tier.level);
          const isReady = tier.level <= progress.passTier && !isClaimed;

          return (
            <div 
              key={tier.level}
              className={`glass flex items-center gap-6 p-5 transition-all duration-500 relative overflow-hidden group ${isLocked ? 'opacity-40 grayscale-[0.5]' : 'opacity-100'} ${isReady ? 'border-primary ring-2 ring-primary/30 scale-[1.01] bg-primary/5' : ''}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black font-space bg-gradient-to-br ${tier.color} text-white shadow-xl isolate relative`}>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {tier.level}
              </div>
              
              <div className="flex-1 flex items-center gap-5">
                <div className="text-4xl filter drop-shadow-md group-hover:scale-125 transition-transform">{tier.icon}</div>
                <div>
                   <h3 className="font-black text-xl font-space tracking-tight">{tier.reward}</h3>
                   <div className="flex gap-2 mt-1">
                      {tier.free ? (
                        <span className="text-[10px] bg-green/20 text-green-500 px-3 py-1 rounded-full font-black uppercase tracking-widest">Gratuit</span>
                      ) : (
                        <span className="text-[10px] bg-yellow-400/20 text-yellow-600 px-3 py-1 rounded-full font-black uppercase tracking-widest">Premium</span>
                      )}
                      {isClaimed && <span className="text-[10px] bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full font-black uppercase tracking-widest">Récupéré</span>}
                   </div>
                </div>
              </div>

              <div className="text-right">
                {isLocked ? (
                  <div className="p-3 glass rounded-full opacity-50">🔒</div>
                ) : isClaimed ? (
                  <div className="text-3xl text-green-500">🏆</div>
                ) : (
                  <button 
                    onClick={() => claimPassReward(tier.level)}
                    className="px-6 py-2 bg-primary text-white font-black rounded-xl hover:scale-110 active:scale-95 transition-all shadow-lg shadow-primary/30 uppercase text-xs tracking-widest"
                  >
                    Récupérer
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}    </div>
  );
}
