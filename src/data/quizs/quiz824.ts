import { Quiz } from "@/types/quiz";

export const quiz824: Quiz = {
  id: "824",
  titre: "Littérature : Molière et le Théâtre 🎭",
  description: "Entrez en scène avec le plus célèbre dramaturge français.",
  theme: "Littérature",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel était le vrai nom de Molière ?",
      options: ["Jean de La Fontaine", "Jean-Baptiste Poquelin", "Pierre Corneille", "Jean Racine"],
      reponse: "Jean-Baptiste Poquelin",
      explication: "Il a choisi Molière comme nom de scène."
    },
    {
      id: "2",
      type: "qcm",
      question: "Pour quel grand roi Molière a-t-il écrit et joué ses pièces ?",
      options: ["Henri IV", "Louis XIV", "Louis XVI", "Napoléon"],
      reponse: "Louis XIV",
      explication: "Le Roi-Soleil aimait beaucoup les spectacles."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Molière écrivait principalement des tragédies (qui finissent mal).",
      reponse: "Faux",
      explication: "C'est le maître de la comédie. Il aimait faire rire pour dénoncer les défauts des hommes."
    },
    {
      id: "4",
      type: "courte",
      question: "Dans quelle pièce trouve-t-on le personnage d'Harpagon, un homme très radin ? L'...",
      reponse: "Avare",
      explication: "Il hurle 'Au voleur ! Au voleur !' quand on lui prend sa cassette."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle l'endroit où les spectateurs s'assoient au théâtre ?",
      options: ["La scène", "Les coulisses", "La salle (ou le parterre)", "Le foyer"],
      reponse: "La salle (ou le parterre)",
      explication: "Le décor se trouve sur la scène."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Un monologue est une réplique qu'un personnage se dit à lui-même.",
      reponse: "Vrai",
      explication: "Il est alors seul sur scène pour partager ses pensées avec le public."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la dernière pièce jouée par Molière (il est mort presque sur scène) ?",
      options: ["Dom Juan", "Tartuffe", "Le Malade imaginaire", "Les Fourberies de Scapin"],
      reponse: "Le Malade imaginaire",
      explication: "Il y jouait Argan, un personnage persuadé d'être malade."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on les indications de mise en scène écrites par l'auteur (gestes, ton...) ?",
      reponse: "Didascalies",
      explication: "Elles sont souvent écrites en italique."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel personnage de Molière est un serviteur rusé qui adore faire des bêtises et des tours ?",
      options: ["Alceste", "Scapin", "Orgon", "Harpagon"],
      reponse: "Scapin",
      explication: "Célèbre pour ses 'fourberies'."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "À l'époque de Molière, les femmes n'avaient pas le droit de jouer au théâtre.",
      reponse: "Faux",
      explication: "Contrairement à l'Angleterre de Shakespeare, les actrices étaient présentes sur scène en France au XVIIème siècle."
    }
  ]
};
