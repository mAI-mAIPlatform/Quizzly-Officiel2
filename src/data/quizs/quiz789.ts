import { Quiz } from "@/types/quiz";

export const quiz789: Quiz = {
  id: "789",
  titre: "Culture : Expressions Idiomatiques 🇫🇷",
  description: "Saurez-vous deviner le sens caché de ces expressions françaises ?",
  theme: "Culture Générale",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie 'Avoir la main verte' ?",
      options: ["S'être mis de la peinture sur les doigts", "Être doué pour le jardinage", "Vouloir de l'argent", "Être très coléreux"],
      reponse: "Être doué pour le jardinage",
      explication: "On l'utilise pour quelqu'un qui fait bien pousser les plantes."
    },
    {
      id: "2",
      type: "qcm",
      question: "Que signifie 'Donner sa langue au chat' ?",
      options: ["Vouloir nourrir son animal", "Renoncer à trouver la solution d'une devinette", "Devenir muet", "Avoir mangé du poisson"],
      reponse: "Renoncer à trouver la solution d'une devinette",
      explication: "On avoue qu'on ne sait pas."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'expression 'Pleurer comme une madeleine' signifie pleurer beaucoup.",
      reponse: "Vrai",
      explication: "L'origine vient probablement de Marie-Madeleine dans la Bible."
    },
    {
      id: "4",
      type: "courte",
      question: "Quelle expression utilise-t-on pour dire qu'on se lève très tôt ? 'Se lever aux ...'",
      reponse: "aurores",
      explication: "Ou se lever avec les poules."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que signifie 'Casser du sucre sur le dos de quelqu'un' ?",
      options: ["Préparer un gâteau", "Dire du mal d'une personne en son absence", "Faire une blague", "Aider quelqu'un à porter ses courses"],
      reponse: "Dire du mal d'une personne en son absence",
      explication: "C'est médire."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: " 'Être dans les choux' signifie être le premier d'une course.",
      reponse: "Faux",
      explication: "Cela signifie au contraire être dernier, avoir échoué ou être fatigué."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que fait-on si on 'Tourne autour du pot' ?",
      options: ["On cuisine une soupe", "On hésite à dire les choses directement", "On fait du sport", "On cherche ses clés"],
      reponse: "On hésite à dire les choses directement",
      explication: "On ne va pas droit au but."
    },
    {
      id: "8",
      type: "courte",
      question: "Quelle expression signifie qu'on ne sait pas quoi dire ? 'Avoir un ... dans la gorge'",
      reponse: "chat",
      explication: "Cela peut aussi signifier qu'on a la voix enrouée."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que veut dire 'Tomber dans les pommes' ?",
      options: ["Aller faire les récoltes", "S'évanouir", "Avoir faim", "Faire une bêtise"],
      reponse: "S'évanouir",
      explication: "Perdre connaissance."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: " 'Mettre son grain de sel' signifie donner son avis même quand on ne nous le demande pas.",
      reponse: "Vrai",
      explication: "Intervenir dans une discussion."
    }
  ]
};
