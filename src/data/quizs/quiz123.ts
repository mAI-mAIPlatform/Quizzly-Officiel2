import { Quiz } from "@/types/quiz";

export const quiz123: Quiz = {
  id: "123",
  titre: "Géographie du Japon 🇯🇵",
  description: "Découvrez l'archipel nippon, entre volcans et métropoles.",
  theme: "Géographie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la capitale du Japon ?",
      options: ["Kyoto", "Osaka", "Nagoya", "Tokyo"],
      reponse: "Tokyo",
      explication: "Tokyo est la plus grande ville du Japon et son centre politique."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le plus haut sommet du Japon ?",
      options: ["Mont Ontake", "Mont Fuji", "Mont Aso", "Mont Unzen"],
      reponse: "Mont Fuji",
      explication: "Le Mont Fuji est un volcan sacré culminant à 3 776 mètres."
    },
    {
      id: "3",
      type: "qcm",
      question: "Sur combien d'îles principales s'étend le Japon ?",
      options: ["2", "3", "4", "5"],
      reponse: "4",
      explication: "Hokkaido, Honshu, Shikoku et Kyushu."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle ville a été l'ancienne capitale impériale du Japon ?",
      options: ["Hiroshima", "Sapporo", "Kyoto", "Fukuoka"],
      reponse: "Kyoto",
      explication: "Kyoto est célèbre pour ses nombreux temples et sanctuaires."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on le train à grande vitesse japonais ?",
      options: ["TGV", "Shinkansen", "Maglev", "Express"],
      reponse: "Shinkansen",
      explication: "Le Shinkansen est réputé pour sa ponctualité et sa sécurité."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel océan borde la côte est du Japon ?",
      options: ["Océan Indien", "Océan Atlantique", "Océan Pacifique", "Océan Arctique"],
      reponse: "Océan Pacifique",
      explication: "Le Japon est situé sur la 'ceinture de feu' du Pacifique."
    },
    {
      id: "7",
      type: "qcm",
      question: "Qu'est-ce qu'un 'torii' ?",
      options: ["Un plat japonais", "Un portail traditionnel rouge", "Un vêtement de soie", "Un type de sabre"],
      reponse: "Un portail traditionnel rouge",
      explication: "Il marque l'entrée d'un sanctuaire shintoïste."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle fleur est le symbole national du Japon au printemps ?",
      options: ["Le Lotus", "Le Chrysanthème", "La Fleur de cerisier (Sakura)", "L'Iris"],
      reponse: "La Fleur de cerisier (Sakura)",
      explication: "La floraison des cerisiers est un événement majeur au Japon."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle ville a subi le premier bombardement atomique en 1945 ?",
      options: ["Nagasaki", "Hiroshima", "Tokyo", "Yokohama"],
      reponse: "Hiroshima",
      explication: "Hiroshima est aujourd'hui une ville de paix."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est le sport national du Japon ?",
      options: ["Judo", "Karaté", "Sumo", "Baseball"],
      reponse: "Sumo",
      explication: "Le sumo est un sport de lutte millénaire chargé de rituels."
    }
  ]
};
