import { Quiz } from "@/types/quiz";

export const quiz762: Quiz = {
  id: "762",
  titre: "Sport : Le Football ⚽",
  description: "Règles, histoire et joueurs légendaires du ballon rond.",
  theme: "Sport",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien y a-t-il de joueurs par équipe sur le terrain ?",
      options: ["7", "9", "11", "15"],
      reponse: "11",
      explication: "Dont un gardien de but."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel pays a remporté le plus de Coupes du Monde ?",
      options: ["France", "Allemagne", "Brésil", "Italie"],
      reponse: "Brésil",
      explication: "Le Brésil a 5 étoiles sur son maillot."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le gardien de but est le seul à pouvoir toucher le ballon avec les mains.",
      reponse: "Vrai",
      explication: "Mais uniquement dans sa propre surface de réparation."
    },
    {
      id: "4",
      type: "courte",
      question: "Combien de temps dure normalement un match (hors arrêts de jeu et prolongations) ?",
      reponse: "90 minutes",
      explication: "Deux mi-temps de 45 minutes."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que reçoit un joueur s'il commet une faute grave ?",
      options: ["Un carton vert", "Un carton jaune", "Un carton rouge", "Un bonbon"],
      reponse: "Un carton rouge",
      explication: "Le carton rouge signifie l'expulsion immédiate."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le hors-jeu est une règle du football.",
      reponse: "Vrai",
      explication: "C'est l'une des règles les plus complexes pour les débutants."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel joueur est célèbre pour avoir marqué un but de la main surnommé 'La main de Dieu' ?",
      options: ["Pelé", "Diego Maradona", "Lionel Messi", "Zinédine Zidane"],
      reponse: "Diego Maradona",
      explication: "En 1986 contre l'Angleterre."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'arbitre qui court sur les côtés du terrain ?",
      reponse: "arbitre de touche",
      explication: "Ou arbitre assistant."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel prix récompense le meilleur joueur de l'année ?",
      options: ["La Coupe", "Le Ballon d'Or", "La Médaille de Platine", "Le Gant d'Or"],
      reponse: "Le Ballon d'Or",
      explication: "Créé par le magazine France Football."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Un match de football peut se terminer par un match nul (sauf élimination directe).",
      reponse: "Vrai",
      explication: "Les deux équipes reçoivent alors 1 point en championnat."
    }
  ]
};
