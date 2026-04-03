import { Quiz } from "@/types/quiz";

export const quiz570: Quiz = {
  id: "570",
  titre: "Technologie : Algorithmique et Bases 💻",
  description: "Découvrez comment on donne des instructions à une machine.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un algorithme ?",
      options: ["Un personnage de jeu vidéo", "Une suite d'instructions précises pour résoudre un problème ou accomplir une tâche", "Une panne d'ordinateur", "Un type de calcul complexe"],
      reponse: "Une suite d'instructions précises pour résoudre un problème ou accomplir une tâche",
      explication: "Même une recette de cuisine est une forme d'algorithme."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle l'activité consistant à traduire un algorithme dans un langage que l'ordinateur comprend ?",
      options: ["La dictée", "La programmation (ou codage)", "Le dessin", "La traduction"],
      reponse: "La programmation (ou codage)",
      explication: "On utilise des langages comme Scratch, Python ou Javascript."
    },
    {
      id: "3",
      type: "qcm",
      question: "Dans un programme, qu'est-ce qu'une 'boucle' ?",
      options: ["Une erreur dans le programme", "Une instruction qui permet de répéter plusieurs fois une action", "La forme du câble de la souris", "Une image"],
      reponse: "Une instruction qui permet de répéter plusieurs fois une action",
      explication: "Exemple : 'Répéter 10 fois : Avancer'."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce qu'une 'variable' en informatique ?",
      options: ["Quelque chose qui ne change jamais", "Une boîte imaginaire qui stocke une valeur (un nombre, un mot) qui peut changer", "Un bouton sur le clavier", "Le nom de l'ordinateur"],
      reponse: "Une boîte imaginaire qui stocke une valeur (un nombre, un mot) qui peut changer",
      explication: "Exemple : le score dans un jeu vidéo est une variable."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quoi sert une instruction 'Si ... Alors ...' ?",
      options: ["À répéter une action", "À faire un choix (une condition) selon une situation", "À arrêter le programme", "À rien"],
      reponse: "À faire un choix (une condition) selon une situation",
      explication: "Exemple : 'Si le score > 10, alors dire Bravo'."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel logiciel utilise souvent des blocs de couleurs à emboîter pour apprendre à coder au collège ?",
      options: ["Photoshop", "Scratch", "Word", "Excel"],
      reponse: "Scratch",
      explication: "C'est un langage de programmation visuel très ludique."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans quel sens un ordinateur lit-il généralement les instructions d'un programme simple ?",
      options: ["Dans tous les sens au hasard", "De haut en bas, l'une après l'autre (ordre séquentiel)", "De bas en haut", "Il ne les lit pas"],
      reponse: "De haut en bas, l'une après l'autre (ordre séquentiel)",
      explication: "C'est la séquence d'exécution."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Bug' informatique ?",
      options: ["Un petit insecte utile", "Une erreur dans le programme qui empêche son bon fonctionnement", "Une nouvelle version du logiciel", "Le nom de l'écran"],
      reponse: "Une erreur dans le programme qui empêche son bon fonctionnement",
      explication: "Trouver et corriger les bugs s'appelle le 'débogage'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Un robot est une machine capable d'agir en fonction de :",
      options: ["Son humeur", "Ses capteurs (informations extérieures) et son programme", "La météo uniquement", "Rien, il fait n'importe quoi"],
      reponse: "Ses capteurs (informations extérieures) et son programme",
      explication: "Le capteur reçoit l'info, le programme décide, l'actionneur agit."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le langage de base d'un ordinateur (composé uniquement de 0 et de 1) ?",
      options: ["Le Français", "Le Binaire", "L'Anglais", "Le Morse"],
      reponse: "Le Binaire",
      explication: "Au niveau le plus profond, tout n'est que signal électrique (on/off)."
    }
  ]
};
