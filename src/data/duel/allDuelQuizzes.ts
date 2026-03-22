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
import { quiz11 } from "./quiz11";
import { quiz12 } from "./quiz12";
import { quiz13 } from "./quiz13";
import { quiz14 } from "./quiz14";
import { quiz15 } from "./quiz15";
import { quiz16 } from "./quiz16";
import { quiz17 } from "./quiz17";
import { quiz18 } from "./quiz18";
import { quiz19 } from "./quiz19";
import { quiz20 } from "./quiz20";

export const allDuelQuizzes = [
  quiz1, quiz2, quiz3, quiz4, quiz5,
  quiz6, quiz7, quiz8, quiz9, quiz10,
  quiz11, quiz12, quiz13, quiz14, quiz15,
  quiz16, quiz17, quiz18, quiz19, quiz20
];

export const getDuelQuizData = (id: string) => {
  return allDuelQuizzes.find(q => q.id === `duel_${id}`) || null;
};
