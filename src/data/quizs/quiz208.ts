import { Quiz } from "@/types/quiz";

export const quiz208: Quiz = {
  id: "208",
  titre: "Le Monde du Tennis 🎾🏆",
  description: "Testez votre connaissance sur les tournois du Grand Chelem et les légendes du court.",
  theme: "Sport",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de tournois composent le 'Grand Chelem' au tennis ?",
      options: ["2", "3", "4", "5"],
      reponse: "4",
      explication: "Open d'Australie, Roland-Garros, Wimbledon et l'US Open."
    },
    {
      id: "2",
      type: "qcm",
      question: "Sur quelle surface se joue le tournoi de Roland-Garros à Paris ?",
      options: ["Gazon", "Dur", "Terre Battue", "Parquet"],
      reponse: "Terre Battue",
      explication: "C'est une surface lente qui favorise les longs échanges."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel joueur détient le record absolu de victoires à Roland-Garros (surnommé l'Ocre-Roi) ?",
      options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Björn Borg"],
      reponse: "Rafael Nadal",
      explication: "L'Espagnol y a remporté 14 titres, un exploit unique dans l'histoire."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel est le plus ancien et le plus prestigieux tournoi, où les joueurs doivent obligatoirement porter du blanc ?",
      options: ["Open d'Australie", "Wimbledon", "US Open", "Masters d'Indian Wells"],
      reponse: "Wimbledon",
      explication: "Il se joue sur gazon à Londres depuis 1877."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on un service gagnant que l'adversaire n'arrive même pas à toucher ?",
      options: ["Un Smash", "Un Ace", "Un Let", "Un Slice"],
      reponse: "Un Ace",
      explication: "L'ace rapporte immédiatement le point au serveur."
    },
    {
      id: "6",
      type: "qcm",
      question: "Combien de sets faut-il gagner pour remporter un match masculin en Grand Chelem ?",
      options: ["1 set", "2 sets", "3 sets", "5 sets"],
      reponse: "3 sets",
      explication: "Les matchs masculins en Grand Chelem se jouent 'au meilleur des cinq sets'."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle joueuse américaine a dominé le tennis féminin avec 23 titres du Grand Chelem en simple ?",
      options: ["Steffi Graf", "Serena Williams", "Venus Williams", "Martina Navratilova"],
      reponse: "Serena Williams",
      explication: "Elle est considérée comme l'une des plus grandes athlètes de tous les temps."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment compte-t-on les points dans un jeu de tennis ?",
      options: ["1, 2, 3, 4", "10, 20, 30, 40", "15, 30, 40, Jeu", "5, 10, 15, 20"],
      reponse: "15, 30, 40, Jeu",
      explication: "Un système de comptage hérité du jeu de paume."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel joueur suisse est célèbre pour son élégance de jeu et son record de 8 victoires à Wimbledon ?",
      options: ["Stan Wawrinka", "Roger Federer", "Pete Sampras", "Andre Agassi"],
      reponse: "Roger Federer",
      explication: "Federer a pris sa retraite en 2022, laissant une trace indélébile."
    },
    {
      id: "10",
      type: "qcm",
      question: "Que signifie le terme 'Deuce' au tennis ?",
      options: ["Le début du match", "Égalité 40 partout dans un jeu", "La fin du match", "Un changement de balles"],
      reponse: "Égalité 40 partout dans un jeu",
      explication: "À ce moment-là, un joueur doit gagner deux points consécutifs (Avantage + Point) pour remporter le jeu."
    }
  ]
};
