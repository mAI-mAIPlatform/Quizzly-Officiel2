import { Quiz } from "@/types/quiz";

export const quiz804: Quiz = {
  id: "804",
  titre: "Corps Humain : La Digestion 🍎",
  description: "Le long voyage des aliments dans votre corps pour vous donner des forces.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Où commence la digestion ?",
      options: ["Dans l'estomac", "Dans la bouche", "Dans l'intestin", "Dans le foie"],
      reponse: "Dans la bouche",
      explication: "Les dents broient et la salive commence à transformer les aliments."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le tuyau qui relie la bouche à l'estomac ?",
      options: ["La trachée", "L'œsophage", "L'intestin grêle", "Le côlon"],
      reponse: "L'œsophage",
      explication: "Les muscles de l'œsophage poussent les aliments vers le bas."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'estomac est une sorte de sac qui mélange les aliments avec des sucs acides.",
      reponse: "Vrai",
      explication: "Cela transforme les aliments en une bouillie liquide."
    },
    {
      id: "4",
      type: "courte",
      question: "Où les nutriments (énergie) passent-ils dans le sang ? Dans l'intestin ...",
      reponse: "grêle",
      explication: "C'est un tuyau très long (environ 6-7 mètres chez l'adulte)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel organe produit la bile pour aider à digérer les graisses ?",
      options: ["Le pancréas", "Le foie", "La rate", "Le cœur"],
      reponse: "Le foie",
      explication: "Elle est stockée dans la vésicule biliaire."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le gros intestin sert à récupérer l'eau avant d'évacuer les déchets.",
      reponse: "Vrai",
      explication: "Les déchets solides sortent ensuite par l'anus."
    },
    {
      id: "7",
      type: "qcm",
      question: "Combien de temps dure environ la digestion complète d'un repas ?",
      options: ["10 minutes", "1 heure", "Entre 12 et 24 heures", "Une semaine"],
      reponse: "Entre 12 et 24 heures",
      explication: "C'est un processus long et complexe."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le liquide produit par les glandes de la bouche ?",
      reponse: "Salive",
      explication: "Elle contient des enzymes qui facilitent la digestion."
    },
    {
      id: "9",
      type: "qcm",
      question: "À quoi servent les nutriments extraits des aliments ?",
      options: ["À faire du bruit", "À grandir, se chauffer et faire fonctionner les organes", "À dormir plus longtemps", "À rien du tout"],
      reponse: "À grandir, se chauffer et faire fonctionner les organes",
      explication: "C'est le carburant du corps."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On peut digérer en étant la tête en bas.",
      reponse: "Vrai",
      explication: "Car ce sont les muscles du tube digestif qui font avancer les aliments, pas la gravité."
    }
  ]
};
