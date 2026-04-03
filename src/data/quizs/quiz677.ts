import { Quiz } from "@/types/quiz";

export const quiz677: Quiz = {
  id: "677",
  titre: "Sécurité : Le Phishing 🎣⚠️",
  description: "Apprenez à ne pas mordre à l'hameçon des pirates.",
  theme: "Numérique",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que le 'Phishing' (ou hameçonnage) ?",
      options: ["Un nouveau jeu de pêche", "Une technique pour voler des informations en se faisant passer pour une banque, un site connu ou un ami", "Un virus qui mange les fichiers", "Une mise à jour système"],
      reponse: "Une technique pour voler des informations en se faisant passer pour une banque, un site connu ou un ami",
      explication: "Le pirate 'pêche' tes données avec un faux message."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces signes doit t'alerter dans un e-mail ?",
      options: ["C'est écrit en couleur", "Il y a des fautes d'orthographe ou de grammaire bizarres", "Il y a une image de chat", "Il est envoyé le matin"],
      reponse: "Il y a des fautes d'orthographe ou de grammaire bizarres",
      explication: "Les pirates écrivent souvent mal ou utilisent des traducteurs automatiques."
    },
    {
      id: "3",
      type: "qcm",
      question: "Une banque peut-elle te demander ton mot de passe par e-mail ?",
      options: ["Oui, pour vérifier ton compte", "Non, jamais, une entreprise sérieuse ne demande jamais ton mot de passe par message", "Seulement si tu as perdu ton argent", "Si c'est marqué 'URGENT'"],
      reponse: "Non, jamais, une entreprise sérieuse ne demande jamais ton mot de passe par message",
      explication: "C'est une règle d'or : ne donne jamais ton mot de passe via un message reçu."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que signifie un message qui dit : 'Vous avez gagné un iPhone ! Cliquez ici vite !' ?",
      options: ["C'est ma chance, j'ai gagné !", "C'est probablement une arnaque pour voler mes données ou m'abonner de force", "C'est une pub normale", "C'est un cadeau du gouvernement"],
      reponse: "C'est probablement une arnaque pour voler mes données ou m'abonner de force",
      explication: "Si c'est trop beau pour être vrai, c'est presque toujours une arnaque."
    },
    {
      id: "5",
      type: "qcm",
      question: "Où t'amène généralement le lien dans un e-mail de phishing ?",
      options: ["Sur le vrai site de la banque", "Sur un faux site qui ressemble au vrai pour que tu tapes tes identifiants", "Sur Google", "Sur un virus direct"],
      reponse: "Sur un faux site qui ressemble au vrai pour que tu tapes tes identifiants",
      explication: "Vérifie toujours l'adresse URL dans la barre du navigateur."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que faire si tu reçois un SMS suspect (Smishing) ?",
      options: ["Cliquer sur le lien pour voir", "Le supprimer et ne surtout pas cliquer", "Répondre pour dire d'arrêter", "Appeler le numéro pour crier"],
      reponse: "Le supprimer et ne surtout pas cliquer",
      explication: "Il ne faut même pas répondre, sinon le pirate sait que ton numéro est actif."
    },
    {
      id: "7",
      type: "qcm",
      question: "Lequel de ces éléments est louche dans l'adresse de l'expéditeur d'un e-mail ?",
      options: ["contact@netflix.com", "service-client-netflix@gmail.com", "info@netflix.fr", "support@netflix.com"],
      reponse: "service-client-netflix@gmail.com",
      explication: "Une grande entreprise a ses propres adresses et n'utilise pas '@gmail.com' pour son service client."
    },
    {
      id: "8",
      type: "qcm",
      question: "Pourquoi les pirates utilisent-ils souvent l'urgence (Vite ! Votre compte va être supprimé !) ?",
      options: ["Parce qu'ils sont pressés de rentrer chez eux", "Pour te stresser et t'empêcher de réfléchir avant de cliquer", "Parce que c'est le règlement", "Pour t'aider"],
      reponse: "Pour te stresser et t'empêcher de réfléchir avant de cliquer",
      explication: "Le stress est l'allié du pirate."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que faire si tu as cliqué sur un lien suspect par erreur et donné ton mot de passe ?",
      options: ["Pleurer", "Changer immédiatement ton mot de passe sur le VRAI site et prévenir tes parents ou un pro", "Éteindre l'ordinateur et attendre 3 jours", "Ne rien faire"],
      reponse: "Changer immédiatement ton mot de passe sur le VRAI site et prévenir tes parents ou un pro",
      explication: "Il faut agir tout de suite pour reprendre le contrôle de ton compte."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on le fait de passer sa souris sur un lien sans cliquer pour voir où il mène ?",
      options: ["Le survol (Hover)", "Le scan", "Le clic droit", "Le double clic"],
      reponse: "Le survol (Hover)",
      explication: "L'adresse réelle s'affiche souvent en bas à gauche de la fenêtre. Très utile !"
    }
  ]
};
