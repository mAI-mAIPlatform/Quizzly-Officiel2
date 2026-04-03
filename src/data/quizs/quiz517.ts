import { Quiz } from "@/types/quiz";

export const quiz517: Quiz = {
  id: "517",
  titre: "Mathématiques : Les 4 Opérations ➕",
  description: "Questions sur l'addition, la soustraction, la multiplication et la division.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le résultat d'une addition ?",
      options: ["Le produit", "La différence", "La somme", "Le quotient"],
      reponse: "La somme",
      explication: "C'est le total obtenu en ajoutant des termes."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le résultat d'une multiplication ?",
      options: ["La somme", "Le produit", "Le quotient", "Le reste"],
      reponse: "Le produit",
      explication: "Le résultat de la multiplication de facteurs."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est l'élément neutre de l'addition (il ne change rien) ?",
      options: ["1", "0", "10", "100"],
      reponse: "0",
      explication: "Ajouter 0 à n'importe quel nombre ne change pas sa valeur."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel est l'élément neutre de la multiplication ?",
      options: ["0", "1", "2", "10"],
      reponse: "1",
      explication: "Multiplier par 1 ne change pas le nombre."
    },
    {
      id: "5",
      type: "qcm",
      question: "Peut-on diviser un nombre par zéro ?",
      options: ["Oui", "Non, c'est impossible", "Seulement si le nombre est grand", "Seulement le dimanche"],
      reponse: "Non, c'est impossible",
      explication: "La division par zéro n'est pas définie en mathématiques."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans une division euclidienne, que doit-on toujours vérifier ?",
      options: ["Le reste est plus petit que le diviseur", "Le quotient est plus grand que 10", "Le reste est égal à 1", "Rien spécial"],
      reponse: "Le reste est plus petit que le diviseur",
      explication: "Si le reste est plus grand, on peut encore diviser une fois."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie 'commuter' une opération (Addition/Multiplication) ?",
      options: ["On ne peut pas changer l'ordre", "On peut changer l'ordre des nombres sans changer le résultat", "L'opération s'arrête", "C'est une erreur"],
      reponse: "On peut changer l'ordre des nombres sans changer le résultat",
      explication: "2+3 = 3+2 et 4x5 = 5x4."
    },
    {
      id: "8",
      type: "qcm",
      question: "La soustraction est-elle commutative ?",
      options: ["Oui", "Non", "Seulement avec des nombres pairs", "Parfois"],
      reponse: "Non",
      explication: "10 - 2 n'est pas égal à 2 - 10."
    },
    {
      id: "9",
      type: "qcm",
      question: "Multiplier un nombre par 0,1 revient à :",
      options: ["Le multiplier par 10", "Le diviser par 10", "Lui ajouter 0,1", "Le multiplier par lui-même"],
      reponse: "Le diviser par 10",
      explication: "Multiplier par un dixième équivaut à diviser par dix."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le produit de n'importe quel nombre par 0 ?",
      options: ["Le nombre lui-même", "1", "0", "L'infini"],
      reponse: "0",
      explication: "Tout nombre multiplié par zéro est égal à zéro."
    }
  ]
};
