import { Quiz } from "@/types/quiz";

export const quiz521: Quiz = {
  id: "521",
  titre: "Mathématiques : Périmètre et Aire 📏",
  description: "Apprenez à calculer le contour et la surface des formes simples.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que le périmètre d'une figure ?",
      options: ["La mesure de sa surface intérieure", "La longueur de son contour", "Son nombre d'angles", "Son poids"],
      reponse: "La longueur de son contour",
      explication: "C'est comme si on faisait le tour de la forme avec une règle."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la formule du périmètre d'un carré de côté 'c' ?",
      options: ["c x c", "c + 4", "c x 4", "c / 4"],
      reponse: "c x 4",
      explication: "Le carré a 4 côtés égaux."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'est-ce que l'aire d'une figure ?",
      options: ["La longueur de son contour", "La mesure de sa surface intérieure", "Sa hauteur", "Son épaisseur"],
      reponse: "La mesure de sa surface intérieure",
      explication: "L'aire exprime combien de place la forme occupe à l'intérieur de ses bords."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est l'unité standard de mesure pour une aire ?",
      options: ["Le mètre (m)", "Le mètre carré (m²)", "Le mètre cube (m³)", "Le litre (L)"],
      reponse: "Le mètre carré (m²)",
      explication: "C'est la surface occupée par un carré de 1m de côté."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la formule de l'aire d'un rectangle (Longueur L, largeur l) ?",
      options: ["L + l", "(L + l) x 2", "L x l", "L / l"],
      reponse: "L x l",
      explication: "On multiplie les deux dimensions."
    },
    {
      id: "6",
      type: "qcm",
      question: "Calculez le périmètre d'un rectangle de 5cm sur 3cm :",
      options: ["8 cm", "15 cm", "16 cm", "20 cm"],
      reponse: "16 cm",
      explication: "(5 + 3) x 2 = 16 cm."
    },
    {
      id: "7",
      type: "qcm",
      question: "Calculez l'aire d'un carré de 6cm de côté :",
      options: ["24 cm²", "12 cm²", "36 cm²", "30 cm²"],
      reponse: "36 cm²",
      explication: "6 x 6 = 36."
    },
    {
      id: "8",
      type: "qcm",
      question: "Combien de cm² y a-t-il dans 1 dm² ?",
      options: ["10", "100", "1 000", "0,1"],
      reponse: "100",
      explication: "C'est un carré de 10cm sur 10cm."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pour calculer l'aire d'un triangle rectangle, on fait :",
      options: ["Base x Hauteur", "(Base x Hauteur) / 2", "Côté + Côté + Côté", "On ne peut pas"],
      reponse: "(Base x Hauteur) / 2",
      explication: "C'est la moitié de l'aire d'un rectangle."
    },
    {
      id: "10",
      type: "qcm",
      question: "Si une figure a une aire de 20 cm² et un périmètre de 20 cm, ont-elles la même valeur ?",
      options: ["Oui", "Non, car les unités ne sont pas les mêmes (cm vs cm²)", "Seulement pour les carrés", "On ne peut pas comparer"],
      reponse: "Non, car les unités ne sont pas les mêmes (cm vs cm²)",
      explication: "On ne compare pas une longueur et une surface."
    }
  ]
};
