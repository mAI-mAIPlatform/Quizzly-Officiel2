import { Quiz } from "@/types/quiz";

export const quiz748: Quiz = {
  id: "748",
  titre: "Español : Verbo Ser y Estar 🇪🇸",
  description: "Diferencia los dos verbos 'être' en español.",
  theme: "Langues",
  difficulte: "Moyen",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "Yo ... español.",
      options: ["soy", "estoy", "eres", "estás"],
      reponse: "soy",
      explication: "Se usa 'ser' para la nacionalidad (permanente)."
    },
    {
      id: "2",
      type: "qcm",
      question: "Yo ... cansado.",
      options: ["soy", "estoy", "eres", "estás"],
      reponse: "estoy",
      explication: "Se usa 'estar' para estados temporales."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "'Tú eres' es la conjugación de Ser.",
      reponse: "Vrai",
      explication: "Yo soy, tú eres, él es..."
    },
    {
      id: "4",
      type: "courte",
      question: "Conjugación de 'Él' para el verbo Estar.",
      reponse: "está",
      explication: "Él está feliz."
    },
    {
      id: "5",
      type: "qcm",
      question: "Nosotros ... en clase.",
      options: ["somos", "estamos", "sois", "estáis"],
      reponse: "estamos",
      explication: "Situación en el espacio : Estar."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "'Sois' es la 2ª persona del plural de Ser.",
      reponse: "Vrai",
      explication: "Vosotros sois (utilizado en España)."
    },
    {
      id: "7",
      type: "qcm",
      question: "Madrid ... la capital de España.",
      options: ["es", "está"],
      reponse: "es",
      explication: "Definición / característica propia : Ser."
    },
    {
      id: "8",
      type: "courte",
      question: "¿Cómo se dice 'Ils sont' (Ser)?",
      reponse: "son",
      explication: "Ellos son."
    },
    {
      id: "9",
      type: "qcm",
      question: "La sopa ... caliente.",
      options: ["es", "está"],
      reponse: "está",
      explication: "Estado temporal : Estar."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "'Ellos están' es correcto para el lugar.",
      reponse: "Vrai",
      explication: "Ellos están en Madrid."
    }
  ]
};
