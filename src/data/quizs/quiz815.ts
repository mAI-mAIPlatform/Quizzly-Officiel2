import { Quiz } from "@/types/quiz";

export const quiz815: Quiz = {
  id: "815",
  titre: "Écologie : Le Recyclage et le Tri ♻️",
  description: "Apprenez à donner une seconde vie à vos objets et à moins polluer.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le logo avec trois flèches qui forment un triangle ?",
      options: ["Attention danger", "C'est un objet recyclable", "C'est fragile", "C'est lourd"],
      reponse: "C'est un objet recyclable",
      explication: "On l'appelle le ruban de Möbius."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans quelle poubelle (souvent jaune) doit-on jeter les emballages en carton et le plastique ?",
      options: ["La poubelle des déchets verts", "La poubelle de tri sélectif", "Le composteur", "Dans la rue"],
      reponse: "La poubelle de tri sélectif",
      explication: "Vérifie bien les consignes de ta ville !"
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le verre peut être recyclé à l'infini.",
      reponse: "Vrai",
      explication: "On le casse, on le fond et on refait de nouvelles bouteilles sans perte de qualité."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le fait de transformer des restes alimentaires en engrais naturel ?",
      reponse: "Compostage",
      explication: "Ou 'faire du compost'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Pourquoi est-il important de ne pas jeter de piles dans la poubelle ordinaire ?",
      options: ["Parce qu'elles peuvent exploser demain", "Parce qu'elles contiennent des produits toxiques (métaux lourds)", "Parce que c'est interdit de s'amuser avec", "Elles sont trop petites"],
      reponse: "Parce qu'elles contiennent des produits toxiques (métaux lourds)",
      explication: "Il faut les apporter dans des bacs de collecte spéciaux."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Tous les plastiques se recyclent très facilement.",
      reponse: "Faux",
      explication: "Seulement certains types de plastiques. Beaucoup finissent incinérés ou enfouis."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que veut dire 'Réutiliser' un objet ?",
      options: ["Le jeter tout de suite", "L'utiliser pour autre chose avant de le jeter (ex: un pot de confiture en pot à crayons)", "Le brûler", "Le vendre au prix fort"],
      reponse: "L'utiliser pour autre chose avant de le jeter (ex: un pot de confiture en pot à crayons)",
      explication: "C'est mieux que de recycler car ça ne demande pas d'énergie de transformation."
    },
    {
      id: "8",
      type: "courte",
      question: "Où doit-on apporter les vieux meubles ou les gros appareils électroménagers ?",
      reponse: "Déchetterie",
      explication: "C'est un centre de tri pour les gros objets."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que fabrique-t-on souvent avec des vieilles bouteilles en plastique recyclées ?",
      options: ["De la nourriture", "Des pulls en polaire", "Des bijoux en or", "Du papier"],
      reponse: "Des pulls en polaire",
      explication: "Le plastique peut être transformé en fibres textiles."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le meilleur déchet est celui qu'on ne produit pas.",
      reponse: "Vrai",
      explication: "C'est le principe de la 'réduction à la source'."
    }
  ]
};
