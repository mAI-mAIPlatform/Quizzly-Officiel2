import { Quiz } from "@/types/quiz";

export const quiz483: Quiz = {
  id: "483",
  titre: "Informatique : L'IA Générative 🤖🎨",
  description: "Découvrez les secrets de l'intelligence artificielle qui crée du texte et des images.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie 'IA Générative' ?",
      options: ["Une IA qui génère de l'électricité", "Une IA capable de créer du contenu nouveau (texte, image, son) à partir de données existantes", "Une IA qui commande des courses", "Une IA qui répare les ordinateurs"],
      reponse: "Une IA capable de créer du contenu nouveau (texte, image, son) à partir de données existantes",
      explication: "Elle ne se contente pas d'analyser, elle produit."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces services est un célèbre agent conversationnel (chatbot) basé sur l'IA générative ?",
      options: ["Excel", "ChatGPT", "Instagram", "Firefox"],
      reponse: "ChatGPT",
      explication: "Développé par OpenAI, il est basé sur des modèles de langage de grande taille (LLM)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on l'instruction (phrase ou consigne) donnée à une IA pour obtenir un résultat ?",
      options: ["Un script", "Un prompt", "Une commande", "Un code"],
      reponse: "Un prompt",
      explication: "L'art de bien rédiger ces instructions est appelé le 'Prompt Engineering'."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce qu'un 'LLM' (Large Language Model) ?",
      options: ["Un petit logiciel", "Un modèle d'IA entraîné sur d'immenses quantités de texte pour prédire le mot suivant", "Un ordinateur géant", "Une langue étrangère"],
      reponse: "Un modèle d'IA entraîné sur d'immenses quantités de texte pour prédire le mot suivant",
      explication: "C'est la technologie derrière GPT-4, Claude ou Llama."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel service d'IA est réputé pour sa capacité à générer des images extrêmement réalistes ou artistiques ?",
      options: ["Spotify", "Midjourney", "Google Maps", "Dropbox"],
      reponse: "Midjourney",
      explication: "DALL-E et Stable Diffusion sont d'autres exemples populaires."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que signifie le terme 'Hallucination' dans le contexte d'une IA générative ?",
      options: ["L'IA s'éteint", "L'IA invente des faits faux en les présentant avec assurance comme étant vrais", "L'IA change de couleur", "L'IA demande des vacances"],
      reponse: "L'IA invente des faits faux en les présentant avec assurance comme étant vrais",
      explication: "C'est l'un des principaux défauts des modèles actuels."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle entreprise a créé le modèle d'IA nommé 'Gemini' ?",
      options: ["Microsoft", "Google", "Meta", "Apple"],
      reponse: "Google",
      explication: "Gemini est conçu pour être multimodal (comprendre texte, image, vidéo, audio)."
    },
    {
      id: "8",
      type: "qcm",
      question: "L'IA générative peut-elle aussi écrire du code informatique ?",
      options: ["Non, c'est trop précis", "Oui, elle peut générer, corriger et expliquer du code dans de nombreux langages", "Seulement en HTML", "C'est interdit"],
      reponse: "Oui, elle peut générer, corriger et expliquer du code dans de nombreux langages",
      explication: "Des outils comme GitHub Copilot assistent quotidiennement les développeurs."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'un des grands enjeux éthiques de l'IA générative d'images ?",
      options: ["La consommation d'eau", "Le droit d'auteur (copyright) des images utilisées pour l'entraînement", "La taille des fichiers", "La vitesse de rendu"],
      reponse: "Le droit d'auteur (copyright) des images utilisées pour l'entraînement",
      explication: "Beaucoup d'artistes s'inquiètent de l'usage de leurs œuvres sans leur consentement."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Deepfake' ?",
      options: ["Un faux site web", "Une vidéo ou un enregistrement audio ultra-réaliste généré par IA pour faire dire ou faire des choses à quelqu'un qu'il n'a jamais faites", "Une panne d'ordinateur", "Un mot de passe compliqué"],
      reponse: "Une vidéo ou un enregistrement audio ultra-réaliste généré par IA pour faire dire ou faire des choses à quelqu'un qu'il n'a jamais faites",
      explication: "C'est un outil puissant mais potentiellement dangereux en terme de désinformation."
    }
  ]
};
