import { Quiz } from "@/types/quiz";

export const quiz184: Quiz = {
  id: "184",
  titre: "La Cyber-sécurité 🔐💻",
  description: "Testez vos connaissances sur la protection des données et les dangers d'Internet.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on un message frauduleux qui tente de voler vos mots de passe ?",
      options: ["Un virus", "Un phishing (hameçonnage)", "Un spam", "Un cookie"],
      reponse: "Un phishing (hameçonnage)",
      explication: "Le pirate se fait passer pour une banque ou un service connu pour vous tromper."
    },
    {
      id: "2",
      type: "qcm",
      question: "Que signifie le 'S' dans HTTPS au début d'une adresse web ?",
      options: ["Simple", "Secure (Sécurisé)", "Secret", "Speed"],
      reponse: "Secure (Sécurisé)",
      explication: "Il indique que la connexion entre votre navigateur et le site est chiffrée."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle méthode de sécurité demande un code envoyé sur votre téléphone en plus de votre mot de passe ?",
      options: ["Le mot de passe long", "L'authentification à deux facteurs (2FA)", "Le pare-feu", "L'antivirus"],
      reponse: "L'authentification à deux facteurs (2FA)",
      explication: "Cela ajoute une couche de sécurité cruciale si votre mot de passe est volé."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on un logiciel malveillant qui bloque vos fichiers et demande de l'argent pour les libérer ?",
      options: ["Un Spyware", "Un Ransomware (rançongiciel)", "Un Adware", "Un Worm (ver)"],
      reponse: "Un Ransomware (rançongiciel)",
      explication: "C'est une attaque très courante contre les entreprises et les hôpitaux."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Pare-feu' (Firewall) ?",
      options: ["Un logiciel qui éteint les incendies", "Un système qui filtre le trafic entre votre réseau et Internet", "Un boîtier pour ranger ses câbles", "Un antivirus gratuit"],
      reponse: "Un système qui filtre le trafic entre votre réseau et Internet",
      explication: "Il bloque les connexions non autorisées vers votre ordinateur."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment s'appelle une personne qui utilise ses compétences informatiques pour s'introduire illégalement dans des systèmes ?",
      options: ["Un développeur", "Un hacker (pirate)", "Un administrateur", "Un webmaster"],
      reponse: "Un hacker (pirate)",
      explication: "Certains hackers sont 'éthiques' et aident à trouver des failles pour les corriger."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la meilleure habitude pour un mot de passe sécurisé ?",
      options: ["Utiliser sa date de naissance", "Utiliser le même pour tous les sites", "Utiliser un gestionnaire de mots de passe et des codes uniques/complexes", "Écrire le mot de passe sur un post-it"],
      reponse: "Utiliser un gestionnaire de mots de passe et des codes uniques/complexes",
      explication: "Un mot de passe solide doit contenir des lettres, chiffres et symboles."
    },
    {
      id: "8",
      type: "qcm",
      question: "Que permettent de faire les 'Cookies' sur un site web (hors publicité) ?",
      options: ["Installer des virus", "Mémoriser vos préférences ou votre panier d'achat", "Voler vos photos", "Éteindre votre ordinateur"],
      reponse: "Mémoriser vos préférences ou votre panier d'achat",
      explication: "Les cookies sont des petits fichiers texte déposés par les sites sur votre appareil."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on le réseau privé virtuel qui cache votre adresse IP et chiffre votre trafic ?",
      options: ["Un VPN", "Un DNS", "Un LAN", "Un WIFI"],
      reponse: "Un VPN",
      explication: "Le VPN permet de naviguer de manière plus anonyme et sécurisée."
    },
    {
      id: "10",
      type: "qcm",
      question: "Pourquoi est-il important de faire régulièrement les mises à jour de son système (Windows, Android, iOS) ?",
      options: ["Pour changer les couleurs", "Pour corriger des failles de sécurité", "Pour supprimer ses fichiers", "Pour ralentir l'ordinateur"],
      reponse: "Pour corriger des failles de sécurité",
      explication: "Les mises à jour contiennent souvent des 'correctifs' contre les nouvelles menaces."
    }
  ]
};
