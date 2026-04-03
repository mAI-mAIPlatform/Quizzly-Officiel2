import { Quiz } from "@/types/quiz";

export const quiz809: Quiz = {
  id: "809",
  titre: "Corps Humain : Le Sang 🩸",
  description: "Plongez au cœur du liquide précieux qui irrigue votre corps.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le liquide jaunâtre dans lequel baignent les cellules du sang ?",
      options: ["L'urine", "Le plasma", "La lymphe", "L'eau"],
      reponse: "Le plasma",
      explication: "Il transporte les nutriments, les hormones et les déchets."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le rôle des globules blancs ?",
      options: ["Transporter l'oxygène", "Défendre l'organisme contre les infections (microbes)", "Arrêter les saignements", "Donner la couleur rouge"],
      reponse: "Défendre l'organisme contre les infections (microbes)",
      explication: "Ce sont les soldats de ton système immunitaire."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les globules rouges ont la forme d'un petit disque creusé au centre.",
      reponse: "Vrai",
      explication: "Cela leur donne une grande surface pour fixer l'oxygène."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on la protéine qui donne sa couleur rouge au sang ?",
      reponse: "Hémoglobine",
      explication: "Elle contient du fer."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces groupes n'est PAS un groupe sanguin ?",
      options: ["A", "B", "Z", "O"],
      reponse: "Z",
      explication: "Les groupes principaux sont A, B, AB et O (positif ou négatif)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le sang d'une araignée est souvent bleu.",
      reponse: "Vrai",
      explication: "Car il contient du cuivre au lieu du fer."
    },
    {
      id: "7",
      type: "qcm",
      question: "Où sont fabriquées les cellules du sang ?",
      options: ["Dans le cœur", "Dans la moelle osseuse (à l'intérieur des os)", "Dans le foie", "Dans les poumons"],
      reponse: "Dans la moelle osseuse (à l'intérieur des os)",
      explication: "C'est une véritable usine à cellules."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'action de donner un peu de son sang pour sauver des vies ?",
      reponse: "Don du sang",
      explication: "C'est un geste généreux et très important."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel organe filtre le sang pour éliminer les déchets liquides et fabriquer l'urine ?",
      options: ["L'estomac", "Le pancréas", "Les reins", "La vésicule"],
      reponse: "Les reins",
      explication: "Nous en avons normalement deux."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Un adulte a environ 10 litres de sang dans le corps.",
      reponse: "Faux",
      explication: "Un adulte a environ 5 litres de sang."
    }
  ]
};
