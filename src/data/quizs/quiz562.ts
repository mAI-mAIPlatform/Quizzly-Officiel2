import { Quiz } from "@/types/quiz";

export const quiz562: Quiz = {
  id: "562",
  titre: "Physique-Chimie : Circuits Électriques 💡",
  description: "Apprenez les bases pour allumer une lampe en toute sécurité.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quels sont les trois éléments minimum pour faire briller une lampe ?",
      options: ["Une pile, une lampe et des fils de connexion", "Une pile, un interrupteur et un tournevis", "Une lampe et de l'eau", "Deux piles et une règle"],
      reponse: "Une pile, une lampe et des fils de connexion",
      explication: "Il faut former une boucle fermée."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un élément qui fournit l'électricité (comme une pile) ?",
      options: ["Un récepteur", "Un générateur", "Un interrupteur", "Un fil"],
      reponse: "Un générateur",
      explication: "C'est la source d'énergie du circuit."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on un élément qui utilise l'électricité (comme une lampe) ?",
      options: ["Un générateur", "Un récepteur", "Un moteur", "Un interrupteur"],
      reponse: "Un récepteur",
      explication: "Il reçoit l'énergie électrique pour la transformer (en lumière, chaleur...)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Le courant électrique peut-il circuler dans un circuit ouvert ?",
      options: ["Oui", "Non", "Seulement si la pile est neuve", "Le jour seulement"],
      reponse: "Non",
      explication: "La boucle doit être continue (fermée) pour que le courant passe."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quoi sert un interrupteur ?",
      options: ["À fabriquer de l'électricité", "À ouvrir ou fermer le circuit facilement", "À changer la couleur de la lampe", "À rien"],
      reponse: "À ouvrir ou fermer le circuit facilement",
      explication: "Il agit comme un pont qui se lève ou s'abaisse."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on les deux points de branchement d'un dipôle ?",
      options: ["Les fiches", "Les bornes", "Les trous", "Les sommets"],
      reponse: "Les bornes",
      explication: "Une pile a une borne + et une borne -."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans quel sens circule le courant à l'extérieur de la pile ?",
      options: ["De la borne - vers la borne +", "De la borne + vers la borne -", "Dans les deux sens en même temps", "Il ne circule pas"],
      reponse: "De la borne + vers la borne -",
      explication: "C'est le sens conventionnel du courant."
    },
    {
      id: "8",
      type: "qcm",
      question: "Lequel de ces éléments est un générateur ?",
      options: ["Une lampe", "Un moteur", "Une batterie de voiture", "Un buzzer"],
      reponse: "Une batterie de voiture",
      explication: "Elle stocke et fournit l'électricité."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que se passe-t-il si on branche les deux bornes d'une pile directement par un fil (court-circuit) ?",
      options: ["La pile dure plus longtemps", "Le fil et la pile chauffent et peuvent prendre feu", "La lampe brille plus fort", "Rien"],
      reponse: "Le fil et la pile chauffent et peuvent prendre feu",
      explication: "C'est une situation dangereuse à éviter !"
    },
    {
      id: "10",
      type: "qcm",
      question: "Combien de bornes possède un 'dipôle' ?",
      options: ["1", "2", "3", "4"],
      reponse: "2",
      explication: "Le mot 'di-pôle' signifie deux pôles (ou deux bornes)."
    }
  ]
};
