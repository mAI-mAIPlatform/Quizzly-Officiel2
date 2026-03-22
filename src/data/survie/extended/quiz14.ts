export const survivalExtended14 = {
  id: "surv_ext_14",
  titre: "Bastion Numérique XIV",
  questions: [
    { type: "qcm", question: "Quel philosophe a analysé la fin de l'histoire ?", options: ["Marx", "Hegel", "Fukuyama"], answer: "Hegel" },
    { type: "vrai_faux", question: "Le RGPD protège les données personnelles des citoyens européens.", answer: true },
    { type: "qcm", question: "En économie, qu'est-ce que la valeur ajoutée ?", options: ["Le prix de vente", "Richesse créée par une entreprise", "Le profit net"], answer: "Richesse créée par une entreprise" },
    { type: "vrai_faux", question: "L'adresse MAC identifie un matériel réseau de façon unique.", answer: true },
    { type: "qcm", question: "Qui est l'auteur de 'L'Existentialisme est un humanisme' ?", options: ["Sartre", "Heidegger", "Merleau-Ponty"], answer: "Sartre" },
    { type: "vrai_faux", question: "Le Sénat examine et vote les lois.", answer: true },
    { type: "qcm", question: "Qu'est-ce qu'un monopole ?", options: ["Plusieurs vendeurs", "Un seul vendeur", "Un seul acheteur"], answer: "Un seul vendeur" },
    { type: "vrai_faux", question: "Le phishing est une technique de vol d'identifiants.", answer: true },
    { type: "qcm", question: "Quel philosophe a écrit 'Le Phédon' ?", options: ["Platon", "Plotin", "Porphyre"], answer: "Platon" },
    { type: "vrai_faux", question: "Le pare-feu bloque les connexions non autorisées.", answer: true },
    { type: "qcm", question: "Quelle organisation gère le commerce mondial ?", options: ["OMC", "OMS", "OIT"], answer: "OMC" },
    { type: "vrai_faux", question: "Une loi doit être promulguée pour être applicable.", answer: true },
    { type: "qcm", question: "Quel est le cerveau de l'ordinateur ?", options: ["GPU", "CPU", "RAM"], answer: "CPU" },
    { type: "vrai_faux", question: "L'externalité est un effet d'une action sur un tiers sans compensation.", answer: true },
    { type: "qcm", question: "Qui est le philosophe de la volonté de puissance ?", options: ["Schopenhauer", "Nietzsche", "Wagner"], answer: "Nietzsche" },
    { type: "vrai_faux", question: "Le malware est un logiciel malveillant.", answer: true },
    { type: "qcm", question: "Qui nomme le Premier Ministre en France ?", options: ["Le Peuple", "Le Président de la République", "L'Assemblée Nationale"], answer: "Le Président de la République" },
    { type: "vrai_faux", question: "Le déficit budgétaire est quand les dépenses dépassent les recettes.", answer: true },
    { type: "qcm", question: "Que signifie 'URL' ?", options: ["Uniform Resource Locator", "Universal Road Link", "United Radio Line"], answer: "Uniform Resource Locator" },
    { type: "vrai_faux", question: "Pascal a dit : 'Le cœur a ses raisons que la raison ne connaît point'.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
