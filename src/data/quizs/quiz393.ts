import { Quiz } from "@/types/quiz";

export const quiz393: Quiz = {
  id: "393",
  titre: "Informatique : Le Cloud Computing ☁️📡",
  description: "Comprenez comment fonctionnent les serveurs et le stockage à distance.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que 'Le Cloud' (Le Nuage) ?",
      options: ["Un type de météo", "Le stockage et l'accès à des données sur des serveurs distants via Internet", "Un nouveau disque dur externe", "Un satellite"],
      reponse: "Le stockage et l'accès à des données sur des serveurs distants via Internet",
      explication: "Au lieu d'être sur votre PC, vos fichiers sont sur les ordinateurs d'une entreprise."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces services est un exemple de stockage Cloud ?",
      options: ["Google Drive", "iCloud", "Dropbox", "Tous ceux-là"],
      reponse: "Tous ceux-là",
      explication: "Ils permettent de synchroniser vos fichiers sur tous vos appareils."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est le principal avantage du Cloud ?",
      options: ["On n'a plus besoin d'internet", "Accéder à ses données depuis n'importe où et n'importe quel appareil connecté", "C'est toujours gratuit", "C'est plus joli"],
      reponse: "Accéder à ses données depuis n'importe où et n'importe quel appareil connecté",
      explication: "La mobilité est l'avantage numéro un."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle la plateforme Cloud d'Amazon, leader du marché ?",
      options: ["AWS (Amazon Web Services)", "Azure", "Google Cloud", "Amazon Explorer"],
      reponse: "AWS (Amazon Web Services)",
      explication: "Elle héberge une immense partie des sites web et applications mondiaux."
    },
    {
      id: "5",
      type: "qcm",
      question: "Et celle de Microsoft ?",
      options: ["Office Online", "Azure", "Windows Cloud", "Bing Cloud"],
      reponse: "Azure",
      explication: "C'est le principal concurrent d'AWS."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que signifie 'SaaS' ?",
      options: ["Software as a Service", "System and Application Software", "Storage as a Solution", "Secure and Always Sync"],
      reponse: "Software as a Service",
      explication: "C'est un logiciel que vous utilisez en ligne sans l'installer (ex: Gmail, Slack)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Où sont physiquement stockées les données du Cloud ?",
      options: ["Dans l'espace", "Dans de grands entrepôts appelés Data Centers (Centres de données)", "Dans votre box internet", "Elles sont virtuelles et n'ont pas de lieu physique"],
      reponse: "Dans de grands entrepôts appelés Data Centers (Centres de données)",
      explication: "Ces centres contiennent des milliers de serveurs qui tournent 24h/24."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est l'un des inconvénients majeurs du Cloud ?",
      options: ["La dépendance à une connexion Internet", "Le prix du matériel", "Le manque de place sur le bureau", "La couleur des icônes"],
      reponse: "La dépendance à une connexion Internet",
      explication: "Sans Internet, l'accès à vos fichiers distants est souvent impossible."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce que le 'Streaming' (vidéo/musique) ?",
      options: ["Télécharger un fichier complet avant de l'ouvrir", "Lire un flux de données en continu depuis le Cloud sans le stocker définitivement", "Envoyer un e-mail", "Réparer un écran"],
      reponse: "Lire un flux de données en continu depuis le Cloud sans le stocker définitivement",
      explication: "Exemples : Netflix, YouTube, Spotify."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on le 'Cloud' propre à une entreprise, non accessible au public ?",
      options: ["Cloud Public", "Cloud Privé", "Cloud Hybride", "Shadow Cloud"],
      reponse: "Cloud Privé",
      explication: "Il offre plus de sécurité et de contrôle pour les données sensibles."
    }
  ]
};
