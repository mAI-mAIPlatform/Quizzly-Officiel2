import { Quiz } from "@/types/quiz";

export const quiz490: Quiz = {
  id: "490",
  titre: "Technologie : Les Véhicules Autonomes 🚗🤖",
  description: "Testez vos connaissances sur les voitures qui se conduisent toutes seules.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien existe-t-il de 'niveaux d'autonomie' définis pour les véhicules ?",
      options: ["3", "5", "6", "10"],
      reponse: "6",
      explication: "Allant du niveau 0 (aucune aide) au niveau 5 (autonomie totale sans conducteur)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel dispositif laser permet à la voiture de 'voir' son environnement en 3D en temps réel ?",
      options: ["Le Radar", "Le LiDAR", "Le Sonar", "La Caméra web"],
      reponse: "Le LiDAR",
      explication: "Light Detection and Ranging. Il mesure les distances en envoyant des millions de faisceaux laser par seconde."
    },
    {
      id: "3",
      type: "qcm",
      question: "À quel niveau d'autonomie la voiture peut-elle circuler sans aucune intervention humaine, même sans volant ?",
      options: ["Niveau 2", "Niveau 3", "Niveau 4", "Niveau 5"],
      reponse: "Niveau 5",
      explication: "Au niveau 5, l'humain n'est plus qu'un passager."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle entreprise a lancé les premiers taxis totalement autonomes (sans chauffeur) en service commercial à San Francisco et Phoenix ?",
      options: ["Uber", "Waymo (Google)", "Tesla", "Apple"],
      reponse: "Waymo (Google)",
      explication: "Waymo est considéré comme le leader technologique actuel du domaine."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que l''Autopilot' de Tesla (en 2023-2024) ?",
      options: ["Un système d'autonomie totale", "Un système d'assistance à la conduite de niveau 2 (le conducteur doit rester vigilant)", "Un simple régulateur de vitesse", "Un système qui vole"],
      reponse: "Un système d'assistance à la conduite de niveau 2 (le conducteur doit rester vigilant)",
      explication: "Malgré son nom, il nécessite toujours une supervision humaine constante."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on le 'cerveau' de l'IA qui prend les décisions de conduite ?",
      options: ["Le moteur", "Le réseau de neurones artificiels (Deep Learning)", "La puce GPS", "L'antenne"],
      reponse: "Le réseau de neurones artificiels (Deep Learning)",
      explication: "Elle est entraînée sur des millions de kilomètres de conduite réelle."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est l'un des principaux arguments de sécurité en faveur des voitures autonomes ?",
      options: ["Elles vont plus vite", "L'élimination des erreurs humaines (distraction, fatigue, alcool), responsables de 90% des accidents", "Elles sont plus jolies", "Elles ne tombent jamais en panne"],
      reponse: "L'élimination des erreurs humaines (distraction, fatigue, alcool), responsables de 90% des accidents",
      explication: "Une IA ne fatigue jamais et regarde dans toutes les directions à la fois."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel dilemme moral célèbre est souvent cité concernant la programmation de ces véhicules ?",
      options: ["Le dilemme du train (ou du tramway) : qui choisir de sauver en cas d'accident inévitable ?", "Le dilemme du parking", "Le dilemme de la vitesse", "Le dilemme de l'essence"],
      reponse: "Le dilemme du train (ou du tramway) : qui choisir de sauver en cas d'accident inévitable ?",
      explication: "Il pose la question éthique de savoir comment l'IA doit trancher entre deux vies."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce que la communication 'V2X' ?",
      options: ["Une radio spéciale", "La capacité du véhicule à communiquer avec les autres voitures et les infrastructures (Feux rouges, panneaux)", "Une marque de pneus", "L'aide au stationnement"],
      reponse: "La capacité du véhicule à communiquer avec les autres voitures et les infrastructures (Feux rouges, panneaux)",
      explication: "Vehicle-to-Everything. Cela permet d'anticiper les dangers bien avant qu'ils ne soient visibles."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle partie de l'environnement est la plus difficile à prédire pour un véhicule autonome ?",
      options: ["La route", "Les autres voitures", "Les piétons et les cyclistes", "Le ciel"],
      reponse: "Les piétons et les cyclistes",
      explication: "Leurs mouvements peuvent être brusques, imprévisibles et difficiles à interpréter pour une machine."
    }
  ]
};
