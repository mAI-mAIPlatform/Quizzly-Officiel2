import { Quiz } from "@/types/quiz";

export const quiz525: Quiz = {
  id: "525",
  titre: "Mathématiques : La Proportionnalité ⚖️",
  description: "Apprenez à utiliser les tableaux et le produit en croix.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Deux grandeurs sont proportionnelles si :",
      options: ["Elles augmentent ensemble", "L'une s'obtient en multipliant l'autre par un nombre constant", "Elles sont toutes les deux grandes", "Elles n'ont aucun rapport"],
      reponse: "L'une s'obtient en multipliant l'autre par un nombre constant",
      explication: "Ce nombre s'appelle le coefficient de proportionnalité."
    },
    {
      id: "2",
      type: "qcm",
      question: "Si 3 kg de pommes coûtent 6 €, combien coûtent 6 kg ?",
      options: ["9 €", "12 €", "10 €", "18 €"],
      reponse: "12 €",
      explication: "Le prix est doublé car la quantité est doublée."
    },
    {
      id: "3",
      type: "qcm",
      question: "Dans un tableau de proportionnalité, comment appelle-t-on la méthode pour trouver une valeur manquante ?",
      options: ["La règle de trois (ou produit en croix)", "L'addition magique", "La division infinie", "Le carré parfait"],
      reponse: "La règle de trois (ou produit en croix)",
      explication: "On multiplie les deux nombres en diagonale et on divise par le troisième."
    },
    {
      id: "4",
      type: "qcm",
      question: "Une recette pour 4 personnes nécessite 200g de farine. Pour 2 personnes, il faut :",
      options: ["100 g", "400 g", "150 g", "50 g"],
      reponse: "100 g",
      explication: "C'est la moitié (proportionnalité)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Le périmètre d'un cercle est-il proportionnel à son rayon ?",
      options: ["Oui", "Non", "Seulement s'il est petit", "On ne peut pas savoir"],
      reponse: "Oui",
      explication: "P = 2 x Pi x R. Le coefficient est 2Pi."
    },
    {
      id: "6",
      type: "qcm",
      question: "L'aire d'un carré est-elle proportionnelle à son côté ?",
      options: ["Oui", "Non", "C'est la même chose", "Parfois"],
      reponse: "Non",
      explication: "L'aire est égale au côté AU CARRÉ (c x c), ce n'est pas une relation de proportionnalité simple."
    },
    {
      id: "7",
      type: "qcm",
      question: "Un pourcentage (ex: 50%) est-il un cas de proportionnalité ?",
      options: ["Oui", "Non", "C'est une addition", "C'est une soustraction"],
      reponse: "Oui",
      explication: "C'label est un rapport sur une base de 100."
    },
    {
      id: "8",
      type: "qcm",
      question: "Si une voiture parcourt 100 km en 1 heure à vitesse constante, combien de temps lui faut-il pour 250 km ?",
      options: ["2 heures", "2 heures et demie", "3 heures", "1 heure 45"],
      reponse: "2 heures et demie",
      explication: "250 / 100 = 2,5 heures."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'une échelle sur une carte (ex: 1/100 000) ?",
      options: ["Un escalier", "Un rapport de proportionnalité entre la réalité et le dessin", "La hauteur d'une montagne", "Le nom de la carte"],
      reponse: "Un rapport de proportionnalité entre la réalité et le dessin",
      explication: "1cm sur la carte représente 100 000 cm dans la réalité."
    },
    {
      id: "10",
      type: "qcm",
      question: "Pour passer de 10 à 15 en multipliant par un seul nombre, quel est ce coefficient ?",
      options: ["1,5", "2", "0,5", "5"],
      reponse: "1,5",
      explication: "10 x 1,5 = 15."
    }
  ]
};
