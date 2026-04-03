import { Quiz } from "@/types/quiz";

export const quiz772: Quiz = {
  id: "772",
  titre: "Informatique : Internet et le Web 🌍",
  description: "Comprendre le réseau mondial et son fonctionnement.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie 'WWW' au début des adresses de sites ?",
      options: ["World Wide Web", "Watch Wide World", "Web Win Work", "WIFI Western Way"],
      reponse: "World Wide Web",
      explication: "Littéralement la 'toile mondiale'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces programmes est un navigateur web ?",
      options: ["Word", "Google Chrome", "Spotify", "Excel"],
      reponse: "Google Chrome",
      explication: "Un navigateur sert à afficher les pages web."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Internet et le Web, c'est exactement la même chose.",
      reponse: "Faux",
      explication: "Internet est le réseau de câbles/ondes. Le Web est l'un des services qui utilise Internet (comme les emails ou le cloud)."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on une adresse web (ex: https://...) ?",
      reponse: "URL",
      explication: "Uniform Resource Locator."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'un moteur de recherche ?",
      options: ["Un logiciel pour réparer la voiture", "Un site pour trouver des informations (ex: Google, Bing)", "Une pièce de l'ordinateur", "Un jeu vidéo"],
      reponse: "Un site pour trouver des informations (ex: Google, Bing)",
      explication: "Il indexe des milliards de pages pour nous aider à chercher."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le WIFI utilise des câbles invisibles pour transmettre les données.",
      reponse: "Faux",
      explication: "Le WIFI utilise des ondes radio, sans aucun câble."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie le 's' dans 'https://' ?",
      options: ["Secret", "Secure (Sécurisé)", "System", "Super"],
      reponse: "Secure (Sécurisé)",
      explication: "Cela signifie que les données échangées sont cryptées."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un texte ou une image sur laquelle on clique pour aller ailleurs ?",
      reponse: "Lien hypertexte",
      explication: "Ou simplement un 'lien'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'une 'adresse IP' ?",
      options: ["L'adresse de ta maison", "Le numéro d'identification unique d'un appareil sur le réseau", "Le nom de ton chien", "Un code secret pour Netflix"],
      reponse: "Le numéro d'identification unique d'un appareil sur le réseau",
      explication: "C'est comme une adresse postale pour les ordinateurs."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Toutes les informations sur Internet sont vraies.",
      reponse: "Faux",
      explication: "N'importe qui peut publier n'importe quoi. Il faut toujours vérifier ses sources (Fake news)."
    }
  ]
};
