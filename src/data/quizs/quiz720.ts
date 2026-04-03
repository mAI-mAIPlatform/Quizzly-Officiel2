import { Quiz } from "@/types/quiz";

export const quiz720: Quiz = {
  id: "720",
  titre: "Français : Compréhension de Lecture 📖",
  description: "Analyser des textes courts et répondre à des questions de logique.",
  theme: "Français",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans un texte, comment appelle-t-on celui qui raconte l'histoire ?",
      options: ["L'auteur", "Le narrateur", "Le personnage principal", "L'éditeur"],
      reponse: "Le narrateur",
      explication: "L'auteur écrit le livre, le narrateur raconte dans l'histoire."
    },
    {
      id: "2",
      type: "vrai_faux",
      question: "Un texte écrit en 'je' est un récit à la première personne.",
      reponse: "Vrai",
      explication: "Le narrateur est souvent un personnage de l'histoire."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que signifie 'le dénouement' d'une histoire ?",
      options: ["Le début", "La péripétie", "La fin / la résolution", "Le titre"],
      reponse: "La fin / la résolution",
      explication: "C'est le moment où l'intrigue se résout."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel est le temps par excellence du récit au passé (actions limitées) ?",
      reponse: "Passé simple",
      explication: "Il s'oppose à l'imparfait (description/durée)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Un portrait physique dans un texte est une...",
      options: ["Narration", "Description", "Argumentation", "Dispute"],
      reponse: "Description",
      explication: "On dépeint l'apparence d'un personnage."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le titre d'un livre donne toujours la fin de l'histoire.",
      reponse: "Faux",
      explication: "Il sert à identifier l'œuvre ou donner le thème."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans une pièce de théâtre, les indications de mise en scène s'appellent...",
      options: ["Des répliques", "Des didascalies", "Des monologues", "Des actes"],
      reponse: "Des didascalies",
      explication: "Souvent en italique, elles ne sont pas dites par les acteurs."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un récit de la vie d'une personne par elle-même ?",
      reponse: "Autobiographie",
      explication: "Auto (soi-même) + Bio (vie) + Graphie (écriture)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'élément qui vient perturber la situation initiale ?",
      options: ["La conclusion", "L'élément perturbateur", "Le décor", "La préface"],
      reponse: "L'élément perturbateur",
      explication: "C'est ce qui lance l'action."
    },
    {
      id: "10",
      type: "qcm",
      question: "Un dialogue est reconnaissable par...",
      options: ["Des guillemets et des tirets", "De longs paragraphes", "L'absence de ponctuation", "Des images"],
      reponse: "Des guillemets et des tirets",
      explication: "Ils marquent le changement de locuteur."
    }
  ]
};
