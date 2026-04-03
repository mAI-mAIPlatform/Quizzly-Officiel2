import { Quiz } from "@/types/quiz";

export const quiz729: Quiz = {
  id: "729",
  titre: "Géographie : Développement Durable 🌱",
  description: "Comprendre les enjeux de la planète : environnement, économie et social.",
  theme: "Géographie",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quels sont les trois piliers du développement durable ?",
      options: ["Argent, Or, Diamant", "Économie, Social, Environnement", "Vitesse, Force, Chance", "Manger, Boire, Dormir"],
      reponse: "Économie, Social, Environnement",
      explication: "Il faut que ce soit équitable, vivable et viable."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la principale cause du réchauffement climatique ?",
      options: ["La pluie", "L'effet de serre lié aux gaz polluants", "La rotation de la Terre", "Les volcans"],
      reponse: "L'effet de serre lié aux gaz polluants",
      explication: "Le CO2 produit par l'homme retient la chaleur."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le recyclage permet d'utiliser moins de matières premières.",
      reponse: "Vrai",
      explication: "On transforme les déchets pour fabriquer de nouveaux objets."
    },
    {
      id: "4",
      type: "courte",
      question: "Lequel de ces énergies est renouvelable ?",
      reponse: "Solaire",
      explication: "Aussi : éolienne, hydraulique, géothermique."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que la biodiversité ?",
      options: ["La variété des espèces vivantes", "Une nouvelle technologie", "Le prix des légumes", "Un sport de combat"],
      reponse: "La variété des espèces vivantes",
      explication: "Animaux, plantes, champignons et bactéries."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'eau douce est une ressource inépuisable sur Terre.",
      reponse: "Faux",
      explication: "Elle est très inégalement répartie et soumise à la pollution."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie 'consommer local' ?",
      options: ["Acheter des produits fabriqués près de chez soi", "Acheter sur Internet", "Manger beaucoup", "Acheter par avion"],
      reponse: "Acheter des produits fabriqués près de chez soi",
      explication: "Cela réduit les transports et soutient l'économie locale."
    },
    {
      id: "8",
      type: "courte",
      question: "Quelle empreinte mesure la pression des hommes sur la nature ?",
      reponse: "Écologique",
      explication: "L'empreinte écologique s'exprime en hectares."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pourquoi faut-il protéger les forêts tropicales ?",
      options: ["Juste pour faire beau", "Elles absorbent le CO2 et abritent la biodiversité", "Pour construire des parkings", "Pour avoir plus de papier"],
      reponse: "Elles absorbent le CO2 et abritent la biodiversité",
      explication: "Ce sont les 'poumons' de la planète."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le réchauffement climatique provoque la montée du niveau des océans.",
      reponse: "Vrai",
      explication: "À cause de la fonte des glaces et de la dilatation de l'eau."
    }
  ]
};
