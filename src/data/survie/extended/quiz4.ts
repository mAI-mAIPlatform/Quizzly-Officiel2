export const survivalExtended4 = {
  id: "surv_ext_4",
  titre: "Énigmes de l'Âme IV",
  questions: [
    { type: "qcm", question: "Quel est le plus petit pays du monde ?", options: ["Monaco", "Vatican", "Saint-Marin"], answer: "Vatican" },
    { type: "vrai_faux", question: "Le Sahara est le plus grand désert du monde.", answer: false },
    { type: "qcm", question: "Qui a inventé le téléphone ?", options: ["Edison", "Graham Bell", "Tesla"], answer: "Graham Bell" },
    { type: "vrai_faux", question: "Le cerveau humain est composé à 75% d'eau.", answer: true },
    { type: "qcm", question: "Quelle est la capitale de l'Islande ?", options: ["Reykjavik", "Oslo", "Helsinki"], answer: "Reykjavik" },
    { type: "vrai_faux", question: "L'Everest grandit de quelques millimètres chaque année.", answer: true },
    { type: "qcm", question: "Combien d'États compte les USA ?", options: ["48", "50", "52"], answer: "50" },
    { type: "vrai_faux", question: "Le chocolat est toxique pour les chiens.", answer: true },
    { type: "qcm", question: "Quel est l'animal terrestre le plus lourd ?", options: ["Hippopotame", "Rhinocéros", "Éléphant d'Afrique"], answer: "Éléphant d'Afrique" },
    { type: "vrai_faux", question: "L'homme a marché sur la lune pour la première fois en 1969.", answer: true },
    { type: "qcm", question: "Qui est l'auteur de '1984' ?", options: ["Huxley", "Orwell", "Bradbury"], answer: "Orwell" },
    { type: "vrai_faux", question: "L'aspirine est extraite de l'écorce de saule.", answer: true },
    { type: "qcm", question: "Quelle est la capitale de l'Égypte ?", options: ["Alexandrie", "Louxor", "Le Caire"], answer: "Le Caire" },
    { type: "vrai_faux", question: "Le kiwi est un oiseau qui ne vole pas.", answer: true },
    { type: "qcm", question: "Quelle est la langue la plus parlée au monde (natifs) ?", options: ["Anglais", "Espagnol", "Mandarin"], answer: "Mandarin" },
    { type: "vrai_faux", question: "La baleine bleue est le plus gros animal ayant jamais existé.", answer: true },
    { type: "qcm", question: "Quel pays organise les JO d'été 2024 ?", options: ["Japon", "France", "USA"], answer: "France" },
    { type: "vrai_faux", question: "Le diamant est la matière naturelle la plus dure.", answer: true },
    { type: "qcm", question: "Quel est le nom du scientifique qui a élaboré la théorie de la relativité ?", options: ["Newton", "Einstein", "Hawking"], answer: "Einstein" },
    { type: "vrai_faux", question: "Un polygone à 5 côtés s'appelle un hexagone.", answer: false },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
