import { Quiz } from "@/types/quiz";

export const quiz767: Quiz = {
  id: "767",
  titre: "Santé : L'Hygiène Dentaire 🦷",
  description: "Garder un sourire éclatant et des dents en bonne santé.",
  theme: "Santé",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de fois par jour est-il recommandé de se brosser les dents ?",
      options: ["1 fois par semaine", "1 fois par jour", "Au moins 2 fois par jour", "Seulement le dimanche"],
      reponse: "Au moins 2 fois par jour",
      explication: "Matin et soir, pendant 2 à 3 minutes."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qu'est-ce qu'une carie ?",
      options: ["Un trou dans la dent causé par des bactéries", "Une tache de chocolat", "Une nouvelle dent qui pousse", "Un bijou dentaire"],
      reponse: "Un trou dans la dent causé par des bactéries",
      explication: "Les bactéries transforment le sucre en acide qui attaque l'émail."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Il faut changer sa brosse à dents tous les 3 mois environ.",
      reponse: "Vrai",
      explication: "Ou dès que les poils sont usés, pour garder un brossage efficace."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le médecin spécialiste des dents ?",
      reponse: "Dentiste",
      explication: "Il faut aller le voir au moins une fois par an pour un contrôle."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle substance contenue dans le dentifrice aide à renforcer l'émail ?",
      options: ["Le sucre", "Le sel", "Le fluor", "Le fer"],
      reponse: "Le fluor",
      explication: "Le fluor rend les dents plus résistantes aux acides."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Les premières dents qui tombent s'appellent les 'dents de lait'.",
      reponse: "Vrai",
      explication: "Elles sont remplacées par les dents définitives."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel aliment est le plus dangereux pour les dents ?",
      options: ["La pomme", "Les bonbons collants", "Le pain", "Le fromage"],
      reponse: "Les bonbons collants",
      explication: "Le sucre reste collé aux dents et nourrit les bactéries."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le dépôt blanchâtre qui se forme sur les dents après manger ?",
      reponse: "Plaque dentaire",
      explication: "C'est elle qu'il faut éliminer avec la brosse."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel accessoire peut-on utiliser pour nettoyer entre les dents ?",
      options: ["Un cure-dent en bois", "Du fil dentaire", "Une fourchette", "Ses ongles"],
      reponse: "Du fil dentaire",
      explication: "Indispensable là où la brosse ne passe pas."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Si on n'a pas mal, ce n'est pas la peine d'aller chez le dentiste.",
      reponse: "Faux",
      explication: "Beaucoup de problèmes (comme les débuts de caries) ne font pas mal au début."
    }
  ]
};
