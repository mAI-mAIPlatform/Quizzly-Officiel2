import { Quiz } from "@/types/quiz";

export const quiz101: Quiz = {
  id: "101",
  titre: "Les Capitales d'Europe 🌍",
  description: "Testez vos connaissances sur les capitales du vieux continent.",
  theme: "Géographie",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la capitale de l'Allemagne ?",
      options: ["Munich", "Berlin", "Hambourg", "Francfort"],
      reponse: "Berlin",
      explication: "Berlin est la capitale de l'Allemagne depuis la réunification en 1990."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle ville est la capitale de l'Espagne ?",
      options: ["Barcelone", "Séville", "Valence", "Madrid"],
      reponse: "Madrid",
      explication: "Madrid est la plus grande ville et la capitale de l'Espagne."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la capitale de l'Italie ?",
      options: ["Milan", "Venise", "Rome", "Naples"],
      reponse: "Rome",
      explication: "Surnommée la 'Ville Éternelle', Rome est la capitale de l'Italie."
    },
    {
      id: "4",
      type: "qcm",
      question: "La capitale de la Pologne est...",
      options: ["Cracovie", "Varsovie", "Gdansk", "Poznan"],
      reponse: "Varsovie",
      explication: "Varsovie est située sur la Vistule, c'est la capitale polonaise."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la capitale de la Suède ?",
      options: ["Oslo", "Helsinki", "Copenhague", "Stockholm"],
      reponse: "Stockholm",
      explication: "Stockholm est construite sur plusieurs îles, c'est la capitale suédoise."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle ville est la capitale du Portugal ?",
      options: ["Porto", "Lisbonne", "Braga", "Coimbra"],
      reponse: "Lisbonne",
      explication: "Lisbonne est la capitale et la plus grande ville du Portugal."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la capitale de l'Autriche ?",
      options: ["Salzbourg", "Linz", "Vienne", "Innsbruck"],
      reponse: "Vienne",
      explication: "Vienne est connue pour son histoire musicale et impériale."
    },
    {
      id: "8",
      type: "qcm",
      question: "La capitale de la Belgique est...",
      options: ["Anvers", "Bruges", "Bruxelles", "Gand"],
      reponse: "Bruxelles",
      explication: "Bruxelles est le siège de nombreuses institutions européennes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la capitale de la Grèce ?",
      options: ["Thessalonique", "Patras", "Héraklion", "Athènes"],
      reponse: "Athènes",
      explication: "Athènes est l'une des plus anciennes villes du monde."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle ville est la capitale des Pays-Bas ?",
      options: ["Rotterdam", "Amsterdam", "La Haye", "Utrecht"],
      reponse: "Amsterdam",
      explication: "Amsterdam est célèbre pour ses canaux et ses musées."
    }
  ]
};
