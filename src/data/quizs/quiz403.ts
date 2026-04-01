import { Quiz } from "@/types/quiz";

export const quiz403: Quiz = {
  id: "403",
  titre: "Informatique : La Programmation Web 🌐💻",
  description: "Testez votre connaissance des langages qui font fonctionner Internet.",
  theme: "Technologie",
  difficulte: "Intermédiaire",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Quel langage est utilisé pour définir le contenu et la structure d'une page web ?",
      options: ["CSS", "JavaScript", "HTML", "PHP"],
      reponse: "HTML",
      explication: "HTML (HyperText Markup Language) est le squelette de toutes les pages web."
    },
    {
      id: "2",
      type: "qcm",
      question: "Quel langage sert à gérer le style et la mise en page (couleurs, polices) ?",
      options: ["HTML", "CSS", "Python", "SQL"],
      reponse: "CSS",
      explication: "Cascading Style Sheets permet d'embellir le contenu HTML."
    },
    {
      id: "3",
      type: "qcm",
      question: "Lequel de ces langages permet d'ajouter de l'interactivité (boutons, animations) côté navigateur ?",
      options: ["Java", "JavaScript", "Ruby", "C++"],
      reponse: "JavaScript",
      explication: "C'est le seul langage de programmation qui s'exécute nativement dans le navigateur."
    },
    {
      id: "4",
      type: "qcm",
      question: "Que signifie l'acronyme HTML ?",
      options: ["HyperText Markup Language", "High Text Markdown Language", "Hyper Tool Multi Logic", "Home Tool Main Line"],
      reponse: "HyperText Markup Language",
      explication: "C'est le standard du W3C."
    },
    {
      id: "5",
      type: "qcm",
      question: "Quel symbole utilise-t-on en CSS pour désigner un 'Sélecteur d'Identifiant' ?",
      options: [". (le point)", "# (le dièse)", "* (l'astérisque)", "@ (l'arobase)"],
      reponse: "# (le dièse)",
      explication: "Exemple : #monBouton { color: red; }"
    },
    {
      id: "6",
      type: "qcm",
      question: "Que signifie l'acronyme PHP (initialement) ?",
      options: ["Personal Home Page", "Private HTML Processor", "Premium Hyper Plot", "Power Home Player"],
      reponse: "Personal Home Page",
      explication: "Maintenant, c'est un acronyme récursif : PHP: Hypertext Preprocessor."
    },
    {
      id: "7",
      type: "qcm",
      question: "Quelle bibliothèque JavaScript créée par Facebook est très populaire pour créer des interfaces ?",
      options: ["Angular", "React", "Vue", "jQuery"],
      reponse: "React",
      explication: "React est très utilisé par Netflix, Airbnb et Facebook elle-même."
    },
    {
      id: "8",
      type: "qcm",
      question: "Quel protocole est utilisé pour transférer les données web de manière sécurisée ?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      reponse: "HTTPS",
      explication: "Le 'S' signifie 'Secure' et indique que les données sont chiffrées."
    },
    {
      id: "9",
      type: "qcm",
      question: "Qu'est-ce qu'une 'API' en développement web ?",
      options: ["Une application mobile", "Une interface permettant à deux applications de communiquer", "Un type de navigateur", "Une zone de texte"],
      reponse: "Une interface permettant à deux applications de communiquer",
      explication: "Application Programming Interface."
    },
    {
      id: "10",
      type: "qcm",
      question: "Comment appelle-t-on le fait de rendre un site web consultable sur PC, tablette et mobile ?",
      options: ["Adaptabilité", "Responsive Design (Design réactif)", "Multi-view", "Auto-layout"],
      reponse: "Responsive Design (Design réactif)",
      explication: "C'est indispensable aujourd'hui vu la diversité des écrans."
    }
  ]
};
