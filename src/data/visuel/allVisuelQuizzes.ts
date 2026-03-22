import { quiz1 } from "./quiz1";
import { quiz2 } from "./quiz2";
import { quiz3 } from "./quiz3";
import { quiz4 } from "./quiz4";
import { quiz5 } from "./quiz5";
import { quiz6 } from "./quiz6";
import { quiz7 } from "./quiz7";
import { quiz8 } from "./quiz8";
import { quiz9 } from "./quiz9";
import { quiz10 } from "./quiz10";

export const allVisuelQuizzes = [
  quiz1, quiz2, quiz3, quiz4, quiz5,
  quiz6, quiz7, quiz8, quiz9, quiz10
];

export const getVisuelQuizData = (id: string) => {
  return allVisuelQuizzes.find(q => q.id === id) || null;
};
