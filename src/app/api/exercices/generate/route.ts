import { NextResponse } from "next/server";
import { generateGeminiJson, GEMINI_MODEL } from "@/lib/gemini-fallback";

type ExerciseDifficulty = "facile" | "moyen" | "difficile";

type ExerciseQuestion = {
  id: string;
  type: "qcm" | "vrai_faux" | "texte_a_trous" | "reponse_courte" | "reponse_longue";
  prompt: string;
  options?: string[];
  expectedAnswer: string;
  correctionGuide: string;
  points: number;
};

type ExercisePayload = {
  title: string;
  schoolYear: string;
  topic: string;
  difficulty: ExerciseDifficulty;
  questions: ExerciseQuestion[];
};

function isQuestionValid(question: unknown): question is ExerciseQuestion {
  if (!question || typeof question !== "object") return false;
  const q = question as Partial<ExerciseQuestion>;
  return (
    typeof q.id === "string" &&
    typeof q.prompt === "string" &&
    typeof q.expectedAnswer === "string" &&
    typeof q.correctionGuide === "string" &&
    typeof q.points === "number" &&
    q.points > 0
  );
}

function isExercisePayload(payload: unknown): payload is ExercisePayload {
  if (!payload || typeof payload !== "object") return false;
  const data = payload as Partial<ExercisePayload>;
  return (
    typeof data.title === "string" &&
    typeof data.schoolYear === "string" &&
    typeof data.topic === "string" &&
    (data.difficulty === "facile" || data.difficulty === "moyen" || data.difficulty === "difficile") &&
    Array.isArray(data.questions) &&
    data.questions.length >= 4 &&
    data.questions.length <= 8 &&
    data.questions.every(isQuestionValid)
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      topic?: string;
      schoolYear?: string;
      difficulty?: ExerciseDifficulty;
    };

    const topic = body.topic?.trim() || "";
    const schoolYear = body.schoolYear?.trim() || "";
    const difficulty = body.difficulty || "moyen";

    if (topic.length < 10) {
      return NextResponse.json({ error: "Le sujet doit contenir au moins 10 caractères." }, { status: 400 });
    }

    if (!schoolYear) {
      return NextResponse.json({ error: "Année scolaire manquante. Configure-la dans Réglages." }, { status: 400 });
    }

    const prompt = `Tu es Quizzly IA. Génère une série d'exercices pédagogiques en français.
Contexte:
- Sujet: ${topic}
- Année scolaire: ${schoolYear}
- Difficulté: ${difficulty}

Contraintes:
- Génère entre 4 et 8 questions.
- Mélange les types: qcm, vrai_faux, texte_a_trous, reponse_courte, reponse_longue.
- Chaque question doit avoir: prompt, expectedAnswer, correctionGuide, points.
- Le total des points doit faire 20.
- Les réponses longues doivent nécessiter un raisonnement (2-5 phrases).
- Retourne UNIQUEMENT un JSON valide.

Schéma JSON:
{
  "title": "string",
  "schoolYear": "string",
  "topic": "string",
  "difficulty": "facile|moyen|difficile",
  "questions": [
    {
      "id": "q1",
      "type": "qcm|vrai_faux|texte_a_trous|reponse_courte|reponse_longue",
      "prompt": "string",
      "options": ["string"],
      "expectedAnswer": "string",
      "correctionGuide": "string",
      "points": 1
    }
  ]
}`;

    const result = await generateGeminiJson(prompt, isExercisePayload);
    return NextResponse.json({ exercise: result.payload, model: GEMINI_MODEL });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Impossible de générer l'exercice.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
