import { Quiz } from "@/types/quiz";

export const quiz507: Quiz = {
  id: "507",
  titre: "Français : Sujet et Verbe 🧐",
  description: "Apprenez à identifier qui fait l'action et comment accorder le verbe.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle question pose-t-on pour trouver le sujet d'une phrase ?",
      options: ["Quoi ?", "Où ?", "Qui est-ce qui... ? / Qu'est-ce qui... ?", "Quand ?"],
      reponse: "Qui est-ce qui... ? / Qu'est-ce qui... ?",
      explication: "Le sujet est celui qui réalise l'action exprimée par le verbe."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans 'Le petit chien de ma voisine aboie', quel est le groupe sujet ?",
      options: ["Le petit chien", "Ma voisine", "Le petit chien de ma voisine", "Chien"],
      reponse: "Le petit chien de ma voisine",
      explication: "C'est l'ensemble du groupe nominal qui fait l'action d'aboyer."
    },
    {
      id: "3",
      type: "qcm",
      question: "Accords : 'Les enfants [jouer] au ballon'.",
      options: ["Joue", "Jouent", "Jouer", "Joues"],
      reponse: "Jouent",
      explication: "Le sujet est pluriel (ils), le verbe prend la terminaison -ent."
    },
    {
      id: "4",
      type: "qcm",
      question: "Lorsque le sujet est 'Nous', quelle est la terminaison du verbe (au présent) ?",
      options: ["-ez", "-ent", "-ons", "-as"],
      reponse: "-ons",
      explication: "Exemple : Nous chantons."
    },
    {
      id: "5",
      type: "qcm",
      question: "Où se place généralement le sujet par rapport au verbe dans une phrase affirmative ?",
      options: ["Après le verbe", "Avant le verbe", "Au milieu du verbe", "À la toute fin seulement"],
      reponse: "Avant le verbe",
      explication: "Sujet + Verbe + Compléments."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans une phrase interrogative (question), que se passe-t-il souvent ?",
      options: ["Le sujet disparaît", "Le sujet est inversé (placé après le verbe)", "Le verbe devient un nom", "Le sujet devient pluriel"],
      reponse: "Le sujet est inversé (placé après le verbe)",
      explication: "Exemple : 'Où vas-tu ?' au lieu de 'Tu vas où ?'."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel pronom peut remplacer le sujet 'Marie et moi' ?",
      options: ["Vous", "Nous", "Ils", "Elles"],
      reponse: "Nous",
      explication: "Dès qu'il y a 'moi' dans un groupe, le pronom est 'Nous'."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel pronom peut remplacer le sujet 'Paul et toi' ?",
      options: ["Ils", "Nous", "Vous", "Elles"],
      reponse: "Vous",
      explication: "Dès qu'il y a 'toi' (sans 'moi'), le pronom est 'Vous'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Accords : 'Le chat et le chien [dormir]'.",
      options: ["Dort", "Dorment", "Dors", "Dormir"],
      reponse: "Dorment",
      explication: "Deux sujets au singulier forment un sujet pluriel."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans 'C'est moi qui [gagner]', comment s'accorde le verbe ?",
      options: ["Gagne", "Gagnes", "Gagnent", "Gagnons"],
      reponse: "Gagne",
      explication: "Le verbe s'accorde avec le pronom 'moi' (1ère personne du singulier -> je gagne)."
    }
  ]
};
