import { Quiz } from "@/types/quiz";

export const quiz1001: Quiz = {
  id: "1001",
  titre: "🌍 Planète & Climat : Mission Urgence",
  description: "Un quiz moderne sur le climat, l'énergie et les écogestes du quotidien.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel gaz est majoritairement responsable de l'effet de serre d'origine humaine ?",
      options: ["Le dioxyde de carbone (CO₂)", "L'hélium", "L'argon", "Le néon"],
      reponse: "Le dioxyde de carbone (CO₂)",
      explication: "La combustion des énergies fossiles augmente fortement la concentration de CO₂ dans l'atmosphère."
    },
    {
      id: "2",
      type: "vrai_faux",
      question: "Les énergies renouvelables incluent le solaire, l'éolien et l'hydraulique.",
      reponse: "Vrai",
      explication: "Ces sources se renouvellent naturellement à l'échelle humaine."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel geste réduit le plus l'empreinte carbone à l'échelle individuelle ?",
      options: ["Éteindre la lumière 5 minutes", "Limiter les trajets en avion", "Boire plus d'eau", "Utiliser un stylo bleu"],
      reponse: "Limiter les trajets en avion",
      explication: "Le transport aérien est particulièrement émetteur de CO₂ par passager."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'accord international signé en 2015 sur le climat ?",
      reponse: "L'Accord de Paris",
      explication: "Il vise à limiter le réchauffement climatique bien en dessous de 2 °C."
    },
    {
      id: "5",
      type: "vrai_faux",
      question: "Recycler correctement permet d'économiser de l'énergie et des matières premières.",
      reponse: "Vrai",
      explication: "Le recyclage évite l'extraction de nouvelles ressources dans de nombreux cas."
    }
  ]
};
