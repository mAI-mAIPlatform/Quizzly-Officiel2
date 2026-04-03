import { Quiz } from "@/types/quiz";

export const quiz911: Quiz = {
  id: "911",
  titre: "Sports : Le Football ⚽🏟️",
  description: "Testez votre culture foot sur le sport le plus populaire au monde.",
  theme: "Sports",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de joueurs par équipe y a-t-il sur le terrain au début d'un match de football ?",
      options: ["7", "9", "11", "15"],
      reponse: "11",
      explication: "Il y a 10 joueurs de champ et un gardien de but."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle partie du corps les joueurs (sauf le gardien) n'ont-ils pas le droit d'utiliser ?",
      options: ["La tête", "Les pieds", "Les mains et les bras", "Le torse"],
      reponse: "Les mains et les bras",
      explication: "S'ils le font, l'arbitre siffle une 'main'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La Coupe du Monde de football a lieu tous les 4 ans.",
      reponse: "Vrai",
      explication: "C'est l'événement le plus suivi au monde."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la récompense individuelle suprême remise chaque année au meilleur joueur du monde ?",
      reponse: "Ballon d'Or",
      explication: "Il est décerné par le magazine France Football."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la durée réglementaire d'un match de football (hors temps additionnel) ?",
      options: ["60 minutes", "80 minutes", "90 minutes", "100 minutes"],
      reponse: "90 minutes",
      explication: "Il y a deux mi-temps de 45 minutes chacune."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La France a remporté deux Coupes du Monde (en 1998 et 2018).",
      reponse: "Vrai",
      explication: "C'est pour cela qu'il y a deux étoiles sur le maillot des Bleus."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie un 'carton rouge' donné par l'arbitre ?",
      options: ["Un simple avertissement", "L'expulsion définitive du joueur du terrain", "Un penalty pour l'équipe adverse", "Le changement du joueur"],
      reponse: "L'expulsion définitive du joueur du terrain",
      explication: "Le joueur doit quitter le terrain et son équipe finit le match avec un joueur en moins."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le tir effectué depuis un point situé à 11 mètres du but après une faute grave dans la surface de réparation ?",
      reponse: "Penalty",
      explication: "C'est un duel direct entre le tireur et le gardien."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans quelle ville se trouve le célèbre stade du Maracanã ?",
      options: ["Paris", "Londres", "Rio de Janeiro (Brésil)", "Madrid"],
      reponse: "Rio de Janeiro (Brésil)",
      explication: "C'est l'un des stades les plus mythiques de l'histoire du foot."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les femmes ont aussi leur propre Coupe du Monde de football.",
      reponse: "Vrai",
      explication: "Le football féminin se développe énormément et attire de plus en plus de spectateurs."
    }
  ]
};
