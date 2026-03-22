export const survivalExtended6 = {
  id: "surv_ext_6",
  titre: "Explorateur des Savoirs VI",
  questions: [
    { type: "qcm", question: "Qui a écrit 'Les Tragiques' ?", options: ["Ronsard", "Agrippa d'Aubigné", "Du Bellay"], answer: "Agrippa d'Aubigné" },
    { type: "vrai_faux", question: "Le plexus solaire est situé au milieu du dos.", answer: false },
    { type: "qcm", question: "Quel est le plus grand lac naturel du monde ?", options: ["Lac Supérieur", "Mer Caspienne", "Lac Baïkal"], answer: "Mer Caspienne" },
    { type: "vrai_faux", question: "L'araignée possède 8 yeux dans la plupart des cas.", answer: true },
    { type: "qcm", question: "Qui est l'auteur du tableau 'La Liberté guidant le peuple' ?", options: ["David", "Géricault", "Delacroix"], answer: "Delacroix" },
    { type: "vrai_faux", question: "Le vide est un isolant thermique parfait.", answer: true },
    { type: "qcm", question: "Quel est l'organe du corps humain le plus lourd ?", options: ["Le cerveau", "Le foie", "La peau"], answer: "La peau" },
    { type: "vrai_faux", question: "Un triangle rectangle possède un angle de 90°.", answer: true },
    { type: "qcm", question: "Quelle est la capitale du Vietnam ?", options: ["Hô-Chi-Minh-Ville", "Hanoï", "Huê"], answer: "Hanoï" },
    { type: "vrai_faux", question: "'Parce que' s'écrit toujours en deux mots.", answer: true },
    { type: "qcm", question: "Qui a découvert les rayons X ?", options: ["Röntgen", "Becquerel", "Tesla"], answer: "Röntgen" },
    { type: "vrai_faux", question: "Le requin est un mammifère marin.", answer: false },
    { type: "qcm", question: "Quel est le résultat de 125 x 8 ?", options: ["800", "1000", "1200"], answer: "1000" },
    { type: "vrai_faux", question: "La sève brute monte des racines vers les feuilles.", answer: true },
    { type: "qcm", question: "Qui a écrit 'Le Malade imaginaire' ?", options: ["Racine", "Corneille", "Molière"], answer: "Molière" },
    { type: "vrai_faux", question: "Le potassium a pour symbole chimique 'P'.", answer: false },
    { type: "qcm", question: "Quelle est la capitale de la Pologne ?", options: ["Cracovie", "Varsovie", "Gdansk"], answer: "Varsovie" },
    { type: "vrai_faux", question: "Les dinosaures et les humains ont cohabité.", answer: false },
    { type: "qcm", question: "Quel est le plus grand pays du monde par sa superficie ?", options: ["Canada", "Chine", "Russie"], answer: "Russie" },
    { type: "vrai_faux", question: "Un son pur est composé d'une seule fréquence sonore.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
