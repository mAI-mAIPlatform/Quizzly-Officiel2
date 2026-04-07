import { NextResponse } from "next/server";

type Difficulty = "facile" | "moyen" | "difficile";

type QuizRequestBody = {
  sujet?: string;
  niveau?: Difficulty;
  classe?: string;
};

type GeneratedQuestion = {
  id: string;
  type: "qcm" | "vrai_faux" | "courte";
  question: string;
  options?: string[];
  reponse: string;
  explication?: string;
};

type GeneratedQuiz = {
  id: string;
  titre: string;
  description: string;
  sujet: string;
  niveau: Difficulty;
  classe: string;
  questions: GeneratedQuestion[];
};

const OPENROUTER_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

// Modèles à coût minimum (free tier), avec fallback progressif.
const OPENROUTER_MODELS = [
  "meta-llama/llama-3.2-3b-instruct:free",
  "qwen/qwen-2.5-7b-instruct:free",
  "mistralai/mistral-7b-instruct:free",
] as const;

const OPENROUTER_KEYS = [
  process.env.OPENROUTER_API_KEY_1,
  process.env.OPENROUTER_API_KEY_2,
  process.env.OPENROUTER_API_KEY_3,
].filter(Boolean) as string[];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

function extractJson(text: string): string {
  const trimmed = text.trim();
  if (trimmed.startsWith("{")) return trimmed;

  const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fencedMatch?.[1]) return fencedMatch[1].trim();

  const firstBrace = trimmed.indexOf("{");
  const lastBrace = trimmed.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    return trimmed.slice(firstBrace, lastBrace + 1);
  }

  return trimmed;
}

function sanitizeQuiz(input: unknown, fallback: Pick<GeneratedQuiz, "sujet" | "niveau" | "classe">): GeneratedQuiz {
  const raw = (input ?? {}) as Partial<GeneratedQuiz>;
  const questions = Array.isArray(raw.questions) ? raw.questions : [];

  const safeQuestions: GeneratedQuestion[] = questions
    .map((q, index) => {
      const question = (q as Partial<GeneratedQuestion>) ?? {};
      const rawType = question.type;
      const type: GeneratedQuestion["type"] =
        rawType === "qcm" || rawType === "vrai_faux" || rawType === "courte" ? rawType : "qcm";

      const options = Array.isArray(question.options)
        ? question.options.filter((option): option is string => typeof option === "string" && option.trim().length > 0).slice(0, 4)
        : undefined;

      return {
        id: typeof question.id === "string" && question.id.trim().length > 0 ? question.id : `q_${index + 1}`,
        type,
        question: typeof question.question === "string" && question.question.trim().length > 0
          ? question.question.trim()
          : `Question ${index + 1}`,
        options: type === "qcm" ? (options && options.length >= 2 ? options : ["Option A", "Option B", "Option C", "Option D"]) : undefined,
        reponse:
          typeof question.reponse === "string" && question.reponse.trim().length > 0
            ? question.reponse.trim()
            : type === "vrai_faux"
              ? "Vrai"
              : "Réponse à compléter",
        explication: typeof question.explication === "string" ? question.explication.trim() : undefined,
      };
    })
    .slice(0, 10);

  return {
    id: typeof raw.id === "string" && raw.id.trim().length > 0 ? raw.id : `ia-${Date.now()}`,
    titre: typeof raw.titre === "string" && raw.titre.trim().length > 0 ? raw.titre : `Quiz IA • ${fallback.sujet}`,
    description: typeof raw.description === "string" && raw.description.trim().length > 0
      ? raw.description
      : `Quiz généré automatiquement pour ${fallback.classe} (${fallback.niveau}).`,
    sujet: fallback.sujet,
    niveau: fallback.niveau,
    classe: fallback.classe,
    questions: safeQuestions.length > 0
      ? safeQuestions
      : [
          {
            id: "q_1",
            type: "qcm",
            question: `Quelle proposition décrit le mieux le sujet « ${fallback.sujet} » ?`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            reponse: "Option A",
          },
        ],
  };
}

async function requestWithKey(apiKey: string, payload: object) {
  const response = await fetch(OPENROUTER_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
      "HTTP-Referer": APP_URL,
      "X-Title": "Quizzly IA Quiz Generator",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`OpenRouter ${response.status}: ${message}`);
  }

  return response.json();
}

export async function POST(request: Request) {
  if (OPENROUTER_KEYS.length === 0) {
    return NextResponse.json({ error: "Aucune clé OpenRouter configurée côté serveur." }, { status: 500 });
  }

  const body = (await request.json()) as QuizRequestBody;
  const sujet = body.sujet?.trim();
  const niveau = body.niveau ?? "moyen";
  const classe = body.classe?.trim();

  if (!sujet || !classe) {
    return NextResponse.json({ error: "Le sujet et la classe sont obligatoires." }, { status: 400 });
  }

  const prompt = `Tu es un moteur de quiz scolaire francophone.
Génère un quiz au format JSON strict (sans markdown).
Contexte:
- Sujet: ${sujet}
- Classe: ${classe}
- Difficulté: ${niveau}

Contraintes:
- 8 questions au total.
- Mélange de types: qcm, vrai_faux, courte.
- qcm => exactement 4 options, réponse incluse dans options.
- vrai_faux => réponse "Vrai" ou "Faux".
- courte => réponse courte (moins de 6 mots).
- Explications claires (1 phrase max).

Retourne uniquement cet objet JSON:
{
  "id": "string",
  "titre": "string",
  "description": "string",
  "questions": [
    {
      "id": "q_1",
      "type": "qcm|vrai_faux|courte",
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "reponse": "string",
      "explication": "string"
    }
  ]
}`;

  let lastError = "";

  for (const model of OPENROUTER_MODELS) {
    const payload = {
      model,
      temperature: 0.4,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: "Tu produis uniquement du JSON valide." },
        { role: "user", content: prompt },
      ],
    };

    for (const key of OPENROUTER_KEYS) {
      try {
        const data = await requestWithKey(key, payload);
        const content = data?.choices?.[0]?.message?.content;

        if (typeof content !== "string" || content.trim().length === 0) {
          throw new Error("Réponse vide du modèle.");
        }

        const parsed = JSON.parse(extractJson(content));
        const quiz = sanitizeQuiz(parsed, { sujet, niveau, classe });

        return NextResponse.json({ quiz, modelUsed: model }, { status: 200 });
      } catch (error) {
        lastError = error instanceof Error ? error.message : "Erreur inconnue";
      }
    }
  }

  return NextResponse.json(
    {
      error: "Impossible de générer le quiz pour le moment.",
      details: lastError,
    },
    { status: 502 },
  );
}
