import { NextResponse } from "next/server";
import { generateGeminiJson } from "@/lib/gemini-fallback";

type ExerciseAnswer = {
  id: string;
  userAnswer: string;
  expectedAnswer: string;
  correctionGuide: string;
  maxPoints: number;
};

type EvaluationPayload = {
  score: number;
  feedback: string;
  corrections: Array<{
    id: string;
    pointsAwarded: number;
    feedback: string;
  }>;
};

function isEvaluationPayload(payload: unknown): payload is EvaluationPayload {
  if (!payload || typeof payload !== "object") return false;
  const data = payload as Partial<EvaluationPayload>;
  return typeof data.score === "number" && typeof data.feedback === "string" && Array.isArray(data.corrections);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { answers?: ExerciseAnswer[] };
    const answers = Array.isArray(body.answers) ? body.answers : [];

    if (answers.length === 0) {
      return NextResponse.json({ error: "Aucune réponse à corriger." }, { status: 400 });
    }

    const prompt = `Tu es correcteur Quizzly IA. Corrige les réponses et note sur 20.
Réponds UNIQUEMENT en JSON.

Données:
${JSON.stringify(answers)}

Règles:
- pointsAwarded par question entre 0 et maxPoints.
- score final total sur 20.
- feedback global motivant et précis.
- feedback par question court et utile.

Schéma JSON attendu:
{
  "score": 14,
  "feedback": "string",
  "corrections": [
    {"id":"q1", "pointsAwarded":2, "feedback":"string"}
  ]
}`;

    const result = await generateGeminiJson(prompt, isEvaluationPayload);
    return NextResponse.json({ evaluation: result.payload, model: result.model });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Impossible de corriger les réponses.";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
