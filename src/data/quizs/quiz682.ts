import { Quiz } from "@/types/quiz";

export const quiz682: Quiz = {
  id: "682",
  titre: "Écologie : La Chaîne Alimentaire 🦅🐍🐭🌱",
  description: "Qui mange qui dans la nature ?",
  theme: "Nature",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le premier maillon d'une chaîne alimentaire (qui fabrique sa propre énergie) ?",
      options: ["Les carnivores", "Les végétaux (plantes, algues)", "Les décomposeurs", "Les humains"],
      reponse: "Les végétaux (plantes, algues)",
      explication: "Grâce à la photosynthèse, les plantes créent de la matière organique."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un animal qui ne mange que des plantes ?",
      options: ["Un carnivore", "Un herbivore", "Un omnivore", "Un piscivore"],
      reponse: "Un herbivore",
      explication: "Exemples : la vache, le lapin, le criquet."
    },
    {
      id: "3",
      type: "qcm",
      question: "Et un animal qui mange d'autres animaux ?",
      options: ["Un herbivore", "Un carnivore", "Un végétarien", "Un producteur"],
      reponse: "Un carnivore",
      explication: "Le lion, le loup ou l'aigle sont des carnivores."
    },
    {
      id: "4",
      type: "qcm",
      question: "L'être humain mange de tout (viande, légumes, fruits). Il est donc :",
      options: ["Exclusivement carnivore", "Omnivore", "Granivore", "Insectivore"],
      reponse: "Omnivore",
      explication: "Comme l'ours ou le cochon."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qui sont les 'décomposeurs' à la fin de la chaîne ?",
      options: ["Les grands prédateurs", "Les champignons, bactéries et vers de terre", "Les oiseaux", "Les arbres"],
      reponse: "Les champignons, bactéries et vers de terre",
      explication: "Ils transforment les déchets (feuilles mortes, cadavres) en terreau pour les plantes."
    },
    {
      id: "6",
      type: "qcm",
      question: "Si l'on retire un maillon de la chaîne (ex: on tue tous les loups), que se passe-t-il ?",
      options: ["Rien, les autres mangent autre chose", "L'équilibre est rompu et cela peut provoquer la surpopulation des proies", "C'est mieux pour tout le monde", "Les plantes poussent mieux"],
      reponse: "L'équilibre est rompu et cela peut provoquer la surpopulation des proies",
      explication: "Toutes les espèces sont liées entre elles."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un 'super-prédateur' ?",
      options: ["Un prédateur très rapide", "Un animal qui n'a lui-même aucun prédateur naturel", "Un animal qui mange beaucoup", "Un dinosaure"],
      reponse: "Un animal qui n'a lui-même aucun prédateur naturel",
      explication: "L'orque dans l'océan ou le lion dans la savane en sont des exemples."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel terme utilise-t-on pour décrire l'ensemble des chaînes alimentaires croisées d'un milieu ?",
      options: ["Un fil alimentaire", "Un réseau trophique", "Une pyramide de nourriture", "Une liste de courses"],
      reponse: "Un réseau trophique",
      explication: "Dans la nature, un animal mange souvent plusieurs choses différentes."
    },
    {
      id: "9",
      type: "qcm",
      question: "D'où vient l'énergie initiale de presque toutes les chaînes alimentaires ?",
      options: ["Du centre de la Terre", "Du Soleil", "De l'électricité", "De la pluie"],
      reponse: "Du Soleil",
      explication: "C'est lui qui permet la pousse des plantes, base de tout le système."
    },
    {
      id: "10",
      type: "qcm",
      question: "Lequel de ces animaux est un charognard (mange des animaux déjà morts) ?",
      options: ["Le léopard", "Le vautour", "La girafe", "Le cheval"],
      reponse: "Le vautour",
      explication: "Il nettoie la nature des restes de cadavres."
    }
  ]
};
