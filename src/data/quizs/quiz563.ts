import { Quiz } from "@/types/quiz";

export const quiz563: Quiz = {
  id: "563",
  titre: "Physique-Chimie : Conducteurs et Isolants 🔌",
  description: "Quels matériaux laissent passer le courant électrique ?",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on un matériau qui laisse passer le courant électrique ?",
      options: ["Un isolant", "Un conducteur", "Un aimant", "Un miroir"],
      reponse: "Un conducteur",
      explication: "L'électricité circule facilement à l'intérieur."
    },
    {
      id: "2",
      type: "qcm",
      question: "Lequel de ces matériaux est un très bon conducteur ?",
      options: ["Le plastique", "Le fer (et tous les métaux)", "Le bois sec", "Le verre"],
      reponse: "Le fer (et tous les métaux)",
      explication: "Les métaux (cuivre, fer, aluminium, or...) sont tous conducteurs."
    },
    {
      id: "3",
      type: "qcm",
      question: "Comment appelle-t-on un matériau qui ne laisse PAS passer le courant ?",
      options: ["Un conducteur", "Un isolant", "Un miroir", "Un cristal"],
      reponse: "Un isolant",
      explication: "Il fait barrage à l'électricité."
    },
    {
      id: "4",
      type: "qcm",
      question: "Le plastique est-il un conducteur ou un isolant ?",
      options: ["Conducteur", "Isolant", "Ça dépend de sa couleur", "Uniquement s'il est chaud"],
      reponse: "Isolant",
      explication: "C'est pour cela qu'on entoure les fils électriques de plastique."
    },
    {
      id: "5",
      type: "qcm",
      question: "Pourquoi l'intérieur des fils électriques est-il en cuivre ?",
      options: ["Parce que c'est joli", "Parce que le cuivre est un excellent conducteur peu cher", "Parce que c'est solide", "Pour faire du poids"],
      reponse: "Parce que le cuivre est un excellent conducteur peu cher",
      explication: "Le cuivre permet au courant de circuler avec très peu de pertes."
    },
    {
      id: "6",
      type: "qcm",
      question: "L'eau du robinet est-elle conductrice ?",
      options: ["Non, c'est comme le plastique", "Oui, légèrement (à cause des sels minéraux)", "Uniquement si elle bouille", "Seulement l'eau de mer"],
      reponse: "Oui, légèrement (à cause des sels minéraux)",
      explication: "C'est pour cela qu'il est très dangereux de manipuler l'électricité avec les mains mouillées."
    },
    {
      id: "7",
      type: "qcm",
      question: "Le corps humain est-il conducteur ?",
      options: ["Non", "Oui, il contient beaucoup d'eau salée", "Uniquement les os", "Uniquement les cheveux"],
      reponse: "Oui, il contient beaucoup d'eau salée",
      explication: "C'est ce qui rend l'électrisation possible."
    },
    {
      id: "8",
      type: "qcm",
      question: "Lequel de ces objets est un isolant ?",
      options: ["Une règle en métal", "Une gomme en plastique/caoutchouc", "Un trombone en fer", "Une pièce de monnaie"],
      reponse: "Une gomme en plastique/caoutchouc",
      explication: "La gomme empêche le passage du courant."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que se passe-t-il si un circuit est composé uniquement d'isolants ?",
      options: ["La lampe brille très fort", "Le courant ne circule pas", "La pile explose", "Le circuit change de couleur"],
      reponse: "Le courant ne circule pas",
      explication: "Il faut une chaîne continue de conducteurs pour fermer le circuit."
    },
    {
      id: "10",
      type: "qcm",
      question: "L'air est-il généralement conducteur ou isolant ?",
      options: ["Conducteur", "Isolant", "Ça dépend du vent", "Toujours conducteur"],
      reponse: "Isolant",
      explication: "Heureusement, sinon nous recevrions des décharges dès qu'on s'approche d'une prise !"
    }
  ]
};
