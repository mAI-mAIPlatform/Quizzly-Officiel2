import { Quiz } from "@/types/quiz";

export const quiz713: Quiz = {
  id: "713",
  titre: "Français : Le Présent de l'Indicatif ⏰",
  description: "Réviser la conjugaison au présent des verbes des trois groupes.",
  theme: "Français",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "courte",
      question: "Conjugue 'finir' à 'nous' au présent.",
      reponse: "finissons",
      explication: "Les verbes du 2e groupe font -issons à 'nous'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la terminaison de 'tu' au présent pour les verbes en -er ?",
      options: ["-e", "-es", "-s", "-t"],
      reponse: "-es",
      explication: "Exemple : tu manges."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le verbe 'aller' est au 1er groupe.",
      reponse: "Faux",
      explication: "Il finit en -er mais est totalement irrégulier (3e groupe)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment se conjugue 'être' à 'vous' ?",
      options: ["Êtes", "Etes", "Suites", "Êtrent"],
      reponse: "Êtes",
      explication: "On écrit : 'vous êtes'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel est correct ?",
      options: ["Ils font", "Ils faisent", "Ils fontent", "Ils faisez"],
      reponse: "Ils font",
      explication: "Le verbe faire au présent : font."
    },
    {
      id: "6",
      type: "courte",
      question: "Conjugue 'prendre' à 'ils' au présent.",
      reponse: "prennent",
      explication: "On double le 'n'."
    },
    {
      id: "7",
      type: "vrai_faux",
      question: "Le verbe 'dire' fait 'vous disez' au présent.",
      reponse: "Faux",
      explication: "On dit 'vous dites'."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la terminaison de 'on' ?",
      options: ["-s", "-t", "-e", "-e ou -t"],
      reponse: "-e ou -t",
      explication: "Comme il/elle (il mange, il sort)."
    },
    {
      id: "9",
      type: "courte",
      question: "Conjugue 'vouloir' à 'je' au présent.",
      reponse: "veux",
      explication: "La terminaison est -x pour vouloir et pouvoir."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans 'Nous (manger)', faut-il un 'e' avant 'ons' ?",
      options: ["Oui", "Non"],
      reponse: "Oui",
      explication: "Pour faire le son 'j' : mang-e-ons."
    }
  ]
};
