export const survivalQuizzes = [
  ...Array.from({ length: 30 }, (_, i) => ({
    id: `survival_${i + 1}`,
    titre: i === 0 ? "L'Éveil du Survivant" : `Le Défi des Savants #${i + 1}`,
    questions: [
      // Mixing subjects: Math, Histoire, Géo, SVT, Anglais, Français, Culture G
      { type: "qcm", question: "Quelle est la capitale de l'Espagne ?", options: ["Madrid", "Barcelone", "Séville"], answer: "Madrid" },
      { type: "vrai_faux", question: "L'Everest est le plus haut sommet du monde.", answer: true },
      { type: "qcm", question: "Combien font 9 x 7 ?", options: ["61", "63", "65"], answer: "63" },
      { type: "vrai_faux", question: "Le soleil est une étoile.", answer: true },
      { type: "qcm", question: "Qui a peint la Joconde ?", options: ["Picasso", "Léonard de Vinci", "Monet"], answer: "Léonard de Vinci" },
      { type: "vrai_faux", question: "L'eau bout à 90°C.", answer: false },
      { type: "qcm", question: "Quelle est la capitale de l'Australie ?", options: ["Sydney", "Canberra", "Melbourne"], answer: "Canberra" },
      { type: "vrai_faux", question: "Molière était un écrivain français.", answer: true },
      { type: "qcm", question: "Quelle est la formule chimique de l'eau ?", options: ["CO2", "H2O", "O2"], answer: "H2O" },
      { type: "vrai_faux", question: "Le panda mange principalement de la viande.", answer: false },
      ...Array.from({ length: 90 }, (_, j) => ({
        id: `q_surv_${i + 1}_${j + 10}`,
        type: (i + j) % 2 === 0 ? "qcm" : "vrai_faux",
        question: [
          "Quelle planète est la plus proche du soleil ?",
          "Combien de continents y a-t-il ?",
          "Quel est le plus grand océan ?",
          "Qui a écrit 'Les Misérables' ?",
          "Comment dit-on 'Rouge' en anglais ?",
          "Quel est le plus grand pays du monde ?",
          "Combien de secondes y a-t-il dans une minute ?",
          "Quel est l'élément chimique 'O' ?",
          "Quelle est la capitale du Canada ?",
          "Qui a découvert l'Amérique en 1492 ?"
        ][j % 10],
        options: ["Vénus", "Mercure", "Mars", "Jupiter", "7", "5", "6", "Pacifique", "Atlantique", "Hugo", "Zola", "Red", "Blue", "Russie", "Chine", "60", "30", "Oxygène", "Or", "Ottawa", "Toronto", "Christophe Colomb", "Magellan"][Math.floor(j/2) % 10] ? [
          ["Vénus", "Mercure", "Mars"],
          ["5", "6", "7"],
          ["Pacifique", "Atlantique", "Indien"],
          ["Hugo", "Zola", "Flaubert"],
          ["Red", "Blue", "Green"],
          ["Russie", "Chine", "USA"],
          ["60", "30", "120"],
          ["Oxygène", "Or", "Hydrogène"],
          ["Ottawa", "Toronto", "Montreal"],
          ["Christophe Colomb", "Magellan", "Vasco de Gama"]
        ][j % 10] : undefined,
        answer: [
          "Mercure",
          "7",
          "Pacifique",
          "Hugo",
          "Red",
          "Russie",
          "60",
          "Oxygène",
          "Ottawa",
          "Christophe Colomb",
          true,
          false,
          true,
          true,
          false
        ][(i + j) % 2 === 0 ? j % 10 : (j % 5) + 10]
      }))
    ]
  }))
];
