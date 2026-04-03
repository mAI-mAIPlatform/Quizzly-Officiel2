import { Quiz } from "@/types/quiz";

export const quiz771: Quiz = {
  id: "771",
  titre: "Informatique : C'est quoi un ordinateur ? 💻",
  description: "Découvrir les composants essentiels qui font fonctionner une machine.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel composant est considéré comme le 'cerveau' de l'ordinateur ?",
      options: ["La mémoire RAM", "Le processeur (CPU)", "Le disque dur", "Le clavier"],
      reponse: "Le processeur (CPU)",
      explication: "Il effectue tous les calculs nécessaires au fonctionnement."
    },
    {
      id: "2",
      type: "qcm",
      question: "Où sont stockés tes fichiers (photos, vidéos) de façon permanente ?",
      options: ["Dans la RAM", "Sur le disque dur (ou SSD)", "Sur l'écran", "Dans la souris"],
      reponse: "Sur le disque dur (ou SSD)",
      explication: "C'est la mémoire de stockage à long terme."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le 'Hardware' désigne la partie physique (matérielle) de l'ordinateur.",
      reponse: "Vrai",
      explication: "Par opposition au 'Software' qui désigne les logiciels et programmes."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la mémoire vive qui stocke les données temporairement pendant qu'on travaille ?",
      reponse: "RAM",
      explication: "Plus on en a, plus l'ordinateur peut faire de choses en même temps."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces objets est un périphérique de sortie ?",
      options: ["La souris", "Le clavier", "L'imprimante", "Le scanner"],
      reponse: "L'imprimante",
      explication: "Elle sort de l'information de l'ordinateur vers l'extérieur."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Un système d'exploitation (ex: Windows, macOS) est indispensable pour utiliser un ordinateur.",
      reponse: "Vrai",
      explication: "C'est lui qui fait le lien entre l'utilisateur et le matériel."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la plus petite unité d'information en informatique ?",
      options: ["L'octet", "Le pixel", "Le bit", "Le méga"],
      reponse: "Le bit",
      explication: "C'est un 0 ou un 1."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la grande carte où tous les composants sont branchés ?",
      reponse: "Carte mère",
      explication: "C'est la base de tout ordinateur."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel composant s'occupe d'afficher les images sur l'écran ?",
      options: ["La carte son", "La carte graphique", "L'alimentation", "Le ventilateur"],
      reponse: "La carte graphique",
      explication: "Très importante pour les jeux vidéo et le montage vidéo."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Un smartphone est un petit ordinateur.",
      reponse: "Vrai",
      explication: "Il possède un processeur, de la mémoire et un système d'exploitation."
    }
  ]
};
