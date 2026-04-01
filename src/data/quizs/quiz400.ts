import { Quiz } from "@/types/quiz";

export const quiz400: Quiz = {
  id: "400",
  titre: "Technologie : Les Voitures Autonomes 🚗🤖",
  description: "Découvrez le futur du transport sans conducteur.",
  theme: "Technologie",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'une voiture autonome ?",
      options: ["Une voiture électrique", "Une voiture capable de rouler seule sans intervention humaine", "Une voiture qui vole", "Une voiture de sport"],
      reponse: "Une voiture capable de rouler seule sans intervention humaine",
      explication: "Elle utilise des capteurs et de l'IA pour naviguer."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel capteur utilise un laser pour cartographier l'environnement en 3D ?",
      options: ["Radar", "Caméra", "LiDAR", "Sonar"],
      reponse: "LiDAR",
      explication: "Light Detection and Ranging : essentiel pour la précision de la machine."
    },
    {
      id: "3",
      type: "qcm",
      question: "Combien de niveaux d'autonomie ont été définis (de 0 à ?) ?",
      options: ["3 niveaux", "5 niveaux", "10 niveaux", "Aucun niveau"],
      reponse: "5 niveaux",
      explication: "Le niveau 5 correspond à l'autonomie totale sans volant ni pédales."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle entreprise d'Elon Musk est célèbre pour son système 'Autopilot' ?",
      options: ["Rivian", "Lucid", "Tesla", "Waymo"],
      reponse: "Tesla",
      explication: "Même si le nom suggère une autonomie totale, il s'agit encore d'une assistance à la conduite."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appelle la filiale de Google spécialisée dans les robot-taxis ?",
      options: ["Cruise", "Uber", "Waymo", "Zook"],
      reponse: "Waymo",
      explication: "Waymo opère déjà des taxis sans chauffeur dans certaines villes américaines."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel est l'un des plus grands défis éthiques de la voiture autonome ?",
      options: ["Le choix de la musique", "Le dilemme du tramway (que doit décider l'IA en cas d'accident inévitable ?)", "La couleur de la carrosserie", "La vitesse de charge"],
      reponse: "Le dilemme du tramway (que doit décider l'IA en cas d'accident inévitable ?)",
      explication: "Faire des choix moraux en une fraction de seconde est très complexe à programmer."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le fait que les voitures communiquent entre elles ?",
      options: ["V2V (Vehicle to Vehicle)", "V2C (Vehicle to Cloud)", "CarChat", "AutoLink"],
      reponse: "V2V (Vehicle to Vehicle)",
      explication: "Cela permettrait de fluidifier le trafic et d'éviter les collisions."
    },
    {
      id: "8",
      type: "qcm",
      question: "À quel niveau d'autonomie le conducteur peut-il quitter la route des yeux en toute sécurité ?",
      options: ["Niveau 1", "Niveau 2", "Niveau 3", "Niveau 5 uniquement"],
      reponse: "Niveau 3",
      explication: "C'est l'autonomie conditionnelle : le conducteur doit pouvoir reprendre la main si besoin."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel pays a été l'un des premiers à autoriser la circulation des voitures autonomes de niveau 3 sur ses autoroutes ?",
      options: ["La France", "L'Allemagne", "Le Japon", "B et C sont vrais"],
      reponse: "B et C sont vrais",
      explication: "L'Allemagne et le Japon sont à la pointe de la réglementation."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel est l'avantage principal espéré des voitures autonomes ?",
      options: ["Vendre plus de voitures", "Réduire radicalement le nombre d'accidents dus à l'erreur humaine", "Aller plus vite", "Supprimer les routes"],
      reponse: "Réduire radicalement le nombre d'accidents dus à l'erreur humaine",
      explication: "L'erreur humaine est responsable de plus de 90% des accidents de la route."
    }
  ]
};
