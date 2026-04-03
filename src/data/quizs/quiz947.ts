import { Quiz } from "@/types/quiz";

export const quiz947: Quiz = {
  id: "947",
  titre: "Espace : Les Télescopes Spatiaux 🔭✨",
  description: "Découvrez les yeux géants qui scrutent l'univers depuis l'espace.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel célèbre télescope spatial a été lancé en 1990 et a révolutionné notre vision de l'univers ?",
      options: ["Galilée", "Hubble", "James Webb", "Newton"],
      reponse: "Hubble",
      explication: "Il a pris des milliers de photos incroyables de galaxies et de nébuleuses."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le nom du nouveau télescope spatial ultra-puissant lancé fin 2021 ?",
      options: ["James Webb (JWST)", "Ariane 5", "Thomas Pesquet", "Albert Einstein"],
      reponse: "James Webb (JWST)",
      explication: "Il permet de voir les toutes premières étoiles formées après le Big Bang."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Mettre un télescope dans l'espace permet d'éviter le flou causé par l'atmosphère terrestre.",
      reponse: "Vrai",
      explication: "Dans l'espace, l'image est parfaitement nette car il n'y a pas d'air pour déformer la lumière."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la pièce principale d'un télescope qui capte la lumière (souvent recouverte d'or pour James Webb) ?",
      reponse: "Miroir",
      explication: "Plus le miroir est grand, plus le télescope peut voir loin d'objets peu brillants."
    },
    {
      id: "5",
      type: "qcm",
      question: "James Webb observe principalement la lumière que nos yeux ne voient pas, appelée ...",
      options: ["Les rayons X", "L'infrarouge", "Les ultraviolets", "Les ondes radio"],
      reponse: "L'infrarouge",
      explication: "Cela lui permet de voir à travers les nuages de poussière de l'espace."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le télescope James Webb tourne autour de la Terre comme la Lune.",
      reponse: "Faux",
      explication: "Il se trouve très loin, à 1,5 million de km (au point de Lagrange L2), et tourne autour du soleil avec la Terre."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment les télescopes spatiaux nous envoient-ils leurs photos ?",
      options: ["Par la poste", "Par ondes radio (signaux numériques)", "Par un long fil", "Ils reviennent sur Terre"],
      reponse: "Par ondes radio (signaux numériques)",
      explication: "Les données sont captées par de grandes antennes sur Terre."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel objet astronomique James Webb cherche-t-il spécifiquement à analyser pour savoir s'il y a de l'eau ou de la vie ?",
      reponse: "Exoplanète",
      explication: "Ce sont des planètes qui tournent autour d'autres étoiles que le soleil."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pourquoi le miroir de James Webb est-il composé de plusieurs hexagones ?",
      options: ["Pour faire beau", "Car il était trop grand pour entrer dans la fusée et a dû être plié", "Pour mieux capter les couleurs", "C'est un cristal"],
      reponse: "Car il était trop grand pour entrer dans la fusée et a dû être plié",
      explication: "C'est un exploit technologique : il s'est déplié tout seul dans l'espace !"
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le télescope Hubble sera bientôt remplacé par une station spatiale de vacances.",
      reponse: "Faux",
      explication: "Hubble continue de fonctionner en complément de James Webb !"
    }
  ]
};
