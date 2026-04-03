import { Quiz } from "@/types/quiz";

export const quiz572: Quiz = {
  id: "572",
  titre: "Technologie : La CAO et le Dessin 3D 🖥️",
  description: "Découvrez comment les ingénieurs dessinent les objets sur ordinateur.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie l'acronyme CAO ?",
      options: ["Calcul Assisté par Ordinateur", "Conception Assistée par Ordinateur", "Cinéma et Animation Originale", "Code d'Accès Ordinaire"],
      reponse: "Conception Assistée par Ordinateur",
      explication: "C'est l'utilisation de logiciels pour créer des modèles numériques d'objets."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on un dessin réalisé avec seulement des traits à plat (longueur et largeur) ?",
      options: ["Un dessin 2D", "Un dessin 3D", "Un dessin 4D", "Une sculpture"],
      reponse: "Un dessin 2D",
      explication: "2D signifie deux dimensions (ex: un plan)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'ajoute la 3D par rapport à la 2D ?",
      options: ["La couleur", "La profondeur (ou épaisseur)", "Le prix", "Le son"],
      reponse: "La profondeur (ou épaisseur)",
      explication: "On a la Longueur, la Largeur et la Hauteur."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment s'appelle l'opération qui consiste à donner de l'épaisseur à une forme 2D pour la rendre 3D ?",
      options: ["L'explosion", "L'extrusion", "La coloration", "Le gommage"],
      reponse: "L'extrusion",
      explication: "C'est comme faire sortir de la pâte à modeler d'une forme."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'une 'vue éclatée' en dessin technique ?",
      options: ["Un dessin d'un objet qui a explosé", "Une représentation où les pièces d'un objet sont séparées pour voir comment elles s'assemblent", "Un dessin très moche", "Une photo satellite"],
      reponse: "Une représentation où les pièces d'un objet sont séparées pour voir comment elles s'assemblent",
      explication: "C'est très utile pour comprendre le montage d'un appareil."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est l'avantage principal de créer un prototype numérique en 3D ?",
      options: ["C'est plus joli que la réalité", "On peut tester l'objet et corriger les erreurs sans gaspiller de matière réelle", "Le logiciel le fabrique tout seul en fer", "Il n'y a aucun avantage"],
      reponse: "On peut tester l'objet et corriger les erreurs sans gaspiller de matière réelle",
      explication: "Cela permet de gagner beaucoup de temps et d'argent."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le quadrillage de points ou de lignes qui sert de repère dans un logiciel de CAO ?",
      options: ["Le filet", "La grille", "Le brouillard", "La toile"],
      reponse: "La grille",
      explication: "Elle aide à dessiner avec précision des dimensions exactes."
    },
    {
      id: "8",
      type: "qcm",
      question: "Lequel de ces logiciels est célèbre pour l'initiation à la 3D au collège (en ligne et gratuit) ?",
      options: ["Tinkercad", "Excel", "Word", "Spotify"],
      reponse: "Tinkercad",
      explication: "Il permet de créer des formes simples par assemblage de blocs."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie 'faire un rendu' (rendering) d'une image 3D ?",
      options: ["Supprimer le dessin", "Calculer l'image finale réaliste avec les ombres et les lumières", "Enregistrer le fichier", "Envoyer par mail"],
      reponse: "Calculer l'image finale réaliste avec les ombres et les lumières",
      explication: "L'ordinateur calcule comment la lumière tape sur les objets."
    },
    {
      id: "10",
      type: "qcm",
      question: "En CAO, une 'esquisse' est généralement :",
      options: ["Le dessin final terminé", "Le premier tracé 2D qui servira de base à la forme 3D", "Un gribouillage inutile", "Une signature"],
      reponse: "Le premier tracé 2D qui servira de base à la forme 3D",
      explication: "On dessine un cercle puis on l'extrude pour faire un cylindre."
    }
  ]
};
