import { Quiz } from "@/types/quiz";

export const quiz853: Quiz = {
  id: "853",
  titre: "Espace : La Lune 🌙🌑",
  description: "Apprenez-en plus sur notre satellite naturel qui éclaire nos nuits.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "La Lune produit-elle sa propre lumière ?",
      options: ["Oui, comme le Soleil", "Non, elle reflète la lumière du Soleil", "Seulement quand il fait nuit", "Uniquement lors des éclipses"],
      reponse: "Non, elle reflète la lumière du Soleil",
      explication: "C'est comme un grand miroir dans l'espace."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on la phase où l'on voit la Lune comme un cercle tout entier ?",
      options: ["Nouvelle Lune", "Premier quartier", "Pleine Lune", "Lune rousse"],
      reponse: "Pleine Lune",
      explication: "La Terre se trouve alors entre le Soleil et la Lune."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "On voit toujours la même face de la Lune depuis la Terre.",
      reponse: "Vrai",
      explication: "Car la Lune tourne sur elle-même en autant de temps qu'elle tourne autour de la Terre."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appellent les grands trous à la surface de la Lune ?",
      reponse: "Cratères",
      explication: "Ils ont été formés par l'impact de météorites."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel phénomène terrestre est provoqué par l'attraction de la Lune ?",
      options: ["Le vent", "Les marées", "La pluie", "Les séismes"],
      reponse: "Les marées",
      explication: "La mer monte et descend car elle est attirée par la Lune."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Il y a du vent sur la Lune.",
      reponse: "Faux",
      explication: "La Lune n'a pas d'atmosphère, donc pas d'air ni de vent."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appellent les zones sombres et plates de la Lune ?",
      options: ["Des océans", "Des continents", "Des mers", "Des forêts"],
      reponse: "Des mers",
      explication: "Les anciens croyaient que c'étaient des mers d'eau, mais ce sont des plaines de lave refroidie."
    },
    {
      id: "8",
      type: "courte",
      question: "En quelle année le premier homme a-t-il marché sur la Lune ?",
      reponse: "1969",
      explication: "C'était Neil Armstrong lors de la mission Apollo 11."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la taille de la Lune par rapport à la Terre ?",
      options: ["Elle est plus grande", "Elle est 4 fois plus petite", "Elle est 10 fois plus petite", "Elles font la même taille"],
      reponse: "Elle est 4 fois plus petite",
      explication: "Elle a environ le diamètre de l'Australie."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On pèse moins lourd sur la Lune que sur la Terre.",
      reponse: "Vrai",
      explication: "La gravité y est 6 fois plus faible. On peut y faire des bonds géants !"
    }
  ]
};
