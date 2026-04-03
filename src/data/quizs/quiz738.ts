import { Quiz } from "@/types/quiz";

export const quiz738: Quiz = {
  id: "738",
  titre: "Physique : L'Électricité ⚡",
  description: "Découvrir les circuits simples et les dangers du courant électrique.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un circuit ouvert ?",
      options: ["Un circuit où le courant passe", "Un circuit où le courant ne passe plus", "Un circuit sans pile", "Un circuit de course"],
      reponse: "Un circuit où le courant ne passe plus",
      explication: "S'il y a une coupure (interrupteur ouvert), l'électricité s'arrête."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel objet fournit l'énergie dans un circuit de lampe de poche ?",
      options: ["L'ampoule", "L'interrupteur", "La pile", "Le fil"],
      reponse: "La pile",
      explication: "C'est le générateur d'énergie."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le métal est généralement un bon conducteur d'électricité.",
      reponse: "Vrai",
      explication: "Comme le cuivre, utilisé pour fabriquer les fils électriques."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on un matériau qui ne laisse pas passer l'électricité ?",
      reponse: "Isolant",
      explication: "Exemple : le plastique, le verre, le bois sec."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que se passe-t-il si on met les deux fils d'une pile en contact direct ?",
      options: ["Rien", "Un court-circuit", "La pile se recharge", "La lumière augmente"],
      reponse: "Un court-circuit",
      explication: "Cela peut faire chauffer la pile et provoquer un incendie."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'eau du robinet peut conduire l'électricité.",
      reponse: "Vrai",
      explication: "C'est pour cela qu'il est très dangereux d'utiliser des appareils électriques près de l'eau."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel composant permet d'allumer ou d'éteindre la lumière ?",
      options: ["La pile", "Le fil", "L'interrupteur", "L'isolant"],
      reponse: "L'interrupteur",
      explication: "Il sert à ouvrir ou fermer le circuit."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la protection qui 'saute' en cas de problème électrique à la maison ?",
      reponse: "Disjoncteur",
      explication: "Il coupe le courant pour protéger l'installation."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pour qu'une ampoule brille, elle doit être reliée aux deux ... de la pile.",
      options: ["Cotés", "Bornes (+ et -)", "Fils uniquement", "Inconnus"],
      reponse: "Bornes (+ et -)",
      explication: "Le circuit doit être complet."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le corps humain est conducteur d'électricité.",
      reponse: "Vrai",
      explication: "D'où les risques d'électrocution !"
    }
  ]
};
