export const survivalExtended18 = {
  id: "surv_ext_18",
  titre: "Sphères de l'Intelligence XVIII",
  questions: [
    { type: "qcm", question: "Qui est le philosophe de la Phénoménologie de l'esprit ?", options: ["Hegel", "Kant", "Fichte"], answer: "Hegel" },
    { type: "vrai_faux", question: "Un bit peut avoir quatre valeurs différentes.", answer: false },
    { type: "qcm", question: "Qu'est-ce que le pouvoir d'achat ?", options: ["Le salaire brut", "Quantité de biens qu'on peut acheter avec ses revenus", "Le prix de l'or"], answer: "Quantité de biens qu'on peut acheter avec ses revenus" },
    { type: "vrai_faux", question: "Un routeur permet d'interconnecter plusieurs réseaux.", answer: true },
    { type: "qcm", question: "Qui a écrit 'La Nausée' ?", options: ["Hemingway", "Sartre", "Kafka"], answer: "Sartre" },
    { type: "vrai_faux", question: "La loi est la même pour tous en France.", answer: true },
    { type: "qcm", question: "Quelle branche de l'économie étudie les comportements individuels ?", options: ["Macroéconomie", "Microéconomie", "Économétrie"], answer: "Microéconomie" },
    { type: "vrai_faux", question: "Le Wi-Fi 6 est plus rapide que le Wi-Fi 5.", answer: true },
    { type: "qcm", question: "Quel philosophe prônait le stoïcisme ?", options: ["Marc Aurèle", "Épicure", "Plutarque"], answer: "Marc Aurèle" },
    { type: "vrai_faux", question: "L'adresse IP 127.0.0.1 correspond à la machine locale (localhost).", answer: true },
    { type: "qcm", question: "Quelle institution protège le patrimoine mondial ?", options: ["UNESCO", "UNICEF", "OCDE"], answer: "UNESCO" },
    { type: "vrai_faux", question: "Une élection législative sert à élire les députés.", answer: true },
    { type: "qcm", question: "Quel est le langage de base pour créer une structure de page web ?", options: ["CSS", "HTML", "PHP"], answer: "HTML" },
    { type: "vrai_faux", question: "Le capitalisme repose sur la propriété privée des moyens de production.", answer: true },
    { type: "qcm", question: "Qui a dit 'L'homme est un loup pour l'homme' ?", options: ["Locke", "Hobbes", "Rousseau"], answer: "Hobbes" },
    { type: "vrai_faux", question: "Le cloud est un espace de stockage physique dans votre maison.", answer: false },
    { type: "qcm", question: "Combien y a-t-il de régions en France métropolitaine ?", options: ["10", "13", "22"], answer: "13" },
    { type: "vrai_faux", question: "Le PIB par habitant mesure le niveau de vie moyen.", answer: true },
    { type: "qcm", question: "Que signifie 'SSD' ?", options: ["Solid State Drive", "System Storage Disk", "Secure Static Device"], answer: "Solid State Drive" },
    { type: "vrai_faux", question: "Descartes a écrit 'Les Méditations Métaphysiques'.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
