import { Quiz } from "@/types/quiz";

export const quiz943: Quiz = {
  id: "943",
  titre: "Espace : Les Trous Noirs 🕳️🌑",
  description: "Explorez les objets les plus mystérieux et puissants de l'univers.",
  theme: "Sciences",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Qu'est-ce qu'un trou noir ?",
      options: ["Un vrai trou dans le ciel", "Une région où la gravité est si forte que rien ne peut s'en échapper", "Une étoile éteinte qui ne brille plus", "Un passage vers une autre dimension"],
      reponse: "Une région où la gravité est si forte que rien ne peut s'en échapper",
      explication: "Même la lumière est aspirée et ne peut plus sortir."
    },
    {
      id: "2",
      type: "qcm",
      question: "Comment se forme généralement un trou noir ?",
      options: ["Par la magie", "Après l'explosion d'une étoile très massive en supernova", "Par la collision de deux planètes", "Ils ont toujours existé"],
      reponse: "Après l'explosion d'une étoile très massive en supernova",
      explication: "Le cœur de l'étoile s'effondre sur lui-même sous l'effet de sa propre gravité."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Un trou noir aspire tout comme un aspirateur géant, même de très loin.",
      reponse: "Faux",
      explication: "Si on est loin, un trou noir se comporte comme une étoile de même masse. Il faut s'approcher très près pour être irrémédiablement aspiré."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle la 'frontière' imaginaire d'un trou noir, le point de non-retour ?",
      reponse: "Horizon des événements",
      explication: "Une fois cette limite franchie, il est impossible de s'échapper."
    },
    {
      id: "5",
      type: "qcm",
      question: "Que devient le temps à proximité immédiate d'un trou noir ?",
      options: ["Il s'arrête", "Il s'accélère", "Il ralentit énormément", "Il remonte en arrière"],
      reponse: "Il ralentit énormément",
      explication: "C'est un effet de la relativité générale d'Einstein : la gravité déforme le temps."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "On peut voir un trou noir directement avec un télescope classique.",
      reponse: "Faux",
      explication: "Comme il n'émet pas de lumière, il est invisible. On le détecte grâce à son influence sur les étoiles voisines ou au gaz qui brille autour de lui."
    },
    {
      id: "7",
      type: "qcm",
      question: "Comment appelle-t-on le disque de matière brillante (gaz et poussière) qui tourne autour d'un trou noir avant d'y tomber ?",
      options: ["Le disque d'unification", "Le disque d'accrétion", "La ceinture d'astéroïdes", "La nébuleuse"],
      reponse: "Le disque d'accrétion",
      explication: "C'est ce qui a permis de 'photographier' l'ombre d'un trou noir pour la première fois en 2019."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le célèbre physicien qui a théorisé que les trous noirs pourraient s'évaporer lentement (rayonnement de ...) ?",
      reponse: "Stephen Hawking",
      explication: "Il a montré que les trous noirs ne sont pas totalement 'éternels'."
    },
    {
      id: "9",
      type: "qcm",
      question: "Lequel de ces phénomènes bizarres se produirait si vous tombiez dans un trou noir ?",
      options: ["La spaghettification (étirement du corps)", "On devient un géant", "On se transforme en gaz", "On gèle instantanément"],
      reponse: "La spaghettification (étirement du corps)",
      explication: "La différence de gravité entre vos pieds et votre tête vous étirerait comme un élastique !"
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "Le Soleil finira par se transformer en trou noir.",
      reponse: "Faux",
      explication: "Le Soleil n'est pas assez massif. Il deviendra une naine blanche."
    }
  ]
};
