import { Quiz } from "@/types/quiz";

export const quiz518: Quiz = {
  id: "518",
  titre: "Mathématiques : Les Fractions 🍕",
  description: "Comprendre les parts d'un tout et le vocabulaire lié.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le nombre situé AU-DESSUS du trait de fraction ?",
      options: ["Dénominateur", "Numérateur", "Quotient", "Reste"],
      reponse: "Numérateur",
      explication: "Il indique 'le nombre' de parts que l'on prend."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le nombre situé EN-DESSOUS du trait de fraction ?",
      options: ["Numérateur", "Dénominateur", "Base", "Facteur"],
      reponse: "Dénominateur",
      explication: "Il indique en combien de parts égales l'unité a été 'dénommée' (partagée)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que représente la fraction 1/2 ?",
      options: ["Un quart", "Une moitié", "Un tiers", "Le double"],
      reponse: "Une moitié",
      explication: "On a partagé en 2 et on en prend 1."
    },
    {
      id: "4",
      type: "qcm",
      question: "Si on partage un gâteau en 4 parts égales et qu'on en mange 3, quelle est la fraction mangée ?",
      options: ["1/4", "4/3", "3/4", "3/1"],
      reponse: "3/4",
      explication: "3 parts sur un total de 4."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel est égal à une unité entière ?",
      options: ["1/2", "3/4", "4/4", "0/4"],
      reponse: "4/4",
      explication: "Prendre toutes les parts revient à prendre l'unité."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle fraction correspond à 'un tiers' ?",
      options: ["1/2", "1/3", "3/1", "1/4"],
      reponse: "1/3",
      explication: "Un partage en 3."
    },
    {
      id: "7",
      type: "qcm",
      question: "Si le numérateur est supérieur au dénominateur (ex: 5/4), le nombre est :",
      options: ["Plus grand que 1", "Plus petit que 1", "Égal à 1", "Négatif"],
      reponse: "Plus grand que 1",
      explication: "On a pris plus de parts qu'il n'y en a dans une seule unité."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on une fraction dont le dénominateur est 10, 100 ou 1000 ?",
      options: ["Fraction complexe", "Fraction décimale", "Fraction irréductible", "Fraction inverse"],
      reponse: "Fraction décimale",
      explication: "Elle permet d'écrire facilement des nombres à virgule."
    },
    {
      id: "9",
      type: "qcm",
      question: "Simplifier une fraction, qu'est-ce que c'est ?",
      options: ["L'effacer", "Diviser le haut et le bas par un même nombre pour la rendre plus 'simple'", "Changer tous les nombres au hasard", "L'ajouter à une autre"],
      reponse: "Diviser le haut et le bas par un même nombre pour la rendre plus 'simple'",
      explication: "Exemple : 2/4 = 1/2."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle fraction est égale à 0,25 ?",
      options: ["1/2", "1/4", "1/10", "4/1"],
      reponse: "1/4",
      explication: "Un quart de l'unité."
    }
  ]
};
