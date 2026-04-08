const GEMINI_MODELS = [
  "gemini-2.0-flash-lite",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
] as const;

function getModelEndpoint(model: string) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
}

function extractJson(text: string): string {
  const fenced = text.match(/```json\s*([\s\S]*?)\s*```/i);
  if (fenced?.[1]) return fenced[1].trim();

  // Fallback robuste: extraire le premier bloc JSON si l'IA ajoute du texte autour.
  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    return text.slice(firstBrace, lastBrace + 1).trim();
  }

  return text.trim();
}

// Récupère les clés API dans l'ordre de fallback défini par la config.
function getApiKeys(): string[] {
  return [process.env.GEMINI_API_KEY_1, process.env.GEMINI_API_KEY_2, process.env.GEMINI_API_KEY_3, process.env.GEMINI_API_KEY_4].filter(
    (key): key is string => Boolean(key && key.length > 0),
  );
}

async function callGemini(model: string, apiKey: string, prompt: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);

  try {
    const response = await fetch(`${getModelEndpoint(model)}?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json",
        },
      }),
      signal: controller.signal,
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

    return JSON.parse(extractJson(outputText)) as unknown;
  } finally {
    clearTimeout(timeout);
  }
}

export async function generateGeminiJson<T>(prompt: string, validator: (payload: unknown) => payload is T) {
  const apiKeys = getApiKeys();
  if (apiKeys.length === 0) {
    throw new Error("Aucune clé Gemini configurée côté serveur.");
  }

  const errors: string[] = [];

  // Fallback complet: pour chaque clé, on essaie les modèles légers dans l'ordre.
  for (const apiKey of apiKeys) {
    for (const model of GEMINI_MODELS) {
      try {
        const parsed = await callGemini(model, apiKey, prompt);
        if (!validator(parsed)) {
          throw new Error(`Format JSON Gemini invalide pour ${model}`);
        }

        return { payload: parsed, model };
      } catch (error) {
        errors.push(error instanceof Error ? `[${model}] ${error.message}` : `[${model}] Erreur inconnue Gemini`);
      }
    }
  }

  throw new Error(errors.slice(-4).join(" | ") || "Impossible de générer la réponse Gemini");
}

export { GEMINI_MODELS };
