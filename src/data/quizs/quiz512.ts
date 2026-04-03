import { Quiz } from "@/types/quiz";

export const quiz512: Quiz = {
  id: "512",
  titre: "Français : Les Homophones (et/est, a/à) ✍️",
  description: "Ne confondez plus les mots qui se prononcent pareil mais s'écrivent différemment.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment choisir entre 'a' et 'à' ?",
      options: ["On remplace par 'avait'", "On remplace par 'et puis'", "On regarde s'il y a un pluriel", "C'est au hasard"],
      reponse: "On remplace par 'avait'",
      explication: "Si on peut dire 'avait', c'est le verbe avoir ('a'). Sinon, c'est la préposition ('à')."
    },
    {
      id: "2",
      type: "qcm",
      question: "Choisissez la bonne forme : 'Paul ... mal ... la tête'.",
      options: ["a / a", "à / a", "a / à", "à / à"],
      reponse: "a / à",
      explication: "Paul AVAIT mal (verbe) À la tête (préposition)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment différencier 'et' et 'est' ?",
      options: ["On remplace 'est' par 'était' et 'et' par 'et puis'", "On ne peut pas", "On regarde le sujet", "On ajoute un -s"],
      reponse: "On remplace 'est' par 'était' et 'et' par 'et puis'",
      explication: "'est' est le verbe être. 'et' est une conjonction de coordination."
    },
    {
      id: "4",
      type: "qcm",
      question: "Complétez : 'Le ciel ... bleu ... étoilé'.",
      options: ["est / est", "et / et", "est / et", "et / est"],
      reponse: "est / et",
      explication: "Le ciel ÉTAIT bleu ET PUIS étoilé."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment choisir entre 'son' et 'sont' ?",
      options: ["On remplace par 'étaient'", "On remplace par 'le sien'", "On remplace 'sont' par 'étaient'", "Toutes ces réponses"],
      reponse: "On remplace 'sont' par 'étaient'",
      explication: "'sont' est le verbe être au pluriel. 'son' est un déterminant possessif."
    },
    {
      id: "6",
      type: "qcm",
      question: "Choisissez : 'Ils ... partis avec ... chien'.",
      options: ["son / sont", "sont / sont", "sont / son", "son / son"],
      reponse: "sont / son",
      explication: "Ils ÉTAIENT partis (verbe) avec LE SIEN (possession)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la règle pour 'ou' et 'où' ?",
      options: ["'où' indique le lieu", "'ou' peut être remplacé par 'ou bien'", "Les deux sont vraies", "Aucune n'est vraie"],
      reponse: "Les deux sont vraies",
      explication: "L'accent grave permet de distinguer le choix ('ou bien') de l'endroit ('où')."
    },
    {
      id: "8",
      type: "qcm",
      question: "Complétez : 'Tu vas ... ?'",
      options: ["ou", "où", "ouh", "hou"],
      reponse: "où",
      explication: "On demande un lieu."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment choisir entre 'on' et 'ont' ?",
      options: ["On remplace 'ont' par 'avaient'", "On remplace 'on' par 'il'", "Les deux sont valables", "C'est impossible"],
      reponse: "Les deux sont valables",
      explication: "'ont' est le verbe avoir (avaient). 'on' est un pronom sujet (il/elle)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Choisissez : '... dit qu'ils ... faim'.",
      options: ["On / ont", "Ont / on", "On / on", "Ont / ont"],
      reponse: "On / ont",
      explication: "IL dit qu'ils AVAIENT faim."
    }
  ]
};
