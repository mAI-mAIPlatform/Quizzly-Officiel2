import { Quiz } from "@/types/quiz";

export const quiz741: Quiz = {
  id: "741",
  titre: "Anglais : Greetings & Introductions 🤝",
  description: "Learn how to say hello and introduce yourself in English.",
  theme: "Langues",
  difficulte: "Facile",
  questions: [
    {
      id: "1",
      type: "qcm",
      question: "How do you say 'Bonjour' in the morning?",
      options: ["Good afternoon", "Good night", "Good morning", "Goodbye"],
      reponse: "Good morning",
      explication: "Used from sunrise until noon."
    },
    {
      id: "2",
      type: "qcm",
      question: "What is the standard answer to 'How are you?'",
      options: ["I am fine, thank you", "I am a boy", "Yes, please", "No, thanks"],
      reponse: "I am fine, thank you",
      explication: "A polite way to say you are doing well."
    },
    {
      id: "3",
      type: "vrai_faux",
      question: "'Nice to meet you' means 'Ravi de vous rencontrer'.",
      reponse: "Vrai",
      explication: "Commonly said when meeting someone for the first time."
    },
    {
      id: "4",
      type: "courte",
      question: "How do you say 'Comment t'appelles-tu ?' in English?",
      reponse: "What is your name?",
      explication: "Often shortened to 'What's your name?'."
    },
    {
      id: "5",
      type: "qcm",
      question: "How do you say 'Au revoir'?",
      options: ["Hello", "Please", "Goodbye", "Sorry"],
      reponse: "Goodbye",
      explication: "Often shortened to just 'Bye'."
    },
    {
      id: "6",
      type: "vrai_faux",
      question: "'Hi' is more formal than 'Hello'.",
      reponse: "Faux",
      explication: "'Hi' is casual/informal."
    },
    {
      id: "7",
      type: "qcm",
      question: "Where are you ...?",
      options: ["from", "to", "at", "in"],
      reponse: "from",
      explication: "Asking about someone's origin."
    },
    {
      id: "8",
      type: "courte",
      question: "How do you say 'S'il vous plaît'?",
      reponse: "Please",
      explication: "An essential word for politeness."
    },
    {
      id: "9",
      type: "qcm",
      question: "What time is it ...?",
      options: ["please", "now", "now please", "it"],
      reponse: "now",
      explication: "Asking for the current time."
    },
    {
      id: "10",
      type: "vrai_faux",
      question: "'Good evening' is used when leaving a party at night.",
      reponse: "Faux",
      explication: "'Good evening' is a greeting. 'Good night' is used when leaving or going to sleep."
    }
  ]
};
