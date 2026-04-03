import { Quiz } from "@/types/quiz";

export const quiz573: Quiz = {
  id: "573",
  titre: "Technologie : L'Impression 3D 🖨️",
  description: "Comment transforme-t-on un fichier numérique en objet réel ?",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment appelle-t-on aussi l'impression 3D ?",
      options: ["Fabrication soustractive (on enlève de la matière)", "Fabrication additive (on ajoute des couches)", "Photocopie géante", "Moulage à la main"],
      reponse: "Fabrication additive (on ajoute des couches)",
      explication: "L'imprimante dépose des couches successives de matière pour construire l'objet."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel est le format de fichier le plus courant pour envoyer un objet à l'imprimante 3D ?",
      options: [".mp3", ".jpg", ".stl", ".doc"],
      reponse: ".stl",
      explication: "Le fichier STL décrit la surface de l'objet en 3D."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quel matériau est le plus utilisé dans les imprimantes 3D du collège (souvent du plastique à base de maïs) ?",
      options: ["Le fer", "Le PLA", "Le bois", "Le béton"],
      reponse: "Le PLA",
      explication: "Le PLA est un plastique biodégradable facile à imprimer."
    },
    {
      id: "4",
      type: "qcm",
      question: "Comment appelle-t-on le logiciel qui 'découpe' l'objet 3D en tranches pour l'imprimante ?",
      options: ["Un slicer (trancheur)", "Un mixer", "Un scanner", "Un navigateur"],
      reponse: "Un slicer (trancheur)",
      explication: "Il transforme le modèle 3D en instructions (G-Code) pour la machine."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce que la 'buse' d'une imprimante 3D ?",
      options: ["Le réservoir de plastique", "La pièce chauffante qui fait fondre et dépose le filament", "Le bouton d'arrêt", "Le ventilateur"],
      reponse: "La pièce chauffante qui fait fondre et dépose le filament",
      explication: "On l'appelle aussi l'extrudeur."
    },
    {
      id: "6",
      type: "qcm",
      question: "Qu'est-ce que le 'support' lors d'une impression 3D ?",
      options: ["L'endroit où on pose l'imprimante", "Une structure provisoire imprimée pour soutenir les parties vides de l'objet", "Le manuel de l'utilisateur", "Le câble électrique"],
      reponse: "Une structure provisoire imprimée pour soutenir les parties vides de l'objet",
      explication: "Sans support, l'imprimante ne peut pas imprimer dans le vide."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel est l'avantage majeur de l'impression 3D pour un inventeur ?",
      options: ["C'est l'objet le plus solide au monde", "On peut fabriquer un prototype unique très rapidement et à bas coût", "Elle fabrique des objets qui durent 1000 ans", "Elle n'utilise pas d'électricité"],
      reponse: "On peut fabriquer un prototype unique très rapidement et à bas coût",
      explication: "On parle de 'prototypage rapide'."
    },
    {
      id: "8",
      type: "qcm",
      question: "Peut-on imprimer des maisons avec des imprimantes 3D ?",
      options: ["Oui, de très grandes imprimantes déposent du béton", "Non c'est impossible", "Uniquement des maisons de poupées", "Seulement en Lego"],
      reponse: "Oui, de très grandes imprimantes déposent du béton",
      explication: "C'est une technologie qui se développe pour construire plus vite et moins cher."
    },
    {
      id: "9",
      type: "qcm",
      question: "Que signifie le 'remplissage' (infill) d'un objet imprimé ?",
      options: ["La couleur de l'objet", "La structure invisible à l'intérieur de l'objet (souvent en nid d'abeille) pour économiser du plastique", "Mettre de l'eau dedans", "Peindre l'objet"],
      reponse: "La structure invisible à l'intérieur de l'objet (souvent en nid d'abeille) pour économiser du plastique",
      explication: "On choisit un pourcentage (ex: 20%) pour que l'objet soit solide mais léger."
    },
    {
      id: "10",
      type: "qcm",
      question: "Si l'imprimante dépose des couches de 0,1 mm, l'objet sera :",
      options: ["Très rugueux", "Très lisse et précis", "Tout petit", "Énorme"],
      reponse: "Très lisse et précis",
      explication: "Plus les couches sont fines, plus la finition est belle (mais c'est plus long)."
    }
  ]
};
