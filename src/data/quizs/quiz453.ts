import { Quiz } from "@/types/quiz";

export const quiz453: Quiz = {
  id: "453",
  titre: "Informatique : Cybersécurité et Hacking 🛡️💻",
  description: "Apprenez les bases de la protection numérique et les méthodes des pirates.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on un pirate informatique qui utilise ses compétences pour faire le bien (sécurité) ?",
      options: ["Black Hat", "White Hat", "Grey Hat", "Red Hat"],
      reponse: "White Hat",
      explication: "Ce sont des experts en sécurité (Penetration testers) qui aident à corriger les failles."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qu'est-ce qu'une attaque 'Phishing' (Hameçonnage) ?",
      options: ["Une attaque sur un serveur de pêche", "L'envoi d'emails frauduleux pour voler des informations confidentielles", "Un virus qui détruit le disque dur", "Une technique de codage"],
      reponse: "L'envoi d'emails frauduleux pour voler des informations confidentielles",
      explication: "On tente de se faire passer pour une banque ou un service connu."
    },
    {
      id: "3",
      type: "qcm",
      question: "Que signifie le terme 'Ransomware' (Rançongiciel) ?",
      options: ["Un logiciel qui accélère le PC", "Un logiciel malveillant qui crypte vos fichiers et demande de l'argent pour les débloquer", "Un logiciel de messagerie", "Un antivirus"],
      reponse: "Un logiciel malveillant qui crypte vos fichiers et demande de l'argent pour les débloquer",
      explication: "C'est l'une des menaces les plus graves pour les entreprises aujourd'hui."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle méthode consiste à tester toutes les combinaisons possibles de caractères pour trouver un mot de passe ?",
      options: ["Attaque par force brute", "Attaque par déni de service", "Attaque par dictionnaire", "Injection SQL"],
      reponse: "Attaque par force brute",
      explication: "C'est pourquoi il faut des mots de passe longs et complexes."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que la double authentification (2FA) ?",
      options: ["Avoir deux mots de passe", "Vérifier son identité par deux méthodes différentes (ex: mot de passe + code reçu par SMS)", "Se connecter sur deux appareils", "Écrire son nom deux fois"],
      reponse: "Vérifier son identité par deux méthodes différentes (ex: mot de passe + code reçu par SMS)",
      explication: "Cela renforce énormément la sécurité car le mot de passe seul ne suffit plus."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que signifie 'DDoS' ?",
      options: ["Direct Device on System", "Distributed Denial of Service (Attaque par déni de service distribué)", "Double Data on Screen", "Digital Drive of Security"],
      reponse: "Distributed Denial of Service (Attaque par déni de service distribué)",
      explication: "On inonde un site web de trafic pour le faire planter."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la règle d'or pour un mot de passe robuste ?",
      options: ["Utiliser sa date de naissance", "Utiliser le nom de son chat", "Mélanger majuscules, minuscules, chiffres, caractères spéciaux et ne jamais le réutiliser ailleurs", "L'écrire sur un post-it"],
      reponse: "Mélanger majuscules, minuscules, chiffres, caractères spéciaux et ne jamais le réutiliser ailleurs",
      explication: "La réutilisation d'un mot de passe est la cause n°1 de compromission de comptes multiples."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'une faille 'Zero-Day' ?",
      options: ["Une faille qui n'existe pas", "Une faille de sécurité découverte récemment et pour laquelle aucun correctif n'existe encore", "Une faille qui arrive à minuit", "Une faille sans importance"],
      reponse: "Une faille de sécurité découverte récemment et pour laquelle aucun correctif n'existe encore",
      explication: "Elle est particulièrement dangereuse car l'éditeur du logiciel n'a eu 'zéro jour' pour la corriger."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans quel but utilise-t-on un VPN en cybersécurité ?",
      options: ["Pour télécharger plus vite", "Pour chiffrer sa connexion et masquer son adresse IP", "Pour réparer son écran", "Pour nettoyer son disque dur"],
      reponse: "Pour chiffrer sa connexion et masquer son adresse IP",
      explication: "Il crée un tunnel sécurisé entre vous et Internet."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qu'est-ce que l'Ingénierie Sociale (Social Engineering) ?",
      options: ["Construire des robots sociaux", "Manipuler psychologiquement une personne pour qu'elle donne ses accès par erreur", "Un cours de sociologie", "Créer un réseau social"],
      reponse: "Manipuler psychologiquement une personne pour qu'elle donne ses accès par erreur",
      explication: "L'humain reste souvent le maillon le plus faible de la chaîne de sécurité."
    }
  ]
};
