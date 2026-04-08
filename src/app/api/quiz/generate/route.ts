import { NextResponse } from "next/server";

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

const GEMINI_MODEL = "gemini-2.0-flash-lite";
const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

function extractJson(text: string): string {
  const fenced = text.match(/```json\s*([\s\S]*?)\s*```/i);
  if (fenced?.[1]) return fenced[1].trim();
  return text.trim();
}

function isValidQuizPayload(payload: unknown): payload is QuizPayload {
  if (!payload || typeof payload !== "object") return false;
  const data = payload as Partial<QuizPayload>;

  return (
    typeof data.title === "string" &&
    typeof data.schoolYear === "string" &&
    typeof data.subjectPrompt === "string" &&
    typeof data.difficulty === "string" &&
    Array.isArray(data.questions) &&
    data.questions.length === 10
  );
}

async function generateWithApiKey(apiKey: string, prompt: string) {
  const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini HTTP ${response.status}: ${errorText}`);
  }

  const data = (await response.json()) as {
    candidates?: Array<{
      content?: {
        parts?: Array<{ text?: string }>;
      };
    }>;
  };

  const outputText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!outputText) {
    throw new Error("Réponse Gemini vide");
  }

  const parsed = JSON.parse(extractJson(outputText)) as unknown;
  if (!isValidQuizPayload(parsed)) {
    throw new Error("Format de quiz invalide retourné par Gemini");
  }

  return parsed;
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

    const apiKeys = [
      process.env.GEMINI_API_KEY_1,
      process.env.GEMINI_API_KEY_2,
      process.env.GEMINI_API_KEY_3,
      process.env.GEMINI_API_KEY_4,
    ].filter((key): key is string => typeof key === "string" && key.length > 0);

    if (apiKeys.length === 0) {
      return NextResponse.json({ error: "Aucune clé Gemini configurée côté serveur." }, { status: 500 });
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

    const errors: string[] = [];

    for (const apiKey of apiKeys) {
      try {
        const generatedQuiz = await generateWithApiKey(apiKey, generationPrompt);
        return NextResponse.json({ quiz: generatedQuiz, model: GEMINI_MODEL });
      } catch (error) {
        errors.push(error instanceof Error ? error.message : "Erreur inconnue Gemini");
      }
    }

    return NextResponse.json(
      { error: "Impossible de générer le quiz avec les clés Gemini configurées.", details: errors.slice(-2) },
      { status: 502 },
    );
  } catch {
    return NextResponse.json({ error: "Requête invalide pour la génération de quiz." }, { status: 400 });
  }
}
