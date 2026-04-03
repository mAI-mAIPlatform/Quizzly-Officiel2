import { Quiz } from "@/types/quiz";

export const quiz813: Quiz = {
  id: "813",
  titre: "Écologie : La Biodiversité 🌳🦋",
  description: "Découvrez la richesse de la vie sur Terre et pourquoi il est vital de la protéger.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que la biodiversité ?",
      options: ["La diversité des paysages uniquement", "L'ensemble de toutes les espèces vivantes et de leurs milieux", "Une nouvelle marque de vêtements bio", "La diversité des climats"],
      reponse: "L'ensemble de toutes les espèces vivantes et de leurs milieux",
      explication: "Animaux, plantes, champignons, bactéries... tout en fait partie."
    },
    {
      id: "2",
      type: "qcm",
      question: "Pourquoi les abeilles sont-elles essentielles à la biodiversité ?",
      options: ["Pour piquer les gens", "Parce qu'elles assurent la pollinisation (reproduction des plantes)", "Pour faire du bruit en été", "Elles ne sont pas utiles"],
      reponse: "Parce qu'elles assurent la pollinisation (reproduction des plantes)",
      explication: "Sans elles, beaucoup de fruits et légumes disparaîtraient."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Une espèce 'endémique' ne se trouve qu'à un seul endroit précis du monde.",
      reponse: "Vrai",
      explication: "Comme les lémuriens à Madagascar."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on une espèce qui risque de disparaître totalement ?",
      reponse: "Espèce menacée",
      explication: "Ou espèce en danger d'extinction."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la cause principale de la perte de biodiversité aujourd'hui ?",
      options: ["Les chutes de météorites", "La destruction des habitats naturels (villes, agriculture)", "Les volcans", "Le froid en hiver"],
      reponse: "La destruction des habitats naturels (villes, agriculture)",
      explication: "Les animaux et plantes n'ont plus d'endroit pour vivre."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Toutes les espèces vivantes sont reliées entre elles dans des chaînes alimentaires.",
      reponse: "Vrai",
      explication: "Si une espèce disparaît, cela fragilise tout l'écosystème."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'une 'espèce invasive' ?",
      options: ["Une espèce très gentille", "Une espèce venue d'ailleurs qui prend la place des espèces locales", "Une espèce qui voyage beaucoup", "Une espèce préhistorique"],
      reponse: "Une espèce venue d'ailleurs qui prend la place des espèces locales",
      explication: "Elles dérèglent l'équilibre naturel."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel grand récif corallien en Australie est menacé par le réchauffement des eaux ?",
      reponse: "Grande Barrière de Corail",
      explication: "C'est le plus grand écosystème vivant de la planète."
    },
    {
      id: "9",
      type: "qcm",
      question: "À quoi servent les 'réserves naturelles' ?",
      options: ["À faire des parcs d'attractions", "À protéger des zones où la nature reste sauvage et protégée de l'homme", "À cultiver des légumes", "À construire des routes"],
      reponse: "À protéger des zones où la nature reste sauvage et protégée de l'homme",
      explication: "Pour permettre aux espèces de vivre tranquillement."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'humain n'a pas besoin de la biodiversité pour survivre.",
      reponse: "Faux",
      explication: "Elle nous donne notre nourriture, notre oxygène et beaucoup de nos médicaments."
    }
  ]
};
