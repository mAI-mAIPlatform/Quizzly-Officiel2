import { Quiz } from "@/types/quiz";

export const quiz473: Quiz = {
  id: "473",
  titre: "Informatique : Le Big Data 📊🚀",
  description: "Plongez dans l'univers des données massives qui façonnent notre monde.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que désigne le terme 'Big Data' ?",
      options: ["Des fichiers très volumineux sur un disque dur", "Des ensembles de données si vastes qu'ils nécessitent des outils de traitement spéciaux", "Internet dans son ensemble", "Une marque de serveur"],
      reponse: "Des ensembles de données si vastes qu'ils nécessitent des outils de traitement spéciaux",
      explication: "On parle de données qui dépassent les capacités des logiciels classiques de bases de données."
    },
    {
      id: "2",
      type: "qcm",
      question: "Qu'appelle-t-on la règle des '3V' pour définir le Big Data ?",
      options: ["Vitesse, Vision, Valeur", "Volume, Vélocité, Variété", "Vente, Volume, Virilité", "Vitesse, Volume, Virus"],
      reponse: "Volume, Vélocité, Variété",
      explication: "Volume (quantité), Vélocité (vitesse de création) et Variété (types de données différents)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est l'unité de mesure souvent utilisée pour parler des données mondiales aujourd'hui ?",
      options: ["Le Gigaoctet (Go)", "Le Téraoctet (To)", "Le Zettaoctet (Zo)", "Le Kilooctet (Ko)"],
      reponse: "Le Zettaoctet (Zo)",
      explication: "1 Zettaoctet correspond à 1 000 milliards de Gigaoctets."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel métier consiste à analyser ces masses de données pour en extraire de la valeur ?",
      options: ["Web Designer", "Data Scientist", "Community Manager", "Développeur Front-end"],
      reponse: "Data Scientist",
      explication: "C'est l'un des métiers les plus recherchés, mêlant mathématiques, statistiques et informatique."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qu'un 'Data Lake' (Lac de données) ?",
      options: ["Un serveur qui a pris l'eau", "Un réservoir de données brutes stockées dans leur format d'origine", "Une base de données très propre", "Un système de refroidissement"],
      reponse: "Un réservoir de données brutes stockées dans leur format d'origine",
      explication: "Contrairement à l'entrepôt de données (Data Warehouse), les données n'y sont pas encore structurées."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel framework Open Source célèbre permet de traiter de gros volumes de données de manière distribuée ?",
      options: ["Windows", "Hadoop (ou Spark)", "Excel", "WordPress"],
      reponse: "Hadoop (ou Spark)",
      explication: "Il divise le travail entre des centaines ou des milliers de serveurs travaillant en parallèle."
    },
    {
      id: "7",
      type: "qcm",
      question: "Dans quel but les entreprises utilisent-elles l'analyse prédictive du Big Data ?",
      options: ["Pour prédire le futur avec une boule de cristal", "Pour anticiper les comportements des clients (achats, pannes, fraudes)", "Pour supprimer les données inutiles", "Pour accélérer Internet"],
      reponse: "Pour anticiper les comportements des clients (achats, pannes, fraudes)",
      explication: "Exemple : Netflix qui vous suggère des films en fonction de vos goûts passés."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle est la principale préoccupation éthique liée au Big Data ?",
      options: ["Le prix de l'électricité", "La protection de la vie privée et des données personnelles", "La taille des serveurs", "La vitesse de téléchargement"],
      reponse: "La protection de la vie privée and des données personnelles",
      explication: "Le croisement massif de données peut permettre d'identifier précisément une personne sans son accord."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce que l''Analyse de sentiments' en Big Data ?",
      options: ["Une application de rencontre", "Déterminer si un texte (tweet, avis) exprime une opinion positive, négative ou neutre", "Compter le nombre de mots", "Traduire un texte"],
      reponse: "Déterminer si un texte (tweet, avis) exprime une opinion positive, négative ou neutre",
      explication: "Très utilisé par les marques pour savoir ce qu'on pense d'elles sur les réseaux sociaux."
    },
    {
      id: "10",
      type: "qcm",
      question: "Le Big Data est-il utilisé dans la recherche scientifique ?",
      options: ["Non, c'est pour le commerce uniquement", "Oui, pour la génétique, la météo ou la physique des particules", "Seulement pour les statistiques de sport", "C'est trop compliqué"],
      reponse: "Oui, pour la génétique, la météo ou la physique des particules",
      explication: "Le séquençage du génome humain ou les expériences du CERN génèrent des quantités phénoménales de données."
    }
  ]
};
