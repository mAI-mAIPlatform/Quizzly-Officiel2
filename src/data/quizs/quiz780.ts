import { Quiz } from "@/types/quiz";

export const quiz780: Quiz = {
  id: "780",
  titre: "Informatique : La Robotique 🦾",
  description: "Découvrir les machines qui interagissent avec le monde physique.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un robot ?",
      options: ["Un humain déguisé", "Une machine capable d'agir automatiquement", "Une simple application sur smartphone", "Un jouet sans pile"],
      reponse: "Une machine capable d'agir automatiquement",
      explication: "Il combine capteurs, programme et actionneurs."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel composant d'un robot lui permet de 'voir' ou de 'sentir' des obstacles ?",
      options: ["Les roues", "Les capteurs", "La batterie", "La coque"],
      reponse: "Les capteurs",
      explication: "Comme les caméras, les ultrasons ou les lasers."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un robot de cuisine (mixeur) est considéré comme un robot intelligent.",
      reponse: "Faux",
      explication: "C'est un appareil électroménager. Il n'a pas de capteurs pour s'adapter à son environnement tout seul."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on un robot qui ressemble à un humain ?",
      reponse: "Androïde",
      explication: "Ou 'Humanoïde'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans quel domaine utilise-t-on le plus de robots aujourd'hui ?",
      options: ["Dans les boulangeries", "Dans l'industrie (usines de voitures)", "Dans les écoles", "À la piscine"],
      reponse: "Dans l'industrie (usines de voitures)",
      explication: "Ils font les tâches répétitives, lourdes ou dangereuses."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Les trois lois de la robotique ont été écrites par l'écrivain Isaac Asimov.",
      reponse: "Vrai",
      explication: "Ce sont des règles de fiction pour empêcher les robots de nuire aux humains."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel robot célèbre a exploré la planète Mars ?",
      options: ["R2-D2", "Curiosity", "Wall-E", "Optimus Prime"],
      reponse: "Curiosity",
      explication: "C'est un rover (véhicule robotisé)."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on les 'moteurs' qui permettent au robot de bouger un bras ?",
      reponse: "Actionneurs",
      explication: "Ce sont les muscles du robot."
    },
    {
      id: "9",
      type: "qcm",
      question: "De quoi un robot a-t-il besoin pour transformer les infos des capteurs en mouvements ?",
      options: ["De l'eau", "D'un programme informatique", "De vent", "D'un aimant"],
      reponse: "D'un programme informatique",
      explication: "C'est sa logique de fonctionnement."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il existe des robots capables de faire de la chirurgie.",
      reponse: "Vrai",
      explication: "Ils sont pilotés par des chirurgiens pour être extrêmement précis."
    }
  ]
};
