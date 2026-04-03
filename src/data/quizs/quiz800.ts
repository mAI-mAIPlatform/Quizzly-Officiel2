import { Quiz } from "@/types/quiz";

export const quiz800: Quiz = {
  id: "800",
  titre: "Culture : Astérix et Obélix 🥖🐗",
  description: "Testez vos connaissances sur l'univers de la plus célèbre BD française.",
  theme: "Culture Générale",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qui est le druide qui prépare la potion magique ?",
      options: ["Assurancetourix", "Panoramix", "Abraracourcix", "Agecanonix"],
      reponse: "Panoramix",
      explication: "Il coupe du gui avec sa serpe d'or."
    },
    {
      id: "2",
      type: "qcm",
      question: "Pourquoi Obélix n'a-t-il pas le droit de boire de la potion magique ?",
      options: ["Il est allergique", "Il est tombé dedans quand il était petit", "Il est trop fort déjà", "Il n'aime pas le goût"],
      reponse: "Il est tombé dedans quand il était petit",
      explication: "Les effets sont permanents chez lui."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le petit chien d'Obélix s'appelle Idéfix.",
      reponse: "Vrai",
      explication: "Un petit chien blanc qui pleure quand on arrache un arbre."
    },
    {
      id: "4",
      type: "courte",
      question: "Quel est le plat préféré d'Obélix ?",
      reponse: "Sanglier rôti",
      explication: "Ou simplement 'le sanglier'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel est le métier du personnage qui chante très mal dans le village ?",
      options: ["Druide", "Poissonnier", "Barde", "Forgeron"],
      reponse: "Barde",
      explication: "C'est Assurancetourix. Il finit souvent ligoté pendant le banquet."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le chef du village s'appelle Abraracourcix.",
      reponse: "Vrai",
      explication: "Il se déplace toujours sur son bouclier porté par deux gaulois."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quel peuple assiège sans cesse les Gaulois ?",
      options: ["Les Grecs", "Les Romains", "Les Égyptiens", "Les Vikings"],
      reponse: "Les Romains",
      explication: "Menés par Jules César."
    },
    {
      id: "8",
      type: "courte",
      question: "Qui est l'auteur (scénariste) original des textes d'Astérix (avec Uderzo au dessin) ?",
      reponse: "René Goscinny",
      explication: "Un génie de l'humour français."
    },
    {
      id: "9",
      type: "qcm",
      question: "Comment s'appelle le poissonnier du village dont les poissons ne sont pas toujours frais ?",
      options: ["Cétautomatix", "Ordralphabétix", "Falbala", "Bonemine"],
      reponse: "Ordralphabétix",
      explication: "Il se bat souvent avec Cétautomatix le forgeron."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Avoir 'peur que le ciel lui tombe sur la tête' est la seule crainte des Gaulois.",
      reponse: "Vrai",
      explication: "C'est ce qu'ils répètent souvent dans la bande dessinée."
    }
  ]
};
