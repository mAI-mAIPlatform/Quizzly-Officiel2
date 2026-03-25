/* eslint-disable react/no-unescaped-entities */
// v1.1.0 - Correction des erreurs de parsing JSX et des imports manquants
import QuizLoader from "@/components/quiz/QuizLoader";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export default async function PlayQuizPage({
  params,
  searchParams,
}: {
  params: Promise<{ niveau: string; matiereId: string; chapitre: string; quizId: string }>;
  searchParams: Promise<{ partie?: string }>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { niveau, matiereId, chapitre, quizId } = resolvedParams;
  const partie = resolvedSearchParams.partie;
  
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

  const dataDir = path.resolve(process.cwd(), "src/data");
  
  // Essayer d'abord avec le dossier de partie si spécifié
  let quizPath = "";
  if (partie) {
    quizPath = path.join(dataDir, normalizedNiveau, matiereId, chapitre, `partie${partie}`, `${quizId}.json`);
  } else {
    quizPath = path.join(dataDir, normalizedNiveau, matiereId, chapitre, `${quizId}.json`);
  }

  let quizData = null;

  try {
    // Tentative de lecture (avec fallback sur le chemin racine si partie échoue ou n'est pas fournie)
    try {
      const fileContent = await fs.readFile(quizPath, "utf8");
      quizData = JSON.parse(fileContent);
    } catch (e) {
      if (partie) {
        // Fallback : essayer à la racine du chapitre au cas où
        const fallbackPath = path.join(dataDir, normalizedNiveau, matiereId, chapitre, `${quizId}.json`);
        const fileContent = await fs.readFile(fallbackPath, "utf8");
        quizData = JSON.parse(fileContent);
      } else {
        throw e;
      }
    }
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
      </header>
      
      {/* Le moteur de quiz qui prend le relais ou écran de blocage */}
      <main className="flex-1 flex flex-col w-full max-w-3xl mx-auto p-4 md:p-8">
        <QuizLoader quizData={quizData} niveau={niveau} matiereId={matiereId} chapitre={chapitre} />
      </main>
    </div>
  );
}
