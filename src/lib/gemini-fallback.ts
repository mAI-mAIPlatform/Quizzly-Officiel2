const GEMINI_MODEL = "gemini-2.0-flash-lite";
const GEMINI_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

function extractJson(text: string): string {
  const fenced = text.match(/```json\s*([\s\S]*?)\s*```/i);
  return fenced?.[1]?.trim() || text.trim();
}

// Récupère les clés API dans l'ordre de fallback défini par la config.
function getApiKeys(): string[] {
  return [process.env.GEMINI_API_KEY_1, process.env.GEMINI_API_KEY_2, process.env.GEMINI_API_KEY_3, process.env.GEMINI_API_KEY_4].filter(
    (key): key is string => Boolean(key && key.length > 0),
  );
}

export async function generateGeminiJson<T>(prompt: string, validator: (payload: unknown) => payload is T) {
  const apiKeys = getApiKeys();
  if (apiKeys.length === 0) {
    throw new Error("Aucune clé Gemini configurée côté serveur.");
  }

  const errors: string[] = [];

  // On tente chaque clé jusqu'à obtenir une réponse valide.
  for (const apiKey of apiKeys) {
    try {
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
      if (!validator(parsed)) {
        throw new Error("Format JSON Gemini invalide");
      }

      return { payload: parsed, model: GEMINI_MODEL };
    } catch (error) {
      errors.push(error instanceof Error ? error.message : "Erreur inconnue Gemini");
    }
  }

  throw new Error(errors.slice(-2).join(" | ") || "Impossible de générer la réponse Gemini");
}

export { GEMINI_MODEL };
