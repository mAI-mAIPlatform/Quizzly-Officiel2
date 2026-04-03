import { Quiz } from "@/types/quiz";

export const quiz854: Quiz = {
  id: "854",
  titre: "Espace : Mars, la planète rouge 🔴🌋",
  description: "Explorez la planète qui fascine les scientifiques et les rêveurs.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "De quel dieu romain Mars porte-t-elle le nom ?",
      options: ["Le dieu de la mer", "Le dieu de la guerre", "Le dieu du commerce", "Le roi des dieux"],
      reponse: "Le dieu de la guerre",
      explication: "À cause de sa couleur rouge qui rappelle le sang."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le volcan géant sur Mars, le plus haut du système solaire ?",
      options: ["Le mont Blanc", "L'Olympus Mons", "L'Etna", "Le mont Everest"],
      reponse: "L'Olympus Mons",
      explication: "Il mesure plus de 21 km de haut (3 fois l'Everest !)."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Une journée sur Mars dure presque autant que sur Terre (environ 24h).",
      reponse: "Vrai",
      explication: "On appelle une journée martienne un 'sol'."
    },
    {
      id: "4",
      type: "courte",
      question: "Combien de lunes (satellites) possède la planète Mars ?",
      reponse: "2",
      explication: "Elles s'appellent Phobos et Deimos."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appellent les robots qui roulent sur Mars pour l'étudier ?",
      options: ["Des drônes", "Des rovers", "Des satellites", "Des sondes fixes"],
      reponse: "Des rovers",
      explication: "Exemples : Curiosity, Perseverance ou Opportunity."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'atmosphère de Mars est irrespirable pour l'homme car elle contient surtout du CO2.",
      reponse: "Vrai",
      explication: "Elle est aussi beaucoup plus fine que celle de la Terre."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle température fait-il en moyenne sur Mars ?",
      options: ["-60 °C", "+20 °C", "+100 °C", "-200 °C"],
      reponse: "-60 °C",
      explication: "Il y fait donc très froid, même si elle peut monter à 20°C à l'équateur l'été."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le canyon géant sur Mars, bien plus grand que le Grand Canyon du Colorado ?",
      reponse: "Valles Marineris",
      explication: "Il s'étend sur plus de 4 000 km."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pourquoi les scientifiques cherchent-ils des traces d'eau sur Mars ?",
      options: ["Pour construire des piscines", "Car l'eau est nécessaire à la vie telle que nous la connaissons", "Pour éteindre les volcans", "Pour faire du carburant"],
      reponse: "Car l'eau est nécessaire à la vie telle que nous la connaissons",
      explication: "Si on trouve de l'eau, on pourrait peut-être trouver des traces de vie ancienne."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il y a des calottes polaires de glace sur Mars.",
      reponse: "Vrai",
      explication: "Elles sont composées de glace d'eau et de glace de dioxyde de carbone."
    }
  ]
};
