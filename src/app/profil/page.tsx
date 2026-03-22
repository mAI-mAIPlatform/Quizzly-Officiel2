"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useProgress } from "@/context/ProgressContext";
import { motion } from "framer-motion";
import Link from "next/link";

import { useState } from "react";

export default function ProfilePage() {
  const { progress, updateProfile, sendMessage } = useProgress();
  const [isEditing, setIsEditing] = useState(false);
  const [pseudo, setPseudo] = useState(progress.pseudo);
  const [bio, setBio] = useState(progress.bio);
  const [avatar, setAvatar] = useState(progress.avatar);

  const avatars = ["🦁", "🦊", "🐼", "🐨", "🐸", "🐰", "🦁", "🐯", "🤖", "🚀", "💎", "🧠"];

  const stats = [
    { label: "Quiz complétés", value: progress.completedQuizzes.length, icon: "📝", color: "text-blue-400" },
    { label: "Diamants", value: progress.crystals, icon: "💎", color: "text-cyan" },
    { label: "Série", value: `${progress.streak}j`, icon: "🔥", color: "text-orange-400" },
    { label: "Neurones", value: `${progress.neurones}/5`, icon: "🧠", color: "text-rose-400" },
    { label: "Niveau", value: progress.level, icon: "⚡", color: "text-violet" },
  ];

  const handleSave = () => {
    updateProfile({ pseudo, bio, avatar });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-700">
      {/* Header Profil */}
      <section className="glass p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden transition-all duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        {isEditing ? (
          <div className="flex flex-col items-center gap-4 shrink-0 transition-all duration-300">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-violet to-primary border-4 border-white/20 shadow-2xl flex items-center justify-center text-5xl">
              {avatar}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {avatars.map(a => (
                <button 
                  key={a} 
                  onClick={() => setAvatar(a)}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors ${avatar === a ? 'bg-primary/20 ring-1 ring-primary' : ''}`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-violet to-primary border-4 border-white/20 shadow-2xl flex items-center justify-center text-4xl font-bold text-white shrink-0">
            {progress.avatar}
          </div>
        )}
        
        <div className="text-center md:text-left space-y-4 flex-1">
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
                <h1 className="text-4xl font-space font-extrabold tracking-tighter">{progress.pseudo}</h1>
                <div className="flex gap-2">
                  <button onClick={() => setIsEditing(true)} className="w-8 h-8 glass flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" title="Modifier le profil">✏️</button>
                  <Link href="/reglages" className="w-8 h-8 glass flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" title="Paramètres">⚙️</Link>
                </div>
              </div>
              <p className="text-foreground/60 font-medium italic">"{progress.bio}"</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                 <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold border border-primary/30 uppercase tracking-widest">
                   Rang : {progress.level > 10 ? 'Expert' : progress.level > 5 ? 'Vétéran' : 'Novice'}
                 </div>
                 <div className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-bold border border-secondary/30 uppercase tracking-widest">
                   Quizzly Pass : Tier {progress.passTier}/20
                 </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Amis & Réseau (Simulé) */}
      <section className="glass p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-space font-bold flex items-center gap-3">
            <span>🤝</span> Mes Amis
          </h2>
          <button className="text-xs font-bold text-primary glass px-4 py-2 rounded-full border-primary/20">Ajouter des amis +</button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
           {[
             { name: "Lucas", avatar: "🤖", lvl: 12 },
             { name: "Saphia", avatar: "🐨", lvl: 8 },
             { name: "Thomas", avatar: "🐼", lvl: 5 }
           ].map((ami, idx) => (
             <div key={idx} className="glass p-3 flex flex-col items-center gap-2 min-w-[100px] border-white/5 bg-white/5">
                <div className="text-2xl">{ami.avatar}</div>
                <div className="font-bold text-xs">{ami.name}</div>
                <div className="text-[10px] text-primary">Lvl {ami.lvl}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Statistiques Grille */}
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

      {/* Badges & Succès */}
      <section className="glass p-10 border-primary/10 shadow-2xl relative overflow-hidden bg-white/40">
        <div className="absolute top-0 right-0 p-4 opacity-5">
           <img src="/images/logo.png" alt="" className="w-32 h-32" />
        </div>
        <h2 className="text-3xl font-space font-black mb-8 flex items-center gap-4 tracking-tight uppercase italic text-primary">
          <span>🏅</span> Mes Succès
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[
            { id: "pionnier", nom: "Pionnier", desc: "Rejoindre v0.4.4", icon: "🚀", done: true },
            { id: "premier_pas", nom: "Premier Pas", desc: "1 quiz terminé", icon: "🌱", done: progress.completedQuizzes.length >= 1 },
            { id: "savant_fou", nom: "Savant Fou", desc: "5 sans-faute", icon: "🧪", done: progress.unlockedAchievements.includes("savant_fou") },
            { id: "bourreau", nom: "Bourreau", desc: "Atteindre Niveau 5", icon: "💪", done: progress.level >= 5 },
            { id: "collectionneur", nom: "Collectionneur", desc: "3 avatars débloqués", icon: "🎨", done: progress.unlockedAvatars.length >= 3 },
            { id: "infatigable", nom: "Infatigable", desc: "7 jours de série", icon: "🔋", done: progress.streak >= 7 },
            { id: "classe_change", nom: "Maître des Classes", desc: "Changer de classe", icon: "🏫", done: progress.selectedClass !== "6ème" },
            { id: "booster", nom: "Accélérateur", desc: "Acheter un booster", icon: "⚡", done: progress.xpBoost > 1 },
          ].map((badge) => (
            <div 
              key={badge.id}
              className={`flex flex-col items-center p-6 rounded-3xl border-2 transition-all duration-700 hover:scale-105 relative group ${badge.done ? 'bg-white border-primary/20 shadow-xl shadow-primary/5' : 'opacity-20 bg-black/5 border-transparent grayscale'}`}
            >
              {badge.done && (
                <button 
                  onClick={() => {
                    const tid = progress.tribes[0]?.id || 'social';
                    sendMessage(tid, `Vient de débloquer le succès : ${badge.nom} (${badge.icon}) ! 🏅✨`);
                    alert("Succès partagé ! 📣");
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan text-white flex items-center justify-center text-[10px] shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  📣
                </button>
              )}
              <div className="text-5xl mb-3 drop-shadow-md">{badge.icon}</div>
              <div className="text-sm font-black text-center leading-none uppercase tracking-tighter mb-1">{badge.nom}</div>
              <div className="text-[9px] text-foreground/40 font-bold text-center uppercase tracking-widest leading-tight">{badge.desc}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
