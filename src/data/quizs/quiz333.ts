import { Quiz } from "@/types/quiz";

export const quiz333: Quiz = {
  id: "333",
  titre: "Informatique : Les Systèmes d'Exploitation 🖥️",
  description: "De Windows à Linux, apprenez comment les logiciels gèrent votre matériel.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le système d'exploitation le plus utilisé sur les ordinateurs personnels ?",
      options: ["Linux", "macOS", "Windows", "ChromeOS"],
      reponse: "Windows",
      explication: "Créé par Microsoft, il équipe la grande majorité des PC mondiaux."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le système d'exploitation libre dont le logo est un manchot ?",
      options: ["Unix", "Linux", "Solaris", "FreeBSD"],
      reponse: "Linux",
      explication: "Le manchot s'appelle Tux."
    },
    {
      id: "3",
      type: "qcm",
      question: "Lequel de ces systèmes est utilisé sur les iPhone ?",
      options: ["Android", "Windows Mobile", "iOS", "HarmonyOS"],
      reponse: "iOS",
      explication: "C'est un système fermé et exclusif aux produits Apple."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel est le 'cœur' d'un système d'exploitation, qui gère la mémoire et le processeur ?",
      options: ["La Coque (Shell)", "Le Noyau (Kernel)", "L'Interface (GUI)", "Le BIOS"],
      reponse: "Le Noyau (Kernel)",
      explication: "Il fait le pont entre le matériel et les logiciels."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel système d'exploitation mobile appartient à Google ?",
      options: ["iOS", "Symbian", "Android", "BlackBerry OS"],
      reponse: "Android",
      explication: "Il est basé sur un noyau Linux et équipe de nombreuses marques de téléphones."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que signifie 'GUI' ?",
      options: ["Global User Information", "Graphical User Interface", "General Unit Input", "Grand Utilisateur Informatique"],
      reponse: "Graphical User Interface",
      explication: "C'est l'interface avec des icônes et des fenêtres que l'on utilise à la souris."
    },
    {
      id: "7",
      type: "qcm",
      question: "Lequel de ces systèmes a été créé par Apple pour ses ordinateurs ?",
      options: ["Windows 11", "Ubuntu", "macOS", "Debian"],
      reponse: "macOS",
      explication: "Basé sur une architecture Unix, il est réputé pour sa stabilité et son design."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce que la 'Ligne de commande' (ou Terminal) ?",
      options: ["Une file d'attente au magasin", "Une interface texte permettant de taper des ordres directs", "Le câble de l'écran", "Un programme de dessin"],
      reponse: "Une interface texte permettant de taper des ordres directs",
      explication: "Très utilisée par les développeurs et administrateurs système."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel système d'exploitation équipe majoritairement les serveurs du Web ?",
      options: ["Windows Server", "Linux", "macOS Server", "AmigaOS"],
      reponse: "Linux",
      explication: "Grâce à sa sécurité, sa performance et sa gratuité (souvent)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment s'appelait l'ancêtre de Windows qui fonctionnait uniquement en mode texte ?",
      options: ["CP/M", "MS-DOS", "Pascal", "Basic"],
      reponse: "MS-DOS",
      explication: "Microsoft Disk Operating System."
    }
  ]
};
