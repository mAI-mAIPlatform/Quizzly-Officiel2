import { Quiz } from "@/types/quiz";

export const quiz987: Quiz = {
  id: "987",
  titre: "Mythologie : Apollon et Artémis ☀️🌙",
  description: "Découvrez les jumeaux de l'Olympe : le dieu du soleil et la déesse de la lune.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "De quoi Apollon est-il le dieu principal ?",
      options: ["De la mer", "Du soleil, de la lumière et des arts", "De la guerre", "Des Enfers"],
      reponse: "Du soleil, de la lumière et des arts",
      explication: "Il conduit chaque jour le char du soleil à travers le ciel."
    },
    {
      id: "2",
      type: "qcm",
      question: "De quoi sa sœur jumelle Artémis est-elle la déesse ?",
      options: ["De l'amour", "De la lune, de la chasse et de la nature", "De la sagesse", "De la discorde"],
      reponse: "De la lune, de la chasse et de la nature",
      explication: "Elle est souvent représentée avec un arc et une biche."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Apollon et Artémis sont les enfants de Zeus et Léto.",
      reponse: "Vrai",
      explication: "Léto a dû fuir la jalousie d'Héra pour pouvoir les mettre au monde sur l'île de Délos."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel instrument de musique à cordes est le symbole d'Apollon ?",
      reponse: "Lyre",
      explication: "Il est le protecteur des musiciens et des poètes (les Muses)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle arme utilisent aussi bien Apollon qu'Artémis ?",
      options: ["Le trident", "L'arc et les flèches", "L'épée", "La hache"],
      reponse: "L'arc et les flèches",
      explication: "Ils sont tous deux d'excellents archers."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Apollon a tué un serpent monstrueux nommé Python à Delphes.",
      reponse: "Vrai",
      explication: "C'est là qu'il a installé son célèbre oracle."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel animal sauvage accompagne souvent la déesse Artémis ?",
      options: ["Un lion", "Une biche (ou un cerf)", "Un aigle", "Un dauphin"],
      reponse: "Une biche (ou un cerf)",
      explication: "Elle est la maîtresse des animaux sauvages."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le groupe de neuf déesses des arts protégées par Apollon ?",
      reponse: "Muses",
      explication: "Il y a une muse pour la musique, la poésie, l'histoire, la danse, etc."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel temple antique magnifique situé à Éphèse était dédié à Artémis (une des 7 merveilles du monde) ?",
      options: ["Le Parthénon", "L'Artémision", "Le Temple de Zeus", "La pyramide"],
      reponse: "L'Artémision",
      explication: "C'était un temple immense soutenu par 127 colonnes."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Apollon et Artémis détestaient les humains et ne les aidaient jamais.",
      reponse: "Faux",
      explication: "Ils intervenaient souvent pour protéger leurs favoris ou punir ceux qui les insultaient."
    }
  ]
};
