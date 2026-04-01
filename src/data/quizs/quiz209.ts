import { Quiz } from "@/types/quiz";

export const quiz209: Quiz = {
  id: "209",
  titre: "Sûreté & Cryptographie 🔐💻",
  description: "Testez votre connaissance sur l'art de cacher des secrets, d'Enigma à la Blockchain.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel empereur romain a donné son nom à l'un des premiers chiffres consistant à décaler les lettres de l'alphabet ?",
      options: ["Auguste", "Jules César", "Néron", "Caligula"],
      reponse: "Jules César",
      explication: "Le 'Chiffre de César' décale chaque lettre d'un certain nombre de rangs (ex: A devient D avec un décalage de 3)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelait la machine de cryptage utilisée par l'Allemagne nazie pendant la Seconde Guerre mondiale ?",
      options: ["Enigma", "Turing", "Colossus", "Alan"],
      reponse: "Enigma",
      explication: "Ses codes ont été brisés par l'équipe d'Alan Turing à Bletchley Park."
    },
    {
      id: "3",
      type: "qcm",
      question: "Dans le système de 'clé publique', laquelle des deux clés sert à déchiffrer le message ?",
      options: ["La clé publique", "La clé privée", "La clé d'accès", "Le mot de passe"],
      reponse: "La clé privée",
      explication: "Tout le monde peut chiffrer avec la clé publique, mais seul le destinataire peut lire avec sa clé privée."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce qu'une 'fonction de hachage' (ou hash) en informatique ?",
      options: ["Un virus", "Un algorithme qui transforme n'importe quelle donnée en une empreinte de taille fixe unique", "Un outil de compression", "Un logiciel de dessin"],
      reponse: "Un algorithme qui transforme n'importe quelle donnée en une empreinte de taille fixe unique",
      explication: "C'est irréversible : on ne peut pas retrouver la donnée originale à partir du hash."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle technologie utilise la cryptographie pour créer un registre de transactions décentralisé et infalsifiable ?",
      options: ["Le Cloud", "La Blockchain", "L'Intelligence Artificielle", "La 5G"],
      reponse: "La Blockchain",
      explication: "La blockchain est la base du Bitcoin et des autres cryptomonnaies."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que signifie le 'S' dans 'HTTPS' au début d'une adresse Web ?",
      options: ["Simple", "Secure (Sécurisé)", "Speed (Rapide)", "System"],
      reponse: "Secure (Sécurisé)",
      explication: "Cela indique que la connexion entre votre navigateur et le serveur est chiffrée (généralement via TLS)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on l'attaque consistant à essayer toutes les combinaisons possibles d'un mot de passe ?",
      options: ["Hameçonnage (Phishing)", "Attaque par déni de service (DDoS)", "Attaque par Force Brute (Brute Force)", "Injection SQL"],
      reponse: "Attaque par Force Brute (Brute Force)",
      explication: "C'est pourquoi il est important d'avoir des mots de passe longs et complexes."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle discipline cherche à développer des systèmes de cryptage capables de résister aux futurs ordinateurs quantiques ?",
      options: ["La Crypto-zoologie", "La Cryptographie Post-Quantique", "La Bio-informatique", "Le Big Data"],
      reponse: "La Cryptographie Post-Quantique",
      explication: "Les ordinateurs quantiques pourraient briser les chiffrements actuels (RSA, courbe elliptique)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie l'acronyme 'MFA' ou 'Double Authentification' ?",
      options: ["Multi-File Access", "Multi-Factor Authentication", "Main Frame Area", "Modulated Frequency Array"],
      reponse: "Multi-Factor Authentication",
      explication: "Cela demande deux preuves d'identité (ex: mot de passe + code reçu par SMS)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel mathématicien est considéré comme le père de la théorie de l'information et a défini le concept de 'secret parfait' ?",
      options: ["Claude Shannon", "John von Neumann", "Blaise Pascal", "Ada Lovelace"],
      reponse: "Claude Shannon",
      explication: "Ses travaux en 1948 ont posé les bases de toute la télécommunication moderne."
    }
  ]
};
