import { Quiz } from "@/types/quiz";

export const quiz769: Quiz = {
  id: "769",
  titre: "Santé : Les Premiers Secours 🚑",
  description: "Apprendre les bons réflexes et les numéros à appeler en cas d'urgence.",
  theme: "Santé",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel numéro faut-il appeler pour joindre le SAMU en France ?",
      options: ["15", "17", "18", "112"],
      reponse: "15",
      explication: "Le 15 est pour les urgences médicales. Le 112 est le numéro d'urgence européen."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel numéro permet de joindre les pompiers ?",
      options: ["15", "17", "18", "114"],
      reponse: "18",
      explication: "Pour les incendies et les accidents sur la voie publique."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Lorsqu'on appelle les secours, il faut raccrocher le premier pour libérer la ligne.",
      reponse: "Faux",
      explication: "C'est le régulateur (le pompier ou le médecin) qui doit dire quand raccrocher."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la position dans laquelle on met une personne inconsciente qui respire ?",
      reponse: "PLS",
      explication: "Position Latérale de Sécurité. Elle évite l'étouffement."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que faut-il faire en premier si on se brûle légèrement (brûlure thermique) ?",
      options: ["Mettre du beurre", "Mettre un pansement", "Faire couler de l'eau tempérée (15°C) pendant au moins 15 min", "Percer la cloque"],
      reponse: "Faire couler de l'eau tempérée (15°C) pendant au moins 15 min",
      explication: "C'est la règle des '15' : eau à 15°C, à 15cm, pendant 15 min."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Si quelqu'un s'étouffe totalement et ne peut plus parler, il faut lui donner 5 claques vigoureuses entre les omoplates.",
      reponse: "Vrai",
      explication: "C'est le premier geste à tenter. Si ça ne marche pas, on fait la méthode de Heimlich."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie le sigle DAE ?",
      options: ["Défibrillateur Automatisé Externe", "Danger d'Accident Électrique", "Direction de l'Aide aux Enfants", "Dispositif d'Appel d'Équipe"],
      reponse: "Défibrillateur Automatisé Externe",
      explication: "Un appareil qui aide à relancer le cœur en cas d'arrêt cardiaque."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel numéro d'urgence est réservé aux personnes sourdes ou malentendantes (par SMS) ?",
      reponse: "114",
      explication: "Numéro national d'appel d'urgence."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que contient une trousse de secours de base ?",
      options: ["Des bonbons", "Des pansements, du désinfectant et des compresses", "Un marteau", "Du parfum"],
      reponse: "Des pansements, du désinfectant et des compresses",
      explication: "De quoi soigner les petites blessures courantes."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il est déconseillé de déplacer un blessé grave, sauf danger immédiat (feu, explosion).",
      reponse: "Vrai",
      explication: "On risquerait d'aggraver ses blessures, notamment à la colonne vertébrale."
    }
  ]
};
