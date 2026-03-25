"use client";


import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const { progress, updateProfile, sendMessage } = useProgress();
  const { showToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [pseudo, setPseudo] = useState(progress.pseudo);
  const [bio, setBio] = useState(progress.bio);
  const [avatar, setAvatar] = useState(progress.avatar);

  const avatars = ["🦁", "🦊", "🐼", "🐨", "🐸", "🐰", "🐯", "🤖", "🚀", "💎", "🧠", "🐺", "🦅", "🐙", "🦋", "🎭", "🌟"];

  const stats = [
    { label: "Quiz complétés", value: progress.completedQuizzes.length, icon: "📝", color: "text-blue-400" },
    { label: "Diamants", value: progress.crystals, icon: "💎", color: "text-cyan" },
    { label: "Série", value: `${progress.streak}j`, icon: "🔥", color: "text-orange-400" },
    { label: "Étoiles", value: `${progress.stars}/5`, icon: "⭐", color: "text-rose-400" },
    { label: "Niveau", value: progress.level, icon: "⚡", color: "text-violet" },
  ];

  const handleSave = () => {
    updateProfile({ pseudo, bio, avatar });
    setIsEditing(false);
    showToast("Profil mis à jour ! ✅", "success");
  };

  const myTribe = progress.tribes.length > 0 ? progress.tribes[0] : null;

  const achievements = [
    { id: "pionnier", nom: "Pionnier", desc: "Rejoindre Quizzly", icon: "🚀", done: true },
    { id: "premier_pas", nom: "Premier Pas", desc: "1 quiz terminé", icon: "🌱", done: progress.completedQuizzes.length >= 1 },
    { id: "savant_fou", nom: "Savant Fou", desc: "5 sans-faute", icon: "🧪", done: progress.unlockedAchievements.includes("savant_fou") },
    { id: "bourreau", nom: "Bourreau", desc: "Atteindre Niveau 5", icon: "💪", done: progress.level >= 5 },
    { id: "collectionneur", nom: "Collectionneur", desc: "3 avatars débloqués", icon: "🎨", done: progress.unlockedAvatars.length >= 3 },
    { id: "infatigable", nom: "Infatigable", desc: "7 jours de série", icon: "🔋", done: progress.streak >= 7 },
    { id: "studieux", nom: "Studieux", desc: "14 jours de série", icon: "📚", done: progress.streak >= 14 },
    { id: "classe_change", nom: "Maître des Classes", desc: "Changer de classe", icon: "🏫", done: progress.selectedClass !== "6ème" },
    { id: "booster", nom: "Accélérateur", desc: "Acheter un booster", icon: "⚡", done: progress.xpBoost > 1 },
    { id: "roi_coffre", nom: "Roi du Coffre", desc: "Ouvrir 10 coffres", icon: "📦", done: progress.chests.length >= 10 },
    { id: "mondialiste", nom: "Mondialiste", desc: "Rejoindre 3 tribus", icon: "🌍", done: progress.tribes.length >= 3 },
    { id: "millionnaire", nom: "Millionnaire", desc: "Accumuler 1000 💎", icon: "💰", done: progress.crystals >= 1000 },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700 pb-20">
      {/* Header Profil */}
      <section className={`glass p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden transition-all duration-500
        ${progress.profileBanner === "banner_stars" ? "bg-gradient-to-r from-yellow-500/10 to-transparent" : ""}
        ${progress.profileBanner === "banner_galaxy" ? "bg-gradient-to-r from-indigo-500/10 to-purple-500/10" : ""}
        ${progress.profileBanner === "banner_forest" ? "bg-gradient-to-r from-emerald-500/10 to-green-500/10" : ""}
        ${progress.profileBanner === "banner_ocean" ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10" : ""}
      `}>
        {progress.selectedEffect === "effect_particles" && <div className="absolute inset-0 bg-[url('/particles.png')] opacity-20 pointer-events-none animate-pulse"></div>}
        {progress.selectedEffect === "effect_flames" && <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-orange-500/20 to-transparent pointer-events-none animate-bounce"></div>}
        {progress.selectedEffect === "effect_lightning" && <div className="absolute inset-0 border-x-4 border-cyan-400/30 pointer-events-none animate-pulse"></div>}
        {progress.selectedEffect === "effect_bubbles" && <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-300/10 to-transparent pointer-events-none animate-ping"></div>}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        {isEditing ? (
          <div className="flex flex-col items-center gap-4 shrink-0 transition-all duration-300">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-violet to-primary border-4 border-white/20 shadow-2xl flex items-center justify-center text-5xl">
              {avatar}
            </div>
            <div className="grid grid-cols-6 gap-2">
              {avatars.map((a, i) => (
                <button 
                  key={`${a}-${i}`} 
                  onClick={() => setAvatar(a)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors ${avatar === a ? 'bg-primary/20 ring-1 ring-primary' : ''}`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-violet to-primary border-4 border-white/20 shadow-2xl flex items-center justify-center text-4xl font-bold text-white shrink-0 relative">
            {progress.avatar}
            {progress.profileFrame !== "default" && progress.profileFrame === "frame_gold" && <div className="absolute -inset-2 rounded-full border-4 border-yellow-400 animate-pulse"></div>}
            {progress.profileFrame !== "default" && progress.profileFrame === "frame_diamond" && <div className="absolute -inset-2 rounded-full border-4 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>}
            {progress.profileFrame !== "default" && progress.profileFrame === "frame_fire" && <div className="absolute -inset-2 rounded-full border-4 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-pulse"></div>}
            {progress.profileFrame !== "default" && progress.profileFrame === "frame_emerald" && <div className="absolute -inset-2 rounded-full border-4 border-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>}
            {progress.profileFrame !== "default" && progress.profileFrame === "frame_ruby" && <div className="absolute -inset-2 rounded-full border-4 border-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.8)] animate-pulse"></div>}
            
            {progress.selectedMascot && (
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-xl animate-bounce border-2 border-primary/20">
                {progress.selectedMascot === 'mascot_cat' && '🐱'}
                {progress.selectedMascot === 'mascot_robot' && '🤖'}
                {progress.selectedMascot === 'mascot_dragon' && '🐲'}
                {progress.selectedMascot === 'mascot_unicorn' && '🦄'}
              </div>
            )}
          </div>
        )}
        
        <div className="text-center md:text-left space-y-4 flex-1 relative z-10">
          {isEditing ? (
            <div className="space-y-3">
              <input 
                type="text" 
                value={pseudo} 
                onChange={(e) => setPseudo(e.target.value)}
                className="text-3xl font-space font-extrabold tracking-tighter bg-foreground/5 p-2 rounded-xl w-full border border-white/10 outline-none focus:border-primary"
                placeholder="Ton Pseudo"
              />
              <textarea 
                value={bio} 
                onChange={(e) => setBio(e.target.value)}
                className="text-foreground/60 font-medium bg-foreground/5 p-2 rounded-xl w-full border border-white/10 outline-none focus:border-primary h-20"
                placeholder="Ta biographie..."
              />
              <div className="flex gap-2">
                <button onClick={handleSave} className="bg-primary text-white font-bold px-6 py-2 rounded-full text-sm">Enregistrer</button>
                <button onClick={() => setIsEditing(false)} className="glass px-6 py-2 rounded-full text-sm">Annuler</button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <h1 className={`text-4xl font-space font-extrabold tracking-tighter
                  ${progress.selectedPseudoEffect === "pseudo_rainbow" ? "animate-rainbow bg-clip-text text-transparent bg-[length:200%_auto] bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500" : ""}
                  ${progress.selectedPseudoEffect === "pseudo_neon" ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" : ""}
                  ${progress.selectedPseudoEffect === "pseudo_fire" ? "text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)] bg-clip-text text-transparent bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400" : ""}
                  ${progress.selectedPseudoEffect === "pseudo_frozen" ? "text-blue-200 drop-shadow-[0_0_10px_rgba(191,219,254,0.8)] italic" : ""}
                `}>
                  {progress.pseudo}
                </h1>
                <div className="flex gap-2">
                  <button onClick={() => setIsEditing(true)} className="w-8 h-8 glass flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" title="Modifier le profil">✏️</button>
                  <Link href="/reglages" className="w-8 h-8 glass flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" title="Paramètres">⚙️</Link>
                </div>
              </div>
              {progress.selectedTitle && (
                <div className="text-xs font-black text-primary uppercase tracking-widest">{progress.selectedTitle}</div>
              )}
              <p className="text-foreground/60 font-medium italic">&quot;{progress.bio}&quot;</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                 <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold border border-primary/30 uppercase tracking-widest">
                   Rang : {progress.level > 10 ? 'Expert' : progress.level > 5 ? 'Vétéran' : 'Novice'}
                 </div>
                 <div className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-bold border border-secondary/30 uppercase tracking-widest">
                   Pass : Tier {progress.passTier}/30
                 </div>
                 {myTribe && (
                   <div className="bg-cyan/20 text-cyan px-4 py-1.5 rounded-full text-xs font-bold border border-cyan/30 uppercase tracking-widest">
                     Tribu : {myTribe.name}
                   </div>
                 )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Streak + Shields + Boosters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Streak */}
        <div className="glass p-6 text-center space-y-3 border-orange-500/10">
          <div className="text-5xl animate-bounce">🔥</div>
          <div className="text-4xl font-space font-black text-orange-500">{progress.streak}j</div>
          <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Série en cours</div>
          <div className="flex justify-center gap-1 pt-2">
            {Array.from({length: 7}).map((_, i) => (
              <div key={i} className={`w-6 h-6 rounded-full text-[8px] flex items-center justify-center font-black ${i < (progress.streak % 7 || 7) ? 'bg-orange-500 text-white' : 'bg-foreground/10 opacity-30'}`}>
                {['L','M','M','J','V','S','D'][i]}
              </div>
            ))}
          </div>
        </div>

        {/* Shields */}
        <div className="glass p-6 text-center space-y-3 border-blue-500/10">
          <div className="text-5xl">🛡️</div>
          <div className="text-4xl font-space font-black text-blue-500">{progress.shields}</div>
          <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Boucliers</div>
          <Link href="/boutique" className="inline-block mt-2 px-4 py-1.5 bg-blue-500/10 text-blue-500 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-500/20 transition-colors">
            En avoir plus →
          </Link>
        </div>

        {/* Boosters */}
        <div className="glass p-6 text-center space-y-3 border-violet/10">
          <div className="text-5xl">⚡</div>
          <div className="text-4xl font-space font-black text-violet">x{progress.xpBoost}</div>
          <div className="text-[10px] font-black uppercase tracking-widest opacity-50">Booster actif</div>
          <Link href="/boutique" className="inline-block mt-2 px-4 py-1.5 bg-violet/10 text-violet rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-violet/20 transition-colors">
            Améliorer →
          </Link>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-6 text-center group hover:scale-105 transition-all duration-300 border-white/10"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
            <div className={`text-2xl font-space font-black ${stat.color}`}>{stat.value}</div>
            <div className="text-[10px] font-bold text-foreground/50 uppercase tracking-tighter mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Sélection Cosmétiques */}
      <section className="glass p-8 border-violet/10">
        <h2 className="text-2xl font-space font-black mb-6 flex items-center gap-3 text-violet uppercase italic">
          <span>✨</span> Personnalisation
        </h2>
        
        <div className="space-y-6">
          {/* Effets de pseudo */}
          <div>
             <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Effets de pseudo</h3>
             <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => updateProfile({ selectedPseudoEffect: "" })}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${!progress.selectedPseudoEffect ? 'bg-primary text-white shadow-lg' : 'bg-foreground/5 opacity-50'}`}
                >
                  Aucun
                </button>
                {progress.unlockedPseudoEffects.map(id => (
                  <button 
                    key={id}
                    onClick={() => updateProfile({ selectedPseudoEffect: id })}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${progress.selectedPseudoEffect === id ? 'bg-primary text-white shadow-lg' : 'bg-foreground/5 hover:bg-foreground/10'}`}
                  >
                    {id === "pseudo_rainbow" && "Arc-en-ciel 🌈"}
                    {id === "pseudo_neon" && "Néon ⚡"}
                    {id === "pseudo_fire" && "Brasier 🔥"}
                    {id === "pseudo_frozen" && "Glace 🧊"}
                  </button>
                ))}
             </div>
          </div>

          <div className="h-px bg-foreground/5"></div>

          {/* Autres cosmétiques (déjà debloqués mais non équipés) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Bannières</h3>
                <div className="flex flex-wrap gap-2">
                  {progress.unlockedBanners.map(id => (
                    <button key={id} onClick={() => updateProfile({ profileBanner: id })} className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase border transition-all ${progress.profileBanner === id ? 'border-primary bg-primary/10 text-primary' : 'border-transparent bg-foreground/5'}`}>
                      {id.replace('banner_', '')}
                    </button>
                  ))}
                </div>
             </div>
             <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Cadres</h3>
                <div className="flex flex-wrap gap-2">
                  {progress.unlockedFrames.map(id => (
                    <button key={id} onClick={() => updateProfile({ profileFrame: id })} className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase border transition-all ${progress.profileFrame === id ? 'border-primary bg-primary/10 text-primary' : 'border-transparent bg-foreground/5'}`}>
                      {id.replace('frame_', '')}
                    </button>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Succès */}
      <section className="glass p-10 border-primary/10 shadow-2xl relative overflow-hidden bg-white/40">
        <h2 className="text-3xl font-space font-black mb-8 flex items-center gap-4 tracking-tight uppercase italic text-primary">
          <span>🏅</span> Mes Succès ({achievements.filter(a => a.done).length}/{achievements.length})
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {achievements.map((badge) => (
            <div 
              key={badge.id}
              className={`flex flex-col items-center p-4 rounded-3xl border-2 transition-all duration-700 hover:scale-105 relative group ${badge.done ? 'bg-white border-primary/20 shadow-xl shadow-primary/5' : 'opacity-20 bg-black/5 border-transparent grayscale'}`}
            >
              {badge.done && (
                <button 
                  onClick={() => {
                    const tid = progress.tribes[0]?.id || 'social';
                    sendMessage(tid, `Vient de débloquer le succès : ${badge.nom} (${badge.icon}) ! 🏅✨`);
                    showToast("Succès partagé ! 📣", "success");
                  }}
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cyan text-white flex items-center justify-center text-[10px] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  📣
                </button>
              )}
              <div className="text-4xl mb-2 drop-shadow-md">{badge.icon}</div>
              <div className="text-[10px] font-black text-center leading-none uppercase tracking-tighter mb-1">{badge.nom}</div>
              <div className="text-[8px] text-foreground/40 font-bold text-center uppercase tracking-widest leading-tight">{badge.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
