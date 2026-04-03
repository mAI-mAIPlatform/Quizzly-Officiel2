import { Quiz } from "@/types/quiz";

export const quiz676: Quiz = {
  id: "676",
  titre: "Sécurité : Les Mots de Passe 🔐",
  description: "Devenez un pro de la protection de vos comptes.",
  theme: "Numérique",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "À quoi sert un mot de passe ?",
      options: ["À faire joli", "À prouver ton identité et protéger l'accès à tes informations privées", "À gagner des points", "À rien du tout"],
      reponse: "À prouver ton identité et protéger l'accès à tes informations privées",
      explication: "C'est la clé de tes secrets numériques."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces mots de passe est le plus 'faible' (facile à deviner) ?",
      options: ["123456", "M@i$on_2024", "J'aimeLeChocolat!", "AzErTy45?"],
      reponse: "123456",
      explication: "C'est l'un des mots de passe les plus utilisés au monde, les pirates le trouvent en une seconde."
    },
    {
      id: "3",
      type: "qcm",
      question: "Un bon mot de passe doit idéalement contenir :",
      options: ["Uniquement des chiffres", "Uniquement des lettres minuscules", "Un mélange de minuscules, majuscules, chiffres et caractères spéciaux", "Ton prénom et ton année de naissance"],
      reponse: "Un mélange de minuscules, majuscules, chiffres et caractères spéciaux",
      explication: "Plus c'est complexe, plus c'est difficile à craquer par un ordinateur."
    },
    {
      id: "4",
      type: "qcm",
      question: "Dois-tu donner ton mot de passe à ton meilleur ami ?",
      options: ["Oui, on partage tout", "Non, un mot de passe est strictement personnel", "Seulement s'il me donne le sien", "Seulement pour les jeux"],
      reponse: "Non, un mot de passe est strictement personnel",
      explication: "Même avec ses amis, on peut se fâcher. Un compte doit rester privé."
    },
    {
      id: "5",
      type: "qcm",
      question: "Faut-il utiliser le même mot de passe pour tous tes comptes (Instagram, e-mail, jeux...) ?",
      options: ["Oui, c'est plus simple pour s'en souvenir", "Non, car si un pirate en trouve un, il peut accéder à tous tes comptes", "Oui, car c'est plus sûr", "C'est obligatoire"],
      reponse: "Non, car si un pirate en trouve un, il peut accéder à tous tes comptes",
      explication: "C'est comme avoir la même clé pour ta maison, ta voiture et ton coffre-fort."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce qu'un 'gestionnaire de mots de passe' ?",
      options: ["Un carnet papier", "Un logiciel qui retient tous tes mots de passe compliqués pour toi", "Le directeur de l'école", "Un pirate"],
      reponse: "Un logiciel qui retient tous tes mots de passe compliqués pour toi",
      explication: "C'est un outil très sûr pour gérer des dizaines de mots de passe différents."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le fait de devoir valider une connexion sur son téléphone en plus du mot de passe ?",
      options: ["La double vérification (ou authentification à deux facteurs)", "Le contrôle parental", "La punition numérique", "Le deuxième mot de passe"],
      reponse: "La double vérification (ou authentification à deux facteurs)",
      explication: "C'est le moyen le plus efficace d'empêcher quelqu'un de voler ton compte."
    },
    {
      id: "8",
      type: "qcm",
      question: "Est-ce une bonne idée d'écrire son mot de passe sur un post-it collé sur l'écran ?",
      options: ["Oui, pour ne pas l'oublier", "Non, n'importe qui passant devant peut le voir", "Seulement si le post-it est rose", "Oui, c'est très courant"],
      reponse: "Non, n'importe qui passant devant peut le voir",
      explication: "La sécurité commence aussi dans le monde réel."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que faut-il faire si tu penses que quelqu'un a trouvé ton mot de passe ?",
      options: ["Supprimer l'ordinateur", "Le changer immédiatement sur tous tes comptes", "Attendre de voir s'il se passe quelque chose", "Rien"],
      reponse: "Le changer immédiatement sur tous tes comptes",
      explication: "Il faut réagir vite pour bloquer l'accès au pirate."
    },
    {
      id: "10",
      type: "qcm",
      question: "Lequel de ces éléments est déconseillé dans un mot de passe ?",
      options: ["Le mot 'Password'", "Ton nom de famille", "Ta date de naissance", "Toutes ces réponses"],
      reponse: "Toutes ces réponses",
      explication: "Évite tout ce qui est lié à ta vie publique ou trop évident."
    }
  ]
};
