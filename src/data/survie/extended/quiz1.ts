export const survivalExtended1 = {
  id: "surv_ext_1",
  titre: "Épreuve de l'Infini I",
  questions: [
    { type: "qcm", question: "Qui a écrit 'Les Misérables' ?", options: ["Émile Zola", "Victor Hugo", "Honoré de Balzac"], answer: "Victor Hugo" },
    { type: "vrai_faux", question: "La photosynthèse produit de l'oxygène.", answer: true },
    { type: "qcm", question: "Quelle est la racine carrée de 144 ?", options: ["10", "12", "14"], answer: "12" },
    { type: "vrai_faux", question: "Le mur de Berlin est tombé en 1989.", answer: true },
    { type: "qcm", question: "Quel est le plus grand océan ?", options: ["Atlantique", "Pacifique", "Indien"], answer: "Pacifique" },
    { type: "vrai_faux", question: "L'atome de carbone possède 6 protons.", answer: true },
    { type: "qcm", question: "Comment dit-on 'Merci' en japonais ?", options: ["Arigato", "Sayonara", "Konichiwa"], answer: "Arigato" },
    { type: "vrai_faux", question: "'Le Petit Prince' a été écrit par Saint-Exupéry.", answer: true },
    { type: "qcm", question: "Quel pays a remporté la Coupe du Monde 2018 ?", options: ["Brésil", "Allemagne", "France"], answer: "France" },
    { type: "vrai_faux", question: "La Seine coule à Marseille.", answer: false },
    { type: "qcm", question: "Combien d'arêtes possède un cube ?", options: ["8", "10", "12"], answer: "12" },
    { type: "vrai_faux", question: "L'azote compose environ 78% de l'air.", answer: true },
    { type: "qcm", question: "Qui est le dieu grec de la foudre ?", options: ["Poséidon", "Hadès", "Zeus"], answer: "Zeus" },
    { type: "vrai_faux", question: "Le vaccin contre la rage a été découvert par Pasteur.", answer: true },
    { type: "qcm", question: "Quelle est la capitale du Canada ?", options: ["Toronto", "Montréal", "Ottawa"], answer: "Ottawa" },
    { type: "vrai_faux", question: "Mars est surnommée la planète rouge.", answer: true },
    { type: "qcm", question: "Quel est le résultat de 15 x 6 ?", options: ["80", "90", "100"], answer: "90" },
    { type: "vrai_faux", question: "Une année bissextile dure 366 jours.", answer: true },
    { type: "qcm", question: "Qui a peint 'Guernica' ?", options: ["Dalí", "Picasso", "Miró"], answer: "Picasso" },
    { type: "vrai_faux", question: "La première guerre mondiale a commencé en 1914.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
