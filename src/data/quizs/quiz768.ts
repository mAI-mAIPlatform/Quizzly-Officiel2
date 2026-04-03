import { Quiz } from "@/types/quiz";

export const quiz768: Quiz = {
  id: "768",
  titre: "Santé : La Vision et Tes Yeux 👀",
  description: "Découvrez comment fonctionne votre vue et comment protéger vos yeux.",
  theme: "Santé",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle la partie colorée de l'œil ?",
      options: ["La pupille", "L'iris", "La rétine", "Le cristallin"],
      reponse: "L'iris",
      explication: "Il peut être bleu, vert, marron, etc. Il règle la quantité de lumière."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qu'est-ce que la pupille ?",
      options: ["Un muscle", "Un trou qui laisse passer la lumière", "Une tache de naissance", "Le couvercle de l'œil"],
      reponse: "Un trou qui laisse passer la lumière",
      explication: "Elle s'agrandit dans le noir et rétrécit à la lumière."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "On appelle 'rétine' l'écran au fond de l'œil qui capte les images.",
      reponse: "Vrai",
      explication: "Elle envoie ensuite les informations au cerveau via le nerf optique."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le médecin spécialiste des yeux ?",
      reponse: "Ophtalmologue",
      explication: "Ou plus simplement un 'ophtalmo'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel défaut de vision empêche de voir clair de loin ?",
      options: ["L'hypermétropie", "La myopie", "L'astigmatisme", "Le daltonisme"],
      reponse: "La myopie",
      explication: "Les myopes ont besoin de lunettes pour voir au loin."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Il est conseillé de regarder les écrans dans le noir total.",
      reponse: "Faux",
      explication: "Le contraste trop fort fatigue beaucoup les yeux. Mieux vaut une lumière d'ambiance."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle vitamine, présente dans les carottes, est excellente pour la vue ?",
      options: ["Vitamine C", "Vitamine A", "Vitamine D", "Vitamine B12"],
      reponse: "Vitamine A",
      explication: "Elle aide notamment à mieux voir quand la lumière est faible."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le système d'écriture en relief pour les aveugles ?",
      reponse: "Braille",
      explication: "Inventé par Louis Braille en 1829."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que faut-il porter pour protéger ses yeux du soleil ?",
      options: ["Une casquette", "Des lunettes de soleil (norme CE)", "Un bandeau", "Rien"],
      reponse: "Des lunettes de soleil (norme CE)",
      explication: "Les rayons UV peuvent brûler la surface de l'œil."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le daltonisme est une difficulté à distinguer certaines couleurs.",
      reponse: "Vrai",
      explication: "Souvent le rouge et le vert."
    }
  ]
};
