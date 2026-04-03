import { Quiz } from "@/types/quiz";

export const quiz520: Quiz = {
  id: "520",
  titre: "Mathématiques : Les Angles 📐",
  description: "Apprenez à mesurer et nommer les différents types d'angles.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel instrument utilise-t-on pour mesurer un angle ?",
      options: ["Une règle", "Un compas", "Un rapporteur", "Une équerre"],
      reponse: "Un rapporteur",
      explication: "Il est souvent en demi-cercle et gradué en degrés."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est l'unité de mesure d'un angle ?",
      options: ["Le mètre", "Le litre", "Le degré (°)", "Le kilogramme"],
      reponse: "Le degré (°)",
      explication: "Un cercle complet fait 360 degrés."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on un angle qui mesure exactement 90° ?",
      options: ["Angle aigu", "Angle obtus", "Angle droit", "Angle plat"],
      reponse: "Angle droit",
      explication: "C'est l'angle formé par deux droites perpendiculaires (comme un coin de feuille)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Un angle plus petit qu'un angle droit (moins de 90°) est un :",
      options: ["Angle aigu", "Angle obtus", "Angle plat", "Angle nul"],
      reponse: "Angle aigu",
      explication: "Il est 'pointu'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Un angle plus grand qu'un angle droit mais plus petit qu'un angle plat (entre 90° et 180°) est un :",
      options: ["Angle aigu", "Angle obtus", "Angle plein", "Angle nul"],
      reponse: "Angle obtus",
      explication: "Il est plus 'ouvert' que l'angle droit."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle est la mesure d'un angle plat ?",
      options: ["90°", "180°", "360°", "0°"],
      reponse: "180°",
      explication: "Les deux côtés de l'angle sont dans le prolongement l'un de l'autre (forme une droite)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle l'endroit où se rejoignent les deux côtés d'un angle ?",
      options: ["Le milieu", "Le sommet", "L'origine", "Le centre"],
      reponse: "Le sommet",
      explication: "C'est le point de départ des deux demi-droites."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel instrument permet de vérifier facilement si un angle est droit ?",
      options: ["Le réglet", "L'équerre", "Le compas", "La balance"],
      reponse: "L'équerre",
      explication: "Son angle principal mesure pile 90°."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la mesure d'un angle plein ?",
      options: ["180°", "90°", "360°", "45°"],
      reponse: "360°",
      explication: "C'est un tour complet."
    },
    {
      id: "10",
      type: "qcm",
      question: "Un angle de 45° est-il aigu ou obtus ?",
      options: ["Aigu", "Obtus", "Droit", "Plat"],
      reponse: "Aigu",
      explication: "45 est plus petit que 90."
    }
  ]
};
