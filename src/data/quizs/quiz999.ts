import { Quiz } from "@/types/quiz";

export const quiz999: Quiz = {
  id: "999",
  titre: "Culture G : Les Mystères de la Terre 🌍🔍",
  description: "Dernières découvertes et faits curieux sur notre maison commune.",
  theme: "Géographie",
  difficulte: "Mojen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Environ quel pourcentage de la surface de la Terre est recouvert d'eau ?",
      options: ["30%", "50%", "71%", "90%"],
      reponse: "71%",
      explication: "C'est pour cela qu'on l'appelle la 'Planète Bleue'."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle est la couche la plus profonde de la Terre, située au centre ?",
      options: ["La croûte terrestre", "Le manteau", "Le noyau", "L'atmosphère"],
      reponse: "Le noyau",
      explication: "Il est composé principalement de fer et de nickel très chauds."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La dérive des continents signifie que les continents bougent de quelques centimètres par an.",
      reponse: "Vrai",
      explication: "Cela s'appelle la tectonique des plaques. C'est ce qui crée les montagnes et les séismes."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'immense forêt tropicale souvent surnommée le 'poumon de la Terre' ?",
      reponse: "Amazonie",
      explication: "Elle se trouve principalement au Brésil."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel gaz de l'atmosphère nous protège des rayons dangereux du Soleil ?",
      options: ["L'oxygène", "L'azote", "L'ozone", "Le gaz carbonique"],
      reponse: "L'ozone",
      explication: "La couche d'ozone filtre les rayons ultraviolets (UV)."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le point le plus éloigné du centre de la Terre n'est pas le sommet de l'Everest.",
      reponse: "Vrai",
      explication: "C'est le sommet du volcan Chimborazo en Équateur, car la Terre est un peu plus bombée à l'Équateur."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le mouvement de l'eau des océans qui monte et descend chaque jour ?",
      options: ["Le courant marin", "La marée", "Le tsunami", "La houle"],
      reponse: "La marée",
      explication: "Elle est provoquée principalement par l'attraction de la Lune."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel est l'endroit le plus froid jamais enregistré sur Terre (en Antarctique) ?",
      reponse: "-89°C",
      explication: "Record enregistré à la station Vostok."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la principale source d'énergie interne qui fait bouger la Terre et chauffe ses profondeurs ?",
      options: ["Le charbon", "La radioactivité naturelle", "Le Soleil", "L'électricité"],
      reponse: "La radioactivité naturelle",
      explication: "La désintégration de certains éléments produit d'immenses quantités de chaleur."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il y a des milliers d'années, tous les continents étaient réunis en un seul nommé Pangée.",
      reponse: "Vrai",
      explication: "Ils se sont ensuite séparés pour former la carte du monde que l'on connaît aujourd'hui."
    }
  ]
};
