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
  const basePath = path.join(process.cwd(), "src", "data", normalizedNiveau || "6eme", matiereId || "maths");
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

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto text-foreground relative z-10">
      <Link href="/" className="text-primary font-medium hover:underline w-fit flex items-center gap-2">
        <span>←</span> Retour au tableau de bord
      </Link>
      
      <header className="glass p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="inline-block px-3 py-1 bg-foreground/5 rounded-md text-sm font-semibold mb-4 text-primary">
          {metadata.titre} - {metadata.niveau}
        </div>
        <h1 className="text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet">
          {chapitreInfo.titre}
        </h1>
        <p className="opacity-70 mt-3 text-lg">{quizzes.length} Quiz disponibles (Total: {quizzes.reduce((acc, q) => acc + q.questions.length, 0)} questions)</p>
      </header>

      <section className="mt-4">
        <h2 className="text-2xl font-space font-bold mb-4">Quiz du chapitre</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quizzes.map((quiz, index) => (
            <Link 
              href={`/play/${niveau}/${matiereId}/${resolvedParams.chapitre}/${quiz.id}`}
              key={quiz.id} 
              className="glass p-6 hover:border-primary/50 transition-colors cursor-pointer group flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                  {index + 1}
                </span>
                <span className="px-2 py-1 bg-foreground/5 text-xs rounded-md uppercase tracking-wider font-semibold opacity-70">
                  {quiz.questions.length} QST
                </span>
              </div>
              <p className="font-medium line-clamp-2 flex-grow">{quiz.titre}</p>
              <div className="mt-4 flex justify-end">
                <span className="text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  Démarrer le quiz <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
