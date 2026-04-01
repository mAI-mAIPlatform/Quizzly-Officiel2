import { Quiz } from "@/types/quiz";

export const quiz320: Quiz = {
  id: "320",
  titre: "Technologie : L'Intelligence Artificielle 🤖",
  description: "Explorez les concepts et l'histoire de la technologie qui change le monde.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est considéré comme le père de l'intelligence artificielle ?",
      options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Elon Musk"],
      reponse: "Alan Turing",
      explication: "Il a créé le 'Test de Turing' pour mesurer l'intelligence d'une machine."
    },
    {
      id: "2",
      type: "qcm",
      question: "Que signifie l'acronyme IA en français ?",
      options: ["Informatique Avancée", "Interconnexion Automatique", "Intelligence Artificielle", "Interface Analogique"],
      reponse: "Intelligence Artificielle",
      explication: "Elle désigne les machines imitant des fonctions cognitives humaines."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment s'appelle l'IA de Google qui a battu le champion du monde de Go ?",
      options: ["Deep Blue", "AlphaGo", "Siri", "Watson"],
      reponse: "AlphaGo",
      explication: "La victoire contre Lee Sedol en 2016 a été un tournant majeur."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce que le 'Machine Learning' ?",
      options: ["Une machine à laver intelligente", "L'apprentissage automatique des machines par les données", "Une école de robotique", "Un type de batterie"],
      reponse: "L'apprentissage automatique des machines par les données",
      explication: "L'ordinateur apprend à partir d'exemples plutôt que d'être programmé explicitement."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel chatbot d'OpenAI est devenu célèbre fin 2022 ?",
      options: ["ChatGPT", "Bard", "Jasper", "Replika"],
      reponse: "ChatGPT",
      explication: "Il utilise un modèle de langage géant (GPT)."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que simulent les 'Réseaux de neurones artificiels' ?",
      options: ["Le réseau Internet", "Les neurones du cerveau humain", "Des circuits électriques simples", "Un réseau social"],
      reponse: "Les neurones du cerveau humain",
      explication: "C'est une architecture informatique inspirée de la biologie."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel test sert à déterminer si une IA est capable d'imiter une conversation humaine ?",
      options: ["Test de Rorschach", "Test de Turing", "Test d'Einstein", "Test de Voight-Kampff"],
      reponse: "Test de Turing",
      explication: "Si un humain ne peut pas dire s'il parle à un robot, le test est réussi."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'une IA 'Générative' ?",
      options: ["Une IA qui répare des choses", "Une IA qui crée du nouveau contenu (textes, images, musiques)", "Une IA qui compte les gens", "Une IA qui s'éteint toute seule"],
      reponse: "Une IA qui crée du nouveau contenu (textes, images, musiques)",
      explication: "Comme Midjourney pour les images ou ChatGPT pour le texte."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on le domaine de l'IA qui permet aux machines de comprendre le langage humain ?",
      options: ["NLP (Natural Language Processing)", "PDF (Process Data File)", "GPU (Graphics Processing Unit)", "CPU"],
      reponse: "NLP (Natural Language Processing)",
      explication: "En français : Traitement du Langage Naturel (TLN)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qui a formulé les 'Trois lois de la robotique' dans ses livres de SF ?",
      options: ["Isaac Asimov", "Philip K. Dick", "Arthur C. Clarke", "H.G. Wells"],
      reponse: "Isaac Asimov",
      explication: "Ces lois visent à empêcher les robots de nuire aux humains."
    }
  ]
};
