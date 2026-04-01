import { Quiz } from "@/types/quiz";

export const quiz353: Quiz = {
  id: "353",
  titre: "Informatique : Réseaux et Sécurité 🌐🛡️",
  description: "Comprenez comment les données circulent et comment les protéger.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie 'IP' dans 'Adresse IP' ?",
      options: ["Initial Point", "Internet Protocol", "Information Path", "Internal Processing"],
      reponse: "Internet Protocol",
      explication: "C'est le numéro d'identification de chaque appareil sur un réseau."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le logiciel qui filtre les connexions pour protéger un PC ?",
      options: ["Un Antivirus", "Un Pare-feu (Firewall)", "Un Navigateur", "Un VPN"],
      reponse: "Un Pare-feu (Firewall)",
      explication: "Il surveille et contrôle le trafic réseau entrant et sortant."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'est-ce qu'un 'VPN' ?",
      options: ["Un virus puissant", "Un réseau privé virtuel", "Un type de câble", "Une vitesse internet"],
      reponse: "Un réseau privé virtuel",
      explication: "Virtual Private Network : il permet de sécuriser et de masquer sa connexion."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on une tentative de vol d'informations par e-mail frauduleux ?",
      options: ["Spam", "Phishing (Hameçonnage)", "Hacking", "Clouding"],
      reponse: "Phishing (Hameçonnage)",
      explication: "Le pirate se fait passer pour un organisme officiel pour voler vos codes."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que signifie le 's' dans 'https://' ?",
      options: ["Simple", "Secure (Sécurisé)", "Secret", "Speed"],
      reponse: "Secure (Sécurisé)",
      explication: "Les données échangées entre vous et le site sont chiffrées."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle est la fonction d'un 'Routeur' ?",
      options: ["Stocker des fichiers", "Diriger les données entre différents réseaux (ex: votre maison et internet)", "Afficher des images", "Nettoyer l'ordinateur"],
      reponse: "Diriger les données entre différents réseaux (ex: votre maison et internet)",
      explication: "C'est souvent le rôle de votre 'Box' internet."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce que le 'Wi-Fi' ?",
      options: ["Un câble invisible", "Une technologie de transmission de données sans fil par ondes radio", "Une marque d'ordinateur", "Une vitesse de téléchargement"],
      reponse: "Une technologie de transmission de données sans fil par ondes radio",
      explication: "Wireless Fidelity."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Cookie' sur le web ?",
      options: ["Un petit biscuit", "Un fichier texte stockant des informations sur votre navigation", "Un virus espion", "Une image cachée"],
      reponse: "Un fichier texte stockant des informations sur votre navigation",
      explication: "Ils servent par exemple à garder votre session ouverte ou vos préférences de langue."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie 'DNS' ?",
      options: ["Data Network System", "Domain Name System", "Digital Net Service", "Direct Node Server"],
      reponse: "Domain Name System",
      explication: "C'est l'annuaire d'Internet qui traduit les noms de sites (ex: google.com) en adresses IP."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-un logiciel malveillant qui demande une rançon pour débloquer vos fichiers ?",
      options: ["Un Spyware", "Un Ransomware (Rançongiciel)", "Un Adware", "Un Keylogger"],
      reponse: "Un Ransomware (Rançongiciel)",
      explication: "C'est l'une des cyberattaques les plus redoutables pour les entreprises."
    }
  ]
};
