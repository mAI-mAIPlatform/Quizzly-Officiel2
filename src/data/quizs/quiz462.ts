import { Quiz } from "@/types/quiz";

export const quiz462: Quiz = {
  id: "462",
  titre: "Astronomie : Le Télescope James Webb 🛰️✨",
  description: "Tout sur le télescope le plus puissant jamais envoyé dans l'espace.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "En quelle année le télescope James Webb (JWST) a-t-il été lancé ?",
      options: ["1990", "2015", "2021", "2023"],
      reponse: "2021",
      explication: "Il a été lancé le jour de Noël (25 décembre) par une fusée Ariane 5."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans quel domaine de la lumière le JWST observe-t-il principalement (contrairement à Hubble) ?",
      options: ["L'Ultraviolet", "L'Infrarouge", "Les Rayons X", "Les Ondes radio"],
      reponse: "L'Infrarouge",
      explication: "Cela lui permet de voir à travers la poussière interstellaire et de détecter la lumière refroidie des premières galaxies."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la particularité visuelle de son miroir principal ?",
      options: ["Il est d'un seul bloc de verre", "Il est composé de 18 segments hexagonaux recouverts d'une fine couche d'or", "Il est noir", "Il est rectangulaire"],
      reponse: "Il est composé de 18 segments hexagonaux recouverts d'une fine couche d'or",
      explication: "L'or est un excellent réflecteur de la lumière infrarouge."
    },
    {
      id: "4",
      type: "qcm",
      question: "Pourquoi le James Webb est-il si loin de la Terre (1,5 million de km) ?",
      options: ["Pour être plus près des étoiles", "Pour rester dans l'obscurité et le froid extrêmes nécessaires à ses instruments (Point de Lagrange L2)", "Pour éviter la pollution", "Il est tombé en panne"],
      reponse: "Pour rester dans l'obscurité et le froid extrêmes nécessaires à ses instruments (Point de Lagrange L2)",
      explication: "Ses instruments doivent fonctionner à -230°C pour ne pas être perturbés par leur propre chaleur."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment le télescope se protège-t-il de la chaleur du Soleil et de la Terre ?",
      options: ["Avec une clim", "Grâce à un immense bouclier thermique (pare-soleil) de la taille d'un court de tennis", "En tournant très vite", "Avec de la glace"],
      reponse: "Grâce à un immense bouclier thermique (pare-soleil) de la taille d'un court de tennis",
      explication: "Composé de 5 couches de Kapton ultra-fines."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est l'un des objectifs majeurs de la mission James Webb ?",
      options: ["Chercher de l'or sur la lune", "Observer les premières étoiles et galaxies nées après le Big Bang", "Réparer Hubble", "Trouver une nouvelle planète habitable en un jour"],
      reponse: "Observer les premières étoiles et galaxies nées après le Big Bang",
      explication: "Il agit comme une véritable machine à remonter le temps."
    },
    {
      id: "7",
      type: "qcm",
      question: "Le JWST peut-il analyser l'atmosphère des exoplanètes ?",
      options: ["Non, il est trop loin", "Oui, via la spectroscopie pour détecter de l'eau, du méthane ou du CO2", "Seulement si elles sont proches du soleil", "Il ne fait que des photos floues"],
      reponse: "Oui, via la spectroscopie pour détecter de l'eau, du méthane ou du CO2",
      explication: "C'est l'un de ses instruments les plus révolutionnaires pour la recherche de vie ailleurs."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel télescope célèbre le James Webb remplace-t-il (ou complète-t-il) ?",
      options: ["Hubble", "Kepler", "Chandra", "Spitzer"],
      reponse: "Hubble",
      explication: "Même si Hubble continue de fonctionner, Webb est 100 fois plus puissant."
    },
    {
      id: "9",
      type: "qcm",
      question: "À quelle vitesse le Webb a-t-il dû être déplié dans l'espace ?",
      options: ["En 1 heure", "En 24 heures", "Sur une période de deux semaines (le 'mois de terreur')", "Il s'est ouvert tout seul en une seconde"],
      reponse: "Sur une période de deux semaines (le 'mois de terreur')",
      explication: "C'était l'une des phases de déploiement les plus risquées de l'histoire spatiale."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qui a donné son nom au télescope ?",
      options: ["Un astronome célèbre", "Le deuxième administrateur de la NASA à l'époque du programme Apollo", "L'inventeur du laser", "Le premier homme sur la lune"],
      reponse: "Le deuxième administrateur de la NASA à l'époque du programme Apollo",
      explication: "James E. Webb a dirigé la NASA de 1961 à 1968."
    }
  ]
};
