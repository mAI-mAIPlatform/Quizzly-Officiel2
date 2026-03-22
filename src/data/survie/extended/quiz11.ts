export const survivalExtended11 = {
  id: "surv_ext_11",
  titre: "Labyrinthe du Savoir XI",
  questions: [
    { type: "qcm", question: "Qui est le 'père de la philosophie moderne' ?", options: ["Kant", "Descartes", "Spinoza"], answer: "Descartes" },
    { type: "vrai_faux", question: "La 'SNT' signifie Sciences Numériques et Technologie.", answer: true },
    { type: "qcm", question: "Quel est le principal indicateur de la richesse d'un pays ?", options: ["IDH", "PIB", "IPC"], answer: "PIB" },
    { type: "vrai_faux", question: "Le 'cloud computing' stocke les données localement sur votre disque dur.", answer: false },
    { type: "qcm", question: "Qui a écrit 'Le Prince' ?", options: ["Machiavel", "Hobbes", "Locke"], answer: "Machiavel" },
    { type: "vrai_faux", question: "L'EMC signifie Enseignement Moral et Civique.", answer: true },
    { type: "qcm", question: "En SES, que signifie 'offre' ?", options: ["Demande des clients", "Quantité proposée par les vendeurs", "Prix d'un produit"], answer: "Quantité proposée par les vendeurs" },
    { type: "vrai_faux", question: "Un pixel est la plus petite unité d'une image numérique.", answer: true },
    { type: "qcm", question: "Quel philosophe a écrit 'Le Banquet' ?", options: ["Aristote", "Platon", "Socrate"], answer: "Platon" },
    { type: "vrai_faux", question: "La cybersécurité vise à protéger les systèmes informatiques.", answer: true },
    { type: "qcm", question: "Qu'est-ce qu'une banque centrale ?", options: ["Une banque commerciale", "Une institution qui gère la monnaie", "Un distributeur de billets"], answer: "Une institution qui gère la monnaie" },
    { type: "vrai_faux", question: "Le suffrage universel permet à tous les citoyens de voter.", answer: true },
    { type: "qcm", question: "Quel est le langage de programmation le plus utilisé pour le Web ?", options: ["Python", "JavaScript", "C++"], answer: "JavaScript" },
    { type: "vrai_faux", question: "La parité monétaire compare la valeur de deux monnaies.", answer: true },
    { type: "qcm", question: "Qui a conceptualisé l'allégorie de la caverne ?", options: ["Platon", "Sénèque", "Épicure"], answer: "Platon" },
    { type: "vrai_faux", question: "Le HTML est un langage de programmation.", answer: false },
    { type: "qcm", question: "Quelle institution vote les lois en France ?", options: ["Le Gouvernement", "Le Parlement", "Le Conseil Constitutionnel"], answer: "Le Parlement" },
    { type: "vrai_faux", question: "L'inflation correspond à une baisse généralisée des prix.", answer: false },
    { type: "qcm", question: "Que signifie l'acronyme IP dans 'adresse IP' ?", options: ["Internet Protocol", "Internal Process", "Identity Provider"], answer: "Internet Protocol" },
    { type: "vrai_faux", question: "Le cogito 'Je pense donc je suis' est de Pascal.", answer: false },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
