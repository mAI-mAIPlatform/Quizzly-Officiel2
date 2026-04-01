import { Quiz } from "@/types/quiz";

export const quiz330: Quiz = {
  id: "330",
  titre: "Technologie : La Blockchain et les Cryptos ₿",
  description: "Décryptez les bases de la technologie qui veut transformer la finance et la confiance.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que la Blockchain ?",
      options: ["Une chaîne de magasins", "Un registre numérique sécurisé et décentralisé", "Une nouvelle batterie", "Un type de câble"],
      reponse: "Un registre numérique sécurisé et décentralisé",
      explication: "Les informations y sont stockées de manière chronologique et immuable."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la première cryptomonnaie jamais créée en 2009 ?",
      options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
      reponse: "Bitcoin",
      explication: "Elle a été lancée juste après la crise financière de 2008."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment s'appelle le créateur mystérieux du Bitcoin ?",
      options: ["Elon Musk", "Vitalik Buterin", "Satoshi Nakamoto", "Mark Zuckerberg"],
      reponse: "Satoshi Nakamoto",
      explication: "Personne ne sait s'il s'agit d'une personne seule ou d'un groupe."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que signifie 'décentralisé' ?",
      options: ["Le centre est fermé", "Il n'y a pas d'organe de contrôle central (comme une banque)", "C'est stocké au milieu", "C'est gratuit"],
      reponse: "Il n'y a pas d'organe de contrôle central (comme une banque)",
      explication: "Le réseau est géré par tous les ordinateurs connectés ensemble."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Wallet' en crypto ?",
      options: ["Une montre", "Un portefeuille numérique pour stocker ses clés", "Une carte bancaire", "Un sac à dos"],
      reponse: "Un portefeuille numérique pour stocker ses clés",
      explication: "Il permet d'envoyer et de recevoir des cryptomonnaies."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on le processus de création de nouveaux Bitcoins ?",
      options: ["L'agriculture", "Le minage", "La pêche", "L'impression"],
      reponse: "Le minage",
      explication: "Des ordinateurs puissants résolvent des énigmes mathématiques pour sécuriser le réseau."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un NFT ?",
      options: ["Un Nouveau Fichier Texte", "Un Jeton Non Fongible (unique)", "Un type de virus", "Un format d'image"],
      reponse: "Un Jeton Non Fongible (unique)",
      explication: "C'est un certificat numérique d'authenticité et de propriété unique sur la blockchain."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle blockchain est célèbre pour ses 'Smart Contracts' (contrats intelligents) ?",
      options: ["Bitcoin", "Ethereum", "DogeCoin", "Cardano"],
      reponse: "Ethereum",
      explication: "Elle permet de créer des applications décentralisées entières."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie 'le halving' du Bitcoin ?",
      options: ["La division par deux du prix", "La division par deux de la récompense des mineurs", "L'arrêt du réseau", "L'ouverture du marché"],
      reponse: "La division par deux de la récompense des mineurs",
      explication: "Cela arrive tous les 4 ans environ pour réduire la création de nouveaux Bitcoins."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est l'avantage principal de la blockchain selon ses partisans ?",
      options: ["C'est joli", "La transparence et la sécurité sans besoin de tiers de confiance", "Ça remplace le papier", "C'est obligatoire"],
      reponse: "La transparence et la sécurité sans besoin de tiers de confiance",
      explication: "Les transactions sont vérifiables par tous et virtuellement infalsifiables."
    }
  ]
};
