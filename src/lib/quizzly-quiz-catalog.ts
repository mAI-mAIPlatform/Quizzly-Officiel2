import { promises as fs } from "fs";
import type { Dirent } from "fs";
import path from "path";
import { normalizeText } from "@/lib/quizzly-utils";
import { allBlitzQuizzes } from "@/data/blitz/allBlitzQuizzes";
import { allVisuelQuizzes } from "@/data/visuel/allVisuelQuizzes";
import { allVraiFauxQuizzes } from "@/data/vrai_faux/allVraiFauxQuizzes";
import { allQuizzes as rankedQuizzesByClass } from "@/data/ranked/allQuizzes";
import { survivalQuizzes } from "@/data/survie/quizzes";
import { survivalExtended2Quizzes } from "@/data/survie/extended2";

const lessonLevels = ["debutant", "entrainement", "etudiant", "difficile", "expert", "savant", "genie"] as const;

const levelLabels: Record<string, string> = {
  debutant: "Débutant",
  entrainement: "Entraînement",
  etudiant: "Étudiant",
  difficile: "Difficile",
  expert: "Expert",
  savant: "Savant",
  genie: "Génie",
};

const rankedClassLabels: Record<string, string> = {
  "6eme": "6ème",
  "5eme": "5ème",
  "4eme": "4ème",
  "3eme": "3ème",
  seconde: "Seconde",
  premiere: "Première",
  terminale: "Terminale",
};

export type QuizCatalogEntry = {
  id: string;
  title: string;
  href: string;
  searchText: string;
  questionCount: number;
  source: string;
  level?: string;
  subject?: string;
  chapter?: string;
  part?: number;
  accentClass: string;
};

let cachedCatalog: Promise<QuizCatalogEntry[]> | null = null;

function collectQuestionText(quiz: Record<string, unknown>) {
  const questions = Array.isArray(quiz.questions) ? quiz.questions : [];
  return questions
    .map((question) => {
      if (!question || typeof question !== "object") return "";
      const item = question as Record<string, unknown>;
      return [item.enonce, item.question]
        .filter((part): part is string => typeof part === "string" && part.length > 0)
        .join(" ");
    })
    .filter(Boolean)
    .join(" ");
}

async function readJsonFile(filePath: string) {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return JSON.parse(content) as Record<string, unknown>;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.warn(`[quiz-catalog] Fichier non trouvé: ${filePath}`);
    } else {
      console.warn(`[quiz-catalog] JSON invalide ignoré: ${filePath}`, error);
    }
    return null;
  }
}

