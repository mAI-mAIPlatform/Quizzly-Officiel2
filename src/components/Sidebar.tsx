/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress } from "@/context/ProgressContext";

const primaryLinks = [
  { href: "/", label: "Tableau de bord", icon: "▣" },
  { href: "/quiz", label: "Quiz IA", icon: "✨" },
  { href: "/quetes", label: "Quêtes", icon: "🎯" },
  { href: "/profil", label: "Profil", icon: "👤" },
];

const secondaryLinks = [
  { href: "/modes", label: "Modes de jeu", icon: "🎮" },
  { href: "/historique", label: "Historique", icon: "🕘" },
  { href: "/boutique", label: "Boutique", icon: "💎" },
  { href: "/social", label: "Social", icon: "🤝" },
];

export default function Sidebar({ className = "" }: { className?: string }) {
  const { progress } = useProgress();
  const pathname = usePathname();
  const passProgress = (progress.xp % 200) / 2;

  const isActive = (path: string) => pathname === path;

  return (
    <aside
      className={`hidden md:flex flex-col gap-5 w-80 shrink-0 p-4 pr-0 h-[calc(100vh-2rem)] sticky top-0 ${className}`}
    >
      <div className="glass p-6 flex flex-col gap-5 h-full overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 relative rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center shadow-lg shadow-primary/10">
            <img src="/images/logo.png" alt="Quizzly Logo" className="w-full h-full object-contain p-1.5" />
          </div>
          <div>
            <div className="font-space font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan tracking-tighter italic">
              QUIZZLY
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] opacity-40">Apprends tout, joue partout</p>
          </div>
        </div>

        <div className="glass p-4 border-primary/10 bg-background/60">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-primary to-violet text-white flex items-center justify-center text-3xl shadow-xl shadow-primary/20">
              {progress.avatar}
            </div>
            <div className="min-w-0">
              <div className="font-black text-lg leading-tight truncate">{progress.pseudo}</div>
              <div className="text-[10px] uppercase font-black tracking-[0.3em] text-primary/60 truncate">
                {progress.selectedTitle}
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-[9px] font-black uppercase tracking-widest">
                <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary">{progress.settings.gameplay.learningLevel}</span>
                <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-500">{progress.streak}j</span>
                <span className="px-2.5 py-1 rounded-full bg-cyan/10 text-cyan">{progress.crystals} 💎</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto pr-1 space-y-5 scrollbar-thin scrollbar-thumb-primary/20 custom-scrollbar">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] opacity-30 mb-3 px-2">Essentiel</p>
            <div className="space-y-2">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    isActive(link.href)
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-foreground/5 hover:bg-foreground/10 text-foreground/80"
                  }`}
                >
                  <span className="text-lg w-6 text-center">{link.icon}</span>
                  <span className="font-black text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] opacity-30 mb-3 px-2">Communauté</p>
            <div className="space-y-2">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                    isActive(link.href)
                      ? "bg-primary/15 text-primary font-black"
                      : "bg-foreground/5 hover:bg-foreground/10 text-foreground/75"
                  }`}
                >
                  <span className="text-lg w-6 text-center">{link.icon}</span>
                  <span className="font-black text-sm">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <Link
          href="/pass"
          className="block p-4 rounded-3xl bg-gradient-to-br from-violet/15 to-primary/15 border border-violet/20 hover:scale-[1.01] transition-transform shadow-lg shadow-violet/5"
        >
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-black text-sm text-violet">Quizzly Pass</h4>
            <span className="text-xs font-black text-violet bg-violet/10 px-2.5 py-1 rounded-full">Lvl {progress.passTier}</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">Saison 1 : Brevet Blanc</p>
          <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
            <div className="h-full bg-violet rounded-full transition-all duration-1000" style={{ width: `${passProgress}%` }} />
          </div>
        </Link>
      </div>
    </aside>
  );
}
