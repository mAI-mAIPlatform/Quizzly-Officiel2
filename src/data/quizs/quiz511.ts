import { Quiz } from "@/types/quiz";

export const quiz511: Quiz = {
  id: "511",
  titre: "Français : Les Types de Phrases 💬",
  description: "Distinguez les phrases déclaratives, interrogatives, exclamatives et injonctives.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel type de phrase sert à donner une information ou raconter un fait ?",
      options: ["Phrase interrogative", "Phrase déclarative", "Phrase injonctive", "Phrase exclamative"],
      reponse: "Phrase déclarative",
      explication: "C'est le type de phrase le plus courant, elle se termine par un point."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel signe de ponctuation termine une phrase interrogative ?",
      options: ["Point final (.)", "Point d'exclamation (!)", "Point d'interrogation (?)", "Points de suspension (...)"],
      reponse: "Point d'interrogation (?)",
      explication: "Elle sert à poser une question."
    },
    {
      id: "3",
      type: "qcm",
      question: "La phrase 'Range ta chambre !' est de quel type ?",
      options: ["Déclaratif", "Interrogatif", "Injonctif (ou impératif)", "Exclamatif"],
      reponse: "Injonctif (ou impératif)",
      explication: "Elle sert à donner un ordre, un conseil ou une interdiction."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel type de phrase exprime un sentiment fort (joie, colère, surprise) ?",
      options: ["Phrase exclamative", "Phrase déclarative", "Phrase interrogative", "Phrase neutre"],
      reponse: "Phrase exclamative",
      explication: "Elle se termine par un point d'exclamation."
    },
    {
      id: "5",
      type: "qcm",
      question: "Transformez 'Tu viens' en phrase interrogative avec inversion du sujet :",
      options: ["Tu viens ?", "Est-ce que tu viens ?", "Viens-tu ?", "Tu ne viens pas ?"],
      reponse: "Viens-tu ?",
      explication: "Le sujet est placé après le verbe et relié par un trait d'union."
    },
    {
      id: "6",
      type: "qcm",
      question: "Une phrase injonctive peut se terminer par...",
      options: ["Un point ou un point d'exclamation", "Seulement un point d'interrogation", "Seulement une virgule", "Rien"],
      reponse: "Un point ou un point d'exclamation",
      explication: "Cela dépend de la force de l'ordre ou du conseil."
    },
    {
      id: "7",
      type: "qcm",
      question: "'Comme il fait beau !' est une phrase...",
      options: ["Interrogative", "Exclamative", "Déclarative", "Injonctive"],
      reponse: "Exclamative",
      explication: "L'utilisation de 'Comme' en début de phrase renforce l'exclamation."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on une phrase qui contient une négation (ne... pas, ne... plus) ?",
      options: ["Une phrase affirmative", "Une phrase négative", "Une phrase complexe", "Une phrase simple"],
      reponse: "Une phrase négative",
      explication: "C'est une forme de phrase qui s'oppose à la forme affirmative."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans 'Est-ce qu'il pleut ?', quel est le type de phrase ?",
      options: ["Déclaratif", "Interrogatif", "Injonctif", "Exclamatif"],
      reponse: "Interrogatif",
      explication: "La structure 'Est-ce que' marque l'interrogation."
    },
    {
      id: "10",
      type: "qcm",
      question: "Une phrase déclarative peut-elle être négative ?",
      options: ["Oui", "Non", "Seulement si elle est exclamative", "Jamais"],
      reponse: "Oui",
      explication: "Exemple : 'Il ne mange pas de soupe' est une phrase déclarative de forme négative."
    }
  ]
};
