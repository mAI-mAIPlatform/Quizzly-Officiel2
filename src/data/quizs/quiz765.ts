import { Quiz } from "@/types/quiz";

export const quiz765: Quiz = {
  id: "765",
  titre: "Sport : La Natation 🏊",
  description: "Plongez dans l'univers des bassins et des styles de nage.",
  theme: "Sport",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces styles n'est pas une nage officielle ?",
      options: ["Le Crawl", "La Brasse", "La Nage du chien", "Le Papillon"],
      reponse: "La Nage du chien",
      explication: "Les 4 nages officielles sont le Crawl, la Brasse, le Dos et le Papillon."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la nage considérée comme la plus rapide ?",
      options: ["La Brasse", "Le Dos crawlé", "Le Crawl", "Le Papillon"],
      reponse: "Le Crawl",
      explication: "C'est la nage utilisée pour les épreuves de 'Nage libre'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un bassin olympique mesure 50 mètres de long.",
      reponse: "Vrai",
      explication: "C'est ce qu'on appelle le 'grand bassin'."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le départ d'une course en plongeant d'un bloc ?",
      reponse: "Plongeon",
      explication: "Le départ se fait au signal sonore."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel accessoire permet de protéger les yeux du chlore ?",
      options: ["Un bonnet", "Des lunettes de natation", "Un tuba", "Des palmes"],
      reponse: "Des lunettes de natation",
      explication: "Essentielles pour bien voir sous l'eau."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "En brasse, les bras et les jambes doivent bouger en même temps de façon symétrique.",
      reponse: "Vrai",
      explication: "C'est une nage très technique au niveau de la coordination."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle nage se pratique sur le ventre avec un mouvement de bras simultané ressemblant à des ailes ?",
      options: ["Le Crawl", "Le Papillon", "La Brasse", "Le Dos"],
      reponse: "Le Papillon",
      explication: "C'est la nage la plus physique."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le demi-tour rapide que font les nageurs au mur ?",
      reponse: "Culbute",
      explication: "C'est une pirouette sous l'eau pour repartir vite."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel nageur américain détient le record du nombre de médailles d'or olympiques (23) ?",
      options: ["Michael Phelps", "Ian Thorpe", "Florent Manaudou", "César Cielo"],
      reponse: "Michael Phelps",
      explication: "Surnommé 'The Baltimore Bullet'."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "La natation n'est pas recommandée pour le dos.",
      reponse: "Faux",
      explication: "C'est au contraire l'un des meilleurs sports pour muscler le dos sans traumatiser les articulations."
    }
  ]
};
