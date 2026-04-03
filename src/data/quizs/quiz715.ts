import { Quiz } from "@/types/quiz";

export const quiz715: Quiz = {
  id: "715",
  titre: "Français : Orthographe et Accords ✍️",
  description: "Accorder correctement le verbe avec le sujet et l'adjectif avec le nom.",
  theme: "Français",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Accorde : 'Une foule de gens (arriver)'.",
      options: ["Arrivent", "Arrive", "Arrives", "Arrivait"],
      reponse: "Arrive",
      explication: "L'accord se fait souvent avec le nom singulier 'foule'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel est correct ?",
      options: ["Des robes marrons", "Des robes marron", "Des robe marron", "Des robes maron"],
      reponse: "Des robes marron",
      explication: "Marron (fruit) utilisé comme couleur est invariable."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Avec 'Toi et moi', le verbe se conjugue à nous.",
      reponse: "Vrai",
      explication: "Toi + moi = Nous."
    },
    {
      id: "4",
      type: "courte",
      question: "Accorde 'bleu' : 'Des yeux ...'.",
      reponse: "bleus",
      explication: "L'adjectif bleu prend un 's' au pluriel."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'accorde 'châtain' ?",
      options: ["Invariable", "Comme un adjectif", "Seulement au féminin", "Seulement au pluriel"],
      reponse: "Comme un adjectif",
      explication: "Des cheveux châtains."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "On écrit : 'Ils se sont lavés les mains'.",
      reponse: "Faux",
      explication: "Il y a un COD après le verbe (les mains), on n'accorde pas."
    },
    {
      id: "7",
      type: "qcm",
      question: "Lequel est correct ?",
      options: ["Quatre-vingts euros", "Quatre-vingt euros", "Quatre-vingt euro", "Quatre-vingts euro"],
      reponse: "Quatre-vingts euros",
      explication: "Vingt prend un 's' quand il est multiplié et qu'il n'y a rien après."
    },
    {
      id: "8",
      type: "courte",
      question: "Accorde : 'C'est toi qui (être) là.'",
      reponse: "es",
      explication: "Le verbe s'accorde avec 'toi' (tu es)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment écrit-on 1000 au pluriel ?",
      options: ["Milles", "Mille", "Mils", "Mi-mille"],
      reponse: "Mille",
      explication: "Mille est invariable."
    },
    {
      id: "10",
      type: "courte",
      question: "Complète : 'Ils se sont (parler).'",
      reponse: "parlé",
      explication: "On parle À quelqu'un (COI), pas d'accord."
    }
  ]
};
