import { Quiz } from "@/types/quiz";

export const quiz667: Quiz = {
  id: "667",
  titre: "Espace : Vivre dans l'ISS 👩‍🚀",
  description: "Le quotidien des astronautes à 400 km au-dessus de nos têtes.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le sigle ISS ?",
      options: ["International Star System", "Station Spatiale Internationale", "Institut des Sciences Spatiales", "Internal Space Station"],
      reponse: "Station Spatiale Internationale",
      explication: "C'est un laboratoire géant construit par plusieurs pays (USA, Russie, Europe, Japon, Canada)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment appelle-t-on l'état où les objets et les astronautes flottent dans l'ISS ?",
      options: ["L'apesanteur (impensanteur)", "Le vol libre", "La magie", "La natation aérienne"],
      reponse: "L'apesanteur (impensanteur)",
      explication: "Tout flotte car la station est en 'chute libre' permanente autour de la Terre."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment les astronautes dorment-ils dans l'ISS ?",
      options: ["Dans un lit normal", "Dans un sac de couchage accroché au mur", "Ils ne dorment pas", "En flottant au milieu de la pièce"],
      reponse: "Dans un sac de couchage accroché au mur",
      explication: "Il faut s'attacher pour ne pas dériver et se cogner pendant le sommeil."
    },
    {
      id: "4",
      type: "qcm",
      question: "D'où vient l'électricité utilisée dans la station ?",
      options: ["De piles géantes", "De grands panneaux solaires", "D'un câble relié à la Terre", "Du vent spatial"],
      reponse: "De grands panneaux solaires",
      explication: "Ils forment de grandes ailes visibles depuis la Terre avec des jumelles."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment les astronautes se lavent-ils ?",
      options: ["Ils prennent des douches", "Avec des lingettes et du shampoing sans rinçage", "Ils vont dans la piscine", "Ils ne se lavent pas pendant 6 mois"],
      reponse: "Avec des lingettes et du shampoing sans rinçage",
      explication: "L'eau ne coule pas (elle fait des bulles qui flottent), donc on ne peut pas prendre de douche."
    },
    {
      id: "6",
      type: "qcm",
      question: "Pourquoi les astronautes doivent-ils faire 2 heures de sport par jour ?",
      options: ["Pour s'occuper", "Pour éviter que leurs muscles et leurs os ne s'affaiblissent à cause du manque de poids", "Pour participer aux JO", "Pour produire de l'énergie"],
      reponse: "Pour éviter que leurs muscles et leurs os ne s'affaiblissent à cause du manque de poids",
      explication: "En apesanteur, le corps n'a plus d'effort à faire et s'appauvrit très vite."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le module avec 7 fenêtres qui permet d'admirer la Terre ?",
      options: ["Le balcon", "La Cupola", "Le cockpit", "La véranda"],
      reponse: "La Cupola",
      explication: "C'est l'endroit préféré des astronautes pour prendre des photos."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment l'eau est-elle gérée dans la station pour ne pas en manquer ?",
      options: ["On en envoie tous les jours", "Elle est entièrement recyclée (même l'urine et la transpiration !)", "Ils boivent du soda", "Ils utilisent de la glace prélevée dans l'espace"],
      reponse: "Elle est entièrement recyclée (même l'urine et la transpiration !)",
      explication: "Le système de filtrage est si efficace que l'eau recyclée est plus pure que l'eau du robinet."
    },
    {
      id: "9",
      type: "qcm",
      question: "Combien de levers et couchers de soleil les astronautes voient-ils par 24 heures ?",
      options: ["1", "5", "16", "32"],
      reponse: "16",
      explication: "L'ISS fait le tour de la Terre en 90 minutes environ."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment les astronautes reçoivent-ils de la nourriture fraîche ou de nouveaux instruments ?",
      options: ["Par la poste", "Par des vaisseaux de ravitaillement (Cargo)", "Par hélicoptère", "Ils commandent sur Internet"],
      reponse: "Par des vaisseaux de ravitaillement (Cargo)",
      explication: "Des capsules comme Dragon ou Progress s'amarrent régulièrement à la station."
    }
  ]
};
