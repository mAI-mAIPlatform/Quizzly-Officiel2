export type LearningLevel =
  | "Débutant"
  | "Entraînement"
  | "Étudiant"
  | "Difficile"
  | "Expert"
  | "Savant"
  | "Génie";

export type ColorBlindMode = "default" | "protanopia" | "deuteranopia" | "tritanopia";

export type FriendRequestMode = "enabled" | "disabled";

export const LEARNING_LEVELS: Array<{
  id: LearningLevel;
  label: string;
  description: string;
}> = [
  { id: "Débutant", label: "Débutant", description: "Découvrir les bases tranquillement." },
  { id: "Entraînement", label: "Entraînement", description: "Réviser et prendre le rythme." },
  { id: "Étudiant", label: "Étudiant", description: "Avancer avec des quiz réguliers." },
  { id: "Difficile", label: "Difficile", description: "Des questions qui font vraiment travailler." },
  { id: "Expert", label: "Expert", description: "Un niveau plus rapide et plus dense." },
  { id: "Savant", label: "Savant", description: "Pour les joueurs très à l'aise." },
  { id: "Génie", label: "Génie", description: "Le rythme le plus élevé." },
];

export const KNOWN_PLAYER_SEEDS = [
  "Maya",
  "Noah",
  "Emma",
  "Léo",
  "Inès",
  "Hugo",
  "Jade",
  "Adam",
  "Sara",
  "Lina",
  "Lucas",
  "Nina",
  "Sofia",
  "Camille",
  "Ilyes",
  "Zoé",
  "Mathis",
  "Milan",
  "Mila",
  "Rayan",
  "Chloé",
  "Sarah",
];

export function normalizePseudo(value: string) {
  return normalizeText(value);
}

export function normalizeText(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

export function isKnownPlayer(pseudo: string, directory: string[] = KNOWN_PLAYER_SEEDS) {
  const target = normalizePseudo(pseudo);
  return directory.some((entry) => normalizePseudo(entry) === target);
}

export function createId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function mapLegacyClassToLearningLevel(className: string): LearningLevel {
  const normalized = normalizePseudo(className);

  if (normalized.includes("6")) return "Débutant";
  if (normalized.includes("5")) return "Entraînement";
  if (normalized.includes("4")) return "Étudiant";
  if (normalized.includes("3")) return "Difficile";
  if (normalized.includes("seconde")) return "Expert";
  if (normalized.includes("premiere")) return "Savant";
  if (normalized.includes("terminale")) return "Génie";

  return "Débutant";
}

function bytesToHex(bytes: Uint8Array) {
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function createSalt() {
  const bytes = new Uint8Array(16);
  globalThis.crypto?.getRandomValues(bytes);
  return bytesToHex(bytes);
}

export async function hashPassword(password: string, salt = createSalt()) {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${salt}:${password}`);
  const digest = await globalThis.crypto.subtle.digest("SHA-256", data);
  return {
    salt,
    hash: bytesToHex(new Uint8Array(digest)),
  };
}

export async function verifyPassword(password: string, salt: string, expectedHash: string) {
  const { hash } = await hashPassword(password, salt);
  return hash === expectedHash;
}
