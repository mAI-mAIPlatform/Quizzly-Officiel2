/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-const */
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";
import { motion } from "framer-motion";

// Simulation d'une page dynamique pour Next.js App Router
export default async function ChapitrePage({
  params,
}: {
  params: Promise<{ id: string; chapitre: string }>;
}) {
  const resolvedParams = await params;
  const [matiereId, niveau] = resolvedParams.id.split("-"); // ex: maths-6 -> maths, 6
  
  const levelMap: Record<string, string> = {
    "6": "debutant", "6eme": "debutant", "debutant": "debutant",
    "5": "entrainement", "5eme": "entrainement", "entrainement": "entrainement",
    "4": "etudiant", "4eme": "etudiant", "etudiant": "etudiant",
    "3": "difficile", "3eme": "difficile", "difficile": "difficile",
    "2": "expert", "2nde": "expert", "expert": "expert",
    "1": "savant", "1ere": "savant", "savant": "savant",
    "T": "genie", "terminale": "genie", "genie": "genie"
  };

  const normalizedNiveau = levelMap[niveau] || levelMap[niveau.toLowerCase()] || niveau;
  const dataRoot = path.resolve(process.cwd(), "src/data");
  const levelDir = path.join(dataRoot, normalizedNiveau);
  const basePath = path.join(levelDir, matiereId || "maths");
  let metadata;
  let quizzes = [];

  try {
    const metaStr = await fs.readFile(path.join(basePath, "metadata.json"), "utf8");
    metadata = JSON.parse(metaStr);
    
    const chapDir = path.join(basePath, resolvedParams.chapitre);
    const parties = ["partie1", "partie2", "partie3"];
    
    // Détection de l'ancienne structure (fichiers JSON à la racine du chapitre)
    const rootFiles = await fs.readdir(chapDir);
    const rootQuizzes = rootFiles.filter(f => f.endsWith(".json"));

    if (rootQuizzes.length > 0) {
      // Ancienne structure : charger les quiz directement
      for (const f of rootQuizzes) {
        const qStr = await fs.readFile(path.join(chapDir, f), "utf8");
        quizzes.push({ ...JSON.parse(qStr), partie: 1 });
      }
    } else {
      // Nouvelle structure : charger par parties
      for (let i = 0; i < parties.length; i++) {
        const part = parties[i];
        const partDir = path.join(chapDir, part);
        
        try {
          const files = await fs.readdir(partDir);
          const partFiles = files.filter(f => f.endsWith(".json"));
          
          for (const f of partFiles) {
            const qStr = await fs.readFile(path.join(partDir, f), "utf8");
            quizzes.push({ ...JSON.parse(qStr), partie: i + 1 });
          }
        } catch {
          // Dossier de partie absent, on ignore
        }
      }
    }

    // Trier les quiz : d'abord par partie, puis par numéro de quiz dans l'ID
    quizzes.sort((a, b) => {
      if (a.partie !== b.partie) return a.partie - b.partie;
      const numA = parseInt(a.id.replace("quiz", "")) || 0;
      const numB = parseInt(b.id.replace("quiz", "")) || 0;
      return numA - numB;
    });

  } catch (err) {
    console.error("Erreur de lecture des quiz:", err);
  }

  const chapitreInfo = metadata?.chapitres?.find((c: any) => c.id === resolvedParams.chapitre);

  if (!metadata || !chapitreInfo) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4">
        <h1 className="text-2xl font-bold">Chapitre introuvable</h1>
        <Link href="/" className="px-6 py-2 glass rounded-full hover:bg-white/10">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto text-foreground relative z-10 min-h-[80vh]">
      {/* Un fond dégradé subtil façon ciel pastel (violet vers bleu) pour accentuer l'immersion */}
      <div className="absolute inset-x-0 -top-10 bottom-0 bg-gradient-to-b from-[#d1bcf5]/20 to-[#add8e6]/20 dark:from-[#b8a4f5]/10 dark:to-[#a3dff7]/10 -z-10 rounded-3xl blur-xl"></div>

      <div className="pt-4 px-4 sm:px-0">
        <Link href="/" className="text-primary font-medium hover:underline w-fit flex items-center gap-2">
          <span>←</span> Retour au tableau de bord
        </Link>
      </div>
      
      <header className="glass p-8 relative overflow-hidden mx-4 sm:mx-0">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="inline-block px-3 py-1 bg-foreground/5 rounded-md text-sm font-semibold mb-4 text-primary">
          {metadata.titre} - {metadata.niveau}
        </div>
        <h1 className="text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet">
          {chapitreInfo.titre}
        </h1>
        <p className="opacity-70 mt-3 text-lg">{quizzes.length} Quiz disponibles (Total: {quizzes.reduce((acc, q) => acc + q.questions.length, 0)} questions)</p>
      </header>

      <section className="mt-8 relative w-full pb-20">
        {/* Ligne pointillée centrale */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400/40 via-cyan-400/40 to-transparent -translate-x-1/2 border-l-2 border-dashed border-emerald-500/20"></div>
        
        <div className="flex flex-col gap-16 relative z-10 pt-10">
          {[1, 2, 3].map((partieNum) => {
            const partieQuizzes = quizzes.filter(q => q.partie === partieNum);
            if (partieQuizzes.length === 0) return null;

            return (
              <div key={`partie-${partieNum}`} className="flex flex-col gap-12">
                <div className="flex items-center gap-4 px-4 sm:px-0">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30"></div>
                  <h2 className="text-xl font-black uppercase tracking-tighter text-primary/60">
                    Partie {partieNum}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30"></div>
                </div>

                <div className="flex flex-col gap-24">
                  {partieQuizzes.map((quiz) => {
                    const globalIndex = quizzes.indexOf(quiz);
                    const isLeft = globalIndex % 2 === 0;

                    return (
                      <div 
                        key={quiz.id} 
                        className={`flex items-center w-full ${isLeft ? 'justify-start md:pr-[50%]' : 'justify-end md:pl-[50%]'}`}
                      >
                        <div className="relative group mx-auto md:mx-0">
                          {/* Numero du Quiz */}
                          <div className={`absolute -top-4 ${isLeft ? '-right-4' : '-left-4'} w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black z-20 shadow-lg border-2 border-white/20`}>
                            {globalIndex + 1}
                          </div>

                          <Link href={`/play/${niveau}/${matiereId}/${resolvedParams.chapitre}/${quiz.id}?partie=${partieNum}`}>
                            <motion.div 
                              whileHover={{ scale: 1.1, rotate: isLeft ? -5 : 5 }}
                              whileTap={{ scale: 0.9 }}
                              className={`
                                relative flex flex-col items-center justify-center 
                                w-32 h-32 md:w-36 md:h-36 rounded-full 
                                bg-white border-4 border-emerald-100 shadow-2xl transition-all duration-300
                                overflow-hidden
                              `}
                            >
                               {/* Background glossy Ocean */}
                               <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 opacity-50"></div>
                               <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-400/10 rounded-full blur-2xl -mr-12 -mt-12"></div>
                               
                               {/* Étoile ou Icone */}
                               <div className="text-4xl md:text-5xl mb-1 relative z-10 filter drop-shadow-sm">⭐</div>
                               
                               <div className="text-[9px] font-black uppercase tracking-widest text-emerald-700 relative z-10 px-4 text-center leading-tight">
                                 {quiz.titre}
                               </div>

                               {/* Bulle de questions */}
                               <div className="absolute -bottom-1 bg-cyan-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full shadow-lg">
                                 {quiz.questions.length} QUESTIONS
                               </div>
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
