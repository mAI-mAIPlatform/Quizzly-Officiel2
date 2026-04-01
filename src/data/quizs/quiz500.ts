import { Quiz } from "@/types/quiz";

export const quiz500: Quiz = {
  id: "500",
  titre: "🏆 L'Ultime Défi Quizzly : 500 Quiz ! 🏆",
  description: "Félicitations ! Vous avez atteint le dernier quiz. Testez vos connaissances générales sur tout ce que vous avez appris.",
  theme: "Général",
  difficulte: "Expert",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de quiz contient désormais la base de données Quizzly après cette expansion massive ?",
      options: ["250", "400", "500", "1000"],
      reponse: "500",
      explication: "C'est une étape historique pour l'application !"
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces thèmes n'a PAS été exploré dans les récents quiz ?",
      options: ["La Mythologie", "La Gastronomie", "Le Voyage dans le temps (S-F)", "La Physique Quantique"],
      reponse: "Le Voyage dans le temps (S-F)",
      explication: "Même s'il y a eu beaucoup de S-F et d'Astronomie, ce thème spécifique attend la prochaine mise à jour !"
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle interface TypeScript assure la structure de tous nos quiz ?",
      options: ["interface Data", "interface Quiz", "type MyQuiz", "class Question"],
      reponse: "interface Quiz",
      explication: "Elle garantit que chaque quiz possède un ID, un titre, un thème et des questions valides."
    },
    {
      id: "4",
      type: "qcm",
      question: "De quel pays est originaire la 'Moussaka' (vue dans le quiz 485) ?",
      options: ["Italie", "Espagne", "Grèce", "Turquie"],
      reponse: "Grèce",
      explication: "C'est un régal méditerranéen à base d'aubergines."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel est le nom du robot de la NASA qui a atterri sur Mars en 2021 ?",
      options: ["Curiosity", "Perseverance", "Opportunity", "Spirit"],
      reponse: "Perseverance",
      explication: "Il continue d'explorer le cratère Jezero à la recherche de traces de vie ancienne."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel monstre sacré du cinéma a réalisé 'Les Sept Samouraïs' ?",
      options: ["Miyazaki", "Kurosawa", "Ozu", "Kitano"],
      reponse: "Kurosawa",
      explication: "Une figure majeure étudiée dans le quiz sur le cinéma japonais."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie 'HTTP' ?",
      options: ["HyperText Transfer Protocol", "High Tech Transport Power", "Home Tool Theory Part", "Hyper Tab Text Program"],
      reponse: "HyperText Transfer Protocol",
      explication: "C'est la base de tout échange de données sur le Web."
    },
    {
      id: "8",
      type: "qcm",
      question: "Dans 'Les Misérables', qui est l'ennemi juré de Jean Valjean ?",
      options: ["Marius", "Javert", "Thénardier", "Gavroche"],
      reponse: "Javert",
      explication: "Un duel moral qui dure toute une vie."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'élément chimique au cœur des centrales nucléaires (quiz 450) ?",
      options: ["Le Carbone", "L'Uranium", "Le Fer", "L'Oxygène"],
      reponse: "L'Uranium",
      explication: "Sa fission libère l'énergie nécessaire à la production d'électricité."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est l'objectif final de Quizzly ?",
      options: ["Devenir riche", "Amuser et instruire les utilisateurs sur tous les sujets possibles", "Remplacer les écoles", "Vendre des publicités"],
      reponse: "Amuser et instruire les utilisateurs sur tous les sujets possibles",
      explication: "La connaissance est une aventure qui ne s'arrête jamais. Merci d'avoir joué jusqu'à 500 !"
    }
  ]
};
