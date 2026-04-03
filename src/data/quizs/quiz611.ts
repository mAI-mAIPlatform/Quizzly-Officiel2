import { Quiz } from "@/types/quiz";

export const quiz611: Quiz = {
  id: "611",
  titre: "Sport : Les Règles du Football ⚽",
  description: "Testez vos connaissances sur le sport le plus populaire au monde.",
  theme: "Sport",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de joueurs par équipe y a-t-il sur le terrain au début d'un match ?",
      options: ["7", "11", "15", "22"],
      reponse: "11",
      explication: "Le match oppose deux équipes de 11 joueurs chacune."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le seul joueur autorisé à toucher le ballon avec les mains dans sa surface de réparation ?",
      options: ["Le capitaine", "L'attaquant", "Le gardien de but", "L'arbitre"],
      reponse: "Le gardien de but",
      explication: "Il protège son but et peut utiliser ses mains dans sa zone."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la durée réglementaire d'un match de football (hors temps additionnel) ?",
      options: ["60 minutes", "80 minutes", "90 minutes", "100 minutes"],
      reponse: "90 minutes",
      explication: "Le match se divise en deux mi-temps de 45 minutes."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que signifie un carton rouge montré par l'arbitre ?",
      options: ["Un avertissement", "Le joueur doit sortir définitivement du terrain", "Un changement de joueur", "La fin du match"],
      reponse: "Le joueur doit sortir définitivement du terrain",
      explication: "L'équipe doit alors finir le match avec un joueur en moins."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on le tir effectué depuis le point situé à 11 mètres du but après une faute grave ?",
      options: ["Le coup franc", "Le corner", "Le penalty", "La touche"],
      reponse: "Le penalty",
      explication: "C'est un duel direct entre le tireur et le gardien."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quand le ballon sort par la ligne de fond après avoir été touché par un défenseur, l'arbitre siffle :",
      options: ["Un penalty", "Un corner (coup de pied de coin)", "Une touche", "Un six-mètres"],
      reponse: "Un corner (coup de pied de coin)",
      explication: "Le ballon est remis en jeu depuis le coin du terrain."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qui dirige le match et s'assure du respect des règles ?",
      options: ["L'entraîneur", "Le capitaine", "L'arbitre", "Le commentateur"],
      reponse: "L'arbitre",
      explication: "Il est assisté d'arbitres de touche et parfois de la VAR (vidéo)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Un but est accordé quand :",
      options: ["Le ballon touche le poteau", "Le ballon franchit entièrement la ligne de but entre les poteaux", "Le ballon sort du terrain", "Le gardien touche le ballon"],
      reponse: "Le ballon franchit entièrement la ligne de but entre les poteaux",
      explication: "Le ballon doit être complètement derrière la ligne."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel pays a remporté le plus de Coupes du Monde de football (masculin) ?",
      options: ["France", "Allemagne", "Brésil", "Italie"],
      reponse: "Brésil",
      explication: "Le Brésil a gagné 5 titres mondiaux (1958, 1962, 1970, 1994, 2002)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Tous les combien d'années a lieu la Coupe du Monde ?",
      options: ["Tous les ans", "Tous les 2 ans", "Tous les 4 ans", "Tous les 10 ans"],
      reponse: "Tous les 4 ans",
      explication: "C'est l'événement sportif le plus suivi avec les JO."
    }
  ]
};
