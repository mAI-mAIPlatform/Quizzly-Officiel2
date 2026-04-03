import { Quiz } from "@/types/quiz";

export const quiz753: Quiz = {
  id: "753",
  titre: "Musique : Jazz et Blues 🎷",
  description: "Plongez dans l'histoire des musiques afro-américaines.",
  theme: "Musique",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans quelle ville des États-Unis est né le Jazz ?",
      options: ["New York", "Chicago", "La Nouvelle-Orléans", "Los Angeles"],
      reponse: "La Nouvelle-Orléans",
      explication: "Au début du XXème siècle."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces instruments est emblématique du Jazz ?",
      options: ["La flûte à bec", "Le saxophone", "Le triangle", "L'orgue"],
      reponse: "Le saxophone",
      explication: "Bien qu'il y ait aussi beaucoup de trompette et de piano."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'improvisation est un élément clé du Jazz.",
      reponse: "Vrai",
      explication: "Les musiciens créent la mélodie en direct sur une structure d'accords."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le célèbre trompettiste surnommé 'Satchmo' ?",
      reponse: "Louis Armstrong",
      explication: "Sa voix et son jeu de trompette sont légendaires."
    },
    {
      id: "5",
      type: "qcm",
      question: "Le Blues exprime généralement...",
      options: ["La joie extrême", "La tristesse et la nostalgie", "La vitesse", "Le sommeil"],
      reponse: "La tristesse et la nostalgie",
      explication: "'To have the blues' signifie être cafardeux."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Miles Davis était un célèbre pianiste de Jazz.",
      reponse: "Faux",
      explication: "C'était un trompettiste de génie."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on la technique vocale du Jazz consistant à imiter des instruments avec des syllabes sans sens ?",
      options: ["Le slam", "Le rap", "Le scat", "Le yodel"],
      reponse: "Le scat",
      explication: "Rendu célèbre notamment par Ella Fitzgerald."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel instrument jouait Duke Ellington ?",
      reponse: "Piano",
      explication: "Il était aussi un immense chef d'orchestre."
    },
    {
      id: "9",
      type: "qcm",
      question: "La structure classique du Blues se fait sur combien de mesures ?",
      options: ["4", "8", "12", "16"],
      reponse: "12",
      explication: "Les fameux '12-bar blues'."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le Jazz a influencé le Rock'n'roll.",
      reponse: "Vrai",
      explication: "Tout comme le Rythm and Blues."
    }
  ]
};
