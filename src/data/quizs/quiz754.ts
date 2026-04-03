import { Quiz } from "@/types/quiz";

export const quiz754: Quiz = {
  id: "754",
  titre: "Musique : Le Solfège 🎼",
  description: "Apprendre à lire les notes et comprendre le rythme.",
  theme: "Musique",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de lignes comporte une portée musicale ?",
      options: ["3", "4", "5", "6"],
      reponse: "5",
      explication: "5 lignes et 4 interlignes."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la note située juste après le 'La' dans la gamme montante ?",
      options: ["Sol", "Si", "Do", "Fa"],
      reponse: "Si",
      explication: "Do, Ré, Mi, Fa, Sol, La, Si."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La 'Clé de Sol' indique les notes graves.",
      reponse: "Faux",
      explication: "La Clé de Sol est pour les notes aiguës, la Clé de Fa pour les graves."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le signe qui prolonge une note de la moitié de sa valeur ?",
      reponse: "Point",
      explication: "Une blanche pointée vaut 3 temps (2 + 1)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Combien de temps dure une Blanche ?",
      options: ["1", "2", "3", "4"],
      reponse: "2",
      explication: "La ronde vaut 4, la blanche 2, la noire 1."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le 'Soupir' est un signe de silence qui dure 1 temps.",
      reponse: "Vrai",
      explication: "C'est l'équivalent de la noire mais en silence."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que fait un 'Dièse' (#) à une note ?",
      options: ["Il la baisse d'un demi-ton", "Il l'augmente d'un demi-ton", "Il l'arrête", "Il la double"],
      reponse: "Il l'augmente d'un demi-ton",
      explication: "Le bémol (b) la baisse."
    },
    {
      id: "8",
      type: "courte",
      question: "Quelle note se trouve sur la deuxième ligne de la portée en Clé de Sol ?",
      reponse: "Sol",
      explication: "C'est pour ça qu'elle s'appelle 'Clé de Sol' !"
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle l'appareil qui donne le tempo ?",
      options: ["Un chronomètre", "Un métronome", "Un diapason", "Un piano"],
      reponse: "Un métronome",
      explication: "Tic-tac-tic-tac !"
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Un 'Accord' est une suite de plusieurs notes jouées en même temps.",
      reponse: "Vrai",
      explication: "Minimum 3 notes en général."
    }
  ]
};
