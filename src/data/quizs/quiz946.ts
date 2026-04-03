import { Quiz } from "@/types/quiz";

export const quiz946: Quiz = {
  id: "946",
  titre: "Espace : Vivre dans l'ISS 👨‍🚀🛰️",
  description: "Découvrez le quotidien insolite des astronautes dans la Station Spatiale Internationale.",
  theme: "Sciences",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le sigle ISS ?",
      options: ["International Space Station", "Incroyable Système Spatial", "Institut des Sciences Spatiales", "Internal Solar System"],
      reponse: "International Space Station",
      explication: "Elle est le résultat d'une collaboration entre plusieurs pays (USA, Russie, Europe, Japon, Canada)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on l'état de 'flottaison' des astronautes dans la station ?",
      options: ["La légèreté", "L'apesanteur (microgravité)", "Le vol libre", "La lévitation"],
      reponse: "L'apesanteur (microgravité)",
      explication: "Comme ils tombent en permanence autour de la Terre, ils ne ressentent plus leur poids."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Les astronautes dorment dans de vrais lits avec des couvertures.",
      reponse: "Faux",
      explication: "Ils dorment dans des sacs de couchage accrochés aux murs pour ne pas dériver pendant leur sommeil."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la coupole vitrée de l'ISS qui offre la plus belle vue sur la Terre ?",
      reponse: "Cupola",
      explication: "C'est l'endroit préféré des astronautes pour prendre des photos."
    },
    {
      id: "5",
      type: "qcm",
      question: "Pourquoi les astronautes doivent-ils faire 2 heures de sport par jour ?",
      options: ["Pour ne pas s'ennuyer", "Pour éviter que leurs muscles et leurs os ne s'affaiblissent", "Pour produire de l'électricité", "Pour perdre du poids"],
      reponse: "Pour éviter que leurs muscles et leurs os ne s'affaiblissent",
      explication: "En apesanteur, le corps n'a plus d'effort à faire, il faut donc forcer pour rester en forme."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'eau que boivent les astronautes est en grande partie recyclée à partir de leur propre transpiration et urine.",
      reponse: "Vrai",
      explication: "Dans l'espace, rien ne se perd ! L'ISS possède un système de purification ultra-performant."
    },
    {
      id: "7",
      type: "qcm",
      question: "Combien de levers et couchers de soleil les astronautes voient-ils par jour ?",
      options: ["1", "5", "16", "24"],
      reponse: "16",
      explication: "L'ISS fait le tour de la Terre en 90 minutes environ."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on les sorties des astronautes à l'extérieur de la station pour faire des réparations ?",
      reponse: "Sorties extravéhiculaires",
      explication: "Ou 'marches dans l'espace'. Ils doivent porter un scaphandre spécial."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment la station spatiale reçoit-elle son énergie ?",
      options: ["Grâce à du pétrole", "Grâce à d'immenses panneaux solaires", "Grâce à une pile géante", "Grâce au vent"],
      reponse: "Grâce à d'immenses panneaux solaires",
      explication: "Ils sont visibles depuis la Terre comme des points brillants qui se déplacent vite."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Les astronautes mangent de la nourriture en tube comme du dentifrice.",
      reponse: "Faux",
      explication: "C'était le cas au début, mais aujourd'hui ils mangent des plats lyophilisés ou en conserve qui ressemblent à la nourriture normale."
    }
  ]
};
