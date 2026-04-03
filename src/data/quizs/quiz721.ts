import { Quiz } from "@/types/quiz";

export const quiz721: Quiz = {
  id: "721",
  titre: "Histoire : La Préhistoire 🦴",
  description: "Voyagez aux origines de l'humanité, des premiers outils aux peintures rupestres.",
  theme: "Histoire",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on les hommes qui se déplacent sans cesse pour se nourrir ?",
      options: ["Sédentaires", "Nomades", "Explorateurs", "Randonneurs"],
      reponse: "Nomades",
      explication: "Les premiers hommes suivaient le gibier."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle grotte française est célèbre pour ses peintures préhistoriques ?",
      options: ["Lascaux", "Le Louvre", "Versailles", "Padirac"],
      reponse: "Lascaux",
      explication: "Surnommée la 'Chapelle Sixtine de la préhistoire'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La maîtrise du feu par l'homme date d'environ 400 000 ans.",
      reponse: "Vrai",
      explication: "Le feu a permis de cuire les aliments et de se protéger du froid."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel est le nom de la célèbre australopithèque découverte en Éthiopie ?",
      reponse: "Lucy",
      explication: "Découverte en 1974, elle vivait il y a 3,2 millions d'années."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quelle période l'homme commence-t-il à cultiver la terre et élever des animaux ?",
      options: ["Paléolithique", "Néolithique", "Âge de fer", "Renaissance"],
      reponse: "Néolithique",
      explication: "C'est la 'révolution néolithique' (passage à la sédentarité)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Les dinosaures et les premiers hommes ont vécu à la même époque.",
      reponse: "Faux",
      explication: "60 millions d'années les séparent !"
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel outil servait à chasser en lançant des javelots plus loin ?",
      options: ["Le propulseur", "L'arc", "Le silex", "La hache"],
      reponse: "Le propulseur",
      explication: "Il agit comme un levier pour augmenter la puissance du jet."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on les grands monuments de pierre comme les menhirs ?",
      reponse: "Mégalithes",
      explication: "Du grec 'mégas' (grand) et 'lithos' (pierre)."
    },
    {
      id: "9",
      type: "qcm",
      question: "L'Homo Sapiens est...",
      options: ["L'homme moderne", "L'homme habile", "L'homme debout", "L'homme de Néandertal"],
      reponse: "L'homme moderne",
      explication: "C'est notre espèce directe."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel matériau marque la fin de la préhistoire ?",
      options: ["Le bois", "La pierre", "Le cuivre / bronze", "Le plastique"],
      reponse: "Le cuivre / bronze",
      explication: "Marque le passage aux âges des métaux."
    }
  ]
};
