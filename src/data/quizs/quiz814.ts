import { Quiz } from "@/types/quiz";

export const quiz814: Quiz = {
  id: "814",
  titre: "Écologie : Les Énergies Renouvelables ☀️🌬️",
  description: "Découvrez les sources d'énergie 'propres' qui ne s'épuisent jamais.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une énergie renouvelable ?",
      options: ["Une énergie qui coûte cher", "Une source d'énergie qui se régénère naturellement à l'échelle humaine", "Une énergie que l'on achète au magasin", "Une énergie qui fume"],
      reponse: "Une source d'énergie qui se régénère naturellement à l'échelle humaine",
      explication: "Comme le soleil, le vent ou l'eau."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel dispositif permet de transformer la lumière du soleil en électricité ?",
      options: ["Une éolienne", "Un panneau solaire photovoltaïque", "Une pile", "Un miroir"],
      reponse: "Un panneau solaire photovoltaïque",
      explication: "On en voit souvent sur les toits des maisons."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Une éolienne utilise la force du vent pour produire de l'énergie.",
      reponse: "Vrai",
      explication: "Le vent fait tourner les pales qui activent un générateur électrique."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'énergie produite grâce à la force de l'eau (barrages, chutes) ?",
      reponse: "Hydroélectricité",
      explication: "C'est l'une des plus anciennes énergies renouvelables."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que la biomasse ?",
      options: ["Le poids de tous les camions", "L'énergie issue des matières organiques (bois, déchets agricoles)", "Une nouvelle planète", "Le nom d'un robot"],
      reponse: "L'énergie issue des matières organiques (bois, déchets agricoles)",
      explication: "On peut brûler du bois ou transformer des plantes en biocarburant."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La géothermie consiste à récupérer la chaleur du sous-sol de la Terre.",
      reponse: "Vrai",
      explication: "On utilise cette chaleur pour chauffer des bâtiments ou produire de l'électricité."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est le principal avantage des énergies renouvelables par rapport au pétrole ?",
      options: ["Elles font plus de bruit", "Elles ne rejettent presque pas de CO2 et sont inépuisables", "Elles sont violettes", "Elles sont interdites"],
      reponse: "Elles ne rejettent presque pas de CO2 et sont inépuisables",
      explication: "C'est essentiel pour lutter contre le réchauffement climatique."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un champ rempli d'éoliennes dans la mer ?",
      reponse: "Parc éolien offshore",
      explication: "Il y a souvent plus de vent en mer que sur terre."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'un des inconvénients de certaines énergies renouvelables (solaire/éolien) ?",
      options: ["Elles sentent mauvais", "Elles dépendent de la météo (pas de soleil la nuit/pas de vent)", "Elles sont trop puissantes", "Elles mangent de l'herbe"],
      reponse: "Elles dépendent de la météo (pas de soleil la nuit/pas de vent)",
      explication: "On dit qu'elles sont 'intermittentes'. Il faut stocker l'énergie dans des batteries."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le charbon est une énergie renouvelable.",
      reponse: "Faux",
      explication: "Le charbon met des millions d'années à se former. C'est une énergie 'fossile'."
    }
  ]
};
