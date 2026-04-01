import { Quiz } from "@/types/quiz";

export const quiz470: Quiz = {
  id: "470",
  titre: "Technologie : L'Impression 3D 🖨️🏠",
  description: "Testez vos connaissances sur la fabrication additive qui change l'industrie.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le terme technique correct pour désigner l'impression 3D ?",
      options: ["La sculpture numérique", "La fabrication additive", "Le moulage sous pression", "La photogravure"],
      reponse: "La fabrication additive",
      explication: "Contrairement à la découpe (soustractive), on ajoute de la matière couche par couche."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le matériau le plus couramment utilisé dans les imprimantes 3D domestiques ?",
      options: ["Le Fer", "Le Plastique (PLA ou ABS)", "Le Verre", "Le Papier"],
      reponse: "Le Plastique (PLA ou ABS)",
      explication: "Le PLA est biodégradable et fabriqué à partir d'amidon de maïs."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on le 'fil' de plastique qui sert de matière première ?",
      options: ["La bobine", "Le filament", "La mèche", "Le câble"],
      reponse: "Le filament",
      explication: "Il est chauffé par la buse de l'imprimante pour devenir liquide."
    },
    {
      id: "4",
      type: "qcm",
      question: "Est-il possible d'imprimer des maisons entières en 3D ?",
      options: ["Non, c'est impossible", "Oui, avec des imprimantes géantes utilisant du béton", "Seulement des modèles réduits", "Seulement en bois"],
      reponse: "Oui, avec des imprimantes géantes utilisant du béton",
      explication: "Cela permet de construire plus vite, moins cher et avec moins de déchets."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle agence spatiale étudie l'impression 3D pour fabriquer des outils ou des bases sur la Lune ?",
      options: ["La NASA", "L'ESA", "Toutes ces réponses", "Google"],
      reponse: "Toutes ces réponses",
      explication: "L'impression 3D évite d'avoir à transporter des pièces lourdes depuis la Terre."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce que le 'Bio-printing' (Bio-impression) ?",
      options: ["Imprimer des légumes", "Imprimer des tissus vivants ou des organes à partir de cellules", "Imprimer avec de la peinture verte", "Recycler des imprimantes"],
      reponse: "Imprimer des tissus vivants ou des organes à partir de cellules",
      explication: "C'est un domaine révolutionnaire de la médecine du futur."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le logiciel qui découpe le modèle 3D en centaines de tranches horizontales pour l'imprimante ?",
      options: ["Un Slicer (Trancheur)", "Un Photoshop", "Un Excel", "Un Cutter"],
      reponse: "Un Slicer (Trancheur)",
      explication: "Il génère le code (G-Code) que la machine peut lire."
    },
    {
      id: "8",
      type: "qcm",
      question: "On peut aujourd'hui imprimer en 3D avec quel autre matériau étonnant ?",
      options: ["Le Chocolat", "Le Métal", "La Porcelaine", "Toutes ces réponses sont correctes"],
      reponse: "Toutes ces réponses sont correctes",
      explication: "La technologie s'est étendue à presque tous les types de matériaux."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'un des grands avantages de l'impression 3D pour la médecine ?",
      options: ["C'est gratuit", "La possibilité de créer des prothèses sur-mesure adaptées à la morphologie de chaque patient", "On peut soigner le rhume", "Elle remplace les médecins"],
      reponse: "La possibilité de créer des prothèses sur-mesure adaptées à la morphologie de chaque patient",
      explication: "Cela améliore grandement le confort et la fonctionnalité des prothèses."
    },
    {
      id: "10",
      type: "qcm",
      question: "Que signifie le terme 'Open Source' appliqué à l'impression 3D (comme le projet RepRap) ?",
      options: ["C'est une machine fermée", "Les plans de l'imprimante sont libres d'accès, permettant à chacun de la construire et de l'améliorer", "L'imprimante fonctionne sans électricité", "On ne peut pas l'acheter"],
      reponse: "Les plans de l'imprimante sont libres d'accès, permettant à chacun de la construire et de l'améliorer",
      explication: "Cela a permis une explosion de l'innovation et une baisse des prix."
    }
  ]
};
