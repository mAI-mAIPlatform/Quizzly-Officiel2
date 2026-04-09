"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const modes = [
  {
    id: "classe",
    title: "MODE CLASSÉ",
    description: "Prouve ta supériorité intellectuelle et grimpe les rangs.",
    icon: "⚔️",
    color: "from-primary to-orange-500",
    link: "/classe",
    badge: "Saison 1",
  },
  {
    id: "survie",
    title: "MODE SURVIE",
    description: "Une seule erreur, et tout s'arrête. Es-tu prêt ?",
    icon: "💀",
    color: "from-rose-600 to-orange-400",
    link: "/survie",
    badge: "Hardcore",
  },
  {
    id: "blitz",
    title: "MODE BLITZ",
    description: "Court, intense, parfait pour une révision express (5 min).",
    icon: "⚡",
    color: "from-cyan-400 to-blue-600",
    link: "/blitz",
    badge: "Nouveau",
  },
  {
    id: "duel",
    title: "MODE DUEL",
    description: "Défie tes amis ou un bot en temps réel !",
    icon: "🤝",
    color: "from-violet-500 to-primary",
    link: "/duel",
    badge: "Social",
  },
  {
    id: "vrai-faux",
    title: "VRAI OU FAUX",
    description: "Teste ton instinct avec des faits incroyables. 50/50, à toi de jouer !",
    icon: "⚖️",
    color: "from-emerald-400 to-teal-600",
    link: "/vrai-faux",
    badge: "Nouveau",
  },
];

export default function ModesPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="text-center space-y-4">
        <h1 className="text-7xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet drop-shadow-2xl uppercase">
          Modes de Jeu 🎮
        </h1>
        <p className="opacity-70 font-black uppercase tracking-[0.3em] text-xs max-w-lg mx-auto leading-relaxed">
          Choisis ton arène, puis génère une variante IA adaptée à ton niveau.
        </p>
      </header>

      <section className="glass rounded-[2.5rem] p-8 border-primary/10 bg-white/10 backdrop-blur-3xl">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50">Nouveau workflow IA</p>
            <h2 className="text-3xl font-space font-black italic tracking-tighter mt-3">Classé, Survie et tous les modes sont générables par IA</h2>
            <p className="opacity-70 mt-3 max-w-2xl">
              Tu sélectionnes le mode d&apos;apprentissage, le niveau et le thème : QuizzlyAI crée une session personnalisée en quelques secondes.
            </p>
          </div>
          <Link
            href="/quiz"
            className="self-start h-12 px-6 rounded-2xl bg-gradient-to-r from-primary to-violet text-white font-black text-xs uppercase tracking-widest flex items-center shadow-xl shadow-primary/20"
          >
            Ouvrir Quiz IA
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {modes.map((mode, i) => (
          <motion.div
            key={mode.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative"
          >
            <div className="glass p-8 h-full flex flex-col gap-6 border-primary/5 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden rounded-[3xl]">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${mode.color} opacity-5 -mr-24 -mt-24 rounded-full transition-transform group-hover:scale-150 duration-700`} />

                <div className="flex justify-between items-start relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mode.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {mode.icon}
                  </div>
                  <span className="text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-primary/10 bg-white/50 backdrop-blur-sm">
                    {mode.badge}
                  </span>
                </div>

                <div className="relative z-10">
                  <h2 className={`text-4xl font-space font-black tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r ${mode.color} mb-2`}>
                    {mode.title}
                  </h2>
                  <p className="text-sm font-medium opacity-60 leading-relaxed group-hover:opacity-80 transition-opacity">{mode.description}</p>
                </div>

                <div className="mt-auto relative z-10 flex items-center justify-between gap-3">
                  <Link href={mode.link} className="inline-flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-primary group-hover:translate-x-2 transition-transform hover:underline">
                    Entrer dans le mode <span className="text-xl">→</span>
                  </Link>
                  <Link href={`/quiz?mode=${encodeURIComponent(mode.title.replace("MODE ", ""))}`} className="text-[10px] uppercase tracking-widest font-black text-violet-600 hover:underline">
                    Variante IA
                  </Link>
                </div>
              </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
