import { Quiz } from "@/types/quiz";

export const quiz716: Quiz = {
  id: "716",
  titre: "Français : Les Homophones 👂",
  description: "Distinguer les mots qui se prononcent de la même façon mais s'écrivent différemment.",
  theme: "Français",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Complète : 'Il ... faim car il n'... pas déjeuné.'",
      options: ["a / a", "à / à", "a / à", "à / a"],
      reponse: "a / a",
      explication: "On peut dire 'il avait faim', c'est donc le verbe avoir."
    },
    {
      id: "2",
      type: "qcm",
      question: "Complète : '... livre est à ... enfants.'",
      options: ["Ce / ce", "Ce / ces", "Se / ces", "Se / ce"],
      reponse: "Ce / ces",
      explication: "'Ce' est un déterminant singulier, 'ces' est pluriel."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "On écrit 'ou' (sans accent) quand on peut le remplacer par 'ou bien'.",
      reponse: "Vrai",
      explication: "'Ou' exprime le choix, 'où' exprime le lieu."
    },
    {
      id: "4",
      type: "qcm",
      question: "Lequel est correct : 'Ils ... partis.' ?",
      options: ["Sont", "Son", "Sond", "Sont-s"],
      reponse: "Sont",
      explication: "Verbe être au présent."
    },
    {
      id: "5",
      type: "courte",
      question: "Comment écrit-on l'homophone de 'peu' qui s'accorde avec 'je' au verbe pouvoir ?",
      reponse: "peux",
      explication: "Je peux, tu peux."
    },
    {
      id: "6",
      type: "qcm",
      question: "Complète : 'Il est ... tôt pour sortir.'",
      options: ["Trop", "Tro", "Trops", "Trot"],
      reponse: "Trop",
      explication: "L'adverbe s'écrit toujours avec un 'p' final muet."
    },
    {
      id: "7",
      type: "vrai_faux",
      question: "On écrit 'ses' (déterminant possessif) pour dire 'les siens'.",
      reponse: "Vrai",
      explication: "Exemple : 'il range ses affaires'."
    },
    {
      id: "8",
      type: "qcm",
      question: "Complète : 'Il ... lave les mains.'",
      options: ["Se", "Ce", "Ceux", "S'est"],
      reponse: "Se",
      explication: "Pronom réfléchi devant un verbe."
    },
    {
      id: "9",
      type: "courte",
      question: "Quel est l'homophone de 'mer' qui désigne un parent ?",
      reponse: "mère",
      explication: "Mère / Mer / Maire sont homophones."
    },
    {
      id: "10",
      type: "qcm",
      question: "Lequel est correct : 'Elle est ... moi.' ?",
      options: ["Chez", "Ches", "Chait", "Chey"],
      reponse: "Chez",
      explication: "Préposition invariable."
    }
  ]
};
