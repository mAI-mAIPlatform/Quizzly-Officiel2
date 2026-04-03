import { Quiz } from "@/types/quiz";

export const quiz564: Quiz = {
  id: "564",
  titre: "Physique-Chimie : Dangers de l'Électricité ⚠️",
  description: "Apprenez les gestes de sécurité essentiels pour éviter les accidents domestiques.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que l'électrisation ?",
      options: ["Le passage du courant à travers le corps humain", "La mort due à l'électricité", "Le chargement d'une pile", "L'invention de l'ampoule"],
      reponse: "Le passage du courant à travers le corps humain",
      explication: "Si l'électrisation entraîne la mort, on parle alors d'électrocution."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel organe vital peut s'arrêter suite à une forte décharge électrique ?",
      options: ["L'estomac", "Le foie", "Le coeur", "La rate"],
      reponse: "Le coeur",
      explication: "Le coeur fonctionne avec des signaux électriques naturels qui sont perturbés par un courant extérieur."
    },
    {
      id: "3",
      type: "qcm",
      question: "Pourquoi est-il extrêmement dangereux d'utiliser un appareil électrique près de la baignoire ?",
      options: ["L'appareil risque de se noyer", "L'eau diminue la résistance de la peau et facilite le passage du courant vers la terre à travers notre corps", "L'eau sale salit l'appareil", "Ça fait trop de bruit"],
      reponse: "L'eau diminue la résistance de la peau et facilite le passage du courant vers la terre à travers notre corps",
      explication: "Le contact entre l'eau, le corps et le secteur est souvent mortel."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel dispositif dans la maison coupe automatiquement le courant en cas de problème (surintensité ou court-circuit) ?",
      options: ["L'interrupteur", "Le disjoncteur (ou fusible)", "La multiprise", "Le compteur Linky"],
      reponse: "Le disjoncteur (ou fusible)",
      explication: "C'est une protection indispensable pour éviter les incendies."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quoi sert la 'prise de terre' (le petit picot métallique qui sort de la prise) ?",
      options: ["À faire tenir la prise", "À évacuer le courant de fuite vers le sol pour nous protéger", "À décorer", "À économiser l'énergie"],
      reponse: "À évacuer le courant de fuite vers le sol pour nous protéger",
      explication: "Elle évite que la carcasse métallique d'un appareil défectueux ne nous électrise."
    },
    {
      id: "6",
      type: "qcm",
      question: "Lequel de ces gestes est TRES dangereux ?",
      options: ["Débrancher une lampe avant de changer l'ampoule", "Introduire des objets métalliques dans une prise électrique", "Éteindre les lumières en partant", "Toucher un fil entouré de plastique intact"],
      reponse: "Introduire des objets métalliques dans une prise électrique",
      explication: "On touche directement le secteur (230V), ce qui est mortel."
    },
    {
      id: "7",
      type: "qcm",
      question: "Une pile de 4,5V est-elle dangereuse pour le corps humain ?",
      options: ["Oui, c'est mortel", "Non, la tension est trop faible pour traverser la peau", "Seulement si elle est rouge", "Uniquement si on l'avale"],
      reponse: "Non, la tension est trop faible pour traverser la peau",
      explication: "On ne risque rien en touchant les bornes d'une petite pile. Le danger commence au-dessus de 24V ou 50V selon l'humidité."
    },
    {
      id: "8",
      type: "qcm",
      question: "Que risque-t-on si on branche trop d'appareils sur une seule multiprise ?",
      options: ["Rien, c'est fait pour", "Une surchauffe des fils et un risque d'incendie", "L'électricité va s'épuiser", "Les appareils vont devenir plus rapides"],
      reponse: "Une surchauffe des fils et un risque d'incendie",
      explication: "Le courant total demandé est trop fort pour les fils de la multiprise."
    },
    {
      id: "9",
      type: "qcm",
      question: "Si vous voyez une personne en train de s'électriser (collée au courant), que devez-vous faire en premier ?",
      options: ["La toucher pour la tirer", "Couper immédiatement le courant au disjoncteur principal sans la toucher", "Lui jeter de l'eau", "Appeler un ami"],
      reponse: "Couper immédiatement le courant au disjoncteur principal sans la toucher",
      explication: "Si vous la touchez sans couper le courant, vous serez électrisé aussi."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel symbole indique un danger électrique sur une armoire ou un poteau ?",
      options: ["Une tête de mort", "Un éclair noir ou rouge dans un triangle jaune", "Une croix rouge", "Un rond bleu"],
      reponse: "Un éclair noir ou rouge dans un triangle jaune",
      explication: "C'est le symbole international du danger haute tension."
    }
  ]
};
