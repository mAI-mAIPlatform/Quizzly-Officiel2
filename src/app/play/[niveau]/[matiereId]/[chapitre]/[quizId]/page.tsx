import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import QuizEngine from "@/components/quiz/QuizEngine";

export default async function PlayQuizPage({
  params,
}: {
  params: Promise<{ niveau: string; matiereId: string; chapitre: string; quizId: string }>;
}) {
  const resolvedParams = await params;
  const { niveau, matiereId, chapitre, quizId } = resolvedParams;

  const normalizedNiveau = niveau === "6" ? "6eme" : niveau === "5" ? "5eme" : niveau === "4" ? "4eme" : niveau === "3" ? "3eme" : niveau;

  const quizPath = path.join(
    process.cwd(),
    "src",
    "data",
    normalizedNiveau,
    matiereId,
    chapitre,
    `${quizId}.json`
  );

  let quizData = null;

  try {
    const fileContent = await fs.readFile(quizPath, "utf8");
    quizData = JSON.parse(fileContent);
  } catch (error) {
    console.error("Erreur lors de la lecture du quiz :", error);
  }

  if (!quizData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4 text-center p-6">
        <h1 className="text-3xl font-bold font-space text-rose">Oups !</h1>
        <p className="text-lg opacity-80">Ce quiz semble introuvable ou n'existe pas encore.</p>
        <Link href={`/matiere/${matiereId}-${niveau}/${chapitre}`} className="mt-4 px-6 py-3 glass rounded-full hover:bg-white/10 font-bold">
          Retour au chapitre
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      {/* Background decorations */}
      <div className="fixed top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none -z-10"></div>
      
      {/* Header compact pour le quiz */}
      <header className="p-4 glass rounded-none border-t-0 border-x-0 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href={`/matiere/${matiereId}-${niveau}/${chapitre}`} className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-foreground/10 transition-colors">
            ✕
          </Link>
          <div>
            <div className="text-xs uppercase tracking-wider font-bold opacity-60">
              {matiereId} {niveau} • Chapitre {chapitre.replace('ch', '')}
            </div>
            <div className="font-bold font-space truncate max-w-xs md:max-w-md">
              {quizData.titre}
            </div>
          </div>
        </div>
        
        {/* On peut ajouter le score ou des cristaux ici plus tard */}
      </header>

  {/* Le moteur de quiz qui prend le relais ou écran de blocage */}
      <main className="flex-1 flex flex-col w-full max-w-3xl mx-auto p-4 md:p-8">
        <PlayContent quizData={quizData} niveau={niveau} matiereId={matiereId} chapitre={chapitre} />
      </main>
    </div>
  );
}

// Composant interne pour gérer l'état client
function PlayContent({ quizData, niveau, matiereId, chapitre }: any) {
  // On doit utiliser un hook client pour accéder au context
  return (
    <QuizLoader quizData={quizData} niveau={niveau} matiereId={matiereId} chapitre={chapitre} />
  );
}

import { useProgress } from "@/context/ProgressContext";

function QuizLoader({ quizData, niveau, matiereId, chapitre }: any) {
  const { progress } = useProgress();

  if (progress.neurones <= 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 glass rounded-3xl text-center gap-6 animate-in zoom-in-95">
        <div className="text-8xl">🧠</div>
        <h2 className="text-3xl font-bold font-space text-rose">Plus de Neurones !</h2>
        <p className="opacity-70 text-lg">
          Ton cerveau a besoin de repos. Attends un peu que tes neurones se rechargent ou achètes-en dans la boutique !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link href="/boutique" className="flex-1 py-4 bg-cyan text-white font-bold rounded-2xl shadow-lg shadow-cyan/20 hover:scale-105 transition-transform">
            Aller à la boutique 🛒
          </Link>
          <Link href={`/matiere/${matiereId}-${niveau}/${chapitre}`} className="flex-1 py-4 glass font-bold rounded-2xl hover:bg-white/10 transition-colors">
            Plus tard 👋
          </Link>
        </div>
      </div>
    );
  }

  return (
    <QuizEngine quiz={quizData} backUrl={`/matiere/${matiereId}-${niveau}/${chapitre}`} matiereId={matiereId} />
  );
}
