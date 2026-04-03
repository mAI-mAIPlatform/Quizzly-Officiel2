import { Quiz } from "@/types/quiz";

export const quiz775: Quiz = {
  id: "775",
  titre: "Informatique : Les bases du Codage 💻",
  description: "Apprendre les concepts fondamentaux pour parler aux machines.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une 'variable' en programmation ?",
      options: ["Une erreur de code", "Une boîte pour stocker une information", "La vitesse de l'ordinateur", "Une touche du clavier"],
      reponse: "Une boîte pour stocker une information",
      explication: "On peut y mettre un nombre (ex: score) ou du texte (ex: nom joueur)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces noms est un langage de programmation ?",
      options: ["French", "Python", "Lion", "Chrome"],
      reponse: "Python",
      explication: "C'est l'un des langages les plus populaires et faciles à apprendre."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un 'Bug' est une erreur dans un programme informatique.",
      reponse: "Vrai",
      explication: "Le mot vient de l'anglais 'insecte' (un insecte s'était glissé dans un vieil ordinateur)."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on l'action de chercher et corriger les erreurs dans un code ?",
      reponse: "Déboguer",
      explication: "Ou 'debug' en anglais."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle boucle permet de répéter une action TANT QU'une condition est vraie ?",
      options: ["Boucle For", "Boucle While", "Boucle Match", "Boucle Stop"],
      reponse: "Boucle While",
      explication: "While = tant que."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "En informatique, on commence souvent à compter à partir de 0 (et non 1).",
      reponse: "Vrai",
      explication: "C'est le cas pour les index de listes (tableaux)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie le mot 'Syntaxe' ?",
      options: ["La vitesse du code", "Les règles d'écriture du langage", "Le prix du logiciel", "L'écran"],
      reponse: "Les règles d'écriture du langage",
      explication: "Si on oublie une virgule, il y a une erreur de syntaxe."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un bloc de code réutilisable ?",
      reponse: "Fonction",
      explication: "Elle permet de ne pas réécrire plusieurs fois la même chose."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces langages est utilisé pour créer l'apparence des pages web ?",
      options: ["HTML / CSS", "Photoshop", "Outlook", "Windows"],
      reponse: "HTML / CSS",
      explication: "HTML pour la structure, CSS pour le style (couleurs, polices)."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Un commentaire (dans le code) est lu par l'ordinateur.",
      reponse: "Faux",
      explication: "Les commentaires servent aux humains pour expliquer le code, l'ordinateur les ignore."
    }
  ]
};
