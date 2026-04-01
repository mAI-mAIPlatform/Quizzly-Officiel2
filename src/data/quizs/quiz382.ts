import { Quiz } from "@/types/quiz";

export const quiz382: Quiz = {
  id: "382",
  titre: "Astronomie : Les Exoplanètes 🪐🌌",
  description: "À la recherche de mondes lointains et de vie ailleurs.",
  theme: "Sciences",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une exoplanète ?",
      options: ["Une planète naine", "Une planète située en dehors de notre système solaire", "Une planète sans atmosphère", "Une lune qui ressemble à une planète"],
      reponse: "Une planète située en dehors de notre système solaire",
      explication: "Elle tourne autour d'une autre étoile que le Soleil."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quand a été découverte la toute première exoplanète autour d'une étoile semblable au Soleil (51 Pegasi b) ?",
      options: ["1969", "1980", "1995", "2010"],
      reponse: "1995",
      explication: "Découverte par Michel Mayor et Didier Queloz, qui ont reçu le prix Nobel pour cela."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'appelle-t-on la 'Zone d'habitabilité' (ou zone Boucles d'or) ?",
      options: ["La zone où il y a de l'oxygène", "La distance idéale d'une étoile où l'eau peut exister sous forme liquide à la surface", "La zone la plus proche de l'étoile", "La zone où il y a des extraterrestres"],
      reponse: "La distance idéale d'une étoile où l'eau peut exister sous forme liquide à la surface",
      explication: "Ni trop chaud, ni trop froid."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel télescope spatial de la NASA a découvert des milliers d'exoplanètes par la méthode du transit ?",
      options: ["Hubble", "Kepler", "Spitzer", "Webb"],
      reponse: "Kepler",
      explication: "Il a surveillé la luminosité de plus de 150 000 étoiles."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'une exoplanète 'Jupiter chaud' ?",
      options: ["Une planète en feu", "Une géante gazeuse très proche de son étoile", "Une étoile déguisée en planète", "Le Soleil"],
      reponse: "Une géante gazeuse très proche de son étoile",
      explication: "Elles sont très faciles à détecter car elles perturbent beaucoup leur étoile."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle méthode de détection consiste à observer la légère baisse de luminosité d'une étoile quand une planète passe devant ?",
      options: ["Méthode du transit", "Vitesse radiale", "Imagerie directe", "Microlentille"],
      reponse: "Méthode du transit",
      explication: "C'est comme une mini-éclipse."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on les planètes qui ne tournent autour d'aucune étoile et errent seules dans l'espace ?",
      options: ["Planètes fantômes", "Planètes errantes (ou orphelines)", "Planètes noires", "Astéroïdes géants"],
      reponse: "Planètes errantes (ou orphelines)",
      explication: "Elles ont probablement été éjectées de leur système d'origine."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel système stellaire proche possède 7 planètes rocheuses de la taille de la Terre ?",
      options: ["Alpha Centauri", "TRAPPIST-1", "Sirius", "Proxima Centauri"],
      reponse: "TRAPPIST-1",
      explication: "C'est l'un des systèmes les plus étudiés pour la recherche de vie."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est l'exoplanète la plus proche de la Terre ?",
      options: ["Proxima Centauri b", "Kepler-186f", "Mars", "Alpha b"],
      reponse: "Proxima Centauri b",
      explication: "Elle se trouve à environ 4,2 années-lumière de nous."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel grand télescope spatial lancé en 2021 peut 'voir' la composition de l'atmosphère des exoplanètes ?",
      options: ["Hubble", "James Webb (JWST)", "Gaia", "Euclid"],
      reponse: "James Webb (JWST)",
      explication: "Grâce à l'infrarouge, il peut détecter de l'eau, du CO2 ou du méthane."
    }
  ]
};
