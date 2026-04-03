import { Quiz } from "@/types/quiz";

export const quiz641: Quiz = {
  id: "641",
  titre: "Science : L'Électricité ⚡",
  description: "Comprendre cette énergie qui alimente notre quotidien.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le nom du flux de particules chargées qui circule dans un fil électrique ?",
      options: ["Le vent électrique", "Le courant électrique", "La tension", "La résistance"],
      reponse: "Le courant électrique",
      explication: "Il s'agit du déplacement des électrons dans un matériau conducteur."
    },
    {
      id: "2",
      type: "qcm",
      question: "Laquelle de ces matières est un très bon conducteur d'électricité ?",
      options: ["Le plastique", "Le verre", "Le cuivre", "Le bois sec"],
      reponse: "Le cuivre",
      explication: "C'est pour cela qu'il est utilisé dans la plupart des câbles électriques."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on une matière qui empêche le passage de l'électricité ?",
      options: ["Un conducteur", "Un isolant", "Un réflecteur", "Un aimant"],
      reponse: "Un isolant",
      explication: "Le plastique qui entoure les fils électriques est un isolant pour nous protéger."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est l'unité de mesure de la tension électrique (utilisée pour les piles 1,5V par exemple) ?",
      options: ["L'Ampère", "Le Watt", "Le Volt", "L'Ohm"],
      reponse: "Le Volt",
      explication: "Nommé en hommage à Alessandro Volta, inventeur de la pile."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que se passe-t-il dans un circuit électrique si l'interrupteur est 'ouvert' ?",
      options: ["La lampe s'allume", "Le courant ne circule plus", "Le courant va plus vite", "La pile explose"],
      reponse: "Le courant ne circule plus",
      explication: "Le circuit est coupé, comme un pont levé qui empêche le passage."
    },
    {
      id: "6",
      type: "qcm",
      question: "Lequel de ces éléments produit de l'électricité de manière chimique ?",
      options: ["Une ampoule", "Une pile", "Un interrupteur", "Un moteur"],
      reponse: "Une pile",
      explication: "Elle transforme l'énergie chimique en énergie électrique."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel danger principal représente l'électricité pour le corps humain ?",
      options: ["L'électrocution", "L'étourdissement", "La surdité", "Il n'y a aucun danger"],
      reponse: "L'électrocution",
      explication: "Le courant peut traverser le corps et causer des blessures graves ou la mort."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment s'appelle le savant américain qui a prouvé que la foudre était de l'électricité avec un cerf-volant ?",
      options: ["Thomas Edison", "Benjamin Franklin", "Nikola Tesla", "Albert Einstein"],
      reponse: "Benjamin Franklin",
      explication: "Il a par la suite inventé le paratonnerre."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quand deux fils se touchent accidentellement et que le courant devient trop fort, on parle de :",
      options: ["Surpression", "Court-circuit", "Coupure d'eau", "Vitesse lumière"],
      reponse: "Court-circuit",
      explication: "Cela peut provoquer des étincelles et des incendies."
    },
    {
      id: "10",
      type: "qcm",
      question: "Lequel de ces appareils sert à protéger l'installation électrique en 'sautant' en cas de problème ?",
      options: ["L'ampoule", "Le disjoncteur", "La prise de courant", "Le compteur"],
      reponse: "Le disjoncteur",
      explication: "Il coupe automatiquement le courant pour sécuriser la maison."
    }
  ]
};
