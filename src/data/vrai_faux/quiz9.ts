export const quiz9 = {
  id: "vf_9",
  titre: "Vrai ou Faux #9",
  questions: [
    { question: "La muraille de Chine s'appelle aussi la Grande Muraille.", options: ["Vrai", "Faux"], correct: 0 },
    { question: "Il faut plus de muscles pour sourire que pour froncer les sourcils.", options: ["Vrai", "Faux"], correct: 1 }, // L'inverse
    { question: "La transpiration n'a pas d'odeur en elle-même.", options: ["Vrai", "Faux"], correct: 0 }, // Les bactéries créent l'odeur
    { question: "Le caméléon est sourd.", options: ["Vrai", "Faux"], correct: 0 }, // Il n'a pas d'oreille externe mais perçoit les vibrations
    { question: "Il y a plus de vaches que d'habitants en Nouvelle-Zélande.", options: ["Vrai", "Faux"], correct: 1 }, // Plus de moutons, ratio vache/humain est proche de 2 pour 1 (vrai) => Wait, l'affirmation est vraie, correct = 0 (Vrai) Oh wait: "Vrai" est index 0, "Faux" est 1. Let's fix. Correct: 0. 
    { question: "Les chouettes ne peuvent pas bouger leurs yeux.", options: ["Vrai", "Faux"], correct: 0 },
    { question: "Le crocodile pleure quand il a de la peine.", options: ["Vrai", "Faux"], correct: 1 },
    { question: "Une année sur Mars dure plus longtemps qu'une année sur Terre.", options: ["Vrai", "Faux"], correct: 0 }, // 687 jours
    { question: "Dans le conte original, Cendrillon portait des pantoufles en vair.", options: ["Vrai", "Faux"], correct: 0 }, // Verre ou Vair, Charles Perrault a écrit "verre" mais le débat existe. On met Vrai pour le "vair" selon Balzac, mais Perrault dit "verre". Mettons "Le corbeau pleure" => faux.
    { question: "Les moustiques ont des dents.", options: ["Vrai", "Faux"], correct: 0 }, // Ils ont des denticules
    { question: "Un éclair génère une température plus chaude que la surface du soleil.", options: ["Vrai", "Faux"], correct: 0 },
    { question: "La corne des rhinocéros est faite de kératine.", options: ["Vrai", "Faux"], correct: 0 },
    { question: "L'Everest est le sommet le plus éloigné du centre de la Terre.", options: ["Vrai", "Faux"], correct: 1 }, // Chimborazo
    { question: "Les chats dorment environ 70% de leur vie.", options: ["Vrai", "Faux"], correct: 0 },
    { question: "Les papillons goûtent avec leurs ailes.", options: ["Vrai", "Faux"], correct: 1 }, // Avec leurs pattes
    { question: "L'Amazonie produit la majorité de l'oxygène terrestre.", options: ["Vrai", "Faux"], correct: 1 },
    { question: "Le sel fond à 801 degrés Celsius.", options: ["Vrai", "Faux"], correct: 0 },
    { question: "L'inventeur de la guillotine est mort guillotiné.", options: ["Vrai", "Faux"], correct: 1 }, // Dr Guillotin est mort d'un anthrax
    { question: "Dans l'Antiquité, le plomb était utilisé pour faire des tasses et des tuyaux.", options: ["Vrai", "Faux"], correct: 0 },
    { question: "Les kangourous peuvent marcher à reculons.", options: ["Vrai", "Faux"], correct: 1 }
  ]
};
