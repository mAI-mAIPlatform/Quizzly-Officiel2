import { Quiz } from "@/types/quiz";

export const quiz422: Quiz = {
  id: "422",
  titre: "Astronomie : Les Comètes et Astéroïdes ☄️🪨",
  description: "Testez vos connaissances sur les nomades du système solaire.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "De quoi est principalement composée une comète ?",
      options: ["De roche pure", "De glace et de poussière (neige sale)", "De gaz chaud", "De métal"],
      reponse: "De glace et de poussière (neige sale)",
      explication: "Quand elle s'approche du Soleil, la glace se sublime et forme la queue."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la comète la plus célèbre, visible tous les 75-76 ans ?",
      options: ["Hale-Bopp", "Halley", "Neowise", "Shoemaker-Levy 9"],
      reponse: "Halley",
      explication: "Elle est passée pour la dernière fois en 1986 et reviendra en 2061."
    },
    {
      id: "3",
      type: "qcm",
      question: "Où se situe la 'Centrale à astéroïdes' principale dans notre système solaire ?",
      options: ["Entre la Terre et Mars", "Entre Mars et Jupiter", "Au-delà de Neptune", "Autour du Soleil"],
      reponse: "Entre Mars et Jupiter",
      explication: "C'est la Ceinture Principale d'astéroïdes."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on un astéroïde qui entre dans l'atmosphère et brûle en créant un trait de lumière ?",
      options: ["Une comète", "Une étoile filante (météore)", "Une météorite", "Un satellite"],
      reponse: "Une étoile filante (météore)",
      explication: "Le trait de lumière est provoqué par le frottement avec l'air."
    },
    {
      id: "5",
      type: "qcm",
      question: "Et comment l'appelle-t-on s'il ne brûle pas complètement et touche le sol ?",
      options: ["Astéroïde", "Météorite", "Bolide", "Lave"],
      reponse: "Météorite",
      explication: "On en trouve souvent dans les déserts ou en Antarctique."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel immense réservoir de comètes se situe aux confins du système solaire, bien plus loin que Pluton ?",
      options: ["La Ceinture de Kuiper", "Le Nuage d'Oort", "La Zone X", "Le Halo Noir"],
      reponse: "Le Nuage d'Oort",
      explication: "Il contiendrait des milliers de milliards de comètes potentielles."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est le plus gros objet de la ceinture d'astéroïdes (désormais classé planète naine) ?",
      options: ["Vesta", "Cérès", "Pallas", "Junon"],
      reponse: "Cérès",
      explication: "Il mesure près de 1 000 km de diamètre."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment s'appelle l'astéroïde soupçonné d'avoir causé l'extinction des dinosaures il y a 66 millions d'années ?",
      options: ["Apophis", "Chicxulub", "Bennu", "Ryugu"],
      reponse: "Chicxulub",
      explication: "L'impact a eu lieu dans l'actuel Mexique."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pourquoi la queue d'une comète est-elle toujours opposée au Soleil ?",
      options: ["À cause de la vitesse", "À cause du vent solaire", "À cause de la gravité", "C'est un hasard"],
      reponse: "À cause du vent solaire",
      explication: "Le flux de particules du Soleil pousse les gaz et la poussière vers l'extérieur."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle mission européenne a réussi l'exploit de poser un petit robot (Philae) sur une comète en 2014 ?",
      options: ["Cassini", "Voyager", "Rosetta", "Galileo"],
      reponse: "Rosetta",
      explication: "Le robot a atterri sur la comète 67P/Tchourioumov-Guérassimenko."
    }
  ]
};
