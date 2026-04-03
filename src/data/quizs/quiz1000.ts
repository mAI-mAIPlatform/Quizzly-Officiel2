import { Quiz } from "@/types/quiz";

export const quiz1000: Quiz = {
  id: "1000",
  titre: "🏆 LE GRAND QUIZ DES 1000 ! 🏆",
  description: "Félicitations ! Vous avez atteint le 1000ème quiz. Voici un défi ultime regroupant tous les thèmes !",
  theme: "Mixte",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel pays a offert la Statue de la Liberté aux États-Unis ?",
      options: ["Le Royaume-Uni", "La France", "L'Italie", "L'Espagne"],
      reponse: "La France",
      explication: "C'était en signe d'amitié entre les deux peuples pour le centenaire de l'indépendance."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel peintre a réalisé le célèbre tableau 'Le Cri' ?",
      options: ["Pablo Picasso", "Edvard Munch", "Vincent van Gogh", "Claude Monet"],
      reponse: "Edvard Munch",
      explication: "C'est une œuvre majeure de l'expressionnisme."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'ADN est une molécule en forme de double hélice qui contient nos gènes.",
      reponse: "Vrai",
      explication: "Elle a été découverte en 1953 par Crick, Watson et Franklin."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le plus petit pays du monde ?",
      reponse: "Le Vatican",
      explication: "C'est une cité-état située au centre de Rome."
    },
    {
      id: "5",
      type: "qcm",
      question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?",
      options: ["1961", "1969", "1975", "1981"],
      reponse: "1969",
      explication: "Mission Apollo 11 avec Neil Armstrong et Buzz Aldrin."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'Amazonie produit environ 20% de l'oxygène mondial.",
      reponse: "Vrai",
      explication: "C'est la plus grande forêt tropicale du monde."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la capitale de l'Australie ?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      reponse: "Canberra",
      explication: "Sydney est la plus grande ville, mais Canberra est la capitale politique."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel savant a formulé la théorie de la relativité générale (E=mc²) ?",
      reponse: "Albert Einstein",
      explication: "Il a révolutionné notre compréhension du temps et de l'espace."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel monument parisien a été construit pour l'Exposition Universelle de 1889 ?",
      options: ["L'Arc de Triomphe", "La Tour Eiffel", "Le Sacré-Cœur", "Le Louvre"],
      reponse: "La Tour Eiffel",
      explication: "Elle devait être temporaire mais elle est restée !"
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Vous venez de terminer le 1000ème quiz de Quizzly ! Êtes-vous prêt pour la suite ?",
      reponse: "Vrai",
      explication: "Félicitations pour votre persévérance et votre soif de savoir ! 🌟👑🏆"
    }
  ]
};
