import { Quiz } from "@/types/quiz";

export const quiz806: Quiz = {
  id: "806",
  titre: "Corps Humain : Les 5 Sens 👀👂👃👅✋",
  description: "Découvrez comment votre corps perçoit le monde qui l'entoure.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel sens utilise l'œil pour percevoir les couleurs et les formes ?",
      options: ["L'ouïe", "Le goût", "La vue", "L'odorat"],
      reponse: "La vue",
      explication: "L'œil capte la lumière et l'envoie au cerveau."
    },
    {
      id: "2",
      type: "qcm",
      question: "Où se trouvent les récepteurs du goût ?",
      options: ["Dans les dents", "Sur la langue (papilles)", "Dans la gorge", "Sur les lèvres"],
      reponse: "Sur la langue (papilles)",
      explication: "Elles nous permettent de sentir le sucré, le salé, l'acide et l'amer."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'odorat et le goût travaillent souvent ensemble.",
      reponse: "Vrai",
      explication: "C'est pour cela que les aliments n'ont plus de goût quand on a le nez bouché."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel organe est responsable de l'ouïe ?",
      reponse: "Oreille",
      explication: "Elle capte les vibrations de l'air (sons)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel sens permet de sentir si un objet est chaud, froid, dur ou mou ?",
      options: ["L'odorat", "Le toucher", "La vue", "L'ouïe"],
      reponse: "Le toucher",
      explication: "L'organe du toucher est la peau (tout le corps)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le nez peut distinguer des milliers d'odeurs différentes.",
      reponse: "Vrai",
      explication: "C'est un sens très puissant lié à la mémoire."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est l'organe le plus grand du corps humain (lié au toucher) ?",
      options: ["Le foie", "Le cerveau", "La peau", "Le poumon"],
      reponse: "La peau",
      explication: "Elle recouvre tout notre corps et contient des millions de capteurs."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle la partie transparente de l'œil devant l'iris ?",
      reponse: "Cornée",
      explication: "Elle protège l'œil et aide à faire la mise au point."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle partie de l'oreille s'occupe aussi de notre équilibre ?",
      options: ["Le tympan", "L'oreille interne", "Le pavillon", "Le marteau"],
      reponse: "L'oreille interne",
      explication: "Elle contient des liquides qui informent le cerveau sur notre position."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Certains animaux ont des sens que l'humain n'a pas (ex: écholocation).",
      reponse: "Vrai",
      explication: "Comme les chauves-souris ou les dauphins."
    }
  ]
};
