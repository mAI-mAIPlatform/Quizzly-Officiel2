import { Quiz } from "@/types/quiz";

export const quiz913: Quiz = {
  id: "913",
  titre: "Sports : Le Tennis 🎾🏆",
  description: "Maniez la raquette et découvrez les règles de la petite balle jaune.",
  theme: "Sports",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le premier coup de chaque point au tennis ?",
      options: ["Le revers", "Le coup droit", "Le service", "Le smash"],
      reponse: "Le service",
      explication: "Le joueur doit envoyer la balle dans le carré opposé."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment compte-t-on les points au tennis (le premier point gagné vaut combien) ?",
      options: ["1 point", "10 points", "15 points", "25 points"],
      reponse: "15 points",
      explication: "On compte : 15, 30, 40, puis 'jeu'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un match de tennis se joue généralement en 2 ou 3 'sets' (ou manches).",
      reponse: "Vrai",
      explication: "Chez les hommes en Grand Chelem, cela peut aller jusqu'à 5 sets."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le célèbre tournoi de tennis français qui se joue sur terre battue à Paris ?",
      reponse: "Roland-Garros",
      explication: "C'est l'un des quatre tournois du Grand Chelem."
    },
    {
      id: "5",
      type: "qcm",
      question: "Sur quelle surface se joue le tournoi de Wimbledon en Angleterre ?",
      options: ["La terre battue", "L'herbe (gazon)", "Le dur (béton)", "Le sable"],
      reponse: "L'herbe (gazon)",
      explication: "C'est une surface très rapide où la balle bondit peu."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Au tennis, si la balle touche une ligne, elle est considérée comme 'bonne'.",
      reponse: "Vrai",
      explication: "La ligne fait partie du terrain."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie le mot 'Ace' ?",
      options: ["C'est quand le joueur casse sa raquette", "C'est un service gagnant que l'adversaire n'a même pas pu toucher", "C'est quand la balle sort du terrain", "C'est une égalité de points"],
      reponse: "C'est un service gagnant que l'adversaire n'a même pas pu toucher",
      explication: "C'est un point direct marqué grâce au service."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le coup effectué quand on tient sa raquette à l'envers par rapport à son côté naturel ?",
      reponse: "Revers",
      explication: "Il peut se faire à une main ou à deux mains."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qui est le joueur qui a remporté le plus de fois le tournoi de Roland-Garros ?",
      options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Yannick Noah"],
      reponse: "Rafael Nadal",
      explication: "Il est surnommé 'le roi de la terre battue' avec 14 victoires."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On peut jouer au tennis à quatre (deux contre deux).",
      reponse: "Vrai",
      explication: "Cela s'appelle un match de 'double'. Le terrain est alors plus large (on utilise les couloirs)."
    }
  ]
};
