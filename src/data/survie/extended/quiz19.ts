export const survivalExtended19 = {
  id: "surv_ext_19",
  titre: "L'Arène Finale XIX",
  questions: [
    { type: "qcm", question: "Qui est le philosophe du 'Surmâle' ?", options: ["Nietzsche", "Jarry", "Sartre"], answer: "Nietzsche" },
    { type: "vrai_faux", question: "Le GPU est principalement utilisé pour les calculs graphiques.", answer: true },
    { type: "qcm", question: "Qu'est-ce que la demande de monnaie ?", options: ["Vouloir être riche", "Conserver de la liquidité", "Taper un code de CB"], answer: "Conserver de la liquidité" },
    { type: "vrai_faux", question: "Un hacker 'White Hat' est un pirate malveillant.", answer: false },
    { type: "qcm", question: "Qui a écrit 'Gorgias' ?", options: ["Platon", "Socrate", "Protagoras"], answer: "Platon" },
    { type: "vrai_faux", question: "Le Conseil Constitutionnel vérifie la conformité des lois à la Constitution.", answer: true },
    { type: "qcm", question: "Quelle courbe montre la relation entre chômage et inflation ?", options: ["Courbe de Laffer", "Courbe de Phillips", "Courbe de Lorentz"], answer: "Courbe de Phillips" },
    { type: "vrai_faux", question: "La cryptomonnaie est une monnaie physique.", answer: false },
    { type: "qcm", question: "Quel philosophe a théorisé la 'Banale mal' ?", options: ["Arendt", "Adorno", "Habermas"], answer: "Arendt" },
    { type: "vrai_faux", question: "Le mode avion désactive toutes les transmissions sans fil.", answer: true },
    { type: "qcm", question: "Quelle organisation s'occupe de l'enfance au sein de l'ONU ?", options: ["UNICEF", "UNESCO", "OMS"], answer: "UNICEF" },
    { type: "vrai_faux", question: "Un quinquennat dure 5 ans.", answer: true },
    { type: "qcm", question: "Quel est l'ancêtre d'Internet ?", options: ["Minitel", "Arpanet", "Intranet"], answer: "Arpanet" },
    { type: "vrai_faux", question: "Le dumping social est une concurrence déloyale via de faibles salaires.", answer: true },
    { type: "qcm", question: "Qui a dit 'On ne naît pas femme, on le devient' ?", options: ["Sartre", "Beauvoir", "Duras"], answer: "Beauvoir" },
    { type: "vrai_faux", question: "Un algorithme de tri permet d'ordonner des données.", answer: true },
    { type: "qcm", question: "Combien de départements y a-t-il en France ?", options: ["95", "101", "105"], answer: "101" },
    { type: "vrai_faux", question: "La balance commerciale compare exportations et importations.", answer: true },
    { type: "qcm", question: "Que signifie 'IoT' ?", options: ["Internet of Things", "Input Output Target", "Internal Office Technology"], answer: "Internet of Things" },
    { type: "vrai_faux", question: "Hegel a influencé Karl Marx.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
