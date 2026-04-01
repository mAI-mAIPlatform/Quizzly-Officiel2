import { Quiz } from "@/types/quiz";

export const quiz234: Quiz = {
  id: "234",
  titre: "Géantes Gazeuses 🪐🌪️",
  description: "Testez votre connaissance sur les colosses du Système Solaire : Jupiter, Saturne, Uranus et Neptune.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la plus grande planète de tout le Système Solaire ?",
      options: ["Saturne", "Jupiter", "Neptune", "La Terre"],
      reponse: "Jupiter",
      explication: "Jupiter est plus de 1300 fois plus volumineuse que la Terre."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle planète possède les anneaux les plus spectaculaires et visibles, composés de glace et de poussière ?",
      options: ["Saturne", "Uranus", "Neptune", "Jupiter"],
      reponse: "Saturne",
      explication: "C'est l'une des merveilles du ciel nocturne observables avec un télescope."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on la tempête géante de Jupiter, active depuis au moins 300 ans ?",
      options: ["L'Oeil Cyclonique", "La Grande Tache Rouge", "Le Vortex Polaire", "Le Bras d'Orion"],
      reponse: "La Grande Tache Rouge",
      explication: "C'est un ouragan tellement grand qu'on pourrait y loger deux fois la Terre."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle planète a la particularité de 'rouler' sur son orbite ? Elle est couchée sur le côté !",
      options: ["Neptune", "Uranus", "Jupiter", "Vénus"],
      reponse: "Uranus",
      explication: "Son axe de rotation est incliné à presque 98 degrés, probablement à cause d'une collision ancienne."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la planète la plus éloignée du Soleil (depuis que Pluton a été déclassée) ?",
      options: ["Uranus", "Neptune", "Saturne", "Vesta"],
      reponse: "Neptune",
      explication: "Neptune est une planète glacée et bleue, balayée par les vents les plus rapides du système solaire."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on les quatre plus grandes lunes de Jupiter (Io, Europe, Ganymède, Callisto) ?",
      options: ["Les lunes Galiléennes", "Les lunes Kepleriennes", "Les lunes Coperniciennes", "Les lunes Newtoniennes"],
      reponse: "Les lunes Galiléennes",
      explication: "Elles ont été découvertes par Galilée en 1610 avec sa première lunette astronomique."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle lune de Saturne possède une atmosphère épaisse et des lacs de méthane liquide ?",
      options: ["Lune", "Titan", "Encelade", "Io"],
      reponse: "Titan",
      explication: "Titan est la seule lune du système solaire connue pour avoir une atmosphère dense."
    },
    {
      id: "8",
      type: "qcm",
      question: "De quoi sont principalement composées ces planètes géantes ?",
      options: ["De Roche et Métal", "D'Hydrogène et d'Hélium", "De Glace carbonique uniquement", "De Feu"],
      reponse: "D'Hydrogène et d'Hélium",
      explication: "Elles n'ont pas de surface solide pour atterrir, contrairement à la Terre."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle planète a été prédite par le calcul mathématique avant d'être observée au télescope ?",
      options: ["Uranus", "Neptune", "Pluton", "Mars"],
      reponse: "Neptune",
      explication: "L'astronome Le Verrier a calculé sa position en observant les perturbations de l'orbite d'Uranus."
    },
    {
      id: "10",
      type: "qcm",
      question: "Pourquoi Uranus et Neptune apparaissent-elles bleues ?",
      options: ["À cause de l'eau liquide", "À cause du gaz méthane dans leur atmosphère", "C'est un reflet du Soleil", "Elles sont faites de saphir"],
      reponse: "À cause du gaz méthane dans leur atmosphère",
      explication: "Le méthane absorbe la lumière rouge et réfléchit la lumière bleue."
    }
  ]
};
