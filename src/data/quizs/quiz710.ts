import { Quiz } from "@/types/quiz";

export const quiz710: Quiz = {
  id: "710",
  titre: "Maths : Algorithmes et Programmation 💻",
  description: "Découvrez les bases de la logique informatique.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un algorithme ?",
      options: ["Un type d'ordinateur", "Une suite d'instructions précises", "Un site web", "Un virus"],
      reponse: "Une suite d'instructions précises",
      explication: "C'est une recette étape par étape pour résoudre un problème."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans Scratch, quel bloc permet de répéter une action ?",
      options: ["Si... alors", "Boucle", "Variable", "Événement"],
      reponse: "Boucle",
      explication: "Comme 'répéter 10 fois' ou 'répéter indéfiniment'."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on un élément informatique qui stocke une information modulable ?",
      options: ["Une constante", "Une variable", "Un fichier", "Un écran"],
      reponse: "Une variable",
      explication: "Sa valeur peut être modifiée pendant l'exécution du programme."
    },
    {
      id: "4",
      type: "qcm",
      question: "Si 'score = 10' et que je fais 'ajouter 5 au score', que vaut score ?",
      options: ["5", "10", "15", "50"],
      reponse: "15",
      explication: "10 + 5 = 15."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel symbole utilise-t-on souvent en programmation pour tester une égalité ?",
      options: ["=", "==", "!", "=>"],
      reponse: "==",
      explication: "Dans beaucoup de langages (C, JS, Python), '==' sert à comparer."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'arrive-t-il si une condition 'Si... alors' n'est pas remplie ?",
      options: ["Le programme s'arrête", "Le bloc est ignoré", "L'ordinateur redémarre", "Le résultat est vrai"],
      reponse: "Le bloc est ignoré",
      explication: "Si la condition est fausse, le code à l'intérieur ne s'exécute pas."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel langage est très utilisé pour débuter la programmation par blocs au collège ?",
      options: ["Python", "Java", "Scratch", "HTML"],
      reponse: "Scratch",
      explication: "Développé par le MIT, il utilise des blocs visuels."
    },
    {
      id: "8",
      type: "qcm",
      question: "Que signifie 'debugger' un programme ?",
      options: ["Le supprimer", "Ajouter des insectes", "Trouver et corriger les erreurs", "Le traduire en anglais"],
      reponse: "Trouver et corriger les erreurs",
      explication: "Un 'bug' est un défaut dans le code."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans une boucle 'Tant que x < 5', quand l'action s'arrête-t-elle ?",
      options: ["Quand x vaut 0", "Dès que x atteint 5", "Jamais", "Quand x vaut 10"],
      reponse: "Dès que x atteint 5",
      explication: "L'action continue tant que la condition est vraie."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle est la sortie de ce programme : x=2 ; x=x*3 ; Afficher x ?",
      options: ["2", "3", "5", "6"],
      reponse: "6",
      explication: "2 * 3 = 6."
    }
  ]
};
