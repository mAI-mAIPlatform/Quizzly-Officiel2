import { Quiz } from "@/types/quiz";

export const quiz736: Quiz = {
  id: "736",
  titre: "Physique : Les États de la Matière 💧",
  description: "Comprendre les différences entre solide, liquide et gaz.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est l'état de la glace ?",
      options: ["Liquide", "Gazeux", "Solide", "Plasma"],
      reponse: "Solide",
      explication: "La glace a une forme propre."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?",
      options: ["La fusion", "La vaporisation", "La solidification", "La condensation"],
      reponse: "La vaporisation",
      explication: "Exemple : l'eau qui bout dans une casserole."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un gaz n'a pas de forme propre et occupe tout l'espace disponible.",
      reponse: "Vrai",
      explication: "Le gaz est expansible."
    },
    {
      id: "4",
      type: "courte",
      question: "À quelle température l'eau pure gèle-t-elle à pression normale ?",
      reponse: "0°C",
      explication: "Zéro degré Celsius."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que la fusion ?",
      options: ["Passage du solide au liquide", "Passage du liquide au solide", "Passage du gaz au liquide", "Une danse"],
      reponse: "Passage du solide au liquide",
      explication: "Comme un glaçon qui fond."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La vapeur d'eau est visible à l'œil nu.",
      reponse: "Faux",
      explication: "La vapeur d'eau est un gaz invisible. Ce qu'on voit au-dessus de la bouilloire, ce sont des gouttelettes liquides (buée)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Un liquide prend la forme du récitpient qui le contient...",
      options: ["Mais son volume ne change pas", "Et son volume change aussi", "Sauf s'il est rouge", "Uniquement dans le noir"],
      reponse: "Mais son volume ne change pas",
      explication: "Le liquide est incompressible."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel état de la matière peut-on facilement comprimer ?",
      reponse: "Gazeux",
      explication: "L'air dans une seringue bouchée peut être écrasé."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on la transformation du liquide en solide ?",
      options: ["L'ébullition", "La solidification", "La liquéfaction", "La sublimation"],
      reponse: "La solidification",
      explication: "Comme l'eau qui devient glace."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le cycle de l'eau sur Terre utilise ces changements d'état.",
      reponse: "Vrai",
      explication: "Évaporation des mers, condensation en nuages, pluie."
    }
  ]
};
