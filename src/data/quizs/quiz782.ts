import { Quiz } from "@/types/quiz";

export const quiz782: Quiz = {
  id: "782",
  titre: "Culture : Inventions du XIXème Siècle 🚂",
  description: "Découvrez les grandes découvertes d'un siècle de révolutions techniques.",
  theme: "Culture Générale",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui a inventé le premier vaccin contre la rage en 1885 ?",
      options: ["Robert Koch", "Louis Pasteur", "Marie Curie", "Charles Darwin"],
      reponse: "Louis Pasteur",
      explication: "Il a aussi inventé la pasteurisation."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel inventeur a déposé le brevet du téléphone en 1876 ?",
      options: ["Thomas Edison", "Graham Bell", "Samuel Morse", "Nikola Tesla"],
      reponse: "Graham Bell",
      explication: "Bien que d'autres inventeurs y aient aussi travaillé."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La locomotive à vapeur est une invention du XIXème siècle.",
      reponse: "Vrai",
      explication: "Elle a permis le développement du chemin de fer."
    },
    {
      id: "4",
      type: "courte",
      question: "Qui a inventé le Cinématographe (premier projecteur de cinéma) ?",
      reponse: "Frères Lumière",
      explication: "Louis et Auguste Lumière, en 1895."
    },
    {
      id: "5",
      type: "qcm",
      question: "À quoi servait le code inventé par Samuel Morse ?",
      options: ["À parler aux animaux", "À transmettre des messages par signaux courts et longs (télégraphe)", "À coder des programmes informatiques", "À écrire de la musique"],
      reponse: "À transmettre des messages par signaux courts et longs (télégraphe)",
      explication: "Le célèbre code Morse."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Thomas Edison a inventé l'ampoule électrique (lampe à incandescence).",
      reponse: "Vrai",
      explication: "Il a rendu l'ampoule durable et commercialisable."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle femme scientifique a découvert le radium et le polonium ?",
      options: ["Rosalind Franklin", "Marie Curie", "Ada Lovelace", "Irène Joliot-Curie"],
      reponse: "Marie Curie",
      explication: "Elle est la seule personne à avoir reçu deux prix Nobel dans deux domaines différents."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le premier procédé photographique (1839) ?",
      reponse: "Daguerréotype",
      explication: "Inventé par Louis Daguerre."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel inventeur a créé la dynamite ?",
      options: ["Alfred Nobel", "John Pemberton", "Guglielmo Marconi", "Rudolf Diesel"],
      reponse: "Alfred Nobel",
      explication: "C'est avec sa fortune qu'ont été créés les prix Nobel."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le moteur à explosion (essence) date du XIXème siècle.",
      reponse: "Vrai",
      explication: "Notamment grâce à Étienne Lenoir et Gottlieb Daimler."
    }
  ]
};
