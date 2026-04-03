import { Quiz } from "@/types/quiz";

export const quiz550: Quiz = {
  id: "550",
  titre: "SVT : La Nutrition des Animaux 🍖",
  description: "Distinguez les différents régimes alimentaires et le fonctionnement de la digestion.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on un animal qui ne mange que des végétaux ?",
      options: ["Carnivore", "Herbivore", "Omnivore", "Piscivore"],
      reponse: "Herbivore",
      explication: "Exemple : vache, lapin, criquet."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un animal qui se nourrit d'autres animaux ?",
      options: ["Végétalien", "Carnivore (ou zoophage)", "Détritivore", "Producteur"],
      reponse: "Carnivore (ou zoophage)",
      explication: "Exemple : lion, aigle, requin."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est le régime alimentaire d'un animal qui mange de tout (plantes et animaux) ?",
      options: ["Omnivore", "Herbivore", "Granivore", "Insectivore"],
      reponse: "Omnivore",
      explication: "Exemple : l'homme, le porc, l'ours."
    },
    {
      id: "4",
      type: "qcm",
      question: "Pourquoi les animaux sont-ils dits 'hétérotrophes' ?",
      options: ["Parce qu'ils produisent leur propre nourriture", "Parce qu'ils doivent consommer d'autres êtres vivants pour produire leur matière", "Parce qu'ils ont peur de l'eau", "Parce qu'ils dorment la nuit"],
      reponse: "Parce qu'ils doivent consommer d'autres êtres vivants pour produire leur matière",
      explication: "Ils dépendent des producteurs primaires (plantes)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la première étape du trajet des aliments chez l'homme ?",
      options: ["L'estomac", "La bouche", "L'intestin grêle", "L'oesophage"],
      reponse: "La bouche",
      explication: "On y mâche et on mélange avec la salive."
    },
    {
      id: "6",
      type: "qcm",
      question: "Où les nutriments passent-ils dans le sang lors de la digestion ?",
      options: ["Dans l'estomac", "Dans l'intestin grêle (absorption intestinale)", "Dans le gros intestin", "Dans le foie"],
      reponse: "Dans l'intestin grêle (absorption intestinale)",
      explication: "Les parois de l'intestin sont très fines pour laisser passer les nutriments."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'une chaîne alimentaire ?",
      options: ["Un collier pour chien", "Une suite d'êtres vivants dans laquelle chacun mange celui qui le précède", "Une liste de courses", "Une forêt"],
      reponse: "Une suite d'êtres vivants dans laquelle chacun mange celui qui le précède",
      explication: "Producteur -> Consommateur 1 -> Consommateur 2..."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on les animaux qui se nourrissent de restes (déchets, animaux morts) ?",
      options: ["Chasseurs", "Détritivores (ou décomposeurs)", "Super-prédateurs", "Gourmands"],
      reponse: "Détritivores (ou décomposeurs)",
      explication: "Ils nettoient la nature et recyclent la matière."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans quel organe les aliments sont-ils malaxés avec des sucs gastriques acides ?",
      options: ["La bouche", "Le coeur", "L'estomac", "Le poumon"],
      reponse: "L'estomac",
      explication: "C'est l'étape de la 'transformation chimique'."
    },
    {
      id: "10",
      type: "qcm",
      question: "Que deviennent les parties des aliments qui ne sont pas digérées ?",
      options: ["Elles disparaissent", "Elles sont transformées en muscle", "Elles forment les excréments (rejetés par l'anus)", "Elles sont stockées toute la vie"],
      reponse: "Elles forment les excréments (rejetés par l'anus)",
      explication: "Il s'agit des déchets dont le corps n'a pas besoin."
    }
  ]
};
