import { Quiz } from "@/types/quiz";

export const quiz822: Quiz = {
  id: "822",
  titre: "Littérature : Les Fables de La Fontaine 🦊🧀",
  description: "Testez votre mémoire sur les morales les plus célèbres de Jean de La Fontaine.",
  theme: "Littérature",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans 'Le Corbeau et le Renard', que tient le corbeau dans son bec ?",
      options: ["Un ver de terre", "Un fromage", "Une clé", "Un morceau de pain"],
      reponse: "Un fromage",
      explication: "Le renard le flatte pour lui voler son repas."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui gagne la course dans 'Le Lièvre et la Tortue' ?",
      options: ["Le lièvre", "La tortue", "Ils font match nul", "Le renard"],
      reponse: "La tortue",
      explication: "Morale : 'Rien ne sert de courir ; il faut partir à point'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La Cigale a passé l'été à ramasser des grains pour l'hiver.",
      reponse: "Faux",
      explication: "La Cigale ayant chanté tout l'été, se trouva fort dépourvue quand la bise fut venue."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel animal est le symbole de la force dans les fables ? Le ...",
      reponse: "Lion",
      explication: "Il est souvent représenté comme le roi des animaux."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans 'Le Loup et l'Agneau', de quoi le loup accuse-t-il l'agneau ?",
      options: ["De lui avoir volé sa viande", "De troubler son breuvage (l'eau)", "De chanter trop fort", "D'être trop petit"],
      reponse: "De troubler son breuvage (l'eau)",
      explication: "Morale : 'La raison du plus fort est toujours la meilleure'."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Jean de La Fontaine s'est inspiré d'un auteur grec nommé Ésope.",
      reponse: "Vrai",
      explication: "La plupart de ses fables sont des réécritures d'histoires antiques."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel petit animal sauve le lion dans une fable célèbre ?",
      options: ["Une fourmi", "Un rat", "Une souris", "Une abeille"],
      reponse: "Un rat",
      explication: "Il ronge les mailles du filet. Morale : 'On a souvent besoin d'un plus petit que soi'."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la petite leçon à la fin d'une fable ?",
      reponse: "Morale",
      explication: "Elle nous apprend quelque chose sur la vie ou les hommes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans 'La Grenouille qui veut se faire aussi grosse que le Bœuf', que se passe-t-il à la fin ?",
      options: ["Elle réussit", "Elle s'étouffe", "Elle s'enfle si bien qu'elle crève", "Elle devient un bœuf"],
      reponse: "Elle s'enfle si bien qu'elle crève",
      explication: "Morale : il ne faut pas essayer de paraître ce qu'on n'est pas."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "La Fontaine utilisait les animaux pour se moquer des hommes et de la cour du roi.",
      reponse: "Vrai",
      explication: "C'était une manière de critiquer la société sans être puni par Louis XIV."
    }
  ]
};
