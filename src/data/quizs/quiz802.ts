import { Quiz } from "@/types/quiz";

export const quiz802: Quiz = {
  id: "802",
  titre: "Corps Humain : Le Cœur et le Sang ❤️",
  description: "Découvrez comment fonctionne la pompe de votre vie et le transport des nutriments.",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce que le cœur ?",
      options: ["Un os", "Un cartilage", "Un muscle creux", "Une glande"],
      reponse: "Un muscle creux",
      explication: "Il fonctionne comme une pompe automatique."
    },
    {
      id: "2",
      type: "qcm",
      question: "Combien de fois le cœur bat-il environ par minute au repos chez un enfant ?",
      options: ["30 à 40 fois", "50 à 60 fois", "70 à 100 fois", "150 à 200 fois"],
      reponse: "70 à 100 fois",
      explication: "Le rythme cardiaque s'accélère pendant l'effort."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le sang circule toujours dans le même sens dans le corps.",
      reponse: "Vrai",
      explication: "Grâce à un système de clapets (valvules) dans le cœur."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appellent les vaisseaux qui transportent le sang riche en oxygène du cœur vers les organes ?",
      reponse: "Artères",
      explication: "Elles ont des parois épaisses et élastiques."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appellent les vaisseaux qui ramènent le sang vers le cœur ?",
      options: ["Les artères", "Les veines", "Les capillaires", "Les nerfs"],
      reponse: "Les veines",
      explication: "Le sang y est souvent plus pauvre en oxygène."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le sang est composé uniquement de liquide rouge.",
      reponse: "Faux",
      explication: "Il contient du plasma (liquide), des globules rouges, des globules blancs et des plaquettes."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est le rôle des globules rouges ?",
      options: ["Défendre le corps contre les microbes", "Transporter l'oxygène", "Boucher les blessures", "Digérer les aliments"],
      reponse: "Transporter l'oxygène",
      explication: "Grâce à une protéine appelée hémoglobine."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le bruit que l'on entend quand le cœur se contracte ?",
      reponse: "Battement",
      explication: "Ou pulsation."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel élément du sang sert à stopper les saignements (coagulation) ?",
      options: ["Le plasma", "Les globules blancs", "Les plaquettes", "Le glucose"],
      reponse: "Les plaquettes",
      explication: "Elles forment un petit bouchon pour boucher la plaie."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le cœur se trouve exactement au milieu de la poitrine.",
      reponse: "Faux",
      explication: "Il est légèrement décalé vers la gauche entre les deux poumons."
    }
  ]
};
