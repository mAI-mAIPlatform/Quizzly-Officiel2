export const survivalExtended12 = {
  id: "surv_ext_12",
  titre: "Échos de la Raison XII",
  questions: [
    { type: "qcm", question: "Quel philosophe a parlé de l'impératif catégorique ?", options: ["Nietzsche", "Kant", "Hegel"], answer: "Kant" },
    { type: "vrai_faux", question: "Le binaire utilise uniquement les chiffres 0 et 1.", answer: true },
    { type: "qcm", question: "Que mesure le coefficient de Gini ?", options: ["La croissance", "L'inflation", "Les inégalités"], answer: "Les inégalités" },
    { type: "vrai_faux", question: "Un algorithme est une suite d'instructions.", answer: true },
    { type: "qcm", question: "Qui est l'auteur de 'L'Esprit des lois' ?", options: ["Rousseau", "Voltaire", "Montesquieu"], answer: "Montesquieu" },
    { type: "vrai_faux", question: "La laïcité garantit la neutralité de l'État envers les religions.", answer: true },
    { type: "qcm", question: "En économie, qu'est-ce que le capital humain ?", options: ["L'argent investi", "Le savoir et les compétences des individus", "Les machines"], answer: "Le savoir et les compétences des individus" },
    { type: "vrai_faux", question: "Le Wi-Fi utilise des câbles pour transmettre des données.", answer: false },
    { type: "qcm", question: "Quel est le but premier de la philosophie selon Aristote ?", options: ["Gagner de l'argent", "La recherche de la sagesse", "Contrôler la cité"], answer: "La recherche de la sagesse" },
    { type: "vrai_faux", question: "Le Big Data désigne le traitement de volumes massifs de données.", answer: true },
    { type: "qcm", question: "Que signifie le sigle ONU ?", options: ["Organisation des Nations Unies", "Office National Unique", "Ordre Normal Uniforme"], answer: "Organisation des Nations Unies" },
    { type: "vrai_faux", question: "La délation est un acte citoyen encouragé.", answer: false },
    { type: "qcm", question: "Quel est le composant principal d'un ordinateur ?", options: ["Le disque dur", "Le processeur", "L'écran"], answer: "Le processeur" },
    { type: "vrai_faux", question: "Une action est un titre de propriété d'une entreprise.", answer: true },
    { type: "qcm", question: "Qui a dit 'L'enfer, c'est les autres' ?", options: ["Camus", "Sartre", "Beauvoir"], answer: "Sartre" },
    { type: "vrai_faux", question: "L'intelligence artificielle peut ressentir des émotions réelles comme l'humain.", answer: false },
    { type: "qcm", question: "Quel est le rôle du Conseil municipal ?", options: ["Gérer les affaires de la commune", "Voter le budget de l'État", "Nommer les préfets"], answer: "Gérer les affaires de la commune" },
    { type: "vrai_faux", question: "La productivité mesure l'efficacité de la production.", answer: true },
    { type: "qcm", question: "Que signifie l'extension '.org' dans un nom de domaine ?", options: ["Organisation", "Original", "Orange"], answer: "Organisation" },
    { type: "vrai_faux", question: "Platon était l'élève de Socrate.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
