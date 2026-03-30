"use client";

import { use } from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function MatiereDetailPage({ params }: PageProps) {
  const { id } = use(params);
  
  // Extraction de la matière et de la classe (ex: Maths-6eme)
  const [matiereId, classeId] = id.split("-");
  
  // Titre propre
  const displayMatiere = matiereId.replace(/([A-Z])/g, ' $1').trim();
  const displayClasse = classeId === "6eme" ? "6ème" : 
                        classeId === "5eme" ? "5ème" :
                        classeId === "4eme" ? "4ème" :
                        classeId === "3eme" ? "3ème" :
                        classeId === "2nde" ? "2nde" :
                        classeId === "1ere" ? "1ère" : "Terminale";

  const chapitres = [1, 2, 3];
  const parties = [1, 2, 3];

  return (
    <div className="flex flex-col gap-10 w-full max-w-6xl mx-auto text-foreground relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Link href="/matieres" className="glass p-3 rounded-xl hover:bg-foreground/5 transition-colors group">
            <span className="block transition-transform group-hover:-translate-x-1">⬅️</span>
          </Link>
          <div className="flex items-baseline gap-3">
             <h1 className="text-5xl font-black font-space text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan italic tracking-tighter">
                {displayMatiere}
             </h1>
             <span className="text-2xl opacity-40 font-black italic tracking-tighter uppercase">{displayClasse}</span>
          </div>
        </div>
        <p className="opacity-70 text-lg max-w-2xl font-medium">Sélectionne un chapitre pour commencer tes exercices et gagner des points d&apos;XP.</p>
      </header>

      <div className="grid grid-cols-1 gap-12">
        {chapitres.map((chNum) => (
          <section key={chNum} className="space-y-6">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl border border-primary/20">
                  {chNum}
               </div>
               <h2 className="text-3xl font-space font-black uppercase italic tracking-tighter">Chapitre {chNum}</h2>
               <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {parties.map((pNum) => (
                <Link 
                  key={pNum}
                  href={`/play/${classeId}/${matiereId}/ch${chNum}/quiz_1?partie=partie${pNum}`}
                  className="glass p-8 rounded-[2rem] flex flex-col gap-4 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-8 -mt-8"></div>
                  <div className="flex justify-between items-start relative z-10">
                     <span className="text-3xl filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500">⭐</span>
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Partie {pNum}</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-space uppercase italic tracking-tighter">Exercices d&apos;entraînement</h3>
                    <p className="text-xs opacity-60 mt-2 font-medium">5 Questions • 20 XP</p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all duration-500">
                    Lancer le quiz <span>➜</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
