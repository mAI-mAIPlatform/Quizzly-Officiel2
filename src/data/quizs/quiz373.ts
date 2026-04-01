import { Quiz } from "@/types/quiz";

export const quiz373: Quiz = {
  id: "373",
  titre: "Informatique : IA et Apprentissage Automatique 🤖🧠",
  description: "Comprenez les concepts derrière les technologies qui imitent l'intelligence.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie 'IA' ?",
      options: ["Informatique Avancée", "Intelligence Artificielle", "Interface Automatisée", "Internet Amélioré"],
      reponse: "Intelligence Artificielle",
      explication: "C'est la simulation de l'intelligence humaine par des machines."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel test permet de déterminer si une IA peut se faire passer pour un humain ?",
      options: ["Le test de Turing", "Le test de Voight-Kampff", "Le test de Rorschach", "Le test de Pasteur"],
      reponse: "Le test de Turing",
      explication: "Proposé par Alan Turing en 1950."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'est-ce que le 'Machine Learning' ?",
      options: ["Une machine qui fait du sport", "Une technique permettant aux ordinateurs d'apprendre à partir de données sans être explicitement programmés pour chaque tâche", "Un cours pour apprendre à réparer les PC", "Un moteur de recherche"],
      reponse: "Une technique permettant aux ordinateurs d'apprendre à partir de données sans être explicitement programmés pour chaque tâche",
      explication: "L'algorithme s'améliore à mesure qu'il traite plus d'exemples."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on les structures informatiques inspirées du cerveau humain ?",
      options: ["Des autoroutes de données", "Des réseaux de neurones artificiels", "Des processeurs vivants", "Des puces grises"],
      reponse: "Des réseaux de neurones artificiels",
      explication: "Ils sont à la base du 'Deep Learning'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel célèbre programme d'IA a battu le champion du monde de Go en 2016 ?",
      options: ["Deep Blue", "AlphaGo", "Siri", "ChatGPT"],
      reponse: "AlphaGo",
      explication: "Développé par DeepMind (Google), ce fut une étape majeure pour l'IA."
    },
    {
      id: "6",
      type: "qcm",
      question: "Lequel de ces services utilise l'IA pour ses recommandations ?",
      options: ["Netflix", "Spotify", "Amazon", "Tous ceux-là"],
      reponse: "Tous ceux-là",
      explication: "L'IA analyse vos goûts passés pour suggérer du contenu futur."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un 'LLM' (comme GPT-4) ?",
      options: ["A Light Laser Machine", "Large Language Model (Grand modèle de langage)", "Long Loop Memory", "Logical Level Management"],
      reponse: "Large Language Model (Grand modèle de langage)",
      explication: "C'est une IA entraînée sur d'immenses quantités de texte pour prédire la suite d'une phrase."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on le 'problème' quand une IA invente des faits de manière convaincante ?",
      options: ["Un mensonge", "Une hallucination", "Une erreur système", "Un bug graphique"],
      reponse: "Une hallucination",
      explication: "L'IA génère du texte plausible mais factuellement faux."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel composant informatique est très utilisé pour entraîner les IA car il est bon en calculs parallèles ?",
      options: ["Le Disque dur", "La RAM", "La Carte Graphique (GPU)", "L'Alimentation"],
      reponse: "La Carte Graphique (GPU)",
      explication: "Les constructeurs comme NVIDIA dominent ce marché."
    },
    {
      id: "10",
      type: "qcm",
      question: "L'Intelligence Artificielle Générale (AGI) existe-t-elle aujourd'hui ?",
      options: ["Oui, ChatGPT est une AGI", "Non, c'est encore un but futur (une IA égale ou supérieure à l'homme dans toutes les tâches)", "Oui, dans certains laboratoires secrets", "On ne sait pas"],
      reponse: "Non, c'est encore un but futur (une IA égale ou supérieure à l'homme dans toutes les tâches)",
      explication: "Les IA actuelles sont dites 'étroites' car elles sont spécialisées (texte, image, jeu...)."
    }
  ]
};
