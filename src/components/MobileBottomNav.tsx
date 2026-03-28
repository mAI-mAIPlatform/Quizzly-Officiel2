"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const primaryItems = [
  { href: "/", label: "Accueil", icon: "🏠" },
  { href: "/matieres", label: "Matières", icon: "📚" },
  { href: "/social", label: "Social", icon: "🤝" },
  { href: "/quetes", label: "Quêtes", icon: "🎯" },
  { href: "/profil", label: "Profil", icon: "👤" },
];

const moreItems = [
  { href: "/modes", label: "Modes", icon: "🎮" },
  { href: "/boutique", label: "Boutique", icon: "💎" },
  { href: "/historique", label: "Historique", icon: "🕘" },
  { href: "/reglages", label: "Réglages", icon: "⚙️" },
  { href: "/pass", label: "Pass", icon: "🏁" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.includes("/play/") || pathname.includes("/quiz/")) return null;

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="glass rounded-[1.8rem] border-primary/10 bg-background/85 backdrop-blur-2xl px-2 py-2 shadow-2xl shadow-black/10">
        <div className="grid grid-cols-6 gap-1">
          {primaryItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 rounded-2xl py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
                isActive(item.href) ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-foreground/60 hover:bg-foreground/5"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}

          <button
            onClick={() => setOpen((value) => !value)}
            className={`flex flex-col items-center justify-center gap-1 rounded-2xl py-2 text-[10px] font-black uppercase tracking-widest transition-all ${
              open ? "bg-foreground text-white shadow-lg" : "text-foreground/60 hover:bg-foreground/5"
            }`}
          >
            <span className="text-lg">⋯</span>
            <span>Plus</span>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              className="mt-3 grid grid-cols-2 gap-2"
            >
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl bg-foreground/5 px-4 py-3 text-sm font-bold hover:bg-foreground/10 transition-colors"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
