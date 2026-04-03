import { Quiz } from "@/types/quiz";

export const quiz761: Quiz = {
  id: "761",
  titre: "Sport : Les Jeux Olympiques 🏅",
  description: "L'histoire et les valeurs de la plus grande compétition sportive du monde.",
  theme: "Sport",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Où sont nés les Jeux Olympiques ?",
      options: ["À Rome", "En Grèce antique", "À Paris", "À Londres"],
      reponse: "En Grèce antique",
      explication: "Les premiers jeux ont eu lieu à Olympie en 776 av J.-C."
    },
    {
      id: "2",
      type: "qcm",
      question: "Que représentent les cinq anneaux entrelacés du drapeau olympique ?",
      options: ["Les 5 océans", "Les 5 continents du monde", "Les 5 sens", "Les 5 doigts de la main"],
      reponse: "Les 5 continents du monde",
      explication: "Afrique, Amérique, Asie, Europe et Océanie."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les Jeux Olympiques d'été et d'hiver ont lieu la même année.",
      reponse: "Faux",
      explication: "Ils sont décalés de deux ans depuis 1994."
    },
    {
      id: "4",
      type: "courte",
      question: "Tous les combien d'années ont lieu les JO ?",
      reponse: "4",
      explication: "C'est ce qu'on appelle une olympiade."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle est la devise olympique ?",
      options: ["Plus vite, plus haut, plus fort", "L'important est de gagner", "Le sport c'est la santé", "Un pour tous, tous pour un"],
      reponse: "Plus vite, plus haut, plus fort",
      explication: "Citius, Altius, Fortius en latin."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La flamme olympique est toujours allumée à Olympie, en Grèce.",
      reponse: "Vrai",
      explication: "Elle voyage ensuite jusqu'à la ville hôte des jeux."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel pays a accueilli les Jeux de 2024 ?",
      options: ["Japon", "France", "Australie", "États-Unis"],
      reponse: "France",
      explication: "À Paris, 100 ans après les jeux de 1924."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel sprinteur jamaïcain détient le record du monde du 100m ?",
      reponse: "Usain Bolt",
      explication: "9,58 secondes !"
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle médaille reçoit le vainqueur d'une épreuve ?",
      options: ["Bronze", "Argent", "Or", "Platine"],
      reponse: "Or",
      explication: "Le deuxième a l'argent et le troisième le bronze."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les femmes ont toujours eu le droit de participer aux JO depuis l'Antiquité.",
      reponse: "Faux",
      explication: "Elles étaient exclues dans l'Antiquité et n'ont commencé à participer aux jeux modernes qu'en 1900."
    }
  ]
};
