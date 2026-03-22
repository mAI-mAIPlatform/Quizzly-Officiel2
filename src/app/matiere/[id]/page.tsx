/* eslint-disable @typescript-eslint/no-explicit-any */
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";

export default async function MatierePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const [matiereId, niveau] = resolvedParams.id.split("-");

  const normalizedNiveau = niveau === "6" ? "6eme" : niveau === "5" ? "5eme" : niveau === "4" ? "4eme" : niveau === "3" ? "3eme" : niveau;
  const dataRoot = path.resolve(process.cwd(), "src/data");
  const basePath = path.join(dataRoot, normalizedNiveau || "6eme", matiereId || "maths");
  
  let metadata: any = null;

  try {
    const metaStr = await fs.readFile(path.join(basePath, "metadata.json"), "utf8");
    metadata = JSON.parse(metaStr);
  } catch (err) {
    console.error("Erreur de lecture métadonnées matiere:", err);
  }

  if (!metadata) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-3xl font-space font-bold">Contenu en cours de création</h1>
        <p className="opacity-70 max-w-md">Le programme de cette matière ({matiereId} {normalizedNiveau}) est encore en phase de rédaction par nos professeurs !</p>
        <Link href="/matieres" className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-2xl hover:brightness-110">
          Retour aux matières
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto text-foreground relative z-10 animate-in fade-in duration-500">
      <Link href="/matieres" className="text-primary font-medium hover:underline w-fit flex items-center gap-2">
        <span>←</span> Retour aux matières
      </Link>

      <header className="glass p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-background to-primary/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-5xl md:text-6xl text-white shadow-xl isolate relative z-10 border-4 border-white/10">
          📐
        </div>
        
        <div className="relative z-10 flex-1 text-center md:text-left">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-md text-sm font-bold tracking-widest uppercase mb-4 text-primary">
            {metadata.niveau}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet drop-shadow-sm">
            {metadata.titre}
          </h1>
          <p className="opacity-80 mt-4 text-lg max-w-2xl">
            {metadata.description || "Découvre et maîtrise tous les concepts clés du programme grâce à des centaines de quiz interactifs !"}
          </p>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-space font-bold mb-6 flex items-center gap-3">
          <span className="text-primary">📚</span> Programme du bout des doigts
        </h2>
        
        <div className="flex flex-col gap-4">
          {metadata.chapitres?.map((chap: any, index: number) => (
            <Link 
              href={`/matiere/${resolvedParams.id}/${chap.id}`}
              key={chap.id}
              className="glass p-6 flex flex-col md:flex-row items-start md:items-center gap-6 group hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center text-xl font-bold font-space group-hover:bg-primary group-hover:text-primary-foreground shadow-inner transition-colors">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-space group-hover:text-primary transition-colors">{chap.titre}</h3>
                <p className="opacity-70 mt-1">{chap.nbQuizzes} Quiz à débloquer</p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-primary font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                Voir les exercices <span className="text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
