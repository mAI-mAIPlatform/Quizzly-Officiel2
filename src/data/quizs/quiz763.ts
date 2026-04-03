import { Quiz } from "@/types/quiz";

export const quiz763: Quiz = {
  id: "763",
  titre: "Sport : Le Basket-ball 🏀",
  description: "Dribbles, dunks et paniers à 3 points.",
  theme: "Sport",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien y a-t-il de joueurs par équipe sur le terrain ?",
      options: ["5", "7", "10", "12"],
      reponse: "5",
      explication: "C'est un sport très rapide avec beaucoup de changements."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien de points vaut un lancer franc réussi ?",
      options: ["1", "2", "3", "5"],
      reponse: "1",
      explication: "Il est tiré sans opposition après une faute."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Michael Jordan a joué la majeure partie de sa carrière pour les Chicago Bulls.",
      reponse: "Vrai",
      explication: "Il a remporté 6 titres NBA avec eux."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'action de courir avec le ballon sans dribbler ?",
      reponse: "Marcher",
      explication: "C'est une faute. On peut faire deux pas maximum sans dribbler."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quelle hauteur se trouve le panier de basket ?",
      options: ["2,50 m", "3,05 m", "3,50 m", "4,00 m"],
      reponse: "3,05 m",
      explication: "Soit 10 pieds."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Un dunk consiste à lancer le ballon dans le panier sans le toucher.",
      reponse: "Faux",
      explication: "Un dunk consiste à enfourner le ballon directement dans l'arceau en s'y accrochant parfois."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie NBA ?",
      options: ["National Basketball Association", "New Basketball Alliance", "National Ball Athletes", "Native Basketball Association"],
      reponse: "National Basketball Association",
      explication: "La plus prestigieuse ligue de basket au monde (USA)."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel joueur français est devenu une star mondiale et a été n°1 de la draft en 2023 ?",
      reponse: "Victor Wembanyama",
      explication: "Il joue pour les San Antonio Spurs."
    },
    {
      id: "9",
      type: "qcm",
      question: "Au bout de combien de fautes personnelles un joueur est-il exclu d'un match NBA ?",
      options: ["3", "4", "5", "6"],
      reponse: "6",
      explication: "C'est 5 fautes dans le règlement international (FIBA)."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le basket-ball a été inventé par un professeur de sport au Canada.",
      reponse: "Vrai",
      explication: "James Naismith, en 1891, pour occuper ses élèves en hiver."
    }
  ]
};
