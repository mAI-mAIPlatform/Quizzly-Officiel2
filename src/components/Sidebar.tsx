/* eslint-disable @next/next/no-img-element */
// v0.9.2 - Centralisation des modes et déplacement du profil dans la Navbar
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useProgress } from '@/context/ProgressContext';

export default function Sidebar({ className = "" }: { className?: string }) {
  const { progress } = useProgress();
  const pathname = usePathname();
  const passProgress = (progress.xp % 200) / 2;

  const isActive = (path: string) => pathname === path;
  const activeClass = "bg-primary/20 text-primary font-bold opacity-100";
  const inactiveClass = "hover:bg-foreground/5 opacity-80 hover:opacity-100 font-medium";

  return (
    <aside className={`flex flex-col glass m-4 mr-0 p-6 h-[calc(100vh-2rem)] overflow-hidden ${className}`}>
      <div className="flex flex-col items-center mb-8 gap-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 relative opacity-80">
             <img src="/images/logo.png" alt="Quizzly Logo" className="w-full h-full object-contain drop-shadow-lg" />
          </div>
          <div className="text-center">
            <div className="font-space font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan tracking-tighter italic">
              QUIZZLY
            </div>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-2 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 custom-scrollbar">
        <Link href="/" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/') ? activeClass : 'bg-primary/10 text-primary font-bold'}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
          Tableau de bord
        </Link>
        <Link href="/matieres" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/matieres') ? activeClass : inactiveClass}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
          Matières
        </Link>
        <Link href="/quetes" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/quetes') ? activeClass : inactiveClass}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          Quêtes
        </Link>
        <Link href="/profil" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/profil') ? activeClass : inactiveClass}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Mon Profil
        </Link>
        <Link href="/modes" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/modes') ? activeClass : inactiveClass}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path><path d="M9.5 17.5L21 6V3h-3L6.5 14.5"></path></svg>
          Modes de Jeu
        </Link>
        <Link href="/historique" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/historique') ? activeClass : inactiveClass}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          Historique
        </Link>
        <Link href="/boutique" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/boutique') ? activeClass : inactiveClass}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
          Boutique
        </Link>
        <Link href="/social" className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${isActive('/social') ? activeClass : inactiveClass}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Social & Tribus
        </Link>
      </nav>


      <div className="mt-6">
        <Link href="/pass" className="block p-4 rounded-xl bg-gradient-to-br from-violet/20 to-primary/20 border border-violet/20 hover:scale-105 transition-transform cursor-pointer shadow-lg shadow-violet/5">
          <div className="flex justify-between items-center mb-1">
            <h4 className="font-bold text-sm text-violet drop-shadow-sm">Quizzly Pass</h4>
            <span className="text-xs font-bold text-violet bg-violet/10 px-2 py-0.5 rounded-full">Lvl {progress.passTier}</span>
          </div>
            <p className="text-[10px] font-black opacity-40 uppercase tracking-widest mt-1">Saison 1 : Brevet Blanc 📝</p>
          <div className="w-full h-1.5 bg-foreground/10 rounded-full overflow-hidden">
            <div className="h-full bg-violet rounded-full transition-all duration-1000" style={{ width: `${passProgress}%` }}></div>
          </div>
        </Link>
      </div>
    </aside>
  );
}