async function buildLessonCatalog() {
  const catalog: QuizCatalogEntry[] = [];
  const dataRoot = path.join(process.cwd(), "src/data");

  for (const level of lessonLevels) {
    const levelPath = path.join(dataRoot, level);
    let subjectDirs: Dirent[] = [];

    try {
      subjectDirs = await fs.readdir(levelPath, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const subjectDir of subjectDirs) {
      if (!subjectDir.isDirectory()) continue;

      const subjectId = subjectDir.name;
      const subjectPath = path.join(levelPath, subjectId);
      const metadataPath = path.join(subjectPath, "metadata.json");

      let chapterTitles: Array<{ id: string; titre?: string }> = [];
      try {
        const metadata = await readJsonFile(metadataPath);
        chapterTitles = metadata && Array.isArray(metadata.chapitres) ? metadata.chapitres as Array<{ id: string; titre?: string }> : [];
      } catch {
        chapterTitles = [];
      }

      let chapterDirs: Dirent[] = [];
      try {
        chapterDirs = await fs.readdir(subjectPath, { withFileTypes: true });
      } catch {
        continue;
      }

      for (const chapterDir of chapterDirs) {
        if (!chapterDir.isDirectory()) continue;
        if (chapterDir.name === "metadata.json") continue;

        const chapterId = chapterDir.name;
        const chapterPath = path.join(subjectPath, chapterId);
        const chapterTitle = chapterTitles.find((entry) => entry.id === chapterId)?.titre || chapterId;

        let chapterItems: Dirent[] = [];
        try {
          chapterItems = await fs.readdir(chapterPath, { withFileTypes: true });
        } catch {
          continue;
        }

        const rootQuizFiles = chapterItems.filter((entry) => entry.isFile() && entry.name.endsWith(".json"));
        if (rootQuizFiles.length > 0) {
          for (const quizFile of rootQuizFiles) {
            const quizPath = path.join(chapterPath, quizFile.name);
            const quiz = await readJsonFile(quizPath);
            if (!quiz) continue;
            const part = 1;
            const levelLabel = levelLabels[level];
            const title = typeof quiz.titre === "string" ? quiz.titre : quizFile.name.replace(".json", "");
            const questionCount = Array.isArray(quiz.questions) ? quiz.questions.length : 0;
            const questionText = collectQuestionText(quiz);
            const href = `/play/${level}/${subjectId}/${chapterId}/${quiz.id as string}?partie=${part}`;

            catalog.push({
              id: `${level}/${subjectId}/${chapterId}/${quiz.id as string}`,
              title,
              href,
              searchText: normalizeText([
                title,
                levelLabel,
                subjectId,
                chapterTitle,
                `partie ${part}`,
                questionText,
              ].join(" ")),
              questionCount,
              source: "Cours",
              level: levelLabel,
              subject: subjectId,
              chapter: chapterTitle,
              part,
              accentClass: "from-emerald-400 to-cyan-500",
            });
          }
          continue;
        }

        const partDirs = chapterItems.filter((entry) => entry.isDirectory() && entry.name.startsWith("partie"));
        for (const partDir of partDirs) {
          const partNumber = Number.parseInt(partDir.name.replace("partie", ""), 10) || 1;
          const partPath = path.join(chapterPath, partDir.name);

          let partFiles: Dirent[] = [];
          try {
            partFiles = await fs.readdir(partPath, { withFileTypes: true });
          } catch {
            continue;
          }

          for (const quizFile of partFiles.filter((entry) => entry.isFile() && entry.name.endsWith(".json"))) {
            const quizPath = path.join(partPath, quizFile.name);
            const quiz = await readJsonFile(quizPath);
            if (!quiz) continue;
            const title = typeof quiz.titre === "string" ? quiz.titre : quizFile.name.replace(".json", "");
            const questionCount = Array.isArray(quiz.questions) ? quiz.questions.length : 0;
            const questionText = collectQuestionText(quiz);
            const href = `/play/${level}/${subjectId}/${chapterId}/${quiz.id as string}?partie=${partNumber}`;

            catalog.push({
              id: `${level}/${subjectId}/${chapterId}/partie${partNumber}/${quiz.id as string}`,
              title,
              href,
              searchText: normalizeText([
                title,
                levelLabels[level],
                subjectId,
                chapterTitle,
                `partie ${partNumber}`,
                questionText,
              ].join(" ")),
              questionCount,
              source: "Cours",
              level: levelLabels[level],
              subject: subjectId,
              chapter: chapterTitle,
              part: partNumber,
              accentClass: "from-emerald-400 to-cyan-500",
            });
          }
        }
      }
    }
  }

  return catalog;
}

function flattenRankedCatalog() {
  return Object.entries(rankedQuizzesByClass).flatMap(([classKey, quizzes]) => {
    const classLabel = rankedClassLabels[classKey] || classKey;
    return quizzes.map((quiz: Record<string, unknown>, index: number) => {
      const title = typeof quiz.titre === "string" ? quiz.titre : `Quiz Ranked ${index + 1}`;
      const questionCount = Array.isArray(quiz.questions) ? quiz.questions.length : 0;
      return {
        id: `ranked/${classKey}/${index + 1}`,
        title,
        href: `/quiz/ranked/${classKey}/${index + 1}`,
        searchText: normalizeText([title, "classé", classLabel, `quiz ${index + 1}`, `questions ${questionCount}`].join(" ")),
        questionCount,
        source: "Classé",
        level: classLabel,
        subject: "Mode",
        chapter: "Classé",
        part: index + 1,
        accentClass: "from-amber-400 via-primary to-orange-500",
      } satisfies QuizCatalogEntry;
    });
  });
}

function flattenPoolCatalog() {
  const survivalPool = [...survivalQuizzes, ...survivalExtended2Quizzes];

  const survivalEntries = survivalPool.map((quiz: Record<string, unknown>, index: number) => {
    const title = typeof quiz.titre === "string" ? quiz.titre : `Survie ${index + 1}`;
    const questionCount = Array.isArray(quiz.questions) ? quiz.questions.length : 0;
    const rawId = typeof quiz.id === "string" ? quiz.id.replace("survival_", "") : String(index + 1);
    return {
      id: `survival/${rawId}`,
      title,
      href: `/quiz/survie/${rawId}`,
      searchText: normalizeText([title, "survie", `quiz ${rawId}`, `questions ${questionCount}`].join(" ")),
      questionCount,
      source: "Survie",
      level: "Mode",
      subject: "Mode",
      chapter: "Survie",
      part: index + 1,
      accentClass: "from-rose-500 via-orange-500 to-red-500",
    } satisfies QuizCatalogEntry;
  });

  const vraiFauxEntries = allVraiFauxQuizzes.map((quiz: Record<string, unknown>, index: number) => {
    const title = typeof quiz.titre === "string" ? quiz.titre : `Vrai ou Faux ${index + 1}`;
    const questionCount = Array.isArray(quiz.questions) ? quiz.questions.length : 0;
    return {
      id: `vrai-faux/${quiz.id as string}`,
      title,
      href: `/vrai-faux?quiz=${quiz.id as string}`,
      searchText: normalizeText([title, "vrai ou faux", `session ${index + 1}`, `questions ${questionCount}`].join(" ")),
      questionCount,
      source: "Vrai/Faux",
      level: "Mode",
      subject: "Mode",
      chapter: "Vrai/Faux",
      part: index + 1,
      accentClass: "from-emerald-400 to-teal-500",
    } satisfies QuizCatalogEntry;
  });

  const visuelEntries = allVisuelQuizzes.map((quiz: Record<string, unknown>, index: number) => {
    const title = typeof quiz.titre === "string" ? quiz.titre : `Visuel ${index + 1}`;
    const questionCount = Array.isArray(quiz.questions) ? quiz.questions.length : 0;
    return {
      id: `visuel/${quiz.id as string}`,
      title,
      href: `/visuel?quiz=${quiz.id as string}`,
      searchText: normalizeText([title, "visuel", `session ${index + 1}`, `questions ${questionCount}`].join(" ")),
      questionCount,
      source: "Visuel",
      level: "Mode",
      subject: "Mode",
      chapter: "Visuel",
      part: index + 1,
      accentClass: "from-rose-400 to-orange-500",
    } satisfies QuizCatalogEntry;
  });

  const blitzEntries = allBlitzQuizzes.map((quiz: Record<string, unknown>, index: number) => {
    const title = typeof quiz.titre === "string" ? quiz.titre : `Blitz ${index + 1}`;
    const questionCount = Array.isArray(quiz.questions) ? quiz.questions.length : 0;
    return {
      id: `blitz/${quiz.id as string}`,
      title,
      href: `/blitz?quiz=${quiz.id as string}`,
      searchText: normalizeText([title, "blitz", `session ${index + 1}`, `questions ${questionCount}`].join(" ")),
      questionCount,
      source: "Blitz",
      level: "Mode",
      subject: "Mode",
      chapter: "Blitz",
      part: index + 1,
      accentClass: "from-cyan-400 to-blue-500",
    } satisfies QuizCatalogEntry;
  });

  return [...survivalEntries, ...vraiFauxEntries, ...visuelEntries, ...blitzEntries];
}

export async function getGlobalQuizCatalog() {
  if (!cachedCatalog) {
    cachedCatalog = Promise.all([buildLessonCatalog(), Promise.resolve(flattenRankedCatalog()), Promise.resolve(flattenPoolCatalog())])
      .then(([lessonEntries, rankedEntries, poolEntries]) => [
        ...lessonEntries,
        ...rankedEntries,
        ...poolEntries,
      ]);
  }

  return cachedCatalog;
}
