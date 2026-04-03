import { Quiz } from "@/types/quiz";

export const quiz871: Quiz = {
  id: "871",
  titre: "Musique : Familles d'Instruments 🎻🎺🥁",
  description: "Apprenez à classer les instruments de musique selon la façon dont ils produisent du son.",
  theme: "Culture Générale",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on la famille d'instruments dont on fait vibrer des fils tendus ?",
      options: ["Les bois", "Les cordes", "Les cuivres", "Les percussions"],
      reponse: "Les cordes",
      explication: "Le violon, la guitare et le piano font partie de cette famille."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans quelle famille classe-t-on la trompette et le trombone ?",
      options: ["Les bois", "Les cuivres", "Les cordes", "Les percussions"],
      reponse: "Les cuivres",
      explication: "Ce sont des instruments à vent en métal où le son est produit par la vibration des lèvres."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le piano est un instrument à cordes frappées.",
      reponse: "Vrai",
      explication: "Quand on appuie sur une touche, un petit marteau vient frapper une corde à l'intérieur."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on la famille d'instruments que l'on frappe ou que l'on secoue ?",
      reponse: "Percussions",
      explication: "Comme le tambour, le xylophone ou les maracas."
    },
    {
      id: "5",
      type: "qcm",
      question: "La flûte et la clarinette font partie de quelle famille ?",
      options: ["Les bois", "Les cuivres", "Les cordes", "Les percussions"],
      reponse: "Les bois",
      explication: "Même si certaines flûtes sont en métal aujourd'hui, elles appartiennent historiquement à la famille des bois."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le saxophone est un instrument de la famille des cuivres car il est en métal doré.",
      reponse: "Faux",
      explication: "Le saxophone appartient à la famille des bois car il possède une anche (petite languette de bois) pour produire le son."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel instrument de percussion possède des lames de bois ou de métal sur lesquelles on tape avec des mailloches ?",
      options: ["La batterie", "Le xylophone", "La harpe", "Le violoncelle"],
      reponse: "Le xylophone",
      explication: "On le trouve souvent dans les écoles de musique pour débuter."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'instrument à cordes géant que l'on joue assis et qui possède un cadre en bois et 47 cordes ?",
      reponse: "Harpe",
      explication: "C'est l'un des plus anciens instruments du monde."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans un orchestre symphonique, qui dirige tous les musiciens avec une baguette ?",
      options: ["Le premier violon", "Le chef d'orchestre", "Le compositeur", "Le chanteur"],
      reponse: "Le chef d'orchestre",
      explication: "Il assure le tempo et l'équilibre sonore de l'ensemble."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "La voix humaine est considérée comme un instrument de musique.",
      reponse: "Vrai",
      explication: "On l'appelle parfois 'l'instrument naturel'."
    }
  ]
};
