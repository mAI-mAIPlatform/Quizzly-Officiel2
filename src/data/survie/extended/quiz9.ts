export const survivalExtended9 = {
  id: "surv_ext_9",
  titre: "Sphère de la Connaissance IX",
  questions: [
    { type: "qcm", question: "Quelle est la capitale de la Norvège ?", options: ["Oslo", "Bergen", "Trondheim"], answer: "Oslo" },
    { type: "vrai_faux", question: "Les autruches cachent leur tête dans le sable quand elles ont peur.", answer: false },
    { type: "qcm", question: "Qui a écrit 'L'Île au Trésor' ?", options: ["Stevenson", "Verne", "Defoe"], answer: "Stevenson" },
    { type: "vrai_faux", question: "Le son ne peut pas se propager dans le vide.", answer: true },
    { type: "qcm", question: "Quel est l'élément chimique de symbole 'Hg' ?", options: ["Hydrogène", "Mercure", "Hélium"], answer: "Mercure" },
    { type: "vrai_faux", question: "La muraille de Chine servait à se protéger des Mongols.", answer: true },
    { type: "qcm", question: "Combien d'os compose le squelette humain adulte ?", options: ["106", "206", "306"], answer: "206" },
    { type: "vrai_faux", question: "L'œil de l'autruche est plus gros que son cerveau.", answer: true },
    { type: "qcm", question: "Quel est le plus grand mammifère terrestre actuel ?", options: ["Le mammouth", "L'éléphant d'Afrique", "Le rhinocéros blanc"], answer: "L'éléphant d'Afrique" },
    { type: "vrai_faux", question: "Neil Armstrong a été le premier homme sur la Lune.", answer: true },
    { type: "qcm", question: "Qui est l'auteur de 'Guerre et Paix' ?", options: ["Tolstoï", "Dostoïevski", "Tchekhov"], answer: "Tolstoï" },
    { type: "vrai_faux", question: "Le scarabée bousier se dirige grâce à la Voie lactée.", answer: true },
    { type: "qcm", question: "Quelle est la capitale de l'Inde ?", options: ["Bombay", "Calcutta", "New Delhi"], answer: "New Delhi" },
    { type: "vrai_faux", question: "Le kiwi (fruit) est originaire de Nouvelle-Zélande.", answer: false },
    { type: "qcm", question: "Quelle est la vitesse du son dans l'air (env.) ?", options: ["340 m/s", "1000 m/s", "300 000 km/s"], answer: "340 m/s" },
    { type: "vrai_faux", question: "L'Antarctique est un désert.", answer: true },
    { type: "qcm", question: "Quel pays possède le plus d'îles au monde ?", options: ["Indonésie", "Philippines", "Suède"], answer: "Suède" },
    { type: "vrai_faux", question: "L'eau occupe environ 71% de la surface terrestre.", answer: true },
    { type: "qcm", question: "Qui a peint 'Les Nymphéas' ?", options: ["Manet", "Monet", "Renoir"], answer: "Monet" },
    { type: "vrai_faux", question: "Un pentagone possède 5 sommets.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
