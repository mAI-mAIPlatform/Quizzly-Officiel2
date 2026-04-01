import { Quiz } from "@/types/quiz";

export const quiz501: Quiz = {
  id: "501",
  titre: "Français : Les Classes de Mots (6ème/5ème) 📝",
  description: "Distinguez les noms, verbes, adjectifs et autres natures de mots.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans la phrase 'Le petit chat dort', quelle est la classe du mot 'petit' ?",
      options: ["Nom", "Verbe", "Adjectif qualificatif", "Adverbe"],
      reponse: "Adjectif qualificatif",
      explication: "Il qualifie le nom 'chat'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces mots est un pronom personnel ?",
      options: ["Maison", "Nous", "Rapidement", "Grand"],
      reponse: "Nous",
      explication: "'Nous' remplace un groupe de personnes incluant celui qui parle."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la nature du mot 'lentement' ?",
      options: ["Adjectif", "Adverbe", "Préposition", "Conjonction"],
      reponse: "Adverbe",
      explication: "Les mots finissant en '-ment' sont souvent des adverbes de manière."
    },
    {
      id: "4",
      type: "qcm",
      question: "Citez une préposition classique de la liste (Adam part pour Anvers...) ?",
      options: ["Et", "Mais", "Chez", "Car"],
      reponse: "Chez",
      explication: "Les prépositions sont des mots invariables (à, dans, par, pour, en, vers, avec, de, sans, sous, chez...)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel mot est un déterminant possessif ?",
      options: ["Le", "Mon", "Un", "Ce"],
      reponse: "Mon",
      explication: "Il indique l'appartenance (mon, ton, son...)."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans 'Elle chante une chanson', quelle est la classe de 'chante' ?",
      options: ["Nom", "Verbe", "Adjectif", "Pronom"],
      reponse: "Verbe",
      explication: "C'est l'action de la phrase, conjuguée au présent."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel mot est une conjonction de coordination ?",
      options: ["Et (Mais, où, et, donc, or, ni, car)", "Derrière", "Lui", "Hier"],
      reponse: "Et (Mais, où, et, donc, or, ni, car)",
      explication: "Elle sert à relier deux mots ou deux groupes de mots de même nature."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la classe grammaticale de 'Paris' ?",
      options: ["Nom commun", "Nom propre", "Déterminant", "Adjectif"],
      reponse: "Nom propre",
      explication: "Il désigne un lieu unique et prend une majuscule."
    },
    {
      id: "9",
      type: "qcm",
      question: "Un mot 'invariable' est un mot qui...",
      options: ["Change de genre", "Ne change jamais d'orthographe (pas de pluriel/féminin)", "Est très long", "Est un verbe"],
      reponse: "Ne change jamais d'orthographe (pas de pluriel/féminin)",
      explication: "Comme les prépositions, les adverbes et les conjonctions."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans 'Cette pomme est rouge', quel est le déterminant démonstratif ?",
      options: ["Cette", "Pomme", "Est", "Rouge"],
      reponse: "Cette",
      explication: "Il sert à montrer l'objet (ce, cette, ces)."
    }
  ]
};
