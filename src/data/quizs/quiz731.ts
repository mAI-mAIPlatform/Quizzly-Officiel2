import { Quiz } from "@/types/quiz";

export const quiz731: Quiz = {
  id: "731",
  titre: "SVT : Les Besoins des Plantes 🌱",
  description: "Découvrir de quoi les végétaux ont besoin pour grandir et se développer.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel élément est indispensable à une plante pour faire de la photosynthèse ?",
      options: ["L'obscurité", "La lumière", "Le vent", "Le bruit"],
      reponse: "La lumière",
      explication: "Elle capte l'énergie lumineuse grâce à la chlorophylle."
    },
    {
      id: "2",
      type: "qcm",
      question: "Par où une plante puise-t-elle principalement l'eau ?",
      options: ["Par ses feuilles", "Par ses fleurs", "Par ses racines", "Par ses graines"],
      reponse: "Par ses racines",
      explication: "Les poils absorbants des racines captent l'eau du sol."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Une plante peut vivre éternellement sans sels minéraux.",
      reponse: "Faux",
      explication: "Les sels minéraux sont comme des vitamines pour elle."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel gaz les feuilles absorbent-elles le jour pour fabriquer leur matière ?",
      reponse: "Dioxyde de carbone",
      explication: "Ou CO2. C'est l'un des ingrédients de la photosynthèse."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle le pigment vert des plantes ?",
      options: ["La mélanine", "La chlorophylle", "L'hémoglobine", "La sève"],
      reponse: "La chlorophylle",
      explication: "C'est elle qui donne la couleur verte aux feuilles."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Certaines plantes peuvent se nourrir d'insectes (plantes carnivores).",
      reponse: "Vrai",
      explication: "Elles le font pour compenser le manque d'azote dans les sols pauvres."
    },
    {
      id: "7",
      type: "qcm",
      question: "Le liquide qui circule dans la plante s'appelle...",
      options: ["Le sang", "L'eau pure", "La sève", "L'huile"],
      reponse: "La sève",
      explication: "Il existe la sève brute et la sève élaborée."
    },
    {
      id: "8",
      type: "courte",
      question: "Quelle est la partie de la plante qui porte les feuilles et les fleurs ?",
      reponse: "Tige",
      explication: "Elle sert de support et conduit la sève."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que devient la fleur après la fécondation ?",
      options: ["Un caillou", "Une racine", "Un fruit", "Une feuille"],
      reponse: "Un fruit",
      explication: "Le fruit contient les graines pour la future génération."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Une plante rejette de l'oxygène (O2) pendant la journée.",
      reponse: "Vrai",
      explication: "C'est un produit de la photosynthèse, vital pour nous."
    }
  ]
};
