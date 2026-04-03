import { Quiz } from "@/types/quiz";

export const quiz973: Quiz = {
  id: "973",
  titre: "Inventions : Le Téléphone ☎️📱",
  description: "Découvrez l'histoire de l'appareil qui a permis de se parler à distance.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est officiellement reconnu comme l'inventeur du téléphone en 1876 ?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Steve Jobs", "Samuel Morse"],
      reponse: "Alexander Graham Bell",
      explication: "Il a déposé le premier brevet pour un appareil transmettant la voix."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle a été la toute première phrase prononcée au téléphone par Bell ?",
      options: ["Allo, qui est là ?", "Monsieur Watson, venez ici, j'ai besoin de vous !", "Ça marche !", "Bonjour le monde"],
      reponse: "Monsieur Watson, venez ici, j'ai besoin de vous !",
      explication: "Watson était son assistant situé dans la pièce d'à côté."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Au début, on avait besoin d'une personne (l'opératrice) pour nous relier manuellement à notre correspondant.",
      reponse: "Vrai",
      explication: "Il n'y avait pas encore de numéros à composer soi-même."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'ancêtre du téléphone qui envoyait des signaux (points et traits) par des fils ?",
      reponse: "Télégraphe",
      explication: "Il utilisait le code Morse."
    },
    {
      id: "5",
      type: "qcm",
      question: "En quelle année le premier téléphone portable (cellulaire) a-t-il été commercialisé ?",
      options: ["1950", "1983", "2000", "2007"],
      reponse: "1983",
      explication: "C'était le Motorola DynaTAC, il était énorme et pesait 1 kg !"
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le premier iPhone, qui a révolutionné les smartphones, est sorti en 2007.",
      reponse: "Vrai",
      explication: "Steve Jobs l'a présenté comme trois appareils en un : un téléphone, un iPod et un navigateur internet."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment sont transportées la plupart des communications téléphoniques internationales aujourd'hui ?",
      options: ["Par satellite", "Par des câbles sous-marins au fond des océans", "Par les ondes radio", "Par pigeon voyageur"],
      reponse: "Par des câbles sous-marins au fond des océans",
      explication: "C'est beaucoup plus rapide et fiable que les satellites."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel mot utilise-t-on pour dire 'Bonjour' au téléphone dans presque tous les pays du monde ?",
      reponse: "Allo",
      explication: "Ce mot viendrait de l'anglais 'Hello'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie le sigle SMS ?",
      options: ["Simple Message System", "Short Message Service", "Small Mail Sender", "Secret Message Signal"],
      reponse: "Short Message Service",
      explication: "Le premier SMS a été envoyé en 1992."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Avant les téléphones portables, on utilisait des cabines téléphoniques publiques dans les rues.",
      reponse: "Vrai",
      explication: "Elles fonctionnaient avec des pièces ou des télécartes. Elles ont presque toutes disparu aujourd'hui."
    }
  ]
};
