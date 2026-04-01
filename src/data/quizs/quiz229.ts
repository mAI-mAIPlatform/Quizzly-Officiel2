import { Quiz } from "@/types/quiz";

export const quiz229: Quiz = {
  id: "229",
  titre: "L'Intelligence Artificielle 🧠💻",
  description: "Désamorcez le vrai du faux sur les machines qui pensent et les algorithmes du futur.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel mathématicien britannique est considéré comme le père de l'IA et a inventé un test pour mesurer l'intelligence d'une machine ?",
      options: ["Isaac Newton", "Alan Turing", "Stephen Hawking", "Ada Lovelace"],
      reponse: "Alan Turing",
      explication: "Le 'Test de Turing' consiste à voir si un humain peut être dupé par une machine lors d'une conversation par écrit."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on la branche de l'IA permettant aux machines d'apprendre par elles-mêmes à partir de données ?",
      options: ["Le Soft Coding", "Le Machine Learning (Apprentissage automatique)", "Le Data Mining", "L'Algorithmique Pure"],
      reponse: "Le Machine Learning (Apprentissage automatique)",
      explication: "C'est la base de la plupart des IA actuelles (reconnaissance faciale, recommandations, etc.)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel superordinateur d'IBM a battu le champion du monde d'échecs Garry Kasparov en 1997 ?",
      options: ["Deep Blue", "Watson", "AlphaGo", "HAL 9000"],
      reponse: "Deep Blue",
      explication: "Ce fut la première fois qu'une machine battait un champion du monde en match officiel."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle IA développée par Google DeepMind a battu le meilleur joueur du monde de l'un des jeux les plus complexes, le Go ?",
      options: ["Deep Blue", "AlphaGo", "Siri", "Alexa"],
      reponse: "AlphaGo",
      explication: "Le jeu de Go possède plus de combinaisons possibles que d'atomes dans l'univers."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle l'agent conversationnel (chatbot) lancé par OpenAI fin 2022, basé sur le modèle GPT ?",
      options: ["ChatGPT", "Claude", "Bard", "Jasper"],
      reponse: "ChatGPT",
      explication: "Il a déclenché une vague mondiale d'intérêt pour les IA 'génératives'."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce qu'une 'IA Générative' ?",
      options: ["Une IA qui répare les ordinateurs", "Une IA capable de créer de nouveaux contenus (texte, image, musique)", "Une IA qui gère la batterie", "Une IA qui trie des dossiers"],
      reponse: "Une IA capable de créer de nouveaux contenus (texte, image, musique)",
      explication: "DALL-E (image) ou GPT (texte) en sont des exemples."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans le domaine de l'IA, qu'est-ce qu'un 'Réseau de Neurones' ?",
      options: ["Un cerveau humain greffé", "Un modèle informatique inspiré de la structure des neurones biologiques", "Un câble internet en cuivre", "Une antenne Wi-Fi"],
      reponse: "Un modèle informatique inspiré de la structure des neurones biologiques",
      explication: "C'est la brique de base du Deep Learning (apprentissage profond)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est l'un des principaux dilemmes éthiques de l'IA ?",
      options: ["La consommation de papier", "Les biais algorithmiques (discriminations reproduites par l'IA)", "Le bruit des serveurs", "La couleur des icônes"],
      reponse: "Les biais algorithmiques (discriminations reproduites par l'IA)",
      explication: "Si les données d'apprentissage sont biaisées, l'IA risque de prendre des décisions injustes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie le 'G' dans ChatGPT ?",
      options: ["General", "Generative", "Global", "Great"],
      reponse: "Generative",
      explication: "GPT signifie 'Generative Pre-trained Transformer'."
    },
    {
      id: "10",
      type: "qcm",
      question: "L'IA actuelle est-elle capable de ressentir des émotions réelles ?",
      options: ["Oui, certaines sont déjà conscientes", "Non, elle simule seulement la compréhension par le calcul statistique", "Seulement le dimanche", "On ne sait pas"],
      reponse: "Non, elle simule seulement la compréhension par le calcul statistique",
      explication: "L'IA ne 'comprend' pas le sens profond, elle prédit la suite probable de caractères ou de pixels."
    }
  ]
};
