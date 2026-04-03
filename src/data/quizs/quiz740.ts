import { Quiz } from "@/types/quiz";

export const quiz740: Quiz = {
  id: "740",
  titre: "Technologie : Les Objets Techniques ⚙️",
  description: "Comprendre comment les objets sont conçus et à quoi ils servent.",
  theme: "Technologie",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que la fonction d'usage d'un objet ?",
      options: ["À quoi il sert", "Comment il est fabriqué", "Combien il coûte", "Sa couleur"],
      reponse: "À quoi il sert",
      explication: "Exemple : la fonction d'usage d'un vélo est de se déplacer."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces matériaux est d'origine minérale ?",
      options: ["Le bois", "Le plastique", "Le fer", "Le cuir"],
      reponse: "Le fer",
      explication: "Il est extrait de minerais dans le sol."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un prototype est le premier exemplaire d'un objet avant sa fabrication en série.",
      reponse: "Vrai",
      explication: "Il sert à tester si l'objet fonctionne bien."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel document liste toutes les contraintes à respecter pour créer un objet ?",
      reponse: "Cahier des charges",
      explication: "Il définit les besoins, le budget, la sécurité, etc."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel matériau est principalement issu du pétrole ?",
      options: ["Le verre", "Le plastique", "L'aluminium", "Le papier"],
      reponse: "Le plastique",
      explication: "C'est une transformation chimique du pétrole."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Un robot peut fonctionner sans programme informatique.",
      reponse: "Faux",
      explication: "C'est le programme qui lui donne ses instructions."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la principale fonction d'une éolienne ?",
      options: ["Décorer le paysage", "Produire de l'électricité", "Arrêter le vent", "Pomper de l'eau"],
      reponse: "Produire de l'électricité",
      explication: "Elle transforme l'énergie du vent en électricité."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le recyclage d'un objet pour lui donner une nouvelle fonction ?",
      reponse: "Upcycling",
      explication: "Ou surcyclage (valorisation des déchets)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle pièce d'un vélo transmet la force des pédales à la roue ?",
      options: ["Le guidon", "La chaîne", "La selle", "Le garde-boue"],
      reponse: "La chaîne",
      explication: "C'est un système de transmission de mouvement."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'impact environnemental d'un objet doit être pris en compte dès sa conception.",
      reponse: "Vrai",
      explication: "C'est ce qu'on appelle l'écoconception."
    }
  ]
};
