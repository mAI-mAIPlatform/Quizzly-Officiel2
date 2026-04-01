import { Quiz } from "@/types/quiz";

export const quiz456: Quiz = {
  id: "456",
  titre: "Sport : L'Univers de la NBA 🏀🇺🇸",
  description: "Testez votre connaissance du plus grand championnat de basket-ball au monde.",
  theme: "Sport",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Combien d'équipes composent la ligue NBA ?",
      options: ["20", "24", "30", "32"],
      reponse: "30",
      explication: "Elles sont divisées en deux conférences : Est et Ouest."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel joueur est devenu en 2023 le meilleur marqueur de l'histoire de la NBA (dépassant Kareem Abdul-Jabbar) ?",
      options: ["Michael Jordan", "Kobe Bryant", "LeBron James", "Stephen Curry"],
      reponse: "LeBron James",
      explication: "Un record qui semblait pourtant imbattable pendant 39 ans."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle franchise détient (avec les Celtics) le plus grand nombre de titres de champion NBA ?",
      options: ["Chicago Bulls", "Los Angeles Lakers", "Golden State Warriors", "Miami Heat"],
      reponse: "Los Angeles Lakers",
      explication: "Les deux franchises historiques comptent chacune 17 ou 18 titres selon les saisons."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qui est surnommé 'His Airness' et est considéré par beaucoup comme le meilleur joueur de tous les temps ?",
      options: ["Magic Johnson", "Shaquille O'Neal", "Michael Jordan", "Larry Bird"],
      reponse: "Michael Jordan",
      explication: "Il a remporté 6 titres avec les Chicago Bulls dans les années 90."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel joueur a révolutionné le basket moderne par sa maîtrise incroyable du tir à 3 points ?",
      options: ["Kevin Durant", "Stephen Curry", "Luka Doncic", "James Harden"],
      reponse: "Stephen Curry",
      explication: "Il détient le record du nombre de tirs à 3 points réussis en carrière."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on le grand événement de milieu de saison où se réunissent les meilleurs joueurs ?",
      options: ["Les Playoffs", "Le All-Star Game", "Le Final Four", "La Draft"],
      reponse: "Le All-Star Game",
      explication: "C'est un match d'exhibition festif avec des concours de dunks et de tirs."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel joueur français a été sélectionné en première position de la Draft NBA 2023 ?",
      options: ["Tony Parker", "Victor Wembanyama", "Rudy Gobert", "Evan Fournier"],
      reponse: "Victor Wembanyama",
      explication: "Un événement historique pour le sport français."
    },
    {
      id: "8",
      type: "qcm",
      question: "Combien de temps dure un quart-temps en NBA ?",
      options: ["10 minutes", "12 minutes", "15 minutes", "8 minutes"],
      reponse: "12 minutes",
      explication: "C'est plus long que dans le basket international (FIBA) où ils durent 10 minutes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel était le surnom de Kobe Bryant ?",
      options: ["The Answer", "The King", "The Black Mamba", "The Big Cactus"],
      reponse: "The Black Mamba",
      explication: "Symbole de sa mentalité de compétiteur acharné (Mamba Mentality)."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle équipe a réalisé la meilleure saison régulière de l'histoire avec 73 victoires pour seulement 9 défaites ?",
      options: ["Bulls (1996)", "Warriors (2016)", "Lakers (1972)", "Celtics (1986)"],
      reponse: "Warriors (2016)",
      explication: "Même s'ils n'ont bizarrement pas gagné le titre cette année-là."
    }
  ]
};
