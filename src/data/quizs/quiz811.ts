import { Quiz } from "@/types/quiz";

export const quiz811: Quiz = {
  id: "811",
  titre: "Écologie : Le Cycle de l'Eau 💧",
  description: "Découvrez le voyage infini de l'eau sur notre planète.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle l'étape où l'eau liquide remonte dans le ciel sous forme de gaz ?",
      options: ["La précipitation", "L'évaporation", "La condensation", "Le ruissellement"],
      reponse: "L'évaporation",
      explication: "Le soleil chauffe l'eau des océans et des rivières."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qu'est-ce que la condensation ?",
      options: ["La vapeur d'eau qui se transforme en gouttelettes pour former des nuages", "La pluie qui tombe", "L'eau qui gèle", "Le trajet de l'eau dans le sol"],
      reponse: "La vapeur d'eau qui se transforme en gouttelettes pour former des nuages",
      explication: "L'air refroidit en montant, ce qui crée les nuages."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La pluie, la neige et la grêle sont des 'précipitations'.",
      reponse: "Vrai",
      explication: "C'est l'eau qui retombe sur la Terre."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on l'eau qui s'écoule à la surface du sol vers les rivières ?",
      reponse: "Ruissellement",
      explication: "Elle finit par rejoindre les fleuves puis la mer."
    },
    {
      id: "5",
      type: "qcm",
      question: "Où se trouve la plus grosse réserve d'eau sur Terre ?",
      options: ["Dans les nuages", "Dans les rivières", "Dans les océans", "Dans les piscines"],
      reponse: "Dans les océans",
      explication: "97% de l'eau terrestre est salée."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'eau que nous buvons aujourd'hui est la même que celle que buvaient les dinosaures.",
      reponse: "Vrai",
      explication: "La quantité d'eau sur Terre reste toujours la même, elle se recycle sans cesse."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on l'infiltration de l'eau dans les profondeurs du sol ?",
      options: ["La transpiration", "La percolation", "La fusion", "La condensation"],
      reponse: "La percolation",
      explication: "L'eau remplit alors les nappes phréatiques (réserves souterraines)."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel phénomène naturel 'pompe' de l'eau du sol vers l'atmosphère via les feuilles des arbres ?",
      reponse: "Évapotranspiration",
      explication: "C'est la respiration des plantes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel état de l'eau correspond aux glaciers et à la neige ?",
      options: ["Liquide", "Gazeux", "Solide", "Plasma"],
      reponse: "Solide",
      explication: "L'eau gèle en dessous de 0°C."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les nuages sont faits uniquement de vapeur d'eau invisible.",
      reponse: "Faux",
      explication: "Ils sont faits de minuscules gouttelettes d'eau liquide ou de cristaux de glace, c'est pour ça qu'on les voit."
    }
  ]
};
