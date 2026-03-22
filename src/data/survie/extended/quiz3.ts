export const survivalExtended3 = {
  id: "surv_ext_3",
  titre: "Le Défi des Maîtres III",
  questions: [
    { type: "qcm", question: "Quel est le gaz le plus abondant dans l'atmosphère ?", options: ["Oxygène", "Azote", "Argon"], answer: "Azote" },
    { type: "vrai_faux", question: "Le lion est le plus grand félin.", answer: false },
    { type: "qcm", question: "Qui a sculpté 'Le Penseur' ?", options: ["Michel-Ange", "Rodin", "Donatello"], answer: "Rodin" },
    { type: "vrai_faux", question: "La Terre est à environ 150 millions de km du Soleil.", answer: true },
    { type: "qcm", question: "Quelle est la capitale de la Turquie ?", options: ["Istanbul", "Ankara", "Izmir"], answer: "Ankara" },
    { type: "vrai_faux", question: "Le tunnel sous la Manche relie la France et l'Espagne.", answer: false },
    { type: "qcm", question: "Combien de cœurs possède une pieuvre ?", options: ["1", "2", "3"], answer: "3" },
    { type: "vrai_faux", question: "Marie Curie a reçu deux prix Nobel.", answer: true },
    { type: "qcm", question: "Quel est le symbole chimique du Sodium ?", options: ["Na", "So", "Sn"], answer: "Na" },
    { type: "vrai_faux", question: "Le Mont Blanc est le plus haut sommet d'Europe (hors Caucase).", answer: true },
    { type: "qcm", question: "Qui a composé 'Les Quatre Saisons' ?", options: ["Bach", "Vivaldi", "Beethoven"], answer: "Vivaldi" },
    { type: "vrai_faux", question: "Un octuor comporte 8 musiciens.", answer: true },
    { type: "qcm", question: "Quelle est la capitale du Portugal ?", options: ["Madrid", "Lisbonne", "Porto"], answer: "Lisbonne" },
    { type: "vrai_faux", question: "Le requin-baleine est un mammifère.", answer: false },
    { type: "qcm", question: "Qui a écrit 'L'Étranger' ?", options: ["Sartre", "Camus", "Proust"], answer: "Camus" },
    { type: "vrai_faux", question: "La Grande Muraille de Chine est visible depuis la Lune à l'œil nu.", answer: false },
    { type: "qcm", question: "En quelle année a eu lieu la Révolution Française ?", options: ["1776", "1789", "1799"], answer: "1789" },
    { type: "vrai_faux", question: "L'Islande est une île volcanique.", answer: true },
    { type: "qcm", question: "Quel est le métal le plus utilisé au monde ?", options: ["Aluminium", "Fer", "Cuivre"], answer: "Fer" },
    { type: "vrai_faux", question: "Un triangle isocèle a deux côtés égaux.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
