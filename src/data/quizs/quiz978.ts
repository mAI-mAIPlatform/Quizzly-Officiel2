import { Quiz } from "@/types/quiz";

export const quiz978: Quiz = {
  id: "978",
  titre: "Inventions : Internet et le Web 🌐🖱️",
  description: "Découvrez le réseau mondial qui a changé notre façon de communiquer.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelait l'ancêtre d'Internet créé pour l'armée américaine en 1969 ?",
      options: ["Google", "ARPANET", "Facebook", "Wifi"],
      reponse: "ARPANET",
      explication: "C'était le premier réseau à relier plusieurs ordinateurs à distance."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui a inventé le 'World Wide Web' (le Web) en 1889 au CERN ?",
      options: ["Bill Gates", "Tim Berners-Lee", "Mark Zuckerberg", "Jeff Bezos"],
      reponse: "Tim Berners-Lee",
      explication: "Il a inventé les pages web, le HTML et les liens (hypertexte)."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Internet et le Web, c'est exactement la même chose.",
      reponse: "Faux",
      explication: "Internet est le réseau de câbles et d'ordinateurs. Le Web est l'un des services qui fonctionne grâce à Internet (comme les mails)."
    },
    {
      id: "4",
      type: "courte",
      question: "Que signifie le sigle 'WWW' que l'on voit au début des adresses de sites internet ?",
      reponse: "World Wide Web",
      explication: "Cela signifie 'Toile d'Araignée Mondiale'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel navigateur internet était le plus populaire dans les années 90 avant Internet Explorer ?",
      options: ["Chrome", "Mosaic (ou Netscape)", "Safari", "Firefox"],
      reponse: "Mosaic (ou Netscape)",
      explication: "Netscape Navigator a été le premier navigateur grand public très utilisé."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le premier message envoyé sur Internet était 'LOGIN', mais l'ordinateur a planté après les deux premières lettres 'LO'.",
      reponse: "Vrai",
      explication: "C'était un début timide mais historique en 1969 !"
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le petit texte souligné sur lequel on clique pour aller vers une autre page ?",
      options: ["Un bouton", "Un lien hypertexte", "Un raccourci", "Un tag"],
      reponse: "Un lien hypertexte",
      explication: "C'est la base de la navigation sur le Web."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le système qui permet de se connecter à Internet sans fil grâce à des ondes radio ?",
      reponse: "Wi-Fi",
      explication: "Wireless Fidelity."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel moteur de recherche est devenu le plus utilisé au monde depuis la fin des années 90 ?",
      options: ["Yahoo", "Google", "Bing", "Altavista"],
      reponse: "Google",
      explication: "Il a été créé par Larry Page et Sergey Brin dans un garage."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "La plupart d'Internet passe par des satellites dans l'espace.",
      reponse: "Faux",
      explication: "Plus de 95% du trafic internet mondial passe par d'immenses câbles de fibre optique posés au fond des océans."
    }
  ]
};
