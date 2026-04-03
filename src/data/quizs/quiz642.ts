import { Quiz } from "@/types/quiz";

export const quiz642: Quiz = {
  id: "642",
  titre: "Science : Les Aimants 🧲",
  description: "Découvrez les secrets de l'attraction magnétique.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces objets sera attiré par un aimant ?",
      options: ["Un bouton en plastique", "Un trombone en fer", "Une règle en bois", "Un verre"],
      reponse: "Un trombone en fer",
      explication: "Les aimants attirent les métaux ferreux (fer, nickel, cobalt)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on les deux extrémités d'un aimant ?",
      options: ["Le haut et le bas", "Le pôle Nord et le pôle Sud", "La gauche et la droite", "Le plus et le moins"],
      reponse: "Le pôle Nord et le pôle Sud",
      explication: "Chaque aimant possède ces deux pôles inséparables."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que se passe-t-il si l'on approche deux pôles identiques (ex: deux pôles Nord) ?",
      options: ["Ils s'attirent", "Ils se repoussent", "Il ne se passe rien", "Ils fondent"],
      reponse: "Ils se repoussent",
      explication: "Les pôles de même nom se repoussent, les pôles opposés s'attirent."
    },
    {
      id: "4",
      type: "qcm",
      question: "L'aluminium est-il attiré par un aimant de cuisine classique ?",
      options: ["Oui, toujours", "Non", "Seulement s'il est mouillé", "Seulement s'il est très chaud"],
      reponse: "Non",
      explication: "L'aluminium est un métal non-ferreux, comme l'or ou l'argent."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel instrument de navigation utilise une aiguille aimantée pour indiquer le Nord ?",
      options: ["Le GPS", "La boussole", "Le thermomètre", "La montre"],
      reponse: "La boussole",
      explication: "L'aiguille s'aligne sur le champ magnétique de la Terre."
    },
    {
      id: "6",
      type: "qcm",
      question: "La Terre est-elle un gigantesque aimant ?",
      options: ["Oui", "Non", "Seulement aux pôles", "C'est un secret"],
      reponse: "Oui",
      explication: "Son noyau de fer liquide génère un immense champ magnétique protecteur."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on un aimant qui ne fonctionne que lorsqu'il est traversé par de l'électricité ?",
      options: ["Un aimant magique", "Un électro-aimant", "Un aimant permanent", "Une pile"],
      reponse: "Un électro-aimant",
      explication: "On peut l'allumer et l'éteindre avec un interrupteur."
    },
    {
      id: "8",
      type: "qcm",
      question: "Peut-on couper un aimant en deux pour avoir un pôle Nord seul d'un côté ?",
      options: ["Oui", "Non, on obtient deux aimants plus petits ayant chacun un pôle Nord et Sud", "Oui, mais il perd sa force", "L'aimant disparaît"],
      reponse: "Non, on obtient deux aimants plus petits ayant chacun un pôle Nord et Sud",
      explication: "Les pôles magnétiques existent toujours par paires."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces métaux précieux n'est PAS attiré par un aimant ?",
      options: ["Le Fer", "L'Or", "Le Nickel", "Le Cobalt"],
      reponse: "L'Or",
      explication: "L'or pur n'est pas magnétique."
    },
    {
      id: "10",
      type: "qcm",
      question: "Où trouve-t-on souvent des aimants dans la maison (pour tenir des notes) ?",
      options: ["Sur le four", "Sur la porte du réfrigérateur", "Dans la baignoire", "Sous les tapis"],
      reponse: "Sur la porte du réfrigérateur",
      explication: "C'est l'utilisation domestique la plus courante."
    }
  ]
};
