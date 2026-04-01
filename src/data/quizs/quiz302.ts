import { Quiz } from "@/types/quiz";

export const quiz302: Quiz = {
  id: "302",
  titre: "Astronomie : Le Système Solaire 🪐",
  description: "Explorez les planètes et les mystères de notre voisinage cosmique.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la plus grande planète du système solaire ?",
      options: ["Saturne", "Jupiter", "Neptune", "La Terre"],
      reponse: "Jupiter",
      explication: "Jupiter est si grande qu'elle pourrait contenir 1 300 fois la Terre."
    },
    {
      id: "2",
      type: "qcm",
      question: "Laquelle de ces planètes possède des anneaux très visibles ?",
      options: ["Mars", "Saturne", "Vénus", "Mercure"],
      reponse: "Saturne",
      explication: "Ses anneaux sont composés de glace et de poussière."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle planète est surnommée la 'Planète Rouge' ?",
      options: ["Mars", "Jupiter", "Mercure", "Uranus"],
      reponse: "Mars",
      explication: "Sa couleur provient de l'oxyde de fer (rouille) à sa surface."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est la planète la plus proche du Soleil ?",
      options: ["Vénus", "Mercure", "La Terre", "Mars"],
      reponse: "Mercure",
      explication: "C'est la plus petite planète et celle qui orbite le plus vite."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle planète est la plus chaude, malgré le fait qu'elle ne soit pas la plus proche du Soleil ?",
      options: ["Mercure", "Vénus", "Mars", "Jupiter"],
      reponse: "Vénus",
      explication: "Son atmosphère épaisse piège la chaleur (effet de serre massif)."
    },
    {
      id: "6",
      type: "qcm",
      question: "De quoi est principalement composé le Soleil ?",
      options: ["Oxygène", "Azote", "Hydrogène et Hélium", "Fer"],
      reponse: "Hydrogène et Hélium",
      explication: "C'est une sphère de gaz en fusion nucléaire constante."
    },
    {
      id: "7",
      type: "qcm",
      question: "Combien de lunes possède la Terre ?",
      options: ["0", "1", "2", "3"],
      reponse: "1",
      explication: "La Lune est notre seul satellite naturel."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle planète a été déclassée en 'planète naine' en 2006 ?",
      options: ["Neptune", "Pluton", "Uranus", "Cérès"],
      reponse: "Pluton",
      explication: "Elle est trop petite pour être considérée comme une planète majeure."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on la galaxie dans laquelle nous vivons ?",
      options: ["Andromède", "La Voie Lactée", "Sombrero", "Le Nuage de Magellan"],
      reponse: "La Voie Lactée",
      explication: "C'est une galaxie spirale contenant des milliards d'étoiles."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle planète tourne 'sur le côté' (axe incliné à 98°) ?",
      options: ["Saturne", "Jupiter", "Uranus", "Neptune"],
      reponse: "Uranus",
      explication: "On pense qu'une collision géante a basculé son axe."
    }
  ]
};
