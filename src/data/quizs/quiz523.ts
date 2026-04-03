import { Quiz } from "@/types/quiz";

export const quiz523: Quiz = {
  id: "523",
  titre: "Mathématiques : La Symétrie Axiale 🪞",
  description: "Découvrez l'effet miroir en géométrie.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un axe de symétrie ?",
      options: ["Une ligne de pliage qui sépare une figure en deux parties superposables", "La couleur d'une figure", "Le centre d'un cercle", "Une règle"],
      reponse: "Une ligne de pliage qui sépare une figure en deux parties superposables",
      explication: "Si on plie le long de l'axe, les deux parties se superposent exactement."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien d'axes de symétrie possède un carré ?",
      options: ["2", "4", "8", "1"],
      reponse: "4",
      explication: "Les deux médianes et les deux diagonales."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel animal est célèbre pour sa symétrie presque parfaite ?",
      options: ["L'escargot", "Le papillon", "Le crabe", "L'éléphant"],
      reponse: "Le papillon",
      explication: "Ses ailes sont symétriques par rapport à son corps."
    },
    {
      id: "4",
      type: "qcm",
      question: "Si un point A est à 3cm d'un axe, à quelle distance sera son symétrique A' par rapport à cet axe ?",
      options: ["3 cm", "6 cm", "1 cm", "0 cm"],
      reponse: "3 cm",
      explication: "La symétrie conserve les distances par rapport à l'axe."
    },
    {
      id: "5",
      type: "qcm",
      question: "La symétrie axiale change-t-elle la taille de la figure ?",
      options: ["Oui, elle l'agrandit", "Oui, elle la réduit", "Non, elle conserve les dimensions (tailles, angles)", "Parfois"],
      reponse: "Non, elle conserve les dimensions (tailles, angles)",
      explication: "La figure de départ et son symétrique sont identiques (mais inversées comme dans un miroir)."
    },
    {
      id: "6",
      type: "qcm",
      question: "Combien d'axes de symétrie possède un rectangle (non carré) ?",
      options: ["1", "2", "4", "0"],
      reponse: "2",
      explication: "Seulement ses deux médianes. Les diagonales ne sont pas des axes pour un rectangle."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel instrument utilise-t-on pour construire le symétrique d'un point au propre ?",
      options: ["Uniquement une règle", "Une équerre et un compas (ou une règle graduée)", "Un rapporteur", "Une gomme"],
      reponse: "Une équerre et un compas (ou une règle graduée)",
      explication: "Il faut tracer la perpendiculaire à l'axe et reporter la distance."
    },
    {
      id: "8",
      type: "qcm",
      question: "Combien d'axes de symétrie possède un cercle ?",
      options: ["1", "4", "10", "Une infinité"],
      reponse: "Une infinité",
      explication: "N'importe quel diamètre est un axe de symétrie."
    },
    {
      id: "9",
      type: "qcm",
      question: "Le symétrique d'un segment est :",
      options: ["Une droite", "Un segment de même longueur", "Un point", "Un cercle"],
      reponse: "Un segment de même longueur",
      explication: "La symétrie conserve les longueurs."
    },
    {
      id: "10",
      type: "qcm",
      question: "Le symétrique d'un angle de 40° est un angle de :",
      options: ["80°", "40°", "20°", "140°"],
      reponse: "40°",
      explication: "La symétrie conserve la mesure des angles."
    }
  ]
};
