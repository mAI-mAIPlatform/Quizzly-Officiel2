import { Quiz } from "@/types/quiz";

export const quiz930: Quiz = {
  id: "930",
  titre: "Animaux : Les Dinosaures 🦖🌋",
  description: "Remontez le temps à l'époque des géants de la Préhistoire.",
  theme: "Nature",
  difficulte: "Mojen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces dinosaures était un féroce carnivore surnommé le 'Roi des Tyrans' ?",
      options: ["Le Tricératops", "Le Diplodocus", "Le Tyrannosaure (T-Rex)", "Le Stégosaure"],
      reponse: "Le Tyrannosaure (T-Rex)",
      explication: "Il possédait des mâchoires surpuissantes et des dents de la taille d'une banane."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel dinosaure herbivore possédait trois cornes sur la tête et une grande collerette osseuse ?",
      options: ["Le Tricératops", "Le Vélociraptor", "Le Ptéranodon", "L'Iguanodon"],
      reponse: "Le Tricératops",
      explication: "Ses cornes lui servaient à se défendre contre les prédateurs."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les dinosaures étaient des mammifères.",
      reponse: "Faux",
      explication: "Les dinosaures étaient des reptiles terrestres."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le dinosaure au long cou immense et à la longue queue (l'un des plus grands herbivores) ?",
      reponse: "Diplodocus",
      explication: "Ou Brachiosaure. Ils mangeaient des tonnes de feuilles chaque jour."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces animaux n'est PAS un dinosaure mais un reptile volant de la même époque ?",
      options: ["Le T-Rex", "Le Ptéranodon", "Le Stégosaure", "Le Vélociraptor"],
      reponse: "Le Ptéranodon",
      explication: "Les dinosaures étaient uniquement terrestres. Les reptiles volants et marins sont des cousins."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Tous les dinosaures ont disparu il y a environ 66 millions d'années.",
      reponse: "Faux",
      explication: "Techniquement, les oiseaux d'aujourd'hui sont les descendants directs d'un groupe de petits dinosaures à plumes !"
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel dinosaure possédait des plaques osseuses sur le dos et des pointes au bout de la queue ?",
      options: ["L'Ankylosaure", "Le Stégosaure", "Le Spinosaure", "Le Parasaurolophus"],
      reponse: "Le Stégosaure",
      explication: "Ses plaques servaient probablement à réguler sa température."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on les restes de dinosaures (os, empreintes) que l'on retrouve dans la roche ?",
      reponse: "Fossiles",
      explication: "Les paléontologues les étudient pour comprendre comment ils vivaient."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qui a probablement causé la disparition de la plupart des dinosaures ?",
      options: ["La faim", "Une éruption volcanique géante et la chute d'un astéroïde", "Une inondation mondiale", "Le froid seulement"],
      reponse: "Une éruption volcanique géante et la chute d'un astéroïde",
      explication: "Cela a provoqué un changement climatique brutal sur toute la Terre."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les premiers hommes préhistoriques ont chassé les dinosaures.",
      reponse: "Faux",
      explication: "C'est impossible ! Les dinosaures ont disparu 60 millions d'années avant l'apparition des premiers hommes."
    }
  ]
};
