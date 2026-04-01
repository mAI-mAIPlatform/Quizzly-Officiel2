import { AnimatePresence, motion, Reorder } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import { useState, useEffect } from "react";
import Link from "next/link";

const GREETINGS = [
  "Prêt à battre ton record aujourd'hui ? 🚀",
  "Le Quizzly Pass n'attend que toi ! 🎁",
  "Reste concentré, la victoire est au bout du quiz. 🧠",
  "Tes diamants s'impatientent dans la boutique ! 💎",
  "Un petit effort pour une grande série ? 🔥",
  "Deviens un Génie du quiz dès maintenant. 🎓",
  "Apprendre en s'amusant, c'est la clé ! ✨",
  "Quel sera ton prochain trophée ? 🏆",
  "Ta tribu compte sur toi pour grimper au classement ! 🛡️",
  "N'oublie pas de réclamer ta récompense quotidienne. 🎁",
  "Chaque question est une chance de briller. ✨",
  "Relève le défi et montre ton savoir ! 💪",
  "Le savoir est une aventure, prêt à partir ? 🗺️",
  "Un quiz par jour éloigne l'oubli pour toujours ! 📚",
  "Vise les étoiles, littéralement ! ⭐",
  "Ton cerveau te remerciera pour cet entraînement. 🧠",
  "La persévérance est le chemin de la réussite. 🏅",
  "Débloque de nouveaux avatars en jouant. 🦁",
  "Invite tes amis pour un duel épique ! ⚔️",
  "Le mode Survie demande tout ton sang-froid. ❄️",
  "Deviens l'expert incontesté de ta matière préférée. 🎖️",
  "Une erreur ? C'est une leçon apprise ! ✔️",
  "Gagne des gemmes pour personnaliser ton profil. 🎨",
  "Ta série de jours est sacrée, protège-la ! 🔥",
  "Prêt pour un petit blitz de connaissances ? ⚡",
  "Le Quizzly Pass Pro offre des avantages exclusifs. 👑",
  "Découvre de nouveaux thèmes chaque semaine. 🌈",
  "Ton niveau de Savant est à portée de main. 📜",
  "L'apprentissage n'a pas de limite chez Quizzly. ♾️",
  "C'est le moment idéal pour une petite session ! ☕"
];

