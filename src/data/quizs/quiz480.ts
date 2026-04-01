import { Quiz } from "@/types/quiz";

export const quiz480: Quiz = {
  id: "480",
  titre: "Technologie : La Réalité Virtuelle (VR) 🥽🎮",
  description: "Testez vos connaissances sur l'immersion numérique totale.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Que signifie l'acronyme 'VR' ?",
      options: ["Visual Reality", "Virtual Reality (Réalité Virtuelle)", "Video Result", "Vocal Relay"],
      reponse: "Virtual Reality (Réalité Virtuelle)",
      explication: "Elle consiste à plonger une personne dans un monde artificiel créé numériquement."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel accessoire indispensable doit-on porter pour expérimenter la VR ?",
      options: ["Un casque (ou lunettes) de réalité virtuelle", "Une combinaison intégrale", "Des chaussures spéciales", "Un sac à dos"],
      reponse: "Un casque (ou lunettes) de réalité virtuelle",
      explication: "Il isole vos yeux de l'environnement réel pour afficher des images en 3D stéréoscopique."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle est la différence entre la Réalité Virtuelle (VR) et la Réalité Augmentée (AR) ?",
      options: ["La VR est plus vieille", "La VR vous isole du monde réel, l'AR superpose des éléments virtuels au monde réel (ex: Pokémon Go)", "C'est la même chose", "L'AR est seulement pour les yeux"],
      reponse: "La VR vous isole du monde réel, l'AR superpose des éléments virtuels au monde réel (ex: Pokémon Go)",
      explication: "En VR vous êtes 'ailleurs', en AR le virtuel vient s'inviter chez vous."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce que la 'Latence' en VR ?",
      options: ["Le prix du casque", "Le délai entre votre mouvement physique et sa reproduction à l'écran", "La taille du câble", "La qualité du son"],
      reponse: "Le délai entre votre mouvement physique et sa reproduction à l'écran",
      explication: "Si la latence est trop élevée, cela provoque la nausée car le cerveau perçoit un décalage."
    },
    {
      id: "5",
      type: "qcm",
      question: "Comment appelle-t-on le malaise (nausée, vertige) ressenti par certains utilisateurs de VR ?",
      options: ["Le mal de mer", "Le Motion Sickness (ou Cinétose)", "L'écranite", "La VR-nite"],
      reponse: "Le Motion Sickness (ou Cinétose)",
      explication: "Cela arrive quand vos yeux voient un mouvement mais que votre oreille interne ne le ressent pas."
    },
    {
      id: "6",
      type: "qcm",
      question: "Dans quel domaine professionnel la VR est-elle très utile pour s'entraîner sans risque ?",
      options: ["La chirurgie", "Le pilotage d'avion (simulateurs)", "La formation militaire", "Toutes ces réponses"],
      reponse: "Toutes ces réponses",
      explication: "La VR permet de simuler des situations dangereuses ou coûteuses en toute sécurité."
    },
    {
      id: "7",
      type: "qcm",
      question: "Que signifie '6DoF' (6 Degrees of Freedom) ?",
      options: ["Une résolution d'écran", "Que l'utilisateur peut bouger dans toutes les directions (avancer, reculer, sauter, tourner la tête)", "Le nombre de joueurs", "La puissance du processeur"],
      reponse: "Que l'utilisateur peut bouger dans toutes les directions (avancer, reculer, sauter, tourner la tête)",
      explication: "Cela offre une bien meilleure immersion qu'un casque qui ne permet que de tourner la tête."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel dispositif permet de 'toucher' ou de ressentir des objets virtuels ?",
      options: ["Un écran tactile", "Des gants (ou accessoires) haptiques", "Une télécommande télé", "Un micro"],
      reponse: "Des gants (ou accessoires) haptiques",
      explication: "Ils utilisent des vibrations ou des pressions pour simuler la sensation du toucher."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment appelle-t-on le concept d'un monde virtuel persistant où les gens interagissent via des avatars ?",
      options: ["Le Multivers", "Le Métavers", "Cyber-Espace", "Le Cloud"],
      reponse: "Le Métavers",
      explication: "C'est une vision futuriste d'un Internet social en 3D."
    },
    {
      id: "10",
      type: "qcm",
      question: "Quel casque grand public a popularisé la VR 'autonome' (sans avoir besoin d'un PC puissant relié par câble) ?",
      options: ["Oculus (Meta) Quest", "PlayStation VR", "Valve Index", "HTC Vive"],
      reponse: "Oculus (Meta) Quest",
      explication: "En intégrant tout le matériel dans le casque, il a rendu la VR beaucoup plus accessible."
    }
  ]
};
