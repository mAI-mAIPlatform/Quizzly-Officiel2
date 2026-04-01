import { Quiz } from "@/types/quiz";

export const quiz380: Quiz = {
  id: "380",
  titre: "Technologie : La Réalité Virtuelle 🕶️🎮",
  description: "Découvrez les technologies qui nous plongent dans d'autres mondes.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie 'VR' ?",
      options: ["Visual Reality", "Virtual Reality (Réalité Virtuelle)", "Video record", "Voice Recognition"],
      reponse: "Virtual Reality (Réalité Virtuelle)",
      explication: "C'est une technologie qui simule numériquement un environnement."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel accessoire est indispensable pour vivre une expérience VR ?",
      options: ["Une souris", "Un casque (ou masque)", "Un haut-parleur", "Une manette classique"],
      reponse: "Un casque (ou masque)",
      explication: "Il possède deux écrans (un pour chaque œil) pour créer l'effet de relief (3D)."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la différence entre Réalité Virtuelle (VR) et Réalité Augmentée (AR) ?",
      options: ["C'est la même chose", "La VR vous isole dans un monde virtuel, l'AR superpose des éléments virtuels au monde réel", "L'AR est plus vieille", "La VR est pour les films, l'AR pour les jeux"],
      reponse: "La VR vous isole dans un monde virtuel, l'AR superpose des éléments virtuels au monde réel",
      explication: "Pokémon GO est un exemple célèbre de Réalité Augmentée."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on le malaise (nausées, vertiges) que certaines personnes ressentent en VR ?",
      options: ["Le mal de mer", "Le mal des transports", "La cinétose (ou Motion Sickness)", "La grippe VR"],
      reponse: "La cinétose (ou Motion Sickness)",
      explication: "Cela arrive quand le cerveau voit un mouvement que le corps ne ressent pas."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel rachat par Facebook en 2014 a lancé la mode moderne de la VR grand public ?",
      options: ["Oculus", "Sony", "HTC", "Samsung"],
      reponse: "Oculus",
      explication: "L'Oculus Rift était alors le prototype le plus prometteur."
    },
    {
      id: "6",
      type: "qcm",
      question: "Comment appelle-t-on le concept d'un monde virtuel persistant où l'on peut vivre, travailler et jouer ?",
      options: ["The Grid", "Le Métavers", "Cyberespace", "Social Network"],
      reponse: "Le Métavers",
      explication: "C'est une vision du futur du web prônée notamment par la société Meta."
    },
    {
      id: "7",
      type: "qcm",
      question: "À part les jeux vidéo, dans quel domaine la VR est-elle très utilisée ?",
      options: ["La chirurgie (entraînement)", "L'architecture (visites)", "L'armée (simulations)", "Toutes ces réponses"],
      reponse: "Toutes ces réponses",
      explication: "La VR permet de s'entraîner à des situations réelles sans aucun danger."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel est le nom du casque VR de Sony pour la PlayStation ?",
      options: ["PSVR", "Quest", "Vive", "Index"],
      reponse: "PSVR",
      explication: "La version 2 est sortie pour la PS5."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie 'Tracking' en VR ?",
      options: ["Chercher un fichier", "Le suivi des mouvements de la tête et des mains par le système", "Télécharger un jeu", "Regarder une vidéo"],
      reponse: "Le suivi des mouvements de la tête et des mains par le système",
      explication: "C'est ce qui permet à l'image de bouger quand vous tournez la tête."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quelle est l'entreprise qui a sorti le casque 'Vision Pro' mêlant VR et AR en 2024 ?",
      options: ["Google", "Microsoft", "Apple", "Nintendo"],
      reponse: "Apple",
      explication: "Apple appelle cela de 'l'informatique spatiale'."
    }
  ]
};
