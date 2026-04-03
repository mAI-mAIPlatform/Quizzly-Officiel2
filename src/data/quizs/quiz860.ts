import { Quiz } from "@/types/quiz";

export const quiz860: Quiz = {
  id: "860",
  titre: "Espace : Observer le Ciel 🔭🌌",
  description: "Découvrez les instruments qui permettent d'explorer l'univers lointain depuis la Terre ou l'espace.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel savant a été le premier à pointer une lunette vers le ciel en 1609 ?",
      options: ["Isaac Newton", "Galilée", "Copernic", "Kepler"],
      reponse: "Galilée",
      explication: "Il a ainsi découvert les cratères de la Lune et les lunes de Jupiter."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le plus célèbre télescope spatial envoyé en 1990 ?",
      options: ["Hubble", "Spitzer", "Chandra", "Webb"],
      reponse: "Hubble",
      explication: "Il a fourni des images extraordinaires pendant plus de 30 ans."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un télescope spatial voit mieux qu'un télescope sur Terre car il est au-dessus de l'atmosphère.",
      reponse: "Vrai",
      explication: "L'atmosphère terrestre trouble l'image et bloque certaines lumières."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le nouveau télescope spatial géant lancé en 2021 avec un miroir doré ?",
      reponse: "James Webb",
      explication: "Il permet de voir encore plus loin, jusqu'aux premières galaxies."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on un télescope qui utilise des miroirs pour concentrer la lumière ?",
      options: ["Une lunette astronomique", "Un télescope (ou réflecteur)", "Un microscope", "Un périscope"],
      reponse: "Un télescope (ou réflecteur)",
      explication: "Une lunette utilise des lentilles de verre."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Certains télescopes n'utilisent pas la lumière visible mais des ondes radio (radiotélescopes).",
      reponse: "Vrai",
      explication: "Ils ressemblent à de grandes antennes paraboliques."
    },
    {
      id: "7",
      type: "qcm",
      question: "Où installe-t-on généralement les grands observatoires sur Terre ?",
      options: ["Dans les villes", "Dans des caves", "Au sommet de montagnes isolées et sèches", "Sous l'eau"],
      reponse: "Au sommet de montagnes isolées et sèches",
      explication: "Pour éviter la pollution lumineuse des villes et avoir un ciel bien clair."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'unité de mesure de la distance utilisée pour les étoiles ?",
      reponse: "Année-lumière",
      explication: "C'est la distance parcourue par la lumière en un an (environ 9 500 milliards de km)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel instrument de poche permet d'observer le ciel avec les deux yeux ?",
      options: ["Une longue-vue", "Des jumelles", "Un monocle", "Un stéthoscope"],
      reponse: "Des jumelles",
      explication: "C'est excellent pour commencer à observer la Lune ou les amas d'étoiles."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Regarder dans un télescope, c'est comme regarder dans le passé.",
      reponse: "Vrai",
      explication: "Car la lumière met du temps à nous arriver. On voit les objets tels qu'ils étaient quand la lumière est partie."
    }
  ]
};
