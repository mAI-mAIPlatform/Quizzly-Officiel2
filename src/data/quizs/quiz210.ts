import { Quiz } from "@/types/quiz";

export const quiz210: Quiz = {
  id: "210",
  titre: "Colères de la Nature 🌪️⛈️",
  description: "Testez votre connaissance sur les phénomènes météo extrêmes et les catastrophes naturelles.",
  theme: "Culture Générale",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le vent tourbillonnant extrêmement violent qui descend d'un nuage d'orage jusqu'au sol ?",
      options: ["Un Ouragan", "Une Tornade", "Un Mousson", "Un Blizzard"],
      reponse: "Une Tornade",
      explication: "Les tornades sont les vents les plus rapides sur Terre, dépassant parfois 400 km/h."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment nomme-t-on un cyclone tropical lorsqu'il se forme dans l'Océan Pacifique Nord-Ouest (près de l'Asie) ?",
      options: ["Un Ouragan", "Un Typhon", "Une Tempête de sable", "Un Tsunami"],
      reponse: "Un Typhon",
      explication: "Ouragan, typhon et cyclone sont des noms différents pour le même phénomène selon la région."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle échelle mesure l'intensité des tornades en fonction des dégâts ?",
      options: ["Échelle de Richter", "Échelle de Fujita (EF)", "Échelle de Mercalli", "Échelle de Beaufort"],
      reponse: "Échelle de Fujita (EF)",
      explication: "Elle va de EF0 (dégâts légers) à EF5 (dégâts incroyables)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle l'onde de choc marine géante souvent causée par un séisme sous-marin ?",
      options: ["Une Marée", "Un Tsunami", "Un Geyser", "Un Courant de jet"],
      reponse: "Un Tsunami",
      explication: "Tsunami signifie 'vague de port' en japonais."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel instrument mesure la pression atmosphérique et aide à prévoir les tempêtes ?",
      options: ["Le Thermomètre", "L'Anémomètre", "Le Baromètre", "L'Hygromètre"],
      reponse: "Le Baromètre",
      explication: "Une chute rapide de la pression annonce souvent l'arrivée de mauvais temps."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on l'éclair qui se produit entre un nuage et le sol lors d'un orage ?",
      options: ["Le Tonnerre", "La Foudre", "Le Plasma", "Le Court-circuit"],
      reponse: "La Foudre",
      explication: "Le tonnerre est le bruit causé par l'expansion brutale de l'air chauffé par la foudre."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Blizzard' ?",
      options: ["Une tempête de chaleur", "Une tempête de neige violente avec des vents forts et une visibilité réduite", "Une pluie torrentielle", "Un vent chaud du désert"],
      reponse: "Une tempête de neige violente avec des vents forts et une visibilité réduite",
      explication: "C'est un phénomène fréquent dans les régions polaires ou montagneuses."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la zone du globe où se produisent 90 % des séismes et des éruptions volcaniques ?",
      options: ["La Ceinture de Feu du Pacifique", "Le Triangle des Bermudes", "La Dorsale Atlantique", "Le Sahara"],
      reponse: "La Ceinture de Feu du Pacifique",
      explication: "Elle borde l'Océan Pacifique sur des milliers de kilomètres."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on le vent saisonnier qui apporte des pluies torrentielles en Asie du Sud ?",
      options: ["Le Sirocco", "La Mousson", "Le Mistral", "L'Alizé"],
      reponse: "La Mousson",
      explication: "Elle est indispensable à l'agriculture mais peut causer des inondations meurtrières."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel phénomène climatique, dû au réchauffement des eaux du Pacifique, perturbe la météo mondiale tous les 2 à 7 ans ?",
      options: ["La Niña", "El Niño", "Le Gulf Stream", "L'Anticyclone des Açores"],
      reponse: "El Niño",
      explication: "El Niño peut causer des sécheresses en Australie et d'énormes pluies en Amérique du Sud."
    }
  ]
};
