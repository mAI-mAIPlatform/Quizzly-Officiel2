import { Quiz } from "@/types/quiz";

export const quiz776: Quiz = {
  id: "776",
  titre: "Histoire de l'Informatique 📜",
  description: "De la machine à calculer aux smartphones modernes.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui a inventé la première machine à calculer mécanique (la Pascaline) ?",
      options: ["Blaise Pascal", "Albert Einstein", "Louis XIV", "Isaac Newton"],
      reponse: "Blaise Pascal",
      explication: "En 1642, pour aider son père percepteur d'impôts."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel mathématicien anglais est considéré comme le père de l'informatique moderne (pendant la 2ème Guerre Mondiale) ?",
      options: ["Alan Turing", "Charles Darwin", "Stephen Hawking", "Richard Feynman"],
      reponse: "Alan Turing",
      explication: "Il a décrypté la machine Enigma et défini le concept d'ordinateur universel."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les premiers ordinateurs étaient si gros qu'ils occupaient une pièce entière.",
      reponse: "Vrai",
      explication: "Comme l'ENIAC en 1945, qui pesait 30 tonnes !"
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelait le premier ordinateur personnel d'Apple (sorti en 1984) ?",
      reponse: "Macintosh",
      explication: "Ou simplement 'Mac'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qui a fondé l'entreprise Microsoft ?",
      options: ["Bill Gates", "Steve Jobs", "Elon Musk", "Jeff Bezos"],
      reponse: "Bill Gates",
      explication: "Avec son ami Paul Allen en 1975."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La souris a été inventée par Apple.",
      reponse: "Faux",
      explication: "Elle a été inventée au centre de recherche Xerox PARC, Apple l'a popularisée."
    },
    {
      id: "7",
      type: "qcm",
      question: "En quelle année est né le premier iPhone, révolutionnant les smartphones ?",
      options: ["1997", "2007", "2012", "2017"],
      reponse: "2007",
      explication: "Présenté par Steve Jobs."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le réseau qui a précédé Internet dans les années 60 ?",
      reponse: "ARPANET",
      explication: "Un projet militaire américain pour relier les universités."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces inventeurs est français et a créé le Minitel ?",
      options: ["Jean-Pierre Brard", "Les ingénieurs des Télécoms (France Télécom)", "Léonard de Vinci", "Darty"],
      reponse: "Les ingénieurs des Télécoms (France Télécom)",
      explication: "Le Minitel était l'ancêtre du Web en France (1982)."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le premier message envoyé sur Internet était 'LOGIN'.",
      reponse: "Vrai",
      explication: "Mais l'ordinateur a planté après les deux premières lettres 'LO' !"
    }
  ]
};
