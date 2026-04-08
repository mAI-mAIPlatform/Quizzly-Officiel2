const AI_GATEWAY_BASE_URL = (process.env.AI_GATEWAY_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
const AI_GATEWAY_MODEL = process.env.AI_GATEWAY_MODEL || "gpt-4.1-nano";

function extractJson(text: string): string {
  const fenced = text.match(/```json\s*([\s\S]*?)\s*```/i);
  if (fenced?.[1]) return fenced[1].trim();

  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    return text.slice(firstBrace, lastBrace + 1).trim();
  }

  return text.trim();
}

async function callAiGateway(prompt: string) {
  const apiKey = process.env.AI_GATEWAY_API_KEY;
  if (!apiKey) {
    throw new Error("AI_GATEWAY_API_KEY manquante côté serveur.");
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(`${AI_GATEWAY_BASE_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: AI_GATEWAY_MODEL,
        response_format: { type: "json_object" },
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI Gateway HTTP ${response.status}: ${errorText}`);
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };

    const outputText = data.choices?.[0]?.message?.content;
    if (!outputText) {
      throw new Error("Réponse AI Gateway vide");
    }

    return JSON.parse(extractJson(outputText)) as unknown;
  } finally {
    clearTimeout(timeout);
  }
}

export async function generateGeminiJson<T>(prompt: string, validator: (payload: unknown) => payload is T) {
  const parsed = await callAiGateway(prompt);

  if (!validator(parsed)) {
    throw new Error("Format JSON invalide retourné par l'AI Gateway.");
  }

  return { payload: parsed, model: AI_GATEWAY_MODEL };
}

export const GEMINI_MODELS = [AI_GATEWAY_MODEL] as const;
