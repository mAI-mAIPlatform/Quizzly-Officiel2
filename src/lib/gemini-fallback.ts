const GEMINI_MODELS = [
  "gemini-2.0-flash-lite",
  "gemini-2.0-flash",
  "gemini-1.5-flash-latest",
  "gemini-1.5-flash-8b-latest",
  "gemini-1.5-pro-latest",
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

function getApiKeys(): string[] {
  return [process.env.GEMINI_API_KEY_1, process.env.GEMINI_API_KEY_2, process.env.GEMINI_API_KEY_3, process.env.GEMINI_API_KEY_4].filter(
    (key): key is string => Boolean(key && key.length > 0),
  );
}

function parseRetryDelaySeconds(errorText: string): number {
  const match = errorText.match(/"retryDelay"\s*:\s*"(\d+)s"/i);
  return match?.[1] ? Number(match[1]) : 0;
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
      const retryAfter = parseRetryDelaySeconds(errorText);
      throw new Error(`STATUS_${response.status}|RETRY_${retryAfter}|${errorText}`);
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
      throw new Error("STATUS_500|RETRY_0|Réponse Gemini vide");
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
  const unavailableModels = new Set<string>();
  let maxRetryDelaySeconds = 0;
  let quotaHitCount = 0;

  for (const apiKey of apiKeys) {
    for (const model of GEMINI_MODELS) {
      if (unavailableModels.has(model)) continue;

      try {
        const parsed = await callGemini(model, apiKey, prompt);
        if (!validator(parsed)) {
          throw new Error(`STATUS_422|RETRY_0|Format JSON Gemini invalide pour ${model}`);
        }

        return { payload: parsed, model };
      } catch (error) {
        const message = error instanceof Error ? error.message : "STATUS_500|RETRY_0|Erreur inconnue Gemini";
        const statusMatch = message.match(/STATUS_(\d+)/);
        const retryMatch = message.match(/RETRY_(\d+)/);
        const statusCode = statusMatch?.[1] ? Number(statusMatch[1]) : 500;
        const retryDelay = retryMatch?.[1] ? Number(retryMatch[1]) : 0;

        maxRetryDelaySeconds = Math.max(maxRetryDelaySeconds, retryDelay);

        // Si le modèle est absent pour l'API version, on le retire des tentatives suivantes.
        if (statusCode === 404) {
          unavailableModels.add(model);
        }

        if (statusCode === 429) {
          quotaHitCount += 1;
        }

        errors.push(`[${model}] ${message}`);
      }
    }
  }

  if (quotaHitCount > 0) {
    const wait = maxRetryDelaySeconds > 0 ? ` Réessaie dans ~${maxRetryDelaySeconds}s.` : "";
    throw new Error(`Quota Gemini dépassé sur les clés/modèles testés.${wait}`);
  }

  throw new Error(errors.slice(-4).join(" | ") || "Impossible de générer la réponse Gemini");
}

export { GEMINI_MODELS };
