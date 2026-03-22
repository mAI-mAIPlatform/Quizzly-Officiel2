/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-const */
import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

// Simulation d'une page dynamique pour Next.js App Router
export default async function ChapitrePage({
  params,
}: {
  params: Promise<{ id: string; chapitre: string }>;
}) {
  const resolvedParams = await params;
  const [matiereId, niveau] = resolvedParams.id.split("-"); // ex: maths-6 -> maths, 6
  
  const normalizedNiveau = niveau === "6" ? "6eme" : niveau === "5" ? "5eme" : niveau === "4" ? "4eme" : niveau === "3" ? "3eme" : niveau;
  const dataRoot = path.resolve(process.cwd(), "src/data");
  const basePath = path.join(dataRoot, normalizedNiveau || "6eme", matiereId || "maths");
  let metadata, quizFiles = [];
  let quizzes = [];

  try {
    const metaStr = await fs.readFile(path.join(basePath, "metadata.json"), "utf8");
    metadata = JSON.parse(metaStr);
    
    const chapDir = path.join(basePath, resolvedParams.chapitre);
    const files = await fs.readdir(chapDir);
    quizFiles = files.filter(f => f.endsWith(".json"));
    
    // Lire le contenu de chaque quiz
    for (const f of quizFiles) {
      const qStr = await fs.readFile(path.join(chapDir, f), "utf8");
      quizzes.push(JSON.parse(qStr));
    }
    // Trier par numéro de quiz (quiz1, quiz2...)
    quizzes.sort((a, b) => {
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

      <section className="mt-8 flex flex-col items-center py-10 relative w-full overflow-hidden">
        {/* Ligne pointillée centrale (la ligne de progression) */}
        <div className="absolute top-16 bottom-20 left-1/2 w-0 border-l-[6px] border-dashed border-white/40 dark:border-white/20 -translate-x-[3px] z-0"></div>
        
        <h2 className="text-2xl font-space font-bold mb-16 text-center relative z-10 bg-background/60 backdrop-blur-md px-6 py-2 rounded-full shadow-sm text-primary">
          Chemin de la Connaissance 🚀
        </h2>
        
        <div className="flex flex-col gap-24 w-full max-w-md mx-auto relative z-10 pb-10">
          {quizzes.map((quiz, index) => {
            // Effet zigzag (gauche puis droite alterné)
            const isEven = index % 2 === 0;
            const offsetX = index === 0 ? 'translate-x-0' : (isEven ? '-translate-x-14 sm:-translate-x-20' : 'translate-x-14 sm:translate-x-20');
            
            return (
              <div key={quiz.id} className="flex justify-center w-full">
                <div className={`relative flex flex-col items-center group ${offsetX}`}>
                  <Link
                    href={`/play/${niveau}/${matiereId}/${resolvedParams.chapitre}/${quiz.id}`}
                    className={`
                      relative flex items-center justify-center 
                      w-24 h-24 rounded-full 
                      shadow-[0_15px_30px_rgba(0,0,0,0.15),_inset_0_-8px_15px_rgba(0,0,0,0.2),_inset_0_8px_15px_rgba(255,255,255,0.7)]
                      bg-gradient-to-br from-[#dcf0ff] via-[#d0bbf2] to-[#ffc8f3] dark:from-[#679ecc] dark:via-[#957bd4] dark:to-[#d68fc4]
                      transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 active:scale-95
                      ring-4 ring-transparent hover:ring-white/50
                    `}
                  >
                     {/* Étoile 3D (SVG) */}
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] opacity-95 group-hover:text-yellow-100 transition-colors">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                     </svg>
                     
                     {/* Reflet glossy en haut pour l'effet bulle */}
                     <div className="absolute top-1 left-[15%] w-[70%] h-[35%] bg-gradient-to-b from-white/90 to-white/10 rounded-t-full opacity-80 blur-[0.5px]"></div>
                     
                     {/* Bulle de niveau/questions */}
                     <div className="absolute -bottom-2 -right-2 bg-background border border-foreground/10 text-xs font-bold px-2 py-1 rounded-full shadow-md text-primary">
                       {quiz.questions.length}Q
                     </div>
                  </Link>

                  {/* Titre du quiz (en dessous) */}
                  <div className="absolute top-28 w-44 mt-3 flex flex-col items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="bg-background/80 backdrop-blur-md rounded-xl px-4 py-2 text-sm font-bold shadow-md text-center text-foreground border border-foreground/10 leading-tight">
                       {quiz.titre}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
