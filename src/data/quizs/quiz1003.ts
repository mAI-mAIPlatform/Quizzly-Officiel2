import { Quiz } from "@/types/quiz";

export const quiz1003: Quiz = {
  id: "1003",
  titre: "📚 Français Express : Maîtrise des Bases",
  description: "Orthographe, grammaire et vocabulaire pour gagner en précision en français.",
  theme: "Littérature",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle phrase est correctement orthographiée ?",
      options: ["Ils ont prit le train", "Ils ont pris le train", "Ils on pris le train", "Ils ont prient le train"],
      reponse: "Ils ont pris le train",
      explication: "Le participe passé du verbe prendre est pris."
    },
    {
      id: "2",
      type: "qcm",
      question: "Dans 'Les élèves révisent', quel est le verbe ?",
      options: ["Les", "élèves", "révisent", "aucun"],
      reponse: "révisent",
      explication: "Le verbe exprime l'action réalisée par le sujet."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "'a' (sans accent) est une forme du verbe avoir.",
      reponse: "Vrai",
      explication: "Exemple : Il a un livre."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel signe de ponctuation termine une phrase interrogative ?",
      reponse: "Le point d'interrogation",
      explication: "Le point d'interrogation (?) marque une question."
    },
    {
      id: "5",
      type: "vrai_faux",
      question: "Un synonyme est un mot qui a le même sens ou un sens proche.",
      reponse: "Vrai",
      explication: "Exemple : rapide et vif peuvent être synonymes selon le contexte."
    }
  ]
};
