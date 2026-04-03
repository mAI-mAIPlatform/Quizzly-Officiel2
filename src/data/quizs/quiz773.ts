import { Quiz } from "@/types/quiz";

export const quiz773: Quiz = {
  id: "773",
  titre: "Informatique : La Sécurité en Ligne 🔒",
  description: "Apprendre à protéger ses données et sa vie privée sur Internet.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Lequel de ces mots de passe est le plus sécurisé ?",
      options: ["123456", "azerty", "Soleil@2024!", "password"],
      reponse: "Soleil@2024!",
      explication: "Un bon mot de passe mélange majuscules, minuscules, chiffres et caractères spéciaux."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qu'est-ce que le 'Phishing' (Hameçonnage) ?",
      options: ["Un jeu de pêche en ligne", "Une technique pour voler des informations en se faisant passer pour quelqu'un d'autre", "Une mise à jour système", "Un nouveau réseau social"],
      reponse: "Une technique pour voler des informations en se faisant passer pour quelqu'un d'autre",
      explication: "Souvent via un faux email de banque ou d'impôts."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Il faut donner son nom de famille et son adresse à tous les sites qui le demandent.",
      reponse: "Faux",
      explication: "Il faut protéger ses données personnelles et ne les donner qu'à des sites de confiance."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-on un petit programme malveillant qui peut endommager ton ordinateur ?",
      reponse: "Virus",
      explication: "Ou plus largement un 'Malware'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel logiciel sert à détecter et supprimer les virus ?",
      options: ["Un pare-feu", "Un antivirus", "Un navigateur", "Un traitement de texte"],
      reponse: "Un antivirus",
      explication: "Il doit être mis à jour régulièrement."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Si un site propose de gagner un iPhone gratuit en cliquant sur une pub, c'est sûrement vrai.",
      reponse: "Faux",
      explication: "C'est presque toujours une arnaque (scam)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce que la CNIL en France ?",
      options: ["Une marque d'ordinateurs", "L'organisme qui protège les données personnelles des citoyens", "Un groupe de hackers", "Une école d'informatique"],
      reponse: "L'organisme qui protège les données personnelles des citoyens",
      explication: "Commission Nationale de l'Informatique et des Libertés."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on la trace que l'on laisse sur Internet après chaque visite ?",
      reponse: "Empreinte numérique",
      explication: "Tout ce que l'on publie ou cherche reste enregistré quelque part."
    },
    {
      id: "9",
      type: "qcm",
      question: "À quoi sert un 'Pare-feu' (Firewall) ?",
      options: ["À éteindre les incendies", "À bloquer les accès non autorisés à ton réseau", "À nettoyer l'écran", "À accélérer Internet"],
      reponse: "À bloquer les accès non autorisés à ton réseau",
      explication: "C'est une barrière de protection."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Partager son mot de passe avec un meilleur ami est sans danger.",
      reponse: "Faux",
      explication: "Un mot de passe est strictement personnel et ne doit jamais être partagé."
    }
  ]
};
