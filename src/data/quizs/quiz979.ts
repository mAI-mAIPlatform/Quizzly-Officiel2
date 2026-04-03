import { Quiz } from "@/types/quiz";

export const quiz979: Quiz = {
  id: "979",
  titre: "Inventions : L'Automobile 🚗💨",
  description: "Découvrez l'histoire des voitures, du fardier à vapeur aux voitures électriques.",
  theme: "Sciences",
  difficulte: "Mojen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel inventeur français a créé le tout premier véhicule automobile (à vapeur) en 1769 ?",
      options: ["Joseph Cugnot", "Louis Pasteur", "René Descartes", "Blaise Pascal"],
      reponse: "Joseph Cugnot",
      explication: "Son 'fardier' servait à transporter des canons. Il n'allait qu'à 4 km/h !"
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui a inventé la première voiture moderne avec un moteur à essence en 1886 ?",
      options: ["Henry Ford", "Carl Benz", "Louis Renault", "Enzo Ferrari"],
      reponse: "Carl Benz",
      explication: "Sa femme, Bertha Benz, a réalisé le premier long trajet (104 km) pour prouver que ça marchait."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le moteur à explosion fonctionne grâce à de petites explosions de carburant à l'intérieur des cylindres.",
      reponse: "Vrai",
      explication: "Ces explosions poussent des pistons qui font tourner les roues."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel constructeur américain a rendu la voiture abordable grâce à la fabrication à la chaîne (Modèle T) ?",
      reponse: "Henry Ford",
      explication: "Grâce au 'fordisme', on pouvait fabriquer des voitures identiques très vite."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel carburant était le plus utilisé pour les voitures pendant tout le 20ème siècle ?",
      options: ["Le charbon", "Le pétrole (essence/diesel)", "L'électricité", "Le bois"],
      reponse: "Le pétrole (essence/diesel)",
      explication: "Mais aujourd'hui, on cherche des solutions moins polluantes."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Les toutes premières voitures se conduisaient avec un volant comme aujourd'hui.",
      reponse: "Faux",
      explication: "On utilisait souvent une barre de fer appelée 'queue de vache' (franche-manche)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle l'invention suédoise de 1959 qui a sauvé plus d'un million de vies lors d'accidents ?",
      options: ["L'airbag", "Le frein à disque", "La ceinture de sécurité à 3 points", "Le rétroviseur"],
      reponse: "La ceinture de sécurité à 3 points",
      explication: "C'est l'ingénieur Nils Bohlin de chez Volvo qui l'a inventée."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel type de voiture utilise à la fois un moteur à essence et un moteur électrique ?",
      reponse: "Hybride",
      explication: "Elle permet de consommer moins de carburant en ville."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle la partie de la voiture qui permet de diriger les roues ?",
      options: ["Le moteur", "La carrosserie", "La direction", "La transmission"],
      reponse: "La direction",
      explication: "Elle est actionnée par le volant."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il y a eu des voitures électriques au tout début de l'histoire de l'automobile (vers 1900).",
      reponse: "Vrai",
      explication: "Elles étaient même plus populaires que les voitures à essence car elles étaient silencieuses et sans odeur !"
    }
  ]
};
