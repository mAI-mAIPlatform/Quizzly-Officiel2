import { Quiz } from "@/types/quiz";

export const quiz985: Quiz = {
  id: "985",
  titre: "Mythologie : Ulysse et l'Odyssée ⛵👁️",
  description: "Suivez le voyage périlleux du héros grec le plus ruzé pour rentrer chez lui.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "De quelle île grecque Ulysse est-il le roi ?",
      options: ["Crète", "Ithaque", "Chypre", "Rhodes"],
      reponse: "Ithaque",
      explication: "Il mettra 10 ans à y retourner après la guerre de Troie."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle ruse Ulysse a-t-il inventée pour gagner enfin la guerre de Troie ?",
      options: ["Le Pont de pierre", "Le Cheval de Troie", "Le Tunnel secret", "La Grosse Bombe"],
      reponse: "Le Cheval de Troie",
      explication: "Les soldats grecs se sont cachés à l'intérieur d'un immense cheval en bois."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Ulysse a affronté un monstre à un seul œil nommé Polyphème.",
      reponse: "Vrai",
      explication: "C'est un Cyclope, fils de Poséidon."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment Ulysse s'est-il fait appeler auprès du Cyclope pour que celui-ci ne puisse pas dénoncer son agresseur ?",
      reponse: "Personne",
      explication: "Quand le Cyclope a appelé à l'aide, il a dit 'Personne m'a attaqué !', et personne n'est venu."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelaient les créatures mi-femmes mi-oiseaux (ou poissons) dont le chant rendait fous les marins ?",
      options: ["Les Gorgones", "Les Sirènes", "Les Harpies", "Les Naïades"],
      reponse: "Les Sirènes",
      explication: "Ulysse a bouché les oreilles de ses marins avec de la cire pour ne pas les entendre."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "L'épouse fidèle d'Ulysse, qui l'attendait à Ithaque, s'appelait Pénélope.",
      reponse: "Vrai",
      explication: "Elle défaisait chaque nuit son tissage pour ne pas avoir à choisir un nouveau mari."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle sorcière a transformé les compagnons d'Ulysse en cochons ?",
      options: ["Médée", "Circé", "Calypso", "Pandore"],
      reponse: "Circé",
      explication: "Ulysse a réussi à leur redonner forme humaine grâce à une plante magique."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel fils d'Ulysse est parti à sa recherche pendant des années ?",
      reponse: "Télémaque",
      explication: "Il était bébé quand son père est parti à la guerre."
    },
    {
      id: "9",
      type: "qcm",
      question: "Combien d'années au total Ulysse a-t-il été absent de chez lui (guerre + voyage) ?",
      options: ["5 ans", "10 ans", "20 ans", "40 ans"],
      reponse: "20 ans",
      explication: "10 ans de guerre et 10 ans de voyage !"
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "À son retour, Ulysse a été reconnu tout de suite par tout le monde.",
      reponse: "Faux",
      explication: "Il était déguisé en vieux mendiant. Seul son vieux chien Argus l'a reconnu tout de suite avant de mourir."
    }
  ]
};
