import { Quiz } from "@/types/quiz";

export const quiz784: Quiz = {
  id: "784",
  titre: "Mythologie : Les 12 Travaux d'Hercule 💪",
  description: "Testez vos connaissances sur l'un des héros les plus célèbres de la Grèce antique.",
  theme: "Culture Générale",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Hercule est un héros grec, comment les Grecs l'appelaient-ils ?",
      options: ["Achille", "Héraclès", "Persée", "Thésée"],
      reponse: "Héraclès",
      explication: "Hercule est son nom romain."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel était le tout premier travail d'Hercule ?",
      options: ["Tuer l'Hydre de Lerne", "Tuer le Lion de Némée", "Nettoyer les écuries d'Augias", "Capturer Cerbère"],
      reponse: "Tuer le Lion de Némée",
      explication: "Il s'est ensuite servi de sa peau invincible comme armure."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'Hydre de Lerne était un monstre qui avait plusieurs têtes qui repoussaient.",
      reponse: "Vrai",
      explication: "Si on lui coupait une tête, deux autres poussaient à la place !"
    },
    {
      id: "4",
      type: "courte",
      question: "Quel lieu très sale Hercule a-t-il dû nettoyer en un jour en détournant deux fleuves ?",
      reponse: "Les écuries d'Augias",
      explication: "Elles n'avaient pas été nettoyées depuis 30 ans."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle le chien à trois têtes qui garde les Enfers, qu'Hercule doit capturer ?",
      options: ["Argos", "Cerbère", "Fidèle", "Médor"],
      reponse: "Cerbère",
      explication: "C'est son douzième et dernier travail."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Hercule est le fils de Zeus.",
      reponse: "Vrai",
      explication: "Sa mère est Alcmène (une mortelle)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'Hercule devait ramener du jardin des Hespérides ?",
      options: ["Des fleurs magiques", "Des pommes d'or", "De l'eau de jouvence", "Le chant des sirènes"],
      reponse: "Des pommes d'or",
      explication: "Pour cela, il a dû ruser avec le géant Atlas qui portait le monde sur ses épaules."
    },
    {
      id: "8",
      type: "courte",
      question: "Quelle déesse, femme de Zeus, détestait Hercule et lui a envoyé des épreuves ?",
      reponse: "Héra",
      explication: "C'est elle qui a rendu Hercule fou, l'obligeant à faire ces travaux pour se racheter."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel animal gigantesque Hercule a-t-il dû ramener vivant d'Érymanthe ?",
      options: ["Un taureau", "Un sanglier", "Un cerf", "Un aigle"],
      reponse: "Un sanglier",
      explication: "Le sanglier d'Érymanthe."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Hercule est devenu un dieu après sa mort.",
      reponse: "Vrai",
      explication: "Il a rejoint l'Olympe pour l'éternité."
    }
  ]
};
