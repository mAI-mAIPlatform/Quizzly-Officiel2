import { Quiz } from "@/types/quiz";

export const quiz433: Quiz = {
  id: "433",
  titre: "Informatique : La Révolution Blockchain ⛓️💰",
  description: "Comprenez la technologie derrière les crypto-monnaies et au-delà.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une Blockchain (chaîne de blocs) ?",
      options: ["Une base de données centralisée", "Un registre numérique décentralisé, transparent et infalsifiable", "Un nouveau type de disque dur", "Une application de messagerie"],
      reponse: "Un registre numérique décentralisé, transparent et infalsifiable",
      explication: "Elle permet de stocker et transmettre des informations sans organe central de contrôle."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qui (ou quel groupe) est le créateur anonyme du Bitcoin en 2008 ?",
      options: ["Vitalik Buterin", "Satoshi Nakamoto", "Elon Musk", "Mark Zuckerberg"],
      reponse: "Satoshi Nakamoto",
      explication: "Son identité réelle reste l'un des plus grands mystères du numérique."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on le processus consistant à valider des transactions sur une blockchain en échange d'une récompense ?",
      options: ["Le surf", "Le minage", "Le codage", "Le stockage"],
      reponse: "Le minage",
      explication: "Les 'mineurs' utilisent la puissance de calcul pour sécuriser le réseau."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est la deuxième blockchain la plus connue, célèbre pour ses 'Smart Contracts' ?",
      options: ["Litecoin", "Ethereum", "Ripple", "Dogecoin"],
      reponse: "Ethereum",
      explication: "Elle permet d'exécuter des programmes autonomes sur la blockchain."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'un 'NFT' ?",
      options: ["Un nouveau format de texte", "Un jeton non fongible (certificat de propriété numérique unique)", "Une norme de réseau sans fil", "Une monnaie papier numérique"],
      reponse: "Un jeton non fongible (certificat de propriété numérique unique)",
      explication: "Non-Fungible Token. Il permet de rendre un objet numérique unique et non interchangeable."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que signifie le terme 'décentralisation' dans le contexte d'une blockchain ?",
      options: ["Que tout est contrôlé par une banque centrale", "Que l'information est répartie sur des milliers d'ordinateurs indépendants", "Que le réseau s'éteint la nuit", "Que personne ne peut l'utiliser"],
      reponse: "Que l'information est répartie sur des milliers d'ordinateurs indépendants",
      explication: "Cela rend le système beaucoup plus résistant à la censure et aux pannes."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le système de sécurité qui empêche de modifier un bloc déjà enregistré ?",
      options: ["Le mot de passe", "Le hachage (Hash)", "Le pare-feu", "L'antivirus"],
      reponse: "Le hachage (Hash)",
      explication: "Chaque bloc contient l'empreinte numérique du bloc précédent, créant une chaîne indestructible."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Stablecoin' ?",
      options: ["Une monnaie qui ne bouge jamais", "Une crypto-monnaie indexée sur une monnaie réelle (comme le Dollar)", "Une monnaie réservée aux chevaux", "Une monnaie très risquée"],
      reponse: "Une crypto-monnaie indexée sur une monnaie réelle (comme le Dollar)",
      explication: "Cela permet de limiter la volatilité (la variation brutale des cours)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle le portefeuille numérique où l'on stocke ses clés privées pour accéder à ses actifs ?",
      options: ["Un compte en banque", "Un Wallet", "Un Cloud", "Un Drive"],
      reponse: "Un Wallet",
      explication: "Il peut être logiciel (application) ou matériel (clé USB sécurisée)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans quel secteur, hors finance, la blockchain pourrait révolutionner la traçabilité ?",
      options: ["L'agroalimentaire (suivre un produit du champ à l'assiette)", "La logistique", "Le vote électronique", "Toutes ces réponses sont correctes"],
      reponse: "Toutes ces réponses sont correctes",
      explication: "La blockchain a des applications immenses partout où la confiance et la transparence sont nécessaires."
    }
  ]
};
