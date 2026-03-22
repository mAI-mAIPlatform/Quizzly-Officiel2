export const survivalExtended16 = {
  id: "surv_ext_16",
  titre: "Élite de la Connaissance XVI",
  questions: [
    { type: "qcm", question: "Qui est le philosophe du 'Léviathan' ?", options: ["Locke", "Hobbes", "Rousseau"], answer: "Hobbes" },
    { type: "vrai_faux", question: "Un serveur informatique répond aux requêtes des clients.", answer: true },
    { type: "qcm", question: "En économie, qu'est-ce qu'un oligopole ?", options: ["Un seul vendeur", "Un petit nombre de vendeurs", "Une multitude de vendeurs"], answer: "Un petit nombre de vendeurs" },
    { type: "vrai_faux", question: "Le Bluetooth fonctionne sur de très longues distances.", answer: false },
    { type: "qcm", question: "Quel auteur a écrit 'Le Deuxième Sexe' ?", options: ["Sartre", "Beauvoir", "Duras"], answer: "Beauvoir" },
    { type: "vrai_faux", question: "L'Assemblée nationale siège au Palais Bourbon.", answer: true },
    { type: "qcm", question: "Quelle est la science des richesses ?", options: ["Sociologie", "Économie", "Anthropologie"], answer: "Économie" },
    { type: "vrai_faux", question: "Le chiffrement rend les données illisibles sans clé.", answer: true },
    { type: "qcm", question: "Quel philosophe prône l'ataraxie (absence de trouble) ?", options: ["Épicure", "Épictète", "Les deux"], answer: "Les deux" },
    { type: "vrai_faux", question: "Le noyau Linux est la base d'Android.", answer: true },
    { type: "qcm", question: "Quelle institution monétaire mondiale prête aux pays en crise ?", options: ["BCE", "FMI", "OMC"], answer: "FMI" },
    { type: "vrai_faux", question: "La liberté d'expression est une liberté fondamentale.", answer: true },
    { type: "qcm", question: "Comment appelle-t-on le piratage via email ?", options: ["Hacking", "Phishing", "Spamming"], answer: "Phishing" },
    { type: "vrai_faux", question: "Le profit est la différence entre chiffre d'affaires et coûts.", answer: true },
    { type: "qcm", question: "Qui a dit 'Dieu est mort' ?", options: ["Marx", "Nietzsche", "Hegel"], answer: "Nietzsche" },
    { type: "vrai_faux", question: "Une base de données permet de stocker des informations structurées.", answer: true },
    { type: "qcm", question: "Quel est le rôle du Préfet ?", options: ["Voter les lois", "Représenter l'État dans le département", "Gérer une mairie"], answer: "Représenter l'État dans le département" },
    { type: "vrai_faux", question: "La croissance économique est l'augmentation du PIB.", answer: true },
    { type: "qcm", question: "Que signifie 'CPU' ?", options: ["Central Processing Unit", "Control Power User", "Computer Process Unit"], answer: "Central Processing Unit" },
    { type: "vrai_faux", question: "Schopenhauer était un philosophe optimiste.", answer: false },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
