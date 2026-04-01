import { Quiz } from "@/types/quiz";

export const quiz269: Quiz = {
  id: "269",
  titre: "Mercure et Vénus 🌡️🌑",
  description: "Testez votre connaissance sur les deux planètes les plus proches du Soleil.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la planète la plus proche du Soleil ?",
      options: ["Vénus", "Mercure", "La Terre", "Mars"],
      reponse: "Mercure",
      explication: "Elle orbite très vite autour du Soleil (en 88 jours seulement)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle planète est la plus chaude du Système Solaire, bien qu'elle ne soit pas la plus proche du Soleil ?",
      options: ["Mercure", "Vénus", "Jupiter", "Le Soleil"],
      reponse: "Vénus",
      explication: "Vénus subit un effet de serre extrême à cause de son atmosphère très épaisse."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel surnom donne-t-on souvent à Vénus à cause de son éclat intense dans le ciel ?",
      options: ["La Planète Rouge", "L'Étoile du Berger", "L'Étoile du Nord", "La Planète Bleue"],
      reponse: "L'Étoile du Berger",
      explication: "C'est l'objet le plus brillant du ciel après le Soleil et la Lune."
    },
    {
      id: "4",
      type: "qcm",
      question: "À quoi ressemble la surface de Mercure ?",
      options: ["À l'Océan", "À celle de la Lune (couverte de cratères)", "À une forêt tropicale", "Elle est liquide"],
      reponse: "À celle de la Lune (couverte de cratères)",
      explication: "Comme elle n'a presque pas d'atmosphère, elle n'est pas protégée des impacts d'astéroïdes."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle particularité possède la rotation de Vénus ?",
      options: ["Elle tourne très vite", "Elle tourne dans le sens inverse des autres planètes", "Elle ne tourne pas", "Elle change de sens"],
      reponse: "Elle tourne dans le sens inverse des autres planètes",
      explication: "C'est une rotation dite 'rétrograde'."
    },
    {
      id: "6",
      type: "qcm",
      question: "Combien de lunes possèdent Mercure et Vénus ?",
      options: ["Une chacune", "Aucune lune", "Deux chacune", "Mercure en a une, Vénus aucune"],
      reponse: "Aucune lune",
      explication: "Ce sont les deux seules planètes du système solaire sans aucun satellite naturel."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle sonde spatiale a survolé Mercure de très près récemment ?",
      options: ["BepiColombo", "Voyager 1", "Cassini", "Curiosity"],
      reponse: "BepiColombo",
      explication: "C'est une mission conjointe euro-japonaise."
    },
    {
      id: "8",
      type: "qcm",
      question: "De quoi est principalement composée l'atmosphère de Vénus ?",
      options: ["D'Oxygène", "De Dioxyde de carbone (CO2)", "D'Azote", "De Méthane"],
      reponse: "De Dioxyde de carbone (CO2)",
      explication: "Elle contient aussi des nuages d'acide sulfurique."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est environ la température à la surface de Vénus ?",
      options: ["100 °C", "460 °C", "1000 °C", "-50 °C"],
      reponse: "460 °C",
      explication: "C'est suffisant pour faire fondre du plomb !"
    },
    {
      id: "10",
      type: "qcm",
      question: "Pourquoi Mercure connaît-elle des écarts de température extrêmes (entre -170°C la nuit et 430°C le jour) ?",
      options: ["Parce qu'elle tourne trop vite", "À cause de l'absence d'atmosphère pour retenir la chaleur", "C'est un mystère", "À cause de volcans de glace"],
      reponse: "À cause de l'absence d'atmosphère pour retenir la chaleur",
      explication: "Sans atmosphère, la chaleur s'échappe immédiatement dans l'espace dès qu'il fait nuit."
    }
  ]
};
