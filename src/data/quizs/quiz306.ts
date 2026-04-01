import { Quiz } from "@/types/quiz";

export const quiz306: Quiz = {
  id: "306",
  titre: "Informatique : Les bases du Hardware 💻",
  description: "Savez-vous ce qui se cache à l'intérieur de votre ordinateur ?",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel composant est considéré comme le 'cerveau' de l'ordinateur ?",
      options: ["La RAM", "Le Disque Dur", "Le Processeur (CPU)", "La Carte Graphique"],
      reponse: "Le Processeur (CPU)",
      explication: "Il exécute les instructions des programmes."
    },
    {
      id: "2",
      type: "qcm",
      question: "À quoi sert la RAM ?",
      options: ["À stocker les fichiers pour toujours", "À refroidir l'ordinateur", "À stocker temporairement les données en cours d'utilisation", "À afficher l'image"],
      reponse: "À stocker temporairement les données en cours d'utilisation",
      explication: "Plus on en a, plus on peut faire de choses en même temps."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel type de stockage est le plus rapide ?",
      options: ["HDD (Disque dur magnétique)", "SSD (Disque à mémoire flash)", "Clé USB", "CD-ROM"],
      reponse: "SSD (Disque à mémoire flash)",
      explication: "Les SSD n'ont pas de pièces mobiles et sont beaucoup plus véloces."
    },
    {
      id: "4",
      type: "qcm",
      question: "Où sont branchés tous les composants de l'ordinateur ?",
      options: ["Sur l'alimentation", "Sur la carte mère", "Sur l'écran", "Sur le processeur"],
      reponse: "Sur la carte mère",
      explication: "C'est le circuit principal qui relie tout le monde."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle unité mesure la fréquence d'un processeur ?",
      options: ["Octets", "Watts", "Hertz (ou GigaHertz)", "Pixels"],
      reponse: "Hertz (ou GigaHertz)",
      explication: "Cela représente le nombre de cycles calculés par seconde."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle pièce est essentielle pour les jeux vidéo gourmands ?",
      options: ["La Carte Son", "La Carte Graphique (GPU)", "Le Lecteur DVD", "Le Pavé tactile"],
      reponse: "La Carte Graphique (GPU)",
      explication: "Elle gère tous les calculs d'images en 3D."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce que l'alimentation (PSU) ?",
      options: ["Un logiciel de cuisine", "Le boîtier qui fournit l'électricité", "Une batterie externe", "Une prise murale"],
      reponse: "Le boîtier qui fournit l'électricité",
      explication: "Elle transforme le courant du secteur pour les composants."
    },
    {
      id: "8",
      type: "qcm",
      question: "Combien y a-t-il de Bits dans un Octet ?",
      options: ["2", "4", "8", "16"],
      reponse: "8",
      explication: "Un octet (byte) est composé de 8 bits (0 ou 1)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel port est utilisé pour brancher un écran en haute définition ?",
      options: ["USB", "Jack", "HDMI", "Ethernet"],
      reponse: "HDMI",
      explication: "Le HDMI transporte à la fois l'image et le son."
    },
    {
      id: "10",
      type: "qcm",
      question: "À quoi sert un ventilateur ou un ventirad ?",
      options: ["À faire décoller l'ordinateur", "À évacuer la chaleur des composants", "À nettoyer la poussière", "À faire de la musique"],
      reponse: "À évacuer la chaleur des composants",
      explication: "Sans refroidissement, les composants grilleraient rapidement."
    }
  ]
};
