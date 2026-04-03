import { Quiz } from "@/types/quiz";

export const quiz876: Quiz = {
  id: "876",
  titre: "Musique : La Batterie et le Rythme 🥁⚡",
  description: "Battez la mesure et découvrez le moteur rythmique de la musique moderne.",
  theme: "Culture Générale",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on la branche d'instruments à laquelle appartient la batterie ?",
      options: ["Les cordes", "Les cuivres", "Les percussions", "Les claviers"],
      reponse: "Les percussions",
      explication: "Une batterie est un ensemble de plusieurs instruments de percussion regroupés."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le plus gros tambour de la batterie, que l'on joue avec le pied ?",
      options: ["La caisse claire", "Le tom", "La grosse caisse", "La cymbale"],
      reponse: "La grosse caisse",
      explication: "Elle produit le son le plus grave et marque souvent le premier temps."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La 'caisse claire' possède des fils de métal tendus en dessous pour produire un son plus net.",
      reponse: "Vrai",
      explication: "On appelle cet ensemble de fils le 'timbre'."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appellent les deux cymbales montées l'une sur l'autre et actionnées par une pédale ?",
      reponse: "Charleston",
      explication: "Aussi appelé 'hi-hat' en anglais."
    },
    {
      id: "5",
      type: "qcm",
      question: "Avec quoi le batteur frappe-t-il généralement ses instruments ?",
      options: ["Ses mains", "Des baguettes", "Un archet", "Un plectre"],
      reponse: "Des baguettes",
      explication: "Elles sont le plus souvent en bois (en hickory ou en érable)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le rythme est le squelette de la musique.",
      reponse: "Vrai",
      explication: "Sans rythme, la musique n'a pas de mouvement ni de structure."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel accessoire permet au batteur de produire un son plus doux, comme un frottement ?",
      options: ["Des marteaux", "Des balais", "Des éponges", "Des gants"],
      reponse: "Des balais",
      explication: "On les utilise beaucoup en Jazz pour un son feutré."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on les disques de métal doré qui brillent sur la batterie ?",
      reponse: "Cymbales",
      explication: "Il en existe de toutes tailles : Crash, Ride, Splash..."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est le rôle principal du batteur dans un groupe ?",
      options: ["Faire le plus de bruit possible", "Garder le tempo (la vitesse) et donner le rythme", "Chanter les refrains", "Accorder les guitares"],
      reponse: "Garder le tempo (la vitesse) et donner le rythme",
      explication: "Il assure la cohésion de tous les autres musiciens."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il existe des batteries électroniques que l'on peut jouer au casque sans déranger les voisins.",
      reponse: "Vrai",
      explication: "Elles transforment la force du coup en un signal numérique sonore."
    }
  ]
};
