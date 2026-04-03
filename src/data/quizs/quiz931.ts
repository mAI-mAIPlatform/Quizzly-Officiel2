import { Quiz } from "@/types/quiz";

export const quiz931: Quiz = {
  id: "931",
  titre: "Sciences : L'Électricité ⚡🔋",
  description: "Découvrez l'énergie qui éclaire nos vies et fait fonctionner nos appareils.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle le flux de minuscules particules (électrons) qui crée l'électricité ?",
      options: ["Le courant électrique", "Le vent électrique", "La pluie électrique", "Le feu électrique"],
      reponse: "Le courant électrique",
      explication: "Il circule dans des fils conducteurs."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel objet permet de couper ou d'allumer le courant dans une pièce ?",
      options: ["Une prise", "Un interrupteur", "Une ampoule", "Une pile"],
      reponse: "Un interrupteur",
      explication: "Il ouvre ou ferme le circuit électrique."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'eau conduit très bien l'électricité, c'est pour ça qu'il est dangereux d'utiliser un appareil électrique près du bain.",
      reponse: "Vrai",
      explication: "L'eau (surtout si elle contient des minéraux) laisse passer le courant, ce qui peut causer une électrocution."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le métal très utilisé pour fabriquer les fils électriques car il conduit très bien l'électricité ?",
      reponse: "Cuivre",
      explication: "C'est un excellent conducteur bon marché."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces objets fabrique sa propre électricité grâce au soleil ?",
      options: ["Un moulin à vent", "Un panneau solaire (photovoltaïque)", "Une pile", "Un moteur"],
      reponse: "Un panneau solaire (photovoltaïque)",
      explication: "Il transforme la lumière du soleil directement en courant électrique."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le plastique est un isolant (il ne laisse pas passer l'électricité).",
      reponse: "Vrai",
      explication: "C'est pour cela que les fils électriques sont entourés de plastique."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel phénomène naturel produit une immense décharge électrique dans le ciel ?",
      options: ["La pluie", "L'arc-en-ciel", "La foudre (pendant un orage)", "Le soleil"],
      reponse: "La foudre (pendant un orage)",
      explication: "C'est une étincelle géante entre les nuages et le sol."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le petit boîtier qui stocke de l'énergie chimique pour faire fonctionner une télécommande ou une lampe de poche ?",
      reponse: "Pile",
      explication: "Ou batterie si elle est rechargeable."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qui a inventé l'ampoule électrique à incandescence (la première lumière électrique pratique) ?",
      options: ["Albert Einstein", "Thomas Edison", "Isaac Newton", "Marie Curie"],
      reponse: "Thomas Edison",
      explication: "Il a réussi à faire briller un filament de carbone dans un globe en verre."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On peut produire de l'électricité avec du vent grâce à des éoliennes.",
      reponse: "Vrai",
      explication: "C'est une énergie renouvelable et propre."
    }
  ]
};
