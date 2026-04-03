import { Quiz } from "@/types/quiz";

export const quiz920: Quiz = {
  id: "920",
  titre: "Sports : Équitation et Cheval 🐎🏇",
  description: "Devenez un cavalier hors pair et apprenez tout sur le cheval.",
  theme: "Sports",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle l'endroit où vivent et dorment les chevaux ?",
      options: ["Une niche", "Une écurie", "Un clapier", "Une bergerie"],
      reponse: "Une écurie",
      explication: "Chaque cheval y possède souvent son propre box."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la vitesse la plus rapide d'un cheval ?",
      options: ["Le pas", "Le trot", "Le galop", "La marche"],
      reponse: "Le galop",
      explication: "Le cheval peut courir très vite au galop."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le 'poney' est simplement un bébé cheval.",
      reponse: "Faux",
      explication: "Un poney est un cheval de petite taille, même à l'âge adulte."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le siège que l'on pose sur le dos du cheval pour s'asseoir ?",
      reponse: "Selle",
      explication: "Elle doit être bien adaptée au cheval et au cavalier."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle l'action de brosser et de nettoyer le cheval avant et après le cours ?",
      options: ["Le pansage", "Le dressage", "Le coiffage", "Le lavage"],
      reponse: "Le pansage",
      explication: "C'est un moment important pour créer un lien avec l'animal."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le cheval peut dormir debout.",
      reponse: "Vrai",
      explication: "Il possède un mécanisme de blocage des jambes qui lui permet de ne pas tomber."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle discipline équestre consiste à sauter par-dessus des obstacles sans les faire tomber ?",
      options: ["Le dressage", "Le CSO (Concours de Saut d'Obstacles)", "Le voltige", "Le polo"],
      reponse: "Le CSO (Concours de Saut d'Obstacles)",
      explication: "C'est l'épreuve la plus connue du grand public."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le professionnel qui s'occupe de poser et de changer les fers sous les sabots du cheval ?",
      reponse: "Maréchal-ferrant",
      explication: "Il protège ainsi les sabots de l'usure."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la récompense préférée du cheval après un effort ?",
      options: ["Une part de gâteau", "Une carotte ou un morceau de pomme", "Du chocolat", "Un steak"],
      reponse: "Une carotte ou un morceau de pomme",
      explication: "Les chevaux adorent les aliments croquants et naturels."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On mesure la taille des chevaux en 'pieds'.",
      reponse: "Faux",
      explication: "On mesure la hauteur au 'garrot' (le bas du cou) en centimètres ou en mains dans certains pays."
    }
  ]
};
