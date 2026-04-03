import { Quiz } from "@/types/quiz";

export const quiz515: Quiz = {
  id: "515",
  titre: "Français : Le Nom et son Déterminant 🏫",
  description: "Révisez les articles, les déterminants possessifs et démonstratifs.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un nom commun ?",
      options: ["Un mot qui désigne une personne unique (majuscule)", "Un mot qui désigne une catégorie de choses, d'animaux ou de personnes", "Un mot qui exprime une action", "Un mot qui qualifie"],
      reponse: "Un mot qui désigne une catégorie de choses, d'animaux ou de personnes",
      explication: "Exemple : table, chat, professeur."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qu'est-ce que l'article défini ?",
      options: ["Le, la, les, l'", "Un, une, des", "Mon, ton, son", "Ce, cette, ces"],
      reponse: "Le, la, les, l'",
      explication: "On l'utilise pour parler de quelque chose de précis ou de connu."
    },
    {
      id: "3",
      type: "qcm",
      question: "Choisissez l'article indéfini pluriel :",
      options: ["Les", "Des", "Ses", "Ces"],
      reponse: "Des",
      explication: "On l'utilise pour des choses non identifiées précisément."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel déterminant indique la possession pour 'Je' ?",
      options: ["Ton", "Son", "Mon", "Le mien"],
      reponse: "Mon",
      explication: "Mon sac, ma voiture, mes amis."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel est un déterminant démonstratif (pour montrer) ?",
      options: ["Un", "Ce", "Le", "Mon"],
      reponse: "Ce",
      explication: "Ce livre là, cette image."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est le féminin de 'Ce' ?",
      options: ["Cette", "Cettes", "Ces", "Cela"],
      reponse: "Cette",
      explication: "Exemple : Cette fille."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel déterminant utilise-t-on devant un nom masculin singulier commençant par une voyelle (ex: ordinateur) ?",
      options: ["Ce", "Cet", "Cette", "Ces"],
      reponse: "Cet",
      explication: "On dit 'Cet ordinateur' (et non ce ordinateur)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Dans 'Les oiseaux chantent', quelle est la classe de 'Les' ?",
      options: ["Nom", "Verbe", "Déterminant (Article défini)", "Pronom"],
      reponse: "Déterminant (Article défini)",
      explication: "Il introduit le nom 'oiseaux'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle catégorie de déterminants exprime une quantité précise (un, deux, trois...) ?",
      options: ["Possessifs", "Démonstratifs", "Numéraux", "Indéfinis"],
      reponse: "Numéraux",
      explication: "Ils servent à compter."
    },
    {
      id: "10",
      type: "qcm",
      question: "Le nom propre prend-il toujours une majuscule ?",
      options: ["Oui", "Non", "Seulement au début d'une phrase", "Seulement pour les pays"],
      reponse: "Oui",
      explication: "C'est sa caractéristique principale (Paris, Victor Hugo...)."
    }
  ]
};
