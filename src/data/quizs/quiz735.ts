import { Quiz } from "@/types/quiz";

export const quiz735: Quiz = {
  id: "735",
  titre: "SVT : Les Micro-organismes 🦠",
  description: "Découvrir le monde invisible des bactéries et des virus.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Avec quel instrument peut-on observer les micro-organismes ?",
      options: ["Une loupe", "Un télescope", "Un microscope", "Des lunettes de soleil"],
      reponse: "Un microscope",
      explication: "Ils sont trop petits pour être vus à l'œil nu."
    },
    {
      id: "2",
      type: "qcm",
      question: "Tous les micro-organismes sont-ils dangereux ?",
      options: ["Oui, tous", "Non, certains sont utiles", "Uniquement les virus", "Seulement le week-end"],
      reponse: "Non, certains sont utiles",
      explication: "Il y a de 'bonnes' bactéries dans notre intestin ou pour faire du fromage."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Se laver les mains réduit le risque de transmission des maladies.",
      reponse: "Vrai",
      explication: "C'est un geste d'hygiène de base très efficace."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le médicament qui tue les bactéries ?",
      reponse: "Antibiotique",
      explication: "Attention : ils sont inefficaces contre les virus !"
    },
    {
      id: "5",
      type: "qcm",
      question: "Que font les globules blancs dans notre corps ?",
      options: ["Ils transportent l'oxygène", "Ils nous défendent contre les microbes", "Ils digèrent les aliments", "Ils dorment"],
      reponse: "Ils nous défendent contre les microbes",
      explication: "Ce sont les soldats de notre système immunitaire."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Un virus a besoin d'une cellule vivante pour se multiplier.",
      reponse: "Vrai",
      explication: "Il pirate une cellule pour fabriquer des copies de lui-même."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un vaccin ?",
      options: ["Un poison", "Un entraînement pour le système immunitaire", "Une pilule magique", "Un type de pansement"],
      reponse: "Un entraînement pour le système immunitaire",
      explication: "Il apprend au corps à reconnaître un microbe sans être malade."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel aliment commun est fabriqué grâce à des bactéries ?",
      reponse: "Yaourt",
      explication: "Ou fromage, pain (levures)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle l'envahissement du corps par des microbes ?",
      options: ["L'infection", "L'injection", "La sélection", "La direction"],
      reponse: "L'infection",
      explication: "Le corps réagit alors pour se défendre."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les micro-organismes sont présents partout (air, eau, sol).",
      reponse: "Vrai",
      explication: "Ils colonisent tous les milieux."
    }
  ]
};
