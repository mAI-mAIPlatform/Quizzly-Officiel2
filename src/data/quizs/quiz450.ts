import { Quiz } from "@/types/quiz";

export const quiz450: Quiz = {
  id: "450",
  titre: "Technologie : L'Énergie Nucléaire ⚛️⚡",
  description: "Testez vos connaissances sur l'atome, des centrales aux applications médicales.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le principe physique utilisé dans les centrales nucléaires actuelles pour produire de la chaleur ?",
      options: ["La Fusion nucléaire", "La Fission nucléaire", "La Combustion", "Le Magnétisme"],
      reponse: "La Fission nucléaire",
      explication: "On casse (fissionne) des noyaux lourds d'uranium pour libérer une énergie colossale."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel combustible radioactif est le plus couramment utilisé dans les réacteurs ?",
      options: ["Le Charbon", "Le Plutonium", "L'Uranium 235", "L'Hydrogène"],
      reponse: "L'Uranium 235",
      explication: "C'est l'un des rares noyaux naturels capables de subir une fission en chaîne."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle scientifique franco-polonaise a découvert le Radium et le Polonium (Prix Nobel) ?",
      options: ["Marie Curie", "Irène Joliot-Curie", "Lise Meitner", "Rosalind Franklin"],
      reponse: "Marie Curie",
      explication: "Elle a jeté les bases de la recherche sur la radioactivité."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on la réaction qui se produit dans le Soleil et que l'on tente de reproduire sur Terre (Projet ITER) ?",
      options: ["La Fission", "La Fusion nucléaire", "L'Osmose", "La Sublimation"],
      reponse: "La Fusion nucléaire",
      explication: "Il s'agit d'assembler deux noyaux légers. Elle produit beaucoup plus d'énergie et moins de déchets que la fission."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que les grandes tours blanches des centrales nucléaires dégagent dans l'atmosphère ?",
      options: ["De la fumée toxique", "Du CO2", "De la vapeur d'eau pure", "De la poussière radioactive"],
      reponse: "De la vapeur d'eau pure",
      explication: "Ce sont des tours de refroidissement ; la vapeur n'est pas radioactive."
    },
    {
      id: "6",
      type: "qcm",
      question: "Lequel de ces pays est le plus dépendant de l'énergie nucléaire pour son électricité (environ 70%) ?",
      options: ["Allemagne", "États-Unis", "France", "Chine"],
      reponse: "France",
      explication: "La France possède l'un des parcs nucléaires les plus importants au monde par habitant."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel accident nucléaire majeur est survenu en Ukraine en 1986 ?",
      options: ["Fukushima", "Tchernobyl", "Three Mile Island", "Kyshtym"],
      reponse: "Tchernobyl",
      explication: "L'explosion du réacteur n°4 a entraîné une contamination radioactive à l'échelle européenne."
    },
    {
      id: "8",
      type: "qcm",
      question: "Comment appelle-t-on le temps nécessaire pour que la radioactivité d'un élément diminue de moitié ?",
      options: ["La durée de vie", "La demi-vie (ou période radioactive)", "Le temps de repos", "L'obsolescence"],
      reponse: "La demi-vie (ou période radioactive)",
      explication: "Elle varie de quelques secondes à des milliards d'années selon les éléments."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel est l'avantage principal de l'énergie nucléaire dans la lutte contre le réchauffement climatique ?",
      options: ["Elle est gratuite", "Elle n'émet quasiment pas de gaz à effet de serre (CO2) lors de la production", "Elle ne produit pas de déchets", "Elle est illimitée"],
      reponse: "Elle n'émet quasiment pas de gaz à effet de serre (CO2) lors de la production",
      explication: "C'est une énergie 'décarbonée', contrairement au charbon ou au gaz."
    },
    {
      id: "10",
      type: "qcm",
      question: "Dans quel domaine médical utilise-t-on la radioactivité pour traiter des cancers ?",
      options: ["La radiologie", "La radiothérapie", "L'homéopathie", "La chirurgie esthétique"],
      reponse: "La radiothérapie",
      explication: "On bombarde les cellules cancéreuses de rayonnements pour les détruire."
    }
  ]
};
