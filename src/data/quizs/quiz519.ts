import { Quiz } from "@/types/quiz";

export const quiz519: Quiz = {
  id: "519",
  titre: "Mathématiques : Droites et Segments 📏",
  description: "Révisez les bases de la géométrie plane : points, droites, segments.",
  theme: "Sciences",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la caractéristique d'une droite ?",
      options: ["Elle a un début et une fin", "Elle est infinie des deux côtés", "Elle est courbée", "Elle fait 10 cm"],
      reponse: "Elle est infinie des deux côtés",
      explication: "On ne peut pas mesurer une droite car elle n'a pas de limites."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on une partie de droite limitée par deux points ?",
      options: ["Une demi-droite", "Un segment", "Une courbe", "Un angle"],
      reponse: "Un segment",
      explication: "Le segment a une longueur mesurable."
    },
    {
      id: "3",
      type: "qcm",
      question: "Qu'est-ce qu'une demi-droite ?",
      options: ["Une droite coupée en deux", "Une ligne limitée d'un seul côté", "Un cercle", "Un point"],
      reponse: "Une ligne limitée d'un seul côté",
      explication: "Elle a une origine mais se prolonge à l'infini de l'autre côté."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment note-t-on généralement un segment entre les points A et B ?",
      options: ["(AB)", "[AB]", "AB", "<AB>"],
      reponse: "[AB]",
      explication: "Les crochets indiquent que c'est limité aux points A et B."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on deux droites qui ne se croisent jamais ?",
      options: ["Perpendiculaires", "Parallèles", "Sécantes", "Confondues"],
      reponse: "Parallèles",
      explication: "Elles gardent toujours le même écartement."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on deux droites qui se croisent en formant un angle droit (90°) ?",
      options: ["Parallèles", "Perpendiculaires", "Sécantes", "Inclinées"],
      reponse: "Perpendiculaires",
      explication: "Leur intersection forme 4 angles droits."
    },
    {
      id: "7",
      type: "qcm",
      question: "Des droites qui se croisent simplement sans forcément former un angle droit sont dites :",
      options: ["Parallèles", "Perpendiculaires", "Sécantes", "Plates"],
      reponse: "Sécantes",
      explication: "Elles ont un point commun (le point d'intersection)."
    },
    {
      id: "8",
      type: "qcm",
      question: "Le milieu d'un segment est le point qui :",
      options: ["Le coupe n'importe où", "Se trouve à égale distance des deux extrémités", "Est situé à l'extérieur", "Le multiplie par deux"],
      reponse: "Se trouve à égale distance des deux extrémités",
      explication: "Il partage le segment en deux longueurs égales."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie le mot 'alignés' pour des points ?",
      options: ["Ils sont de la même couleur", "Ils appartiennent à une même droite", "Ils forment un triangle", "Ils sont l'un au dessus de l'autre"],
      reponse: "Ils appartiennent à une même droite",
      explication: "On peut tracer une droite passant par tous ces points."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment note-t-on une droite passant par les points A et B ?",
      options: ["[AB]", "(AB)", "AB", "{AB}"],
      reponse: "(AB)",
      explication: "Les parenthèses indiquent l'absence de limites (infini)."
    }
  ]
};
