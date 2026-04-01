import { Quiz } from "@/types/quiz";

export const quiz174: Quiz = {
  id: "174",
  titre: "Génétique & ADN 🧬",
  description: "Découvrez les bases de l'hérédité et le code secret de la vie.",
  theme: "Sciences",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le sigle ADN ?",
      options: ["Acide Déshydraté Nucléaire", "Acide Désoxyribonucléique", "Atome De Nature", "Agent de Développement Nerveux"],
      reponse: "Acide Désoxyribonucléique",
      explication: "C'est la molécule qui porte l'information génétique de tout être vivant."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la forme caractéristique de la molécule d'ADN ?",
      options: ["Une sphère", "Une échelle", "Une double hélice", "Un cube"],
      reponse: "Une double hélice",
      explication: "Sa structure a été découverte en 1953 par Watson et Crick (avec Rosalind Franklin)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Où se trouve l'ADN dans la majorité de nos cellules ?",
      options: ["Dans le foie", "Dans le cytoplasme", "Dans le noyau", "Dans la membrane"],
      reponse: "Dans le noyau",
      explication: "Le noyau contient les chromosomes formés d'ADN."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on les segments d'ADN qui portent les instructions pour un caractère précis ?",
      options: ["Les tissus", "Les gènes", "Les hormones", "Les virus"],
      reponse: "Les gènes",
      explication: "Chaque gène définit par exemple la couleur des yeux ou le groupe sanguin."
    },
    {
      id: "5",
      type: "qcm",
      question: "Combien de paires de chromosomes un humain possède-t-il normalement ?",
      options: ["13 paires", "23 paires", "46 paires", "10 paires"],
      reponse: "23 paires",
      explication: "Soit un total de 46 chromosomes par cellule."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on une erreur ou un changement dans le code de l'ADN ?",
      options: ["Une mutation", "Un bug", "Une cicatrice", "Une déviation"],
      reponse: "Une mutation",
      explication: "Les mutations peuvent être neutres, bénéfiques ou causer des maladies."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel moine est considéré comme le père de la génétique pour ses travaux sur les pois ?",
      options: ["Louis Pasteur", "Gregor Mendel", "Charles Darwin", "Gregor Samsa"],
      reponse: "Gregor Mendel",
      explication: "Il a découvert les lois de la transmission des caractères héréditaires."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle lettre ne correspond PAS à l'une des quatre bases azotées de l'ADN ?",
      options: ["A (Adénine)", "C (Cytosine)", "G (Guanine)", "R (Ribose)"],
      reponse: "R (Ribose)",
      explication: "Les quatre bases sont A, T (Thymine), C et G."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'un organisme dont l'ADN a été modifié artificiellement (OGM) ?",
      options: ["Objet Grandement Mobile", "Organisme Génétiquement Modifié", "Oiseau de Gros Modèle", "Origine Globale Modulaire"],
      reponse: "Organisme Génétiquement Modifié",
      explication: "On peut y introduire un gène d'une autre espèce."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on la copie conforme génétique d'un être vivant ?",
      options: ["Un jumeau", "Un clone", "Un avatar", "Un hybride"],
      reponse: "Un clone",
      explication: "Le premier mammifère cloné célèbre était la brebis Dolly en 1996."
    }
  ]
};
