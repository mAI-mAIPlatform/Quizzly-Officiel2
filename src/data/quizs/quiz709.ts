import { Quiz } from "@/types/quiz";

export const quiz709: Quiz = {
  id: "709",
  titre: "Maths : Les Équations du 1er degré ⚡",
  description: "Apprenez à trouver la valeur inconnue 'x'.",
  theme: "Sciences",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Résolvez : x + 5 = 12. Quelle est la valeur de x ?",
      options: ["5", "7", "17", "12"],
      reponse: "7",
      explication: "x = 12 - 5 = 7."
    },
    {
      id: "2",
      type: "qcm",
      question: "Résolvez : 3x = 15. Quelle est la valeur de x ?",
      options: ["5", "12", "18", "45"],
      reponse: "5",
      explication: "x = 15 / 3 = 5."
    },
    {
      id: "3",
      type: "qcm",
      question: "Résolvez : x - 8 = 2. Quelle est la valeur de x ?",
      options: ["-6", "6", "10", "16"],
      reponse: "10",
      explication: "x = 2 + 8 = 10."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que doit-on faire pour isoler x dans l'équation 2x + 4 = 10 ?",
      options: ["Multiplier par 2 d'abord", "Soustraire 4 d'abord", "Diviser par 10 d'abord", "Rien"],
      reponse: "Soustraire 4 d'abord",
      explication: "On déplace d'abord les termes constants : 2x = 10 - 4."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la solution de 2x = 7 ?",
      options: ["3", "3,5", "4", "5"],
      reponse: "3,5",
      explication: "7 / 2 = 3,5."
    },
    {
      id: "6",
      type: "qcm",
      question: "Résolvez : 10 - x = 4. Quelle est la valeur de x ?",
      options: ["14", "6", "-6", "4"],
      reponse: "6",
      explication: "10 - 6 = 4. Donc x = 6."
    },
    {
      id: "7",
      type: "qcm",
      question: "Si x / 2 = 10, que vaut x ?",
      options: ["5", "20", "12", "10"],
      reponse: "20",
      explication: "x = 10 * 2 = 20."
    },
    {
      id: "8",
      type: "qcm",
      question: "Résolvez : 2x + 1 = 9. Quelle est la valeur de x ?",
      options: ["4", "5", "8", "10"],
      reponse: "4",
      explication: "2x = 8, donc x = 4."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces nombres est solution de l'équation x² = 25 ?",
      options: ["2,5", "5", "12,5", "50"],
      reponse: "5",
      explication: "5 * 5 = 25. (-5 est aussi une solution)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on les deux parties d'une équation séparées par '=' ?",
      options: ["Les côtés", "Les membres", "Les facteurs", "Les termes"],
      reponse: "Les membres",
      explication: "Le premier membre (gauche) et le second membre (droite)."
    }
  ]
};
