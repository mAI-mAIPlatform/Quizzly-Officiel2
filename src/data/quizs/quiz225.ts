import { Quiz } from "@/types/quiz";

export const quiz225: Quiz = {
  id: "225",
  titre: "L'Internet des Objets (IoT) 🌐🏠",
  description: "Testez votre connaissance sur les objets connectés et le futur numérique.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le sigle anglais IoT ?",
      options: ["Internet of Tools", "Internet of Things", "Internal Online Tracking", "Input Output Technology"],
      reponse: "Internet of Things",
      explication: "En français, on parle d'Internet des Objets : des objets physiques connectés au Web."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel domaine utilise l'IoT pour rendre les maisons 'intelligentes' (chauffage, lumières, alarmes) ?",
      options: ["La domotique", "La bureautique", "La mécanique", "La robotique"],
      reponse: "La domotique",
      explication: "La domotique permet de contrôler sa maison à distance via son smartphone."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle technologie de communication sans fil à courte portée est très utilisée pour connecter des écouteurs ou des montres ?",
      options: ["Wi-Fi", "Bluetooth", "4G", "Infrarouge"],
      reponse: "Bluetooth",
      explication: "Idéal pour échanger des données entre deux appareils proches avec peu d'énergie."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est la principale menace liée à la multiplication des objets connectés ?",
      options: ["Leur poids", "Leur prix", "La cybersécurité (hacking et protection des données)", "La couleur"],
      reponse: "La cybersécurité (hacking et protection des données)",
      explication: "De nombreux objets connectés sont mal protégés et peuvent être piratés."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel petit composant permet à un objet connecté de détecter un mouvement ou une température ?",
      options: ["Un capteur (sensor)", "Un écran", "Une batterie", "Un haut-parleur"],
      reponse: "Un capteur (sensor)",
      explication: "Les capteurs transforment un phénomène physique en donnée numérique."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on les vêtements ou accessoires connectés que l'on porte sur soi (ex: montres, bagues) ?",
      options: ["Les Wearables", "Les Smartphones", "Les Tablets", "Les Hardwares"],
      reponse: "Les Wearables",
      explication: "Du verbe anglais 'to wear' (porter). Ils servent souvent au suivi de la santé."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle technologie d'identification par ondes radio est utilisée dans les badges d'accès ou les puces sous-cutanées des animaux ?",
      options: ["NFC", "RFID", "QR Code", "Li-Fi"],
      reponse: "RFID",
      explication: "Radio Frequency Identification. Le NFC est une version dérivée pour le paiement sans contact."
    },
    {
      id: "8",
      type: "qcm",
      question: "Où sont généralement stockées et traitées les énormes quantités de données générées par l'IoT ?",
      options: ["Sur une clé USB", "Dans le Cloud (serveurs distants)", "Sur l'objet lui-même uniquement", "Dans le sol"],
      reponse: "Dans le Cloud (serveurs distants)",
      explication: "Le Cloud permet d'analyser les données et de renvoyer des instructions à l'objet."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel nouveau protocole réseau (standard de connectivité) a été lancé par Google, Apple et Amazon pour harmoniser la maison connectée ?",
      options: ["Matter", "Z-Wave", "Zigbee", "HTML5"],
      reponse: "Matter",
      explication: "Matter vise à rendre les objets de différentes marques compatibles entre eux."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle ville au monde est souvent citée comme une 'Smart City' exemplaire utilisant l'IoT pour ses transports et son énergie ?",
      options: ["Singapour", "Las Vegas", "Bruxelles", "Le Caire"],
      reponse: "Singapour",
      explication: "Singapour utilise massivement les capteurs pour gérer le trafic et les services publics."
    }
  ]
};
