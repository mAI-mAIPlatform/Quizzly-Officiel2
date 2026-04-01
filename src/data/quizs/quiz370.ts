import { Quiz } from "@/types/quiz";

export const quiz370: Quiz = {
  id: "370",
  titre: "Technologie : L'Impression 3D 🖨️🧱",
  description: "Découvrez la révolution de la fabrication additive.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est l'autre nom technique de l'impression 3D ?",
      options: ["Fabrication soustractive", "Fabrication additive", "Moulage rapide", "Sculpture numérique"],
      reponse: "Fabrication additive",
      explication: "On ajoute de la matière couche par couche, contrairement à l'usinage qui en enlève."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel matériau est le plus utilisé par les imprimantes 3D grand public (à dépôt de fil) ?",
      options: ["Acier", "Plastique (PLA ou ABS)", "Bois", "Verre"],
      reponse: "Plastique (PLA ou ABS)",
      explication: "Le PLA est biodégradable et facile à imprimer."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que signifie 'FDM' dans le monde de l'impression 3D ?",
      options: ["Fused Deposition Modeling", "Fast Digital Manufacturing", "Fixed Design Method", "Final Detail Maker"],
      reponse: "Fused Deposition Modeling",
      explication: "C'est la technique du dépôt de fil fondu."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle technique utilise un laser pour durcir une résine liquide ?",
      options: ["FDM", "SLA (Stéréolithographie)", "SLS", "CNC"],
      reponse: "SLA (Stéréolithographie)",
      explication: "Elle permet une précision beaucoup plus grande que le dépôt de fil."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle le format de fichier standard utilisé pour l'impression 3D ?",
      options: ["PDF", "STL", "MP3", "JPEG"],
      reponse: "STL",
      explication: "Il décrit la surface de l'objet sous forme de triangles."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est le nom du logiciel qui transforme un modèle 3D en instructions pour l'imprimante ?",
      options: ["Un Slicer (Trancheur)", "Un Browser", "Un Editor", "Un Player"],
      reponse: "Un Slicer (Trancheur)",
      explication: "Il découpe l'objet en couches et génère le 'G-Code'."
    },
    {
      id: "7",
      type: "qcm",
      question: "Peut-on imprimer des maisons en 3D ?",
      options: ["Non, c'est impossible", "Oui, avec des imprimantes géantes utilisant du béton", "Seulement des maquettes", "C'est réservé au futur lointain"],
      reponse: "Oui, avec des imprimantes géantes utilisant du béton",
      explication: "Plusieurs maisons et même des ponts ont déjà été construits ainsi."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle agence spatiale étudie l'impression 3D pour construire des bases sur la Lune ?",
      options: ["SNCF", "NASA", "UNESCO", "AIRBUS"],
      reponse: "NASA",
      explication: "Il serait plus simple d'imprimer avec le sol lunaire que d'apporter tout le matériel."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans le domaine médical, que permet la 'Bio-impression' ?",
      options: ["Imprimer des livres médicaux", "Créer des tissus ou des organes à partir de cellules vivantes", "Réparer les ordinateurs des hôpitaux", "Fabriquer des pansements plastiques"],
      reponse: "Créer des tissus ou des organes à partir de cellules vivantes",
      explication: "C'est un domaine de recherche très prometteur."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qu'est-ce que le 'G-Code' ?",
      options: ["Un code secret", "Le langage de commande de l'imprimante indiquant les mouvements", "Le nom d'un modèle d'imprimante", "Un type de plastique"],
      reponse: "Le langage de commande de l'imprimante indiquant les mouvements",
      explication: "Il dit à l'imprimante : 'Va à telle position X, Y, Z et dépose telle quantité de fil'."
    }
  ]
};
