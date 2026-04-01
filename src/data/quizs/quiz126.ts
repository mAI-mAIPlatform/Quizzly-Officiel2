import { Quiz } from "@/types/quiz";

export const quiz126: Quiz = {
  id: "126",
  titre: "Échecs & Stratégie ♟️",
  description: "Testez votre sens tactique sur le plus célèbre des jeux de plateau.",
  theme: "Culture Générale",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien de cases compose un échiquier ?",
      options: ["32", "48", "64", "81"],
      reponse: "64",
      explication: "L'échiquier est un carré de 8x8 cases."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle pièce peut sauter par-dessus les autres ?",
      options: ["La Reine", "Le Fou", "Le Cavalier", "La Tour"],
      reponse: "Le Cavalier",
      explication: "Le cavalier se déplace en 'L' et peut franchir les autres pièces."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on le coup qui met fin à la partie ?",
      options: ["Échec", "Mat", "Échec et Mat", "Pat"],
      reponse: "Échec et Mat",
      explication: "Cela signifie que le roi est attaqué et ne peut plus s'échapper."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle pièce est la plus puissante sur l'échiquier ?",
      options: ["Le Roi", "La Dame (Reine)", "La Tour", "Le Cavalier"],
      reponse: "La Dame (Reine)",
      explication: "La dame combine les mouvements de la tour et du fou."
    },
    {
      id: "5",
      type: "qcm",
      question: "Combien de pions chaque joueur possède-t-il au début ?",
      options: ["4", "6", "8", "10"],
      reponse: "8",
      explication: "Les 8 pions forment la première ligne de défense (ou d'attaque)."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel mouvement spécial permet de protéger son roi et de mobiliser une tour en même temps ?",
      options: ["La promotion", "Le roque", "La prise en passant", "Le gambit"],
      reponse: "Le roque",
      explication: "C'est le seul coup où l'on déplace deux pièces à la fois."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la valeur théorique habituelle d'une Tour ?",
      options: ["1 point", "3 points", "5 points", "9 points"],
      reponse: "5 points",
      explication: "La tour vaut généralement 5 points, contre 3 pour le cavalier ou le fou."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle pièce restera toujours sur des cases de la même couleur ?",
      options: ["Le Fou", "Le Cavalier", "La Dame", "Le Roi"],
      reponse: "Le Fou",
      explication: "Chaque joueur a un fou de cases blanches et un fou de cases noires."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quand un pion atteint la dernière rangée, il peut être transformé en n'importe quelle pièce (sauf le roi). C'est...",
      options: ["La mutation", "La promotion", "L'élévation", "Le couronnement"],
      reponse: "La promotion",
      explication: "On choisit le plus souvent de le transformer en Dame."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qui a été champion du monde d'échecs de 2013 à 2023 ?",
      options: ["Garry Kasparov", "Magnus Carlsen", "Bobby Fischer", "Anatoli Karpov"],
      reponse: "Magnus Carlsen",
      explication: "Le Norvégien Magnus Carlsen a dominé le monde des échecs pendant une décennie."
    }
  ]
};
