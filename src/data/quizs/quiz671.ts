import { Quiz } from "@/types/quiz";

export const quiz671: Quiz = {
  id: "671",
  titre: "Numérique : Le Matériel Informatique 💻",
  description: "Apprenez à reconnaître les pièces de votre ordinateur.",
  theme: "Numérique",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le 'cerveau' de l'ordinateur qui exécute les calculs ?",
      options: ["L'écran", "Le processeur (CPU)", "Le clavier", "L'imprimante"],
      reponse: "Le processeur (CPU)",
      explication: "C'est lui qui traite toutes les informations."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel composant sert à stocker tes fichiers (photos, jeux) de façon permanente ?",
      options: ["La mémoire vive (RAM)", "Le disque dur (ou SSD)", "La souris", "Le haut-parleur"],
      reponse: "Le disque dur (ou SSD)",
      explication: "Le SSD est une version moderne et beaucoup plus rapide que le vieux disque dur."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on la mémoire temporaire que l'ordinateur utilise pour travailler vite ?",
      options: ["La mémoire RAM", "Le lecteur CD", "La clé USB", "La batterie"],
      reponse: "La mémoire RAM",
      explication: "Plus on a de RAM, plus on peut ouvrir de logiciels en même temps sans ralentir."
    },
    {
      id: "4",
      type: "qcm",
      question: "Lequel de ces objets est un périphérique de 'sortie' (qui montre ou sort l'information) ?",
      options: ["Le clavier", "La souris", "Le moniteur (écran)", "Le scanner"],
      reponse: "Le moniteur (écran)",
      explication: "L'écran affiche les résultats du travail de l'ordinateur."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle pièce permet de connecter tous les composants entre eux à l'intérieur de l'unité centrale ?",
      options: ["La carte mère", "La carte graphique", "L'alimentation", "Le boîtier"],
      reponse: "La carte mère",
      explication: "C'est le grand circuit imprimé au fond de l'ordinateur."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel composant est spécialisé dans l'affichage des images et des jeux vidéo ?",
      options: ["La carte son", "La carte graphique (GPU)", "Le micro", "La webcam"],
      reponse: "La carte graphique (GPU)",
      explication: "Elle est essentielle pour les joueurs et les créateurs de vidéos."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le petit appareil mobile qui permet de déplacer le curseur sur l'écran ?",
      options: ["Le joystick", "La souris", "Le trackpad", "La manette"],
      reponse: "La souris",
      explication: "Elle peut être filaire ou sans fil (Bluetooth)."
    },
    {
      id: "8",
      type: "qcm",
      question: "À quoi sert l'alimentation d'un ordinateur ?",
      options: ["À lui donner à manger", "À transformer l'électricité de la prise pour les composants", "À refroidir le processeur", "À se connecter à Internet"],
      reponse: "À transformer l'électricité de la prise pour les composants",
      explication: "Sans elle, aucun composant ne recevrait de courant."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'un ordinateur 'tout-en-un' ?",
      options: ["Un ordinateur qui fait aussi le café", "Un ordinateur où l'unité centrale est cachée derrière l'écran", "Un ordinateur portable très lourd", "Une tablette"],
      reponse: "Un ordinateur où l'unité centrale est cachée derrière l'écran",
      explication: "Exemple : l'iMac."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on les ports rectangulaires très courants pour brancher des clés ou des câbles ?",
      options: ["HDMI", "USB", "Ethernet", "Jack"],
      reponse: "USB",
      explication: "Universal Serial Bus. C'est la norme la plus répandue pour brancher des périphériques."
    }
  ]
};
