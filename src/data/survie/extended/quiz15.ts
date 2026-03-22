export const survivalExtended15 = {
  id: "surv_ext_15",
  titre: "Évidence de la Pensée XV",
  questions: [
    { type: "qcm", question: "Quel philosophe a écrit 'La République' ?", options: ["Aristote", "Platon", "Socrate"], answer: "Platon" },
    { type: "vrai_faux", question: "Le QR Code est un code-barres en deux dimensions.", answer: true },
    { type: "qcm", question: "Qu'est-ce que le capital fixe ?", options: ["L'argent en caisse", "Les stocks", "Les équipements durables (machines)"], answer: "Les équipements durables (machines)" },
    { type: "vrai_faux", question: "La fibre optique transmet les données par impulsions lumineuses.", answer: true },
    { type: "qcm", question: "Qui est le philosophe de l'humour et de l'ironie ?", options: ["Kierkegaard", "Bergson", "Socrate"], answer: "Socrate" },
    { type: "vrai_faux", question: "Un député est élu pour 5 ans.", answer: true },
    { type: "qcm", question: "Qu'est-ce que la demande globale ?", options: ["Achats d'un pays", "Ventes d'un pays", "Stocks d'un pays"], answer: "Achats d'un pays" },
    { type: "vrai_faux", question: "Le spamming est l'envoi massif de messages non sollicités.", answer: true },
    { type: "qcm", question: "Quel philosophe a théorisé la 'mort de Dieu' ?", options: ["Marx", "Nietzsche", "Freud"], answer: "Nietzsche" },
    { type: "vrai_faux", question: "Une clé USB utilise une mémoire flash.", answer: true },
    { type: "qcm", question: "Quelle institution siège à Strasbourg ?", options: ["Le Parlement Européen", "La Cour de Justice", "La Commission"], answer: "Le Parlement Européen" },
    { type: "vrai_faux", question: "Le droit de vote des femmes en France date de 1944.", answer: true },
    { type: "qcm", question: "Quel est le nom du système d'exploitation de Google ?", options: ["iOS", "Android", "Windows"], answer: "Android" },
    { type: "vrai_faux", question: "Le SMIC est le salaire minimum interprofessionnel de croissance.", answer: true },
    { type: "qcm", question: "Qui est le philosophe du 'rire' ?", options: ["Bergson", "Arendt", "Foucault"], answer: "Bergson" },
    { type: "vrai_faux", question: "L'informatique quantique utilise des bits classiques.", answer: false },
    { type: "qcm", question: "Quel est le texte fondateur des droits de l'homme en France ?", options: ["Code Civil", "DDHC de 1789", "Charte de l'environnement"], answer: "DDHC de 1789" },
    { type: "vrai_faux", question: "Une entreprise publique appartient à l'État.", answer: true },
    { type: "qcm", question: "Que signifie 'RAM' ?", options: ["Random Access Memory", "Read Access Memory", "Rapid Action Memory"], answer: "Random Access Memory" },
    { type: "vrai_faux", question: "Kant a vécu tout sa vie à Königsberg.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
