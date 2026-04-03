import { Quiz } from "@/types/quiz";

export const quiz764: Quiz = {
  id: "764",
  titre: "Sport : Le Tennis 🎾",
  description: "Service, coup droit, revers et points... Tout sur la petite balle jaune.",
  theme: "Sport",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment compte-t-on les points dans un jeu de tennis ?",
      options: ["1, 2, 3, 4", "15, 30, 40, Jeu", "10, 20, 30, 40", "5, 10, 15, 20"],
      reponse: "15, 30, 40, Jeu",
      explication: "C'est un système de comptage unique hérité du jeu de paume."
    },
    {
      id: "2",
      type: "qcm",
      question: "Sur quelle surface se joue le tournoi de Roland-Garros ?",
      options: ["Gazon", "Dur (Béton)", "Terre battue", "Moquette"],
      reponse: "Terre battue",
      explication: "Une surface lente qui favorise les longs échanges."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: " Wimbledon est le seul tournoi du Grand Chelem qui se joue sur gazon.",
      reponse: "Vrai",
      explication: "C'est le plus ancien et le plus traditionnel des tournois."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on un service que l'adversaire ne parvient pas à toucher ?",
      reponse: "Ace",
      explication: "Le point est marqué directement sur le service."
    },
    {
      id: "5",
      type: "qcm",
      question: "Combien de sets doit gagner un homme pour remporter un match en Grand Chelem ?",
      options: ["2", "3", "4", "5"],
      reponse: "3",
      explication: "Les matchs se jouent au meilleur des 5 sets."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Roger Federer est un joueur de tennis espagnol.",
      reponse: "Faux",
      explication: "Il est suisse. Rafael Nadal est espagnol."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Break' au tennis ?",
      options: ["Une pause café", "Gagner le jeu sur le service de l'adversaire", "Casser sa raquette", "Changer de chaussures"],
      reponse: "Gagner le jeu sur le service de l'adversaire",
      explication: "C'est un avantage crucial dans un set."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le score 40-40 dans un jeu ?",
      reponse: "Égalité",
      explication: "Ou 'Deuce' en anglais."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces tournois ne fait pas partie du Grand Chelem ?",
      options: ["Open d'Australie", "US Open", "Masters de Monte-Carlo", "Wimbledon"],
      reponse: "Masters de Monte-Carlo",
      explication: "Le 4ème tournoi du Grand Chelem est Roland-Garros."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les balles de tennis étaient blanches autrefois.",
      reponse: "Vrai",
      explication: "Elles sont devenues jaunes pour être mieux vues à la télévision."
    }
  ]
};
