import { Quiz } from "@/types/quiz";

export const quiz707: Quiz = {
  id: "707",
  titre: "Maths : Périmètres et Aires 📏",
  description: "Apprenez à mesurer les contours et les surfaces des formes.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la définition du périmètre d'une figure ?",
      options: ["La surface intérieure", "Le contour extérieur", "La hauteur", "Le nombre d'angles"],
      reponse: "Le contour extérieur",
      explication: "Le périmètre est la somme des longueurs des côtés."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la formule de l'aire d'un rectangle ?",
      options: ["Longueur + Largeur", "Longueur x Largeur", "2 x (L + l)", "Base x Hauteur / 2"],
      reponse: "Longueur x Largeur",
      explication: "C'est la multiplication des deux dimensions."
    },
    {
      id: "3",
      type: "qcm",
      question: "Le périmètre d'un carré de 5 cm de côté est ?",
      options: ["20 cm", "25 cm", "10 cm", "15 cm"],
      reponse: "20 cm",
      explication: "Un carré a 4 côtés égaux : 5 x 4 = 20."
    },
    {
      id: "4",
      type: "qcm",
      question: "L'aire d'un carré de 5 cm de côté est ?",
      options: ["20 cm²", "25 cm²", "50 cm²", "10 cm²"],
      reponse: "25 cm²",
      explication: "Côté x Côté = 5 x 5 = 25."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est l'unité de mesure principale d'une aire ?",
      options: ["Le mètre (m)", "Le mètre carré (m²)", "Le mètre cube (m³)", "Le gramme (g)"],
      reponse: "Le mètre carré (m²)",
      explication: "Les surfaces se mesurent en unités 'carrées'."
    },
    {
      id: "6",
      type: "qcm",
      question: "L'aire d'un triangle se calcule par ?",
      options: ["B x h", "(B x h) / 2", "B + h", "Côté x 3"],
      reponse: "(B x h) / 2",
      explication: "Moitié d'un rectangle de même base et hauteur."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est le périmètre d'un cercle (circonférence) ?",
      options: ["2 x π x r", "π x r²", "π x d²", "2 x π"],
      reponse: "2 x π x r",
      explication: "Le produit du diamètre (2r) par le nombre Pi."
    },
    {
      id: "8",
      type: "qcm",
      question: "Combien y a-t-il de cm² dans 1 dm² ?",
      options: ["10", "100", "1000", "0,1"],
      reponse: "100",
      explication: "Les unités d'aire vont de 100 en 100."
    },
    {
      id: "9",
      type: "qcm",
      question: "Un rectangle de 10m sur 2m a un périmètre de ?",
      options: ["20m", "24m", "12m", "14m"],
      reponse: "24m",
      explication: "2 x (10 + 2) = 24."
    },
    {
      id: "10",
      type: "qcm",
      question: "Que vaut approximativement π (Pi) ?",
      options: ["3,14", "3,41", "2,14", "4,13"],
      reponse: "3,14",
      explication: "C'est la valeur arrondie la plus courante."
    }
  ]
};
