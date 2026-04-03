import { Quiz } from "@/types/quiz";

export const quiz708: Quiz = {
  id: "708",
  titre: "Maths : La Symétrie et les Transformations 🪟",
  description: "Découvrez comment les formes bougent et se reflètent.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel type de symétrie agit comme un miroir ?",
      options: ["Symétrie axiale", "Symétrie centrale", "Translation", "Rotation"],
      reponse: "Symétrie axiale",
      explication: "Elle se fait par rapport à une droite appelée axe de symétrie."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien d'axes de symétrie possède un carré ?",
      options: ["2", "4", "Infini", "0"],
      reponse: "4",
      explication: "Les deux médiatrices et les deux diagonales."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est l'autre nom de la symétrie centrale ?",
      options: ["Demi-tour", "Glissement", "Agrandissement", "Réflexion"],
      reponse: "Demi-tour",
      explication: "C'est une rotation de 180 degrés autour d'un point."
    },
    {
      id: "4",
      type: "qcm",
      question: "Une transformation qui fait 'glisser' une figure sans la tourner est ?",
      options: ["Une rotation", "Une translation", "Une symétrie", "Une homothétie"],
      reponse: "Une translation",
      explication: "Elle garde la même direction et le même sens."
    },
    {
      id: "5",
      type: "qcm",
      question: "Combien d'axes de symétrie possède un cercle ?",
      options: ["1", "4", "Infini", "100"],
      reponse: "Infini",
      explication: "N'importe quel diamètre est un axe de symétrie."
    },
    {
      id: "6",
      type: "qcm",
      question: "Si on tourne une figure de 90°, quelle transformation a-t-on effectuée ?",
      options: ["Une rotation", "Une translation", "Une réflexion", "Un glissement"],
      reponse: "Une rotation",
      explication: "Elle se définit par un centre, un angle et un sens."
    },
    {
      id: "7",
      type: "qcm",
      question: "Laquelle de ces lettres n'a AUCUN axe de symétrie ?",
      options: ["A", "H", "F", "M"],
      reponse: "F",
      explication: "A, H et M ont toutes au moins un axe vertical ou horizontal."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel triangle possède exactement 3 axes de symétrie ?",
      options: ["Rectangle", "Isocèle", "Équilatéral", "Scalène"],
      reponse: "Équilatéral",
      explication: "Ce sont les trois médiatrices des côtés."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que devient la droite (AB) par une translation ?",
      options: ["Une droite perpendiculaire", "Une droite parallèle", "Un point", "Un angle"],
      reponse: "Une droite parallèle",
      explication: "La translation conserve le parallélisme."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on le point fixe d'une symétrie centrale ?",
      options: ["L'origine", "Le centre de symétrie", "L'axe", "Le pivot"],
      reponse: "Le centre de symétrie",
      explication: "Tout point et son image sont alignés avec ce centre."
    }
  ]
};
