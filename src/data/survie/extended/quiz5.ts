export const survivalExtended5 = {
  id: "surv_ext_5",
  titre: "Bastion de l'Esprit V",
  questions: [
    { type: "qcm", question: "Quelle est la capitale du Brésil ?", options: ["Rio de Janeiro", "Brasilia", "Sao Paulo"], answer: "Brasilia" },
    { type: "vrai_faux", question: "Les pingouins vivent au pôle Nord.", answer: false },
    { type: "qcm", question: "Qui a peint 'Le Cri' ?", options: ["Munch", "Van Gogh", "Klimt"], answer: "Munch" },
    { type: "vrai_faux", question: "Le son voyage plus vite dans l'eau que dans l'air.", answer: true },
    { type: "qcm", question: "Quel est l'élément chimique le plus léger ?", options: ["Hélium", "Hydrogène", "Oxygène"], answer: "Hydrogène" },
    { type: "vrai_faux", question: "Le canal de Panama relie l'Atlantique et le Pacifique.", answer: true },
    { type: "qcm", question: "Combien de planètes composent le système solaire ?", options: ["8", "9", "10"], answer: "8" },
    { type: "vrai_faux", question: "Shakespeare est l'auteur de 'Hamlet'.", answer: true },
    { type: "qcm", question: "Quelle est la capitale de l'Argentine ?", options: ["Santiago", "Lima", "Buenos Aires"], answer: "Buenos Aires" },
    { type: "vrai_faux", question: "Une pieuvre a trois cœurs.", answer: true },
    { type: "qcm", question: "Quel est le plus grand mammifère terrestre ?", options: ["Girafe", "Éléphant d'Afrique", "Baleine"], answer: "Éléphant d'Afrique" },
    { type: "vrai_faux", question: "Thomas Edison a inventé l'ampoule électrique.", answer: true },
    { type: "qcm", question: "En quelle année a sombré le Titanic ?", options: ["1902", "1912", "1922"], answer: "1912" },
    { type: "vrai_faux", question: "Le Japon est un archipel.", answer: true },
    { type: "qcm", question: "Qui a écrit 'Les Fleurs du Mal' ?", options: ["Baudelaire", "Rimbaud", "Verlaine"], answer: "Baudelaire" },
    { type: "vrai_faux", question: "L'or est un métal précieux inoxydable.", answer: true },
    { type: "qcm", question: "Quel est le nom de la galaxie où nous vivons ?", options: ["Andromède", "Voie Lactée", "Orion"], answer: "Voie Lactée" },
    { type: "vrai_faux", question: "Le cœur humain bat environ 100 000 fois par jour.", answer: true },
    { type: "qcm", question: "Qui est le créateur de Microsoft ?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg"], answer: "Bill Gates" },
    { type: "vrai_faux", question: "Le Mont Everest se situe dans les Alpes.", answer: false },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
