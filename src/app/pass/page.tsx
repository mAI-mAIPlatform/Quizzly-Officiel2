"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";

// v0.9.3 - Saison Brevet Blanc et chemin de récompenses (30 paliers)
export default function PassPage() {
  const { progress, claimPassReward, buyPassPro } = useProgress();
  const xpInTier = progress.xp % 200;
  const progressPercent = (xpInTier / 200) * 100;

  const getTierData = (level: number) => {
    const rewards: { [key: number]: { reward: string; icon: string; color: string; type: string } } = {
      1: { reward: "50 Diamants", icon: "💎", color: "from-blue-400 to-cyan-500", type: "Cristaux" },
      2: { reward: "Major de Promo", icon: "🎖️", color: "from-violet-400 to-primary", type: "Titre" },
      3: { reward: "Neurone Bonus", icon: "🧠", color: "from-rose-400 to-red-500", type: "Item" },
      4: { reward: "Avatar Diplômé", icon: "🎓", color: "from-emerald-400 to-green-600", type: "Avatar" },
      5: { reward: "100 Diamants", icon: "💎", color: "from-blue-400 to-cyan-500", type: "Cristaux" },
      6: { reward: "Booster XP x1.5", icon: "⚡", color: "from-yellow-400 to-amber-600", type: "Booster" },
      7: { reward: "Petit Génie", icon: "✨", color: "from-violet-400 to-primary", type: "Titre" },
      8: { reward: "Neurone Bonus", icon: "🧠", color: "from-rose-400 to-red-500", type: "Item" },
      9: { reward: "150 Diamants", icon: "💎", color: "from-blue-400 to-cyan-500", type: "Cristaux" },
      10: { reward: "Avatar Cerveau", icon: "🧠", color: "from-cyan-400 to-blue-600", type: "Avatar" },
      // ... (Générer programmatiquement pour les autres si non spécifié, mais restons sur 30)
    };

    // Fallback dynamique pour remplir jusqu'à 30
    if (rewards[level]) return rewards[level];
    
    if (level === 20) return { reward: "Avatar Lion", icon: "🦁", color: "from-yellow-400 to-orange-600", type: "Avatar" };
    if (level === 25) return { reward: "Légende", icon: "👑", color: "from-primary to-violet-600", type: "Titre" };
    if (level === 30) return { reward: "Avatar Royal", icon: "👑", color: "from-yellow-500 to-amber-700", type: "Avatar" };
    
    if (level % 5 === 0) return { reward: "Gros Pack 💎", icon: "💰", color: "from-emerald-400 to-teal-600", type: "Cristaux" };
    return { reward: "Bonus " + level, icon: "🎁", color: "from-slate-400 to-slate-600", type: "Récompense" };
  };

  const tiers = Array.from({ length: 30 }, (_, i) => {
    const level = i + 1;
    const data = getTierData(level);
    return { level, ...data, free: level % 4 !== 0 };
  });

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in duration-700 pb-24 relative">
      <header className="glass p-10 bg-gradient-to-br from-violet/30 to-primary/20 text-center space-y-6 rounded-[3xl] border-white/20 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="relative z-10">
            <h1 className="text-6xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-violet to-primary drop-shadow-xl uppercase mb-2">
            QUIZZLY PASS {progress.isPassPro && <span className="text-xs not-italic bg-primary text-white px-3 py-1 rounded-full align-middle ml-2 shadow-lg tracking-widest font-black">PRO</span>}
            </h1>
            <p className="text-sm font-black opacity-60 uppercase tracking-[0.4em] text-primary">Saison 1 : Brevet Blanc 📝</p>
        </div>
        
        {!progress.isPassPro && (
          <button 
            onClick={() => {
              if (buyPassPro()) alert("Pass Pro activé ! 👑");
              else alert("Pas assez de diamants ! 💎");
            }}
            className="relative z-10 bg-primary text-white font-black px-10 py-4 rounded-2xl text-xs shadow-2xl shadow-primary/40 hover:scale-105 active:scale-95 transition-all tracking-widest uppercase"
          >
            DEVENIR PRO (50 💎)
          </button>
        )}
        
        <div className="flex flex-col items-center gap-3 pt-4 relative z-10">
          <div className="flex justify-between w-full max-w-sm text-[10px] font-black uppercase tracking-widest opacity-50">
            <span>Palier {progress.passTier} / 30</span>
            <span>{xpInTier} / 200 XP</span>
          </div>
          <div className="w-full max-w-sm h-4 bg-foreground/10 rounded-full overflow-hidden border-2 border-white/10 shadow-inner relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              className="h-full bg-gradient-to-r from-violet to-primary shadow-[0_0_20px_rgba(124,58,237,0.5)]"
            ></motion.div>
          </div>
        </div>
      </header>

      {/* Le chemin de récompenses */}
      <div className="relative pt-10 pb-20">
        {/* Ligne pointillée centrale */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/40 via-violet/40 to-transparent -translate-x-1/2 border-l-2 border-dashed border-primary/20"></div>

        <div className="flex flex-col gap-24 relative z-10">
          {tiers.map((tier, idx) => {
            const isLocked = tier.level > progress.passTier;
            const isClaimed = progress.claimedPassRewards.includes(tier.level);
            const isReady = tier.level <= progress.passTier && !isClaimed;
            
            // Alternance gauche/droite pour le chemin
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={tier.level}
                className={`flex items-center w-full ${isLeft ? 'justify-start md:pr-[50%]' : 'justify-end md:pl-[50%]'}`}
              >
                <div className="relative group">
                    {/* Level Number Badge */}
                    <div className={`absolute -top-4 ${isLeft ? '-right-4' : '-left-4'} w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black z-20 shadow-lg border-2 border-white/20`}>
                        {tier.level}
                    </div>

                    <motion.div 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center gap-2 cursor-pointer shadow-2xl relative transition-all duration-500
                            ${isLocked ? 'grayscale opacity-40 bg-slate-200' : 'bg-white border-4'} 
                            ${isReady ? 'border-primary ring-8 ring-primary/20' : 'border-transparent'}
                            ${isClaimed ? 'bg-green-50' : ''}
                        `}
                        onClick={() => !isLocked && !isClaimed && claimPassReward(tier.level)}
                    >
                        {/* Star / Icon Background (Glass Effect) */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${tier.color} opacity-10`}></div>
                        
                        <div className="text-4xl md:text-5xl mb-1 relative z-10">{tier.icon}</div>
                        <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-center px-4 leading-tight relative z-10">
                            {tier.reward}
                        </div>

                        {isClaimed && (
                            <div className="absolute inset-0 rounded-full bg-green-500/10 flex items-center justify-center backdrop-blur-[1px]">
                                <span className="text-4xl">✅</span>
                            </div>
                        )}
                        
                        {!isLocked && !isClaimed && !isReady && (
                            <div className="absolute -bottom-2 bg-green-500 text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg uppercase">Débloqué</div>
                        )}
                    </motion.div>

                    {/* Reward Title / Details (Side Label) */}
                    <div className={`absolute top-1/2 -translate-y-1/2 w-48 hidden lg:block ${isLeft ? 'left-full ml-10' : 'right-full mr-10 text-right'}`}>
                        <h4 className={`text-lg font-space font-black tracking-tight ${isLocked ? 'opacity-30' : 'opacity-100'}`}>
                            {tier.type}
                        </h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">
                            {tier.free ? 'Gratuit' : 'Premium'}
                        </p>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
