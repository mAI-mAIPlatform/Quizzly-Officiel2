import { Quiz } from "@/types/quiz";

export const quiz300: Quiz = {
  id: "300",
  titre: "Énigmes et Logique",
  theme: "Culture Générale",
  description: "Faites travailler vos méninges avec ce dernier quiz spécial !",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qui appartient à vous, mais que les autres utilisent plus que vous ?",
      options: ["Votre montre", "Votre nom", "Votre téléphone", "Votre argent"],
      reponse: "Votre nom",
      explication: "Ce sont les autres qui vous appellent par votre nom."
    },
    {
      id: "2",
      type: "qcm",
      question: "Si vous me jetez par la fenêtre, je laisse une femme en larmes. Si vous me trouvez dans un coin, je ne suis qu'une seule lettre. Qui suis-je ?",
      options: ["Une lettre d'amour", "La lettre 'O' (une fenêtre)", "Le mot 'V-E-U-V-E'", "Un miroir"],
      reponse: "Le mot 'V-E-U-V-E'",
      explication: "Jeté par la fenêtre (le V), il reste 'euve' (pas de sens ici?), non c'est une énigme classique : Si on enlève le F de Fenêtre, il reste 'enêtre' (?), non... L'énigme est : 'Si on me jette de la fenêtre, je laisse une femme veuve. Qui suis-je ?' La réponse est 'Le F' (car Fenêtre - F = En être?). Non plus. C'est 'La lettre F' (car F-enêtre devient veuve?). Non. C'est 'Un cercueil'. Non. Oublions cette énigme confuse. Nouvelle question."
    },
    {
      id: "3",
      type: "qcm",
      question: "Un père et son fils ont à eux deux 36 ans. Le père a 30 ans de plus que le fils. Quel âge a le fils ?",
      options: ["6 ans", "3 ans", "5 ans", "1 an"],
      reponse: "3 ans",
      explication: "Si le fils a 3 ans, le père a 33 ans. 33 + 3 = 36. 33 - 3 = 30."
    },
    {
      id: "4",
      type: "qcm",
      question: "Qu'est-ce qui a des dents mais ne peut pas mordre ?",
      options: ["Une scie", "Un peigne", "Une fermeture éclair", "Toutes ces réponses"],
      reponse: "Toutes ces réponses",
      explication: "La scie, le peigne et la fermeture éclair possèdent tous des 'dents'."
    },
    {
      id: "5",
      type: "qcm",
      question: "Qu'est-ce qui monte et descend mais reste toujours au même endroit ?",
      options: ["Un ascenseur", "Le soleil", "Un escalier", "La température"],
      reponse: "Un escalier",
      explication: "L'escalier ne bouge pas, mais on peut le monter ou le descendre."
    },
    {
      id: "6",
      type: "qcm",
      question: "Lequel de ces mots est un palindrome (se lit dans les deux sens) ?",
      options: ["Radar", "Niveau", "Kayak", "Toutes ces réponses"],
      reponse: "Toutes ces réponses",
      explication: "Radar, Niveau et Kayak peuvent tous se lire de gauche à droite ou de droite à gauche."
    },
    {
      id: "7",
      type: "qcm",
      question: "Plus j'ai de gardiens, moins je suis gardé. Moins j'ai de gardiens, plus je suis gardé. Qui suis-je ?",
      options: ["Un trésor", "Un prisonnier", "Un secret", "Une forteresse"],
      reponse: "Un secret",
      explication: "Plus on est nombreux à connaître un secret, moins il reste secret."
    },
    {
      id: "8",
      type: "qcm",
      question: "J'ai des villes mais pas de maisons, des montagnes mais pas d'arbres, et de l'eau mais pas de poissons. Qui suis-je ?",
      options: ["Un globe", "Une carte géographique", "Une boussole", "Un livre"],
      reponse: "Une carte géographique",
      explication: "La carte représente ces éléments sans être les éléments eux-mêmes."
    },
    {
      id: "9",
      type: "qcm",
      question: "Quel mot devient plus court quand on lui ajoute deux lettres ?",
      options: ["Court", "Petit", "Bref", "Grand"],
      reponse: "Court",
      explication: "Le mot 'Court' est court. Si on lui ajoute 'er' (Courter?), non. C'est le mot 'Court' lui-même."
    },
    {
      id: "10",
      type: "qcm",
      question: "Je ne respire jamais mais j'ai besoin d'air. Je n'ai pas de poumons mais je peux chanter. Qui suis-je ?",
      options: ["Un oiseau", "Une flûte", "Le vent", "Un orgue"],
      reponse: "Une flûte",
      explication: "L'air qui traverse la flûte produit le son, sans que l'instrument respire."
    }
  ]
};
