import { Quiz } from "@/types/quiz";

export const quiz228: Quiz = {
  id: "228",
  titre: "L'Univers du Tennis 🎾🎾",
  description: "Testez votre connaissance sur la balle jaune, les tournois du Grand Chelem et les champions.",
  theme: "Sport",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien y a-t-il de tournois du 'Grand Chelem' par an ?",
      options: ["2", "3", "4", "5"],
      reponse: "4",
      explication: "L'Open d'Australie, Roland-Garros, Wimbledon et l'US Open."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces tournois se joue sur surface en terre battue ?",
      options: ["Wimbledon", "US Open", "Roland-Garros", "Open d'Australie"],
      reponse: "Roland-Garros",
      explication: "Situé à Paris, c'est le tournoi de terre battue le plus prestigieux du monde."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel joueur détient le record absolu de victoires à Roland-Garros (surnommé 'Le Roi de la Terre Battue') ?",
      options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Björn Borg"],
      reponse: "Rafael Nadal",
      explication: "L'Espagnol a remporté le tournoi 14 fois, une performance unique dans l'histoire."
    },
    {
      id: "4",
      type: "qcm",
      question: "À Wimbledon, quelle est la règle concernant la tenue des joueurs ?",
      options: ["Libre choix", "Obligation de porter du blanc", "Tenue sponsorisée uniquement", "Couleur du pays"],
      reponse: "Obligation de porter du blanc",
      explication: "C'est une tradition ancestrale du tournoi londonien née à l'époque victorienne."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on un service que l'adversaire ne parvient pas à toucher ?",
      options: ["Un Smash", "Un Ace", "Un Lob", "Une Volée"],
      reponse: "Un Ace",
      explication: "L'ace rapporte le point directement au serveur."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment compte-t-on les points dans un jeu de tennis ?",
      options: ["1, 2, 3, 4", "10, 20, 30, 40", "15, 30, 40, Jeu", "5, 10, 15, 20"],
      reponse: "15, 30, 40, Jeu",
      explication: "Si les deux joueurs sont à 40-40, on parle d''égalité' (Deuce)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle championne américaine a remporté 23 titres du Grand Chelem en simple dans l'ère Open ?",
      options: ["Steffi Graf", "Serena Williams", "Venus Williams", "Martina Navratilova"],
      reponse: "Serena Williams",
      explication: "Elle est considérée comme l'une des plus grandes athlètes de tous les temps."
    },
    {
      id: "8",
      type: "qcm",
      question: "Sur quelle surface se joue le tournoi de Wimbledon ?",
      options: ["Gazon (herbe)", "Terre battue", "Dur (résine)", "Synthétique"],
      reponse: "Gazon (herbe)",
      explication: "C'est la surface la plus rapide du circuit."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel terme utilise-t-on pour désigner le score de zéro au tennis ?",
      options: ["Zero", "Love", "Nil", "Nada"],
      reponse: "Love",
      explication: "L'origine viendrait du mot français 'l'œuf', dont la forme ressemble au chiffre 0."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel nom porte le système de trajectoire par ordinateur permettant de vérifier si une balle est faute ?",
      options: ["Hawk-Eye (Œil de Faucon)", "Eagle-Vision", "VAR", "Photo-Finish"],
      reponse: "Hawk-Eye (Œil de Faucon)",
      explication: "Les joueurs ont droit à un nombre limité de 'challenges' par set."
    }
  ]
};
