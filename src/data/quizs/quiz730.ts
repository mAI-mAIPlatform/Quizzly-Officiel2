import { Quiz } from "@/types/quiz";

export const quiz730: Quiz = {
  id: "730",
  titre: "La République Française : Symboles et Valeurs 🇫🇷",
  description: "Connaître les fondements de notre démocratie et les signes de la France.",
  theme: "Culture Générale",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelles sont les trois couleurs du drapeau français ?",
      options: ["Bleu, Blanc, Rouge", "Vert, Blanc, Rouge", "Rouge, Jaune, Noir", "Bleu, Jaune, Rouge"],
      reponse: "Bleu, Blanc, Rouge",
      explication: "Adopté pendant la Révolution française."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la devise de la République française ?",
      options: ["Paix, Travail, Patrie", "Liberté, Égalité, Fraternité", "Justice, Honneur, Courage", "Travail, Famille, Patrie"],
      reponse: "Liberté, Égalité, Fraternité",
      explication: "Inscrite sur les frontons des mairies."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La Marseillaise est l'hymne national de la France.",
      reponse: "Vrai",
      explication: "Chant de guerre composé par Rouget de Lisle."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la figure féminine coiffée d'un bonnet phrygien ?",
      reponse: "Marianne",
      explication: "Elle incarne la République."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel est l'oiseau qui sert souvent de symbole à la France ?",
      options: ["L'Aigle", "Le Coq", "La Colombe", "Le Faucon"],
      reponse: "Le Coq",
      explication: "Le coq gaulois."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le 14 juillet célèbre la Fête nationale.",
      reponse: "Vrai",
      explication: "En référence à la prise de la Bastille (1789) et à la fête de la Fédération (1790)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce que la laïcité ?",
      options: ["L'interdiction de prier", "La séparation de l'Église et de l'État", "Une religion obligatoire", "Un parti politique"],
      reponse: "La séparation de l'Église et de l'État",
      explication: "Garantit la liberté de conscience pour tous."
    },
    {
      id: "8",
      type: "courte",
      question: "Dans quel bâtiment travaille le Président de la République ?",
      reponse: "Élysée",
      explication: "Le Palais de l'Élysée."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'emblème de la ville de Paris ?",
      options: ["Un bateau", "Une tour", "Un lion", "Une fleur"],
      reponse: "Un bateau",
      explication: "Avec la devise 'Fluctuat nec mergitur'."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le droit de vote des femmes en France date de 1944.",
      reponse: "Vrai",
      explication: "Elles ont voté pour la première fois en 1945."
    }
  ]
};
