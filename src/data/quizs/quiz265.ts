import { Quiz } from "@/types/quiz";

export const quiz265: Quiz = {
  id: "265",
  titre: "Objets de l'Espace 🛰️🔭",
  description: "Télescopes, fusées et sondes... Découvrez les outils qui nous permettent d'explorer l'univers.",
  theme: "Culture Générale",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel instrument optique permet d'observer les objets très lointains dans l'espace ?",
      options: ["Le Microscope", "Le Télescope", "Le Périscope", "Le Stéthoscope"],
      reponse: "Le Télescope",
      explication: "Il existe des télescopes au sol et d'autres envoyés dans l'espace."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le plus puissant télescope spatial actuel (lancé en 2021) ?",
      options: ["Hubble", "James Webb", "Kepler", "Galileo"],
      reponse: "James Webb",
      explication: "Il permet de voir les premières galaxies formées après le Big Bang."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel véhicule est nécessaire pour transporter des satellites ou des astronautes hors de l'atmosphère ?",
      options: ["Un Avion de ligne", "Une Fusée", "Un Sous-marin", "Une Montgolfière"],
      reponse: "Une Fusée",
      explication: "Elle doit atteindre une vitesse immense (7,9 km/s) pour rester en orbite."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle la station où vivent et travaillent des astronautes en permanence autour de la Terre ?",
      options: ["L'ISS (Station Spatiale Internationale)", "L'Étoile de la Mort", "Apollo", "Mir 2"],
      reponse: "L'ISS (Station Spatiale Internationale)",
      explication: "Elle fait le tour de la Terre en 90 minutes environ."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel objet sans équipage est envoyé vers d'autres planètes pour prendre des photos et faire des analyses ?",
      options: ["Un Satellite", "Une Sonde spatiale", "Une Navette", "Un Rover"],
      reponse: "Une Sonde spatiale",
      explication: "Les sondes comme Voyager ou Cassini ont exploré les planètes géantes."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on le petit véhicule motorisé qui roule sur la surface d'une autre planète (comme Mars) ?",
      options: ["Un Drone", "Un Rover", "Un Buggy", "Un Module"],
      reponse: "Un Rover",
      explication: "Les rovers Curiosity et Perseverance arpentent actuellement le sol martien."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un satellite artificiel ?",
      options: ["Une petite étoile", "Un objet fabriqué par l'homme qui tourne autour d'un astre", "Un déchet de l'espace", "Une planète naine"],
      reponse: "Un objet fabriqué par l'homme qui tourne autour d'un astre",
      explication: "Ils servent pour le GPS, la météo, la télévision ou l'observation."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel combustible particulier utilisent souvent les fusées ?",
      options: ["Du charbon", "De l'oxygène et de l'hydrogène liquides", "De l'essence", "Du bois"],
      reponse: "De l'oxygène et de l'hydrogène liquides",
      explication: "Ces ergols produisent une poussée énorme lors de leur combustion."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelaient les navettes spatiales américaines qui pouvaient atterrir comme des avions ?",
      options: ["SpaceX", "Space Shuttle", "Ariane", "Soyouz"],
      reponse: "Space Shuttle",
      explication: "Elles ont été utilisées de 1981 à 2011."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qu'est-ce que l'Airglass (ou Aerogel) souvent utilisé dans l'espace ?",
      options: ["Un type de verre blindé", "Un matériau ultra-léger isolant (la fumée solide)", "Un gaz respirable", "Un carburant"],
      reponse: "Un matériau ultra-léger isolant (la fumée solide)",
      explication: "Il protège les instruments des températures extrêmes de l'espace."
    }
  ]
};
