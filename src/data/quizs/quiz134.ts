import { Quiz } from "@/types/quiz";

export const quiz134: Quiz = {
  id: "134",
  titre: "Univers du Tennis 🎾",
  description: "Testez vos connaissances sur les tournois du Grand Chelem et les légendes du court.",
  theme: "Sport",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le nom du tournoi du Grand Chelem qui se joue sur terre battue à Paris ?",
      options: ["Wimbledon", "US Open", "Open d'Australie", "Roland-Garros"],
      reponse: "Roland-Garros",
      explication: "Roland-Garros est célèbre pour sa terre battue ocre."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien de tournois composent le 'Grand Chelem' par an ?",
      options: ["2", "3", "4", "5"],
      reponse: "4",
      explication: "Australie, Roland-Garros, Wimbledon et US Open."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel joueur est surnommé 'Le Roi de la Terre Battue' ?",
      options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Yannick Noah"],
      reponse: "Rafael Nadal",
      explication: "Rafael Nadal a remporté Roland-Garros un nombre record de 14 fois."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle le score '0' au tennis (en anglais) ?",
      options: ["Zero", "Love", "Nil", "Naught"],
      reponse: "Love",
      explication: "On dit '15-love' pour 15-0."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel tournoi du Grand Chelem impose aux joueurs de s'habiller entièrement en blanc ?",
      options: ["US Open", "Roland-Garros", "Wimbledon", "Open d'Australie"],
      reponse: "Wimbledon",
      explication: "C'est une tradition ancestrale du tournoi londonien."
    },
    {
      id: "6",
      type: "qcm",
      question: "Combien d'échanges (points) minimum faut-il pour gagner un 'jeu' (sans égalité) ?",
      options: ["3", "4", "5", "6"],
      reponse: "4",
      explication: "Les points se comptent 15, 30, 40 et jeu."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qui est le joueur ayant remporté le plus de titres du Grand Chelem chez les hommes ?",
      options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
      reponse: "Novak Djokovic",
      explication: "Djokovic détient le record absolu avec 24 titres (en 2023)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est le nom de la balle qui touche le filet lors d'un service mais retombe dans le bon carré ?",
      options: ["Net", "Let", "Fault", "Ace"],
      reponse: "Let",
      explication: "En cas de 'let', le service doit être rejoué."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel coup consiste à frapper la balle avant qu'elle ne touche le sol ?",
      options: ["Le revers", "Le lift", "La volée", "Le smash"],
      reponse: "La volée",
      explication: "La volée est souvent utilisée au filet."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on un service gagnant que l'adversaire ne parvient pas à toucher ?",
      options: ["Un Smash", "Un Ace", "Un Lob", "Une Amortie"],
      reponse: "Un Ace",
      explication: "L'ace rapporte le point directement au serveur."
    }
  ]
};
