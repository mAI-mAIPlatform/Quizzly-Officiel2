import { Quiz } from "@/types/quiz";

export const quiz102: Quiz = {
  id: "102",
  titre: "Exploration Spatiale 🚀",
  description: "Partez à la conquête des étoiles et du système solaire.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle planète est surnommée la planète rouge ?",
      options: ["Vénus", "Mars", "Jupiter", "Saturne"],
      reponse: "Mars",
      explication: "Mars doit sa couleur rouge à l'oxyde de fer (rouille) à sa surface."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui fut le premier homme dans l'espace ?",
      options: ["Neil Armstrong", "Buzz Aldrin", "Youri Gagarine", "John Glenn"],
      reponse: "Youri Gagarine",
      explication: "Le Soviétique Youri Gagarine a effectué le premier vol spatial humain en 1961."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la plus grande planète du système solaire ?",
      options: ["Saturne", "Neptune", "Jupiter", "Uranus"],
      reponse: "Jupiter",
      explication: "Jupiter est une géante gazeuse, la plus massive des planètes."
    },
    {
      id: "4",
      type: "qcm",
      question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
      options: ["1965", "1969", "1972", "1959"],
      reponse: "1969",
      explication: "Neil Armstrong a marché sur la Lune le 21 juillet 1969 (mission Apollo 11)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle étoile est au centre de notre système solaire ?",
      options: ["Sirius", "Véga", "Le Soleil", "Proxima Centauri"],
      reponse: "Le Soleil",
      explication: "Le Soleil est l'étoile autour de laquelle gravitent la Terre et les autres planètes."
    },
    {
      id: "6",
      type: "qcm",
      question: "Combien de planètes composent le système solaire ?",
      options: ["7", "8", "9", "10"],
      reponse: "8",
      explication: "Depuis 2006, Pluton n'est plus considérée comme une planète majeure."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle planète possède des anneaux très visibles ?",
      options: ["Mars", "Jupiter", "Saturne", "Mercure"],
      reponse: "Saturne",
      explication: "Les anneaux de Saturne sont composés de glace et de poussière."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la galaxie la plus proche de la Voie Lactée ?",
      options: ["Andromède", "Sombrero", "Tourbillon", "Centaure"],
      reponse: "Andromède",
      explication: "Andromède est une galaxie spirale géante située à environ 2,5 millions d'années-lumière."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel instrument utilise-t-on pour observer les étoiles ?",
      options: ["Microscope", "Télescope", "Stéthoscope", "Périscope"],
      reponse: "Télescope",
      explication: "Le télescope permet d'agrandir les objets lointains de l'espace."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle planète est la plus proche du Soleil ?",
      options: ["Vénus", "Terre", "Mercure", "Mars"],
      reponse: "Mercure",
      explication: "Mercure est la planète la plus proche du Soleil, très chaude le jour et froide la nuit."
    }
  ]
};
