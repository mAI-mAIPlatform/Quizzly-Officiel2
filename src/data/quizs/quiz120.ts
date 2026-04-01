import { Quiz } from "@/types/quiz";

export const quiz120: Quiz = {
  id: "120",
  titre: "Secrets de l'Égypte Antique 🏺",
  description: "Découvrez la vie des pharaons, les hiéroglyphes et les pyramides.",
  theme: "Histoire",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle le fleuve vital de l'Égypte ancienne ?",
      options: ["Le Tigre", "L'Euphrate", "Le Nil", "Le Jourdain"],
      reponse: "Le Nil",
      explication: "Le Nil apportait le limon fertile nécessaire à l'agriculture."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel pharaon a fait construire la plus grande pyramide de Gizeh ?",
      options: ["Khéops", "Khéphren", "Mykérinos", "Toutânkhamon"],
      reponse: "Khéops",
      explication: "La Grande Pyramide de Khéops est l'une des 7 merveilles du monde antique."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on l'écriture des anciens Égyptiens ?",
      options: ["Cunéiforme", "Hiéroglyphes", "Alphabet", "Sanskrit"],
      reponse: "Hiéroglyphes",
      explication: "Les hiéroglyphes sont des dessins sacrés gravés sur pierre ou peints sur papyrus."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qui a déchiffré les hiéroglyphes grâce à la Pierre de Rosette ?",
      options: ["Napoléon", "Champollion", "Howard Carter", "Mariette"],
      reponse: "Champollion",
      explication: "Jean-François Champollion a percé le secret de l'écriture égyptienne en 1822."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle était la fonction d'un sarcophage ?",
      options: ["Servir de trône", "Contenir le corps momifié", "Stocker le grain", "Protéger le trésor"],
      reponse: "Contenir le corps momifié",
      explication: "C'était le cercueil protecteur du défunt pour son voyage dans l'au-delà."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle reine célèbre fut la dernière pharaonne d'Égypte ?",
      options: ["Néfertiti", "Hatchepsout", "Cléopâtre VII", "Néfertari"],
      reponse: "Cléopâtre VII",
      explication: "Cléopâtre est célèbre pour ses relations avec Jules César et Marc Antoine."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel dieu égyptien avait une tête de faucon ?",
      options: ["Anubis", "Horus", "Osiris", "Thot"],
      reponse: "Horus",
      explication: "Horus est le dieu protecteur des pharaons."
    },
    {
      id: "8",
      type: "qcm",
      question: "Pour quel pharaon Howard Carter a-t-il découvert le tombeau intact en 1922 ?",
      options: ["Ramsès II", "Akhenaton", "Toutânkhamon", "Séti Ier"],
      reponse: "Toutânkhamon",
      explication: "Le trésor de Toutânkhamon est l'un des plus célèbres de l'archéologie."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'un papyrus ?",
      options: ["Une pierre précieuse", "Une plante servant de support d'écriture", "Un vêtement royal", "Un type de bateau"],
      reponse: "Une plante servant de support d'écriture",
      explication: "Les tiges de papyrus étaient croisées et pressées pour former des feuilles."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle créature mythologique au corps de lion et tête d'homme garde les pyramides ?",
      options: ["Le Sphinx", "Le Centaure", "La Chimère", "Le Griffon"],
      reponse: "Le Sphinx",
      explication: "Le Grand Sphinx de Gizeh est tourné vers le soleil levant."
    }
  ]
};
