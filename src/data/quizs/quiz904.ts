import { Quiz } from "@/types/quiz";

export const quiz904: Quiz = {
  id: "904",
  titre: "Gastronomie : Plats Traditionnels 🍲🥄",
  description: "Découvrez les plats de nos grands-mères qui font la réputation de la France.",
  theme: "Culture Générale",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel plat est composé de viande de bœuf cuite très longtemps dans du bouillon avec des légumes (carottes, poireaux, navets) ?",
      options: ["La choucroute", "Le pot-au-feu", "La bouillabaisse", "La ratatouille"],
      reponse: "Le pot-au-feu",
      explication: "C'est l'un des plats les plus anciens et les plus simples de la cuisine française."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces plats vient de Marseille et est composé de différentes sortes de poissons ?",
      options: ["Le cassoulet", "La bouillabaisse", "Le kig ha farz", "Le coq au vin"],
      reponse: "La bouillabaisse",
      explication: "On la sert avec des croûtons et de la sauce rouille."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La 'ratatouille' est un plat composé uniquement de viande.",
      reponse: "Faux",
      explication: "C'est un plat provençal à base de légumes (aubergines, courgettes, poivrons, tomates)."
    },
    {
      id: "4",
      type: "courte",
      question: "Quelle spécialité de l'Est (Alsace) est faite à base de chou fermenté et de charcuterie ?",
      reponse: "Choucroute",
      explication: "Le chou est coupé en lanières et conservé dans du sel (saumure)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel plat du Sud-Ouest est composé de haricots blancs, de confit de canard et de saucisse ?",
      options: ["Le cassoulet", "La tartiflette", "Le hachis parmentier", "Le bœuf bourguignon"],
      reponse: "Le cassoulet",
      explication: "Castelnaudary est célèbre pour son cassoulet."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le 'Bœuf Bourguignon' est cuit dans du vin rouge.",
      reponse: "Vrai",
      explication: "Le vin rouge de Bourgogne donne sa couleur et son goût à la sauce."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel plat est composé de pommes de terre écrasées en purée sur une couche de viande hachée ?",
      options: ["Le gratin dauphinois", "Le hachis parmentier", "La moussaka", "La paëlla"],
      reponse: "Le hachis parmentier",
      explication: "Il porte le nom d'Antoine Parmentier qui a rendu la pomme de terre populaire en France."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la célèbre tarte salée garnie de crème, d'œufs et de lardons ?",
      reponse: "Quiche lorraine",
      explication: "C'est une spécialité de la Lorraine, comme son nom l'indique."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces desserts est composé de choux garnis de crème, empilés en pyramide ?",
      options: ["La pièce montée", "L'île flottante", "Le baba au rhum", "Le flan"],
      reponse: "La pièce montée",
      explication: "On l'appelle aussi croquembouche, souvent servie lors des mariages."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les Français mangent des cuisses de grenouilles, ce qui étonne beaucoup les étrangers.",
      reponse: "Vrai",
      explication: "C'est pour cela qu'on les appelle parfois les 'frogs' (grenouilles) en anglais."
    }
  ]
};
