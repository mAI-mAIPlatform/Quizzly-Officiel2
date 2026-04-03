import { Quiz } from "@/types/quiz";

export const quiz706: Quiz = {
  id: "706",
  titre: "Maths : Les Probabilités de base 🎲",
  description: "Calculez vos chances de réussite dans des situations de hasard.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la probabilité d'obtenir 'Face' en lançant une pièce de monnaie équilibrée ?",
      options: ["1/4", "1/2", "1", "0"],
      reponse: "1/2",
      explication: "Il y a 2 issues possibles (Pile ou Face) et elles sont équiprobables."
    },
    {
      id: "2",
      type: "qcm",
      question: "Si la probabilité qu'il pleuve est de 30%, quelle est la probabilité qu'il ne pleuve pas ?",
      options: ["30%", "70%", "100%", "50%"],
      reponse: "70%",
      explication: "100% - 30% = 70%."
    },
    {
      id: "3",
      type: "qcm",
      question: "Sur un dé à 6 faces, quelle est la probabilité d'obtenir un 5 ?",
      options: ["1/2", "1/6", "5/6", "1/5"],
      reponse: "1/6",
      explication: "Il n'y a qu'une seule face portant le chiffre 5 sur 6 faces au total."
    },
    {
      id: "4",
      type: "qcm",
      question: "Un événement qui a une probabilité de 1 est dit ?",
      options: ["Possible", "Impossible", "Certain", "Aléatoire"],
      reponse: "Certain",
      explication: "P=1 signifie que l'événement se produira forcément."
    },
    {
      id: "5",
      type: "qcm",
      question: "Un événement qui a une probabilité de 0 est dit ?",
      options: ["Rare", "Impossible", "Nul", "Écarté"],
      reponse: "Impossible",
      explication: "P=0 signifie que l'événement ne peut jamais arriver."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans une urne contenant 3 boules rouges et 2 boules vertes, quelle est la probabilité de tirer une boule rouge ?",
      options: ["1/2", "3/5", "2/5", "3/2"],
      reponse: "3/5",
      explication: "Nombre de cas favorables (3) sur nombre total de cas (3+2=5)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Si on lance un dé, quelle est la probabilité d'obtenir un nombre pair ?",
      options: ["1/6", "1/2", "1/3", "3/2"],
      reponse: "1/2",
      explication: "Les nombres pairs sont 2, 4, 6 (3 issues sur 6), soit 3/6 = 1/2."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la somme totale des probabilités d'un événement aléatoire ?",
      options: ["0,5", "1", "100", "Infini"],
      reponse: "1",
      explication: "La somme des probabilités de toutes les issues doit toujours être égale à 1 (ou 100%)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Une expérience dont on ne peut pas prédire le résultat à l'avance est dite ?",
      options: ["Déterminée", "Aléatoire", "Complexe", "Fictive"],
      reponse: "Aléatoire",
      explication: "C'est la définition même du hasard."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans un jeu de 52 cartes, quelle est la probabilité de tirer l'As de Pique ?",
      options: ["1/52", "4/52", "1/13", "1/4"],
      reponse: "1/52",
      explication: "Il n'y a qu'un seul As de Pique dans le paquet."
    }
  ]
};
