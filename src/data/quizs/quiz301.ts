import { Quiz } from "@/types/quiz";

export const quiz301: Quiz = {
  id: "301",
  titre: "Mythologie Grecque : Les 12 Travaux d'Hercule 💪",
  description: "Testez vos connaissances sur les exploits légendaires du plus célèbre demi-dieu.",
  theme: "Histoire",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le premier travail d'Hercule ?",
      options: ["Tuer l'Hydre de Lerne", "Étouffer le Lion de Némée", "Capturer la Biche de Cérynie", "Nettoyer les Écuries d'Augias"],
      reponse: "Étouffer le Lion de Némée",
      explication: "Sa peau était si dure que seule sa propre griffe pouvait la percer."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien de têtes possédait l'Hydre de Lerne ?",
      options: ["3", "7", "9", "12"],
      reponse: "9",
      explication: "Chaque fois qu'on lui coupait une tête, deux nouvelles repoussaient."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment Hercule a-t-il nettoyé les écuries d'Augias en un seul jour ?",
      options: ["Avec une pelle géante", "En détournant deux fleuves", "En utilisant sa force", "Avec l'aide d'Atlas"],
      reponse: "En détournant deux fleuves",
      explication: "Il a détourné l'Alphée et le Pénée pour tout balayer."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel animal Hercule devait-il ramener vivant d'Érymanthe ?",
      options: ["Un taureau", "Un sanglier", "Un lion", "Un loup"],
      reponse: "Un sanglier",
      explication: "C'était un sanglier géant qui terrorisait la région."
    },
    {
      id: "5",
      type: "qcm",
      question: "Les oiseaux du lac Stymphale avaient des plumes en...",
      options: ["Acier", "Or", "Bronze", "Fer"],
      reponse: "Bronze",
      explication: "Ils s'en servaient comme de flèches pour attaquer."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qui a aidé Hercule à cueillir les pommes d'or du jardin des Hespérides ?",
      options: ["Zeus", "Hermès", "Atlas", "Prométhée"],
      reponse: "Atlas",
      explication: "Hercule a porté le ciel pendant qu'Atlas allait chercher les pommes."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est l'être à trois têtes qu'Hercule a ramené des Enfers ?",
      options: ["Cerbère", "Chimère", "Minotaure", "Géryon"],
      reponse: "Cerbère",
      explication: "Le chien gardien des Enfers."
    },
    {
      id: "8",
      type: "qcm",
      question: "La biche de Cérynie appartenait à quelle déesse ?",
      options: ["Héra", "Artémis", "Athéna", "Aphrodite"],
      reponse: "Artémis",
      explication: "Elle avait des cornes d'or et des sabots d'airain."
    },
    {
      id: "9",
      type: "qcm",
      question: "À qui appartenaient les juments mangeuses d'hommes qu'Hercule a dû capturer ?",
      options: ["Géryon", "Diomède", "Hippolyte", "Augias"],
      reponse: "Diomède",
      explication: "Elles étaient si sauvages qu'elles étaient attachées avec des chaînes de fer."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel objet Hercule devait-il rapporter de chez la reine des Amazones ?",
      options: ["Une épée", "Une ceinture", "Un bouclier", "Un casque"],
      reponse: "Une ceinture",
      explication: "C'était la ceinture d'Hippolyte, offerte par Arès."
    }
  ]
};
