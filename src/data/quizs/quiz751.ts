import { Quiz } from "@/types/quiz";

export const quiz751: Quiz = {
  id: "751",
  titre: "Musique : Les Instruments à Cordes 🎻",
  description: "Découvrez la famille des instruments dont le son est produit par une corde.",
  theme: "Musique",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Laquelle de ces familles d'instruments n'est pas à cordes ?",
      options: ["Cordes frottées", "Cordes frappées", "Cordes pincées", "Cordes soufflées"],
      reponse: "Cordes soufflées",
      explication: "Les instruments à vent sont soufflés, les cordes sont frottées, pincées ou frappées."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel instrument a la tessiture la plus aiguë dans le quatuor à cordes ?",
      options: ["Violoncelle", "Alto", "Contrebasse", "Violon"],
      reponse: "Violon",
      explication: "C'est le plus petit et le plus aigu."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le piano est un instrument à cordes frappées.",
      reponse: "Vrai",
      explication: "Des marteaux frappent les cordes à l'intérieur."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le bâton avec des crins utilisé pour frotter les cordes ?",
      reponse: "Archet",
      explication: "Il est souvent fait en bois de pernambouc."
    },
    {
      id: "5",
      type: "qcm",
      question: "La guitare est un instrument à cordes...",
      options: ["Frottées", "Pincées", "Frappées", "Électriques uniquement"],
      reponse: "Pincées",
      explication: "Avec les doigts ou un médiator."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La harpe possède 47 cordes.",
      reponse: "Vrai",
      explication: "C'est l'un des instruments les plus complexes à cordes pincées."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel instrument se joue entre les jambes du musicien ?",
      options: ["Le violon", "L'alto", "Le violoncelle", "La guitare"],
      reponse: "Le violoncelle",
      explication: "Il possède une pique pour être posé au sol."
    },
    {
      id: "8",
      type: "courte",
      question: "Combien de cordes possède généralement un violon ?",
      reponse: "4",
      explication: "Sol, Ré, La, Mi."
    },
    {
      id: "9",
      type: "qcm",
      question: "De quel matériau étaient faites les cordes autrefois ?",
      options: ["Fil de fer", "Nylon", "Boyau de mouton", "Soie"],
      reponse: "Boyau de mouton",
      explication: "Aujourd'hui, on utilise plus souvent l'acier ou le nylon."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "La contrebasse est plus petite que le violoncelle.",
      reponse: "Faux",
      explication: "C'est la plus grande et la plus grave de la famille."
    }
  ]
};
