import { Quiz } from "@/types/quiz";

export const quiz420: Quiz = {
  id: "420",
  titre: "Technologie : L'Invention de l'Imprimerie 📚🖨️",
  description: "Découvrez la révolution qui a permis la diffusion du savoir.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est l'inventeur européen de l'imprimerie à caractères mobiles vers 1450 ?",
      options: ["Léonard de Vinci", "Johannes Gutenberg", "Isaac Newton", "Galilée"],
      reponse: "Johannes Gutenberg",
      explication: "L'orfèvre allemand a combiné plusieurs inventions pour créer sa presse."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le premier livre majeur imprimé par Gutenberg ?",
      options: ["Le Code Civil", "La Bible", "L'Odyssée", "Un dictionnaire"],
      reponse: "La Bible",
      explication: "Appelée 'Bible à 42 lignes' ou 'Bible de Gutenberg'."
    },
    {
      id: "3",
      type: "qcm",
      question: "Avants l'imprimerie, comment les livres étaient-ils reproduits en Europe ?",
      options: ["Ils n'étaient pas reproduits", "Ils étaient copiés à la main par des moines copistes", "Avec des tampons en pomme de terre", "D'une seule pièce gravée dans le bois"],
      reponse: "Ils étaient copiés à la main par des moines copistes",
      explication: "C'était un travail extrêmement long et coûteux (un livre pouvait prendre un an)."
    },
    {
      id: "4",
      type: "qcm",
      question: "En quoi consistait l'innovation des 'caractères mobiles' ?",
      options: ["Les lettres se déplaçaient toutes seules", "On pouvait réutiliser des lettres en métal individuelles pour composer n'importe quel texte", "Les lettres étaient en caoutchouc", "Les livres étaient mobiles"],
      reponse: "On pouvait réutiliser des lettres en métal individuelles pour composer n'importe quel texte",
      explication: "C'est ce qui a permis de produire des livres en masse."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel pays avait déjà inventé des systèmes d'imprimerie bien avant l'Europe ?",
      options: ["L'Égypte", "La Chine", "Le Mexique", "La Grèce"],
      reponse: "La Chine",
      explication: "Les Chinois utilisaient la xylographie (gravure sur bois) dès le VIIe siècle et des caractères mobiles en céramique au XIe siècle."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel ingrédient Gutenberg a-t-il dû améliorer pour que l'encre adhère bien au métal ?",
      options: ["Elle était à base d'eau", "Elle était à base d'huile", "Elle était à base de vinaigre", "Elle était à base de miel"],
      reponse: "Elle était à base d'huile",
      explication: "L'encre grasse était nécessaire pour marquer les caractères métalliques."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on les livres imprimés avant l'an 1501 ?",
      options: ["Les manuscrits", "Les incunables", "Les parchemins", "Les grimoires"],
      reponse: "Les incunables",
      explication: "Du latin 'incunabula' (berceau), désignant la période d'enfance de l'imprimerie."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle grande période historique l'imprimerie a-t-elle favorisée en diffusant les idées nouvelles ?",
      options: ["Le Moyen Âge", "La Renaissance", "L'Empire Romain", "La Préhistoire"],
      reponse: "La Renaissance",
      explication: "L'accès aux textes anciens et aux idées des humanistes a été multiplié par mille."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel métier consistait à placer les caractères mobiles un par un pour former les pages ?",
      options: ["Imprimeur", "Typographe (ou Compositeur)", "Correcteur", "Libraire"],
      reponse: "Typographe (ou Compositeur)",
      explication: "Il travaillait avec une 'casse' (tiroir à caractères)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle machine a remplacé la typographie manuelle à la fin du XIXe siècle en permettant de fondre une ligne entière de caractères ?",
      options: ["L'ordinateur", "La Linotype", "L'imprimante laser", "La machine à écrire"],
      reponse: "La Linotype",
      explication: "Elle a révolutionné la presse quotidienne en accélérant considérablement la composition."
    }
  ]
};
