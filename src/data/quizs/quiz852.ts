import { Quiz } from "@/types/quiz";

export const quiz852: Quiz = {
  id: "852",
  titre: "Espace : Le Soleil, notre étoile ☀️🔥",
  description: "Découvrez les secrets du moteur de notre système solaire.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "De quoi est principalement composé le Soleil ?",
      options: ["De lave en fusion", "De gaz (Hydrogène et Hélium)", "De fer solide", "De bois"],
      reponse: "De gaz (Hydrogène et Hélium)",
      explication: "C'est une sphère de gaz brûlant maintenue par la gravité."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est environ la température à la surface du Soleil ?",
      options: ["100 °C", "1 000 °C", "5 500 °C", "1 million de °C"],
      reponse: "5 500 °C",
      explication: "Et au centre, elle monte jusqu'à 15 millions de degrés !"
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La lumière du Soleil met environ 8 minutes pour arriver sur Terre.",
      reponse: "Vrai",
      explication: "Le Soleil est situé à 150 millions de kilomètres de nous."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le phénomène où la Lune passe devant le Soleil, cachant sa lumière ?",
      reponse: "Éclipse",
      explication: "Une éclipse totale de soleil est un spectacle rare."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on les zones un peu moins chaudes et sombres que l'on voit parfois sur le Soleil ?",
      options: ["Des trous noirs supplémentaires", "Des taches solaires", "Des cratères", "Des nuages solaires"],
      reponse: "Des taches solaires",
      explication: "Leur nombre change selon un cycle d'environ 11 ans."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le Soleil tourne sur lui-même.",
      reponse: "Vrai",
      explication: "Il fait un tour complet en 25 à 30 jours environ."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que produit le Soleil grâce à la 'fusion nucléaire' dans son cœur ?",
      options: ["Du vent", "De l'énergie (lumière et chaleur)", "De l'eau", "De l'oxygène"],
      reponse: "De l'énergie (lumière et chaleur)",
      explication: "Il transforme l'hydrogène en hélium."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le flux de particules projetées par le Soleil dans tout le système solaire ? Le ...",
      reponse: "Vent solaire",
      explication: "C'est ce qui crée notamment les aurores boréales sur Terre."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel pourcentage de la masse totale du système solaire le Soleil représente-t-il ?",
      options: ["10 %", "50 %", "99 %", "100 %"],
      reponse: "99 %",
      explication: "Il est gigantesque. Toutes les planètes réunies ne sont rien à côté de lui."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le Soleil s'éteindra un jour.",
      reponse: "Vrai",
      explication: "Dans environ 5 milliards d'années, il aura épuisé tout son carburant."
    }
  ]
};
