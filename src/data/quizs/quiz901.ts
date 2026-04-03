import { Quiz } from "@/types/quiz";

export const quiz901: Quiz = {
  id: "901",
  titre: "Gastronomie : Le Pain et la Boulangerie 🥖🥐",
  description: "Découvrez les secrets du pain français, symbole de notre culture.",
  theme: "Culture Générale",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le pain le plus célèbre et emblématique de la France ?",
      options: ["Le pain de mie", "La baguette", "Le pain complet", "Le bagel"],
      reponse: "La baguette",
      explication: "Elle est longue, croustillante et reconnue dans le monde entier."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quels sont les trois ingrédients de base pour faire du pain ?",
      options: ["Farine, Eau, Levure", "Lait, Beurre, Sucre", "Farine, Œufs, Chocolat", "Eau, Sel, Huile"],
      reponse: "Farine, Eau, Levure",
      explication: "On ajoute aussi souvent une pincée de sel."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le 'croissant' est une viennoiserie faite avec de la pâte feuilletée.",
      reponse: "Vrai",
      explication: "C'est le beurre qui donne ses couches croustillantes au croissant."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le petit pain contenant deux barres de chocolat (selon la région, on l'appelle aussi chocolatine) ?",
      reponse: "Pain au chocolat",
      explication: "C'est l'un des goûters préférés des enfants."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle l'artisan qui fabrique le pain ?",
      options: ["Le pâtissier", "Le boulanger", "Le boucher", "Le charcutier"],
      reponse: "Le boulanger",
      explication: "Il travaille souvent très tôt le matin pour que le pain soit chaud au réveil."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La baguette de pain française est inscrite au patrimoine de l'UNESCO.",
      reponse: "Vrai",
      explication: "Depuis 2022, ses secrets de fabrication sont protégés."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'une 'brioche' ?",
      options: ["Un pain dur", "Un pain moelleux et sucré à base de beurre et d'œufs", "Une sorte de biscuit", "Un légume"],
      reponse: "Un pain moelleux et sucré à base de beurre et d'œufs",
      explication: "Elle est idéale pour le petit-déjeuner."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le pain rond et épais, souvent à la croûte brune ?",
      reponse: "Boule",
      explication: "Ou miche de pain."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie 'faire lever la pâte' ?",
      options: ["La jeter en l'air", "Laisser les levures produire du gaz pour que la pâte gonfle", "La mettre au four", "La peindre en blanc"],
      reponse: "Laisser les levures produire du gaz pour que la pâte gonfle",
      explication: "C'est une étape essentielle pour que le pain soit aéré."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le pain 'complet' est fabriqué avec de la farine qui contient encore l'enveloppe du grain de blé.",
      reponse: "Vrai",
      explication: "Il est plus riche en fibres et plus sombre que le pain blanc."
    }
  ]
};
