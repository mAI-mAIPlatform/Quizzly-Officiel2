import { Quiz } from "@/types/quiz";

export const quiz971: Quiz = {
  id: "971",
  titre: "Inventions : L'Imprimerie 📚🖨️",
  description: "Découvrez l'invention qui a permis de diffuser le savoir à travers le monde.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est considéré comme l'inventeur de l'imprimerie moderne en Europe ?",
      options: ["Léonard de Vinci", "Johannes Gutenberg", "Isaac Newton", "Albert Einstein"],
      reponse: "Johannes Gutenberg",
      explication: "Il a perfectionné la technique des caractères mobiles en métal vers 1450."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le premier livre complet imprimé par Gutenberg ?",
      options: ["Le Roman de Renart", "La Bible", "Le Petit Prince", "Un dictionnaire"],
      reponse: "La Bible",
      explication: "Appelée 'Bible à 42 lignes', c'est un chef-d'œuvre de technique."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Avant l'imprimerie, les livres étaient recopiés à la main par des moines.",
      reponse: "Vrai",
      explication: "On les appelait des 'moines copistes'. Cela prenait des mois pour faire un seul livre."
    },
    {
      id: "4",
      type: "courte",
      question: "De quel métal étaient faits les petits moules représentant chaque lettre de l'alphabet ?",
      reponse: "Plomb",
      explication: "On utilisait un alliage de plomb, d'étain et d'antimoine."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle machine Gutenberg a-t-il adaptée pour presser le papier sur les lettres encrées ?",
      options: ["Un moulin à eau", "Un pressoir à raisin", "Une charrue", "Un métier à tisser"],
      reponse: "Un pressoir à raisin",
      explication: "Il a détourné cette machine agricole pour son invention."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'imprimerie a été inventée en France au 18ème siècle.",
      reponse: "Faux",
      explication: "Elle a été inventée en Allemagne (Mayence) au milieu du 15ème siècle."
    },
    {
      id: "7",
      type: "qcm",
      question: "Pourquoi l'imprimerie a-t-elle été une véritable révolution ?",
      options: ["Parce qu'elle faisait beaucoup de bruit", "Parce qu'elle a permis de fabriquer des livres beaucoup plus vite et moins cher", "Parce qu'on pouvait imprimer en couleur tout de suite", "Parce qu'elle utilisait de l'électricité"],
      reponse: "Parce qu'elle a permis de fabriquer des livres beaucoup plus vite et moins cher",
      explication: "Grâce à elle, beaucoup plus de gens ont pu apprendre à lire et s'instruire."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle l'encre spéciale, plus grasse que l'encre normale, utilisée par Gutenberg ?",
      reponse: "Encre typographique",
      explication: "Elle devait adhérer parfaitement au métal des caractères."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans quel pays d'Asie utilisait-on déjà des techniques d'impression bien avant Gutenberg ?",
      options: ["Aux USA", "En Chine", "En Australie", "En Égypte"],
      reponse: "En Chine",
      explication: "Les Chinois utilisaient la xylographie (gravure sur bois) dès le 7ème siècle."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Grâce à l'imprimerie, les idées de la Renaissance se sont diffusées dans toute l'Europe.",
      reponse: "Vrai",
      explication: "C'est l'un des piliers qui a mis fin au Moyen-Âge."
    }
  ]
};
