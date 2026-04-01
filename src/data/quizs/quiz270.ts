import { Quiz } from "@/types/quiz";

export const quiz270: Quiz = {
  id: "270",
  titre: "Phénomènes Météo 🌪️⛈️",
  description: "Testez votre connaissance sur les caprices du ciel : orages, tornades et ouragans.",
  theme: "Culture Générale",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le bruit provoqué par l'éclair lors d'un orage ?",
      options: ["Le Vent", "Le Tonnerre", "Le Grésil", "Le Bang"],
      reponse: "Le Tonnerre",
      explication: "La chaleur de l'éclair fait exploser l'air, créant une onde de choc sonore."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces phénomènes est un tourbillon d'air très violent touchant le sol ?",
      options: ["Un Ouragan", "Une Tornade", "Un Cyclone", "Une Mousson"],
      reponse: "Une Tornade",
      explication: "Les tornades sont très localisées mais leurs vents peuvent dépasser 400 km/h."
    },
    {
      id: "3",
      type: "qcm",
      question: "Où se forment les ouragans (ou cyclones tropicaux) ?",
      options: ["Au-dessus des montagnes", "Au-dessus des eaux chaudes des océans tropicaux", "Au Pôle Nord", "Dans les déserts"],
      reponse: "Au-dessus des eaux chaudes des océans tropicaux",
      explication: "L'évaporation de l'eau chaude fournit l'énergie nécessaire à la tempête."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on la zone de calme plat au centre d'un ouragan ?",
      options: ["Le Cœur", "L'Œil", "Le Noyau", "Le Vide"],
      reponse: "L'Œil",
      explication: "Dans l'œil, le vent tombe et le ciel peut même devenir bleu."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel instrument mesure la pression de l'air pour prédire le temps ?",
      options: ["Le Thermomètre", "Le Baromètre", "L'Anémomètre", "L'Hygromètre"],
      reponse: "Le Baromètre",
      explication: "Une chute de pression annonce souvent l'arrivée du mauvais temps."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce que le grésil ?",
      options: ["Un vent chaud", "De petites billes de glace (mélange pluie/neige)", "Une brume épaisse", "Un arc-en-ciel"],
      reponse: "De petites billes de glace (mélange pluie/neige)",
      explication: "Il se forme quand la pluie gèle en traversant une couche d'air froid."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la vitesse du son (environ) qui permet de calculer la distance d'un orage ?",
      options: ["3 000 km/s", "340 mètres par seconde", "Au-delà de la lumière", "10 km/h"],
      reponse: "340 mètres par seconde",
      explication: "Comptez les secondes entre l'éclair et le tonnerre et divisez par 3 pour avoir la distance en km."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on la branche de la science qui étudie le temps et l'atmosphère ?",
      options: ["L'Astronomie", "La Météorologie", "La Géologie", "L'Hydrologie"],
      reponse: "La Météorologie",
      explication: "Les météorologues utilisent des satellites et des superordinateurs pour les prévisions."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel nuage immense en forme d'enclume est le nuage typique de l'orage ?",
      options: ["Le Stratus", "Le Cumulonimbus", "Le Cirrus", "L'Altocumulus"],
      reponse: "Le Cumulonimbus",
      explication: "Il peut monter jusqu'à 15 km d'altitude."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le surnom d'un arc-en-ciel qui se forme la nuit grâce à la lumière de la lune ?",
      options: ["Un Arc lunaire (Moonbow)", "Un Spectre noir", "Une Aurore", "Un Halo"],
      reponse: "Un Arc lunaire (Moonbow)",
      explication: "Ils sont plus rares et leurs couleurs sont souvent perçues comme blanches par l'œil humain."
    }
  ]
};
