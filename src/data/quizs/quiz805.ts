import { Quiz } from "@/types/quiz";

export const quiz805: Quiz = {
  id: "805",
  titre: "Corps Humain : Le Cerveau et les Nerfs 🧠",
  description: "Découvrez l'ordinateur central de votre corps et son réseau de communication.",
  theme: "Sciences",
  difficulte: "Difficile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Comment s'appelle la cellule de base du système nerveux ?",
      options: ["Le neurone", "Le globule", "La molécule", "L'atome"],
      reponse: "Le neurone",
      explication: "Nous en avons environ 86 milliards dans le cerveau !"
    },
    {
      id: "2",
      type: "qcm",
      question: "Quelle partie du cerveau s'occupe de l'équilibre et de la coordination ?",
      options: ["Le cerveau", "Le cervelet", "Le tronc cérébral", "L'hypophyse"],
      reponse: "Le cervelet",
      explication: "Situé à l'arrière, il nous permet de marcher ou de faire du vélo sans tomber."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "Le cerveau gauche contrôle généralement le côté droit du corps.",
      reponse: "Vrai",
      explication: "Les fils se croisent au niveau du cou."
    },
    {
      id: "4",
      type: "courte",
      question: "Comment s'appelle le prolongement du cerveau qui descend dans le dos ?",
      reponse: "Moelle épinière",
      explication: "Elle transmet les ordres du cerveau au reste du corps."
    },
    {
      id: "5",
      type: "qcm",
      question: "Par quel moyen les neurones communiquent-ils entre eux ?",
      options: ["Par des sons", "Par de minuscules signaux électriques et chimiques", "Par la circulation du sang", "Par télépathie"],
      reponse: "Par de minuscules signaux électriques et chimiques",
      explication: "L'endroit où ils se touchent s'appelle une 'synapse'."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "Le cerveau consomme environ 20% de toute l'énergie du corps.",
      reponse: "Vrai",
      explication: "Il travaille même quand tu dors (rêves, régulation des organes)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle partie gère les fonctions automatiques (respiration, cœur) ?",
      options: ["Le cortex", "Le tronc cérébral", "L'hémisphère droit", "Le nez"],
      reponse: "Le tronc cérébral",
      explication: "Cela fonctionne sans que tu aies besoin d'y réfléchir."
    },
    {
      id: "8",
      type: "courte",
      question: "Comment s'appelle le fait de retirer sa main d'une plaque chaude sans réfléchir ?",
      reponse: "Réflexe",
      explication: "C'est un signal qui va à la moelle épinière et revient sans passer par le cerveau pour gagner du temps."
    },
    {
      id: "9",
      type: "qcm",
      question: "À quoi sert la 'matière grise' ?",
      options: ["À rien", "C'est là que se trouvent les corps des neurones et que l'on réfléchit", "C'est du gras pour protéger", "Cela sert à entendre"],
      reponse: "C'est là que se trouvent les corps des neurones et que l'on réfléchit",
      explication: "C'est la partie la plus externe du cerveau."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "On n'utilise que 10% de notre cerveau.",
      reponse: "Faux",
      explication: "C'est une légende. On utilise presque toutes les parties de notre cerveau, mais pas forcément toutes en même temps."
    }
  ]
};
