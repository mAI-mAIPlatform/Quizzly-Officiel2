import { Quiz } from "@/types/quiz";

export const quiz183: Quiz = {
  id: "183",
  titre: "Le Monde du Tennis 🎾🏆",
  description: "Testez votre culture sur les tournois du Grand Chelem et les stars de la raquette.",
  theme: "Sport",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Sur quel type de surface se joue le tournoi de Roland-Garros ?",
      options: ["Gazon", "Dur", "Terre Battue", "Parquet"],
      reponse: "Terre Battue",
      explication: "La terre battue est la surface la plus lente et nécessite une grande endurance."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien de tournois composent le 'Grand Chelem' ?",
      options: ["2", "3", "4", "5"],
      reponse: "4",
      explication: "L'Open d'Australie, Roland-Garros, Wimbledon et l'US Open."
    },
    {
      id: "3",
      type: "qcm",
      question: "Lequel de ces tournois se joue sur gazon et impose aux joueurs de porter du blanc ?",
      options: ["US Open", "Roland-Garros", "Wimbledon", "Open d'Australie"],
      reponse: "Wimbledon",
      explication: "C'est le plus ancien et le plus prestigieux tournoi au monde (Londres)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel joueur espagnol est surnommé 'Le Roi de la Terre Battue' ?",
      options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Carlos Alcaraz"],
      reponse: "Rafael Nadal",
      explication: "Nadal a remporté Roland-Garros un nombre record de 14 fois."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on un service gagnant que l'adversaire n'arrive même pas à toucher ?",
      options: ["Un Smash", "Un Ace", "Un Drive", "Un Lob"],
      reponse: "Un Ace",
      explication: "Réussir un ace permet de gagner le point directement."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est le score quand les deux joueurs ont gagné deux points chacun dans un jeu ?",
      options: ["15-15", "30-30", "40-40", "Egalité"],
      reponse: "30-30",
      explication: "Le premier point vaut 15, le second 30, le troisième 40."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle joueuse américaine a remporté 23 titres du Grand Chelem en simple ?",
      options: ["Venus Williams", "Serena Williams", "Maria Sharapova", "Naomi Osaka"],
      reponse: "Serena Williams",
      explication: "Elle a dominé le circuit féminin pendant plus de deux décennies."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on le coup droit joué après que la balle a rebondi ?",
      options: ["La volée", "Le passing-shot", "Le coup droit", "Le revers"],
      reponse: "Le coup droit",
      explication: "Le coup droit est généralement le coup le plus puissant d'un joueur."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel joueur suisse, retraité en 2022, était célèbre pour son élégance et son revers à une main ?",
      options: ["Stan Wawrinka", "Roger Federer", "Marc Rosset", "Martina Hingis"],
      reponse: "Roger Federer",
      explication: "Federer a battu de nombreux records et est admiré pour son fair-play."
    },
    {
      id: "10",
      type: "qcm",
      question: "Combien de sets doit gagner un homme pour remporter un match en Grand Chelem ?",
      options: ["1 set", "2 sets", "3 sets", "5 sets"],
      reponse: "3 sets",
      explication: "Les matchs masculins en Grand Chelem se jouent 'au meilleur des cinq sets'."
    }
  ]
};
