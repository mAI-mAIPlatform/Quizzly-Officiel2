import { Quiz } from "@/types/quiz";

export const quiz925: Quiz = {
  id: "925",
  titre: "Animaux : Les Insectes 🐝🦋",
  description: "Regardez sous vos pieds et découvrez le monde fascinant des petites bêtes.",
  theme: "Nature",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de pattes possèdent tous les insectes adultes ?",
      options: ["4", "6", "8", "10"],
      reponse: "6",
      explication: "Si un animal a 8 pattes (comme l'araignée), ce n'est pas un insecte."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces insectes fabrique du miel ?",
      options: ["La guêpe", "L'abeille", "Le bourdon", "La fourmi"],
      reponse: "L'abeille",
      explication: "Elle récolte le nectar des fleurs pour le transformer."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le papillon commence sa vie sous la forme d'une chenille.",
      reponse: "Vrai",
      explication: "Cela s'appelle la métamorphose."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel petit insecte rouge à points noirs est surnommé 'la bête à bon Dieu' ?",
      reponse: "Coccinelle",
      explication: "Elle est très utile aux jardiniers car elle mange les pucerons."
    },
    {
      id: "5",
      type: "qcm",
      question: "Où vivent les fourmis en colonie organisée ?",
      options: ["Dans une ruche", "Dans une fourmilière", "Dans un nid", "Dans un terrier"],
      reponse: "Dans une fourmilière",
      explication: "Elles travaillent toutes ensemble sous les ordres d'une reine."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Tous les insectes ont des ailes et peuvent voler.",
      reponse: "Faux",
      explication: "Certains, comme les fourmis ouvrières ou les poux, n'ont pas d'ailes."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel insecte peut soulever jusqu'à 50 fois son propre poids ?",
      options: ["Le moustique", "La mouche", "La fourmi", "Le scarabée"],
      reponse: "La fourmi",
      explication: "C'est l'un des animaux les plus forts proportionnellement à sa taille."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'enveloppe rigide et soyeuse dans laquelle la chenille se transforme en papillon ?",
      reponse: "Cocon",
      explication: "Ou chrysalide."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel insecte fait un bruit 'crin-crin' pendant l'été en frottant ses ailes ou ses pattes ?",
      options: ["Le criquet (ou la cigale)", "Le papillon", "Le scarabée", "La libellule"],
      reponse: "Le criquet (ou la cigale)",
      explication: "On appelle cela la stridulation."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les insectes ont leur squelette à l'extérieur de leur corps.",
      reponse: "Vrai",
      explication: "On l'appelle l'exosquelette ou carapace de chitine."
    }
  ]
};
