import { Quiz } from "@/types/quiz";

export const quiz770: Quiz = {
  id: "770",
  titre: "Santé : Le Soleil et ta Peau ☀️",
  description: "Profiter du soleil en toute sécurité en connaissant les bons gestes.",
  theme: "Santé",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quels sont les rayons invisibles du soleil qui peuvent brûler la peau ?",
      options: ["Les rayons Gamma", "Les rayons UV (Ultraviolets)", "Les rayons X", "Les lasers"],
      reponse: "Les rayons UV (Ultraviolets)",
      explication: "Les UVA et les UVB sont responsables du bronzage mais aussi des brûlures."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle la brûlure de la peau causée par le soleil ?",
      options: ["Un coup de foudre", "Un coup de soleil", "Une insolation", "Un bronzage intense"],
      reponse: "Un coup de soleil",
      explication: "C'est une véritable brûlure de la peau."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Il faut remettre de la crème solaire toutes les deux heures environ.",
      reponse: "Vrai",
      explication: "La protection s'estompe avec le temps, la transpiration et les baignades."
    },
    {
      id: "4",
      type: "courte",
      question: "Entre quelles heures est-il déconseillé de s'exposer au soleil ?",
      reponse: "12h et 16h",
      explication: "C'est à ce moment que les rayons sont les plus verticaux et les plus dangereux."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel est le meilleur vêtement pour se protéger du soleil à la plage ?",
      options: ["Un bikini", "Un short", "Un T-shirt (anti-UV)", "Rien du tout"],
      reponse: "Un T-shirt (anti-UV)",
      explication: "Le tissu est le meilleur rempart contre les UV."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Une insolation peut donner des maux de tête et de la fièvre.",
      reponse: "Vrai",
      explication: "C'est une surchauffe du corps due à une exposition trop longue."
    },
    {
      id: "7",
      type: "qcm",
      question: "Le soleil permet au corps de fabriquer une vitamine importante. Laquelle ?",
      options: ["Vitamine A", "Vitamine C", "Vitamine D", "Vitamine K"],
      reponse: "Vitamine D",
      explication: "Elle est nécessaire pour fixer le calcium sur les os."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel pigment coloré de la peau nous protège naturellement (un peu) du soleil ?",
      reponse: "Mélanine",
      explication: "C'est ce qui nous fait bronzer."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que faut-il porter sur la tête pour se protéger ?",
      options: ["Un chapeau ou une casquette", "Un casque de vélo", "Des boucles d'oreilles", "Un bandeau"],
      reponse: "Un chapeau ou une casquette",
      explication: "Pour protéger le cuir chevelu et éviter les insolations."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On peut bronzer même sous un nuage ou sous un parasol.",
      reponse: "Vrai",
      explication: "Les UV passent à travers certains nuages et se reflètent sur le sable (réverbération)."
    }
  ]
};
