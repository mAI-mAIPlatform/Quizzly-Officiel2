import { Quiz } from "@/types/quiz";

export const quiz365: Quiz = {
  id: "365",
  titre: "Gastronomie : Les Fromages de France 🧀",
  description: "Testez votre nez et votre palais sur les trésors lactés de l'Hexagone.",
  theme: "Gastronomie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel fromage est surnommé le 'Roi des fromages' par Brillat-Savarin (ou souvent le Brie) ?",
      options: ["Le Camembert", "Le Roquefort", "Le Brie de Meaux", "Le Reblochon"],
      reponse: "Le Brie de Meaux",
      explication: "C'est un fromage à pâte molle et croûte fleurie de la région parisienne."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel fromage à pâte persillée est affiné dans des caves naturelles en Aveyron ?",
      options: ["Bleu d'Auvergne", "Roquefort", "Fourme d'Ambert", "Gorgonzola"],
      reponse: "Roquefort",
      explication: "Il est exclusivement fabriqué à partir de lait cru de brebis."
    },
    {
      id: "3",
      type: "qcm",
      question: "D'où vient le Camembert original ?",
      options: ["Bretagne", "Normandie", "Picardie", "Savoie"],
      reponse: "Normandie",
      explication: "Marie Harel est traditionnellement créditée de son invention au XVIIIe siècle."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quel fromage de Savoie est l'ingrédient principal de la Tartiflette ?",
      options: ["Beaufort", "Comté", "Reblochon", "Abondance"],
      reponse: "Reblochon",
      explication: "Son nom vient de 'reblocher', qui signifiait traire une deuxième fois la vache."
    },
    {
      id: "5",
      type: "qcm",
      question: "Lequel de ces fromages est une pâte pressée cuite produisant de grandes meules ?",
      options: ["Comté", "Chèvre", "Maroilles", "Époisses"],
      reponse: "Comté",
      explication: "Un Comté peut être affiné de 4 à 36 mois, voire plus."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quel fromage du Nord de la France est réputé pour son odeur très forte ?",
      options: ["L'Ossau-Iraty", "Le Maroilles", "Le Saint-Nectaire", "Le Cantal"],
      reponse: "Le Maroilles",
      explication: "Il est souvent dégusté sur une tarte ou trempé dans le café (tradition locale)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on la famille des fromages faits avec du lait de chèvre ?",
      options: ["Les pâtes dures", "Les chèvres", "Les tombes", "Les bleus"],
      reponse: "Les chèvres",
      explication: "Exemples : Crottin de Chavignol, Rocamadour, Sainte-Maure."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel fromage est utilisé pour la vraie Fondue Savoyarde ?",
      options: ["Camembert et Brie", "Beaufort, Comté et Emmental", "Chèvre et Roquefort", "Mozzarella"],
      reponse: "Beaufort, Comté et Emmental",
      explication: "On mélange généralement trois fromages locaux pour obtenir la texture parfaite."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'un fromage AOP ?",
      options: ["Artisan Original de Paris", "Appellation d'Origine Protégée", "Aliment de Qualité Première", "Aucune de ces réponses"],
      reponse: "Appellation d'Origine Protégée",
      explication: "C'est un label qui garantit que le fromage a été produit selon un savoir-faire reconnu dans une zone géographique précise."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel fromage porte le nom d'un célèbre empereur français ?",
      options: ["Le Napoléon", "Le César", "Le Charlemagne", "Le Louis XIV"],
      reponse: "Le Napoléon",
      explication: "C'est une tome de brebis des Pyrénées."
    }
  ]
};
