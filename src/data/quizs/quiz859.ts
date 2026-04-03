import { Quiz } from "@/types/quiz";

export const quiz859: Quiz = {
  id: "859",
  titre: "Espace : La Station Spatiale Internationale (ISS) 🛰️🌍",
  description: "Découvrez la vie des astronautes dans ce laboratoire géant qui tourne autour de la Terre.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que l'ISS ?",
      options: ["Un télescope spatial", "Une station de recherche habitée en orbite", "Une base sur la Lune", "Un nouveau type de fusée"],
      reponse: "Une station de recherche habitée en orbite",
      explication: "Des astronautes du monde entier y travaillent en permanence."
    },
    {
      id: "2",
      type: "qcm",
      question: "À quelle vitesse environ l'ISS tourne-t-elle autour de la Terre ?",
      options: ["100 km/h", "3 000 km/h", "28 000 km/h", "300 000 km/h"],
      reponse: "28 000 km/h",
      explication: "Elle fait le tour de la Terre en seulement 90 minutes !"
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les astronautes dans l'ISS flottent parce qu'ils sont en impesanteur.",
      reponse: "Vrai",
      explication: "Ils sont en chute libre permanente autour de la Terre."
    },
    {
      id: "4",
      type: "courte",
      question: "Combien de levers de soleil les astronautes voient-ils chaque jour (24h) dans l'ISS ?",
      reponse: "16",
      explication: "Comme ils font le tour de la Terre toutes les 1h30."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment l'ISS fabrique-t-elle son électricité ?",
      options: ["Avec du pétrole", "Avec des panneaux solaires géants", "Grâce au vent spatial", "Avec des piles rechargeables"],
      reponse: "Avec des panneaux solaires géants",
      explication: "Ils forment de grandes 'ailes' dorées sur la station."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'eau que boivent les astronautes est en grande partie recyclée (même leur urine !).",
      reponse: "Vrai",
      explication: "Dans l'espace, rien ne se perd, tout se transforme. L'eau est trop lourde pour être apportée tout le temps."
    },
    {
      id: "7",
      type: "qcm",
      question: "À quelle altitude environ se trouve l'ISS ?",
      options: ["10 km", "100 km", "400 km", "36 000 km"],
      reponse: "400 km",
      explication: "C'est l'orbite terrestre basse."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le moment où un astronaute sort de la station dans le vide de l'espace ?",
      reponse: "Sortie extravéhiculaire",
      explication: "Ou 'EVA' en anglais. Ils portent alors une combinaison spatiale."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel sport les astronautes doivent-ils pratiquer 2 heures par jour pour rester en forme ?",
      options: ["La natation", "Le sport en salle (vélo, tapis de course)", "Le football", "Le tennis"],
      reponse: "Le sport en salle (vélo, tapis de course)",
      explication: "C'est crucial pour ne pas perdre leurs muscles et leurs os à cause de l'impesanteur."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'ISS est visible à l'œil nu depuis la Terre le soir ou le matin.",
      reponse: "Vrai",
      explication: "Elle ressemble à une étoile très brillante qui avance très vite et ne clignote pas."
    }
  ]
};
