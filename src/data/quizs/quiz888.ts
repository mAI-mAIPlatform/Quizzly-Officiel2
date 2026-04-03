import { Quiz } from "@/types/quiz";

export const quiz888: Quiz = {
  id: "888",
  titre: "Corps Humain : La Peau 🖐️🧴",
  description: "Découvrez le plus grand organe de votre corps qui vous protège chaque jour.",
  theme: "Sciences",
  difficulte: "Mojen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel est le rôle principal de la peau ?",
      options: ["Nous faire transpirer seulement", "Nous protéger contre les microbes et les chocs", "Maintenir les os ensemble", "Digérer la lumière"],
      reponse: "Nous protéger contre les microbes et les chocs",
      explication: "Elle sert de barrière entre l'intérieur de notre corps et le monde extérieur."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle la couche de surface de la peau, celle que l'on voit ?",
      options: ["Le derme", "L'épiderme", "L'hypoderme", "Le vernis"],
      reponse: "L'épiderme",
      explication: "Elle se renouvelle sans cesse. On perd des milliers de petites peaux mortes chaque jour."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "La peau nous aide à réguler la température de notre corps grâce à la transpiration.",
      reponse: "Vrai",
      explication: "Quand on a trop chaud, l'eau s'évapore et refroidit la peau."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel pigment donne sa couleur à notre peau et nous protège du soleil ?",
      reponse: "Mélanine",
      explication: "Plus on en a, plus on est bronzé ou plus la peau est foncée."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment s'appellent les dessins uniques que nous avons au bout des doigts ?",
      options: ["Des cicatrices", "Des empreintes digitales", "Des rides", "Des tatouages"],
      reponse: "Des empreintes digitales",
      explication: "Personne au monde n'a les mêmes empreintes que vous !"
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "La peau est plus épaisse sur les paupières que sur la plante des pieds.",
      reponse: "Faux",
      explication: "C'est le contraire ! La peau des pieds est très épaisse pour résister au poids, alors que celle des paupières est très fine."
    },
    {
      id: "7",
      type: "qcm",
      question: "Pourquoi a-t-on la 'chair de poule' quand on a froid ?",
      options: ["Pour s'envoler", "À cause des petits muscles attachés à nos poils qui se contractent", "Parce que la peau rétrécit", "C'est une allergie à l'air"],
      reponse: "À cause des petits muscles attachés à nos poils qui se contractent",
      explication: "C'est un vieux réflexe qui permettait autrefois de piéger l'air chaud entre les poils."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment appelle-t-on le liquide gras produit par la peau pour ne pas qu'elle se dessèche ?",
      reponse: "Sébum",
      explication: "Il sert à garder la peau et les cheveux souples."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quelle vitamine notre peau fabrique-t-elle grâce aux rayons du soleil ?",
      options: ["Vitamine A", "Vitamine C", "Vitamine D", "Vitamine K"],
      reponse: "Vitamine D",
      explication: "Elle est essentielle pour avoir des os solides."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Une cicatrice disparaît toujours complètement avec le temps.",
      reponse: "Faux",
      explication: "Parfois, la peau se répare de façon différente et laisse une marque permanente."
    }
  ]
};
