export const survivalExtended17 = {
  id: "surv_ext_17",
  titre: "Énigmes de l'Humanité XVII",
  questions: [
    { type: "qcm", question: "Qui est le philosophe de la 'Critique de la raison pure' ?", options: ["Hume", "Kant", "Locke"], answer: "Kant" },
    { type: "vrai_faux", question: "Le langage Python est souvent utilisé pour l'IA.", answer: true },
    { type: "qcm", question: "Qu'est-ce qu'une banque de second rang ?", options: ["La Banque Centrale", "Une banque commerciale", "Une banque fermée"], answer: "Une banque commerciale" },
    { type: "vrai_faux", question: "Un pare-feu est un composant physique obligatoire.", answer: false },
    { type: "qcm", question: "Quel philosophe a écrit 'Le Prince' ?", options: ["Machiavel", "Hobbes", "Bodid"], answer: "Machiavel" },
    { type: "vrai_faux", question: "La décentralisation donne plus de pouvoirs aux collectivités locales.", answer: true },
    { type: "qcm", question: "Quelle est l'unité de mesure de la croissance ?", options: ["Taux de natalité", "Taux de variation du PIB", "Taux de change"], answer: "Taux de variation du PIB" },
    { type: "vrai_faux", question: "Le darknet est accessible via un navigateur classique.", answer: false },
    { type: "qcm", question: "Quel philosophe a fondé le Lycée ?", options: ["Platon", "Aristote", "Socrate"], answer: "Aristote" },
    { type: "vrai_faux", question: "La RAM s'efface quand on éteint l'ordinateur.", answer: true },
    { type: "qcm", question: "Quelle institution internationale gère la santé mondiale ?", options: ["UNICEF", "OMS", "UNESCO"], answer: "OMS" },
    { type: "vrai_faux", question: "Le droit de grève est inscrit dans la Constitution.", answer: true },
    { type: "qcm", question: "Quel est le format d'image le plus courant sur le web ?", options: ["MP3", "JPEG", "DOCX"], answer: "JPEG" },
    { type: "vrai_faux", question: "La consommation est l'utilisation de biens et services.", answer: true },
    { type: "qcm", question: "Qui a dit 'Tout ce que je sais, c'est que je ne sais rien' ?", options: ["Aristote", "Platon", "Socrate"], answer: "Socrate" },
    { type: "vrai_faux", question: "Un virus informatique peut se dupliquer.", answer: true },
    { type: "qcm", question: "Qui est le chef des armées en France ?", options: ["Le Premier Ministre", "Le Président de la République", "Le Ministre de la Défense"], answer: "Le Président de la République" },
    { type: "vrai_faux", question: "L'offre globale est la production totale d'un pays.", answer: true },
    { type: "qcm", question: "Que signifie 'DNS' ?", options: ["Domain Name System", "Digital Network Security", "Data Node Storage"], answer: "Domain Name System" },
    { type: "vrai_faux", question: "Spinoza était un philosophe moniste.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
