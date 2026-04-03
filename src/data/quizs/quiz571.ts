import { Quiz } from "@/types/quiz";

export const quiz571: Quiz = {
  id: "571",
  titre: "Technologie : Cycle de vie d'un produit ♻️",
  description: "Découvrez les étapes de la vie d'un objet, de sa création à sa fin de vie.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la première étape de la création d'un nouvel objet technique ?",
      options: ["La vente en magasin", "L'expression du besoin (cahier des charges)", "La mise à la poubelle", "Le transport"],
      reponse: "L'expression du besoin (cahier des charges)",
      explication: "On définit d'abord ce que l'objet doit faire et à quelles contraintes il doit répondre."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le document qui liste toutes les contraintes d'un projet ?",
      options: ["Le cahier des charges fonctionnel (CDCF)", "Un menu de restaurant", "Une carte postale", "Un journal intime"],
      reponse: "Le cahier des charges fonctionnel (CDCF)",
      explication: "Il sert de guide aux ingénieurs et designers."
    },
    {
      id: "3",
      type: "qcm",
      question: "L'étape de 'conception' consiste à :",
      options: ["Vendre l'objet", "Imaginer et dessiner les solutions techniques (plans, 3D)", "Détruire l'objet", "L'utiliser tous les jours"],
      reponse: "Imaginer et dessiner les solutions techniques (plans, 3D)",
      explication: "C'est là qu'on décide de la forme et des matériaux."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce que l'étape de 'production' ?",
      options: ["Le transport vers les clients", "La fabrication de l'objet en usine ou en atelier", "L'invention de l'idée", "Le recyclage"],
      reponse: "La fabrication de l'objet en usine ou en atelier",
      explication: "On transforme les matières premières en produit fini."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on les dommages causés à la nature lors de la fabrication (CO2, déchets) ?",
      options: ["L'impact environnemental", "Le succès commercial", "La fonction d'usage", "Le design"],
      reponse: "L'impact environnemental",
      explication: "On cherche aujourd'hui à le réduire au maximum (éco-conception)."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle étape permet de faire connaître l'objet aux futurs acheteurs ?",
      options: ["Le recyclage", "Le marketing et la communication (publicité)", "La maintenance", "Le stockage"],
      reponse: "Le marketing et la communication (publicité)",
      explication: "C'est essentiel pour vendre le produit."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce que la 'maintenance' d'un objet ?",
      options: ["Sa destruction", "L'ensemble des actions pour le maintenir en bon état de fonctionnement (réparation, entretien)", "Son achat", "Son emballage"],
      reponse: "L'ensemble des actions pour le maintenir en bon état de fonctionnement (réparation, entretien)",
      explication: "Réparer au lieu de jeter est meilleur pour la planète."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment s'appelle l'étape où l'on se débarrasse d'un objet car il ne fonctionne plus ou est démodé ?",
      options: ["La naissance", "La fin de vie", "L'utilisation", "La distribution"],
      reponse: "La fin de vie",
      explication: "L'objet devient alors un déchet."
    },
    {
      id: "9",
      type: "qcm",
      question: "Idéalement, que doit-on faire d'un objet en fin de vie pour limiter la pollution ?",
      options: ["Le brûler dans son jardin", "Le trier pour qu'il soit recyclé ou valorisé", "Le jeter dans la mer", "L'enterrer en forêt"],
      reponse: "Le trier pour qu'il soit recyclé ou valorisé",
      explication: "Le recyclage permet de récupérer les matières pour fabriquer d'autres objets."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qu'est-ce que l'obsolescence programmée ?",
      options: ["Un objet qui dure éternellement", "Réduire volontairement la durée de vie d'un produit pour que le client en rachète un nouveau", "Une mise à jour gratuite", "Un objet écologique"],
      reponse: "Réduire volontairement la durée de vie d'un produit pour que le client en rachète un nouveau",
      explication: "C'est une pratique critiquée et parfois interdite car elle pousse à la surconsommation."
    }
  ]
};
