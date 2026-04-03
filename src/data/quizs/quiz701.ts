import { Quiz } from "@/types/quiz";

export const quiz701: Quiz = {
  id: "701",
  titre: "Maths : Les Nombres Décimaux 🔢",
  description: "Maîtrisez les chiffres après la virgule et les opérations de base.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans le nombre 12,345, quel est le chiffre des centièmes ?",
      options: ["2", "3", "4", "5"],
      reponse: "4",
      explication: "Le premier chiffre après la virgule est les dixièmes (3), le second les centièmes (4)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment écrit-on 'trois unités et sept millièmes' en chiffres ?",
      options: ["3,7", "3,07", "3,007", "3700"],
      reponse: "3,007",
      explication: "Les millièmes sont à la troisième position après la virgule."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est le résultat de 0,5 + 0,7 ?",
      options: ["0,12", "1,2", "0,57", "12"],
      reponse: "1,2",
      explication: "5 dixièmes plus 7 dixièmes égalent 12 dixièmes, soit 1,2."
    },
    {
      id: "4",
      type: "qcm",
      question: "Lequel de ces nombres est le plus grand ?",
      options: ["0,109", "0,2", "0,19", "0,099"],
      reponse: "0,2",
      explication: "0,2 est égal à 0,200, ce qui est supérieur à 0,190 et 0,109."
    },
    {
      id: "5",
      type: "qcm",
      question: "Multipliez 4,5 par 10. Quel est le résultat ?",
      options: ["0,45", "45", "450", "4,50"],
      reponse: "45",
      explication: "Multiplier par 10 décale la virgule d'un rang vers la droite."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est l'inverse de 0,1 ?",
      options: ["1", "10", "0,01", "100"],
      reponse: "10",
      explication: "1 divisé par 0,1 est égal à 10."
    },
    {
      id: "7",
      type: "qcm",
      question: "Divisez 12,6 par 2. Quel est le résultat ?",
      options: ["6,1", "6,3", "6,03", "12,3"],
      reponse: "6,3",
      explication: "La moitié de 12 est 6, et la moitié de 0,6 est 0,3."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est le nombre décimal correspondant à 1/4 ?",
      options: ["0,4", "0,25", "0,14", "1,4"],
      reponse: "0,25",
      explication: "Un quart est égal à 25 centièmes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Arrangez par ordre croissant : 1,2 ; 1,02 ; 1,22.",
      options: ["1,2 < 1,02 < 1,22", "1,02 < 1,2 < 1,22", "1,22 < 1,2 < 1,02", "1,02 < 1,22 < 1,2"],
      reponse: "1,02 < 1,2 < 1,22",
      explication: "1,02 < 1,20 < 1,22."
    },
    {
      id: "10",
      type: "qcm",
      question: "Combien y a-t-il de centièmes dans une unité ?",
      options: ["10", "100", "1000", "1"],
      reponse: "100",
      explication: "Une unité est composée de 100 centièmes."
    }
  ]
};
