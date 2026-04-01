import { Quiz } from "@/types/quiz";

export const quiz200: Quiz = {
  id: "200",
  titre: "Explorateurs de l'Espace 👨‍🚀🚀",
  description: "Testez votre culture sur la conquête spatiale et ses héros.",
  theme: "Culture Générale",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est le premier être humain à être allé dans l'espace en 1961 ?",
      options: ["Neil Armstrong", "Youri Gagarine", "John Glenn", "Thomas Pesquet"],
      reponse: "Youri Gagarine",
      explication: "Ce cosmonaute soviétique a effectué une orbite autour de la Terre."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel astronaute est le premier homme à avoir marché sur la Lune en 1969 ?",
      options: ["Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Alan Shepard"],
      reponse: "Neil Armstrong",
      explication: "Il a prononcé la célèbre phrase : 'C'est un petit pas pour l'homme, un bond de géant pour l'humanité'."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment s'appelle le programme de la NASA qui a permis d'envoyer des hommes sur la Lune ?",
      options: ["SpaceX", "Gemini", "Apollo", "Orion"],
      reponse: "Apollo",
      explication: "C'est la mission Apollo 11 qui a réussi le premier alunissage."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelait la première chienne envoyée dans l'espace par l'URSS ?",
      options: ["Lassie", "Laïka", "Bella", "Belka"],
      reponse: "Laïka",
      explication: "Elle a été envoyée à bord de Spoutnik 2 en 1957."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qui est la première femme à avoir voyagé dans l'espace ?",
      options: ["Valentina Terechkova", "Sally Ride", "Claudie Haigneré", "Peggy Whitson"],
      reponse: "Valentina Terechkova",
      explication: "Elle a volé en 1963 à bord de Vostok 6."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel pays a lancé le premier satellite artificiel, Spoutnik 1, en 1957 ?",
      options: ["USA", "URSS (Russie)", "Chine", "France"],
      reponse: "URSS (Russie)",
      explication: "Cela a marqué le début de la 'course à l'espace'."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle la station spatiale qui tourne autour de la Terre et accueille des astronautes en permanence ?",
      options: ["Mir", "Skylab", "ISS (Station Spatiale Internationale)", "Tiangong"],
      reponse: "ISS (Station Spatiale Internationale)",
      explication: "Elle est le fruit d'une collaboration entre plusieurs pays."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel astronaute français a passé 6 mois dans l'ISS lors de sa mission 'Proxima' ?",
      options: ["Thomas Pesquet", "Jean-Loup Chrétien", "Hubert Reeves", "Thomas Pasquet"],
      reponse: "Thomas Pesquet",
      explication: "Il est devenu très populaire grâce à ses photos de la Terre partagées sur les réseaux sociaux."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on le véhicule qui roule sur la surface d'une autre planète (comme Curiosity sur Mars) ?",
      options: ["Un Rover", "Un Lander", "Un Satellite", "Une Navette"],
      reponse: "Un Rover",
      explication: "Les rovers sont des robots d'exploration télécommandés."
    },
    {
      id: "10",
      type: "qcm",
      question: "Vers quelle planète l'humanité projette-t-elle d'envoyer des hommes dans les prochaines décennies ?",
      options: ["Vénus", "Mars", "Jupiter", "Saturne"],
      reponse: "Mars",
      explication: "L'exploration humaine de Mars est le prochain grand défi de la conquête spatiale."
    }
  ]
};