export default function Home() {
  const { progress, claimQuestReward, reorderShortcuts } = useProgress();
  const [isEditing, setIsEditing] = useState(false);
  
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomGreeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
      setGreeting(randomGreeting);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const xpNeededForNextLevel = progress.level * 100;
  const xpProgressPercent = (progress.xp / xpNeededForNextLevel) * 100;
  
  const mathsProgressPercent = Math.min(100, Math.round((progress.completedQuizzes.length / 30) * 100));

  const shortcuts = progress.customShortcuts || ['Maths-6eme', 'Français', 'Histoire-Géo', 'SVT', 'Physique', 'Anglais'];

  return (
    <div className="flex flex-col gap-8 w-full h-full text-foreground relative z-10 p-4 md:p-8">
      
      {/* En-tête du Dashboard (v0.8.0) */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-1"
        >
          <h1 className="text-5xl font-black font-space tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan mb-2">
            Salut, {progress.pseudo} ! 👋
          </h1>
          <p className="opacity-70 text-xl font-bold tracking-tight">{greeting}</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass px-8 py-4 flex items-center gap-6"
        >
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Progression Globale</span>
            <span className="text-2xl font-black font-space italic text-primary">Niv. {progress.level}</span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center relative overflow-hidden group border-2 border-primary/20 shadow-xl">
             <div 
              className="absolute bottom-0 left-0 right-0 bg-primary/20 transition-all duration-1000" 
              style={{ height: `${xpProgressPercent}%` }}
            ></div>
            <span className="text-3xl relative z-10 group-hover:scale-125 transition-transform">🎓</span>
          </div>
        </motion.div>
      </header>

      {/* Grid Principale */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          
          {/* Reprendre apprentissage */}
          <Link href="/matiere/Maths-6eme" className="glass p-8 group transition-all duration-500 relative overflow-hidden block border-2 border-transparent hover:border-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black font-space italic uppercase tracking-tighter">Continuer l&apos;aventure</h2>
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest">En cours</span>
            </div>
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-violet flex items-center justify-center text-white shadow-2xl scale-110 md:scale-100">
                <span className="text-4xl">📐</span>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-2xl font-black">Mathématiques - 6ème</h3>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest opacity-60">
                    <span>Avancement</span>
                    <span>{mathsProgressPercent}%</span>
                  </div>
                  <div className="w-full h-3 bg-foreground/5 rounded-full overflow-hidden p-0.5 border border-foreground/5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${mathsProgressPercent}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-cyan rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)]"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Matières Rapides / Raccourcis */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black font-space italic uppercase tracking-tighter">Mes Raccourcis</h2>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${isEditing ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-foreground/5 hover:bg-foreground/10 opacity-60 hover:opacity-100'}`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                {isEditing ? 'Terminer' : 'Éditer'}
              </button>
            </div>

            <Reorder.Group 
              axis="y" 
              values={shortcuts} 
              onReorder={reorderShortcuts}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {shortcuts.map((matiere) => (
                  <Reorder.Item 
                    key={matiere} 
                    value={matiere}
                    dragListener={isEditing}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      x: isEditing ? [0, -1, 1, -1, 1, 0] : 0,
                    }}
                    transition={{ 
                      x: { repeat: Infinity, duration: 0.3 },
                      scale: { duration: 0.2 }
                    }}
                    className={`glass p-6 rounded-[2.5rem] text-center transition-all duration-300 relative group cursor-pointer ${isEditing ? 'ring-2 ring-primary/40 cursor-grab active:cursor-grabbing' : 'hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20'}`}
                  >
                    {isEditing && (
                      <div className="absolute -top-2 -left-2 bg-primary text-white p-1.5 rounded-full shadow-lg z-10">
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                          <polyline points="5 9 2 12 5 15"></polyline>
                          <polyline points="9 5 12 2 15 5"></polyline>
                          <polyline points="15 19 12 22 9 19"></polyline>
                          <polyline points="19 9 22 12 19 15"></polyline>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <line x1="12" y1="2" x2="12" y2="22"></line>
                        </svg>
                      </div>
                    )}
                    <div className="w-16 h-16 mx-auto rounded-3xl bg-foreground/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                      <span className="text-3xl">📚</span>
                    </div>
                    <h4 className="font-black text-xs uppercase tracking-widest opacity-80">{matiere}</h4>
                  </Reorder.Item>
                ))}
              </AnimatePresence>
            </Reorder.Group>
          </div>
        </div>

        {/* Colonne Latérale */}
        <div className="flex flex-col gap-8">
          
          {/* Quête du Jour */}
          <section className="glass p-8 space-y-6">
            <h2 className="text-xl font-black font-space italic uppercase tracking-tighter flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-rose/10 flex items-center justify-center text-rose text-2xl">🔥</span>
              Quêtes du jour
            </h2>
            <div className="space-y-4">
              {progress.quests.map(quest => {
                const percent = Math.min((quest.current / quest.target) * 100, 100);
                const isDone = quest.current >= quest.target;

                return (
                  <div key={quest.id} className={`rounded-[2rem] p-5 border-2 transition-all ${quest.isCompleted ? 'bg-green/5 border-green/10' : 'bg-foreground/5 border-transparent'}`}>
                    <h3 className="font-black text-xs uppercase tracking-widest mb-3 opacity-80">{quest.title}</h3>
                    <div className="space-y-2">
                       <div className="w-full h-2.5 bg-foreground/5 rounded-full overflow-hidden p-0.5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          className={`h-full rounded-full ${isDone ? 'bg-green shadow-[0_0_10px_rgba(134,239,172,0.5)]' : 'bg-rose shadow-[0_0_10px_rgba(253,164,175,0.5)]'}`}
                        ></motion.div>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest mt-1">
                        <span className="opacity-60">{Math.min(quest.current, quest.target)} / {quest.target}</span>
                        {quest.isCompleted ? (
                          <span className="text-green">Récupéré ✓</span>
                        ) : isDone ? (
                          <button onClick={() => claimQuestReward(quest.id)} className="bg-primary text-white px-3 py-1.5 rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            +{quest.xpReward} XP
                          </button>
                        ) : (
                          <span className="text-rose">+{quest.xpReward} XP</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Quizzly Pass (Liquid Glass v0.8.0) */}
          <section className="glass-border-only p-8 flex flex-col relative group hover:border-primary/40 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 11L12 22L19.5 11L12 2Z"/>
              </svg>
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-10 rounded-2xl bg-violet/10 flex items-center justify-center text-2xl shadow-inner">👑</span>
              <div>
                <h2 className="text-xl font-black font-space italic uppercase tracking-tighter leading-none">Quizzly Pass</h2>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Saison 1 : Découverte</span>
              </div>
            </div>
            
            <div className="flex justify-between items-end mb-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center font-black text-xl border-2 border-foreground/5">{progress.passTier}</div>
                <span className="text-[8px] font-black uppercase mt-1 block opacity-40">Tier</span>
              </div>
              
              <div className="flex-1 px-4 pb-6">
                <div className="w-full h-1.5 bg-foreground/5 rounded-full relative overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(progress.xp % 200) / 2}%` }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet to-primary rounded-full"
                  ></motion.div>
                </div>
              </div>

              <div className="text-center group-hover:scale-110 transition-transform relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet to-primary text-white flex items-center justify-center text-2xl shadow-xl shadow-primary/30 border-2 border-white/20">
                  🎁
                </div>
                {!progress.isPassPro && (
                  <div className="absolute -top-2 -right-2 bg-rose-500 text-white p-1 rounded-lg shadow-lg border border-white/20 scale-75">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                )}
                <span className="text-[9px] font-black uppercase mt-1 block text-primary">Palier {progress.passTier + 1}</span>
              </div>
            </div>
            
            <p className="text-[10px] text-center font-black uppercase tracking-[0.2em] opacity-40">
              {200 - (progress.xp % 200)} XP avant ton prochain cadeau !
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
