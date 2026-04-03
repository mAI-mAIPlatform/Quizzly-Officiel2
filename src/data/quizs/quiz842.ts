import { Quiz } from "@/types/quiz";

export const quiz842: Quiz = {
  id: "842",
  titre: "Inventions : La Machine à Vapeur 🚂💨",
  description: "Découvrez l'invention qui a lancé la Révolution Industrielle.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel ingénieur écossais a perfectionné la machine à vapeur au XVIIIème siècle ?",
      options: ["Isaac Newton", "James Watt", "Thomas Edison", "Albert Einstein"],
      reponse: "James Watt",
      explication: "C'est sa version qui a permis une utilisation industrielle massive."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel combustible utilisait-on principalement pour faire chauffer l'eau et créer de la vapeur ?",
      options: ["Le bois", "Le charbon", "Le pétrole", "L'uranium"],
      reponse: "Le charbon",
      explication: "L'extraction du charbon est devenue une activité majeure au XIXème siècle."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La machine à vapeur a permis l'apparition des premières usines modernes.",
      reponse: "Vrai",
      explication: "On n'avait plus besoin de la force des bras ou de l'eau des rivières pour faire tourner les machines."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le véhicule de transport de passagers propulsé par la vapeur sur des rails ?",
      reponse: "Locomotive",
      explication: "La locomotive à vapeur a révolutionné le voyage terrestre."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qui a construit la première locomotive à vapeur vraiment efficace (la 'Rocket') ?",
      options: ["Robert Stephenson", "James Watt", "Denis Papin", "Nicolas Cugnot"],
      reponse: "Robert Stephenson",
      explication: "En 1829, ce fut un immense succès en Angleterre."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le premier véhicule à vapeur était une voiture appelée le 'fardier de Cugnot'.",
      reponse: "Vrai",
      explication: "Il a été créé en 1769 pour transporter des canons."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans quel pays la Révolution Industrielle a-t-elle commencé grâce à la vapeur ?",
      options: ["La France", "L'Allemagne", "Le Royaume-Uni (Angleterre)", "Les États-Unis"],
      reponse: "Le Royaume-Uni (Angleterre)",
      explication: "L'Angleterre possédait beaucoup de charbon et d'ingénieurs innovants."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un bateau propulsé par une machine à vapeur ?",
      reponse: "Bateau à vapeur",
      explication: "Ou 'steamboat' en anglais. Ils ont remplacé les voiliers."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel était le principal danger des premières machines à vapeur ?",
      options: ["Elles n'avaient pas de freins", "L'explosion de la chaudière à cause de la pression", "Elles attiraient la foudre", "Elles faisaient trop de bruit"],
      reponse: "L'explosion de la chaudière à cause de la pression",
      explication: "Si la vapeur ne pouvait pas s'échapper, tout explosait."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Aujourd'hui, on utilise encore beaucoup la vapeur pour produire de l'électricité.",
      reponse: "Vrai",
      explication: "Dans les centrales nucléaires ou thermiques, c'est la vapeur qui fait tourner les turbines."
    }
  ]
};
