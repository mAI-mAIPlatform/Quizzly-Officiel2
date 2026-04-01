import { Quiz } from "@/types/quiz";

export const quiz360: Quiz = {
  id: "360",
  titre: "Technologie : Blockchain et Crypto ₿",
  description: "Comprenez les bases de la finance décentralisée et du futur du Web.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle a été la première crypto-monnaie créée (en 2009) ?",
      options: ["Ethereum", "Bitcoin", "Litecoin", "Ripple"],
      reponse: "Bitcoin",
      explication: "Il a été créé pour être une monnaie numérique décentralisée sans banque centrale."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel pseudonyme est utilisé par l'inventeur (ou les inventeurs) du Bitcoin ?",
      options: ["Elon Musk", "Satoshi Nakamoto", "Vitalik Buterin", "Linus Torvalds"],
      reponse: "Satoshi Nakamoto",
      explication: "Son identité réelle reste l'un des plus grands mystères d'Internet."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'est-ce qu'une 'Blockchain' ?",
      options: ["Un coffre-fort numérique", "Une base de données partagée et sécurisée contenant l'historique de tous les échanges", "Un type de câble internet", "Un logiciel de trading"],
      reponse: "Une base de données partagée et sécurisée contenant l'historique de tous les échanges",
      explication: "Elle est infalsifiable car chaque bloc est lié au précédent par cryptographie."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on le processus de validation des transactions qui crée de nouveaux jetons ?",
      options: ["Le jardinage", "Le minage (Mining)", "Le codage", "La spéculation"],
      reponse: "Le minage (Mining)",
      explication: "Les 'mineurs' utilisent la puissance de calcul de leurs ordinateurs pour sécuriser le réseau."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que signifie 'NFT' ?",
      options: ["New Financial Tool", "Non-Fungible Token (Jeton non fongible)", "Network File Transfer", "National Future Tech"],
      reponse: "Non-Fungible Token (Jeton non fongible)",
      explication: "C'est un certificat de propriété numérique unique, souvent utilisé pour l'art numérique."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle plateforme a popularisé les 'Smart Contracts' (Contrats intelligents) ?",
      options: ["Bitcoin", "Ethereum", "Dogecoin", "Solana"],
      reponse: "Ethereum",
      explication: "Elle permet de créer des applications décentralisées (dApps) au-dessus de sa blockchain."
    },
    {
      id: "7",
      type: "qcm",
      question: "Où stocke-t-on ses crypto-monnaies de manière sécurisée ?",
      options: ["Sur une clé USB classique", "Dans un Wallet (Portefeuille numérique)", "Dans un dossier Docs", "On ne les stocke pas"],
      reponse: "Dans un Wallet (Portefeuille numérique)",
      explication: "Il peut s'agir d'une application ou d'un appareil physique (Hardware Wallet)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la limite totale de Bitcoins qui pourront être créés ?",
      options: ["1 million", "21 millions", "100 millions", "Pas de limite"],
      reponse: "21 millions",
      explication: "Cette rareté programmée est l'une des raisons pour lesquelles il est comparé à 'l'or numérique'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie être 'décentralisé' pour une monnaie ?",
      options: ["Qu'elle n'a pas de billets", "Qu'elle n'est contrôlée par aucune autorité centrale (banque ou gouvernement)", "Qu'elle ne fonctionne qu'à la campagne", "Qu'elle est gratuite"],
      reponse: "Qu'elle n'est contrôlée par aucune autorité centrale (banque ou gouvernement)",
      explication: "Ce sont les utilisateurs du réseau qui valident les échanges."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on la chute brutale du cours d'une crypto-monnaie ?",
      options: ["Un Pump", "Un Crash (ou Dip)", "Un Moon", "Un Fork"],
      reponse: "Un Crash (ou Dip)",
      explication: "Le marché des cryptos est connu pour sa très forte volatilité."
    }
  ]
};
