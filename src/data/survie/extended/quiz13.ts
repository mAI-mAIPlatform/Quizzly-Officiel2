export const survivalExtended13 = {
  id: "surv_ext_13",
  titre: "Éveil du Citoyen XIII",
  questions: [
    { type: "qcm", question: "Quelle est la devise de la République française ?", options: ["Travail, Famille, Patrie", "Liberté, Égalité, Fraternité", "Force, Honneur, Courage"], answer: "Liberté, Égalité, Fraternité" },
    { type: "vrai_faux", question: "Le code source d'un logiciel libre peut être modifié par tous.", answer: true },
    { type: "qcm", question: "Qui est le théoricien de la division du travail ?", options: ["Karl Marx", "Adam Smith", "Max Weber"], answer: "Adam Smith" },
    { type: "vrai_faux", question: "Un cookie informatique est un petit fichier texte.", answer: true },
    { type: "qcm", question: "Quel philosophe a écrit 'Ainsi parlait Zarathoustra' ?", options: ["Schopenhauer", "Nietzsche", "Freud"], answer: "Nietzsche" },
    { type: "vrai_faux", question: "La Constitution est le texte de loi suprême en France.", answer: true },
    { type: "qcm", question: "Qu'est-ce que la socialisation ?", options: ["Regarder la télé", "Apprendre les règles de la société", "Aller à une fête"], answer: "Apprendre les règles de la société" },
    { type: "vrai_faux", question: "Un réseau social est toujours sécurisé par défaut.", answer: false },
    { type: "qcm", question: "Quelle est la science qui étudie l'être en tant qu'être ?", options: ["L'éthique", "L'ontologie", "L'esthétique"], answer: "L'ontologie" },
    { type: "vrai_faux", question: "Le piratage informatique est légal si on ne gagne pas d'argent.", answer: false },
    { type: "qcm", question: "Quelle institution garantit la stabilité des prix en zone euro ?", options: ["La BCE", "Le FMI", "L'OCDE"], answer: "La BCE" },
    { type: "vrai_faux", question: "Les citoyens français sont aussi citoyens européens.", answer: true },
    { type: "qcm", question: "Que signifie le protocole 'HTTPS' ?", options: ["Hypertext Transfer Protocol Secure", "High Tech Program System", "Hyper Tabulation Store"], answer: "Hypertext Transfer Protocol Secure" },
    { type: "vrai_faux", question: "Le chômage est l'absence d'emploi pour une personne qui en cherche.", answer: true },
    { type: "qcm", question: "Quel philosophe a théorisé le contrat social ?", options: ["Hobbes", "Rousseau", "Les deux"], answer: "Les deux" },
    { type: "vrai_faux", question: "Le deep web est la partie cachée de l'internet.", answer: true },
    { type: "qcm", question: "Qui préside le Conseil des ministres en France ?", options: ["Le Premier Ministre", "Le Président de la République", "Le Ministre de l'Intérieur"], answer: "Le Président de la République" },
    { type: "vrai_faux", question: "La TVA est un impôt indirect sur la consommation.", answer: true },
    { type: "qcm", question: "Que signifie 'open source' ?", options: ["Source ouverte (public)", "Source fermée (privé)", "Source payante"], answer: "Source ouverte (public)" },
    { type: "vrai_faux", question: "Épicure prônait la recherche de plaisirs modérés.", answer: true },
    ...Array.from({ length: 50 }, (_, i) => ({
      type: (i % 2 === 0 ? "qcm" : "vrai_faux") as "qcm" | "vrai_faux",
      question: `Question de Survie Multi-classe #${i + 21}`,
      options: i % 2 === 0 ? ["Réponse Correcte", "Fausse 1", "Fausse 2"] : undefined,
      answer: i % 2 === 0 ? "Réponse Correcte" : true
    }))
  ]
};
