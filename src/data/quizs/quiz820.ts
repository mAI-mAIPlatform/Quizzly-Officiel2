import { Quiz } from "@/types/quiz";

export const quiz820: Quiz = {
  id: "820",
  titre: "Écologie : Les Gestes Éco-Citoyens 🌍✅",
  description: "Devenez un héros de la planète avec des gestes simples au quotidien.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel geste faire en sortant d'une pièce pour économiser l'énergie ?",
      options: ["Laisser la porte ouverte", "Éteindre la lumière", "Allumer la télé", "Sauter de joie"],
      reponse: "Éteindre la lumière",
      explication: "C'est un réflexe simple qui économise de l'électricité."
    },
    {
      id: "2",
      type: "qcm",
      question: "Pour faire des courses, quel est l'objet le plus écologique ?",
      options: ["Un sac en plastique jetable", "Un sac en tissu réutilisable (tote bag)", "Pas de sac du tout", "Un carton neuf"],
      reponse: "Un sac en tissu réutilisable (tote bag)",
      explication: "On peut l'utiliser des centaines de fois."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Manger des fruits et légumes de saison est meilleur pour la planète.",
      reponse: "Vrai",
      explication: "Car ils n'ont pas besoin d'être cultivés sous serres chauffées ou transportés par avion."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le fait d'aller à l'école ou au travail à plusieurs dans la même voiture ?",
      reponse: "Covoiturage",
      explication: "Cela réduit la pollution et le trafic."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que doit-on faire de ses vieux vêtements qui sont encore en bon état ?",
      options: ["Les jeter à la poubelle", "Les donner à des associations ou les vendre d'occasion", "Les brûler", "Les enterrer dans le jardin"],
      reponse: "Les donner à des associations ou les vendre d'occasion",
      explication: "Cela leur donne une seconde vie (économie circulaire)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Baisser le chauffage de 1 degré permet de faire des économies d'énergie importantes.",
      reponse: "Vrai",
      explication: "Environ 7% d'économie sur la facture de chauffage !"
    },
    {
      id: "7",
      type: "qcm",
      question: "Lequel de ces moyens de transport est le moins polluant ?",
      options: ["L'avion", "La voiture", "Le vélo", "Le scooter"],
      reponse: "Le vélo",
      explication: "Il ne consomme pas de carburant et il est bon pour la santé."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel nom donne-t-on aux produits fabriqués près de chez soi pour limiter le transport ?",
      reponse: "Produits locaux",
      explication: "Favoriser les circuits courts."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pour économiser l'eau, il vaut mieux :",
      options: ["Prendre un bain tous les jours", "Prendre une douche", "Ne jamais se laver", "Laver sa serviette après chaque usage"],
      reponse: "Prendre une douche",
      explication: "Une douche consomme beaucoup moins qu'un bain."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Chacun de nos gestes, même petit, a un impact positif sur la planète.",
      reponse: "Vrai",
      explication: "C'est l'addition des gestes de tous qui fera la différence."
    }
  ]
};
