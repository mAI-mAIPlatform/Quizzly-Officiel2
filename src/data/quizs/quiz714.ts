import { Quiz } from "@/types/quiz";

export const quiz714: Quiz = {
  id: "714",
  titre: "Français : Le Futur Simple 🚀",
  description: "Conjuguer les verbes au futur sans erreur de radical ou de terminaison.",
  theme: "Français",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la terminaison de 'je' au futur ?",
      options: ["-ais", "-ai", "-as", "-a"],
      reponse: "-ai",
      explication: "Toutes les personnes 'je' au futur finissent par -ai."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le radical de 'pouvoir' au futur ?",
      options: ["Pouv-", "Puis-", "Pourr-", "Pour-"],
      reponse: "Pourr-",
      explication: "Je pourrai, tu pourras..."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Toutes les personnes ont les mêmes terminaisons au futur pour tous les verbes.",
      reponse: "Vrai",
      explication: "-ai, -as, -a, -ons, -ez, -ont."
    },
    {
      id: "4",
      type: "courte",
      question: "Conjugue 'être' à 'il' au futur.",
      reponse: "sera",
      explication: "Radical ser- + terminaison -a."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel est le futur de 'voir' à 'tu' ?",
      options: ["Verras", "Voiras", "Veras", "Voyas"],
      reponse: "Verras",
      explication: "Radical verr-."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "On appelle le radical du futur le 'futur antérieur'.",
      reponse: "Faux",
      explication: "Le futur antérieur est un temps composé."
    },
    {
      id: "7",
      type: "courte",
      question: "Conjugue 'vouloir' à 'nous' au futur.",
      reponse: "voudrons",
      explication: "Radical voudr-."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment écrit-on 'envoyer' à 'je' au futur ?",
      options: ["Enverrai", "Envoierai", "Envoyrai", "Envoirai"],
      reponse: "Enverrai",
      explication: "Très irrégulier : radical enverr-."
    },
    {
      id: "9",
      type: "qcm",
      question: "La terminaison de 'ils' est...",
      options: ["-ent", "-ont", "-ontent", "-ons"],
      reponse: "-ont",
      explication: "Exemple : ils mangeront."
    },
    {
      id: "10",
      type: "courte",
      question: "Conjugue 'faire' à 'vous' au futur.",
      reponse: "ferez",
      explication: "Le radical est fer-."
    }
  ]
};
