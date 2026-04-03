import { Quiz } from "@/types/quiz";

export const quiz980: Quiz = {
  id: "980",
  titre: "Inventions : La Photographie 📸🖼️",
  description: "Découvrez comment l'homme a réussi à capturer la réalité sur des images fixes.",
  theme: "Sciences",
  difficulte: "Mojen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui a réalisé la toute première photographie de l'histoire en 1826 ?",
      options: ["Nicéphore Niépce", "Louis Daguerre", "Kodak", "Steve Jobs"],
      reponse: "Nicéphore Niépce",
      explication: "Elle s'appelle 'Le Point de vue du Gras' et a nécessité 8 heures de pose !"
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelait le premier appareil photo pratique et commercialisé, inventé par Daguerre ?",
      options: ["Le Polaröid", "Le Daguerréotype", "Le Reflex", "Le Smartphone"],
      reponse: "Le Daguerréotype",
      explication: "Il permettait de fixer l'image sur une plaque de métal."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les toutes premières photos étaient en couleur.",
      reponse: "Faux",
      explication: "Elles étaient en noir et blanc (ou sépia). La couleur est arrivée bien plus tard, vers 1900."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la technique ancienne d'ancêtre de l'appareil photo, une boîte noire avec un petit trou ?",
      reponse: "Camera Obscura",
      explication: "Ou 'Chambre Noire'. Les dessinateurs l'utilisaient pour tracer leurs paysages."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle entreprise a lancé le slogan 'Appuyez sur le bouton, nous faisons le reste' en 1888 ?",
      options: ["Apple", "Kodak", "Canon", "Nikon"],
      reponse: "Kodak",
      explication: "George Eastman a inventé le film souple et a rendu la photo accessible à tous."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La photographie numérique utilise un capteur électronique à la place de la pellicule.",
      reponse: "Vrai",
      explication: "C'est ce que nous avons tous aujourd'hui dans nos smartphones."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment s'appelle l'appareil photo qui sort la photo déjà imprimée quelques secondes après le clic ?",
      options: ["L'Insta-cam", "Le Polaroid", "Le Compact", "Le Reflex"],
      reponse: "Le Polaroid",
      explication: "Il a été inventé par Edwin Land en 1948."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le temps pendant lequel l'appareil laisse entrer la lumière pour prendre la photo ?",
      reponse: "Temps de pose",
      explication: "Ou 'vitesse d'obturation'. S'il est long, la photo peut être floue."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces objets est indispensable à un appareil photo pour faire une image nette ?",
      options: ["L'objectif (la lentille)", "Le trépied", "Le flash", "Le bouton"],
      reponse: "L'objectif (la lentille)",
      explication: "Il concentre la lumière sur le capteur."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les selfies existaient déjà à l'époque des premiers appareils photo.",
      reponse: "Vrai",
      explication: "Certains pionniers de la photo se prenaient déjà eux-mêmes en photo devant un miroir !"
    }
  ]
};
