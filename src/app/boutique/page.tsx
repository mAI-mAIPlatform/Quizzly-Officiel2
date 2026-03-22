"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";
import { motion } from "framer-motion";

export default function BoutiquePage() {
  const { progress, buyNeurones, buyCosmetic, buyPassPro, buyBooster, buyChest, claimDailyReward, buyRandomChest, buyFrame, buyBanner, buyEffect, buyMascot } = useProgress();
  const { showToast } = useToast();

  const today = new Date().toISOString().split('T')[0];
  const canClaimDaily = progress.lastDailyRewardDate !== today;

  const packs = [
    { id: "n1", name: "1 Neurone", price: 50, amount: 1, icon: "🧠", color: "from-rose-400 to-rose-600" },
    { id: "n5", name: "Pack 5 Neurones", price: 200, amount: 5, icon: "🧠🧠", color: "from-rose-500 to-red-600" },
  ];

  const boosterItems = [
    { id: "b15", type: 'booster', multiplier: 1.5, name: "Booster x1.5", price: 100, icon: "⚡", color: "from-cyan-400 to-blue-500" },
    { id: "b20", type: 'booster', multiplier: 2, name: "Booster x2", price: 200, icon: "⚡⚡", color: "from-blue-500 to-primary" },
    { id: "b30", type: 'booster', multiplier: 3, name: "Booster x3", price: 400, icon: "🔥", color: "from-orange-400 to-red-600" },
  ];

  const cosmeticItems = [
    { id: "av_bot", type: 'avatar', name: "Robot", price: 100, icon: "🤖", color: "from-blue-400 to-blue-600" },
    { id: "av_owl", type: 'avatar', name: "Hibou Sage", price: 150, icon: "🦉", color: "from-amber-400 to-orange-600" },
    { id: "av_dolphin", type: 'avatar', name: "Dauphin Malin", price: 150, icon: "🐬", color: "from-blue-300 to-cyan-500" },
    { id: "av_fox", type: 'avatar', name: "Renard", price: 100, icon: "🦊", color: "from-orange-400 to-orange-600" },
    { id: "av_dragon", type: 'avatar', name: "Dragon", price: 300, icon: "🐉", color: "from-red-500 to-orange-600" },
    { id: "av_unicorn", type: 'avatar', name: "Licorne", price: 300, icon: "🦄", color: "from-pink-400 to-purple-600" },
    { id: "av_wolf", type: 'avatar', name: "Loup Alpha", price: 200, icon: "🐺", color: "from-slate-500 to-slate-700" },
    { id: "av_eagle", type: 'avatar', name: "Aigle Royal", price: 250, icon: "🦅", color: "from-amber-500 to-yellow-700" },
    { id: "av_octopus", type: 'avatar', name: "Poulpe Savant", price: 200, icon: "🐙", color: "from-purple-400 to-purple-600" },
    { id: "av_butterfly", type: 'avatar', name: "Papillon", price: 150, icon: "🦋", color: "from-pink-300 to-blue-400" },
    { id: "av_mask", type: 'avatar', name: "Masque Mystère", price: 350, icon: "🎭", color: "from-violet-500 to-violet-700" },
    { id: "av_star", type: 'avatar', name: "Étoile", price: 400, icon: "🌟", color: "from-yellow-400 to-orange-500" },
  ];

  const chestItems = [
    { id: "ch_rare", type: 'chest', tier: 'Rare', name: "Coffre Rare", price: 100, icon: "📦", color: "from-blue-400 to-blue-600" },
    { id: "ch_epique", type: 'chest', tier: 'Epique', name: "Coffre Épique", price: 250, icon: "🎁", color: "from-violet-400 to-violet-600" },
    { id: "ch_mythique", type: 'chest', tier: 'Mythique', name: "Coffre Mythique", price: 500, icon: "🏺", color: "from-rose-400 to-rose-600" },
    { id: "ch_leg", type: 'chest', tier: 'Légendaire', name: "Coffre Légendaire", price: 1000, icon: "🔱", color: "from-orange-400 to-amber-600" },
    { id: "ch_ultra", type: 'chest', tier: 'Ultra', name: "Coffre ULTRA", price: 5000, icon: "💠", color: "from-primary to-cyan-500" },
  ];

  const frameItems = [
    { id: "frame_gold", name: "Cadre Or", price: 200, icon: "🥇", color: "from-yellow-400 to-amber-600" },
    { id: "frame_diamond", name: "Cadre Diamant", price: 500, icon: "💎", color: "from-cyan-300 to-blue-500" },
    { id: "frame_fire", name: "Cadre Feu", price: 300, icon: "🔥", color: "from-red-400 to-orange-600" },
    { id: "frame_emerald", name: "Cadre Émeraude", price: 250, icon: "✨", color: "from-emerald-400 to-green-600" },
    { id: "frame_ruby", name: "Cadre Rubis", price: 400, icon: "🩸", color: "from-rose-500 to-red-700" },
  ];

  const bannerItems = [
    { id: "banner_stars", name: "Bannière Étoiles", price: 150, icon: "⭐", color: "from-yellow-400 to-yellow-600" },
    { id: "banner_galaxy", name: "Bannière Galaxie", price: 300, icon: "🌌", color: "from-indigo-500 to-purple-700" },
    { id: "banner_forest", name: "Bannière Forêt", price: 150, icon: "🌲", color: "from-green-500 to-emerald-700" },
    { id: "banner_ocean", name: "Bannière Océan", price: 200, icon: "🌊", color: "from-cyan-400 to-blue-700" },
  ];

  const effectItems = [
    { id: "effect_particles", name: "Particules", price: 200, icon: "✨", color: "from-yellow-300 to-yellow-500" },
    { id: "effect_flames", name: "Flammes", price: 300, icon: "🔥", color: "from-orange-400 to-red-600" },
    { id: "effect_lightning", name: "Éclairs", price: 350, icon: "⚡", color: "from-blue-300 to-cyan-500" },
    { id: "effect_bubbles", name: "Bulles Mages", price: 150, icon: "🫧", color: "from-teal-300 to-cyan-400" },
  ];

  const mascotItems = [
    { id: "mascot_cat", name: "Chat Savant", price: 400, icon: "🐱", color: "from-amber-300 to-amber-500" },
    { id: "mascot_robot", name: "Robot Quiz", price: 500, icon: "🤖", color: "from-blue-400 to-cyan-500" },
    { id: "mascot_dragon", name: "Baby Dragon", price: 600, icon: "🐲", color: "from-red-400 to-orange-600" },
    { id: "mascot_unicorn", name: "Mini Licorne", price: 700, icon: "🦄", color: "from-pink-300 to-fuchsia-500" },
  ];

  const themeItems = [
    { id: "premium-dark", type: 'theme', name: "Dark Premium", price: 500, icon: "🌙", color: "from-slate-800 to-slate-900" },
    { id: "neon", type: 'theme', name: "Neon Cyberpunk", price: 800, icon: "⚡", color: "from-pink-500 to-cyan-500" },
  ];

  const passItem = { id: "pass_pro", type: 'pass', name: "Quizzly Pass Pro", price: 50, icon: "👑", color: "from-violet to-primary", desc: "Débloque toutes les récompenses Premium !" };

  const handleBuy = (item: any) => {
    if (item.type === 'chest') {
      const success = buyChest(item.tier, item.price);
      if (!success) showToast("Pas assez de diamants ! 💎", "error");
      return;
    }
    if (item.id === 'pass_pro') {
      const success = buyPassPro();
      if (success) showToast("Félicitations ! Tu es désormais PRO ! 👑", "success");
      else showToast(progress.isPassPro ? "Tu es déjà PRO ! ✨" : "Pas assez de diamants ! 💎", "error");
      return;
    }
    if (item.id.startsWith('n')) {
      const success = buyNeurones(item.amount, item.price);
      if (success) showToast("Neurones achetés ! 🧠", "success");
      else showToast("Pas assez de diamants ! 💎", "error");
    } else {
      const success = buyCosmetic(item.type, item.id, item.price);
      if (success) showToast(`${item.name} débloqué ! ✨`, "success");
      else showToast("Pas assez de diamants ! 💎", "error");
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

      {/* Daily Reward */}
      <section className="glass p-8 bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 border-yellow-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-[2rem]">
        <div className="flex items-center gap-6">
          <div className="text-6xl animate-bounce">🎁</div>
          <div>
            <h2 className="text-2xl font-space font-black uppercase tracking-tight">Récompense Quotidienne</h2>
            <p className="text-xs font-bold opacity-50">Reviens chaque jour pour gagner 5 💎 gratuitement !</p>
          </div>
        </div>
        <button
          onClick={() => {
            const success = claimDailyReward();
            if (success) showToast("+5 diamants récupérés ! 🎁", "success");
            else showToast("Déjà réclamé aujourd'hui ! Reviens demain 🕒", "info");
          }}
          disabled={!canClaimDaily}
          className={`px-10 py-4 rounded-2xl font-black text-lg transition-all ${canClaimDaily ? 'bg-yellow-500 text-white shadow-xl shadow-yellow-500/30 hover:scale-105' : 'bg-foreground/10 opacity-50 cursor-not-allowed'}`}
        >
          {canClaimDaily ? "RÉCLAMER +5 💎" : "RÉCLAMÉ ✅"}
        </button>
      </section>

      {/* Pass Pro */}
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

      {/* Random Mystery Chest */}
      <section className="glass p-10 bg-gradient-to-br from-violet/10 via-primary/5 to-cyan/10 rounded-[3rem] border border-primary/20 text-center space-y-6">
        <div className="text-7xl animate-pulse">🎰</div>
        <h2 className="text-3xl font-space font-black uppercase tracking-tight">Coffre Mystère Aléatoire</h2>
        <div className="flex flex-wrap justify-center gap-3 text-[10px] font-black uppercase tracking-widest">
          <span className="bg-blue-500/20 text-blue-600 px-3 py-1 rounded-full">80% Rare</span>
          <span className="bg-violet-500/20 text-violet-600 px-3 py-1 rounded-full">12% Épique</span>
          <span className="bg-rose-500/20 text-rose-600 px-3 py-1 rounded-full">5% Mythique</span>
          <span className="bg-orange-500/20 text-orange-600 px-3 py-1 rounded-full">2% Légendaire</span>
          <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">1% Ultra</span>
        </div>
        <button
          onClick={() => {
            const success = buyRandomChest(75);
            if (!success) showToast("Pas assez de diamants ! 💎", "error");
          }}
          className="bg-gradient-to-r from-violet to-primary text-white font-black px-12 py-5 rounded-2xl text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all"
        >
          TENTER SA CHANCE — 75 💎
        </button>
      </section>

      {/* Energy & Boosters */}
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
                if (success) showToast(`Booster ${item.name} activé ! 🚀`, "success");
                else showToast("Pas assez de diamants ! 💎", "error");
              }}
              crystals={progress.crystals}
              isOwned={progress.xpBoost === item.multiplier}
            />
          ))}
        </div>
      </section>

      {/* Mystery Chests */}
      <section className="space-y-8 p-10 bg-gradient-to-br from-primary/10 to-transparent rounded-[3rem] border border-primary/10">
        <h2 className="text-3xl font-space font-black flex items-center gap-4 tracking-tight">
          <span className="p-3 bg-primary/10 rounded-2xl">📦</span> Coffres
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {chestItems.map((item) => (
            <BoutiqueItem key={item.id} item={item} onBuy={handleBuy} crystals={progress.crystals} />
          ))}
        </div>
      </section>

      {/* Cosmetics: Frames, Banners, Effects, Mascots */}
      <section className="space-y-8">
        <h2 className="text-3xl font-space font-black flex items-center gap-4 tracking-tight">
          <span className="p-3 bg-amber/10 rounded-2xl">🖼️</span> Personnalisation
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {frameItems.map(item => (
            <BoutiqueItem key={item.id} item={{ ...item, type: 'frame' }} onBuy={() => {
              const ok = buyFrame(item.id, item.price);
              if (ok) showToast(`${item.name} équipé ! 🖼️`, "success");
              else showToast("Pas assez de diamants ! 💎", "error");
            }} crystals={progress.crystals} isOwned={progress.unlockedFrames.includes(item.id)} />
          ))}
          {bannerItems.map(item => (
            <BoutiqueItem key={item.id} item={{ ...item, type: 'banner' }} onBuy={() => {
              const ok = buyBanner(item.id, item.price);
              if (ok) showToast(`${item.name} débloquée ! 🎌`, "success");
              else showToast("Pas assez de diamants ! 💎", "error");
            }} crystals={progress.crystals} isOwned={progress.unlockedBanners.includes(item.id)} />
          ))}
          {effectItems.map(item => (
            <BoutiqueItem key={item.id} item={{ ...item, type: 'effect' }} onBuy={() => {
              const ok = buyEffect(item.id, item.price);
              if (ok) showToast(`Effet ${item.name} activé ! ✨`, "success");
              else showToast("Pas assez de diamants ! 💎", "error");
            }} crystals={progress.crystals} isOwned={progress.unlockedEffects.includes(item.id)} />
          ))}
          {mascotItems.map(item => (
            <BoutiqueItem key={item.id} item={{ ...item, type: 'mascot' }} onBuy={() => {
              const ok = buyMascot(item.id, item.price);
              if (ok) showToast(`Mascotte ${item.name} adoptée ! 🐾`, "success");
              else showToast("Pas assez de diamants ! 💎", "error");
            }} crystals={progress.crystals} isOwned={progress.unlockedMascots.includes(item.id)} />
          ))}
        </div>
      </section>

      {/* Thèmes Visuels */}
      <section className="space-y-8">
        <h2 className="text-3xl font-space font-black flex items-center gap-4 tracking-tight">
          <span className="p-3 bg-fuchsia-500/10 text-fuchsia-500 rounded-2xl">🎨</span> Thèmes Exclusifs
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {themeItems.map((item) => (
            <BoutiqueItem
              key={item.id}
              item={item}
              onBuy={handleBuy}
              crystals={progress.crystals}
              isOwned={progress.unlockedThemes.includes(item.id)}
            />
          ))}
        </div>
      </section>

      {/* Avatars */}
      <section className="space-y-8">
        <h2 className="text-3xl font-space font-black flex items-center gap-4 tracking-tight">
          <span className="p-3 bg-violet/10 rounded-2xl">✨</span> Avatars de Collection
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
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

      <div className="glass p-8 bg-gradient-to-r from-primary/10 to-transparent border-primary/20 rounded-[2rem]">
        <p className="opacity-80 italic text-center font-bold">Plus d'objets arrivent bientôt ! Garde tes diamants au chaud... 🔥</p>
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
        <h3 className="text-lg font-bold font-space leading-tight">{item.name}</h3>
        <p className="text-[10px] opacity-50 uppercase font-black">{item.type || 'Énergie'}</p>
      </div>

      <button
        onClick={() => onBuy(item)}
        disabled={isOwned || crystals < item.price}
        className={`w-full py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${isOwned
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
