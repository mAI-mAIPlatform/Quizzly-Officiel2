import { Quiz } from "@/types/quiz";

export const quiz977: Quiz = {
  id: "977",
  titre: "Inventions : L'Ordinateur 💻🤖",
  description: "Découvrez l'histoire des machines à calculer géantes devenues indispensables.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel savant anglais est considéré comme l'un des pères de l'informatique moderne ?",
      options: ["Steve Jobs", "Alan Turing", "Isaac Newton", "Bill Gates"],
      reponse: "Alan Turing",
      explication: "Il a imaginé le fonctionnement logique des ordinateurs (la machine de Turing)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle femme mathématicienne a écrit le tout premier programme informatique au 19ème siècle ?",
      options: ["Marie Curie", "Ada Lovelace", "Simone Veil", "Rosa Parks"],
      reponse: "Ada Lovelace",
      explication: "Elle travaillait sur la machine analytique de Charles Babbage."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les premiers ordinateurs étaient si gros qu'ils occupaient une pièce entière.",
      reponse: "Vrai",
      explication: "Comme l'ENIAC en 1946, qui pesait 30 tonnes !"
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le composant électronique minuscule qui a permis de réduire la taille des ordinateurs ?",
      reponse: "Transistor",
      explication: "Il a remplacé les grosses lampes (tubes à vide) fragiles et brûlantes."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel langage utilisent les ordinateurs (formé uniquement de 0 et de 1) ?",
      options: ["Le code Morse", "Le langage binaire", "L'alphabet latin", "Le code barre"],
      reponse: "Le langage binaire",
      explication: "Le 0 signifie 'pas de courant' et le 1 signifie 'courant passe'."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'Altair 8800 est considéré comme l'un des premiers ordinateurs personnels (PC).",
      reponse: "Vrai",
      explication: "Il est sorti en 1975 et a inspiré Bill Gates et Paul Allen."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle entreprise a lancé l'ordinateur 'Macintosh' en 1984 avec une souris et des icônes ?",
      options: ["Microsoft", "IBM", "Apple", "Google"],
      reponse: "Apple",
      explication: "C'est l'un des premiers ordinateurs faciles à utiliser pour tout le monde."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le 'cerveau' de l'ordinateur qui fait tous les calculs ?",
      reponse: "Processeur",
      explication: "Ou CPU (Central Processing Unit)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie le sigle RAM dans un ordinateur ?",
      options: ["Random Access Memory", "Rapide Automatique Machine", "Real Air Monitor", "Record All Media"],
      reponse: "Random Access Memory",
      explication: "C'est la mémoire vive, celle qui sert à faire tourner les programmes en cours."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "La première souris d'ordinateur était fabriquée en plastique souple.",
      reponse: "Faux",
      explication: "Le tout premier prototype (en 1964) était fabriqué en bois avec deux roues en métal !"
    }
  ]
};
