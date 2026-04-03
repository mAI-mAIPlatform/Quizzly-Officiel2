import { Quiz } from "@/types/quiz";

export const quiz823: Quiz = {
  id: "823",
  titre: "Littérature : La Poésie 🖋️📜",
  description: "Jouez avec les mots, les rimes et les vers.",
  theme: "Littérature",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on une ligne dans un poème ?",
      options: ["Une phrase", "Un vers", "Une strophe", "Un paragraphe"],
      reponse: "Un vers",
      explication: "Le poème est composé d'une suite de vers."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un 'paragraphe' de poème (groupe de vers) ?",
      options: ["Un refrain", "Une strophe", "Un chapitre", "Un couplet"],
      reponse: "Une strophe",
      explication: "Les strophes sont séparées par un espace blanc."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Une rime est la répétition du même son à la fin de deux vers.",
      reponse: "Vrai",
      explication: "Exemple : 'soleil' et 'merveille'."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle un vers de 12 syllabes, très célèbre en poésie française ?",
      reponse: "Alexandrin",
      explication: "C'est le vers 'noble' par excellence."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces auteurs est un très célèbre poète français ?",
      options: ["Victor Hugo", "Zinedine Zidane", "Napoléon", "Louis Pasteur"],
      reponse: "Victor Hugo",
      explication: "Il a écrit d'immenses recueils de poésie comme 'Les Contemplations'."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Un poème doit obligatoirement avoir des rimes.",
      reponse: "Faux",
      explication: "Il existe des 'vers libres' qui ne riment pas forcément."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'une allitération ?",
      options: ["Une rime riche", "La répétition d'un même son de consonne pour créer un effet", "Un poème très court", "Une erreur d'écriture"],
      reponse: "La répétition d'un même son de consonne pour créer un effet",
      explication: "Exemple célèbre de Racine : 'Pour qui sont ces serpents qui sifflent sur vos têtes ?' (son 's')."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on un poème de 14 vers composé de deux quatrains et de deux tercets ?",
      reponse: "Sonnet",
      explication: "Une forme de poésie très classique et très utilisée."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel poète a écrit 'Le Dormeur du val', poème célèbre sur un soldat ?",
      options: ["Arthur Rimbaud", "Charles Baudelaire", "Paul Verlaine", "Guillaume Apollinaire"],
      reponse: "Arthur Rimbaud",
      explication: "Il a écrit ses plus grands chefs-d'œuvre avant l'âge de 20 ans."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Une poésie peut aussi être une chanson.",
      reponse: "Vrai",
      explication: "De nombreux poèmes ont été mis en musique (comme ceux de Jacques Prévert)."
    }
  ]
};
