import { Quiz } from "@/types/quiz";

export const quiz850: Quiz = {
  id: "850",
  titre: "Inventions : Internet 🌐📡",
  description: "Découvrez l'histoire du réseau mondial qui relie tous les ordinateurs.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelait l'ancêtre d'Internet créé par l'armée américaine ?",
      options: ["Google-Net", "ARPANET", "Intranet", "Spider-Web"],
      reponse: "ARPANET",
      explication: "Créé à la fin des années 60 pour de la recherche militaire et universitaire."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui a inventé le 'World Wide Web' (WWW) en 1989 au CERN ?",
      options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Larry Page"],
      reponse: "Tim Berners-Lee",
      explication: "Il a inventé le système de pages reliées par des liens (hypertexte)."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Internet et le Web, c'est exactement la même chose.",
      reponse: "Faux",
      explication: "Internet est le réseau de câbles et de machines. Le Web est l'un des services qui circulent dessus (avec les mails par exemple)."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on le texte souligné sur lequel on clique pour changer de page ?",
      reponse: "Lien",
      explication: "Ou lien hypertexte."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'une adresse IP ?",
      options: ["Le nom de l'utilisateur", "Le numéro d'identification d'une machine sur le réseau", "Une rue où se trouve un ordinateur", "Un mot de passe"],
      reponse: "Le numéro d'identification d'une machine sur le réseau",
      explication: "Chaque appareil connecté en a une (ex: 192.168.0.1)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Google a été le tout premier moteur de recherche sur Internet.",
      reponse: "Faux",
      explication: "Il y en a eu d'autres avant (comme Altavista ou Yahoo)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle technologie permet de se connecter à Internet sans fil à courte distance ?",
      options: ["La 4G", "Le Wi-Fi", "L'ADSL", "Le satellite"],
      reponse: "Le Wi-Fi",
      explication: "Son nom vient de 'Wireless Fidelity'."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le réseau français d'avant Internet, qui passait par le téléphone ?",
      reponse: "Minitel",
      explication: "Un petit boîtier avec un écran qui a eu beaucoup de succès en France."
    },
    {
      id: "9",
      type: "qcm",
      question: "Où se trouvent physiquement les sites web que nous consultons ?",
      options: ["Dans l'air", "Sur des serveurs (ordinateurs puissants allumés 24h/24)", "À l'intérieur de notre écran", "Dans les satellites uniquement"],
      reponse: "Sur des serveurs (ordinateurs puissants allumés 24h/24)",
      explication: "Ils sont stockés dans de grands centres de données (Data Centers)."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le premier message envoyé sur Internet était 'LOGIN'.",
      reponse: "Faux",
      explication: "C'était 'LO'. Le système a planté après les deux premières lettres du mot 'LOGIN' !"
    }
  ]
};
