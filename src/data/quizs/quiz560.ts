import { Quiz } from "@/types/quiz";

export const quiz560: Quiz = {
  id: "560",
  titre: "Physique-Chimie : Changements d'état de l'eau 💧",
  description: "Maîtrisez le vocabulaire pour passer du solide au liquide ou au gaz.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on le passage de l'état solide à l'état liquide (ex: glaçon qui fond) ?",
      options: ["Solidification", "Fusion", "Liquéfaction", "Sublimation"],
      reponse: "Fusion",
      explication: "On dit que la glace fond (fusion)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on le passage de l'état liquide à l'état solide (ex: eau qui devient glace) ?",
      options: ["Fusion", "Solidification", "Évaporation", "Vaporisation"],
      reponse: "Solidification",
      explication: "Le liquide devient solide."
    },
    {
      id: "3",
      type: "qcm",
      question: "Le passage du liquide au gaz s'appelle :",
      options: ["La condensation", "La vaporisation (ou évaporation)", "La fusion", "La solidification"],
      reponse: "La vaporisation (ou évaporation)",
      explication: "L'eau se transforme en vapeur."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on le passage de la vapeur (gaz) à l'état liquide ?",
      options: ["La liquéfaction (ou condensation liquide)", "La fusion", "La sublimation", "La vaporisation"],
      reponse: "La liquéfaction (ou condensation liquide)",
      explication: "C'est ce qui forme la buée sur les vitres ou les nuages."
    },
    {
      id: "5",
      type: "qcm",
      question: "La 'buée' que l'on voit au-dessus d'une casserole est-elle de la vapeur d'eau ?",
      options: ["Oui, tout à fait", "Non, c'est du gaz invisible", "Non, ce sont de minuscules gouttelettes d'eau liquide", "C'est de la fumée"],
      reponse: "Non, ce sont de minuscules gouttelettes d'eau liquide",
      explication: "La vapeur d'eau est un gaz INVISIBLE. Si on voit du blanc, c'est qu'elle s'est déjà liquéfiée."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle différence entre 'vaporisation' et 'ébullition' ?",
      options: ["C'est la même chose", "L'ébullition est une vaporisation violente avec formation de bulles dans tout le liquide", "La vaporisation ne se fait qu'au pôle Nord", "Le nom change selon la couleur"],
      reponse: "L'ébullition est une vaporisation violente avec formation de bulles dans tout le liquide",
      explication: "L'ébullition a lieu à 100°C pour l'eau, alors que l'évaporation peut avoir lieu à toute température."
    },
    {
      id: "7",
      type: "qcm",
      question: "Lorsqu'un glaçon fond, son volume...",
      options: ["Augmente", "Diminue", "Reste le même", "Explose"],
      reponse: "Diminue",
      explication: "L'eau a la particularité de prendre plus de place à l'état solide qu'à l'état liquide (c'est rare !)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Lors d'un changement d'état (ex: 100g de glace font 100g d'eau), quelle grandeur reste la même ?",
      options: ["Le volume", "La masse", "La température", "La couleur"],
      reponse: "La masse",
      explication: "La masse se conserve toujours lors d'un changement d'état."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle le passage direct du solide au gaz (sans passer par le liquide) ?",
      options: ["Sublimation", "Condensation", "Fusion", "Liquéfaction"],
      reponse: "Sublimation",
      explication: "C'est le cas de la glace carbonique par exemple."
    },
    {
      id: "10",
      type: "qcm",
      question: "Pourquoi l'herbe est-elle mouillée le matin (la rosée) alors qu'il n'a pas plu ?",
      options: ["À cause des arrosages automatiques", "C'est la vapeur d'eau de l'air qui s'est liquéfiée au contact de l'herbe froide", "L'herbe produit de l'eau", "C'est la fonte des glaces"],
      reponse: "C'est la vapeur d'eau de l'air qui s'est liquéfiée au contact de l'herbe froide",
      explication: "C'est la liquéfaction de l'humidité de l'air."
    }
  ]
};
