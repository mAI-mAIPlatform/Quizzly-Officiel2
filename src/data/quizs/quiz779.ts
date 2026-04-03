import { Quiz } from "@/types/quiz";

export const quiz779: Quiz = {
  id: "779",
  titre: "Informatique : L'Intelligence Artificielle 🤖",
  description: "Découvrir cette technologie qui tente d'imiter l'intelligence humaine.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le sigle IA ?",
      options: ["Informatique Avancée", "Intelligence Artificielle", "Internet Automatique", "Image Animée"],
      reponse: "Intelligence Artificielle",
      explication: "En anglais : AI (Artificial Intelligence)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces objets utilise de l'IA aujourd'hui ?",
      options: ["Un tournevis", "Un assistant vocal (ex: Siri, Alexa)", "Une chaise", "Un mug"],
      reponse: "Un assistant vocal (ex: Siri, Alexa)",
      explication: "Ils utilisent l'IA pour comprendre le langage humain."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Une IA possède des sentiments et des émotions comme un humain.",
      reponse: "Faux",
      explication: "C'est un programme informatique très complexe, mais il ne ressent rien."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le domaine de l'IA où la machine apprend toute seule à partir de données ?",
      reponse: "Machine Learning",
      explication: "Ou apprentissage automatique."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel jeu de société a été dominé par une IA (AlphaGo) en 2016 ?",
      options: ["Les Échecs", "Le Jeu de Go", "Le Monopoly", "Les Dames"],
      reponse: "Le Jeu de Go",
      explication: "C'était considéré comme beaucoup plus difficile que les échecs pour une machine."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "ChatGPT est une IA capable de générer du texte et de discuter.",
      reponse: "Vrai",
      explication: "C'est un modèle de langage à grande échelle."
    },
    {
      id: "7",
      type: "qcm",
      question: "À quoi peut servir l'IA dans la médecine ?",
      options: ["À porter les malades", "À aider les médecins à détecter des maladies sur des radios", "À remplacer les infirmières", "À rien"],
      reponse: "À aider les médecins à détecter des maladies sur des radios",
      explication: "Elle peut analyser des milliers d'images très vite."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on les voitures qui peuvent rouler sans chauffeur grâce à l'IA ?",
      reponse: "Voitures autonomes",
      explication: "Elles utilisent des caméras et des capteurs."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'un des dangers des images générées par l'IA ?",
      options: ["Elles sont trop belles", "Elles peuvent créer des fausses informations (Deepfakes)", "Elles coûtent trop cher", "Elles sont interdites"],
      reponse: "Elles peuvent créer des fausses informations (Deepfakes)",
      explication: "Il devient difficile de savoir si une photo est réelle."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'IA a besoin de beaucoup de données pour devenir performante.",
      reponse: "Vrai",
      explication: "Elle apprend en analysant des millions d'exemples."
    }
  ]
};
