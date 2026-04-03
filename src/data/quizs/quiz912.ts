import { Quiz } from "@/types/quiz";

export const quiz912: Quiz = {
  id: "912",
  titre: "Sports : Le Basketball 🏀🗑️",
  description: "Visez le panier et découvrez l'univers du basket.",
  theme: "Sports",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de joueurs par équipe y a-t-il sur le terrain au basketball ?",
      options: ["3", "5", "7", "11"],
      reponse: "5",
      explication: "Il y a aussi de nombreux remplaçants car le jeu est très rapide."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le geste qui consiste à faire rebondir la balle au sol tout en se déplaçant ?",
      options: ["Le porté", "Le dribble", "Le shoot", "Le smash"],
      reponse: "Le dribble",
      explication: "Si on arrête de dribbler, on n'a plus le droit de marcher avec le ballon."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un panier marqué de très loin (derrière la ligne) vaut 3 points.",
      reponse: "Vrai",
      explication: "Un panier normal vaut 2 points, et un lancer franc vaut 1 point."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la prestigieuse ligue professionnelle de basketball américaine ?",
      reponse: "NBA",
      explication: "National Basketball Association. C'est là que jouent les meilleures stars du monde."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle le geste spectaculaire qui consiste à sauter pour mettre le ballon directement dans le panier avec force ?",
      options: ["Le lay-up", "Le dunk", "La passe", "Le contre"],
      reponse: "Le dunk",
      explication: "C'est l'un des gestes les plus impressionnants du basket."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "On a le droit de pousser son adversaire pour lui prendre le ballon.",
      reponse: "Faux",
      explication: "C'est une 'faute personnelle'. Si un joueur en fait trop, il est exclu du match."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qui est souvent considéré comme le plus grand joueur de basketball de tous les temps (il jouait aux Chicago Bulls) ?",
      options: ["Michael Jordan", "LeBron James", "Tony Parker", "Stephen Curry"],
      reponse: "Michael Jordan",
      explication: "Il a remporté 6 titres de champion NBA."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le tir effectué sans opposition après une faute, depuis une ligne située face au panier ?",
      reponse: "Lancer franc",
      explication: "Le jeu s'arrête pendant que le joueur tire."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la hauteur réglementaire du panier de basketball ?",
      options: ["2,50 mètres", "3,05 mètres", "3,50 mètres", "4 mètres"],
      reponse: "3,05 mètres",
      explication: "C'est une hauteur standard partout dans le monde."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le basketball a été inventé par un professeur de sport au Canada/USA.",
      reponse: "Vrai",
      explication: "James Naismith a inventé ce sport en 1891 en accrochant des paniers de pêches au balcon d'un gymnase."
    }
  ]
};
