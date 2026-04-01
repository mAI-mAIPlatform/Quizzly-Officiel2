import { Quiz } from "@/types/quiz";

export const quiz423: Quiz = {
  id: "423",
  titre: "Informatique : L'Intelligence Artificielle de Demain 🤖🧠",
  description: "Démystifiez les algorithmes qui imitent l'intelligence humaine.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que le 'Machine Learning' (Apprentissage automatique) ?",
      options: ["Un robot qui va à l'école", "Une méthode d'IA qui permet aux ordinateurs d'apprendre à partir de données sans être explicitement programmés", "Un nouveau langage de programmation", "Le fait de taper vite au clavier"],
      reponse: "Une méthode d'IA qui permet aux ordinateurs d'apprendre à partir de données sans être explicitement programmés",
      explication: "L'algorithme s'améliore au fur et à mesure qu'il analyse des exemples."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel test historique sert à déterminer si une machine peut passer pour un humain lors d'une conversation ?",
      options: ["Test de Voight-Kampff", "Test de Turing", "Test de QI", "Test de Captcha"],
      reponse: "Test de Turing",
      explication: "Imaginé par Alan Turing en 1950."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on le type d'IA capable de créer du texte, des images ou de la musique (ex: ChatGPT, Midjourney) ?",
      options: ["IA Analytique", "IA Générative", "IA Réactive", "IA Statique"],
      reponse: "IA Générative",
      explication: "Elle génère du contenu nouveau à partir d'un prompt (consigne)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel système s'inspire du fonctionnement du cerveau humain pour traiter les informations dans l'IA ?",
      options: ["Les réseaux de neurones (artificiels)", "Les puces électroniques", "Le cloud", "Les transistors"],
      reponse: "Les réseaux de neurones (artificiels)",
      explication: "Ils sont composés de couches de 'neurones' mathématiques."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que signifie l'acronyme 'LLM' ?",
      options: ["Long Life Machine", "Large Language Model (Grand modèle de langage)", "Logic Linear Map", "Low Level Memory"],
      reponse: "Large Language Model (Grand modèle de langage)",
      explication: "C'est la technologie derrière les chatbots modernes (GPT, Claude, Gemini)."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle entreprise a lancé ChatGPT en novembre 2022, déclenchant l'explosion actuelle de l'IA ?",
      options: ["Google", "Microsoft", "OpenAI", "Meta"],
      reponse: "OpenAI",
      explication: "ChatGPT est basé sur l'architecture GPT (Generative Pre-trained Transformer)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est le principal danger de l'IA quand elle invente des faits de manière très convaincante ?",
      options: ["L'explosion de l'ordinateur", "Les hallucinations", "La fatigue", "Le bug de l'an 2000"],
      reponse: "Les hallucinations",
      explication: "L'IA peut affirmer des choses fausses avec une assurance totale."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce que la 'Vision par ordinateur' ?",
      options: ["Porter des lunettes pour coder", "La capacité d'une IA à analyser et comprendre des images ou des vidéos", "Un nouveau type d'écran", "Savoir réparer un appareil photo"],
      reponse: "La capacité d'une IA à analyser et comprendre des images ou des vidéos",
      explication: "Indispensable pour les voitures autonomes et la reconnaissance faciale."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on une IA théorique qui serait capable d'égaler l'humain dans n'importe quelle tâche intellectuelle ?",
      options: ["IA Faible", "IA Forte (ou AGI - Artificial General Intelligence)", "IA de jeu", "IA Experte"],
      reponse: "IA Forte (ou AGI - Artificial General Intelligence)",
      explication: "C'est le but ultime de nombreux chercheurs, mais elle n'existe pas encore."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel jeu de table complexe a vu son champion du monde battu par l'IA AlphaGo en 2016 ?",
      options: ["Les Échecs", "Le Poker", "Le Jeu de Go", "Le Scrabble"],
      reponse: "Le Jeu de Go",
      explication: "C'était considéré comme une étape majeure car le Go repose beaucoup sur l'intuition."
    }
  ]
};
