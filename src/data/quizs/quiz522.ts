import { Quiz } from "@/types/quiz";

export const quiz522: Quiz = {
  id: "522",
  titre: "Mathématiques : Les Triangles 🔺",
  description: "Apprenez à reconnaître les différents types de triangles et leurs propriétés.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de côtés possède un triangle ?",
      options: ["2", "3", "4", "5"],
      reponse: "3",
      explication: "C'est un polygone à trois côtés et trois sommets."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un triangle qui a deux côtés égaux ?",
      options: ["Triangle rectangle", "Triangle isocèle", "Triangle équilatéral", "Triangle quelconque"],
      reponse: "Triangle isocèle",
      explication: "Il possède également deux angles égaux au sommet."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on un triangle qui a trois côtés égaux ?",
      options: ["Triangle isocèle", "Triangle équilatéral", "Triangle rectangle", "Triangle quelconque"],
      reponse: "Triangle équilatéral",
      explication: "Ses trois angles mesurent tous 60°."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce qu'un triangle rectangle ?",
      options: ["Un triangle qui a 4 côtés", "Un triangle qui possède un angle droit (90°)", "Un triangle très long", "Un triangle sans angle"],
      reponse: "Un triangle qui possède un angle droit (90°)",
      explication: "Il peut être considéré comme la moitié d'un rectangle."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la somme des trois angles d'un triangle ?",
      options: ["90°", "180°", "360°", "Variable"],
      reponse: "180°",
      explication: "C'est une propriété fondamentale valable pour TOUS les triangles."
    },
    {
      id: "6",
      type: "qcm",
      question: "Un triangle rectangle peut-il être aussi isocèle ?",
      options: ["Oui", "Non", "Seulement s'il est équilatéral", "Jamais"],
      reponse: "Oui",
      explication: "C'est un triangle avec un angle de 90° et deux côtés de même longueur (angles de 45°)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le plus long côté d'un triangle rectangle (celui en face de l'angle droit) ?",
      options: ["La base", "L'hypoténuse", "Le sommet", "Le côté adjacent"],
      reponse: "L'hypoténuse",
      explication: "C'est un terme grec utilisé en géométrie."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'une hauteur dans un triangle ?",
      options: ["Un côté", "Une droite passant par un sommet et perpendiculaire au côté opposé", "La mesure de son contour", "Un angle"],
      reponse: "Une droite passant par un sommet et perpendiculaire au côté opposé",
      explication: "Elle sert à calculer l'aire du triangle."
    },
    {
      id: "9",
      type: "qcm",
      question: "Si un triangle a des côtés de 3cm, 4cm et 5cm, est-il équilatéral ?",
      options: ["Oui", "Non", "Seulement s'il est grand", "On ne sait pas"],
      reponse: "Non",
      explication: "Ses côtés ne sont pas de la même longueur."
    },
    {
      id: "10",
      type: "qcm",
      question: "Combien de sommets a un triangle ?",
      options: ["1", "2", "3", "4"],
      reponse: "3",
      explication: "Un sommet pour chaque angle."
    }
  ]
};
