import { Quiz } from "@/types/quiz";

export const quiz972: Quiz = {
  id: "972",
  titre: "Inventions : L'Électricité 💡⚡",
  description: "Découvrez les inventeurs qui ont éclairé nos villes et nos maisons.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui a inventé la première ampoule électrique vraiment efficace en 1879 ?",
      options: ["Léonard de Vinci", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"],
      reponse: "Thomas Edison",
      explication: "Il a réussi à faire briller un filament de bambou carbonisé pendant plus de 40 heures."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel inventeur d'origine serbe était le grand rival d'Edison et a promu le 'courant alternatif' ?",
      options: ["Albert Einstein", "Nikola Tesla", "Isaac Newton", "Graham Bell"],
      reponse: "Nikola Tesla",
      explication: "Son système de courant alternatif est celui que nous utilisons aujourd'hui dans nos prises."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "C'est Benjamin Franklin qui a prouvé que la foudre était de l'électricité en faisant voler un cerf-volant sous l'orage.",
      reponse: "Vrai",
      explication: "Il a ensuite inventé le paratonnerre."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel inventeur italien a créé la toute première pile électrique en l'an 1800 ?",
      reponse: "Alessandro Volta",
      explication: "L'unité de mesure de la tension électrique, le 'Volt', porte son nom."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces matériaux laisse passer l'électricité (conducteur) ?",
      options: ["Le plastique", "Le bois", "Le cuivre", "Le caoutchouc"],
      reponse: "Le cuivre",
      explication: "C'est pour cela que les fils électriques sont en cuivre."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Edison voulait que tout le monde utilise le 'courant continu' partout.",
      reponse: "Vrai",
      explication: "Mais le courant continu s'affaiblit vite sur de longues distances, contrairement au courant alternatif de Tesla."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le petit fil à l'intérieur des anciennes ampoules qui brille quand le courant passe ?",
      options: ["Le ressort", "Le filament", "Le piston", "Le fusible"],
      reponse: "Le filament",
      explication: "Il chauffe tellement qu'il devient lumineux."
    },
    {
      id: "8",
      type: "courte",
      question: "Quelle unité permet de mesurer l'intensité du courant électrique (nom d'un savant français) ?",
      reponse: "Ampère",
      explication: "André-Marie Ampère a fait de grandes découvertes sur l'électromagnétisme."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle machine permet de transformer l'énergie mécanique (comme le vent ou l'eau) en électricité ?",
      options: ["Un moteur", "Une génératrice (ou alternateur)", "Un radiateur", "Un transformateur"],
      reponse: "Une génératrice (ou alternateur)",
      explication: "C'est le principe utilisé dans les centrales électriques."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'électricité statique est celle que l'on ressent quand on frotte un ballon sur ses cheveux.",
      reponse: "Vrai",
      explication: "Les petites étincelles que l'on reçoit parfois en touchant du métal sont aussi de l'électricité statique."
    }
  ]
};
