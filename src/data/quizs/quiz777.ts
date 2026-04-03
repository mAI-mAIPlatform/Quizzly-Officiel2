import { Quiz } from "@/types/quiz";

export const quiz777: Quiz = {
  id: "777",
  titre: "Informatique : Les Réseaux Sociaux 📱💬",
  description: "Comprendre comment ils fonctionnent et comment bien les utiliser.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel réseau social est célèbre pour ses messages limités à un certain nombre de caractères (maintenant appelé X) ?",
      options: ["Facebook", "Instagram", "Twitter", "Snapchat"],
      reponse: "Twitter",
      explication: "Rebaptisé X par Elon Musk."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le but principal d'Instagram ?",
      options: ["Envoyer des emails", "Partager des photos et des vidéos", "Écrire des longs articles", "Trouver de vieux amis d'école"],
      reponse: "Partager des photos et des vidéos",
      explication: "Lancé en 2010, appartient maintenant à Meta (Facebook)."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Tout ce que l'on poste en 'privé' sur un réseau social peut quand même être vu par l'entreprise qui possède le réseau.",
      reponse: "Vrai",
      explication: "Rien n'est jamais totalement privé sur un réseau social."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment appelle-t-il le signe utilisé pour créer un mot-clé (ex: #nature) ?",
      reponse: "Hashtag",
      explication: "Ou 'mot-dièse'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qui a créé Facebook dans sa chambre d'étudiant ?",
      options: ["Elon Musk", "Bill Gates", "Mark Zuckerberg", "Jeff Bezos"],
      reponse: "Mark Zuckerberg",
      explication: "À l'université de Harvard."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le cyberharcèlement est puni par la loi.",
      reponse: "Vrai",
      explication: "Il faut toujours parler à un adulte si on est témoin ou victime de méchancetés en ligne."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel réseau social est principalement utilisé par les professionnels pour chercher du travail ?",
      options: ["TikTok", "LinkedIn", "Pinterest", "WhatsApp"],
      reponse: "LinkedIn",
      explication: "C'est le CV en ligne."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on une personne qui a beaucoup d'abonnés et qui peut influencer les autres ?",
      reponse: "Influenceur",
      explication: "Certains en font leur métier."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est le risque de passer trop de temps sur les réseaux ?",
      options: ["Devenir trop intelligent", "La fatigue visuelle et l'isolement", "Gagner beaucoup d'argent", "Rien"],
      reponse: "La fatigue visuelle et l'isolement",
      explication: "Il est important de garder des contacts dans la 'vraie vie'."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "L'âge minimum légal pour la plupart des réseaux sociaux est de 13 ans.",
      reponse: "Vrai",
      explication: "En dessous de cet âge, les données des enfants ne doivent pas être collectées sans accord parental."
    }
  ]
};
