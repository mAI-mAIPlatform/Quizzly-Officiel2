import { Quiz } from "@/types/quiz";

export const quiz718: Quiz = {
  id: "718",
  titre: "Littérature : Les Fables de La Fontaine 🦊",
  description: "Tester ses connaissances sur les célèbres fables et leurs morales.",
  theme: "Français",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans 'Le Corbeau et le Renard', que tient le corbeau ?",
      options: ["Un ver", "Un fromage", "Une clé", "Un bijou"],
      reponse: "Un fromage",
      explication: "'Maître Corbeau, sur un arbre perché, tenait en son bec un fromage'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la morale de 'La Cigale et la Fourmi' ?",
      options: ["Aider son prochain", "Il faut travailler pour ne pas manquer", "L'union fait la force", "Rien ne sert de courir"],
      reponse: "Il faut travailler pour ne pas manquer",
      explication: "La Cigale se trouve dépourvue pour n'avoir pas amassé de nourriture."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Jean de La Fontaine a vécu sous le règne de Louis XIV.",
      reponse: "Vrai",
      explication: "Il fait partie des grands auteurs classiques du XVIIe siècle."
    },
    {
      id: "4",
      type: "courte",
      question: "Lequel gagne la course contre le Lièvre ?",
      reponse: "La Tortue",
      explication: "Elle part à point et avance avec constance."
    },
    {
      id: "5",
      type: "qcm",
      question: "De quel animal la grenouille veut-elle égaler la taille ?",
      options: ["Un lion", "Un bœuf", "Un éléphant", "Un ours"],
      reponse: "Un bœuf",
      explication: "Elle s'enfle si bien qu'elle finit par crever."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Une fable met généralement en scène des animaux qui parlent.",
      reponse: "Vrai",
      explication: "C'est une personnification pour illustrer des comportements humains."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans 'Le Loup et l'Agneau', qui a raison selon La Fontaine ?",
      options: ["L'Agneau", "Le Loup", "La raison du plus fort est toujours la meilleure", "Le juge"],
      reponse: "La raison du plus fort est toujours la meilleure",
      explication: "C'est une morale amère sur l'injustice."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel animal flatte le corbeau pour obtenir son fromage ?",
      reponse: "Le Renard",
      explication: "Il utilise la ruse et les compliments."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment finit la fable 'La Grenouille qui veut se faire aussi grosse que le Bœuf' ?",
      options: ["Elle réussit", "Elle explose", "Elle abandonne", "Elle devient un bœuf"],
      reponse: "Elle explose",
      explication: "Elle enfla si bien qu'elle creva."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le but d'une fable selon La Fontaine ?",
      options: ["Dormir", "Plaire et instruire", "Faire peur", "Vendre des livres"],
      reponse: "Plaire et instruire",
      explication: "C'est la définition du genre classique (Placere et Docere)."
    }
  ]
};
