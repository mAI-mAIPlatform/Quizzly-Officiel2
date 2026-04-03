import { Quiz } from "@/types/quiz";

export const quiz613: Quiz = {
  id: "613",
  titre: "Sport : Le Tennis 🎾",
  description: "Points et vocabulaire du sport de raquette.",
  theme: "Sport",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le premier point gagné dans un jeu au tennis ?",
      options: ["1 point", "10", "15", "Premier"],
      reponse: "15",
      explication: "Le décompte est : 15, 30, 40, Jeu."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le nom du célèbre tournoi sur terre battue qui a lieu à Paris ?",
      options: ["Wimbledon", "Roland-Garros", "US Open", "Open d'Australie"],
      reponse: "Roland-Garros",
      explication: "C'est l'un des quatre tournois du Grand Chelem."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que signifie le mot 'Ace' ?",
      options: ["Une faute au service", "Un service gagnant que l'adversaire ne touche pas", "Une balle qui touche le filet", "Un changement de raquette"],
      reponse: "Un service gagnant que l'adversaire ne touche pas",
      explication: "Il permet de remporter le point directement."
    },
    {
      id: "4",
      type: "qcm",
      question: "Sur quelle surface se joue le tournoi de Wimbledon en Angleterre ?",
      options: ["Terre battue", "Gazon (herbe)", "Dur (béton)", "Moquette"],
      reponse: "Gazon (herbe)",
      explication: "C'est la surface traditionnelle du tennis."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on le score de 40 partout (40-40) dans un jeu ?",
      options: ["Égalité / Deuce", "Match nul", "Balle de break", "Avantage"],
      reponse: "Égalité / Deuce",
      explication: "Le joueur doit alors gagner deux points consécutifs pour remporter le jeu."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on un coup effectué avec le dos de la main tourné vers l'adversaire ?",
      options: ["Le coup droit", "Le revers", "Le smash", "L'amortie"],
      reponse: "Le revers",
      explication: "Il peut se jouer à une ou deux mains."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qui est le joueur espagnol surnommé 'Le Roi de la terre battue' ?",
      options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Carlos Alcaraz"],
      reponse: "Rafael Nadal",
      explication: "Il a remporté un nombre record de fois le tournoi de Roland-Garros."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est le nom de l'arbitre chargé de vérifier si les balles sortent du terrain ?",
      options: ["L'arbitre central", "Le juge de ligne", "Le ramasseur", "Le coach"],
      reponse: "Le juge de ligne",
      explication: "Ils sont plusieurs autour du court pour aider l'arbitre de chaise."
    },
    {
      id: "9",
      type: "qcm",
      question: "Combien de sets (manches) faut-il gagner pour remporter un match masculin en Grand Chelem ?",
      options: ["2 sets", "3 sets", "5 sets", "10 sets"],
      reponse: "3 sets",
      explication: "Les matchs se jouent au meilleur des 5 manches."
    },
    {
      id: "10",
      type: "qcm",
      question: "Que se passe-t-il si la balle touche le filet au service mais retombe dans le bon carré ?",
      options: ["Le point est perdu", "Il faut refaire le service ('Let' ou 'Filet')", "Le point continue", "L'adversaire gagne deux points"],
      reponse: "Il faut refaire le service ('Let' ou 'Filet')",
      explication: "Le serveur a le droit de recommencer sans pénalité."
    }
  ]
};
