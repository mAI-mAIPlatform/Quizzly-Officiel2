import { Quiz } from "@/types/quiz";

export const quiz199: Quiz = {
  id: "199",
  titre: "Introduction à l'IA 🤖🤔",
  description: "Testez vos connaissances sur l'Intelligence Artificielle et son fonctionnement.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le sigle IA ?",
      options: ["Informatique Automatisée", "Intelligence Artificielle", "Internet Appliqué", "Interface Avancée"],
      reponse: "Intelligence Artificielle",
      explication: "C'est la simulation de processus d'intelligence humaine par des machines."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on la technique qui permet aux machines d'apprendre à partir de données ?",
      options: ["Le Cloud Computing", "Le Machine Learning (Apprentissage Automatique)", "Le Bluetooth", "Le Codage"],
      reponse: "Le Machine Learning (Apprentissage Automatique)",
      explication: "Plus l'IA reçoit d'exemples, mieux elle apprend à accomplir sa tâche."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel test célèbre permet de déterminer si une IA peut se faire passer pour un humain ?",
      options: ["Le Test de Voight-Kampff", "Le Test de Turing", "Le Test d'Einstein", "Le Test de Morse"],
      reponse: "Le Test de Turing",
      explication: "Proposé par Alan Turing en 1950."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle l'IA d'OpenAI capable de discuter et de répondre à des questions complexes ?",
      options: ["Siri", "Alexa", "ChatGPT", "Watson"],
      reponse: "ChatGPT",
      explication: "Basé sur les modèles de langage de type GPT."
    },
    {
      id: "5",
      type: "qcm",
      question: "De quoi s'inspirent les 'réseaux de neurones artificiels' ?",
      options: ["Des racines des arbres", "Du cerveau humain", "Des circuits imprimés", "Des fourmilières"],
      reponse: "Du cerveau humain",
      explication: "Ils imitent la manière dont les neurones s'envoient des signaux."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce qu'une IA 'générative' ?",
      options: ["Une IA qui génère de l'électricité", "Une IA capable de créer du contenu nouveau (texte, image, son)", "Une IA qui ne fait que du tri", "Une IA de calcul pur"],
      reponse: "Une IA capable de créer du contenu nouveau (texte, image, son)",
      explication: "Exemples : Midjourney (images) ou ChatGPT (texte)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans quel domaine l'IA est-elle redoutable pour aider les médecins à détecter des maladies ?",
      options: ["La cuisine", "L'analyse d'imagerie médicale (radios, scanners)", "Le jardinage", "Le transport de bagages"],
      reponse: "L'analyse d'imagerie médicale (radios, scanners)",
      explication: "L'IA peut repérer des anomalies invisibles à l'œil nu."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on le fait qu'une IA donne parfois des informations totalement fausses avec assurance ?",
      options: ["Un mensonge", "Une hallucination", "Un bug systémique", "Un oubli"],
      reponse: "Une hallucination",
      explication: "L'IA invente une réponse plausible mais incorrecte."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est le principal ingrédient nécessaire pour entraîner une IA moderne ?",
      options: ["Du pétrole", "De grandes quantités de données (Big Data)", "Du papier", "Des câbles en or"],
      reponse: "De grandes quantités de données (Big Data)",
      explication: "La data est le 'carburant' de l'intelligence artificielle."
    },
    {
      id: "10",
      type: "qcm",
      question: "Pourquoi l'éthique de l'IA est-elle importante ?",
      options: ["Pour éviter que les robots ne tombent en panne", "Pour s'assurer que l'IA est juste, respecte la vie privée et ne nuit pas aux humains", "Pour rendre l'IA plus rapide", "Pour qu'elle soit plus jolie"],
      reponse: "Pour s'assurer que l'IA est juste, respecte la vie privée et ne nuit pas aux humains",
      explication: "On doit fixer des règles pour que l'IA reste bénéfique pour la société."
    }
  ]
};
