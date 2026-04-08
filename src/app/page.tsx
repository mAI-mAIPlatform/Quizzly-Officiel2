"use client";

import { motion } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import { useState, useMemo } from "react";
import Link from "next/link";

const GREETINGS = [
  "Prêt à battre ton record aujourd'hui ? 🚀",
  "Le Quizzly Pass n'attend que toi ! 🎁",
  "Reste concentré, la victoire est au bout du quiz. 🧠",
  "Tes diamants s'impatientent dans la boutique ! 💎",
  "Un petit effort pour une grande série ? 🔥",
  "Ta tribu compte sur toi pour grimper au classement ! 🛡️",
  "Le savoir est une aventure, prêt à partir ? 🗺️",
  "Un quiz par jour éloigne l'oubli pour toujours ! 📚",
  "Prêt pour un petit blitz de connaissances ? ⚡",
];

export default function Home() {
  const { progress, claimQuestReward } = useProgress();
  const [greeting] = useState(() => GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);

  const activeTribes = useMemo(() => progress.tribes.filter((tribe) => !tribe.archived), [progress.tribes]);
  const highlightedTribe = activeTribes[0];

  return (
    <div className="flex flex-col gap-8 w-full h-full text-foreground relative z-10 p-4 md:p-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-1">
          <h1 className="text-5xl font-black font-space tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan mb-2">
            Salut, {progress.pseudo} ! 👋
          </h1>
          <p className="opacity-70 text-xl font-bold tracking-tight">{greeting}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass px-8 py-4 flex items-center gap-6">
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Énergie du moment</span>
            <span className="text-2xl font-black font-space italic text-primary">{progress.streak} jours 🔥</span>
          </div>
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20 shadow-xl">
            <span className="text-3xl">⚡</span>
          </div>
        </motion.div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Remplacement demandé: suppression avancement/raccourcis -> Hub Tribus + actions sociales */}
          <section className="glass p-8 border border-white/20 rounded-[2rem] space-y-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-black font-space italic uppercase tracking-tighter">Tribus en vedette</h2>
              <Link href="/social" className="text-[10px] font-black uppercase tracking-widest px-3 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Voir tout
              </Link>
            </div>

            {highlightedTribe ? (
              <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 flex flex-col md:flex-row gap-5 items-start md:items-center">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-violet flex items-center justify-center text-4xl shadow-xl">
                  {highlightedTribe.mascot || "🛡️"}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-2xl font-black">{highlightedTribe.name}</h3>
                  <p className="text-xs font-black uppercase tracking-wider opacity-60">{highlightedTribe.members.length} membres actifs</p>
                  <p className="text-sm opacity-75">Participe aux défis de tribu pour gagner XP, badges et boosts d&apos;équipe.</p>
                </div>
                <Link href="/social" className="px-5 py-3 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                  Rejoindre l&apos;action
                </Link>
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-white/30 bg-white/5 p-6">
                <p className="text-sm opacity-80">Tu n&apos;as pas encore de tribu active. Rejoins-en une depuis l&apos;espace Social pour débloquer des défis collectifs.</p>
                <Link href="/social" className="inline-block mt-4 px-4 py-2 rounded-xl bg-primary/15 text-primary text-xs font-black uppercase tracking-widest">
                  Explorer les tribus
                </Link>
              </div>
            )}
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Quiz IA", desc: "10 questions générées", href: "/quiz", icon: "🧠" },
              { title: "Exercices IA", desc: "Note /20 + XP x2", href: "/exercices", icon: "🧪" },
              { title: "Duels", desc: "Affronte tes amis", href: "/duel", icon: "⚔️" },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="glass p-5 rounded-[1.5rem] border border-white/20 hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 font-black text-lg">{item.title}</h3>
                <p className="text-xs opacity-70 mt-1">{item.desc}</p>
              </Link>
            ))}
          </section>
        </div>

        <div className="flex flex-col gap-8">
          <section className="glass p-8 space-y-6">
            <h2 className="text-xl font-black font-space italic uppercase tracking-tighter flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-rose/10 flex items-center justify-center text-rose text-2xl">🔥</span>
              Quêtes du jour
            </h2>
            <div className="space-y-4">
              {progress.quests.map((quest) => {
                const percent = Math.min((quest.current / quest.target) * 100, 100);
                const isDone = quest.current >= quest.target;

                return (
                  <div key={quest.id} className={`rounded-[2rem] p-5 border-2 transition-all ${quest.isCompleted ? "bg-green/5 border-green/10" : "bg-foreground/5 border-transparent"}`}>
                    <h3 className="font-black text-xs uppercase tracking-widest mb-3 opacity-80">{quest.title}</h3>
                    <div className="space-y-2">
                      <div className="w-full h-2.5 bg-foreground/5 rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${percent}%` }}
                          className={`h-full rounded-full ${isDone ? "bg-green shadow-[0_0_10px_rgba(134,239,172,0.5)]" : "bg-rose shadow-[0_0_10px_rgba(253,164,175,0.5)]"}`}
                        />
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

          <section className="glass-border-only p-8 flex flex-col relative group hover:border-primary/40 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 11L12 22L19.5 11L12 2Z" />
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
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(progress.xp % 200) / 2}%` }} className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet to-primary rounded-full" />
                </div>
              </div>

              <div className="text-center relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet to-primary text-white flex items-center justify-center text-2xl shadow-xl shadow-primary/30 border-2 border-white/20">🎁</div>
                <span className="text-[9px] font-black uppercase mt-1 block text-primary">Palier {progress.passTier + 1}</span>
              </div>
            </div>

            <p className="text-[10px] text-center font-black uppercase tracking-[0.2em] opacity-40">{200 - (progress.xp % 200)} XP avant ton prochain cadeau !</p>
          </section>
        </div>
      </div>
    </div>
  );
}
