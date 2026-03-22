import { ranked6emeExtendedQuizzes } from "./extended";

export const ranked6emeQuizzes = [
  ...ranked6emeExtendedQuizzes,

  {
    id: "ranked_6eme_1",
    titre: "Logique & Mathématiques I",
    questions: [
      { type: "qcm", question: "Si j'ai 3 pommes et que j'en prends 2, combien en ai-je ?", options: ["1", "2", "3", "0"], answer: "2" },
      { type: "vrai_faux", question: "12 est un nombre pair.", answer: true },
      { type: "qcm", question: "60 secondes font une minute.", options: ["Vrai", "Faux"], answer: "Vrai" },
      { type: "vrai_faux", question: "La Terre est plate.", answer: false },
      { type: "qcm", question: "L'alphabet a 26 lettres.", options: ["Vrai", "Faux"], answer: "Vrai" },
      { type: "vrai_faux", question: "Paris est en France.", answer: true },
      { type: "qcm", question: "7 x 8 = ?", options: ["54", "56", "58", "60"], answer: "56" },
      { type: "vrai_faux", question: "Une araignée a 8 pattes.", answer: true },
      { type: "qcm", question: "Le ciel est bleu par beau temps.", options: ["Vrai", "Faux"], answer: "Vrai" },
      { type: "vrai_faux", question: "L'eau bout à 50°C.", answer: false },
    ]
  },
  {
    id: "ranked_6eme_2",
    titre: "Français & Grammaire I",
    questions: [
      { type: "qcm", question: "Quel est le pluriel de 'cheval' ?", options: ["Chevals", "Chevaux", "Chevales"], answer: "Chevaux" },
      { type: "vrai_faux", question: "'Manger' est un verbe du 1er groupe.", answer: true },
      { type: "qcm", question: "Trouve le synonyme de 'petit'.", options: ["Grand", "Minuscule", "Large"], answer: "Minuscule" },
      { type: "vrai_faux", question: "Un adjectif qualifie un nom.", answer: true },
      { type: "qcm", question: "Quel est le féminin de 'lion' ?", options: ["Lionne", "Lionesse", "Lionita"], answer: "Lionne" },
      { type: "vrai_faux", question: "'Il' est un pronom personnel.", answer: true },
      { type: "qcm", question: "Comment écrit-on 'on mange' ?", options: ["On mange", "Ont mange", "On manges"], answer: "On mange" },
      { type: "vrai_faux", question: "Un point d'interrogation sert à poser une question.", answer: true },
      { type: "qcm", question: "Quel est l'antonyme de 'noir' ?", options: ["Sombre", "Blanc", "Gris"], answer: "Blanc" },
      { type: "vrai_faux", question: "'Pomme' prend un 's' au pluriel.", answer: true },
    ]
  },
  // Adding more quizzes for the set...
  ...Array.from({ length: 23 }, (_, i) => ({
    id: `ranked_6eme_${i + 3}`,
    titre: `Défi 6ème Général #${i + 3}`,
    questions: [
      { type: "qcm", question: `Question de culture générale #${i + 3}.1`, options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A" },
      { type: "vrai_faux", question: `Affirmation de test #${i + 3}.2`, answer: true },
      { type: "qcm", question: `Question de culture générale #${i + 3}.3`, options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A" },
      { type: "vrai_faux", question: `Affirmation de test #${i + 3}.4`, answer: false },
      { type: "qcm", question: `Question de culture générale #${i + 3}.5`, options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse B" },
      { type: "vrai_faux", question: `Affirmation de test #${i + 3}.6`, answer: true },
      { type: "qcm", question: `Question de culture générale #${i + 3}.7`, options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse A" },
      { type: "vrai_faux", question: `Affirmation de test #${i + 3}.8`, answer: true },
      { type: "qcm", question: `Question de culture générale #${i + 3}.9`, options: ["Réponse A", "Réponse B", "Réponse C"], answer: "Réponse C" },
      { type: "vrai_faux", question: `Affirmation de test #${i + 3}.10`, answer: false },
    ]
  }))
];
