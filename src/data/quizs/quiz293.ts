import { Quiz } from "@/types/quiz";

export const quiz293: Quiz = {
  id: "293",
  titre: "Échecs et Stratégie",
  theme: "Sport",
  description: "Testez votre connaissance sur le 'Roi des Jeux'.",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de cases y a-t-il sur un échiquier ?",
      options: ["32", "48", "64", "100"],
      reponse: "64",
      explication: "Un échiquier est une grille de 8x8 cases alternant blanc et noir."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle pièce peut sauter par-dessus les autres ?",
      options: ["Le Fou", "La Tour", "Le Cavalier", "La Dame"],
      reponse: "Le Cavalier",
      explication: "Le cavalier se déplace en 'L' et est la seule pièce capable de franchir un obstacle."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment s'appelle le coup où le roi se déplace de deux cases vers une tour ?",
      options: ["Le Gambit", "Le Roque", "La Promotion", "L'Échec"],
      reponse: "Le Roque",
      explication: "Le roque permet de mettre le roi à l'abri et de développer la tour."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle pièce est la plus puissante sur l'échiquier ?",
      options: ["Le Roi", "La Dame", "La Tour", "Le Fou"],
      reponse: "La Dame",
      explication: "La dame combine les mouvements de la tour et du fou."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle la situation où le roi est attaqué et ne peut plus s'échapper ?",
      options: ["Pat", "Échec et Mat", "Nulle", "Abandon"],
      reponse: "Échec et Mat",
      explication: "L'échec et mat met fin à la partie avec la victoire de l'attaquant."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle pièce ne se déplace qu'en diagonale ?",
      options: ["Le Fou", "Le Cavalier", "Le Pion", "La Tour"],
      reponse: "Le Fou",
      explication: "Chaque joueur possède un fou de cases blanches et un fou de cases noires."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que se passe-t-il lorsqu'un pion atteint la huitième rangée (la dernière) ?",
      options: ["Il meurt", "Il recule", "Il est promu en une autre pièce", "Il reste là"],
      reponse: "Il est promu en une autre pièce",
      explication: "Il peut devenir une dame, une tour, un fou ou un cavalier (généralement une dame)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qui a été le premier champion du monde d'échecs officiel ?",
      options: ["Garry Kasparov", "Magnus Carlsen", "Wilhelm Steinitz", "Bobby Fischer"],
      reponse: "Wilhelm Steinitz",
      explication: "Steinitz a remporté le titre en 1886 contre Johannes Zukertort."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle ouverture commence par les coups 1.e4 e5 2.Cf3 Cc6 3.Fb5 ?",
      options: ["La Sicilienne", "La Partie Espagnole (Ruy Lopez)", "La Défense Française", "Le Gambit Dame"],
      reponse: "La Partie Espagnole (Ruy Lopez)",
      explication: "C'est l'une des ouvertures les plus étudiées et jouées à haut niveau."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment s'appelle le champion du monde actuel (en 2024) ?",
      options: ["Magnus Carlsen", "Ding Liren", "Ian Nepomniachtchi", "Fabiano Caruana"],
      reponse: "Ding Liren",
      explication: "Ding Liren est devenu champion du monde en 2023 en succédant à Magnus Carlsen (qui n'a pas défendu son titre)."
    }
  ]
};
