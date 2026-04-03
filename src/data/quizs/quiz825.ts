import { Quiz } from "@/types/quiz";

export const quiz825: Quiz = {
  id: "825",
  titre: "Littérature : Victor Hugo ✍️📖",
  description: "Plongez dans l'œuvre du plus grand écrivain français du XIXème siècle.",
  theme: "Littérature",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces romans est le plus célèbre de Victor Hugo ?",
      options: ["Le Petit Prince", "Les Misérables", "Le Comte de Monte-Cristo", "Madame Bovary"],
      reponse: "Les Misérables",
      explication: "Un immense roman qui raconte l'histoire de Jean Valjean."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui est le personnage principal des 'Misérables', ancien forçat en quête de rachat ?",
      options: ["Javert", "Gavroche", "Jean Valjean", "Marius"],
      reponse: "Jean Valjean",
      explication: "Son numéro de prisonnier était 24601."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Victor Hugo a écrit 'Notre-Dame de Paris'.",
      reponse: "Vrai",
      explication: "Un roman historique où l'on rencontre Quasimodo et Esmeralda."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le personnage de l'enfant courageux qui meurt sur les barricades dans 'Les Misérables' ?",
      reponse: "Gavroche",
      explication: "Le petit 'titi parisien'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans 'Notre-Dame de Paris', quel est le métier (un peu forcé) de Quasimodo ?",
      options: ["Forgeron", "Sonneur de cloches", "Garde du corps", "Écrivain"],
      reponse: "Sonneur de cloches",
      explication: "Il vit dans les tours de la cathédrale."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Victor Hugo était aussi un homme politique qui s'est battu contre la peine de mort.",
      reponse: "Vrai",
      explication: "Il a écrit 'Le Dernier Jour d'un condamné' pour dénoncer cette pratique."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est le nom de la petite fille que Jean Valjean adopte et protège ?",
      options: ["Fantine", "Cosette", "Eponine", "Esmeralda"],
      reponse: "Cosette",
      explication: "Elle était maltraitée par les Thénardier."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'inspecteur de police qui poursuit Jean Valjean pendant des années ?",
      reponse: "Javert",
      explication: "Il représente la loi implacable."
    },
    {
      id: "9",
      type: "qcm",
      question: "Où Victor Hugo a-t-il passé des années en exil (sur des îles) car il n'aimait pas Napoléon III ?",
      options: ["À Malte", "À Jersey et Guernesey", "En Corse", "À la Réunion"],
      reponse: "À Jersey et Guernesey",
      explication: "Il y a écrit ses plus grandes œuvres poétiques."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Victor Hugo n'a écrit que des romans.",
      reponse: "Faux",
      explication: "Il était poète, dramaturge (pièces de théâtre) et essayiste."
    }
  ]
};
