import { Quiz } from "@/types/quiz";

export const quiz886: Quiz = {
  id: "886",
  titre: "Corps Humain : La Digestion 🍎💩",
  description: "Suivez le voyage de vos aliments du premier croc jusqu'à la sortie !",
  theme: "Sciences",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Où commence la digestion ?",
      options: ["Dans l'estomac", "Dans la bouche", "Dans l'intestin", "Dans la gorge"],
      reponse: "Dans la bouche",
      explication: "Les dents mâchent et la salive commence à transformer les aliments."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le tuyau qui relie la bouche à l'estomac ?",
      options: ["La trachée", "L'œsophage", "L'intestin", "L'artère"],
      reponse: "L'œsophage",
      explication: "C'est un conduit musclé qui pousse la nourriture vers le bas."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "L'estomac contient un liquide très acide pour dissoudre les aliments.",
      reponse: "Vrai",
      explication: "Ce liquide s'appelle le suc gastrique."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle l'organe très long (environ 6 mètres) où les nutriments passent dans le sang ?",
      reponse: "Intestin grêle",
      explication: "C'est là que se fait la plus grande partie de la digestion."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel organe fabrique de la 'bile' pour aider à digérer les graisses ?",
      options: ["Le cœur", "Le foie", "Le cerveau", "Les poumons"],
      reponse: "Le foie",
      explication: "Le foie est l'usine chimique de notre corps."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La digestion dure seulement quelques minutes.",
      reponse: "Faux",
      explication: "Le voyage complet des aliments peut durer entre 20 et 30 heures !"
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel organe récupère l'eau des aliments non digérés et forme les selles ?",
      options: ["L'estomac", "Le côlon (gros intestin)", "La vessie", "La langue"],
      reponse: "Le côlon (gros intestin)",
      explication: "C'est la dernière étape avant l'évacuation des déchets."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appellent les protéines produites par notre corps pour découper les aliments en minuscules morceaux ?",
      reponse: "Enzymes",
      explication: "Elles agissent comme des petits ciseaux moléculaires."
    },
    {
      id: "9",
      type: "qcm",
      question: "Pourquoi l'estomac fait-il parfois des bruits (les gargouillis) ?",
      options: ["Parce qu'on a avalé un oiseau", "À cause des mouvements de l'air et des liquides lors de la digestion", "Parce que le cœur tape dedans", "C'est le cerveau qui parle"],
      reponse: "À cause des mouvements de l'air et des liquides lors de la digestion",
      explication: "On appelle cela des borborygmes."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il est conseillé de bien mâcher pour aider son estomac.",
      reponse: "Vrai",
      explication: "Plus les morceaux sont petits, plus les sucs digestifs travaillent facilement."
    }
  ]
};
