import { Quiz } from "@/types/quiz";

export const quiz848: Quiz = {
  id: "848",
  titre: "Inventions : La Pénicilline 💊🧪",
  description: "Découvrez l'invention du premier antibiotique qui a sauvé des millions de vies.",
  theme: "Histoire",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel savant écossais a découvert la pénicilline par hasard en 1928 ?",
      options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Robert Koch"],
      reponse: "Alexander Fleming",
      explication: "Il a remarqué une moisissure qui tuait les bactéries dans ses boîtes de culture."
    },
    {
      id: "2",
      type: "qcm",
      question: "De quel type d'être vivant provient naturellement la pénicilline ?",
      options: ["D'une plante", "D'un champignon (moisissure)", "D'un insecte", "D'un minéral"],
      reponse: "D'un champignon (moisissure)",
      explication: "Le champignon s'appelle 'Penicillium notatum'."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La pénicilline est le tout premier antibiotique découvert.",
      reponse: "Vrai",
      explication: "Elle a ouvert la porte à toute une famille de médicaments pour soigner les infections."
    },
    {
      id: "4",
      type: "courte",
      question: "Contre quel type de microbes les antibiotiques sont-ils efficaces ?",
      reponse: "Bactéries",
      explication: "Ils ne fonctionnent pas contre les virus (grippe, rhume...)."
    },
    {
      id: "5",
      type: "qcm",
      question: "Pendant quel conflit mondial la pénicilline a-t-elle été utilisée massivement pour la première fois ?",
      options: ["La Première Guerre mondiale", "La Seconde Guerre mondiale", "La Guerre froide", "La Guerre du Vietnam"],
      reponse: "La Seconde Guerre mondiale",
      explication: "Elle a sauvé des milliers de soldats blessés qui auraient succombé à des infections."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Alexander Fleming a partagé le prix Nobel avec d'autres chercheurs qui ont permis de fabriquer le médicament en série.",
      reponse: "Vrai",
      explication: "Howard Florey et Ernst Chain ont réussi à transformer la découverte en un vrai médicament utilisable."
    },
    {
      id: "7",
      type: "qcm",
      question: "Pourquoi les médecins disent-ils que les antibiotiques 'ce n'est pas automatique' ?",
      options: ["Parce que ça coûte trop cher", "Pour éviter que les bactéries ne deviennent résistantes", "Parce que c'est difficile à avaler", "Parce qu'il n'y en a plus"],
      reponse: "Pour éviter que les bactéries ne deviennent résistantes",
      explication: "Si on en prend trop, les bactéries apprennent à s'en défendre."
    },
    {
      id: "8",
      type: "courte",
      question: "Quel savant français avait découvert le principe du vaccin (contre la rage notamment) ?",
      reponse: "Louis Pasteur",
      explication: "C'est un autre grand pionnier de la médecine."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces problèmes la pénicilline permet-elle de soigner ?",
      options: ["Une jambe cassée", "Une carie", "Une infection pulmonaire (pneumonie)", "Une brûlure légère"],
      reponse: "Une infection pulmonaire (pneumonie)",
      explication: "Elle s'attaque aux infections bactériennes internes."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Il existe des personnes allergiques à la pénicilline.",
      reponse: "Vrai",
      explication: "C'est pour cela que le médecin demande toujours si on la supporte avant d'en prescrire."
    }
  ]
};
