import { Quiz } from "@/types/quiz";

export const quiz561: Quiz = {
  id: "561",
  titre: "Physique-Chimie : Les Sources d'Énergie ⚡",
  description: "Distinguez les énergies renouvelables des énergies fossiles.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une énergie 'renouvelable' ?",
      options: ["Une énergie qui s'épuise vite", "Une énergie dont les réserves se reconstituent plus vite qu'on ne les consomme", "Une énergie qui coûte cher", "Une énergie qui ne marche que le jour"],
      reponse: "Une énergie dont les réserves se reconstituent plus vite qu'on ne les consomme",
      explication: "Elle est considérée comme inépuisable à l'échelle humaine."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces éléments est une source d'énergie fossile ?",
      options: ["Le vent", "Le pétrole", "Le soleil", "L'eau des fleuves"],
      reponse: "Le pétrole",
      explication: "Il s'est formé sur des millions d'années et ses réserves finiront par s'épuiser."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle énergie utilise la force du vent ?",
      options: ["L'énergie solaire", "L'énergie éolienne", "L'énergie hydraulique", "L'énergie thermique"],
      reponse: "L'énergie éolienne",
      explication: "Grâce à des éoliennes qui transforment le mouvement en électricité."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle énergie utilise la lumière du soleil ?",
      options: ["L'énergie nucléaire", "L'énergie photovoltaïque (solaire)", "La biomasse", "La géothermie"],
      reponse: "L'énergie photovoltaïque (solaire)",
      explication: "Les panneaux solaires captent les rayons du soleil."
    },
    {
      id: "5",
      type: "qcm",
      question: "D'où vient l'énergie nucléaire ?",
      options: ["De la combustion du bois", "De la fission d'atomes d'uranium", "Des marées", "Des volcans"],
      reponse: "De la fission d'atomes d'uranium",
      explication: "Elle produit beaucoup d'électricité mais génère des déchets radioactifs."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce que la biomasse ?",
      options: ["L'énergie tirée des matières organiques (bois, déchets agricoles...)", "L'énergie des muscles", "L'énergie des aimants", "Une marque de yaourt"],
      reponse: "L'énergie tirée des matières organiques (bois, déchets agricoles...)",
      explication: "On peut la brûler ou la transformer en biogaz."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est l'inconvénient principal des énergies fossiles ?",
      options: ["Elles sont gratuites", "Elles rejettent du CO2 et participent au réchauffement climatique", "Elles sont trop belles", "Elles ne font pas de bruit"],
      reponse: "Elles rejettent du CO2 et participent au réchauffement climatique",
      explication: "Le charbon, le gaz et le pétrole sont très polluants."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle énergie utilise la chaleur du sous-sol de la Terre ?",
      options: ["La géothermie", "L'hydrogène", "Le charbon", "L'énergie marémotrice"],
      reponse: "La géothermie",
      explication: "Plus on s'enfonce dans la terre, plus il fait chaud."
    },
    {
      id: "9",
      type: "qcm",
      question: "Une centrale hydraulique utilise la force de quel élément ?",
      options: ["L'air", "L'eau", "La terre", "Le feu"],
      reponse: "L'eau",
      explication: "Souvent grâce à des barrages sur les fleuves."
    },
    {
      id: "10",
      type: "qcm",
      question: "Pourquoi est-il important de faire des économies d'énergie ?",
      options: ["Pour s'ennuyer", "Pour préserver les ressources et limiter la pollution", "Parce que c'est obligatoire", "Pour faire du sport"],
      reponse: "Pour préserver les ressources et limiter la pollution",
      explication: "L'énergie la moins polluante est celle qu'on ne consomme pas."
    }
  ]
};
