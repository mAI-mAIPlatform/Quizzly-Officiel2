import { Quiz } from "@/types/quiz";

export const quiz711: Quiz = {
  id: "711",
  titre: "Français : Les Classes Grammaticales 📝",
  description: "Distinguer les noms, adjectifs, verbes et autres outils de la langue.",
  theme: "Français",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la classe grammaticale du mot 'petit' dans : 'Le petit chat dort' ?",
      options: ["Nom", "Adjectif qualificatif", "Verbe", "Adverbe"],
      reponse: "Adjectif qualificatif",
      explication: "'Petit' donne une information sur le nom 'chat'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Parmi ces mots, lequel est un pronom ?",
      options: ["Maison", "Nous", "Manger", "Rapidement"],
      reponse: "Nous",
      explication: "'Nous' est un pronom personnel."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'adverbe est une classe grammaticale variable.",
      reponse: "Faux",
      explication: "Un adverbe est invariable (il ne change jamais de forme)."
    },
    {
      id: "4",
      type: "courte",
      question: "Quelle est la classe grammaticale du mot 'sous' ?",
      reponse: "Préposition",
      explication: "'Sous' introduit un complément de lieu."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans 'Il chante bien', que modifie 'bien' ?",
      options: ["Le nom", "Le verbe", "L'adjectif", "Le pronom"],
      reponse: "Le verbe",
      explication: "L'adverbe 'bien' précise comment il chante."
    },
    {
      id: "6",
      type: "qcm",
      question: "Un nom propre commence toujours par...",
      options: ["Une majuscule", "Un point", "Un tiret", "Une minuscule"],
      reponse: "Une majuscule",
      explication: "Exemple : Paris, Paul, France."
    },
    {
      id: "7",
      type: "vrai_faux",
      question: "Un déterminant se place généralement avant le nom.",
      reponse: "Vrai",
      explication: "Exemple : LE chat, UN livre."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel mot est une conjonction de coordination ?",
      options: ["Le", "Mais", "Petit", "Finir"],
      reponse: "Mais",
      explication: "Mais, ou, et, donc, or, ni, car."
    },
    {
      id: "9",
      type: "courte",
      question: "À quelle classe grammaticale appartient 'Hélas !' ?",
      reponse: "Interjection",
      explication: "Une interjection exprime un sentiment vif."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans 'Le chat mange', quel mot est le verbe ?",
      options: ["Le", "Chat", "Mange", "Aucun"],
      reponse: "Mange",
      explication: "C'est l'action du sujet."
    }
  ]
};
