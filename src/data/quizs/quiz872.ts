import { Quiz } from "@/types/quiz";

export const quiz872: Quiz = {
  id: "872",
  titre: "Musique : Le Piano 🎹🎶",
  description: "Découvrez l'histoire et les secrets du roi des instruments.",
  theme: "Culture Générale",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de touches possède habituellement un piano moderne ?",
      options: ["52", "66", "88", "104"],
      reponse: "88",
      explication: "Il y a 52 touches blanches et 36 touches noires."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel pays a vu naître le tout premier piano vers 1700 ?",
      options: ["La France", "L'Allemagne", "L'Italie", "L'Autriche"],
      reponse: "L'Italie",
      explication: "Inventé par Bartolomeo Cristofori."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le nom original du piano était 'gravicembalo col piano e forte'.",
      reponse: "Vrai",
      explication: "Cela signifie 'clavecin avec le doux et le fort', car on pouvait enfin varier le volume sonore."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on les leviers que l'on actionne avec les pieds sous le piano ?",
      reponse: "Pédales",
      explication: "Elles servent à prolonger le son ou à le rendre plus doux."
    },
    {
      id: "5",
      type: "qcm",
      question: "De quelle couleur sont les touches qui produisent les notes 'dièses' ou 'bémols' ?",
      options: ["Blanches", "Noires", "Rouges", "Jaunes"],
      reponse: "Noires",
      explication: "Elles sont situées entre les touches blanches."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Il existe des pianos 'à queue' (horizontaux) et des pianos 'droits' (verticaux).",
      reponse: "Vrai",
      explication: "Le piano à queue est utilisé pour les concerts car il est plus puissant."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel grand compositeur était un virtuose du piano et a écrit de célèbres 'Nocturnes' ?",
      options: ["Bach", "Mozart", "Chopin", "Vivaldi"],
      reponse: "Chopin",
      explication: "Frédéric Chopin est considéré comme le poète du piano."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la petite boîte qui fait 'tic-tac' pour donner le rythme au pianiste ?",
      reponse: "Métronome",
      explication: "Il aide à garder une vitesse régulière."
    },
    {
      id: "9",
      type: "qcm",
      question: "En quelle matière étaient faites les touches blanches autrefois (interdit aujourd'hui) ?",
      options: ["En plastique", "En os de baleine", "En ivoire (défenses d'éléphant)", "En nacre"],
      reponse: "En ivoire (défenses d'éléphant)",
      explication: "Depuis les années 80, elles sont en plastique pour protéger les éléphants."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Un piano n'a besoin d'aucun entretien une fois acheté.",
      reponse: "Faux",
      explication: "Il faut l'accorder régulièrement (souvent une fois par an) car les cordes se détendent."
    }
  ]
};
