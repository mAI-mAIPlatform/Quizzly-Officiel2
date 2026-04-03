import { Quiz } from "@/types/quiz";

export const quiz750: Quiz = {
  id: "750",
  titre: "Español : Días y Meses 📅",
  description: "Aprende los días de la semana y los meses del año.",
  theme: "Langues",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "¿Qué día es 'Lundi'?",
      options: ["Martes", "Lunes", "Sábado", "Domingo"],
      reponse: "Lunes",
      explication: "El primer día de la semana laboral."
    },
    {
      id: "2",
      type: "qcm",
      question: "¿Cómo se dice 'Samedi'?",
      options: ["Viernes", "Sábado", "Domingo", "Jueves"],
      reponse: "Sábado",
      explication: "El sexto día."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "'Viernes' significa 'Vendredi'.",
      reponse: "Vrai",
      explication: "Viernes viene de Venus."
    },
    {
      id: "4",
      type: "courte",
      question: "¿Cuál es el primer mes del año?",
      reponse: "enero",
      explication: "Enero (Janvier)."
    },
    {
      id: "5",
      type: "qcm",
      question: "¿Cómo se dice 'Mai'?",
      options: ["Marzo", "Abril", "Mayo", "Junio"],
      reponse: "Mayo",
      explication: "Mayo."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "'Diciembre' es le mois de Noël.",
      reponse: "Vrai",
      explication: "Diciembre (Décembre)."
    },
    {
      id: "7",
      type: "qcm",
      question: "¿Qué mes va después de Agosto?",
      options: ["Julio", "Septiembre", "Octubre", "Noviembre"],
      reponse: "Septiembre",
      explication: "Septiembre (Septembre)."
    },
    {
      id: "8",
      type: "courte",
      question: "¿Cómo se dice 'Dimanche'?",
      reponse: "domingo",
      explication: "El último día de la semana."
    },
    {
      id: "9",
      type: "qcm",
      question: "¿Qué día va entre Lunes y Miércoles?",
      options: ["Martes", "Jueves", "Viernes", "Sábado"],
      reponse: "Martes",
      explication: "Martes (Mardi)."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "'Julio' significa 'Juin'.",
      reponse: "Faux",
      explication: "Julio significa Juillet. Juin es Junio."
    }
  ]
};
