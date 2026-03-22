export const survivalExtended7 = {
  id: "surv_ext_7",
  titre: "Sanctuaire de l'Érudit VII",
  questions: [
    { type: "qcm", question: "Quel est le plus petit os du corps humain ?", options: ["L'étrier", "L'enclume", "Le marteau"], answer: "L'étrier" },
    { type: "vrai_faux", question: "Le Grand Canyon a été creusé par le fleuve Colorado.", answer: true },
    { type: "qcm", question: "Qui a peint 'Sainte Anne' et 'La Vierge à l'Enfant' ?", options: ["Raphaël", "Léonard de Vinci", "Michel-Ange"], answer: "Léonard de Vinci" },
    { type: "vrai_faux", question: "L'hélium est un gaz rare inflammable.", answer: false },
    { type: "qcm", question: "Quelle est la capitale de l'Indonésie ?", options: ["Bali", "Jakarta", "Surabaya"], answer: "Jakarta" },
    { type: "vrai_faux", question: "Le poète Arthur Rimbaud a écrit 'Une Saison en Enfer'.", answer: true },
    { type: "qcm", question: "Combien de pattes possède un scorpion ?", options: ["6", "8", "10"], answer: "8" },
    { type: "vrai_faux", question: "La première calculatrice mécanique s'appelait la Pascaline.", answer: true },
    { type: "qcm", question: "Quel est le symbole chimique du Fer ?", options: ["F", "Fe", "Ir"], answer: "Fe" },
    { type: "vrai_faux", question: "Le Kilimandjaro est le plus haut sommet d'Afrique.", answer: true },
    { type: "qcm", question: "Qui a composé 'La Flûte enchantée' ?", options: ["Haydn", "Mozart", "Schubert"], answer: "Mozart" },
    { type: "vrai_faux", question: "Un sonomètre mesure l'intensité d'un séisme.", answer: false },
    { type: "qcm", question: "Quelle est la capitale de la Suède ?", options: ["Oslo", "Stockholm", "Copenhague"], answer: "Stockholm" },
    { type: "vrai_faux", question: "Le panda géant se nourrit presque exclusivement de bambou.", answer: true },
    { type: "qcm", question: "Qui a écrit 'Le Rouge et le Noir' ?", options: ["Stendhal", "Balzac", "Hugo"], answer: "Stendhal" },
    { type: "vrai_faux", question: "Une année-lumière mesure une distance, pas un temps.", answer: true },
    { type: "qcm", question: "En quelle année s'est terminée la Seconde Guerre Mondiale ?", options: ["1944", "1945", "1946"], answer: "1945" },
    { type: "vrai_faux", question: "L'Islande n'a pas d'armée.", answer: true },
    { type: "qcm", question: "Quel est le gaz produit par la respiration humaine ?", options: ["Oxygène", "Dioxyde de carbone", "Azote"], answer: "Dioxyde de carbone" },
    { type: "vrai_faux", question: "Un triangle équilatéral a trois angles de 60°.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
