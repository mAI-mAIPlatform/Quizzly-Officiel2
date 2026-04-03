import { Quiz } from "@/types/quiz";

export const quiz679: Quiz = {
  id: "679",
  titre: "Sécurité : Virus & Antivirus 🛡️👾",
  description: "Comment protéger votre matériel des attaques malveillantes.",
  theme: "Numérique",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un virus informatique ?",
      options: ["Une maladie pour l'humain", "Un petit programme malveillant conçu pour s'introduire dans un ordinateur sans permission", "Une poussière sur le clavier", "Un bug de l'écran"],
      reponse: "Un petit programme malveillant conçu pour s'introduire dans un ordinateur sans permission",
      explication: "Il peut voler des données, effacer des fichiers ou espionner."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces logiciels sert à détecter et supprimer les virus ?",
      options: ["Un navigateur", "Un pare-feu", "Un antivirus", "Un tableur"],
      reponse: "Un antivirus",
      explication: "Il scanne tes fichiers en permanence à la recherche de 'signatures' de virus connus."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on un virus qui se fait passer pour un logiciel utile mais qui est malveillant ?",
      options: ["Une mouche", "Un Cheval de Troie (Trojan)", "Un Ver (Worm)", "Un Spyware"],
      reponse: "Un Cheval de Troie (Trojan)",
      explication: "Comme dans la légende grecque, il cache sa vraie nature."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Ransomware' (Rançongiciel) ?",
      options: ["Un virus qui demande de l'argent pour débloquer tes fichiers cryptés", "Un virus qui chante", "Un virus qui accélère l'ordinateur", "Un logiciel de dessin"],
      reponse: "Un virus qui demande de l'argent pour débloquer tes fichiers cryptés",
      explication: "Les pirates prennent tes fichiers en otage."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment un virus peut-il infecter ton ordinateur ?",
      options: ["En téléchargeant un fichier suspect", "En cliquant sur une pièce jointe étrange dans un e-mail", "En utilisant une clé USB infectée", "Toutes ces réponses"],
      reponse: "Toutes ces réponses",
      explication: "Il faut toujours être prudent avec ce qu'on reçoit ou branche."
    },
    {
      id: "6",
      type: "qcm",
      question: "Pourquoi est-il crucial de mettre à jour son système d'exploitation et ses logiciels ?",
      options: ["Pour changer les couleurs", "Pour corriger les 'failles de sécurité' que les virus utilisent", "Pour que l'ordinateur soit plus lourd", "Ce n'est pas utile"],
      reponse: "Pour corriger les 'failles de sécurité' que les virus utilisent",
      explication: "Une mise à jour est souvent comme un nouveau bouclier."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Pare-feu' (Firewall) ?",
      options: ["Un logiciel qui empêche l'ordinateur de chauffer", "Une barrière qui contrôle les entrées et sorties de ton réseau Internet", "Un boîtier en métal", "Un extincteur numérique"],
      reponse: "Une barrière qui contrôle les entrées et sorties de ton réseau Internet",
      explication: "Il bloque les accès non autorisés venant de l'extérieur."
    },
    {
      id: "8",
      type: "qcm",
      question: "Est-ce que les téléphones portables peuvent attraper des virus ?",
      options: ["Non, c'est impossible", "Oui, ils sont comme de petits ordinateurs et peuvent être infectés", "Seulement s'ils tombent par terre", "Oui, mais ce sont des 'micro-virus'"],
      reponse: "Oui, ils sont comme de petits ordinateurs et peuvent être infectés",
      explication: "Il faut faire attention aux applications que l'on télécharge sur son mobile."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que faire si ton antivirus te dit qu'il a trouvé un 'fichier infecté' ?",
      options: ["Ignorer le message", "Suivre ses conseils (souvent le mettre en 'quarantaine' ou le supprimer)", "L'envoyer à un ami pour tester", "Éteindre l'ordinateur"],
      reponse: "Suivre ses conseils (souvent le mettre en 'quarantaine' ou le supprimer)",
      explication: "L'antivirus va isoler le fichier pour qu'il ne fasse pas de mal."
    },
    {
      id: "10",
      type: "qcm",
      question: "Lequel de ces comportements est le plus sûr ?",
      options: ["Cliquer sur toutes les pubs 'Gratuit'", "Télécharger des films sur des sites pirates", "Télécharger uniquement depuis les sites officiels et les stores reconnus", "Prêter son compte à des inconnus"],
      reponse: "Télécharger uniquement depuis les sites officiels et les stores reconnus",
      explication: "La sécurité vient d'abord de ton comportement en ligne (le 'facteur humain')."
    }
  ]
};
