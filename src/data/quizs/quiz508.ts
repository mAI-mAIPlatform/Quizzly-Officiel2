import { Quiz } from "@/types/quiz";

export const quiz508: Quiz = {
  id: "508",
  titre: "Français : Les Compléments d'Objet (COD/COI) 🎯",
  description: "Distinguez les compléments directs et indirects pour mieux construire vos phrases.",
  theme: "Langues",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle question pose-t-on après le verbe pour trouver le COD (Complément d'Objet Direct) ?",
      options: ["À qui ? À quoi ?", "Qui ? Quoi ?", "Où ?", "Comment ?"],
      reponse: "Qui ? Quoi ?",
      explication: "Exemple : 'Je mange une pomme' -> Je mange QUOI ? -> 'Une pomme' (COD)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle question pose-t-on après le verbe pour trouver le COI (Complément d'Objet Indirect) ?",
      options: ["Qui ? Quoi ?", "À qui ? À quoi ? / De qui ? De quoi ?", "Quand ?", "Pourquoi ?"],
      reponse: "À qui ? À quoi ? / De qui ? De quoi ?",
      explication: "Exemple : 'Je parle à mon ami' -> 'À mon ami' (COI)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la principale différence visuelle entre un COD et un COI ?",
      options: ["Le COD est plus long", "Le COI commence par une préposition (à, de...)", "Le COD est toujours un nom propre", "Il n'y a pas de différence"],
      reponse: "Le COI commence par une préposition (à, de...)",
      explication: "C'est pour cela qu'il est qualifié d''indirect'."
    },
    {
      id: "4",
      type: "qcm",
      question: "Dans 'Le chat regarde l'oiseau', quelle est la fonction de 'l'oiseau' ?",
      options: ["Sujet", "COD", "COI", "Complément de lieu"],
      reponse: "COD",
      explication: "Le chat regarde QUI ? -> l'oiseau."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans 'Elle téléphone à son cousin', quelle est la fonction de 'à son cousin' ?",
      options: ["COD", "COI", "Sujet", "Attribut"],
      reponse: "COI",
      explication: "Elle téléphone À QUI ? -> à son cousin."
    },
    {
      id: "6",
      type: "qcm",
      question: "Un complément d'objet peut-il être supprimé sans changer le sens de base ou rendre la phrase incorrecte ?",
      options: ["Oui, toujours", "Non, généralement il est essentiel au sens du verbe", "Seulement si c'est un COD", "Seulement si c'est un COI"],
      reponse: "Non, généralement il est essentiel au sens du verbe",
      explication: "Contrairement au complément circonstanciel (lieu, temps), on ne peut pas dire 'Je mange' sans imaginer un objet."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel pronom peut remplacer un COD masculin singulier ?",
      options: ["Le", "Lui", "Y", "En"],
      reponse: "Le",
      explication: "Exemple : 'Je vois le chat' -> 'Je LE vois'."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel pronom peut remplacer un COI introduit par 'à' ?",
      options: ["Le", "Lui", "La", "Les"],
      reponse: "Lui",
      explication: "Exemple : 'Je parle à Marie' -> 'Je LUI parle'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans 'Marc donne un cadeau à Julie', quel est le COD ?",
      options: ["Marc", "Un cadeau", "À Julie", "Donne"],
      reponse: "Un cadeau",
      explication: "Marc donne QUOI ? -> un cadeau."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans la même phrase 'Marc donne un cadeau à Julie', qu'est-ce que 'à Julie' ?",
      options: ["Le deuxième COD", "Le COI (parfois appelé COS - Complément d'Objet Second)", "Le sujet", "Un adverbe"],
      reponse: "Le COI (parfois appelé COS - Complément d'Objet Second)",
      explication: "Il complète le verbe en deuxième position."
    }
  ]
};
