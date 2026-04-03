import { Quiz } from "@/types/quiz";

export const quiz849: Quiz = {
  id: "849",
  titre: "Inventions : L'Ordinateur 💻⚙️",
  description: "Découvrez l'histoire des machines à calculer qui ont changé nos vies.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel mathématicien anglais est considéré comme l'un des 'pères de l'informatique' ?",
      options: ["Isaac Newton", "Alan Turing", "Stephen Hawking", "Albert Einstein"],
      reponse: "Alan Turing",
      explication: "Il a imaginé le fonctionnement théorique d'un ordinateur dès les années 30."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelait le premier ordinateur géant et électronique créé pendant la Seconde Guerre mondiale ?",
      options: ["L'iPhone", "L'ENIAC", "Le Game Boy", "Le Commodore 64"],
      reponse: "L'ENIAC",
      explication: "Il occupait une pièce entière et pesait 30 tonnes !"
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les premiers ordinateurs utilisaient des cartes perforées pour recevoir des ordres.",
      reponse: "Vrai",
      explication: "C'étaient des morceaux de carton avec des trous."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le petit cerveau de l'ordinateur qui exécute tous les calculs ?",
      reponse: "Processeur",
      explication: "Ou CPU en anglais."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle invention minuscule en 1947 a permis de rendre les ordinateurs beaucoup plus petits et puissants ?",
      options: ["La pile", "Le transistor", "L'écran LCD", "La souris"],
      reponse: "Le transistor",
      explication: "Il a remplacé les grosses lampes fragiles (tubes à vide)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'ordinateur ne comprend au fond que deux chiffres : 0 et 1.",
      reponse: "Vrai",
      explication: "C'est le langage binaire."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qui a fondé l'entreprise Microsoft, créatrice du système Windows ?",
      options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
      reponse: "Bill Gates",
      explication: "Avec son ami Paul Allen."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'autre grand pionnier, fondateur d'Apple ?",
      reponse: "Steve Jobs",
      explication: "Il a lancé l'Apple I et plus tard le Macintosh."
    },
    {
      id: "9",
      type: "qcm",
      question: "À quoi sert la 'mémoire vive' (RAM) d'un ordinateur ?",
      options: ["À garder les fichiers quand on éteint", "À faire des calculs rapides sur ce qu'on fait en ce moment", "À faire briller l'écran", "À refroidir le moteur"],
      reponse: "À faire des calculs rapides sur ce qu'on fait en ce moment",
      explication: "Elle est effacée dès qu'on éteint l'ordinateur."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'intelligence artificielle est un domaine très récent qui n'existait pas à l'époque d'Alan Turing.",
      reponse: "Faux",
      explication: "Alan Turing se posait déjà la question 'Les machines peuvent-elles penser ?' en 1950."
    }
  ]
};
