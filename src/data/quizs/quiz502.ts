import { Quiz } from "@/types/quiz";

export const quiz502: Quiz = {
  id: "502",
  titre: "Français : Le Présent de l'Indicatif ✍️",
  description: "Révisez les terminaisons des verbes au présent.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la terminaison de 'Je' pour les verbes du 1er groupe (-er) ?",
      options: ["-s", "-e", "-t", "-x"],
      reponse: "-e",
      explication: "Exemple : Je chante, je mange."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment écrit-on 'Nous' avec le verbe 'Finir' ?",
      options: ["Nous finissons", "Nous finisons", "Nous finirent", "Nous finissions"],
      reponse: "Nous finissons",
      explication: "Verbe du 2ème groupe, on ajoute -ssons."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la bonne conjugaison de 'Ils' pour le verbe 'Aller' ?",
      options: ["Ils allons", "Ils allez", "Ils vont", "Ils vas"],
      reponse: "Ils vont",
      explication: "Le verbe aller est irrégulier (3ème groupe)."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle est la terminaison de 'Tu' au présent (presque toujours) ?",
      options: ["-e", "-t", "-s", "-z"],
      reponse: "-s",
      explication: "Exemple : Tu manges, tu finis, tu vas (sauf quelques exceptions comme tu peux/veux/vaux)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Conjuguez 'Vous' avec le verbe 'Faire' :",
      options: ["Vous faisez", "Vous faites", "Vous font", "Vous faisiez"],
      reponse: "Vous faites",
      explication: "Attention à ce verbe irrégulier très fréquent."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle est la bonne forme : 'On [vendre] des fleurs' ?",
      options: ["On vend", "On vende", "On vends", "On vendent"],
      reponse: "On vend",
      explication: "Verbe en -dre, la 3ème personne du singulier garde le 'd' (sauf -indre et -soudre)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment conjugue-t-on 'Il' pour le verbe 'Être' ?",
      options: ["Il es", "Il est", "Il ai", "Il ait"],
      reponse: "Il est",
      explication: "Je suis, tu es, il est."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la terminaison de 'Ils' au présent ?",
      options: ["-ont", "-ent", "-ez", "-ons"],
      reponse: "-ent",
      explication: "C'est la marque du pluriel pour les verbes (sauf ils ont, sont, font, vont)."
    },
    {
      id: "9",
      type: "qcm",
      question: "Conjuguez 'Nous' avec le verbe 'Manger' :",
      options: ["Nous mangons", "Nous mangeons", "Nous mangent", "Nous mangeions"],
      reponse: "Nous mangeons",
      explication: "On garde le 'e' pour que le 'g' sonne doux devant le 'o'."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est l'infinitif de 'Tu prends' ?",
      options: ["Prendre", "Préndre", "Prandre", "Prendrer"],
      reponse: "Prendre",
      explication: "Verbe du 3ème groupe en -dre."
    }
  ]
};
