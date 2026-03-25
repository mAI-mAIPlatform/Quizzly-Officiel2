"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import { useState, useEffect } from "react";

export default function ChestModal() {
  const { activeChest, closeChest, addChestRewards } = useProgress();
  const [step, setStep] = useState<"idle" | "shaking" | "opening" | "reward">("idle");
  const [rewardDetails, setRewardDetails] = useState<{ title: string; icon: string; amount?: string } | null>(null);

  useEffect(() => {
    if (activeChest) {
      const timeout = setTimeout(() => {
        setStep("idle");
        setRewardDetails(null);
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [activeChest]);

  if (!activeChest) return null;

  const handleOpen = () => {
    setStep("shaking");
    setTimeout(() => {
      setStep("opening");
      setTimeout(() => {
        // Logic for specific rewards based on chest type
        const type = activeChest.type;
        let details = { title: "Diamants", icon: "💎", amount: "100" };
        if (type === "Rare") details = { title: "Pack Diamants", icon: "💎", amount: "100" };
        else if (type === "Epique") details = { title: "Trésor & Titre", icon: "🎖️", amount: "250" };
        else if (type === "Mythique") details = { title: "Cadeau Mythique", icon: "🔥", amount: "500" };
        else if (type === "Légendaire") details = { title: "Légende !", icon: "🐉", amount: "1000" };
        else if (type === "Ultra") details = { title: "DIEU DU QUIZ", icon: "✨", amount: "5000" };
        
        addChestRewards(type);
        setRewardDetails(details);
        setStep("reward");
      }, 1000);
    }, 1500);
  };

  const getChestIcon = (type: string) => {
    switch(type) {
      case "Rare": return "📦";
      case "Epique": return "🎁";
      case "Mythique": return "🏺";
      case "Légendaire": return "🔱";
      case "Ultra": return "💠";
      default: return "📦";
    }
  };

  const getChestColor = (type: string) => {
    switch(type) {
      case "Rare": return "from-blue-400 to-blue-600";
      case "Epique": return "from-violet-400 to-violet-600";
      case "Mythique": return "from-rose-400 to-rose-600";
      case "Légendaire": return "from-orange-400 to-amber-600";
      case "Ultra": return "from-primary to-cyan-500";
      default: return "from-slate-400 to-slate-600";
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
      >
        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
          
          {step !== "reward" && (
            <motion.div 
              initial={{ scale: 0.5, y: 50 }}
              animate={{ 
                scale: 1, 
                y: 0,
                rotate: step === "shaking" ? [0, -5, 5, -5, 5, 0] : 0,
                x: step === "shaking" ? [0, -2, 2, -2, 2, 0] : 0
              }}
              transition={{ 
                rotate: { repeat: step === "shaking" ? Infinity : 0, duration: 0.1 },
                x: { repeat: step === "shaking" ? Infinity : 0, duration: 0.1 }
              }}
              className={`w-64 h-64 rounded-[3rem] bg-gradient-to-br ${getChestColor(activeChest.type)} flex items-center justify-center text-9xl shadow-[0_0_50px_rgba(255,255,255,0.2)] cursor-pointer group`}
              onClick={step === "idle" ? handleOpen : undefined}
            >
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/20 rounded-b-[3rem] border-t-4 border-white/10"></div>
                {getChestIcon(activeChest.type)}
                
                {step === "idle" && (
                    <div className="absolute -bottom-12 font-space font-black text-white text-xl animate-bounce uppercase tracking-widest">Clique pour ouvrir !</div>
                )}
            </motion.div>
          )}

          <AnimatePresence>
            {step === "reward" && rewardDetails && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-6 text-center"
              >
                <motion.div 
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }} 
                    transition={{ rotate: { repeat: Infinity, duration: 10, ease: "linear" }, scale: { repeat: Infinity, duration: 2 } }}
                    className="w-48 h-48 rounded-full bg-white/10 flex items-center justify-center text-8xl shadow-[0_0_100px_rgba(255,255,255,0.4)] relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan opacity-20 blur-2xl rounded-full"></div>
                    {rewardDetails.icon}
                </motion.div>
                
                <div className="space-y-2">
                    <h2 className="text-5xl font-space font-black text-white italic tracking-tighter uppercase">{rewardDetails.title}</h2>
                    <p className="text-3xl font-black text-primary">+{rewardDetails.amount} !</p>
                </div>

                <button 
                  onClick={closeChest}
                  className="mt-8 px-12 py-4 bg-white text-black font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                >
                  RÉCUPÉRER & FERMER
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Explosion effects */}
          {step === "opening" && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: [0, 1, 0] }}
               transition={{ duration: 1 }}
               className="absolute inset-0 bg-white rounded-full blur-3xl"
            ></motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
