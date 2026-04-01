import { Quiz } from "@/types/quiz";

export const quiz323: Quiz = {
  id: "323",
  titre: "Informatique : Réseaux et Sécurité 🛡️",
  description: "Apprenez comment Internet fonctionne et comment vous protéger en ligne.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie l'acronyme 'IP' dans une adresse IP ?",
      options: ["Internal Phone", "Internet Protocol", "Information Point", "Instant Page"],
      reponse: "Internet Protocol",
      explication: "C'est l'identifiant unique de chaque appareil connecté à un réseau."
    },
    {
      id: "2",
      type: "qcm",
      question: "À quoi sert un pare-feu (Firewall) ?",
      options: ["À chauffer l'ordinateur", "À bloquer les accès non autorisés au réseau", "À éteindre les incendies", "À accélérer la connexion"],
      reponse: "À bloquer les accès non autorisés au réseau",
      explication: "Il surveille et contrôle le trafic entrant et sortant."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Hameçonnage' (Phishing) ?",
      options: ["Un sport nautique", "Une technique pour voler des mots de passe via de faux emails", "Une mise à jour système", "Un type de câble réseau"],
      reponse: "Une technique pour voler des mots de passe via de faux emails",
      explication: "L'attaquant se fait passer pour un service connu (banque, impôts, etc.)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que signifie le 'S' dans 'HTTPS' ?",
      options: ["Super", "Secure", "System", "Server"],
      reponse: "Secure",
      explication: "Cela indique que les données échangées sont cryptées."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quoi sert un VPN ?",
      options: ["À augmenter le volume sonore", "À créer une connexion sécurisée et anonyme", "À nettoyer le disque dur", "À charger la batterie"],
      reponse: "À créer une connexion sécurisée et anonyme",
      explication: "Il masque votre adresse IP réelle et crypte votre trafic."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Malware' ?",
      options: ["Un logiciel malveillant (virus, espion, etc.)", "Un mauvais matériel", "Une erreur de frappe", "Un site web lent"],
      reponse: "Un logiciel malveillant (virus, espion, etc.)",
      explication: "Contraction de 'Malicious Software'."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est l'intérêt de la double authentification (2FA) ?",
      options: ["Avoir deux mots de passe différents", "Ajouter une deuxième étape de sécurité après le mot de passe", "Se connecter sur deux appareils", "Cela ne sert à rien"],
      reponse: "Ajouter une deuxième étape de sécurité après le mot de passe",
      explication: "Même si on vole votre mot de passe, l'attaquant ne peut pas se connecter sans votre code SMS ou application."
    },
    {
      id: "8",
      type: "qcm",
      question: "Que signifie 'Wi-Fi' ?",
      options: ["Wireless Fidelity", "Wide File", "Window Find", "Wired Firewall"],
      reponse: "Wireless Fidelity",
      explication: "C'est une technologie de communication sans fil."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce que le 'Cloud' en informatique ?",
      options: ["La météo sur ordinateur", "Le stockage et l'accès à des services sur des serveurs distants", "Un type de papier peint", "Un écran transparent"],
      reponse: "Le stockage et l'accès à des services sur des serveurs distants",
      explication: "Vos fichiers sont stockés chez un fournisseur (Google, Apple, Microsoft) et accessibles partout."
    },
    {
      id: "10",
      type: "qcm",
      question: "Pourquoi est-il risqué d'utiliser un Wi-Fi public ouvert ?",
      options: ["Il peut être lent", "Les données transmises peuvent être interceptées par d'autres", "Il coûte cher", "L'ordinateur peut s'éteindre"],
      reponse: "Les données transmises peuvent être interceptées par d'autres",
      explication: "Sans protection, n'importe qui sur le même réseau peut voir ce que vous faites."
    }
  ]
};
