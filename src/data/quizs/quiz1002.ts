import { Quiz } from "@/types/quiz";

export const quiz1002: Quiz = {
  id: "1002",
  titre: "💡 Culture Numérique & IA",
  description: "Teste tes bases sur le numérique, la cybersécurité et l'intelligence artificielle.",
  theme: "Technologie",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie l'acronyme IA ?",
      options: ["Interface Avancée", "Intelligence Artificielle", "Internet Actif", "Indice Algorithmique"],
      reponse: "Intelligence Artificielle",
      explication: "L'IA regroupe des techniques permettant aux machines d'effectuer des tâches cognitives."
    },
    {
      id: "2",
      type: "vrai_faux",
      question: "Un mot de passe long et unique est plus sûr qu'un mot de passe court réutilisé partout.",
      reponse: "Vrai",
      explication: "La longueur et l'unicité réduisent fortement les risques de compromission en cascade."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est le principal risque d'un lien de phishing ?",
      options: ["Améliorer le Wi-Fi", "Voler des informations personnelles", "Nettoyer le cache", "Augmenter la batterie"],
      reponse: "Voler des informations personnelles",
      explication: "Le phishing imite des services connus pour récupérer identifiants et données sensibles."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel protocole sécurisé commence une adresse web protégée ?",
      reponse: "HTTPS",
      explication: "Le S indique une connexion sécurisée via chiffrement TLS."
    },
    {
      id: "5",
      type: "vrai_faux",
      question: "L'IA peut aider en éducation, mais ses réponses doivent être vérifiées.",
      reponse: "Vrai",
      explication: "Comme tout outil, elle peut se tromper et nécessite un esprit critique."
    }
  ]
};
