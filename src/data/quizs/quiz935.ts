import { Quiz } from "@/types/quiz";

export const quiz935: Quiz = {
  id: "935",
  titre: "Sciences : Le Son et les Vibrations 🔊🎵",
  description: "Testez l'oreille et apprenez comment les sons voyagent jusqu'à vous.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qui produit un son à l'origine ?",
      options: ["De la lumière", "Une vibration", "De l'électricité", "Du vent seulement"],
      reponse: "Une vibration",
      explication: "Tout objet qui vibre produit une onde sonore."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans quel élément le son voyage-t-il généralement jusqu'à nos oreilles ?",
      options: ["Le vide", "L'air", "Le feu", "La lumière"],
      reponse: "L'air",
      explication: "Le son a besoin d'un support (gaz, liquide ou solide) pour voyager."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Il n'y a aucun son dans l'espace (le vide).",
      reponse: "Vrai",
      explication: "Comme il n'y a pas d'air pour vibrer, le son ne peut pas se déplacer. Les films de science-fiction avec de grosses explosions bruyantes dans l'espace ne sont pas réalistes !"
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on la répétition d'un son qui rebondit sur un obstacle loin de nous ?",
      reponse: "Écho",
      explication: "On l'entend souvent dans les montagnes ou les grandes salles vides."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qui capte les vibrations de l'air pour nous permettre d'entendre ?",
      options: ["Les yeux", "Les oreilles", "Le nez", "La langue"],
      reponse: "Les oreilles",
      explication: "Le tympan vibre comme la peau d'un tambour."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La lumière voyage beaucoup plus vite que le son.",
      reponse: "Vrai",
      explication: "C'est pour cela qu'on voit l'éclair d'un orage avant d'entendre le tonnerre."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle l'unité de mesure de la force (puissance) d'un son ?",
      options: ["Le mètre", "Le kilo", "Le décibel (dB)", "Le volt"],
      reponse: "Le décibel (dB)",
      explication: "Un son trop fort (au-dessus de 85 dB) peut abîmer les oreilles."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un son très aigu que les humains ne peuvent pas entendre mais les chiens oui ?",
      reponse: "Ultrason",
      explication: "Les chauves-souris les utilisent aussi pour se diriger."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans quel élément le son voyage-t-il le plus vite ?",
      options: ["Dans l'air", "Dans l'eau", "Dans les solides (comme l'acier)", "Il va à la même vitesse partout"],
      reponse: "Dans les solides (comme l'acier)",
      explication: "Plus la matière est dense, plus la vibration se transmet vite."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Nos cordes vocales vibrent quand nous parlons.",
      reponse: "Vrai",
      explication: "C'est en faisant vibrer l'air qui sort de nos poumons que nous créons des sons."
    }
  ]
};
