import { Quiz } from "@/types/quiz";

export const quiz942: Quiz = {
  id: "942",
  titre: "Espace : Les Galaxies 🌌🌑",
  description: "Voyagez à l'échelle des immenses cités d'étoiles de l'univers.",
  theme: "Sciences",
  difficulte: "Mojen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle la galaxie dans laquelle nous vivons ?",
      options: ["La Galaxie d'Andromède", "La Voie Lactée", "La Galaxie du Sombrero", "Le Nuage de Magellan"],
      reponse: "La Voie Lactée",
      explication: "Elle ressemble à un grand disque spirale vu de profil."
    },
    {
      id: "2",
      type: "qcm",
      question: "Environ combien d'étoiles compte notre galaxie ?",
      options: ["1 million", "100 millions", "200 à 400 milliards", "On ne peut pas compter"],
      reponse: "200 à 400 milliards",
      explication: "C'est un nombre gigantesque !"
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Il n'existe qu'une seule galaxie dans tout l'univers.",
      reponse: "Faux",
      explication: "Il y a des centaines de milliards de galaxies dans l'univers observable."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la galaxie spirale la plus proche de la nôtre (visible à l'œil nu dans de bonnes conditions) ?",
      reponse: "Andromède",
      explication: "Elle se rapproche de nous et les deux galaxies finiront par fusionner dans 4 milliards d'années."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle forme a la plupart des grandes galaxies, comme la nôtre ?",
      options: ["Carrée", "Spirale", "Triangulaire", "Pointue"],
      reponse: "Spirale",
      explication: "Elles ont des bras qui tournent autour d'un centre brillant."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Au centre de presque chaque grande galaxie se cache un trou noir supermassif.",
      reponse: "Vrai",
      explication: "Le nôtre s'appelle 'Sagittarius A*'."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie le nom 'Voie Lactée' ?",
      options: ["Le chemin des vaches", "Le chemin de lait", "La route étoilée", "Le fleuve blanc"],
      reponse: "Le chemin de lait",
      explication: "Les anciens l'appelaient ainsi car elle ressemble à une traînée blanche laiteuse dans le ciel nocturne."
    },
    {
      id: "8",
      type: "courte",
      question: "Quelle unité de distance utilise-t-on pour mesurer l'espace entre les galaxies ?",
      reponse: "Année-lumière",
      explication: "C'est la distance parcourue par la lumière en un an (environ 9 500 milliards de km)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces objets est en réalité une galaxie très lointaine et très brillante ?",
      options: ["Un quasar", "Une planète", "Une comète", "Un satellite"],
      reponse: "Un quasar",
      explication: "Ce sont les objets les plus lumineux et les plus énergétiques de l'univers."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'univers n'a pas de centre et toutes les galaxies s'éloignent les unes des autres.",
      reponse: "Vrai",
      explication: "C'est ce qu'on appelle l'expansion de l'univers."
    }
  ]
};
