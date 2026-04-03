import { Quiz } from "@/types/quiz";

export const quiz902: Quiz = {
  id: "902",
  titre: "Gastronomie : Les Fromages de France 🧀🐄",
  description: "Testez votre flair sur l'un des plus grands trésors de la cuisine française.",
  theme: "Culture Générale",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces fromages est tout rond, crémeux et vient de Normandie ?",
      options: ["Le Roquefort", "Le Camembert", "Le Comté", "Le Chèvre"],
      reponse: "Le Camembert",
      explication: "Il est souvent vendu dans une petite boîte en bois."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel fromage à pâte dure est célèbre pour les 'trous' que l'on voit quand on le coupe (même si c'est souvent son cousin l'Emmental) ?",
      options: ["Le Gruyère", "Le Brie", "Le Cantal", "Le Munster"],
      reponse: "Le Gruyère",
      explication: "En France, on met souvent du gruyère râpé sur les pâtes."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le Roquefort est un fromage fabriqué avec du lait de vache.",
      reponse: "Faux",
      explication: "Le Roquefort est fabriqué exclusivement avec du lait de brebis."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le fromage que l'on fait fondre sur des pommes de terre et de la charcuterie lors d'une soirée d'hiver ?",
      reponse: "Raclette",
      explication: "C'est un plat très convivial qui vient de la montagne."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel fromage est surnommé 'le roi des fromages' et est très coulant ?",
      options: ["Le Comté", "Le Brie de Meaux", "La Tomme", "Le Reblochon"],
      reponse: "Le Brie de Meaux",
      explication: "Il ressemble au Camembert mais il est beaucoup plus grand."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le Comté est un fromage qui peut vieillir pendant plus de 24 mois.",
      reponse: "Vrai",
      explication: "Plus il vieillit, plus il a de goût et de petits grains croquants."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel fromage sent très fort mais a un goût très doux, typique de l'Est (Alsace/Lorraine) ?",
      options: ["Le Munster", "Le Babybel", "Le Kiri", "Le Parmesan"],
      reponse: "Le Munster",
      explication: "On le mange parfois avec des graines de cumin."
    },
    {
      id: "8",
      type: "courte",
      question: "L'ingrédient principal de n'importe quel fromage est le ...",
      reponse: "Lait",
      explication: "Il peut provenir de la vache, de la chèvre ou de la brebis."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel plat savoyard est un mélange de plusieurs fromages fondus dans lequel on trempe du pain ?",
      options: ["La Tartiflette", "La Fondue", "La Quiche", "Le Gratin"],
      reponse: "La Fondue",
      explication: "Attention à ne pas faire tomber son morceau de pain dans le poelon !"
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On mange généralement le fromage avant le dessert en France.",
      reponse: "Vrai",
      explication: "C'est une tradition lors des repas complets."
    }
  ]
};
