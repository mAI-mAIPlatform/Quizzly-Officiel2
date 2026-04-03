import { Quiz } from "@/types/quiz";

export const quiz803: Quiz = {
  id: "803",
  titre: "Corps Humain : Les Poumons et la Respiration 🫁",
  description: "Découvrez comment l'air entre dans votre corps pour vous donner de l'énergie.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel gaz de l'air est indispensable à notre survie ?",
      options: ["L'azote", "L'oxygène", "Le dioxyde de carbone", "L'hélium"],
      reponse: "L'oxygène",
      explication: "Nos organes en ont besoin pour produire de l'énergie."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle l'action de faire entrer l'air dans les poumons ?",
      options: ["L'expiration", "L'inspiration", "La digestion", "La circulation"],
      reponse: "L'inspiration",
      explication: "Le thorax gonfle et le diaphragme descend."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "On rejette du dioxyde de carbone (gaz carbonique) quand on expire.",
      reponse: "Vrai",
      explication: "C'est un déchet produit par nos cellules."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le muscle plat sous les poumons qui permet de respirer ?",
      reponse: "Diaphragme",
      explication: "C'est lui qui provoque le hoquet s'il se contracte brusquement."
    },
    {
      id: "5",
      type: "qcm",
      question: "Par où l'air passe-t-il juste après la gorge pour descendre vers les poumons ?",
      options: ["L'œsophage", "La trachée", "L'intestin", "Le foie"],
      reponse: "La trachée",
      explication: "Un tube formé de cartilages qui se divise ensuite en deux bronches."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Nous avons trois poumons.",
      reponse: "Faux",
      explication: "Nous en avons deux, un à gauche (légèrement plus petit pour laisser de la place au cœur) et un à droite."
    },
    {
      id: "7",
      type: "qcm",
      question: "Où se passent exactement les échanges entre l'air et le sang ?",
      options: ["Dans les bronches", "Dans les alvéoles pulmonaires", "Dans le nez", "Dans la bouche"],
      reponse: "Dans les alvéoles pulmonaires",
      explication: "Ce sont de minuscules sacs à l'extrémité des bronchioles."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel est l'organe qui filtre l'air et le réchauffe quand on respire par le visage ?",
      reponse: "Nez",
      explication: "Il vaut mieux respirer par le nez que par la bouche."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qui peut endommager gravement les poumons ?",
      options: ["Le sport", "La pollution et le tabac", "Boire de l'eau", "Dormir"],
      reponse: "La pollution et le tabac",
      explication: "Ils encrassent les alvéoles et empêchent de bien respirer."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On peut s'arrêter de respirer volontairement pendant plusieurs heures.",
      reponse: "Faux",
      explication: "Le cerveau nous force à respirer dès qu'il y a trop de gaz carbonique dans le sang."
    }
  ]
};
