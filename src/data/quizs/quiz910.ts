import { Quiz } from "@/types/quiz";

export const quiz910: Quiz = {
  id: "910",
  titre: "Gastronomie : Chefs et Étoiles 👨‍🍳⭐",
  description: "Découvrez l'univers de la haute gastronomie et des cuisiniers célèbres.",
  theme: "Culture Générale",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle le célèbre guide qui distribue des 'étoiles' aux meilleurs restaurants ?",
      options: ["Le guide Michelin", "Le guide du Routard", "Le guide Jaune", "Le guide des Gourmets"],
      reponse: "Le guide Michelin",
      explication: "Recevoir 3 étoiles est la plus haute récompense pour un chef."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le nom de la toque haute portée par les grands chefs ?",
      options: ["Le chapeau noir", "La toque", "Le béret", "Le turban"],
      reponse: "La toque",
      explication: "On dit que les plis de la toque représentaient autrefois les 100 façons différentes de cuisiner l'œuf."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le 'Michelin' était à l'origine un guide pour aider les automobilistes à trouver des pneus.",
      reponse: "Vrai",
      explication: "Oui ! Les frères Michelin (pneus) ont créé ce guide pour inciter les gens à voyager en voiture."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le dessert à base de pâte feuilletée, crème pâtissière et glaçage, souvent testé lors des concours de pâtissiers ?",
      reponse: "Mille-feuille",
      explication: "C'est un classique qui montre la maîtrise technique du chef."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel chef français mythique a donné son nom à une façon de cuisiner simple et moderne (la Nouvelle Cuisine) ?",
      options: ["Paul Bocuse", "Auguste Escoffier", "Louis XIV", "Jean-Pierre Coffe"],
      reponse: "Paul Bocuse",
      explication: "Situé près de Lyon, il était surnommé 'le Pape de la gastronomie'."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Une 'brigade' de cuisine est l'équipe qui travaille sous les ordres du chef.",
      reponse: "Vrai",
      explication: "C'est une organisation très militaire avec des postes précis (commis, chef de partie, second...)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel ingrédient est souvent appelé 'l'or blanc' ou 'l'or de la cuisine' par les gourmets ?",
      options: ["Le sel", "La truffe (souvent appelée diamant noir)", "Le sucre", "Le caviar"],
      reponse: "Le sel",
      explication: "Ou parfois la truffe blanche d'Alba (très rare)."
    },
    {
      id: "8",
      type: "courte",
      question: "À quel âge environ un chef peut-il espérer obtenir sa première étoile Michelin ?",
      reponse: "Variable",
      explication: "Il n'y a pas d'âge précis, mais il faut des années d'expérience et d'excellence."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel grand concours mondial de cuisine porte le nom d'un chef lyonnais célèbre ?",
      options: ["Le Concours Michelin", "Le Bocuse d'Or", "La MasterChef Cup", "Le Trophée Escoffier"],
      reponse: "Le Bocuse d'Or",
      explication: "C'est un peu comme les Jeux Olympiques de la cuisine."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Un chef peut perdre ses étoiles Michelin s'il ne maintient pas la qualité de sa cuisine.",
      reponse: "Vrai",
      explication: "Les inspecteurs du guide passent régulièrement incognito pour vérifier."
    }
  ]
};
