import { Quiz } from "@/types/quiz";

export const quiz413: Quiz = {
  id: "413",
  titre: "Informatique : La Cybersécurité 🔒🦠",
  description: "Apprenez à vous protéger et à comprendre les dangers du web.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Hacker' au sens noble du terme ?",
      options: ["Un criminel qui vole des cartes bleues", "Un passionné d'informatique qui cherche à comprendre et améliorer les systèmes", "Un virus informatique", "Un vendeur de logiciels"],
      reponse: "Un passionné d'informatique qui cherche à comprendre et améliorer les systèmes",
      explication: "Le terme a été détourné, mais à l'origine, c'est quelqu'un qui 'bidouille' pour apprendre."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on une technique frauduleuse visant à vous voler vos mots de passe par e-mail ?",
      options: ["Le Phishing (Hameçonnage)", "Le Spam", "Le Cookies", "Le Firewall"],
      reponse: "Le Phishing (Hameçonnage)",
      explication: "L'attaquant se fait passer pour une banque ou un service connu."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Ransomware' (Rançongiciel) ?",
      options: ["Un logiciel gratuit", "Un virus qui bloque vos fichiers et demande de l'argent pour les libérer", "Un antivirus", "Un moteur de recherche"],
      reponse: "Un virus qui bloque vos fichiers et demande de l'argent pour les libérer",
      explication: "C'est l'une des cyberattaques les plus redoutables pour les entreprises."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que signifie l'acronyme 'MFA' ou '2FA' ?",
      options: ["Multi-File Access", "Multi-Factor Authentication (Authentification à deux facteurs)", "Main Frame Area", "More Fast Access"],
      reponse: "Multi-Factor Authentication (Authentification à deux facteurs)",
      explication: "Cela ajoute une couche de sécurité (ex: un code reçu sur mobile) en plus du mot de passe."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel logiciel sert à protéger un ordinateur en filtrant les connexions entrantes et sortantes ?",
      options: ["Navigateur", "Pare-feu (Firewall)", "Tableur", "Lecteur vidéo"],
      reponse: "Pare-feu (Firewall)",
      explication: "Il empêche les accès non autorisés depuis le réseau."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on un logiciel malveillant qui se cache à l'intérieur d'un programme légitime ?",
      options: ["Un Ver", "Un Cheval de Troie (Trojan)", "Un Spyware", "Un Cookie"],
      reponse: "Un Cheval de Troie (Trojan)",
      explication: "Comme dans la mythologie, il entre discrètement pour causer des dégâts."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle pratique consiste à utiliser un mot de passe complexe et différent pour chaque site ?",
      options: ["L'hygiène informatique", "L'overclocking", "Le minage", "Le tagging"],
      reponse: "L'hygiène informatique",
      explication: "C'est la base de la sécurité personnelle en ligne."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'un 'VPN' ?",
      options: ["Un virus puissant", "Un réseau privé virtuel pour chiffrer sa connexion et masquer son IP", "Un type de câble", "Un écran haute définition"],
      reponse: "Un réseau privé virtuel pour chiffrer sa connexion et masquer son IP",
      explication: "Virtual Private Network."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces mots de passe est le plus sécurisé ?",
      options: ["123456", "motdepasse", "MaMaisonEstBleue!78", "admin"],
      reponse: "MaMaisonEstBleue!78",
      explication: "Il est long, mélange majuscules, minuscules, chiffres et caractères spéciaux."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle organisation européenne a mis en place le RGPD pour protéger les données personnelles ?",
      options: ["L'ONU", "L'Union Européenne", "L'OTAN", "La NASA"],
      reponse: "L'Union Européenne",
      explication: "Règlement Général sur la Protection des Données."
    }
  ]
};
