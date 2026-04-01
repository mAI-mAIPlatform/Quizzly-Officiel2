import { Quiz } from "@/types/quiz";

export const quiz503: Quiz = {
  id: "503",
  titre: "Français : L'Imparfait de l'Indicatif 🕰️",
  description: "Maîtrisez les terminaisons du passé habitude ou description.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la terminaison commune à 'Je' et 'Tu' à l'imparfait ?",
      options: ["-ai", "-ais", "-ait", "-as"],
      reponse: "-ais",
      explication: "Exemple : Je chantais, tu chantais."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la terminaison de 'Il/Elle/On' à l'imparfait ?",
      options: ["-ais", "-ait", "-aient", "-as"],
      reponse: "-ait",
      explication: "Exemple : Elle finissait."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment écrit-on 'Nous' avec le verbe 'Manger' à l'imparfait ?",
      options: ["Nous mangeons", "Nous mangions", "Nous mangeions", "Nous mangeaient"],
      reponse: "Nous mangions",
      explication: "On n'ajoute pas de 'e' ici car le 'i' suffit à rendre le 'g' doux."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est la terminaison de 'Ils/Elles' à l'imparfait ?",
      options: ["-ent", "-ont", "-aient", "-ait"],
      reponse: "-aient",
      explication: "Exemple : Ils regardaient."
    },
    {
      id: "5",
      type: "qcm",
      question: "Conjuguez 'Vous' avec le verbe 'Faire' à l'imparfait :",
      options: ["Vous faisez", "Vous faisiez", "Vous faites", "Vous faisaient"],
      reponse: "Vous faisiez",
      explication: "On prend le radical de 'nous faisons' + -iez."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est l'infinitif de 'Elle était' ?",
      options: ["Être", "Avoir", "Éter", "Aller"],
      reponse: "Être",
      explication: "Le verbe être à l'imparfait : j'étais, tu étais, il était..."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment conjugue-t-on 'Il' pour le verbe 'Avoir' à l'imparfait ?",
      options: ["Il avait", "Il avait", "Il avais", "Il aura"],
      reponse: "Il avait",
      explication: "J'avais, tu avais, il avait."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la terminaison de 'Vous' à l'imparfait ?",
      options: ["-ez", "-iez", "-ais", "-ions"],
      reponse: "-iez",
      explication: "Exemple : Vous partiez."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans quel cas utilise-t-on l'imparfait ?",
      options: ["Pour une action brève au passé", "Pour une description ou une habitude au passé", "Pour le futur", "Pour donner un ordre"],
      reponse: "Pour une description ou une habitude au passé",
      explication: "C'est le temps des contes ('Il était une fois') et des souvenirs."
    },
    {
      id: "10",
      type: "qcm",
      question: "Conjuguez 'Nous' avec le verbe 'Crier' à l'imparfait :",
      options: ["Nous crions", "Nous criions", "Nous crierons", "Nous criaient"],
      reponse: "Nous criions",
      explication: "Il y a bien deux 'i' : celui du radical (cri-) et celui de la terminaison (-ions)."
    }
  ]
};
