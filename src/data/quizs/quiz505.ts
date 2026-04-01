import { Quiz } from "@/types/quiz";

export const quiz505: Quiz = {
  id: "505",
  titre: "Français : Le Futur Simple 🔜",
  description: "Apprenez à conjuguer les actions qui viendront plus tard.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la terminaison de 'Je' au futur simple ?",
      options: ["-ai", "-as", "-ais", "-e"],
      reponse: "-ai",
      explication: "Exemple : Je mangerai."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la règle générale pour les verbes en -er au futur ?",
      options: ["On enlève -er", "On garde l'infinitif entier et on ajoute la terminaison", "On change le radical", "On ajoute -issant"],
      reponse: "On garde l'infinitif entier et on ajoute la terminaison",
      explication: "Exemple : Chanter (infinitif) + -ai (terminaison) = Chanterai."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel est le radical du verbe 'Être' au futur ?",
      options: ["Ét-", "Ser-", "Éter-", "Sont-"],
      reponse: "Ser-",
      explication: "Je serai, tu seras, il sera..."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment écrit-on 'Tu' avec le verbe 'Avoir' au futur ?",
      options: ["Tu as", "Tu avais", "Tu auras", "Tu aurais"],
      reponse: "Tu auras",
      explication: "Le radical de avoir est aur-."
    },
    {
      id: "5",
      type: "qcm",
      question: "Conjuguez 'Nous' avec le verbe 'Aller' au futur :",
      options: ["Nous allons", "Nous irions", "Nous irons", "Nous allèrent"],
      reponse: "Nous irons",
      explication: "Le radical de aller est ir-."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle est la terminaison de 'Ils' au futur ?",
      options: ["-ent", "-ont", "-aient", "-as"],
      reponse: "-ont",
      explication: "Exemple : Ils joueront (ne pas confondre avec -ent de l'imparfait)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment écrit-on 'Il' avec le verbe 'Faire' au futur ?",
      options: ["Il fera", "Il faras", "Il faiera", "Il faisait"],
      reponse: "Il fera",
      explication: "Radical fer-."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel verbe a pour futur 'Je viendrai' ?",
      options: ["Vendre", "Venir", "Vivre", "Vaincre"],
      reponse: "Venir",
      explication: "Verbe irrégulier en -ndr-."
    },
    {
      id: "9",
      type: "qcm",
      question: "Conjuguez 'Vous' avec le verbe 'Prendre' au futur :",
      options: ["Vous prendrez", "Vous prenez", "Vous prendiez", "Vous prendrons"],
      reponse: "Vous prendrez",
      explication: "On enlève le 'e' final de l'infinitif avant d'ajouter -ez."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle est la terminaison de 'Elle' au futur ?",
      options: ["-as", "-a", "-et", "-e"],
      reponse: "-a",
      explication: "Exemple : Elle partira."
    }
  ]
};
