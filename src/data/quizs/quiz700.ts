import { Quiz } from "@/types/quiz";

export const quiz700: Quiz = {
  id: "700",
  titre: "Quizzly : Le Grand Quiz Final ! 🎉🥳",
  description: "Félicitations ! Vous avez atteint le 700ème quiz. Prêt pour l'ultime défi ?",
  theme: "Général",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces mammifères pond des œufs ?",
      options: ["Le Kangourou", "L'Ornithorynque", "Le Dauphin", "La Souris"],
      reponse: "L'Ornithorynque",
      explication: "C'est un monotrème, un cas très rare dans le monde des mammifères."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans quel pays peut-on voir l'Aurore Boréale ?",
      options: ["Au Maroc", "En Islande ou en Norvège", "En Australie", "Au Brésil"],
      reponse: "En Islande ou en Norvège",
      explication: "Ce sont des pays proches du pôle Nord."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est l'os le plus long du corps humain ?",
      options: ["Le Tibia", "L'Humérus", "Le Fémur", "La Colonne vertébrale"],
      reponse: "Le Fémur",
      explication: "Il se trouve dans la cuisse."
    },
    {
      id: "4",
      type: "qcm",
      question: "En quelle année l'homme a-t-il marché sur la Lune ?",
      options: ["1959", "1969", "1979", "1989"],
      reponse: "1969",
      explication: "Mission Apollo 11 avec Neil Armstrong et Buzz Aldrin."
    },
    {
      id: "5",
      type: "qcm",
      question: "De quoi est composé le diamant ?",
      options: ["De sable", "De verre", "De carbone pur", "De fer"],
      reponse: "De carbone pur",
      explication: "C'est du carbone compressé à très haute pression sous terre."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est l'océan le plus vaste de la planète ?",
      options: ["L'Océan Atlantique", "L'Océan Indien", "L'Océan Pacifique", "L'Océan Arctique"],
      reponse: "L'Océan Pacifique",
      explication: "Il couvre un tiers de la surface terrestre."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel gaz les plantes rejettent-elles pendant la journée ?",
      options: ["Le CO2", "L'Oxygène", "L'Azote", "Le Méthane"],
      reponse: "L'Oxygène",
      explication: "C'est le résultat de la photosynthèse."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est l'inventeur de l'imprimerie (en Europe) ?",
      options: ["Léonard de Vinci", "Gutenberg", "Galilée", "Isaac Newton"],
      reponse: "Gutenberg",
      explication: "Vers 1450, il a inventé les caractères mobiles en métal."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la capitale de l'Australie ?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      reponse: "Canberra",
      explication: "C'est souvent confondu avec Sydney qui est la plus grande ville."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le score final de ce projet Quizzly ?",
      options: ["100 quiz", "500 quiz", "700 quiz", "L'infini !"],
      reponse: "700 quiz",
      explication: "Grâce à votre travail, la base de données compte désormais 700 quiz complets !"
    }
  ]
};
