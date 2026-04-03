import { Quiz } from "@/types/quiz";

export const quiz890: Quiz = {
  id: "890",
  titre: "Corps Humain : Sommeil et Rêves 😴🌙",
  description: "Découvrez pourquoi dormir est essentiel pour votre santé et votre cerveau.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Pourquoi avons-nous besoin de dormir ?",
      options: ["Pour ne pas s'ennuyer la nuit", "Pour que le corps se répare et que le cerveau trie les informations", "Pour faire plaisir aux parents", "On n'en a pas vraiment besoin"],
      reponse: "Pour que le corps se répare et que le cerveau trie les informations",
      explication: "Le sommeil est vital pour la croissance et l'apprentissage."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien d'heures de sommeil un enfant a-t-il environ besoin par nuit ?",
      options: ["4 heures", "6 heures", "9 à 11 heures", "15 heures"],
      reponse: "9 à 11 heures",
      explication: "Le sommeil aide à grandir et à être en forme pour l'école."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "On rêve plusieurs fois par nuit, même si on ne s'en souvient pas.",
      reponse: "Vrai",
      explication: "Tout le monde rêve, c'est l'activité de l'imagination du cerveau endormi."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on un rêve qui fait peur ?",
      reponse: "Cauchemar",
      explication: "Ils arrivent souvent quand on est stressé ou qu'on a vu quelque chose d'impressionnant."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle la phase du sommeil où l'on rêve le plus ?",
      options: ["Le sommeil léger", "Le sommeil profond", "Le sommeil paradoxal (REM)", "Le réveil"],
      reponse: "Le sommeil paradoxal (REM)",
      explication: "Pendant cette phase, nos yeux bougent très vite sous nos paupières."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le cerveau s'arrête complètement de fonctionner pendant le sommeil.",
      reponse: "Faux",
      explication: "Il reste très actif, notamment pour consolider la mémoire."
    },
    {
      id: "7",
      type: "qcm",
      question: "Lequel de ces éléments empêche souvent de bien dormir ?",
      options: ["Lire un livre calme", "Regarder des écrans (tablette, téléphone) juste avant de dormir", "Prendre une douche tiède", "Être dans le noir d'une chambre"],
      reponse: "Regarder des écrans (tablette, téléphone) juste avant de dormir",
      explication: "La lumière bleue des écrans fait croire au cerveau qu'il fait encore jour."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le fait de marcher ou de parler pendant son sommeil sans s'en souvenir ?",
      reponse: "Somnambulisme",
      explication: "C'est fréquent chez les enfants et finit souvent par passer tout seul."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle hormone notre cerveau fabrique-t-il dans l'obscurité pour nous donner envie de dormir ?",
      options: ["L'adrénaline", "La mélatonine", "Le sucre", "Le fer"],
      reponse: "La mélatonine",
      explication: "C'est l'hormone du sommeil."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Dormir assez nous aide à ne pas être malade.",
      reponse: "Vrai",
      explication: "Le système immunitaire se renforce pendant que nous dormons."
    }
  ]
};
