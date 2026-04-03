import { Quiz } from "@/types/quiz";

export const quiz812: Quiz = {
  id: "812",
  titre: "Écologie : Le Réchauffement Climatique 🌡️",
  description: "Comprendre pourquoi la température de la Terre augmente et quelles sont les conséquences.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel phénomène naturel garde la Terre à une température agréable, mais s'emballe aujourd'hui ?",
      options: ["La photosynthèse", "L'effet de serre", "La gravitation", "Le magnétisme"],
      reponse: "L'effet de serre",
      explication: "Certains gaz dans l'atmosphère piègent la chaleur du soleil."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel gaz est le principal responsable du réchauffement dû aux activités humaines ?",
      options: ["L'oxygène", "Le dioxyde de carbone (CO2)", "L'hélium", "L'azote"],
      reponse: "Le dioxyde de carbone (CO2)",
      explication: "Produit par les voitures, les usines et le chauffage."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La fonte des glaces aux pôles fait monter le niveau des océans.",
      reponse: "Vrai",
      explication: "Cela menace les villes situées au bord de la mer."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on la disparition de grandes zones d'arbres ?",
      reponse: "Déforestation",
      explication: "Moins d'arbres signifie moins de CO2 absorbé."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est l'une des conséquences du dérèglement climatique sur la météo ?",
      options: ["Il fait toujours beau", "Les tempêtes et les sécheresses deviennent plus fréquentes et intenses", "Il n'y a plus de vent", "Rien ne change"],
      reponse: "Les tempêtes et les sécheresses deviennent plus fréquentes et intenses",
      explication: "Le climat devient plus instable."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'élevage intensif (vaches) produit beaucoup de méthane, un gaz à effet de serre puissant.",
      reponse: "Vrai",
      explication: "C'est une cause importante du réchauffement lié à l'agriculture."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'appelle-t-on les énergies 'fossiles' ?",
      options: ["Le vent et le soleil", "Le pétrole, le charbon et le gaz naturel", "L'électricité statique", "La force des dinosaures"],
      reponse: "Le pétrole, le charbon et le gaz naturel",
      explication: "Elles polluent beaucoup quand on les brûle."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le fait de réduire notre consommation d'énergie et d'objets ? La ...",
      reponse: "sobriété",
      explication: "Ou consommer de manière plus responsable."
    },
    {
      id: "9",
      type: "qcm",
      question: "Vers quelle température d'augmentation mondiale essaie-t-on de ne pas dépasser (Accords de Paris) ?",
      options: ["+1,5°C", "+5°C", "+10°C", "+50°C"],
      reponse: "+1,5°C",
      explication: "Chaque demi-degré compte pour limiter les dégâts."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le réchauffement climatique n'a aucun impact sur les animaux.",
      reponse: "Faux",
      explication: "De nombreuses espèces perdent leur habitat ou ne supportent pas la chaleur."
    }
  ]
};
