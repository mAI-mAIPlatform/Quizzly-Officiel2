"use client";

import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";

export default function BoutiquePage() {
  const { progress, buyNeurones, buyCosmetic } = useProgress();

  const packs = [
    { id: "n1", name: "1 Neurone", price: 50, amount: 1, icon: "🧠", color: "from-rose-400 to-rose-600" },
    { id: "n5", name: "Pack 5 Neurones", price: 200, amount: 5, icon: "🧠🧠🧠", color: "from-rose-500 to-red-600" },
  ];

  const cosmeticItems = [
    { id: "av_bot", type: 'avatar', name: "Robot", price: 300, icon: "🤖", color: "from-blue-400 to-blue-600" },
    { id: "av_fox", type: 'avatar', name: "Renard", price: 300, icon: "🦊", color: "from-orange-400 to-orange-600" },
    { id: "th_neon", type: 'theme', name: "Thème Néon", price: 1000, icon: "🌃", color: "from-purple-500 to-pink-500" },
    { id: "th_retro", type: 'theme', name: "Thème Rétro", price: 1000, icon: "🕹️", color: "from-yellow-500 to-red-500" },
  ];

  const handleBuy = (item: any) => {
    if (item.id.startsWith('n')) {
      const success = buyNeurones(item.amount, item.price);
      if (success) alert("Achat réussi ! 🧠");
      else alert("Pas assez de diamants ! 💎");
    } else {
      const success = buyCosmetic(item.type, item.id, item.price);
      if (success) alert(`Félicitations ! Tu as débloqué ${item.name} ! ✨`);
      else alert("Pas assez de diamants ! 💎");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-5xl font-space font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue">
            BOUTIQUE 💎
          </h1>
          <p className="opacity-70 font-medium">Tes diamants durement gagnés servent ici !</p>
        </div>
        
        <div className="flex items-center gap-3 font-bold text-3xl text-cyan glass px-8 py-4 border-cyan/30 shadow-xl shadow-cyan/10 ring-2 ring-cyan/20">
          <span className="text-4xl">💎</span> {progress.crystals}
        </div>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-space font-bold flex items-center gap-3">🧠 Énergie (Neurones)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packs.map((item, idx) => (
            <BoutiqueItem key={item.id} item={item} onBuy={handleBuy} crystals={progress.crystals} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-space font-bold flex items-center gap-3">✨ Cosmétiques & Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cosmeticItems.map((item, idx) => (
            <BoutiqueItem 
              key={item.id} 
              item={item} 
              onBuy={handleBuy} 
              crystals={progress.crystals} 
              isOwned={item.type === 'avatar' ? progress.unlockedAvatars.includes(item.id) : progress.unlockedThemes.includes(item.id)} 
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
