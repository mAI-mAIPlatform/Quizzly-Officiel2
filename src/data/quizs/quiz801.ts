import { Quiz } from "@/types/quiz";

export const quiz801: Quiz = {
  id: "801",
  titre: "Corps Humain : Le Squelette 🦴",
  description: "Découvrez la charpente de votre corps et ses os principaux.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien d'os possède environ un adulte ?",
      options: ["106", "206", "306", "506"],
      reponse: "206",
      explication: "Les bébés en ont plus (environ 270), mais certains se soudent en grandissant."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est l'os le plus long du corps humain ?",
      options: ["L'humérus (bras)", "Le tibia (jambe)", "Le fémur (cuisse)", "La colonne vertébrale"],
      reponse: "Le fémur (cuisse)",
      explication: "C'est un os très solide qui supporte le poids du corps."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les os sont des tissus vivants qui se renouvellent.",
      reponse: "Vrai",
      explication: "Ils fabriquent aussi les cellules du sang dans la moelle osseuse."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'ensemble des os qui protègent le cerveau ?",
      reponse: "Crâne",
      explication: "Il est composé de plusieurs os soudés entre eux."
    },
    {
      id: "5",
      type: "qcm",
      question: "Où se trouve l'os le plus petit du corps (l'étrier) ?",
      options: ["Dans le nez", "Dans l'oreille", "Dans le doigt", "Dans le pied"],
      reponse: "Dans l'oreille",
      explication: "Il est indispensable pour l'audition et mesure environ 3 mm."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La cage thoracique protège le cœur et les poumons.",
      reponse: "Vrai",
      explication: "Elle est formée par les côtes, le sternum et les vertèbres."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle l'endroit où deux os se rejoignent pour permettre le mouvement ?",
      options: ["Un muscle", "Une articulation", "Un tendon", "Un nerf"],
      reponse: "Une articulation",
      explication: "Comme le genou, le coude ou l'épaule."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la colonne composée de vertèbres qui soutient le dos ?",
      reponse: "Colonne vertébrale",
      explication: "Elle contient la moelle épinière."
    },
    {
      id: "9",
      type: "qcm",
      question: "De quoi les os ont-ils besoin pour rester solides ?",
      options: ["De sucre", "De calcium et de vitamine D", "De fer", "De graisse"],
      reponse: "De calcium et de vitamine D",
      explication: "Le calcium se trouve notamment dans les produits laitiers et certains légumes."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le bout du nez et les oreilles sont faits d'os.",
      reponse: "Faux",
      explication: "Ils sont faits de cartilage, un tissu plus souple que l'os."
    }
  ]
};
