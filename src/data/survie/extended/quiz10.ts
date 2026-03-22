export const survivalExtended10 = {
  id: "surv_ext_10",
  titre: "Le Zénith du Survivant X",
  questions: [
    { type: "qcm", question: "Quelle est la capitale de l'Afrique du Sud ?", options: ["Johannesburg", "Pretoria", "Le Cap"], answer: "Pretoria" },
    { type: "vrai_faux", question: "Un poisson rouge a une mémoire de 3 secondes.", answer: false },
    { type: "qcm", question: "Qui a écrit 'Le Vieil Homme et la Mer' ?", options: ["Steinbeck", "Hemingway", "Fitzgerald"], answer: "Hemingway" },
    { type: "vrai_faux", question: "La peau est l'organe le plus grand du corps humain.", answer: true },
    { type: "qcm", question: "Quel est le symbole chimique de l'Antimoine ?", options: ["An", "Sb", "At"], answer: "Sb" },
    { type: "vrai_faux", question: "Le soleil est une boule de feu.", answer: false },
    { type: "qcm", question: "Combien y a-t-il de continents ?", options: ["5", "6", "7"], answer: "7" },
    { type: "vrai_faux", question: "Le mot 'radar' est un palindrome.", answer: true },
    { type: "qcm", question: "Quelle est la capitale de la Corée du Sud ?", options: ["Séoul", "Busan", "Pyongyang"], answer: "Séoul" },
    { type: "vrai_faux", question: "Le Burj Khalifa est le plus haut gratte-ciel du monde.", answer: true },
    { type: "qcm", question: "Qui a découvert le radium ?", options: ["Pasteur", "Marie Curie", "Einstein"], answer: "Marie Curie" },
    { type: "vrai_faux", question: "Les abeilles meurent toujours après avoir piqué.", answer: false },
    { type: "qcm", question: "Quelle est la langue officielle au Brésil ?", options: ["Espagnol", "Portugais", "Brésilien"], answer: "Portugais" },
    { type: "vrai_faux", question: "Un siècle compte 100 ans.", answer: true },
    { type: "qcm", question: "Qui a écrit 'Notre-Dame de Paris' ?", options: ["Victor Hugo", "Dumas", "Baudelaire"], answer: "Victor Hugo" },
    { type: "vrai_faux", question: "L'Islande est au-dessus du cercle polaire.", answer: false },
    { type: "qcm", question: "Quel est l'océan le plus froid ?", options: ["Antarctique", "Arctique", "Indien"], answer: "Arctique" },
    { type: "vrai_faux", question: "L'odorat est le sens le plus lié à la mémoire.", answer: true },
    { type: "qcm", question: "Quel est le plus grand État des USA ?", options: ["Texas", "Californie", "Alaska"], answer: "Alaska" },
    { type: "vrai_faux", question: "La baleine bleue peut peser jusqu'à 200 tonnes.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
