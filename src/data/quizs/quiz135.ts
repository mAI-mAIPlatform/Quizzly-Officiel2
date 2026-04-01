import { Quiz } from "@/types/quiz";

export const quiz135: Quiz = {
  id: "135",
  titre: "Robotique & IA 🤖",
  description: "Découvrez le monde des robots, des algorithmes et du futur technologique.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le sigle IA ?",
      options: ["Informatique Avancée", "Intelligence Artificielle", "Interaction Automatique", "Image Animée"],
      reponse: "Intelligence Artificielle",
      explication: "L'IA est la simulation de l'intelligence humaine par des machines."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui est l'auteur célèbre des 'Trois lois de la robotique' ?",
      options: ["H.G. Wells", "Isaac Asimov", "Philip K. Dick", "Arthur C. Clarke"],
      reponse: "Isaac Asimov",
      explication: "Ses lois visent à empêcher les robots de nuire aux humains."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel robot de Boston Dynamics est capable de faire du parkour et des salto arrière ?",
      options: ["Spot", "Atlas", "Optimus", "Aibo"],
      reponse: "Atlas",
      explication: "Atlas est un robot humanoïde impressionnant par son agilité."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on un robot qui ressemble à un être humain ?",
      options: ["Un androïde", "Un drone", "Un automate", "Un processeur"],
      reponse: "Un androïde",
      explication: "Le terme vient du grec 'andros' (homme) et 'eidos' (forme)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel test permet de déterminer si une IA peut se faire passer pour un humain ?",
      options: ["Le test de Turing", "Le test de Voight-Kampff", "Le test d'Einstein", "Le test de Tesla"],
      reponse: "Le test de Turing",
      explication: "Imaginé par Alan Turing en 1950, il évalue la capacité de conversation."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel capteur permet à un robot de mesurer la distance avec un objet ?",
      options: ["Le microphone", "L'accéléromètre", "Le capteur ultra-sons (ou LiDAR)", "Le gyroscope"],
      reponse: "Le capteur ultra-sons (ou LiDAR)",
      explication: "Il fonctionne comme un radar pour éviter les obstacles."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle l'IA d'OpenAI capable de discuter et de répondre à des questions complexes ?",
      options: ["Siri", "Alexa", "ChatGPT", "Deep Blue"],
      reponse: "ChatGPT",
      explication: "C'est un modèle de langage (LLM) très populaire."
    },
    {
      id: "8",
      type: "qcm",
      question: "Dans quel domaine les robots 'chirurgiens' sont-ils utilisés ?",
      options: ["L'agriculture", "La médecine", "La cuisine", "Le jardinage"],
      reponse: "La médecine",
      explication: "Ils permettent des opérations très précises et peu invasives."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est le nom du célèbre chien-robot jaune de Boston Dynamics ?",
      options: ["Rex", "Rover", "Spot", "Buddy"],
      reponse: "Spot",
      explication: "Spot peut se déplacer sur des terrains difficiles et inspecter des sites."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel composant électronique sert de 'cerveau' à un petit robot ?",
      options: ["La batterie", "La roue", "Le microcontrôleur (ex: Arduino)", "Le châssis"],
      reponse: "Le microcontrôleur (ex: Arduino)",
      explication: "Il reçoit les informations des capteurs et commande les moteurs."
    }
  ]
};
