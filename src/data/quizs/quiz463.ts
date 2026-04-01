import { Quiz } from "@/types/quiz";

export const quiz463: Quiz = {
  id: "463",
  titre: "Informatique : L'Internet des Objets (IoT) 🏠🌐",
  description: "Explorez le monde où tout devient connecté, de votre frigo à votre ville.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie l'acronyme 'IoT' ?",
      options: ["Internet of Tools", "Internet of Things (Internet des Objets)", "Input Output Technology", "Internal Operating Time"],
      reponse: "Internet of Things (Internet des Objets)",
      explication: "Il désigne le réseau d'objets physiques dotés de capteurs et connectés à Internet."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces objets est un exemple typique d'IoT domestique ?",
      options: ["Une radio classique", "Un thermostat intelligent (connecté)", "Une chaise en bois", "Un livre papier"],
      reponse: "Un thermostat intelligent (connecté)",
      explication: "Il peut être contrôlé à distance via smartphone et apprend vos habitudes."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment un objet 'intelligent' collecte-t-il des informations sur son environnement ?",
      options: ["Il devine", "Grâce à des capteurs (température, mouvement, lumière, etc.)", "Il écoute les conversations", "Grâce à une antenne télé"],
      reponse: "Grâce à des capteurs (température, mouvement, lumière, etc.)",
      explication: "Les capteurs transforment un signal physique en donnée numérique."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel est le principal risque lié à la prolifération des objets connectés ?",
      options: ["Qu'ils mangent trop d'électricité", "La sécurité et la vie privée (risque de piratage et de collecte massive de données)", "Qu'ils tombent en panne", "Qu'ils pèsent trop lourd"],
      reponse: "La sécurité et la vie privée (risque de piratage et de collecte massive de données)",
      explication: "Beaucoup d'objets IoT bon marché sont mal sécurisés et peuvent servir de porte d'entrée aux hackers."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on le concept d'une ville utilisant l'IoT pour gérer les parkings, les déchets ou l'éclairage ?",
      options: ["Cloud City", "Smart City (Ville Intelligente)", "High-Tech Town", "Nano Polis"],
      reponse: "Smart City (Ville Intelligente)",
      explication: "Le but est d'optimiser les ressources et d'améliorer la vie des citoyens."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans quel secteur l'IoT permet-il de suivre la santé des patients à distance (télémédecine) ?",
      options: ["L'agriculture", "La santé (e-santé)", "Le transport", "La mode"],
      reponse: "La santé (e-santé)",
      explication: "Exemple : un pacemaker connecté qui alerte le médecin en cas d'anomalie."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle technologie sans fil est très souvent utilisée pour connecter des objets IoT à un smartphone ?",
      options: ["La fibre optique", "Le Bluetooth", "Le câble Ethernet", "La radio AM"],
      reponse: "Le Bluetooth",
      explication: "Idéal pour les courtes distances et les appareils à faible consommation d'énergie."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce que l''Industrial IoT' (IIoT) ?",
      options: ["Des robots de cuisine industriels", "L'utilisation de l'IoT dans les usines pour automatiser la production et la maintenance", "Une nouvelle marque de voiture", "Une application de gestion"],
      reponse: "L'utilisation de l'IoT dans les usines pour automatiser la production et la maintenance",
      explication: "Cela permet de prédire les pannes avant qu'elles n'arrivent (maintenance prédictive)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pourquoi l'arrivée de la 5G est-elle importante pour l'IoT ?",
      options: ["Pour voir des vidéos de chats plus vite", "Elle permet de connecter beaucoup plus d'objets simultanément avec une faible latence", "Elle rend les objets indestructibles", "Elle réduit le prix du Wi-Fi"],
      reponse: "Elle permet de connecter beaucoup plus d'objets simultanément avec une faible latence",
      explication: "Essentiel pour les voitures autonomes ou les chirurgies à distance."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qu'est-ce qu'une 'Domotique' ?",
      options: ["Une voiture de sport", "L'ensemble des technologies de l'habitat (maison connectée)", "Un logiciel de dessin", "Une race de chien électronique"],
      reponse: "L'ensemble des technologies de l'habitat (maison connectée)",
      explication: "Gérer le chauffage, les volets, l'alarme ou les lumières de façon centralisée."
    }
  ]
};
