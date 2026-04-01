import { Quiz } from "@/types/quiz";

export const quiz150: Quiz = {
  id: "150",
  titre: "Jeux de Société 🎲",
  description: "Testez votre culture ludique sur les classiques du plateau.",
  theme: "Culture Générale",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans le Monopoly, quelle est la case la plus chère du plateau ?",
      options: ["Rue de la Paix", "Avenue des Champs-Élysées", "Gare de Lyon", "Place Pigalle"],
      reponse: "Rue de la Paix",
      explication: "Dans la version française classique, c'est la propriété de luxe par excellence."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le jeu où l'on doit faire deviner des mots en dessinant ?",
      options: ["Taboo", "Pictionary", "Scrabble", "Trivial Pursuit"],
      reponse: "Pictionary",
      explication: "Un joueur dessine tandis que ses coéquipiers tentent de deviner le mot."
    },
    {
      id: "3",
      type: "qcm",
      question: "Combien de camemberts (triangles) faut-il collecter pour gagner au Trivial Pursuit ?",
      options: ["4", "5", "6", "8"],
      reponse: "6",
      explication: "Un pour chaque catégorie de culture générale."
    },
    {
      id: "4",
      type: "qcm",
      question: "Dans le jeu du Cluedo, qui est la victime du meurtre ?",
      options: ["Le Colonel Moutarde", "Mademoiselle Rose", "Le Docteur Lenoir", "Madame Pervenche"],
      reponse: "Le Docteur Lenoir",
      explication: "Les joueurs doivent trouver le coupable, le lieu et l'arme du crime."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel jeu de lettres consiste à placer des mots sur une grille pour gagner des points ?",
      options: ["Scrabble", "Boggle", "Sudoku", "Mots Croisés"],
      reponse: "Scrabble",
      explication: "Certaines cases multiplient les points des lettres ou des mots."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans quel jeu de cartes doit-on crier le nom du jeu lorsqu'il ne nous reste qu'une carte ?",
      options: ["Belote", "Poker", "Uno", "Tarot"],
      reponse: "Uno",
      explication: "Si on oublie de dire 'Uno', on peut recevoir une pénalité."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel jeu consiste à empiler des blocs de bois sans faire tomber la tour ?",
      options: ["Lego", "Jenga", "Mikado", "Kapla"],
      reponse: "Jenga",
      explication: "On retire un bloc d'un étage pour le reposer au sommet."
    },
    {
      id: "8",
      type: "qcm",
      question: "En quelle année est sorti le jeu 'Les Loups-Garous de Thiercelieux' ?",
      options: ["1981", "1991", "2001", "2011"],
      reponse: "2001",
      explication: "C'est devenu un classique des jeux d'ambiance et de déduction."
    },
    {
      id: "9",
      type: "qcm",
      question: "Combien de pions chaque joueur possède-t-il au début d'une partie de Petits Chevaux ?",
      options: ["2", "3", "4", "5"],
      reponse: "4",
      explication: "Le but est de faire le tour du plateau et d'entrer dans l'écurie."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel jeu de stratégie asiatique se joue avec des pions noirs et blancs sur une grille de 19x19 ?",
      options: ["Les Échecs", "Le Go", "Le Mah-jong", "Les Dames"],
      reponse: "Le Go",
      explication: "Le but est de contrôler le plus grand territoire possible sur le plateau."
    }
  ]
};
