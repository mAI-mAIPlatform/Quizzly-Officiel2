import { Quiz } from "@/types/quiz";

export const quiz442: Quiz = {
  id: "442",
  titre: "Astronomie : Exoplanètes et Vie Extraterrestre 👽🪐",
  description: "Sommes-nous seuls ? Explorez les mondes au-delà de notre système solaire.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une exoplanète ?",
      options: ["Une planète naine", "Une planète située en dehors de notre système solaire", "Une planète sans atmosphère", "Une lune de Jupiter"],
      reponse: "Une planète située en dehors de notre système solaire",
      explication: "Elle tourne autour d'une autre étoile que le Soleil."
    },
    {
      id: "2",
      type: "qcm",
      question: "En quelle année la première exoplanète tournant autour d'une étoile comme le Soleil a-t-elle été découverte ?",
      options: ["1950", "1995", "2010", "2020"],
      reponse: "1995",
      explication: "Il s'agit de 51 Pegasi b, découverte par Michel Mayor et Didier Queloz (Prix Nobel 2019)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on la zone autour d'une étoile où de l'eau liquide pourrait exister à la surface d'une planète ?",
      options: ["La zone de confort", "La zone d'habitabilité (ou zone Boucles d'or)", "La zone verte", "La zone tempérée"],
      reponse: "La zone d'habitabilité (ou zone Boucles d'or)",
      explication: "Elle n'est ni trop près (trop chaud), ni trop loin (trop froid) de l'étoile."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel télescope spatial de la NASA a été lancé spécifiquement pour 'chasser' les exoplanètes par milliers ?",
      options: ["Hubble", "Kepler", "James Webb", "Chandra"],
      reponse: "Kepler",
      explication: "Il a détecté des milliers de planètes en observant d'infimes baisses de luminosité des étoiles."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que la 'méthode du transit' pour détecter une planète ?",
      options: ["Regarder la planète au télescope", "Mesurer la baisse de lumière d'une étoile quand une planète passe devant elle", "Mesurer le son de l'étoile", "Envoyer une sonde"],
      reponse: "Mesurer la baisse de lumière d'une étoile quand une planète passe devant elle",
      explication: "C'est comme observer l'ombre d'une mouche passant devant un phare lointain."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on les exoplanètes deux à dix fois plus massives que la Terre ?",
      options: ["Les Super-Terres", "Les Mini-Neptunes", "Les Géantes de fer", "Les Méga-Mondes"],
      reponse: "Les Super-Terres",
      explication: "Ce type de planète est très courant dans l'univers mais n'existe pas dans notre système solaire."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel système stellaire proche (40 années-lumière) possède 7 planètes de la taille de la Terre ?",
      options: ["Alpha Centauri", "TRAPPIST-1", "Kepler-186", "Proxima Centauri"],
      reponse: "TRAPPIST-1",
      explication: "Plusieurs d'entre elles se situent dans la zone habitable."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle équation célèbre tente d'estimer le nombre de civilisations technologiquement avancées dans notre galaxie ?",
      options: ["L'équation d'Einstein", "L'équation de Drake", "Le paradoxe de Fermi", "La loi de Hubble"],
      reponse: "L'équation de Drake",
      explication: "Elle multiplie plusieurs facteurs (nombre d'étoiles, planètes habitables, apparition de la vie, etc.)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est le 'Paradoxe de Fermi' ?",
      options: ["L'univers est trop petit", "Si les extraterrestres existent, pourquoi ne nous ont-ils pas encore contactés ?", "La vie est impossible ailleurs", "Le voyage spatial est trop lent"],
      reponse: "Si les extraterrestres existent, pourquoi ne nous ont-ils pas encore contactés ?",
      explication: "En gros : 'Où est tout le monde ?'."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel gaz, s'il était détecté massivement dans l'atmosphère d'une exoplanète, serait un fort indice de vie ?",
      options: ["L'Hélium", "Le Dioxygène (O2)", "L'Azote", "Le CO2"],
      reponse: "Le Dioxygène (O2)",
      explication: "Sur Terre, l'oxygène est produit et maintenu par la photosynthèse des plantes."
    }
  ]
};
