import { Quiz } from "@/types/quiz";

export const quiz712: Quiz = {
  id: "712",
  titre: "Français : Fonctions autour du Nom 🏗️",
  description: "Maîtriser les expansions du nom : épithète, complément du nom, etc.",
  theme: "Français",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans 'Le chat noir', quelle est la fonction de 'noir' ?",
      options: ["Sujet", "Épithète", "Attribut", "Complément d'objet"],
      reponse: "Épithète",
      explication: "L'adjectif est rattaché directement au nom."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans 'La tour de Pise', que complète 'de Pise' ?",
      options: ["Le verbe", "Le nom 'tour'", "L'adjectif", "Le pronom"],
      reponse: "Le nom 'tour'",
      explication: "C'est un complément du nom introduit par 'de'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Une proposition subordonnée relative complète toujours un verbe.",
      reponse: "Faux",
      explication: "Elle complète un nom (appelé antécédent)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel pronom introduit une proposition subordonnée relative ?",
      options: ["Moi", "Lequel", "Dont", "Nous"],
      reponse: "Dont",
      explication: "Qui, que, quoi, dont, où, lequel..."
    },
    {
      id: "5",
      type: "courte",
      question: "Comment appelle-t-on la fonction d'un adjectif séparé du nom par le verbe 'être' ?",
      reponse: "Attribut du sujet",
      explication: "Exemple : 'Le ciel est bleu'."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans 'Paris, capitale de la France', 'capitale de la France' est...",
      options: ["Épithète", "Apposition", "Sujet", "Verbe"],
      reponse: "Apposition",
      explication: "Il y a une virgule séparant le mot de son explication."
    },
    {
      id: "7",
      type: "vrai_faux",
      question: "On peut supprimer les expansions du nom sans rendre la phrase incorrecte.",
      reponse: "Vrai",
      explication: "Ce sont des éléments facultatifs pour enrichir le sens."
    },
    {
      id: "8",
      type: "qcm",
      question: "Un complément du nom est souvent introduit par...",
      options: ["Un verbe", "Une préposition", "Un adverbe", "Un pronom"],
      reponse: "Une préposition",
      explication: "Souvent 'de', 'à', 'en', 'pour'..."
    },
    {
      id: "9",
      type: "courte",
      question: "Quelle est l'expansion du nom dans : 'Le livre que j'ai lu' ?",
      reponse: "Proposition subordonnée relative",
      explication: "Introduite par le pronom relatif 'que'."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle est la fonction de 'bleue' dans 'Une fleur bleue' ?",
      options: ["Attribut du sujet", "Épithète", "COD", "Sujet"],
      reponse: "Épithète",
      explication: "Accolé directement au nom."
    }
  ]
};
