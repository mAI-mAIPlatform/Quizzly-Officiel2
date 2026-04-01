import { Quiz } from "@/types/quiz";

export const quiz214: Quiz = {
  id: "214",
  titre: "Le Magnétisme 🧲🧭",
  description: "Découvrez les forces invisibles qui guident les boussoles et font coller les aimants.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on les deux extrémités d'un aimant ?",
      options: ["Est et Ouest", "Haut et Bas", "Pôle Nord et Pôle Sud", "Plus et Moins"],
      reponse: "Pôle Nord et Pôle Sud",
      explication: "Comme pour la Terre, on utilise les termes de pôles."
    },
    {
      id: "2",
      type: "qcm",
      question: "Que se passe-t-il si l'on approche deux pôles identiques d'un aimant ?",
      options: ["Ils s'attirent", "Ils se repoussent", "Il ne se passe rien", "Ils fondent"],
      reponse: "Ils se repoussent",
      explication: "Les pôles de même nom se repoussent, les pôles opposés s'attirent."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel métal est le plus couramment attiré par un aimant ?",
      options: ["L'Or", "L'Argent", "Le Fer", "L'Aluminium"],
      reponse: "Le Fer",
      explication: "Le fer, le nickel et le cobalt sont des matériaux ferromagnétiques."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on l'espace invisible autour d'un aimant où s'exerce sa force ?",
      options: ["Le champ électrique", "Le champ magnétique", "L'aura", "Le vide"],
      reponse: "Le champ magnétique",
      explication: "On peut le visualiser en saupoudrant de la limaille de fer autour de l'aimant."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel instrument de navigation utilise une aiguille aimantée pour indiquer le Nord ?",
      options: ["Le Sextant", "La Boussole", "Le GPS", "L'Altimètre"],
      reponse: "La Boussole",
      explication: "L'aiguille s'aligne sur le champ magnétique terrestre."
    },
    {
      id: "6",
      type: "qcm",
      question: "Pourquoi l'aiguille d'une boussole indique-t-elle le Nord ?",
      options: ["Parce qu'il y fait froid", "Parce que la Terre se comporte comme un immense aimant", "Parce que l'étoile polaire l'attire", "C'est un moteur électrique"],
      reponse: "Parce que la Terre se comporte comme un immense aimant",
      explication: "Le noyau de la Terre (fer et nickel liquides) crée un champ magnétique global."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle un aimant qui nécessite de l'électricité pour fonctionner ?",
      options: ["Un aimant permanent", "Un électroaimant", "Une pile", "Un transformateur"],
      reponse: "Un électroaimant",
      explication: "Le magnétisme apparaît lorsqu'un courant électrique traverse un bobinage de fil."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel magnifique phénomène lumineux naturel est causé par l'interaction du vent solaire avec le magnétisme terrestre ?",
      options: ["Les Étoiles filantes", "Les Aurores Boréales (ou polaires)", "Les arcs-en-ciel", "La foudre"],
      reponse: "Les Aurores Boréales (ou polaires)",
      explication: "Les particules solaires sont déviées vers les pôles par le champ magnétique."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle l'unité de mesure de l'induction magnétique ?",
      options: ["Le Watt", "Le Tesla", "Le Volt", "L'Ampère"],
      reponse: "Le Tesla",
      explication: "Nommée en hommage à l'inventeur Nikola Tesla (symbole T)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Où se trouve le pôle nord magnétique de la Terre par rapport au pôle nord géographique ?",
      options: ["Exactement au même endroit", "Il s'en déplace légèrement chaque année", "En Antarctique", "À l'Équateur"],
      reponse: "Il s'en déplace légèrement chaque année",
      explication: "Le pôle magnétique n'est pas fixe, il bouge au fil du temps."
    }
  ]
};
