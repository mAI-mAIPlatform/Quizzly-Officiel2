import { Quiz } from "@/types/quiz";

export const quiz506: Quiz = {
  id: "506",
  titre: "Français : Les Accords dans le Groupe Nominal 👫",
  description: "Apprenez à accorder le déterminant et l'adjectif avec le nom.",
  theme: "Langues",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Dans le groupe nominal, sur quel mot s'accordent le déterminant et l'adjectif ?",
      options: ["Le verbe", "Le nom noyau", "Le sujet", "L'adverbe"],
      reponse: "Le nom noyau",
      explication: "Le nom 'donne' son genre (masculin/féminin) et son nombre (singulier/pluriel)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Choisissez la bonne orthographe : 'Des [grand] [maison] [blanc]'.",
      options: ["Des grands maisons blancs", "Des grandes maisons blanches", "Des grands maisons blanche", "Des grand maisons blanc"],
      reponse: "Des grandes maisons blanches",
      explication: "Maison est féminin pluriel."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment accorde-t-on l'adjectif si le groupe nominal contient à la fois un nom masculin et un nom féminin ?",
      options: ["Il s'accorde au féminin", "Il s'accorde au masculin pluriel", "C'est au choix", "Il reste au singulier"],
      reponse: "Il s'accorde au masculin pluriel",
      explication: "En grammaire française traditionnelle, le masculin l'emporte sur le féminin pour l'accord."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel déterminant convient pour '... amie' ?",
      options: ["Mon", "Ma", "Mes", "Le"],
      reponse: "Mon",
      explication: "Même si 'amie' est féminin, on utilise 'mon' (ou 'ton', 'son') devant une voyelle pour éviter le choc des voyelles (ma amie x)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Choisissez la bonne forme : 'Ces [beau] paysages'.",
      options: ["Beau", "Beaux", "Beaus", "Belle"],
      reponse: "Beaux",
      explication: "Paysage est masculin, ici au pluriel."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle est la règle pour l'adjectif 'bleu' au pluriel ?",
      options: ["Il prend un -x", "Il prend un -s", "Il est invariable", "Il change de radical"],
      reponse: "Il prend un -s",
      explication: "Bleu -> bleus (attention, certains adjectifs en -eu prennent un -x, mais pas bleu ni pneu)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle est la marque du féminin la plus courante pour un adjectif ?",
      options: ["Le -s", "Le -e", "Le -t", "Le -x"],
      reponse: "-e",
      explication: "Exemple : Grand -> Grande."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment écrit-on 'Une [nouveau] idée' ?",
      options: ["Nouveau", "Nouveaux", "Nouvelle", "Nouvele"],
      reponse: "Nouvelle",
      explication: "Féminin de nouveau."
    },
    {
      id: "9",
      type: "qcm",
      question: "Dans 'Leurs petites mains', quel est le nom noyau ?",
      options: ["Leurs", "Petites", "Mains", "Toutes ces réponses"],
      reponse: "Mains",
      explication: "C'est le mot central qui désigne l'objet."
    },
    {
      id: "10",
      type: "qcm",
      question: "Choisissez la bonne forme : 'Des choux [vert]'.",
      options: ["Vert", "Verts", "Vertes", "Vertx"],
      reponse: "Verts",
      explication: "Chou est masculin pluriel."
    }
  ]
};
