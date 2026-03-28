/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import QuizCatalogExplorer from "@/components/quiz/QuizCatalogExplorer";
import { getGlobalQuizCatalog } from "@/lib/quizzly-quiz-catalog";

type ChapterQuiz = {
  id: string;
  titre: string;
  questions: any[];
  partie: number;
  href: string;
};

async function readJsonFileSafely(filePath: string) {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    console.warn(`[chapitre-page] JSON invalide ignoré: ${filePath}`, error);
    return null;
  }
}

function getChapterRoute(level: string, subject: string, chapter: string, quizId: string, part: number) {
  return `/play/${level}/${subject}/${chapter}/${quizId}?partie=${part}`;
}

export default async function ChapitrePage({
  params,
}: {
  params: Promise<{ id: string; chapitre: string }>;
}) {
  const resolvedParams = await params;
  const [matiereId, niveau] = resolvedParams.id.split("-");

  const levelMap: Record<string, string> = {
    "6": "debutant", "6eme": "debutant", "debutant": "debutant",
    "5": "entrainement", "5eme": "entrainement", "entrainement": "entrainement",
    "4": "etudiant", "4eme": "etudiant", "etudiant": "etudiant",
    "3": "difficile", "3eme": "difficile", "difficile": "difficile",
    "2": "expert", "2nde": "expert", "expert": "expert",
    "1": "savant", "1ere": "savant", "savant": "savant",
    "T": "genie", "terminale": "genie", "genie": "genie",
  };

  const normalizedNiveau = levelMap[niveau] || levelMap[niveau.toLowerCase()] || "debutant";
  const mId = matiereId || "maths";
  const cId = resolvedParams.chapitre;
  let metadata: any = null;
  const quizzes: ChapterQuiz[] = [];

  try {
    let metaStr: string;
    switch (normalizedNiveau) {
      case "debutant": metaStr = await fs.readFile(path.join(process.cwd(), "src/data/debutant", mId, "metadata.json"), "utf8"); break;
      case "entrainement": metaStr = await fs.readFile(path.join(process.cwd(), "src/data/entrainement", mId, "metadata.json"), "utf8"); break;
      case "etudiant": metaStr = await fs.readFile(path.join(process.cwd(), "src/data/etudiant", mId, "metadata.json"), "utf8"); break;
      case "difficile": metaStr = await fs.readFile(path.join(process.cwd(), "src/data/difficile", mId, "metadata.json"), "utf8"); break;
      case "expert": metaStr = await fs.readFile(path.join(process.cwd(), "src/data/expert", mId, "metadata.json"), "utf8"); break;
      case "savant": metaStr = await fs.readFile(path.join(process.cwd(), "src/data/savant", mId, "metadata.json"), "utf8"); break;
      case "genie": metaStr = await fs.readFile(path.join(process.cwd(), "src/data/genie", mId, "metadata.json"), "utf8"); break;
      default: metaStr = await fs.readFile(path.join(process.cwd(), "src/data/debutant", mId, "metadata.json"), "utf8"); break;
    }
    metadata = JSON.parse(metaStr);

    let chapDir: string;
    switch (normalizedNiveau) {
      case "debutant": chapDir = path.join(process.cwd(), "src/data/debutant", mId, cId); break;
      case "entrainement": chapDir = path.join(process.cwd(), "src/data/entrainement", mId, cId); break;
      case "etudiant": chapDir = path.join(process.cwd(), "src/data/etudiant", mId, cId); break;
      case "difficile": chapDir = path.join(process.cwd(), "src/data/difficile", mId, cId); break;
      case "expert": chapDir = path.join(process.cwd(), "src/data/expert", mId, cId); break;
      case "savant": chapDir = path.join(process.cwd(), "src/data/savant", mId, cId); break;
      case "genie": chapDir = path.join(process.cwd(), "src/data/genie", mId, cId); break;
      default: chapDir = path.join(process.cwd(), "src/data/debutant", mId, cId); break;
    }

    const parties = ["partie1", "partie2", "partie3"];
    const rootFiles = await fs.readdir(chapDir);
    const rootQuizzes = rootFiles.filter((file) => file.endsWith(".json"));

    if (rootQuizzes.length > 0) {
      for (const file of rootQuizzes) {
        const quizPath = path.join(chapDir, file);
        const quiz = await readJsonFileSafely(quizPath);
        if (!quiz || typeof quiz.id !== "string") continue;
        const part = 1;
        quizzes.push({
          ...quiz,
          partie: part,
          href: getChapterRoute(niveau, mId, cId, quiz.id, part),
        });
      }
    } else {
      for (let i = 0; i < parties.length; i += 1) {
        const part = parties[i];
        const partDir = path.join(chapDir, part);

        try {
          const files = await fs.readdir(partDir);
          const partFiles = files.filter((file) => file.endsWith(".json"));

          for (const file of partFiles) {
            const quizPath = path.join(partDir, file);
            const quiz = await readJsonFileSafely(quizPath);
            if (!quiz || typeof quiz.id !== "string") continue;
            const partNumber = i + 1;
            quizzes.push({
              ...quiz,
              partie: partNumber,
              href: getChapterRoute(niveau, mId, cId, quiz.id, partNumber),
            });
          }
        } catch {
          // Dossier de partie absent
        }
      }
    }

    quizzes.sort((a, b) => {
      if (a.partie !== b.partie) return a.partie - b.partie;
      const numA = Number.parseInt(String(a.id).replace("quiz", ""), 10) || 0;
      const numB = Number.parseInt(String(b.id).replace("quiz", ""), 10) || 0;
      return numA - numB;
    });
  } catch (error) {
    console.error("Erreur de lecture des quiz:", error);
  }

  const chapitreInfo = metadata?.chapitres?.find((c: any) => c.id === resolvedParams.chapitre);

  if (!metadata || !chapitreInfo) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
        <div className="text-6xl mb-4">🚧</div>
        <h1 className="text-3xl font-space font-bold">Chapitre introuvable</h1>
        <Link href="/" className="px-6 py-2 glass rounded-full hover:bg-white/10">
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const chapterSubtitle = `${metadata.titre} - ${metadata.niveau}`;
  const globalCatalog = await getGlobalQuizCatalog();

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto text-foreground relative z-10 min-h-[80vh]">
      <div className="absolute inset-x-0 -top-10 bottom-0 bg-gradient-to-b from-[#d1bcf5]/20 to-[#add8e6]/20 dark:from-[#b8a4f5]/10 dark:to-[#a3dff7]/10 -z-10 rounded-3xl blur-xl" />

      <div className="pt-4 px-4 sm:px-0">
        <Link href="/" className="text-primary font-medium hover:underline w-fit flex items-center gap-2">
          <span>←</span> Retour au tableau de bord
        </Link>
      </div>

      <QuizCatalogExplorer
        currentQuizzes={quizzes}
        globalCatalog={globalCatalog}
        chapterTitle={chapitreInfo.titre}
        chapterSubtitle={chapterSubtitle}
      />
    </div>
  );
}
