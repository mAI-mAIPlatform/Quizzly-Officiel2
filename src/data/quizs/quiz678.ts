import { Quiz } from "@/types/quiz";

export const quiz678: Quiz = {
  id: "678",
  titre: "Sécurité : Données Personnelles 🆔",
  description: "Apprenez à protéger votre vie privée numérique.",
  theme: "Numérique",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une donnée personnelle ?",
      options: ["Uniquement ton nom", "Toute information qui permet de t'identifier directement ou indirectement", "Un fichier image", "Un mot de passe uniquement"],
      reponse: "Toute information qui permet de t'identifier directement ou indirectement",
      explication: "Ton nom, ton adresse, ta photo, ton numéro de téléphone sont des données personnelles."
    },
    {
      id: "2",
      type: "qcm",
      question: "Que sont les 'cookies' sur Internet ?",
      options: ["Des petits biscuits cachés dans le clavier", "Des petits fichiers texte qui enregistrent tes préférences et tes activités sur un site", "Des virus dangereux", "Des publicités"],
      reponse: "Des petits fichiers texte qui enregistrent tes préférences et tes activités sur un site",
      explication: "Ils peuvent être utiles mais aussi servir à te pister pour de la publicité."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment s'appelle la loi européenne qui protège nos données personnelles ?",
      options: ["La loi de l'informatique", "Le RGPD (Règlement Général sur la Protection des Données)", "Le Code Civil", "La charte de l'Internet"],
      reponse: "Le RGPD (Règlement Général sur la Protection des Données)",
      explication: "C'est l'une des protections les plus strictes au monde."
    },
    {
      id: "4",
      type: "qcm",
      question: "Pourquoi est-il risqué d'utiliser un Wi-Fi public (ex: dans un café) sans protection ?",
      options: ["Parce qu'il est moins rapide", "Parce que des pirates peuvent plus facilement intercepter les données que tu envoies", "Parce qu'il est payant", "Parce qu'il s'arrête tout seul"],
      reponse: "Parce que des pirates peuvent plus facilement intercepter les données que tu envoies",
      explication: "Évitez de faire des achats ou de vous connecter à vos comptes importants sur un Wi-Fi public."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que signifie le 'droit à l'oubli' sur Internet ?",
      options: ["Le droit de ne plus aller à l'école", "Le droit de demander la suppression de certaines informations personnelles te concernant sur le web", "Le droit d'oublier ses mots de passe", "Le droit de ne pas répondre aux e-mails"],
      reponse: "Le droit de demander la suppression de certaines informations personnelles te concernant sur le web",
      explication: "Grâce au RGPD, tu peux demander à ce qu'une photo de toi soit retirée par exemple."
    },
    {
      id: "6",
      type: "qcm",
      question: "Que doit-on faire avant de télécharger une nouvelle application ?",
      options: ["Rien, on clique sur télécharger", "Vérifier les avis et surtout quels accès elle demande (caméra, contacts...)", "Éteindre son téléphone", "Avoir 100 Go de libre"],
      reponse: "Vérifier les avis et surtout quels accès elle demande (caméra, contacts...)",
      explication: "Certaines applications demandent accès à tes photos alors qu'elles n'en ont pas besoin."
    },
    {
      id: "7",
      type: "qcm",
      question: "Est-ce une bonne idée de mettre sa date de naissance complète sur son profil public ?",
      options: ["Oui, pour que tout le monde me souhaite mon anniversaire", "Non, c'est une donnée utilisée par les pirates pour usurper ton identité", "Seulement si j'ai plus de 100 amis", "Oui, c'est obligatoire"],
      reponse: "Non, c'est une donnée utilisée par les pirates pour usurper ton identité",
      explication: "Garde ce genre de détails pour les réglages privés de ton compte."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment s'appelle l'organisme français qui veille au respect des données personnelles ?",
      options: ["La CNIL (Commission Nationale de l'Informatique et des Libertés)", "La Gendarmerie", "La Mairie", "Le Ministère de la Culture"],
      reponse: "La CNIL (Commission Nationale de l'Informatique et des Libertés)",
      explication: "C'est vers eux qu'on se tourne en cas de problème de vie privée."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que se passe-t-il si tu actives la 'géolocalisation' sur tes photos ?",
      options: ["Elles sont plus jolies", "Tout le monde peut savoir exactement où et quand la photo a été prise", "La photo devient invisible", "Elle ne peut plus être effacée"],
      reponse: "Tout le monde peut savoir exactement où et quand la photo a été prise",
      explication: "Attention, cela peut révéler où tu habites ou où tu es en vacances."
    },
    {
      id: "10",
      type: "qcm",
      question: "Une information publiée sur les réseaux sociaux est-elle totalement privée si tu es en 'compte privé' ?",
      options: ["Oui, absolument", "Pas totalement, tes amis peuvent en faire une capture d'écran et la diffuser", "Non, tout est public d'office", "Seulement le jour"],
      reponse: "Pas totalement, tes amis peuvent en faire une capture d'écran et la diffuser",
      explication: "Même en privé, réfléchis toujours avant de poster."
    }
  ]
};
