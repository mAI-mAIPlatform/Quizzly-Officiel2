import { Quiz } from "@/types/quiz";

export const quiz343: Quiz = {
  id: "343",
  titre: "Informatique : Langages et Frameworks 💻",
  description: "Testez vos connaissances sur les outils préférés des développeurs modernes.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle le langage qui permet de mettre en forme des pages web (couleurs, police) ?",
      options: ["HTML", "CSS", "PHP", "SQL"],
      reponse: "CSS",
      explication: "Cascading Style Sheets (Feuilles de style en cascade)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces langages est dit 'bas niveau' (proche de la machine) ?",
      options: ["Python", "C", "JavaScript", "Ruby"],
      reponse: "C",
      explication: "Il permet une gestion fine de la mémoire mais est plus difficile à apprendre."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle bibliothèque JavaScript a été créée par Facebook ?",
      options: ["Vue.js", "Angular", "React", "Svelte"],
      reponse: "React",
      explication: "Elle est basée sur des composants et un DOM virtuel."
    },
    {
      id: "4",
      type: "qcm",
      question: "À quoi sert le langage SQL ?",
      options: ["À créer des jeux vidéo", "À communiquer avec des bases de données", "À dessiner des logos", "À accélérer internet"],
      reponse: "À communiquer avec des bases de données",
      explication: "Structured Query Language."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel langage est utilisé par Apple pour le développement d'applications iOS ?",
      options: ["Java", "Swift", "Kotlin", "C#"],
      reponse: "Swift",
      explication: "Il a remplacé l'Objective-C."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Framework' ?",
      options: ["Un outil de dessin", "Un cadre de travail (ensemble d'outils et de règles)", "La carrosserie d'un PC", "Un virus"],
      reponse: "Un cadre de travail (ensemble d'outils et de règles)",
      explication: "Il permet de ne pas repartir de zéro pour chaque projet."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel langage est principalement utilisé pour l'intelligence artificielle et la data science ?",
      options: ["PHP", "JavaScript", "Python", "Swift"],
      reponse: "Python",
      explication: "Grâce à ses nombreuses bibliothèques comme Pandas ou TensorFlow."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel langage a été créé pour fonctionner sur toutes les machines grâce à sa 'Machine Virtuelle' (JVM) ?",
      options: ["Java", "JavaScript", "C++", "Perl"],
      reponse: "Java",
      explication: "Sa devise est 'Write Once, Run Anywhere'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces frameworks est basé sur TypeScript et créé par Google ?",
      options: ["React", "Angular", "Vue", "Laravel"],
      reponse: "Angular",
      explication: "C'est un framework robuste pour les grandes applications d'entreprise."
    },
    {
      id: "10",
      type: "qcm",
      question: "Que signifie 'HTML' ?",
      options: ["High Text Mark Language", "HyperText Markup Language", "Home Tool Main Line", "Host Table Mobile Link"],
      reponse: "HyperText Markup Language",
      explication: "C'est le langage de structure de base du web."
    }
  ]
};
