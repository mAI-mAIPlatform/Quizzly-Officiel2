export interface Question {
  id: string;
  type: "qcm" | "vrai_faux" | "trous" | "relier" | "courte";
  question: string;
  options?: string[];
  reponse: string;
  explication?: string;
}

export interface Quiz {
  id: string;
  titre: string;
  description: string;
  theme: string;
  difficulte?: string;
  questions: Question[];
}
