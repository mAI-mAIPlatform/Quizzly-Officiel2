import { Quiz } from "@/types/quiz";

export const quiz516: Quiz = {
  id: "516",
  titre: "Mathématiques : Nombres Entiers et Décimaux 🔢",
  description: "Révisez la lecture et l'écriture des nombres à virgule.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans le nombre 125,47, quel chiffre représente les dixièmes ?",
      options: ["1", "5", "4", "7"],
      reponse: "4",
      explication: "C'est le premier chiffre après la virgule."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la partie entière de 8,92 ?",
      options: ["8", "92", "0,92", "892"],
      reponse: "8",
      explication: "C'est la partie située avant la virgule."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que signifie le chiffre 7 dans 0,07 ?",
      options: ["Sept dizaines", "Sept dixièmes", "Sept centièmes", "Sept unités"],
      reponse: "Sept centièmes",
      explication: "C'est le deuxième chiffre après la virgule."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment écrit-on 'Douze unités et trois centièmes' ?",
      options: ["12,3", "12,03", "12,003", "123"],
      reponse: "12,03",
      explication: "Il n'y a pas de dixièmes, donc on met un zéro."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces nombres est le plus grand ?",
      options: ["2,5", "2,48", "2,501", "2,059"],
      reponse: "2,501",
      explication: "On compare chiffre par chiffre : les unités (2=2), les dixièmes (5=5), puis les centièmes (0) et les millièmes (1)."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que se passe-t-il si on ajoute un zéro à la fin d'une partie décimale (ex: 4,5 -> 4,50) ?",
      options: ["Le nombre devient 10 fois plus grand", "Le nombre ne change pas de valeur", "Le nombre devient plus petit", "C'est interdit"],
      reponse: "Le nombre ne change pas de valeur",
      explication: "Ce sont des zéros inutiles."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel nombre vient juste après 9,9 s'il on compte de dixième en dixième ?",
      options: ["9,10", "10", "10,1", "9,99"],
      reponse: "10",
      explication: "9,9 + 0,1 = 10,0."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est l'écriture fractionnaire de 0,5 ?",
      options: ["5/10 (ou 1/2)", "5/100", "50/10", "1/5"],
      reponse: "5/10 (ou 1/2)",
      explication: "Cinq dixièmes."
    },
    {
      id: "9",
      type: "qcm",
      question: "L'abscisse d'un point sur une droite graduée est :",
      options: ["Sa couleur", "Sa position (le nombre qui lui correspond)", "Son nom", "Sa longueur"],
      reponse: "Sa position (le nombre qui lui correspond)",
      explication: "C'est la valeur numérique de son emplacement."
    },
    {
      id: "10",
      type: "qcm",
      question: "Combien y a-t-il de centièmes dans une unité ?",
      options: ["10", "100", "1 000", "0,1"],
      reponse: "100",
      explication: "Une unité = 1,00."
    }
  ]
};
