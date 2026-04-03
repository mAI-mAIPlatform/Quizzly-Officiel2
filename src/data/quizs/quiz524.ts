import { Quiz } from "@/types/quiz";

export const quiz524: Quiz = {
  id: "524",
  titre: "Mathématiques : Calcul Mental Rapide ⚡",
  description: "Astuces pour multiplier et diviser par 10, 100, 1000 sans poser l'opération.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Pour multiplier un nombre entier par 10, on ajoute :",
      options: ["Un zéro à droite", "Deux zéros à droite", "Une virgule", "10 au début"],
      reponse: "Un zéro à droite",
      explication: "Exemple : 45 x 10 = 450."
    },
    {
      id: "2",
      type: "qcm",
      question: "Pour multiplier un nombre décimal par 100, on déplace la virgule :",
      options: ["D'un rang vers la gauche", "De deux rangs vers la droite", "De deux rangs vers la gauche", "On ne la déplace pas"],
      reponse: "De deux rangs vers la droite",
      explication: "Exemple : 1,25 x 100 = 125."
    },
    {
      id: "3",
      type: "qcm",
      question: "Diviser un nombre par 10 revient à déplacer la virgule :",
      options: ["D'un rang vers la gauche", "D'un rang vers la droite", "De deux rangs vers la gauche", "On l'enlève"],
      reponse: "D'un rang vers la gauche",
      explication: "Exemple : 52 / 10 = 5,2."
    },
    {
      id: "4",
      type: "qcm",
      question: "Combien font 0,8 x 1000 ?",
      options: ["8", "80", "800", "8000"],
      reponse: "800",
      explication: "On déplace la virgule de 3 rangs vers la droite : 0,8 -> 8 -> 80 -> 800."
    },
    {
      id: "5",
      type: "qcm",
      question: "Multiplier par 0,5 revient à faire quelle opération ?",
      options: ["Multiplier par 2", "Diviser par 2", "Ajouter 5", "Diviser par 10"],
      reponse: "Diviser par 2",
      explication: "0,5 = 1/2. Multiplier par la moitié revient à diviser par deux."
    },
    {
      id: "6",
      type: "qcm",
      question: "Diviser par 0,1 revient à :",
      options: ["Multiplier par 10", "Diviser par 10", "Multiplier par 100", "Soustraire 10"],
      reponse: "Multiplier par 10",
      explication: "Diviser par un dixième, c'est comme multiplier par l'inverse (10)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Multiplier par 25, une astuce est de :",
      options: ["Multiplier par 100 puis diviser par 4", "Multiplier par 10 puis ajouter 15", "Multiplier par 2 et c'est fini", "Multiplier par 5 deux fois"],
      reponse: "Multiplier par 100 puis diviser par 4",
      explication: "25 = 100 / 4. C'est souvent plus rapide mentalement."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment calculer rapidement 19 x 5 ?",
      options: ["Faire (20 x 5) - 5", "Faire (20 x 5) + 5", "Faire 10 x 9", "C'est impossible de tête"],
      reponse: "Faire (20 x 5) - 5",
      explication: "100 - 5 = 95."
    },
    {
      id: "9",
      type: "qcm",
      question: "Multiplier par 4, c'est :",
      options: ["Multiplier par 2 puis encore par 2", "Multiplier par 10 puis diviser par 2", "Ajouter 4", "Multiplier par 8"],
      reponse: "Multiplier par 2 puis encore par 2",
      explication: "C'est le double du double."
    },
    {
      id: "10",
      type: "qcm",
      question: "Combien font 4000 / 100 ?",
      options: ["4", "40", "400", "0,4"],
      reponse: "40",
      explication: "On enlève deux zéros."
    }
  ]
};
