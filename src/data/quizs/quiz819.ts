import { Quiz } from "@/types/quiz";

export const quiz819: Quiz = {
  id: "819",
  titre: "Écologie : L'Eau Potable 🚱🚰",
  description: "Apprenez pourquoi l'eau douce est une ressource rare et comment l'économiser.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle part de l'eau sur Terre est de l'eau douce (buvable après traitement) ?",
      options: ["Moins de 3%", "Environ 50%", "Environ 80%", "97%"],
      reponse: "Moins de 3%",
      explication: "C'est très peu ! La majorité de l'eau sur Terre est salée (océans)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Où se trouve la majeure partie de l'eau douce de la planète ?",
      options: ["Dans les bouteilles", "Dans les nuages", "Dans les glaciers et les neiges éternelles", "Sous la terre uniquement"],
      reponse: "Dans les glaciers et les neiges éternelles",
      explication: "Elle est malheureusement difficile d'accès."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "On peut boire l'eau de la mer pour se désaltérer.",
      reponse: "Faux",
      explication: "Le sel contenu dans l'eau de mer déshydrate le corps."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'endroit où l'on nettoie l'eau sale avant de la rejeter dans la nature ?",
      reponse: "Station d'épuration",
      explication: "C'est indispensable pour protéger les rivières."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel geste simple permet d'économiser l'eau au quotidien ?",
      options: ["Laisser couler le robinet pendant qu'on se brosse les dents", "Prendre une douche rapide au lieu d'un bain", "Laver sa voiture tous les jours", "Remplir une piscine"],
      reponse: "Prendre une douche rapide au lieu d'un bain",
      explication: "Un bain consomme 2 à 3 fois plus d'eau qu'une douche."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'eau du robinet en France est contrôlée et peut être bue sans danger.",
      reponse: "Vrai",
      explication: "C'est l'un des produits alimentaires les plus surveillés."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle activité humaine consomme le plus d'eau dans le monde ?",
      options: ["L'industrie", "L'agriculture (arrosage des cultures)", "Les particuliers (douches, toilettes)", "Les parcs d'attractions"],
      reponse: "L'agriculture (arrosage des cultures)",
      explication: "Elle représente environ 70% de la consommation mondiale d'eau douce."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle une période très longue sans pluie qui crée un manque d'eau ?",
      reponse: "Sécheresse",
      explication: "Cela peut entraîner des restrictions d'usage de l'eau."
    },
    {
      id: "9",
      type: "qcm",
      question: "À quoi sert le chlore ajouté dans l'eau ?",
      options: ["À donner un bon goût", "À tuer les microbes et les bactéries", "À rendre l'eau bleue", "À faire des bulles"],
      reponse: "À tuer les microbes et les bactéries",
      explication: "Il assure que l'eau reste propre jusqu'à ton robinet."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Tout le monde sur Terre a accès à l'eau potable facilement.",
      reponse: "Faux",
      explication: "Plus de 2 milliards de personnes n'ont pas d'accès sécurisé à l'eau potable."
    }
  ]
};
