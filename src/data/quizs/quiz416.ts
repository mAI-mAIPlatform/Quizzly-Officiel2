import { Quiz } from "@/types/quiz";

export const quiz416: Quiz = {
  id: "416",
  titre: "Sport : Le Badminton 🏸",
  description: "Vitesse, agilité et volant : devenez un pro du 'Bad'.",
  theme: "Sport",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle l'objet que les joueurs se renvoient ?",
      options: ["La balle", "La plume", "Le volant", "Le projectile"],
      reponse: "Le volant",
      explication: "Il peut être en plastique ou en plumes d'oie."
    },
    {
      id: "2",
      type: "qcm",
      question: "Le badminton est considéré comme le sport de raquette le plus...",
      options: ["Lent", "Rapide (en termes de vitesse de l'objet)", "Facile", "Vieux"],
      reponse: "Rapide (en termes de vitesse de l'objet)",
      explication: "Un volant peut atteindre plus de 400 km/h lors d'un smash professionnel."
    },
    {
      id: "3",
      type: "qcm",
      question: "En combien de sets (manches) se gagne normalement un match ?",
      options: ["1 seul", "2 sets gagnants", "3 sets gagnants", "5 sets gagnants"],
      reponse: "2 sets gagnants",
      explication: "Il faut gagner 2 sets de 21 points."
    },
    {
      id: "4",
      type: "qcm",
      question: "Si le volant touche le filet et retombe dans le camp de l'adversaire lors du service...",
      options: ["On doit rejouer le service (Let)", "Le service est perdu", "Le point continue normalement", "L'adversaire gagne deux points"],
      reponse: "Le point continue normalement",
      explication: "Contrairement au tennis, il n'y a pas de 'Let' au service si le volant passe."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on le service effectué de bas en haut ?",
      options: ["Service lifté", "Service à la cuillère", "Service réglementaire", "Service revers"],
      reponse: "Service réglementaire",
      explication: "Au badminton, le volant doit impérativement être frappé sous la taille lors du service."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel pays est l'un des plus grands dominateurs mondiaux du badminton ?",
      options: ["Le Danemark", "L'Indonésie", "La Chine", "Toutes ces réponses sont correctes"],
      reponse: "Toutes ces réponses sont correctes",
      explication: "L'Asie domine largement, mais le Danemark est une grande nation européenne."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le coup puissant frappé de haut en bas vers le sol adverse ?",
      options: ["Le Lob", "Le Smash", "L'Amorti", "Le Drive"],
      reponse: "Le Smash",
      explication: "C'est le coup d'attaque ultime."
    },
    {
      id: "8",
      type: "qcm",
      question: "Sur quel type de terrain le badminton se joue-t-il obligatoirement en compétition ?",
      options: ["En extérieur", "En intérieur (Gymnase)", "Sur gazon", "Sur la plage"],
      reponse: "En intérieur (Gymnase)",
      explication: "Le vent, même très léger, dévie trop facilement la trajectoire du volant."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quand le badminton est-il devenu officiellement un sport olympique ?",
      options: ["1896", "1992", "2012", "On ne l'a jamais admis"],
      reponse: "1992",
      explication: "C'était aux Jeux de Barcelone."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le poids approximatif d'un volant en plumes ?",
      options: ["5 grammes", "50 grammes", "100 grammes", "500 grammes"],
      reponse: "5 grammes",
      explication: "Il est extrêmement léger (environ 4,7 à 5,5 g)."
    }
  ]
};
