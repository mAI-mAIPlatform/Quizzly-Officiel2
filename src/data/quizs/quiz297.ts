import { Quiz } from "@/types/quiz";

export const quiz297: Quiz = {
  id: 297,
  titre: "Grammaire et Orthographe",
  theme: "Langues",
  description: "Maitrisez-vous les subtilités de la langue française ?",
  questions: [
    {
      id: 1,
      question: "Quel est le pluriel correct de 'Chacal' ?",
      options: ["Chacaux", "Chacals", "Chacales", "Chacals ou Chacaux"],
      reponse: "Chacals",
      explication: "Chacal est l'une des exceptions des mots en -al qui prennent un -s au pluriel."
    },
    {
      id: 2,
      question: "Comment s'écrit le mot désignant une personne qui écrit des livres ?",
      options: ["Écrivain", "Ecrivain", "Équivain", "Éscrivain"],
      reponse: "Écrivain",
      explication: "L'accent aigu est nécessaire sur le 'E' initial."
    },
    {
      id: 3,
      question: "Quelle est la forme correcte : 'Ils ont ... mangé' ?",
      options: ["tous", "tout", "touts", "tousses"],
      reponse: "tout",
      explication: "Ici 'tout' est un adverbe signifiant 'complètement' ou renforçant le verbe, il reste invariable."
    },
    {
      id: 4,
      question: "Comment s'appelle l'accord du participe passé avec l'auxiliaire 'avoir' ?",
      options: ["Il s'accorde avec le sujet", "Il ne s'accorde jamais", "Il s'accorde avec le COD s'il est placé avant le verbe", "Il s'accorde en genre seulement"],
      reponse: "Il s'accorde avec le COD s'il est placé avant le verbe",
      explication: "C'est la règle classique (ex: Les fleurs que j'ai cueillies)."
    },
    {
      id: 5,
      question: "Quel est l'antonyme de 'Éphémère' ?",
      options: ["Bref", "Passager", "Éternel", "Fragile"],
      reponse: "Éternel",
      explication: "Éphémère signifie qui dure peu de temps, éternel signifie qui dure toujours."
    },
    {
      id: 6,
      question: "Dans la phrase 'Je vous envoie ce mail', quel est le complément d'objet direct ?",
      options: ["vous", "ce mail", "envoie", "Je"],
      reponse: "ce mail",
      explication: "On pose la question : 'J'envoie quoi ?' -> ce mail."
    },
    {
      id: 7,
      question: "Comment écrit-on 80 en lettres ?",
      options: ["Quatre-vingt", "Quatre-vingts", "Quatre-vingt-dix", "Quatervingt"],
      reponse: "Quatre-vingts",
      explication: "Vingt prend un 's' car il est multiplié par quatre et n'est suivi d'aucun autre nombre."
    },
    {
      id: 8,
      question: "Quel signe de ponctuation indique une coupure nette dans une phrase ?",
      options: ["La virgule", "Le point-virgule", "Les deux-points", "Les points de suspension"],
      reponse: "Le point-virgule",
      explication: "Le point-virgule sépare deux propositions indépendantes ayant un lien logique."
    },
    {
      id: 9,
      question: "Quelle est la conjugaison correcte au futur : 'Je ... (voir)' ?",
      options: ["Je voirai", "Je verrai", "Je voyerai", "Je verrai-je"],
      reponse: "Je verrai",
      explication: "Le verbe voir a un radical irrégulier au futur (verr-)."
    },
    {
      id: 10,
      question: "Complétez : 'C'est l'homme ... je t'ai parlé.'",
      options: ["qui", "que", "dont", "où"],
      reponse: "dont",
      explication: "On utilise 'dont' car le verbe est 'parler de'."
    }
  ]
};
