import { Quiz } from "@/types/quiz";

export const quiz891: Quiz = {
  id: "891",
  titre: "France : Les Fleuves 🌊🚣",
  description: "Découvrez les grands cours d'eau qui traversent nos paysages.",
  theme: "Géographie",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le plus long fleuve qui coule entièrement en France ?",
      options: ["La Seine", "La Loire", "Le Rhône", "La Garonne"],
      reponse: "La Loire",
      explication: "Elle mesure environ 1 000 kilomètres de long."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel fleuve traverse la ville de Paris ?",
      options: ["La Loire", "La Seine", "Le Rhin", "Le Rhône"],
      reponse: "La Seine",
      explication: "Elle se jette dans la Manche au Havre."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le Rhône se jette dans la mer Méditerranée.",
      reponse: "Vrai",
      explication: "Il forme un grand delta appelé la Camargue."
    },
    {
      id: "4",
      type: "courte",
      question: "Dans quelle ville le fleuve Garonne prend-il une forme très large appelée la Gironde ?",
      reponse: "Bordeaux",
      explication: "L'estuaire de la Gironde est le plus grand d'Europe."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel fleuve sert de frontière naturelle entre la France et l'Allemagne ?",
      options: ["La Meuse", "Le Rhin", "La Moselle", "L'Escaut"],
      reponse: "Le Rhin",
      explication: "C'est l'une des voies navigables les plus fréquentées au monde."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La Seine prend sa source près de Dijon, en Bourgogne.",
      reponse: "Vrai",
      explication: "Sa source est située sur le plateau de Langres."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on l'endroit où un fleuve se jette dans la mer ?",
      options: ["La source", "L'embouchure", "Le confluent", "Le méandre"],
      reponse: "L'embouchure",
      explication: "Cela peut être un estuaire ou un delta."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle un petit cours d'eau qui se jette dans un plus grand ?",
      reponse: "Affluent",
      explication: "Par exemple, la Marne est un affluent de la Seine."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces fleuves est connu pour ses magnifiques châteaux ?",
      options: ["Le Rhône", "La Loire", "La Garonne", "Le Rhin"],
      reponse: "La Loire",
      explication: "Les châteaux de la Loire sont mondialement célèbres."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le Rhône prend sa source dans un glacier en Suisse.",
      reponse: "Vrai",
      explication: "C'est un fleuve puissant alimenté par la fonte des neiges des Alpes."
    }
  ]
};
