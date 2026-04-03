import { Quiz } from "@/types/quiz";

export const quiz650: Quiz = {
  id: "650",
  titre: "Inventions : Internet & le Web 🌐",
  description: "D'ARPANET à nos smartphones.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'Internet à l'origine ?",
      options: ["Un logiciel de dessin", "Un réseau de réseaux d'ordinateurs mondial", "Un site web", "Une marque d'ordinateur"],
      reponse: "Un réseau de réseaux d'ordinateurs mondial",
      explication: "Il permet de connecter des milliards d'appareils entre eux."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui est considéré comme l'inventeur du World Wide Web (WWW) en 1989 ?",
      options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
      reponse: "Tim Berners-Lee",
      explication: "Il travaillait au CERN et voulait faciliter le partage d'informations entre chercheurs."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que signifie le sigle 'URL' ?",
      options: ["L'adresse d'une page web", "Le nom de l'ordinateur", "Un message secret", "L'heure de connexion"],
      reponse: "L'adresse d'une page web",
      explication: "Exemple : https://www.google.com est une URL."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel logiciel utilise-t-on pour consulter des sites web ?",
      options: ["Un antivirus", "Un navigateur (Browser)", "Un tableur", "Un jeu vidéo"],
      reponse: "Un navigateur (Browser)",
      explication: "Exemples : Chrome, Firefox, Safari, Edge."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on un texte ou une image sur laquelle on clique pour aller sur une autre page ?",
      options: ["Une photo", "Un lien hypertexte", "Un bouton stop", "Une publicité"],
      reponse: "Un lien hypertexte",
      explication: "C'est la base de la navigation sur le Web."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel service permet d'envoyer des messages écrits instantanément via Internet ?",
      options: ["Le courrier postal", "L'e-mail (ou courriel)", "La radio", "Le télégramme"],
      reponse: "L'e-mail (ou courriel)",
      explication: "Le premier e-mail a été envoyé par Ray Tomlinson en 1971."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un 'moteur de recherche' ?",
      options: ["Le moteur d'un serveur", "Un site qui permet d'aider à trouver des informations sur le web", "Un virus", "Un chargeur"],
      reponse: "Un site qui permet d'aider à trouver des informations sur le web",
      explication: "Exemple : Google, Bing, DuckDuckGo."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on l'espace de stockage sur des serveurs distants ?",
      options: ["Le sous-sol", "Le Cloud (le nuage)", "La disquette", "Le carton"],
      reponse: "Le Cloud (le nuage)",
      explication: "Tes photos ou fichiers sont enregistrés sur des ordinateurs partout dans le monde."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie le 'S' dans 'HTTPS' ?",
      options: ["Super", "Sécurisé", "Standard", "Serveur"],
      reponse: "Sécurisé",
      explication: "Le cadenas dans la barre d'adresse indique que la connexion est cryptée."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel réseau sans fil permet de se connecter à Internet sans câble à courte distance ?",
      options: ["La 4G", "Le Wi-Fi", "Le Bluetooth", "La fibre optique"],
      reponse: "Le Wi-Fi",
      explication: "Il transmet les données par ondes radio."
    }
  ]
};
