import { Quiz } from "@/types/quiz";

export const quiz704: Quiz = {
  id: "704",
  titre: "Maths : Tableaux et Graphiques 📊",
  description: "Apprenez à interpréter des données visuelles.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on un graphique en forme de cercle divisé en parts ?",
      options: ["Histogramme", "Diagramme circulaire", "Courbe", "Nuage de points"],
      reponse: "Diagramme circulaire",
      explication: "On l'appelle aussi souvent un 'camembert'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Sur quel axe lit-on généralement l'unité de temps dans un graphique ?",
      options: ["L'axe horizontal (abscisses)", "L'axe vertical (ordonnées)", "L'axe de profondeur", "Le titre"],
      reponse: "L'axe horizontal (abscisses)",
      explication: "C'est l'usage courant en mathématiques et physique."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel type de graphique est le plus adapté pour montrer une évolution dans le temps ?",
      options: ["Histogramme", "Graphique cartésien (courbe)", "Tableau", "Nuage de points"],
      reponse: "Graphique cartésien (courbe)",
      explication: "La ligne permet de visualiser facilement les montées et descentes."
    },
    {
      id: "4",
      type: "qcm",
      question: "Dans un tableau, comment appelle-t-on la rencontre d'une ligne et d'une colonne ?",
      options: ["Une case", "Une cellule", "Un point", "Un tiroir"],
      reponse: "Une cellule",
      explication: "C'est le terme technique utilisé notamment dans les tableurs."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que signifie 'légende' dans un graphique ?",
      options: ["Une histoire imaginaire", "L'explication des couleurs/symboles", "Le nom du créateur", "Le titre du graphique"],
      reponse: "L'explication des couleurs/symboles",
      explication: "Elle permet de savoir à quoi correspond chaque élément visuel."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel graphique utilise des bâtons pour représenter des quantités ?",
      options: ["Diagramme en bâtons (ou histogramme)", "Diagramme circulaire", "Ligne brisée", "Schéma"],
      reponse: "Diagramme en bâtons (ou histogramme)",
      explication: "Idéal pour comparer des catégories distinctes."
    },
    {
      id: "7",
      type: "qcm",
      question: "Si la somme des pourcentages d'un diagramme circulaire n'est pas 100%, que se passe-t-il ?",
      options: ["Il y a une erreur", "C'est normal", "Le graphique est en 3D", "L'échelle est logarithmique"],
      reponse: "Il y a une erreur",
      explication: "Un cercle complet représente la totalité (100%)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Que représente la moyenne d'une série de données ?",
      options: ["La valeur centrale", "La somme divisée par le nombre de valeurs", "La valeur la plus fréquente", "Le maximum"],
      reponse: "La somme divisée par le nombre de valeurs",
      explication: "C'est l'indicateur statistique de base."
    },
    {
      id: "9",
      type: "qcm",
      question: "Sur un graphique, quel est le nom du point de coordonnées (0, 0) ?",
      options: ["Le début", "L'origine", "Le zéro", "Le centre"],
      reponse: "L'origine",
      explication: "C'est le point d'intersection des axes x et y."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on le titre que l'on donne aux axes d'un graphique ?",
      options: ["Les labels", "Les légendes", "Les intitulés", "Les chapitres"],
      reponse: "Les labels",
      explication: "On parle souvent de labels ou d'étiquettes d'axes."
    }
  ]
};
