import { Quiz } from "@/types/quiz";

export const quiz404: Quiz = {
  id: "404",
  titre: "Nature : Les Forêts Tropicales 🌳🐒",
  description: "Explorez les poumons de notre planète.",
  theme: "Nature",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la plus grande forêt tropicale du monde ?",
      options: ["Forêt du Congo", "Amazonie", "Forêt de Bornéo", "Forêt de Taïga"],
      reponse: "Amazonie",
      explication: "Elle se situe principalement au Brésil mais s'étend sur 8 autres pays."
    },
    {
      id: "2",
      type: "qcm",
      question: "L'Amazonie est traversée par un fleuve immense, lequel ?",
      options: ["Le Nil", "Le Gange", "L'Amazone", "Le Mékong"],
      reponse: "L'Amazone",
      explication: "C'est le fleuve le plus puissant du monde."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on la partie supérieure de la forêt formée par la cime des arbres ?",
      options: ["La canopée", "Le dôme", "Le chapeau", "La crête"],
      reponse: "La canopée",
      explication: "C'est là que vit la majorité des animaux et des insectes de la forêt."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel climat règne dans ces forêts toute l'année ?",
      options: ["Froid et sec", "Chaud et très humide (beaucoup de pluie)", "Sec et ensoleillé", "Variable selon les saisons"],
      reponse: "Chaud et très humide (beaucoup de pluie)",
      explication: "Il n'y a pas vraiment de saisons, il pleut presque tous les jours."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel primate menacé de disparition vit dans les forêts de Bornéo et de Sumatra ?",
      options: ["Le Gorille", "Le Chimpanzé", "L'Oran-outan", "Le Babouin"],
      reponse: "L'Oran-outan",
      explication: "Son nom signifie 'homme des bois' en malais."
    },
    {
      id: "6",
      type: "qcm",
      question: "Pourquoi les forêts tropicales sont-elles importantes pour le climat mondial ?",
      options: ["Elles produisent de l'ombre", "Elles stockent d'énormes quantités de CO2", "Elles attirent les touristes", "Elles empêchent le vent"],
      reponse: "Elles stockent d'énormes quantités de CO2",
      explication: "Elles agissent comme des puits de carbone vitaux contre le réchauffement."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel prédateur félin est le roi de la jungle en Amazonie ?",
      options: ["Le Tigre", "Le Lion", "Le Jaguar", "La Panthère"],
      reponse: "Le Jaguar",
      explication: "C'est un excellent nageur, contrairement à beaucoup d'autres félins."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle activité humaine est la principale menace pour ces forêts ?",
      options: ["La chasse", "La déforestation (pour l'agriculture, l'élevage, le bois)", "La pollution de l'eau", "L'observation scientifique"],
      reponse: "La déforestation (pour l'agriculture, l'élevage, le bois)",
      explication: "Des milliers d'hectares disparaissent chaque jour."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel oiseau coloré au très grand bec vit dans les forêts d'Amérique centrale et du Sud ?",
      options: ["Le Perroquet", "Le Toucan", "Le Flamant rose", "Le Héron"],
      reponse: "Le Toucan",
      explication: "Son bec est léger car il est spongieux à l'intérieur."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle plante grimpante ligneuse est typique des forêts tropicales ?",
      options: ["Le Lierre", "La Liane", "Le Roseau", "Le Cactus"],
      reponse: "La Liane",
      explication: "Certaines peuvent mesurer des centaines de mètres de long."
    }
  ]
};
