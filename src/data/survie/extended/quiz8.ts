export const survivalExtended8 = {
  id: "surv_ext_8",
  titre: "Épreuves de l'Olympe VIII",
  questions: [
    { type: "qcm", question: "Quel est l'oiseau le plus rapide en piqué ?", options: ["L'aigle royal", "Le faucon pèlerin", "Le martin-pêcheur"], answer: "Le faucon pèlerin" },
    { type: "vrai_faux", question: "Vénus tourne dans le sens inverse des autres planètes.", answer: true },
    { type: "qcm", question: "Qui a écrit 'Zadig' ?", options: ["Voltaire", "Rousseau", "Montesquieu"], answer: "Voltaire" },
    { type: "vrai_faux", question: "Le sang humain est bleu avant d'être exposé à l'oxygène.", answer: false },
    { type: "qcm", question: "Quelle est la capitale de la Finlande ?", options: ["Oslo", "Helsinki", "Tallinn"], answer: "Helsinki" },
    { type: "vrai_faux", question: "Une éclipse solaire se produit lors d'une nouvelle lune.", answer: true },
    { type: "qcm", question: "Combien de vertèbres cervicales possède une girafe ?", options: ["7", "14", "21"], answer: "7" },
    { type: "vrai_faux", question: "Le miel est le seul aliment qui ne périme jamais.", answer: true },
    { type: "qcm", question: "Quel est le symbole chimique de l'Argent ?", options: ["Ag", "Ar", "At"], answer: "Ag" },
    { type: "vrai_faux", question: "Christophe Colomb a découvert l'Amérique en 1492.", answer: true },
    { type: "qcm", question: "Qui a peint 'La Nuit étoilée' ?", options: ["Gauguin", "Van Gogh", "Picasso"], answer: "Van Gogh" },
    { type: "vrai_faux", question: "Un octogone possède 10 côtés.", answer: false },
    { type: "qcm", question: "Quelle est la capitale de la Colombie ?", options: ["Medellin", "Cali", "Bogota"], answer: "Bogota" },
    { type: "vrai_faux", question: "Le koala ne boit quasiment jamais d'eau.", answer: true },
    { type: "qcm", question: "Qui a écrit 'Germinal' ?", options: ["Hugo", "Zola", "Flaubert"], answer: "Zola" },
    { type: "vrai_faux", question: "Le diamant est composé de carbone pur.", answer: true },
    { type: "qcm", question: "Quel est le nom du plus gros satellite de Saturne ?", options: ["Europe", "Titan", "Ganymède"], answer: "Titan" },
    { type: "vrai_faux", question: "La première transplantation cardiaque a eu lieu en 1967.", answer: true },
    { type: "qcm", question: "Qui a créé le personnage de Sherlock Holmes ?", options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe"], answer: "Arthur Conan Doyle" },
    { type: "vrai_faux", question: "L'archipel des Maldives est menacé par la montée des eaux.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
