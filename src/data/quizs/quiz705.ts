import { Quiz } from "@/types/quiz";

export const quiz705: Quiz = {
  id: "705",
  titre: "Maths : Calcul Littéral (Introduction) 🔣",
  description: "Découvrez comment utiliser des lettres à la place des chiffres.",
  theme: "Sciences",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Simplifiez l'expression : x + x",
      options: ["x²", "2x", "x+1", "x"],
      reponse: "2x",
      explication: "On additionne les coefficients : 1x + 1x = 2x."
    },
    {
      id: "2",
      type: "qcm",
      question: "Que vaut x² si x = 4 ?",
      options: ["8", "16", "4", "2"],
      reponse: "16",
      explication: "4 x 4 = 16."
    },
    {
      id: "3",
      type: "qcm",
      question: "Développez l'expression : 2(x + 3)",
      options: ["2x + 3", "2x + 6", "x + 6", "5x"],
      reponse: "2x + 6",
      explication: "On distribue le 2 : 2*x + 2*3 = 2x + 6."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est la valeur de 3x - 5 si x = 2 ?",
      options: ["1", "6", "-3", "11"],
      reponse: "1",
      explication: "3(2) - 5 = 6 - 5 = 1."
    },
    {
      id: "5",
      type: "qcm",
      question: "Simplifiez l'expression : 5x * 2x",
      options: ["7x", "10x", "10x²", "25x"],
      reponse: "10x²",
      explication: "5 * 2 = 10 et x * x = x²."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on le nombre devant une lettre (ex : le 4 dans 4y) ?",
      options: ["La variable", "Le coefficient", "L'exposant", "Le facteur"],
      reponse: "Le coefficient",
      explication: "Le coefficient multiplie la variable."
    },
    {
      id: "7",
      type: "qcm",
      question: "Factorisez : 3x + 15",
      options: ["3(x + 15)", "3(x + 5)", "x(3 + 15)", "3x(1 + 5)"],
      reponse: "3(x + 5)",
      explication: "3 est le facteur commun car 15 = 3 * 5."
    },
    {
      id: "8",
      type: "qcm",
      question: "Que vaut a + b si a = 10 et b = -3 ?",
      options: ["13", "7", "-7", "30"],
      reponse: "7",
      explication: "10 + (-3) = 10 - 3 = 7."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle expression correspond au 'triple d'un nombre augmenté de 4' ?",
      options: ["x + 3 + 4", "3x + 4", "3(x + 4)", "4x + 3"],
      reponse: "3x + 4",
      explication: "Le triple (3x) plus (+4)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Simplifiez l'expression : 2y + 3x + y - x",
      options: ["3y + 2x", "5xy", "2y + 2x", "3y + 4x"],
      reponse: "3y + 2x",
      explication: "(2y + y) + (3x - x) = 3y + 2x."
    }
  ]
};
