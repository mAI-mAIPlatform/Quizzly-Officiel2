import { Quiz } from "@/types/quiz";

export const quiz702: Quiz = {
  id: "702",
  titre: "Maths : La Règle de Trois (Proportionnalité) ⚖️",
  description: "Apprenez à calculer des proportions et à résoudre des problèmes de base.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Si 3 pommes coûtent 1,50 €, combien coûtent 6 pommes ?",
      options: ["2,00 €", "3,00 €", "2,50 €", "4,50 €"],
      reponse: "3,00 €",
      explication: "C'est le double : 1,50 x 2 = 3,00."
    },
    {
      id: "2",
      type: "qcm",
      question: "Un coureur parcourt 10 km en 1 heure. Combien de km fera-t-il en 2h30 s'il garde la même vitesse ?",
      options: ["20 km", "25 km", "15 km", "30 km"],
      reponse: "25 km",
      explication: "10 km x 2,5 h = 25 km."
    },
    {
      id: "3",
      type: "qcm",
      question: "Pour faire un gâteau pour 4 personnes, il faut 200g de farine. Combien en faut-il pour 10 personnes ?",
      options: ["400g", "500g", "450g", "600g"],
      reponse: "500g",
      explication: "50g par personne : 50 x 10 = 500."
    },
    {
      id: "4",
      type: "qcm",
      question: "Une voiture consomme 5 litros aux 100 km. Combien consomme-t-elle pour 500 km ?",
      options: ["20 L", "25 L", "10 L", "50 L"],
      reponse: "25 L",
      explication: "5 x 5 = 25 litros."
    },
    {
      id: "5",
      type: "qcm",
      question: "Si 1 kilo de cerises coûte 8 €, quel est le prix de 250 grammes ?",
      options: ["1 €", "2 €", "3 €", "4 €"],
      reponse: "2 €",
      explication: "250g est un quart de kilo : 8 / 4 = 2."
    },
    {
      id: "6",
      type: "qcm",
      question: "Une horloge avance de 2 minutes toutes les 24 heures. De combien avance-t-elle en une semaine ?",
      options: ["10 min", "14 min", "7 min", "20 min"],
      reponse: "14 min",
      explication: "2 min x 7 jours = 14 min."
    },
    {
      id: "7",
      type: "qcm",
      question: "Un ouvrier gagne 300 € pour 3 jours de travail. Combien gagnera-t-il pour 10 jours ?",
      options: ["900 €", "1000 €", "1200 €", "1100 €"],
      reponse: "1000 €",
      explication: "100 € par jour : 100 x 10 = 1000."
    },
    {
      id: "8",
      type: "qcm",
      question: "Si un robinet remplit 20 L en 4 minutes, combien de temps faut-il pour remplir 100 L ?",
      options: ["10 min", "15 min", "20 min", "25 min"],
      reponse: "20 min",
      explication: "5 L par minute : 100 / 5 = 20."
    },
    {
      id: "9",
      type: "qcm",
      question: "2 tee-shirts sont vendus 15 €. Quel est le prix de 5 tee-shirts ?",
      options: ["30 €", "37,50 €", "40 €", "25 €"],
      reponse: "37,50 €",
      explication: "7,50 € l'unité : 7,50 x 5 = 37,50."
    },
    {
      id: "10",
      type: "qcm",
      question: "Une carte a une échelle de 1/100 000. Que représente 1 cm sur la carte en réalité ?",
      options: ["100 m", "1 km", "10 km", "100 km"],
      reponse: "1 km",
      explication: "100 000 cm = 1 000 m = 1 km."
    }
  ]
};
