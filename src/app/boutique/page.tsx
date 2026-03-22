"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable react/no-unescaped-entities */
import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";

export default function BoutiquePage() {
  const { progress, buyNeurones, buyCosmetic, buyPassPro, buyBooster } = useProgress();

  const packs = [
    { id: "n1", name: "1 Neurone", price: 50, amount: 1, icon: "🧠", color: "from-rose-400 to-rose-600" },
    { id: "n5", name: "Pack 5 Neurones", price: 200, amount: 5, icon: "🧠🧠🧠", color: "from-rose-500 to-red-600" },
  ];

  const boosterItems = [
    { id: "b15", type: 'booster', multiplier: 1.5, name: "Booster x1.5", price: 200, icon: "⚡", color: "from-cyan-400 to-blue-500" },
    { id: "b20", type: 'booster', multiplier: 2, name: "Booster x2", price: 400, icon: "⚡⚡", color: "from-blue-500 to-primary" },
    { id: "b30", type: 'booster', multiplier: 3, name: "Booster x3", price: 800, icon: "🔥", color: "from-orange-400 to-red-600" },
  ];

  const cosmeticItems = [
    { id: "av_bot", type: 'avatar', name: "Robot", price: 300, icon: "🤖", color: "from-blue-400 to-blue-600" },
    { id: "av_owl", type: 'avatar', name: "Hibou Sage", price: 500, icon: "🦉", color: "from-amber-400 to-orange-600" },
    { id: "av_dolphin", type: 'avatar', name: "Dauphin Malin", price: 500, icon: "🐬", color: "from-blue-300 to-cyan-500" },
    { id: "av_fox", type: 'avatar', name: "Renard", price: 300, icon: "🦊", color: "from-orange-400 to-orange-600" },
    { id: "av_dragon", type: 'avatar', name: "Dragon", price: 1000, icon: "🐉", color: "from-red-500 to-orange-600" },
    { id: "av_unicorn", type: 'avatar', name: "Licorne", price: 1000, icon: "🦄", color: "from-pink-400 to-purple-600" },
  ];

  const passItem = { id: "pass_pro", type: 'pass', name: "Quizzly Pass Pro", price: 50, icon: "👑", color: "from-violet to-primary", desc: "Débloque toutes les récompenses Premium !" };

  const handleBuy = (item: any) => {
    if (item.id === 'pass_pro') {
      const success = buyPassPro();
      if (success) alert("Félicitations ! Tu es désormais PRO ! 👑");
      else alert(progress.isPassPro ? "Tu es déjà PRO ! ✨" : "Pas assez de diamants ! 💎");
      return;
    }
    if (item.id.startsWith('n')) {
      const success = buyNeurones(item.amount, item.price);
      if (success) alert("Achat réussi ! 🧠");
      else alert("Pas assez de diamants ! 💎");
    } else if (item.type === 'booster') {
      const { buyBooster } = require("@/context/ProgressContext").useProgress(); // Safe check if context changed
      const success = buyBooster(item.multiplier, item.price);
      if (success) alert(`Booster ${item.name} activé ! 🚀`);
      else alert("Pas assez de diamants ! 💎");
    } else {
      const success = buyCosmetic(item.type, item.id, item.price);
      if (success) alert(`Félicitations ! Tu as débloqué ${item.name} ! ✨`);
      else alert("Pas assez de diamants ! 💎");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-16 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-6xl font-space font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan italic drop-shadow-xl">
            BOUTIQUE 💎
          </h1>
          <p className="opacity-70 font-black uppercase tracking-[0.2em] text-xs">Tes diamants durement gagnés servent ici !</p>
        </div>
        
        <div className="flex items-center gap-4 font-black text-4xl text-primary glass px-10 py-5 border-primary/20 shadow-2xl shadow-primary/10 ring-4 ring-primary/5 rounded-3xl">
          <span className="text-5xl filter drop-shadow-md">💎</span> {progress.crystals}
        </div>
      </header>

      {/* Pass Pro Spotlight */}
      {!progress.isPassPro && (
        <section className="glass p-1 border-primary/20 bg-gradient-to-r from-violet/20 via-primary/20 to-cyan/20 rounded-[2.5rem] overflow-hidden group">
          <div className="glass bg-white/40 p-10 rounded-[2.2rem] flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 rounded-[2rem] bg-gradient-to-br from-violet to-primary flex items-center justify-center text-6xl shadow-2xl shadow-primary/40 group-hover:rotate-12 transition-transform duration-500">
                👑
              </div>
              <div className="text-center md:text-left space-y-3">
                <h2 className="text-4xl font-space font-black tracking-tighter uppercase italic text-primary">Quizzly Pass Pro</h2>
                <p className="font-bold opacity-70">Débloque tous les paliers premium, des récompenses exclusives et un badge spécial !</p>
              </div>
            </div>
            <button 
              onClick={() => handleBuy(passItem)}
              className="bg-primary text-white font-black px-12 py-5 rounded-2xl text-xl shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-4"
            >
              DEVENIR PRO <span className="flex items-center gap-1">50 💎</span>
            </button>
          </div>
        </section>
      )}

      <section className="space-y-8">
        <h2 className="text-3xl font-space font-black flex items-center gap-4 tracking-tight">
          <span className="p-3 bg-rose/10 rounded-2xl">🧠</span> Énergie & Boosters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((item) => (
            <BoutiqueItem key={item.id} item={item} onBuy={handleBuy} crystals={progress.crystals} />
          ))}
          {boosterItems.map((item) => (
            <BoutiqueItem 
              key={item.id} 
              item={item} 
              onBuy={() => {
                const success = buyBooster(item.multiplier, item.price);
                if (success) alert(`Booster ${item.name} activé ! 🚀`);
                else alert("Pas assez de diamants ! 💎");
              }} 
              crystals={progress.crystals} 
              isOwned={progress.xpBoost === item.multiplier}
            />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-space font-black flex items-center gap-4 tracking-tight">
          <span className="p-3 bg-violet/10 rounded-2xl">✨</span> Avatars de Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cosmeticItems.map((item) => (
            <BoutiqueItem 
              key={item.id} 
              item={item} 
              onBuy={handleBuy} 
              crystals={progress.crystals} 
              isOwned={progress.unlockedAvatars.includes(item.id)} 
            />
          ))}
        </div>
      </section>

      <div className="glass p-8 bg-gradient-to-r from-primary/10 to-transparent border-primary/20">
        <p className="opacity-80 italic text-center">Plus d'objets arrivent bientôt ! Garde tes diamants au chaud... 🔥</p>
      </div>
    </div>
  );
}

function BoutiqueItem({ item, onBuy, crystals, isOwned = false }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`glass p-6 flex flex-col items-center text-center gap-4 group relative overflow-hidden h-full border-white/10 ${isOwned ? 'opacity-60 grayscale' : ''}`}
    >
      <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${item.color}`}></div>
      
      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {item.icon}
      </div>
      
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-bold font-space">{item.name}</h3>
        <p className="text-[10px] opacity-50 uppercase font-black">{item.type || 'Énergie'}</p>
      </div>

      <button 
        onClick={() => onBuy(item)}
        disabled={isOwned || crystals < item.price}
        className={`w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
          isOwned 
          ? "bg-green/20 text-green-500 cursor-default"
          : crystals >= item.price 
            ? "bg-foreground text-background hover:scale-105 active:scale-95" 
            : "bg-foreground/10 opacity-50 cursor-not-allowed"
        }`}
      >
        {isOwned ? "Débloqué" : (
          <><span className="text-lg">{item.price}</span><span>💎</span></>
        )}
      </button>
    </motion.div>
  );
}
