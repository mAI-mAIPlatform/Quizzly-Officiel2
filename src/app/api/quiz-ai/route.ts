import { NextResponse } from "next/server";
import { ACTIVE_AI_MODELS, DEFAULT_AI_MODEL } from "@/lib/ai-models";

const ENDPOINT = "https://api.francestudent.org/v1/chat/completions";

type RequestPayload = {
  topic?: string;
  classLevel?: string;
  mode?: string;
  questionCount?: number;
  model?: string;
  attachments?: Array<{
    name: string;
    mimeType: string;
    dataUrl: string;
  }>;
};

type GeneratedQuestion = {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

type GeneratedQuizResponse = {
  title: string;
  mode: string;
  classLevel: string;
  questions: GeneratedQuestion[];
};

const SYSTEM_PROMPT =
  "Tu es QuizzlyAI, un assistant pédagogique. Tu génères des quiz fiables, équilibrés et adaptés au niveau scolaire demandé. Réponds uniquement en JSON valide.";

const ALLOWED_ATTACHMENT_TYPES = new Set([
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/gif",
  "image/avif",
]);
const MAX_ATTACHMENT_COUNT = 3;
const MAX_DATA_URL_LENGTH = 7_000_000;
const MAX_TEXT_INPUT_LENGTH = 400;

const jsonSchemaInstruction = `Réponds UNIQUEMENT avec un objet JSON conforme au format:
{
  "title": "string",
  "mode": "string",
  "classLevel": "string",
  "questions": [
    {
      "question": "string",
      "options": ["option1", "option2", "option3", "option4"],
      "answerIndex": 0,
      "explanation": "string"
    }
  ]
}
Contraintes:
- answerIndex entre 0 et 3
- exactement 4 options par question
- explication concise (<= 180 caractères)
- français uniquement`;

function parseMaybeJson(content: string): GeneratedQuizResponse | null {
  try {
    return JSON.parse(content) as GeneratedQuizResponse;
  } catch {
    const fencedMatch = content.match(/```json\s*([\s\S]*?)```/i);
    if (!fencedMatch) return null;
    try {
      return JSON.parse(fencedMatch[1]) as GeneratedQuizResponse;
    } catch {
      return null;
    }
  }
}

function isValidQuiz(payload: GeneratedQuizResponse, expectedQuestions: number): boolean {
  if (!payload?.title || !payload?.mode || !payload?.classLevel || !Array.isArray(payload?.questions)) {
    return false;
  }

  if (payload.questions.length !== expectedQuestions) {
    return false;
  }

  return payload.questions.every(
    (question) =>
      typeof question.question === "string" &&
      Array.isArray(question.options) &&
      question.options.length === 4 &&
      question.options.every((option) => typeof option === "string" && option.trim().length > 0) &&
      Number.isInteger(question.answerIndex) &&
      question.answerIndex >= 0 &&
      question.answerIndex < 4 &&
      typeof question.explanation === "string",
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestPayload;
    const topic = body.topic?.trim().slice(0, MAX_TEXT_INPUT_LENGTH);
    const classLevel = body.classLevel?.trim().slice(0, 80);
    const mode = body.mode?.trim().slice(0, 80) || "Classé";
    const questionCount = Math.min(15, Math.max(3, Number(body.questionCount) || 8));

    if (!topic || !classLevel) {
      return NextResponse.json({ error: "Sujet et niveau requis." }, { status: 400 });
    }

    const chosenModel = ACTIVE_AI_MODELS.some((candidate) => candidate.model === body.model)
      ? body.model ?? DEFAULT_AI_MODEL
      : DEFAULT_AI_MODEL;
    const attachments = Array.isArray(body.attachments) ? body.attachments.slice(0, MAX_ATTACHMENT_COUNT) : [];
    const safeAttachments = attachments.filter((file) => {
      if (!file || typeof file.name !== "string" || typeof file.mimeType !== "string" || typeof file.dataUrl !== "string") {
        return false;
      }
      if (!ALLOWED_ATTACHMENT_TYPES.has(file.mimeType)) return false;
      if (file.dataUrl.length > MAX_DATA_URL_LENGTH) return false;
      return file.dataUrl.startsWith(`data:${file.mimeType};base64,`);
    });

    const apiKey = process.env.FS_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "FS_API_KEY manquant dans .env" }, { status: 500 });
    }

    const userPrompt = [
      `Génère un quiz ${mode} pour le niveau ${classLevel}.`,
      `Sujet: ${topic}.`,
      `Nombre de questions: ${questionCount}.`,
      "Difficulté progressive et questions variées.",
      safeAttachments.length > 0 ? "Utilise aussi les pièces jointes importées par l'utilisateur pour générer les questions." : "",
      jsonSchemaInstruction,
    ].join("\n");

    const userContent: Array<{ type: "text"; text: string } | { type: "image_url"; image_url: { url: string } }> = [
      { type: "text", text: userPrompt },
    ];

    for (const file of safeAttachments) {
      if (file.mimeType.startsWith("image/")) {
        userContent.push({
          type: "image_url",
          image_url: { url: file.dataUrl },
        });
      } else if (file.mimeType === "application/pdf") {
        // Fallback robuste: certains endpoints chat/completions n'acceptent pas les PDF natifs.
        // On transmet la référence DataURL pour contextualiser la demande.
        userContent.push({
          type: "text",
          text: `Document PDF importé: ${file.name}\nDataURL: ${file.dataUrl.slice(0, 3000)}...`,
        });
      }
    }

    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: chosenModel,
        messages: [
          { role: "developer", content: SYSTEM_PROMPT },
          { role: "user", content: userContent },
        ],
        temperature: 0.4,
      }),
    });

    if (!response.ok) {
      const rawError = await response.text();
      return NextResponse.json({ error: "Échec IA", details: rawError }, { status: 502 });
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      return NextResponse.json({ error: "Réponse IA vide." }, { status: 502 });
    }

    const parsed = parseMaybeJson(content);
    if (!parsed || !isValidQuiz(parsed, questionCount)) {
      return NextResponse.json({ error: "Format IA invalide.", raw: content }, { status: 502 });
    }

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Erreur serveur lors de la génération.",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 },
    );
  }
}
