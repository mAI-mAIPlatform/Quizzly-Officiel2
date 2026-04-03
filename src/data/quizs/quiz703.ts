import { Quiz } from "@/types/quiz";

export const quiz703: Quiz = {
  id: "703",
  titre: "Maths : Les Triangles (SOH CAH TOA / Pythagore) 📐",
  description: "Démontrez vos connaissances sur les formes à trois côtés.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la somme des angles d'un triangle ?",
      options: ["90°", "180°", "360°", "270°"],
      reponse: "180°",
      explication: "Dans tout triangle euclidien, la somme des angles vaut toujours 180 degrés."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un triangle ayant deux côtés égaux ?",
      options: ["Équilatéral", "Isocèle", "Rectangle", "Scalène"],
      reponse: "Isocèle",
      explication: "Un triangle isocèle a deux côtés de même longueur."
    },
    {
      id: "3",
      type: "qcm",
      question: "Dans un triangle rectangle, quel côté est le plus long ?",
      options: ["L'adjacent", "L'opposé", "L'hypoténuse", "La base"],
      reponse: "L'hypoténuse",
      explication: "L'hypoténuse est le côté opposé à l'angle droit."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel théorème permet de calculer les longueurs dans un triangle rectangle ?",
      options: ["Thalès", "Pythagore", "Euclide", "Newton"],
      reponse: "Pythagore",
      explication: "Le théorème de Pythagore : a² + b² = c²."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans SOH CAH TOA, que représente le 'S' ?",
      options: ["Somme", "Sinus", "Surface", "Scalène"],
      reponse: "Sinus",
      explication: "Sinus = Opposé / Hypoténuse."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on un triangle dont tous les côtés sont égaux ?",
      options: ["Rectangle", "Isocèle", "Équilatéral", "Grand"],
      reponse: "Équilatéral",
      explication: "Un triangle équilatéral a trois côtés égaux et trois angles de 60°."
    },
    {
      id: "7",
      type: "qcm",
      question: "Si un triangle rectangle a des côtés de 3 cm et 4 cm, quelle est la longueur de l'hypoténuse ?",
      options: ["5 cm", "6 cm", "7 cm", "25 cm"],
      reponse: "5 cm",
      explication: "3² + 4² = 9 + 16 = 25. La racine carrée de 25 est 5."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est le cosinus d'un angle dans un triangle rectangle ?",
      options: ["Opposé / Hypoténuse", "Adjacent / Hypoténuse", "Opposé / Adjacent", "Hypoténuse / Opposé"],
      reponse: "Adjacent / Hypoténuse",
      explication: "C'est la définition du rapport trigonométrique cosinus (CAH)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Un triangle rectangle isocèle possède un angle de 90° et deux angles de ?",
      options: ["30°", "45°", "60°", "15°"],
      reponse: "45°",
      explication: "(180 - 90) / 2 = 45."
    },
    {
      id: "10",
      type: "qcm",
      question: "La tangente d'un angle est égale à ?",
      options: ["Sinus / Cosinus", "Cosinus / Sinus", "1 / Sinus", "Adjacent / Opposé"],
      reponse: "Sinus / Cosinus",
      explication: "Tan = Sin / Cos = Opposé / Adjacent."
    }
  ]
};
