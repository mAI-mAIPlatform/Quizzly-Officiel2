export const survivalExtended2 = {
  id: "surv_ext_2",
  titre: "L'Odyssée du Savoir II",
  questions: [
    { type: "qcm", question: "Quel est l'élément chimique de symbole 'Au' ?", options: ["Argent", "Or", "Aluminium"], answer: "Or" },
    { type: "vrai_faux", question: "L'Amazonie est la plus grande forêt tropicale.", answer: true },
    { type: "qcm", question: "Quel est le plus long fleuve du monde ?", options: ["Nil", "Amazone", "Mississipi"], answer: "Amazone" },
    { type: "vrai_faux", question: "Le cerveau humain consomme environ 20% de l'énergie du corps.", answer: true },
    { type: "qcm", question: "Qui a écrit 'Madame Bovary' ?", options: ["Balzac", "Flaubert", "Maupassant"], answer: "Flaubert" },
    { type: "vrai_faux", question: "La Joconde n'a pas de sourcils.", answer: true },
    { type: "qcm", question: "Quelle est la vitesse de la lumière (env.) ?", options: ["300 000 km/s", "150 000 km/s", "1 000 000 km/s"], answer: "300 000 km/s" },
    { type: "vrai_faux", question: "L'Australie est un continent.", answer: true },
    { type: "qcm", question: "Qui a découvert la pénicilline ?", options: ["Fleming", "Pasteur", "Curie"], answer: "Fleming" },
    { type: "vrai_faux", question: "Le soleil est une géante rouge.", answer: false },
    { type: "qcm", question: "Quel est le pluriel de 'festival' ?", options: ["Festivaux", "Festivals", "Festivales"], answer: "Festivals" },
    { type: "vrai_faux", question: "1 kopeck est une monnaie russe.", answer: true },
    { type: "qcm", question: "Quel est l'os le plus long du corps humain ?", options: ["Tibia", "Fémur", "Humérus"], answer: "Fémur" },
    { type: "vrai_faux", question: "La Statue de la Liberté a été offerte par la France.", answer: true },
    { type: "qcm", question: "Quelle est la capitale de l'Australie ?", options: ["Sydney", "Melbourne", "Canberra"], answer: "Canberra" },
    { type: "vrai_faux", question: "Venus est la planète la plus chaude du système solaire.", answer: true },
    { type: "qcm", question: "Quel instrument joue Mozart ?", options: ["Violon", "Piano", "Flûte"], answer: "Piano" },
    { type: "vrai_faux", question: "L'araignée est un insecte.", answer: false },
    { type: "qcm", question: "Combien y a-t-il de fuseaux horaires sur Terre ?", options: ["12", "24", "48"], answer: "24" },
    { type: "vrai_faux", question: "Barack Obama était le 44ème président des USA.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
