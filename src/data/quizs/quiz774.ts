import { Quiz } from "@/types/quiz";

export const quiz774: Quiz = {
  id: "774",
  titre: "Informatique : Les Algorithmes 🧩",
  description: "Comprendre comment les machines reçoivent des instructions pour résoudre des problèmes.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "C'est quoi un algorithme ?",
      options: ["Une marque d'ordinateur", "Une suite d'instructions étape par étape", "Un type de batterie", "Un écran tactile"],
      reponse: "Une suite d'instructions étape par étape",
      explication: "Comme une recette de cuisine pour obtenir un résultat."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces objets utilise un algorithme au quotidien ?",
      options: ["Un marteau", "Un GPS pour calculer un itinéraire", "Une règle en bois", "Un verre d'eau"],
      reponse: "Un GPS pour calculer un itinéraire",
      explication: "Il calcule le chemin le plus court parmi des millions de possibilités."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un algorithme peut exister en dehors de l'informatique.",
      reponse: "Vrai",
      explication: "Une recette ou un mode d'emploi de meuble sont des algorithmes."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le fait de traduire un algorithme dans un langage compréhensible par l'ordinateur ?",
      reponse: "Programmation",
      explication: "Ou codage."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans un algorithme, que signifie une 'boucle' ?",
      options: ["Une erreur", "Une action qui se répète plusieurs fois", "Le bouton d'arrêt", "Le nom du créateur"],
      reponse: "Une action qui se répète plusieurs fois",
      explication: "Idéal pour automatiser des tâches répétitives."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Un algorithme finit toujours par s'arrêter.",
      reponse: "Vrai",
      explication: "S'il ne s'arrête jamais, c'est une 'boucle infinie' (souvent un bug)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle structure permet de faire un choix ('Si... alors... sinon...') ?",
      options: ["Une variable", "Une condition", "Une fonction", "Un pixel"],
      reponse: "Une condition",
      explication: "Indispensable pour la prise de décision."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un schéma qui représente visuellement un algorithme ?",
      reponse: "Organigramme",
      explication: "Ou logigramme."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qui a écrit le tout premier algorithme destiné à être exécuté par une machine ?",
      options: ["Steve Jobs", "Ada Lovelace", "Bill Gates", "Mark Zuckerberg"],
      reponse: "Ada Lovelace",
      explication: "Au XIXème siècle, pour la machine analytique de Babbage."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les algorithmes des réseaux sociaux choisissent les vidéos que tu regardes.",
      reponse: "Vrai",
      explication: "Ils analysent tes goûts pour te proposer du contenu qui t'intéresse."
    }
  ]
};
