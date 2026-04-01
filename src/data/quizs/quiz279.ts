import { Quiz } from "@/types/quiz";

export const quiz279: Quiz = {
  id: "279",
  titre: "Les Planètes Naines 🌑🌀",
  description: "Testez votre connaissance sur Pluton, Cérès et les autres petits mondes du Système Solaire.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel objet célèbre a été déclassé de 'planète' à 'planète naine' en 2006 ?",
      options: ["Mars", "Pluton", "Neptune", "Mercure"],
      reponse: "Pluton",
      explication: "La définition de 'planète' a été changée par l'Union Astronomique Internationale."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la principale différence entre une planète et une planète naine ?",
      options: ["La taille uniquement", "La couleur", "La planète naine n'a pas 'nettoyé' son voisinage orbital", "Elle n'a pas d'atmosphère"],
      reponse: "La planète naine n'a pas 'nettoyé' son voisinage orbital",
      explication: "Une planète doit être dominante sur son orbite, ce qui n'est pas le cas des planètes naines."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle planète naine se trouve dans la ceinture d'astéroïdes entre Mars et Jupiter ?",
      options: ["Éris", "Cérès", "Hauméa", "Makémaké"],
      reponse: "Cérès",
      explication: "C'est l'objet le plus massif de la ceinture d'astéroïdes."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle l'immense zone au-delà de Neptune où se situent la plupart des planètes naines ?",
      options: ["La Ceinture d'Orion", "La Ceinture de Kuiper", "Le Nuage gazeux", "Le Vide Sidéral"],
      reponse: "La Ceinture de Kuiper",
      explication: "C'est une zone remplie de débris glacés datant de la formation du système solaire."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle planète naine a une forme allongée (comme un ballon de rugby) à cause de sa rotation très rapide ?",
      options: ["Pluton", "Hauméa", "Makémaké", "Éris"],
      reponse: "Hauméa",
      explication: "Elle fait un tour sur elle-même en moins de 4 heures."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle sonde spatiale a survolé Pluton en 2015, révélant des montagnes de glace et un grand cœur blanc ?",
      options: ["Cassini", "New Horizons", "Voyager 2", "Juno"],
      reponse: "New Horizons",
      explication: "Les images ont montré que Pluton est un monde géologiquement actif."
    },
    {
      id: "7",
      type: "qcm",
      question: "Combien y a-t-il de planètes naines officiellement reconnues aujourd'hui par l'UAI ?",
      options: ["Une seule", "Cinq", "Douze", "Plus de cent"],
      reponse: "Cinq",
      explication: "Pluton, Cérès, Éris, Hauméa et Makémaké (mais il y en a probablement des centaines d'autres)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle planète naine est presque aussi massive que Pluton et a provoqué son déclassement lors de sa découverte ?",
      options: ["Lune", "Éris", "Vesta", "Titan"],
      reponse: "Éris",
      explication: "Éris est située très loin du Soleil, dans le disque dispersé."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle la plus grosse lune de Pluton ?",
      options: ["Charon", "Europe", "Titan", "Phobos"],
      reponse: "Charon",
      explication: "Pluton et Charon forment presque une planète double tant leurs tailles sont proches."
    },
    {
      id: "10",
      type: "qcm",
      question: "De quoi sont majoritairement composées les planètes naines lointaines ?",
      options: ["De gaz uniquement", "De roche et de glaces (eau, méthane, azote)", "D'or pur", "De feu"],
      reponse: "De roche et de glaces (eau, méthane, azote)",
      explication: "Elles sont situées trop loin du Soleil pour que l'eau reste liquide."
    }
  ]
};
