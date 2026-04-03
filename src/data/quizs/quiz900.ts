import { Quiz } from "@/types/quiz";

export const quiz900: Quiz = {
  id: "900",
  titre: "France : L'Outre-mer 🌴🐢",
  description: "Voyagez vers les territoires français situés aux quatre coins des océans.",
  theme: "Géographie",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces territoires est une île française située dans les Antilles (Caraïbes) ?",
      options: ["La Réunion", "La Guadeloupe", "Mayotte", "Tahiti"],
      reponse: "La Guadeloupe",
      explication: "Elle a la forme d'un papillon."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel territoire français se trouve en Amérique du Sud et abrite une immense forêt amazonienne ?",
      options: ["La Guyane", "La Martinique", "La Nouvelle-Calédonie", "Saint-Pierre-et-Miquelon"],
      reponse: "La Guyane",
      explication: "C'est par là que décollent les fusées Ariane (base de Kourou)."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'île de la Réunion possède un volcan encore actif appelé 'Le Piton de la Fournaise'.",
      reponse: "Vrai",
      explication: "Il entre souvent en éruption pour le spectacle des habitants et touristes."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'archipel célèbre du Pacifique dont la capitale est Papeete ?",
      reponse: "Polynésie française",
      explication: "Il est composé de 118 îles magnifiques."
    },
    {
      id: "5",
      type: "qcm",
      question: "Où se trouve Mayotte, l'archipel français célèbre pour son magnifique lagon ?",
      options: ["Dans l'océan Pacifique", "Dans l'océan Indien", "Dans l'océan Atlantique", "Dans la mer du Nord"],
      reponse: "Dans l'océan Indien",
      explication: "Mayotte est située entre l'Afrique et Madagascar."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Les habitants de l'Outre-mer sont des citoyens français comme ceux de la métropole.",
      reponse: "Vrai",
      explication: "Ils votent aux mêmes élections et utilisent l'Euro."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel territoire français est situé près du Canada et connaît des hivers très froids avec de la glace ?",
      options: ["Mayotte", "Saint-Pierre-et-Miquelon", "La Martinique", "La Réunion"],
      reponse: "Saint-Pierre-et-Miquelon",
      explication: "C'est l'un des plus petits territoires d'outre-mer."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'île française en forme de cœur située dans les Antilles, près de la Guadeloupe ?",
      reponse: "Martinique",
      explication: "On l'appelle aussi l'île aux fleurs."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel territoire du Pacifique est célèbre pour son lagon, le deuxième plus long au monde ?",
      options: ["Tahiti", "La Nouvelle-Calédonie", "Wallis et Futuna", "Saint-Barthélemy"],
      reponse: "La Nouvelle-Calédonie",
      explication: "Elle possède une barrière de corail extraordinaire."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Quand il est midi à Paris, il fait aussi midi à la Réunion ou aux Antilles.",
      reponse: "Faux",
      explication: "À cause de la rotation de la Terre, il existe de grands décalages horaires entre la métropole et l'Outre-mer."
    }
  ]
};
