import { NextResponse } from "next/server";
import { generateGeminiJson } from "@/lib/gemini-fallback";

type QuizDifficulty = "facile" | "moyen" | "difficile";

type QuizQuestion = {
  id: string;
  type: "qcm" | "vrai_faux" | "texte_a_trous" | "associer" | "reponse_courte";
  question: string;
  options?: string[];
  answer: string | string[];
  explanation: string;
  pairs?: { left: string; right: string }[];
};

type QuizPayload = {
  title: string;
  schoolYear: string;
  subjectPrompt: string;
  difficulty: QuizDifficulty;
  questions: QuizQuestion[];
};

function isQuizQuestionValid(question: unknown): question is QuizQuestion {
  if (!question || typeof question !== "object") return false;
  const q = question as Partial<QuizQuestion>;
  return typeof q.id === "string" && typeof q.question === "string" && typeof q.explanation === "string" && typeof q.type === "string";
}

function isValidQuizPayload(payload: unknown): payload is QuizPayload {
  if (!payload || typeof payload !== "object") return false;
  const data = payload as Partial<QuizPayload>;

  return (
    typeof data.title === "string" &&
    typeof data.schoolYear === "string" &&
    typeof data.subjectPrompt === "string" &&
    (data.difficulty === "facile" || data.difficulty === "moyen" || data.difficulty === "difficile") &&
    Array.isArray(data.questions) &&
    data.questions.length === 10 &&
    data.questions.every(isQuizQuestionValid)
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      subjectPrompt?: string;
      schoolYear?: string;
      difficulty?: QuizDifficulty;
    };

    const subjectPrompt = body.subjectPrompt?.trim() || "";
    const schoolYear = body.schoolYear?.trim() || "";
    const difficulty = body.difficulty || "moyen";

    if (subjectPrompt.length < 10) {
      return NextResponse.json({ error: "Le sujet doit contenir au moins 10 caractères." }, { status: 400 });
    }

    if (!schoolYear) {
      return NextResponse.json({ error: "Année scolaire manquante. Configure-la dans Réglages." }, { status: 400 });
    }

    const generationPrompt = `Tu es Quizzly IA. Génère un quiz pédagogique de 10 questions en français.
Contraintes obligatoires:
- Sujet demandé: ${subjectPrompt}
- Année scolaire: ${schoolYear}
- Difficulté: ${difficulty}
- Inclure une variété de types: qcm, vrai_faux, texte_a_trous, associer, reponse_courte.
- Toujours exactement 10 questions.
- Chaque question doit inclure une explication courte.
- Pour type qcm: inclure 4 options et answer = option exacte.
- Pour type vrai_faux: options ["Vrai", "Faux"].
- Pour type texte_a_trous: indiquer un blanc avec "____".
- Pour type associer: fournir pairs (left/right) et answer = tableau des droites dans le même ordre.

Retourne uniquement un JSON valide strict selon ce schéma:
{
  "title": "string",
  "schoolYear": "string",
  "subjectPrompt": "string",
  "difficulty": "facile|moyen|difficile",
  "questions": [
    {
      "id": "q1",
      "type": "qcm|vrai_faux|texte_a_trous|associer|reponse_courte",
      "question": "string",
      "options": ["string"],
      "answer": "string" | ["string"],
      "explanation": "string",
      "pairs": [{"left": "string", "right": "string"}]
    }
  ]
}`;

    const result = await generateGeminiJson(generationPrompt, isValidQuizPayload);
    return NextResponse.json({ quiz: result.payload, model: result.model });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Requête invalide pour la génération de quiz.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
