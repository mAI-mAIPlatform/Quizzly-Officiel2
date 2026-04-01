import { Quiz } from "@/types/quiz";

export const quiz346: Quiz = {
  id: "346",
  titre: "Sport : Le Volley-ball 🏐",
  description: "Testez votre sens du collectif sur ce sport olympique dynamique.",
  theme: "Sport",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de joueurs par équipe y a-t-il sur le terrain en volley-ball classique ?",
      options: ["4", "5", "6", "11"],
      reponse: "6",
      explication: "Les équipes sont composées de 6 joueurs titulaires."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le geste qui consiste à mettre la balle en jeu ?",
      options: ["La passe", "La manchette", "Le service", "Le smash"],
      reponse: "Le service",
      explication: "Il s'effectue derrière la ligne de fond."
    },
    {
      id: "3",
      type: "qcm",
      question: "Combien de touches de balle maximum une équipe peut-elle faire avant de renvoyer le ballon ?",
      options: ["1", "2", "3", "5"],
      reponse: "3",
      explication: "Le contre ne compte pas comme une touche dans certaines règles."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on le joueur spécialisé en défense qui porte un maillot de couleur différente ?",
      options: ["L'attaquant", "Le passeur", "Le libero", "Le central"],
      reponse: "Le libero",
      explication: "Il ne peut ni attaquer, ni servir, ni contrer."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle l'attaque puissante frappée vers le bas ?",
      options: ["Le smash (ou attaque)", "La réception", "Le block", "L'amortie"],
      reponse: "Le smash (ou attaque)",
      explication: "C'est le geste offensif principal."
    },
    {
      id: "6",
      type: "qcm",
      question: "Un match de volley-ball se joue en combien de sets gagnants ?",
      options: ["1", "2", "3", "5"],
      reponse: "3",
      explication: "Il faut gagner 3 sets (le match peut aller jusqu'à 5 sets)."
    },
    {
      id: "7",
      type: "qcm",
      question: "À combien de points se joue un set classique (sauf le 5ème) ?",
      options: ["15", "21", "25", "30"],
      reponse: "25",
      explication: "Avec au moins deux points d'écart."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on le geste défensif avec les bras joints vers le bas ?",
      options: ["La manchette", "La passe haute", "Le plongeon", "La claque"],
      reponse: "La manchette",
      explication: "Elle sert principalement à la réception et à la défense."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que se passe-t-il si la balle touche la ligne du terrain ?",
      options: ["Le point est à rejouer", "La balle est considérée comme 'bonne' (in)", "La balle est 'dehors' (out)", "L'échange continue normalement"],
      reponse: "La balle est considérée comme 'bonne' (in)",
      explication: "Les lignes font partie intégrante du terrain."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel pays a remporté la médaille d'or masculine aux JO de Tokyo et de Paris ?",
      options: ["Brésil", "États-Unis", "France", "Pologne"],
      reponse: "France",
      explication: "L'équipe de France (Team Yavbou) a réussi un doublé historique."
    }
  ]
};
