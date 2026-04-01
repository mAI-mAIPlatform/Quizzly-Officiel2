import { Quiz } from "@/types/quiz";

export const quiz242: Quiz = {
  id: "242",
  titre: "Le Grand Nord : Canada 🇨🇦🌲",
  description: "Testez votre connaissance sur le deuxième plus grand pays du monde, ses lacs et son sirop d'érable.",
  theme: "Géographie",
  difficulte: "Débutant",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la capitale du Canada ?",
      options: ["Toronto", "Montréal", "Ottawa", "Vancouver"],
      reponse: "Ottawa",
      explication: "Ottawa a été choisie par la reine Victoria pour sa position stratégique."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelles sont les deux langues officielles du Canada ?",
      options: ["Anglais et Espagnol", "Anglais et Français", "Anglais et Allemand", "Anglais uniquement"],
      reponse: "Anglais et Français",
      explication: "Le Canada est un pays bilingue suite à son histoire coloniale britannique et française."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel symbole rouge est représenté au centre du drapeau canadien ?",
      options: ["Une Étoile", "Une Feuille d'érable", "Un Castor", "Un Sapin"],
      reponse: "Une Feuille d'érable",
      explication: "La feuille d'érable est l'emblème national du Canada depuis le XVIIIe siècle."
    },
    {
      id: "4",
      type: "qcm",
      question: "Quelle province canadienne est majoritairement francophone ?",
      options: ["Ontario", "Québec", "Alberta", "Manitoba"],
      reponse: "Québec",
      explication: "Le Québec est le cœur de la francophonie en Amérique du Nord."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel animal emblématique du Canada est connu pour construire des bar rages sur les rivières ?",
      options: ["L'Orignal", "Le Castor", "L'Ours Polaire", "Le Caribou"],
      reponse: "Le Castor",
      explication: "Le castor a joué un rôle historique très important dans le commerce des fourrures."
    },
    {
      id: "6",
      type: "qcm",
      question: "Quelles chutes d'eau spectaculaires sont partagées entre le Canada et les États-Unis ?",
      options: ["Chutes d'Iguazú", "Chutes du Niagara", "Chutes Victoria", "Chutes Angel"],
      reponse: "Chutes du Niagara",
      explication: "Elles sont situées sur la rivière Niagara, entre l'Ontario et l'État de New York."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on les populations autochtones du Grand Nord canadien ?",
      options: ["Les Apaches", "Les Inuits", "Les Maoris", "Les Incas"],
      reponse: "Les Inuits",
      explication: "Ils vivent principalement dans les régions arctiques du Canada."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel sport est considéré comme le sport national d'hiver au Canada ?",
      options: ["Le Ski alpin", "Le Hockey sur glace", "Le Curling", "Le Patinage artistique"],
      reponse: "Le Hockey sur glace",
      explication: "Le hockey est une véritable passion nationale au pays."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle est la plus grande ville du Canada (centre économique et culturel) ?",
      options: ["Vancouver", "Toronto", "Montréal", "Calgary"],
      reponse: "Toronto",
      explication: "Toronto est une métropole cosmopolite située sur les rives du lac Ontario."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel produit sucré typique, récolté sur des arbres, fait la renommée mondiale du Canada ?",
      options: ["Le Miel de sapin", "Le Sirop d'érable", "La Confiture de lait", "Le Sucre de canne"],
      reponse: "Le Sirop d'érable",
      explication: "Le Québec produit environ 70 % de la production mondiale de sirop d'érable."
    }
  ]
};
