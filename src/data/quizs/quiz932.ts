import { Quiz } from "@/types/quiz";

export const quiz932: Quiz = {
  id: "932",
  titre: "Sciences : Aimants et Magnétisme 🧲⚡",
  description: "Découvrez la force invisible qui attire ou repousse les objets.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel métal est fortement attiré par un aimant ?",
      options: ["L'or", "L'aluminium", "Le fer (ou l'acier)", "Le cuivre"],
      reponse: "Le fer (ou l'acier)",
      explication: "Le fer est un métal ferromagnétique."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appellent les deux extrémités d'un aimant ?",
      options: ["Le haut et le bas", "Le plus et le moins", "Le Pôle Nord et le Pôle Sud", "L'est et l'ouest"],
      reponse: "Le Pôle Nord et le Pôle Sud",
      explication: "Toutes les forces magnétiques partent de ces pôles."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Deux pôles identiques de deux aimants (ex: Nord et Nord) s'attirent.",
      reponse: "Faux",
      explication: "Les pôles identiques se repoussent, alors que les pôles opposés (Nord et Sud) s'attirent."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'outil qui utilise une aiguille aimantée pour indiquer le nord ?",
      reponse: "Boussole",
      explication: "Elle s'aligne sur le champ magnétique de la Terre."
    },
    {
      id: "5",
      type: "qcm",
      question: "La Terre elle-même se comporte comme ...",
      options: ["Un immense aimant", "Une boule de feu", "Un océan de métal", "Une éponge"],
      reponse: "Un immense aimant",
      explication: "Son noyau de fer et de nickel crée un champ magnétique protecteur."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Certains animaux (comme les oiseaux migrateurs) utilisent le champ magnétique terrestre pour s'orienter.",
      reponse: "Vrai",
      explication: "Ils possèdent de minuscules capteurs magnétiques naturels."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on un aimant que l'on peut 'allumer' ou 'éteindre' grâce à l'électricité ?",
      options: ["Un aimant magique", "Un électroaimant", "Une pile", "Un moteur"],
      reponse: "Un électroaimant",
      explication: "On le fabrique en enroulant un fil électrique autour d'un morceau de fer."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'endroit dans la cuisine où l'on 'colle' souvent des petits objets décoratifs aimantés ?",
      reponse: "Frigo",
      explication: "Ou réfrigérateur. La porte est en métal ferreux."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que se passe-t-il si l'on coupe un aimant en deux ?",
      options: ["On obtient un pôle Nord seul et un pôle Sud seul", "On obtient deux nouveaux aimants complets (chacun avec un Nord et un Sud)", "L'aimant perd son pouvoir", "L'aimant explose"],
      reponse: "On obtient deux nouveaux aimants complets (chacun avec un Nord et un Sud)",
      explication: "On ne peut pas séparer les pôles d'un aimant."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Certains trains ultra-rapides flottent au-dessus des rails grâce au magnétisme.",
      reponse: "Vrai",
      explication: "C'est le principe du 'Maglev' (Lévitation magnétique). Cela permet d'aller très vite sans frottement."
    }
  ]
};
