import { Quiz } from "@/types/quiz";

export const quiz926: Quiz = {
  id: "926",
  titre: "Animaux : Reptiles et Amphibiens 🐍🐸",
  description: "Découvrez les animaux à sang froid qui rampent, nagent ou sautent.",
  theme: "Nature",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces animaux est un amphibien (qui vit dans l'eau et sur terre) ?",
      options: ["Le lézard", "La grenouille", "Le serpent", "La tortue"],
      reponse: "La grenouille",
      explication: "Les amphibiens naissent souvent dans l'eau (têtards) avant de devenir des adultes terrestres."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le revêtement dur et protecteur de la peau des reptiles ?",
      options: ["Les poils", "Les plumes", "Les écailles", "La mousse"],
      reponse: "Les écailles",
      explication: "Elles protègent l'animal contre le dessèchement et les blessures."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les serpents possèdent des paupières et clignent des yeux.",
      reponse: "Faux",
      explication: "Ils n'ont pas de paupières mobiles, leurs yeux sont protégés par une écaille transparente."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel reptile géant ressemble à un lézard préhistorique et vit dans l'eau ?",
      reponse: "Crocodile",
      explication: "Ou alligators. Ce sont de redoutables prédateurs."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel petit lézard est capable d'abandonner sa queue pour s'échapper si un prédateur l'attrape ?",
      options: ["Le caméléon", "Le lézard des murailles", "L'iguane", "Le varan"],
      reponse: "Le lézard des murailles",
      explication: "La queue repousse ensuite en quelques semaines (autotomie)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La tortue est le seul reptile qui possède une carapace osseuse soudée à son squelette.",
      reponse: "Vrai",
      explication: "Elle ne peut pas sortir de sa carapace, c'est sa maison et son armure."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle le venin que certains serpents injectent avec leurs crochets ?",
      options: ["La salive", "Le suc", "Le venin", "L'acide"],
      reponse: "Le venin",
      explication: "Il sert à chasser ou à se défendre."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le bébé de la grenouille qui ressemble à un petit poisson avec une queue ?",
      reponse: "Têtard",
      explication: "Il respire par des branchies avant de développer des poumons."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces reptiles est le plus grand lézard du monde, vivant sur quelques îles en Indonésie ?",
      options: ["Le crocodile marin", "Le varan de Komodo", "L'anaconda", "Le gecko"],
      reponse: "Le varan de Komodo",
      explication: "Il peut mesurer jusqu'à 3 mètres de long."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les reptiles sont des animaux à 'sang froid', ce qui signifie qu'ils doivent se chauffer au soleil.",
      reponse: "Vrai",
      explication: "On dit qu'ils sont ectothermes. Leur température corporelle dépend de leur environnement."
    }
  ]
};
