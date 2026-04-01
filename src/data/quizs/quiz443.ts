import { Quiz } from "@/types/quiz";

export const quiz443: Quiz = {
  id: "443",
  titre: "Informatique : Le Cloud Computing ☁️👩‍💻",
  description: "Comprenez comment fonctionne le stockage et le calcul à distance.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que le 'Cloud Computing' (l'Informatique en Nuage) ?",
      options: ["Stocker des données dans le ciel", "L'accès à des ressources informatiques (serveurs, stockage) via Internet sans les gérer physiquement", "Un nouveau type de connexion Wi-Fi", "Un logiciel météo"],
      reponse: "L'accès à des ressources informatiques (serveurs, stockage) via Internet sans les gérer physiquement",
      explication: "Au lieu d'avoir un serveur sous votre bureau, vous louez de la puissance ailleurs."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces services est un exemple de Cloud pour le grand public ?",
      options: ["Google Drive", "iCloud", "Dropbox", "Toutes ces réponses"],
      reponse: "Toutes ces réponses",
      explication: "Ils permettent de synchroniser vos fichiers sur tous vos appareils."
    },
    {
      id: "3",
      type: "qcm",
      question: "Où se trouvent physiquement les données stockées dans le 'Nuage' ?",
      options: ["Dans l'air", "Dans des Data Centers (centres de données) géants remplis de serveurs", "Sur votre propre ordinateur", "Dans des satellites uniquement"],
      reponse: "Dans des Data Centers (centres de données) géants remplis de serveurs",
      explication: "Ces centres sont hautement sécurisés et climatisés."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que signifie l'acronyme 'SaaS' ?",
      options: ["Storage as a System", "Software as a Service (Logiciel en tant que service)", "Simple Access and Security", "Super Apple Android System"],
      reponse: "Software as a Service (Logiciel en tant que service)",
      explication: "Exemple : Netflix, Gmail ou Office 365. On utilise le logiciel via le web sans l'installer."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces acteurs est le leader mondial du cloud d'entreprise (infrastructure) ?",
      options: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud", "Toutes ces réponses sont les 'Big Three'"],
      reponse: "Toutes ces réponses sont les 'Big Three'",
      explication: "Amazon a été le pionnier et reste le premier, suivi de près par Microsoft."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est le principal avantage du cloud pour une entreprise ?",
      options: ["C'est gratuit", "La scalabilité (possibilité d'augmenter ou diminuer ses ressources instantanément selon les besoins)", "On n'a plus besoin d'Internet", "C'est plus joli"],
      reponse: "La scalabilité (possibilité d'augmenter ou diminuer ses ressources instantanément selon les besoins)",
      explication: "On ne paie que ce que l'on consomme réellement."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce que le 'Cloud Hybride' ?",
      options: ["Un nuage de pluie et de soleil", "Un mélange de cloud privé (propre à l'entreprise) et de cloud public (AWS, Azure, etc.)", "Utiliser un PC et un Mac", "Un serveur qui marche à l'électricité et au gaz"],
      reponse: "Un mélange de cloud privé (propre à l'entreprise) et de cloud public (AWS, Azure, etc.)",
      explication: "Cela permet de garder les données ultra-sensibles chez soi tout en profitant de la puissance du cloud public."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est le défi écologique majeur lié aux Data Centers du Cloud ?",
      options: ["Le bruit", "Leur énorme consommation d'énergie (électricité et eau pour le refroidissement)", "Ils prennent trop de place", "Ils attirent les oiseaux"],
      reponse: "Leur énorme consommation d'énergie (électricité et eau pour le refroidissement)",
      explication: "Le secteur du numérique émet aujourd'hui autant de CO2 que l'aviation civile."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que se passe-t-il si vous n'avez plus d'Internet avec un service 100% Cloud ?",
      options: ["Rien, ça marche quand même", "Vous perdez vos fichiers pour toujours", "Vous ne pouvez plus accéder à vos données ni utiliser le logiciel", "L'ordinateur redémarre"],
      reponse: "Vous ne pouvez plus accéder à vos données ni utiliser le logiciel",
      explication: "C'est la grande dépendance de ce système à la connexion réseau."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on le fait de posséder ses propres serveurs à la maison ou au bureau ?",
      options: ["On-premise (Sur site)", "Off-Cloud", "Local-Host", "Data-Home"],
      reponse: "On-premise (Sur site)",
      explication: "C'est l'inverse du Cloud d'infrastructure."
    }
  ]
};
