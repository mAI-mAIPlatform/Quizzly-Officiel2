import { Quiz } from "@/types/quiz";

export const quiz204: Quiz = {
  id: "204",
  titre: "L'Optique : Lumière & Vision 🕯️👀",
  description: "Découvrez les propriétés physiques de la lumière et le fonctionnement de l'œil.",
  theme: "Sciences",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quelle est la vitesse de la lumière dans le vide (environ) ?",
      options: ["3 000 km/s", "300 000 km/s", "1 000 000 km/s", "340 m/s"],
      reponse: "300 000 km/s",
      explication: "C'est la vitesse limite de l'univers selon Einstein."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment s'appelle le phénomène où la lumière change de direction en passant d'un milieu à un autre (ex: air vers eau) ?",
      options: ["La réflexion", "La réfraction", "La diffraction", "L'absorption"],
      reponse: "La réfraction",
      explication: "C'est ce qui donne l'illusion qu'un bâton est cassé dans un verre d'eau."
    },
    {
      id: "3",
      type: "qcm",
      question: "Quelle pièce d'optique est bombée vers l'extérieur et fait converger les rayons lumineux ?",
      options: ["Une lentille divergente", "Une lentille convergente", "Un miroir plan", "Un prisme"],
      reponse: "Une lentille convergente",
      explication: "On l'utilise dans les loupes et pour corriger l'hypermétropie."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce qu'un arc-en-ciel ?",
      options: ["Une illusion d'optique pure", "La décomposition de la lumière du soleil par des gouttes de pluie", "Un reflet de l'océan dans le ciel", "Un rideau de gaz coloré"],
      reponse: "La décomposition de la lumière du soleil par des gouttes de pluie",
      explication: "Chaque goutte d'eau agit comme un petit prisme."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quelle partie de l'œil régule la quantité de lumière qui entre (comme le diaphragme d'un appareil photo) ?",
      options: ["La cornée", "La rétine", "L'iris", "Le cristallin"],
      reponse: "L'iris",
      explication: "L'iris se contracte ou se dilate pour modifier la taille de la pupille."
    },
    {
      id: "6",
      type: "qcm",
      question: "Où se forme normalement l'image nette au fond de l'œil ?",
      options: ["Sur le nerf optique", "Sur la rétine", "Sur l'humeur vitrée", "Sur la sclérotique"],
      reponse: "Sur la rétine",
      explication: "La rétine transforme la lumière en signaux électriques pour le cerveau."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le défaut de vision où l'on voit mal les objets éloignés ?",
      options: ["L'hypermétropie", "La presbytie", "La myopie", "L'astigmatisme"],
      reponse: "La myopie",
      explication: "Le myope voit flou au loin car l'image se forme avant la rétine."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quelle couleur obtient-on en mélangeant les trois couleurs primaires de la lumière (RVB) ?",
      options: ["Noir", "Gris", "Blanc", "Marron"],
      reponse: "Blanc",
      explication: "C'est la synthèse additive de la lumière."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel instrument utilise deux miroirs inclinés pour voir par-dessus un obstacle ?",
      options: ["Le télescope", "Le périscope", "La lunette astronomique", "Le microscope"],
      reponse: "Le périscope",
      explication: "Utilisé notamment dans les sous-marins."
    },
    {
      id: "10",
      type: "qcm",
      question: "Qui a prouvé que la lumière blanche est composée d'un spectre de couleurs en utilisant un prisme ?",
      options: ["Albert Einstein", "Isaac Newton", "Galilée", "Max Planck"],
      reponse: "Isaac Newton",
      explication: "En 1666, il a décomposé la lumière en sept couleurs fondamentales."
    }
  ]
};
