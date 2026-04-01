import { Quiz } from "@/types/quiz";

export const quiz312: Quiz = {
  id: "312",
  titre: "Espace : La Planète Mars 🔴",
  description: "Découvrez les secrets de la planète la plus explorée du système solaire.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle le plus haut volcan du système solaire, situé sur Mars ?",
      options: ["Mont Blanc", "Olympus Mons", "Mauna Kea", "Vésuve"],
      reponse: "Olympus Mons",
      explication: "Il mesure environ 22 km de haut, soit trois fois l'Everest."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien de lunes possède Mars ?",
      options: ["0", "1", "2", "4"],
      reponse: "2",
      explication: "Ses lunes s'appellent Phobos (la peur) et Deimos (la terreur)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel gaz compose majoritairement l'atmosphère martienne ?",
      options: ["Oxygène", "Azote", "Dioxyde de Carbone (CO2)", "Méthane"],
      reponse: "Dioxyde de Carbone (CO2)",
      explication: "L'atmosphère est très fine et composée à 95% de CO2."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle le rover de la NASA arrivé sur Mars en 2021 ?",
      options: ["Curiosity", "Opportunity", "Perseverance", "Spirit"],
      reponse: "Perseverance",
      explication: "Il cherche des traces de vie ancienne dans le cratère Jezero."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la durée approximative d'un jour sur Mars ?",
      options: ["12 heures", "24 heures et 40 minutes", "48 heures", "1 mois"],
      reponse: "24 heures et 40 minutes",
      explication: "Le jour martien est appelé un 'Sol'."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment s'appelait le petit hélicoptère qui a volé sur Mars ?",
      options: ["Ingenuity", "Falcon", "Eagle", "Skycrane"],
      reponse: "Ingenuity",
      explication: "C'est le premier engin motorisé à avoir volé sur une autre planète."
    },
    {
      id: "7",
      type: "qcm",
      question: "Pourquoi Mars est-elle rouge ?",
      options: ["À cause de la chaleur", "À cause de l'oxyde de fer sur sa surface", "À cause de fleurs rouges", "C'est un reflet du Soleil"],
      reponse: "À cause de l'oxyde de fer sur sa surface",
      explication: "Le sol martien est littéralement couvert de poussière de rouille."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle structure géante est le 'Grand Canyon' de Mars ?",
      options: ["Valles Marineris", "Grand Canyon Martien", "faille de San Andreas", "Fosse des Mariannes"],
      reponse: "Valles Marineris",
      explication: "Il s'étend sur plus de 4 000 km de long."
    },
    {
      id: "9",
      type: "qcm",
      question: "Y a-t-il de l'eau sur Mars ?",
      options: ["Non, jamais", "Oui, sous forme de glace aux pôles", "Oui, des océans entiers", "Seulement dans les nuages"],
      reponse: "Oui, sous forme de glace aux pôles",
      explication: "Il y a aussi des preuves que l'eau a coulé à sa surface autrefois."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle est la gravité sur Mars par rapport à la Terre ?",
      options: ["La même", "À peu près 1/3 (38%)", "Le double", "Nulle"],
      reponse: "À peu près 1/3 (38%)",
      explication: "Si vous pesez 100 kg sur Terre, vous n'en feriez que 38 sur Mars."
    }
  ]
};
