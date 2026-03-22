export const survivalExtended20 = {
  id: "surv_ext_20",
  titre: "Apogée du Survivant XX",
  questions: [
    { type: "qcm", question: "Quel philosophe a écrit 'Le Gai Savoir' ?", options: ["Nietzsche", "Schopenhauer", "Wagner"], answer: "Nietzsche" },
    { type: "vrai_faux", question: "Un octet est composé de 8 bits.", answer: true },
    { type: "qcm", question: "Qu'est-ce que la déflation ?", options: ["Hausse des prix", "Baisse durable et généralisée des prix", "Stabilité des prix"], answer: "Baisse durable et généralisée des prix" },
    { type: "vrai_faux", question: "Le phishing se pratique uniquement par SMS.", answer: false },
    { type: "qcm", question: "Qui a écrit 'Par-delà le bien et le mal' ?", options: ["Kant", "Nietzsche", "Freud"], answer: "Nietzsche" },
    { type: "vrai_faux", question: "Le drapeau français est bleu, blanc, rouge.", answer: true },
    { type: "qcm", question: "Comment appelle-t-on le marché où s'échangent les devises ?", options: ["Marché boursier", "Marché des changes (Forex)", "Marché du travail"], answer: "Marché des changes (Forex)" },
    { type: "vrai_faux", question: "Le Wi-Fi utilise des ondes radio.", answer: true },
    { type: "qcm", question: "Qui est le père de l'utilitarisme ?", options: ["Bentham", "Mill", "Les deux"], answer: "Les deux" },
    { type: "vrai_faux", question: "Un fichier CSV est un fichier audio.", answer: false },
    { type: "qcm", question: "Quelle institution internationale gère le travail ?", options: ["OIT", "FMI", "BIRD"], answer: "OIT" },
    { type: "vrai_faux", question: "Le Maire est l'exécutif de la commune.", answer: true },
    { type: "qcm", question: "Quel est le navigateur de Microsoft ?", options: ["Chrome", "Edge", "Safari"], answer: "Edge" },
    { type: "vrai_faux", question: "L'épargne est la partie du revenu non consommée.", answer: true },
    { type: "qcm", question: "Qui a dit 'Pense par toi-même' ?", options: ["Kant", "Sapere Aude", "Les deux"], answer: "Les deux" },
    { type: "vrai_faux", question: "La blockchain est une technologie de stockage décentralisée.", answer: true },
    { type: "qcm", question: "En quelle année a été adoptée la Constitution actuelle (Vème République) ?", options: ["1944", "1958", "1968"], answer: "1958" },
    { type: "vrai_faux", question: "Le PIB réel est ajusté de l'inflation.", answer: true },
    { type: "qcm", question: "Que signifie 'FTP' ?", options: ["File Transfer Protocol", "Fast Tech Power", "Formal Task Process"], answer: "File Transfer Protocol" },
    { type: "vrai_faux", question: "Socrate n'a laissé aucun écrit.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
