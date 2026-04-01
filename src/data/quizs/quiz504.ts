import { Quiz } from "@/types/quiz";

export const quiz504: Quiz = {
  id: "504",
  titre: "Français : Le Passé Composé 🔙",
  description: "Révisez la formation avec 'Être' ou 'Avoir' et le participe passé.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment se forme traditionnellement le passé composé ?",
      options: ["Verbe à l'imparfait", "Auxiliaire (Être/Avoir) au présent + participe passé", "Radical + -ais", "Verbe à l'infinitif + -er"],
      reponse: "Auxiliaire (Être/Avoir) au présent + participe passé",
      explication: "Exemple : J'ai (auxiliaire) mangé (participe passé)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel auxiliaire utilise-t-on pour le verbe 'Arriver' ?",
      options: ["Avoir", "Être", "Aller", "Faire"],
      reponse: "Être",
      explication: "Les verbes de mouvement (naître, mourir, aller, venir, arriver...) utilisent l'auxiliaire être."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la bonne graphie : 'Elles sont [partir]' ?",
      options: ["Elles sont parti", "Elles sont parties", "Elles sont partis", "Elles sont partit"],
      reponse: "Elles sont parties",
      explication: "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est la bonne graphie : 'Elles ont [manger]' ?",
      options: ["Elles ont mangées", "Elles ont mangé", "Elles ont mangées", "Elles ont mangés"],
      reponse: "Elles ont mangé",
      explication: "Avec l'auxiliaire avoir, le participe passé ne s'accorde JAMAIS avec le sujet."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel est le participe passé du verbe 'Prendre' ?",
      options: ["Prendu", "Pris", "Prendé", "Prit"],
      reponse: "Pris",
      explication: "Verbe irrégulier : J'ai pris mon sac."
    },
    {
      id: "6",
      type: "qcm",
      question: "Conjuguez 'Nous' avec le verbe 'Finir' au passé composé :",
      options: ["Nous avons fini", "Nous avons finis", "Nous sommes finis", "Nous finissons"],
      reponse: "Nous avons fini",
      explication: "Le verbe finir utilise l'auxiliaire avoir."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est le participe passé du verbe 'Vouloir' ?",
      options: ["Voulu", "Voulé", "Voulut", "Vouloir"],
      reponse: "Voulu",
      explication: "J'ai voulu, tu as voulu..."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est le participe passé du verbe 'Faire' ?",
      options: ["Fais", "Fait", "Fas", "Faisait"],
      reponse: "Fait",
      explication: "Il a fait ses devoirs."
    },
    {
      id: "9",
      type: "qcm",
      question: "Choisissez la bonne phrase :",
      options: ["Ils sont venu", "Ils sont venus", "Ils ont venus", "Ils sont venues"],
      reponse: "Ils sont venus",
      explication: "Accord avec le sujet masculin pluriel 'Ils'."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le participe passé du verbe 'Pouvoir' ?",
      options: ["Pouvu", "Pu", "Pouvait", "Peut"],
      reponse: "Pu",
      explication: "J'ai pu, tu as pu..."
    }
  ]
};
