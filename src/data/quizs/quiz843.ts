import { Quiz } from "@/types/quiz";

export const quiz843: Quiz = {
  id: "843",
  titre: "Inventions : L'Électricité 💡⚡",
  description: "Testez vos connaissances sur l'énergie qui illumine notre monde moderne.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui a inventé l'ampoule électrique à incandescence pratique en 1879 ?",
      options: ["Nikola Tesla", "Thomas Edison", "Benjamin Franklin", "Alexander Graham Bell"],
      reponse: "Thomas Edison",
      explication: "Il a réussi à trouver un filament capable de briller pendant des centaines d'heures."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel inventeur d'origine serbe est célèbre pour ses travaux sur le 'courant alternatif' ?",
      options: ["Guglielmo Marconi", "Nikola Tesla", "James Maxwell", "Michael Faraday"],
      reponse: "Nikola Tesla",
      explication: "Sa technologie est celle que nous utilisons aujourd'hui pour transporter l'électricité dans nos maisons."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Benjamin Franklin a prouvé que la foudre était de l'électricité en utilisant un cerf-volant.",
      reponse: "Vrai",
      explication: "Une expérience très célèbre (et dangereuse) réalisée en 1752."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'appareil qui permet de stocker de l'électricité de manière chimique ?",
      reponse: "Pile",
      explication: "Inventée par l'Italien Alessandro Volta en 1800."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces matériaux laisse passer l'électricité (conducteur) ?",
      options: ["Le plastique", "Le caoutchouc", "Le cuivre (métal)", "Le bois sec"],
      reponse: "Le cuivre (métal)",
      explication: "C'est pour cela que les fils électriques sont en cuivre."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le 'courant continu' est celui qui sort d'une pile ou d'une batterie.",
      reponse: "Vrai",
      explication: "Il coule toujours dans le même sens."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel savant a donné son nom à l'unité de mesure de la tension électrique ?",
      options: ["Ampère", "Volt", "Watt", "Ohm"],
      reponse: "Volt",
      explication: "En hommage à Alessandro Volta."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'unité de mesure du courant électrique (le débit d'électricité) ?",
      reponse: "Ampère",
      explication: "En hommage au Français André-Marie Ampère."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'un alternateur ?",
      options: ["Un interrupteur", "Une machine qui transforme un mouvement circulaire en électricité", "Un type d'ampoule de couleur", "Une pile géante"],
      reponse: "Une machine qui transforme un mouvement circulaire en électricité",
      explication: "C'est le cœur des centrales électriques et des barrages."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le corps humain est un mauvais conducteur d'électricité.",
      reponse: "Faux",
      explication: "Le corps humain contient beaucoup d'eau et de sels, il conduit bien l'électricité, c'est pourquoi il faut faire très attention à l'électrocution."
    }
  ]
};
