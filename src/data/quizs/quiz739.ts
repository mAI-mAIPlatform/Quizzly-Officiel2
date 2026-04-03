import { Quiz } from "@/types/quiz";

export const quiz739: Quiz = {
  id: "739",
  titre: "Astronomie : Le Système Solaire 🚀",
  description: "Explorer les planètes qui gravitent autour du Soleil.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien y a-t-il de planètes dans le système solaire ?",
      options: ["7", "8", "9", "10"],
      reponse: "8",
      explication: "Pluton n'est plus considérée comme une planète 'principale' depuis 2006."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la plus grande planète du système solaire ?",
      options: ["La Terre", "Mars", "Jupiter", "Saturne"],
      reponse: "Jupiter",
      explication: "C'est une géante gazeuse."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le Soleil est une étoile.",
      reponse: "Vrai",
      explication: "Il produit sa propre lumière et chaleur."
    },
    {
      id: "4",
      type: "courte",
      question: "Quelle planète est surnommée la 'Planète Rouge' ?",
      reponse: "Mars",
      explication: "À cause de la présence d'oxyde de fer (rouille) sur sa surface."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle planète est célèbre pour ses magnifiques anneaux ?",
      options: ["Mercure", "Vénus", "Saturne", "Neptune"],
      reponse: "Saturne",
      explication: "Ses anneaux sont composés de glace et de poussière."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La Terre tourne autour du Soleil en 24 heures.",
      reponse: "Faux",
      explication: "Elle tourne autour du soleil en 1 an (365 jours). En 24h, elle tourne sur elle-même."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la planète la plus proche du Soleil ?",
      options: ["La Terre", "Mercure", "Vénus", "Mars"],
      reponse: "Mercure",
      explication: "C'est une petite planète rocheuse très chaude."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on l'unique satellite naturel de la Terre ?",
      reponse: "Lune",
      explication: "Elle tourne autour de la Terre en environ 28 jours."
    },
    {
      id: "9",
      type: "qcm",
      question: "Neptune et Uranus sont des géantes de...",
      options: ["Feu", "Glace", "Métal", "Sucre"],
      reponse: "Glace",
      explication: "Elles sont très éloignées du soleil et très froides."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Toutes les planètes du système solaire sont habitables.",
      reponse: "Faux",
      explication: "Seule la Terre possède les conditions nécessaires à la vie telle que nous la connaissons."
    }
  ]
};
