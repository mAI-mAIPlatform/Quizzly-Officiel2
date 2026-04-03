import { Quiz } from "@/types/quiz";

export const quiz851: Quiz = {
  id: "851",
  titre: "Espace : Le Système Solaire 🪐☀️",
  description: "Testez vos connaissances sur notre voisinage dans l'univers.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de planètes tournent autour du Soleil dans notre système solaire ?",
      options: ["7", "8", "9", "10"],
      reponse: "8",
      explication: "Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Pluton est une planète naine."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la plus grande planète du système solaire ?",
      options: ["La Terre", "Mars", "Jupiter", "Saturne"],
      reponse: "Jupiter",
      explication: "Elle est si grande qu'on pourrait mettre toutes les autres planètes à l'intérieur."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le Soleil est une étoile.",
      reponse: "Vrai",
      explication: "C'est une boule de gaz géante qui produit sa propre lumière et sa propre chaleur."
    },
    {
      id: "4",
      type: "courte",
      question: "Quelle planète est surnommée la 'planète rouge' ?",
      reponse: "Mars",
      explication: "Elle doit sa couleur à la présence de rouille (oxyde de fer) sur son sol."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces astres n'est pas une planète ?",
      options: ["Vénus", "La Lune", "Mercure", "Neptune"],
      reponse: "La Lune",
      explication: "La Lune est un satellite naturel qui tourne autour de la Terre."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Saturne est la seule planète à posséder des anneaux.",
      reponse: "Faux",
      explication: "Jupiter, Uranus et Neptune en ont aussi, mais ceux de Saturne sont les plus visibles et les plus beaux."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la planète la plus proche du Soleil ?",
      options: ["Vénus", "La Terre", "Mercure", "Mars"],
      reponse: "Mercure",
      explication: "Elle est très petite et très chaude le jour."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le mouvement d'une planète autour du Soleil ?",
      reponse: "Révolution",
      explication: "Pour la Terre, cela dure environ 365 jours."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle planète est surnommée 'l'étoile du Berger' ?",
      options: ["Mars", "Jupiter", "Vénus", "Saturne"],
      reponse: "Vénus",
      explication: "C'est l'astre le plus brillant dans le ciel après le Soleil et la Lune."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il y a une ceinture d'astéroïdes entre Mars et Jupiter.",
      reponse: "Vrai",
      explication: "Elle contient des milliers de petits corps rocheux."
    }
  ]
};
