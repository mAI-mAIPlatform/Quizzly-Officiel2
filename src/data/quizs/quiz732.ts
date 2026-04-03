import { Quiz } from "@/types/quiz";

export const quiz732: Quiz = {
  id: "732",
  titre: "SVT : La Reproduction des Végétaux 🌸",
  description: "Comprendre comment les plantes se multiplient et colonisent le milieu.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel insecte est l'un des principaux pollinisateurs ?",
      options: ["L'araignée", "L'abeille", "La fourmi", "Le moustique"],
      reponse: "L'abeille",
      explication: "Elle transporte le pollen de fleur en fleur."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle l'élément mâle d'une fleur ?",
      options: ["Le pistil", "L'étamine", "Le pétale", "Le sépale"],
      reponse: "L'étamine",
      explication: "Elle porte les sacs de pollen."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le pistil est l'organe reproducteur femelle de la fleur.",
      reponse: "Vrai",
      explication: "Il reçoit le pollen pour former la graine."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on la transformation de la graine en une jeune plante ?",
      reponse: "Germination",
      explication: "Elle nécessite de l'eau et de la chaleur."
    },
    {
      id: "5",
      type: "qcm",
      question: "Certaines plantes se reproduisent sans graines, par exemple par...",
      options: ["Bouturage", "Suturage", "Voitrage", "Pliage"],
      reponse: "Bouturage",
      explication: "On plante un morceau de tige ou de feuille pour refaire une plante."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le vent ne peut pas transporter le pollen.",
      reponse: "Faux",
      explication: "De nombreuses plantes (comme les pins) utilisent le vent."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un stolon ?",
      options: ["Une racine profonde", "Une tige rampante qui s'enracine", "Une fleur géante", "Un type d'arbre"],
      reponse: "Une tige rampante qui s'enracine",
      explication: "Exemple : le fraisier."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la partie colorée de la fleur qui attire les insectes ?",
      reponse: "Pétales",
      explication: "L'ensemble des pétales forme la corolle."
    },
    {
      id: "9",
      type: "qcm",
      question: "Où se trouvent les ovules dans une fleur ?",
      options: ["Dans l'étamine", "Dans l'ovaire (base du pistil)", "Sur les pétales", "Dans le pollen"],
      reponse: "Dans l'ovaire (base du pistil)",
      explication: "C'est là qu'ils seront fécondés."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Toutes les plantes ont besoin de fleurs pour se reproduire.",
      reponse: "Faux",
      explication: "Les fougères et les mousses utilisent des spores."
    }
  ]
};
