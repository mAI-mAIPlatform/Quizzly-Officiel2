import { Quiz } from "@/types/quiz";

export const quiz841: Quiz = {
  id: "841",
  titre: "Inventions : L'Imprimerie 📚🖨️",
  description: "Découvrez l'invention qui a permis de diffuser le savoir à travers le monde.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est considéré comme l'inventeur de l'imprimerie à caractères mobiles en Europe ?",
      options: ["Léonard de Vinci", "Johannes Gutenberg", "Christophe Colomb", "Galilée"],
      reponse: "Johannes Gutenberg",
      explication: "Il a mis au point sa technique vers 1450 à Mayence, en Allemagne."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le premier grand livre imprimé par Gutenberg ?",
      options: ["Le dictionnaire", "La Bible", "Les Misérables", "L'Encyclopédie"],
      reponse: "La Bible",
      explication: "On l'appelle la 'Bible à 42 lignes'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Avant l'imprimerie, les livres étaient recopiés à la main par des moines.",
      reponse: "Vrai",
      explication: "On les appelait les moines copistes. Un seul livre mettait des mois à être terminé."
    },
    {
      id: "4",
      type: "courte",
      question: "Sur quel support, fait de peau d'animal, écrivait-on souvent avant le papier ?",
      reponse: "Parchemin",
      explication: "Il était très coûteux par rapport au papier."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'un 'caractère mobile' en imprimerie ?",
      options: ["Une lettre en métal que l'on peut déplacer et réutiliser", "Une machine qui bouge toute seule", "Un livre qui se lit vite", "Une encre spéciale"],
      reponse: "Une lettre en métal que l'on peut déplacer et réutiliser",
      explication: "C'est le secret de la rapidité de l'imprimerie de Gutenberg."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'imprimerie a permis de faire baisser le prix des livres.",
      reponse: "Vrai",
      explication: "Comme on pouvait en fabriquer beaucoup plus, ils sont devenus accessibles à plus de monde."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel pays avait inventé des techniques d'imprimerie bien avant l'Europe ?",
      options: ["L'Égypte", "La Chine", "La Grèce", "Le Mexique"],
      reponse: "La Chine",
      explication: "Ils utilisaient notamment des blocs de bois gravés (xylographie)."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la machine utilisée par Gutenberg pour presser la feuille sur les caractères encrés ?",
      reponse: "Presse",
      explication: "Il s'est inspiré des presses à raisin utilisées pour faire du vin."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel mouvement intellectuel a été grandement aidé par la diffusion des livres ?",
      options: ["Le Moyen Âge", "La Renaissance (et l'Humanisme)", "La Préhistoire", "L'Antiquité"],
      reponse: "La Renaissance (et l'Humanisme)",
      explication: "Les idées nouvelles ont circulé beaucoup plus vite grâce aux livres."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Gutenberg est devenu l'homme le plus riche de son temps grâce à son invention.",
      reponse: "Faux",
      explication: "Il a eu des problèmes juridiques avec ses associés et a fini sa vie avec des difficultés financières."
    }
  ]
};
