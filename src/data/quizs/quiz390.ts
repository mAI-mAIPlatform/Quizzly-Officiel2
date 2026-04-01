import { Quiz } from "@/types/quiz";

export const quiz390: Quiz = {
  id: "390",
  titre: "Technologie : Les Drones 🛸📷",
  description: "Prenez de la hauteur avec ce quiz sur les engins sans pilote.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie le mot 'Drone' à l'origine en anglais ?",
      options: ["Espion", "Frelon / Bourdon", "Avion miniature", "Robot"],
      reponse: "Frelon / Bourdon",
      explication: "En raison du bruit de bourdonnement que faisaient les premiers modèles."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le nom technique officiel des drones ?",
      options: ["UAV (Unmanned Aerial Vehicle)", "Flying Bot", "Sky Cam", "Auto-Plane"],
      reponse: "UAV (Unmanned Aerial Vehicle)",
      explication: "Véhicule aérien sans personne à bord."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on les drones munis de quatre hélices ?",
      options: ["Tricoptères", "Quadricoptères", "Hélicoptères", "Bicoptères"],
      reponse: "Quadricoptères",
      explication: "C'est la forme la plus courante pour les drones de loisir."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle technologie permet de piloter un drone en voyant ce qu'il voit à travers un casque ?",
      options: ["GPS", "FPV (First Person View)", "VR 360", "Bluetooth"],
      reponse: "FPV (First Person View)",
      explication: "Le pilote a l'impression d'être à l'intérieur du drone."
    },
    {
      id: "5",
      type: "qcm",
      question: "Dans quel domaine les drones ont-ils été utilisés en premier ?",
      options: ["La photographie", "Le domaine militaire (cible, surveillance)", "La livraison de colis", "L'agriculture"],
      reponse: "Le domaine militaire (cible, surveillance)",
      explication: "Les premiers essais datent de la Première Guerre mondiale."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelle est l'utilité principale des drones en agriculture ?",
      options: ["Taper les mauvaises herbes", "Surveiller les cultures et pulvériser des produits avec précision", "Transporter les vaches", "Faire peur aux oiseaux"],
      reponse: "Surveiller les cultures et pulvériser des produits avec précision",
      explication: "Cela permet de gagner du temps et de réduire l'utilisation de produits chimiques."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle société est le leader mondial des drones de loisir et professionnels (basée en Chine) ?",
      options: ["DJI", "Parrot", "GoPro", "Amazon"],
      reponse: "DJI",
      explication: "Ils dominent largement le marché avec leurs gammes Mavic et Phantom."
    },
    {
      id: "8",
      type: "qcm",
      question: "Qu'est-ce qu'une 'No-Fly Zone' pour un drone ?",
      options: ["Une zone où le drone vole tout seul", "Une zone interdite de vol (ex: aéroports, bases militaires)", "Une zone sans vent", "Une zone sans signal GPS"],
      reponse: "Une zone interdite de vol (ex: aéroports, bases militaires)",
      explication: "Le non-respect de ces zones peut entraîner de lourdes amendes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel composant stabilise le drone en vol en mesurant l'inclinaison ?",
      options: ["Le moteur", "Le gyroscope", "La batterie", "La lentille"],
      reponse: "Le gyroscope",
      explication: "Il permet à l'ordinateur de bord de corriger la position instantanément."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on les courses de drones à haute vitesse ?",
      options: ["Drone Racing", "Air GP", "Robot Cross", "Sky Derby"],
      reponse: "Drone Racing",
      explication: "Les pilotes utilisent des drones très nerveux et des casques FPV."
    }
  ]
};
