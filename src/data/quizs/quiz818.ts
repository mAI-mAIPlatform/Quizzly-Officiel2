import { Quiz } from "@/types/quiz";

export const quiz818: Quiz = {
  id: "818",
  titre: "Écologie : La Chaîne Alimentaire 🐾🍃",
  description: "Découvrez comment les êtres vivants dépendent les uns des autres pour se nourrir.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est au tout début de presque toutes les chaînes alimentaires ?",
      options: ["Les loups", "Les plantes (producteurs)", "Les insectes", "Les humains"],
      reponse: "Les plantes (producteurs)",
      explication: "Elles sont les seules à fabriquer leur propre nourriture grâce au soleil."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un animal qui ne mange que des plantes ?",
      options: ["Un carnivore", "Un herbivore", "Un omnivore", "Un détritivore"],
      reponse: "Un herbivore",
      explication: "Comme le lapin, la vache ou la chenille."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un prédateur est un animal qui chasse d'autres animaux pour se nourrir.",
      reponse: "Vrai",
      explication: "Il occupe souvent une place haute dans la chaîne alimentaire."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel terme désigne un animal qui mange à la fois de la viande et des végétaux ?",
      reponse: "Omnivore",
      explication: "L'humain et l'ours sont des exemples d'omnivores."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quoi servent les 'décomposeurs' (vers de terre, champignons, bactéries) ?",
      options: ["À rien du tout", "À nettoyer la nature en transformant les restes morts en terre fertile", "À faire peur", "À manger les feuilles vivantes"],
      reponse: "À nettoyer la nature en transformant les restes morts en terre fertile",
      explication: "Ils ferment la boucle du cycle de la vie."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Si un maillon de la chaîne alimentaire disparaît, les autres ne sont pas impactés.",
      reponse: "Faux",
      explication: "Toute la chaîne peut être déséquilibrée, certains mourant de faim et d'autres devenant trop nombreux."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on l'animal qui est mangé par un autre ?",
      options: ["Le chasseur", "La proie", "Le complice", "L'invité"],
      reponse: "La proie",
      explication: "Elle développe souvent des techniques pour se cacher ou s'enfuir."
    },
    {
      id: "8",
      type: "courte",
      question: "Qui est souvent appelé le 'roi de la chaîne alimentaire' dans la savane ?",
      reponse: "Lion",
      explication: "C'est un super-prédateur."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'un réseau trophique ?",
      options: ["Une chaîne avec un seul maillon", "Plusieurs chaînes alimentaires qui s'entrecroisent dans un écosystème", "Un piège à poissons", "Une marque de croquettes"],
      reponse: "Plusieurs chaînes alimentaires qui s'entrecroisent dans un écosystème",
      explication: "C'est une vision plus réaliste car un animal mange souvent plusieurs choses."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le phytoplancton est la base de la chaîne alimentaire dans l'océan.",
      reponse: "Vrai",
      explication: "Ce sont de minuscules végétaux marins."
    }
  ]
};
