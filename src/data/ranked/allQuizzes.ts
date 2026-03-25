/* eslint-disable @typescript-eslint/no-explicit-any */
import { ranked6emeExtendedQuizzes } from "./6eme/extended";
import { ranked6emeExtended2Quizzes } from "./6eme/extended2";
import { ranked6emeExtended3Quizzes } from "./6eme/extended3";

import { ranked5emeExtendedQuizzes } from "./5eme/extended";
import { ranked5emeExtended2Quizzes } from "./5eme/extended2";
import { ranked5emeExtended3Quizzes } from "./5eme/extended3";

import { ranked4emeExtendedQuizzes } from "./4eme/extended";
import { ranked4emeExtended2Quizzes } from "./4eme/extended2";
import { ranked4emeExtended3Quizzes } from "./4eme/extended3";

import { ranked3emeExtendedQuizzes } from "./3eme/extended";
import { ranked3emeExtended2Quizzes } from "./3eme/extended2";
import { ranked3emeExtended3Quizzes } from "./3eme/extended3";

import { rankedSecondeExtendedQuizzes as ranked2ndeExt1 } from "./2nde/extended";
import { ranked2ndeExtended2Quizzes } from "./2nde/extended2";
import { ranked2ndeExtended3Quizzes } from "./2nde/extended3";

import { rankedPremiereExtendedQuizzes as ranked1ereExt1 } from "./1ere/extended";
import { ranked1ereExtended2Quizzes } from "./1ere/extended2";
import { ranked1ereExtended3Quizzes } from "./1ere/extended3";

import { rankedTerminaleExtendedQuizzes as rankedTermExt1 } from "./terminale/extended";
import { rankedTerminaleExtended2Quizzes } from "./terminale/extended2";
import { rankedTerminaleExtended3Quizzes } from "./terminale/extended3";

const allQuizzes: Record<string, any[]> = {
  "6eme": [...ranked6emeExtendedQuizzes, ...ranked6emeExtended2Quizzes, ...ranked6emeExtended3Quizzes],
  "5eme": [...ranked5emeExtendedQuizzes, ...ranked5emeExtended2Quizzes, ...ranked5emeExtended3Quizzes],
  "4eme": [...ranked4emeExtendedQuizzes, ...ranked4emeExtended2Quizzes, ...ranked4emeExtended3Quizzes],
  "3eme": [...ranked3emeExtendedQuizzes, ...ranked3emeExtended2Quizzes, ...ranked3emeExtended3Quizzes],
  "seconde": [...ranked2ndeExt1, ...ranked2ndeExtended2Quizzes, ...ranked2ndeExtended3Quizzes],
  "premiere": [...ranked1ereExt1, ...ranked1ereExtended2Quizzes, ...ranked1ereExtended3Quizzes],
  "terminale": [...rankedTermExt1, ...rankedTerminaleExtended2Quizzes, ...rankedTerminaleExtended3Quizzes],
};

export const getRankedQuizData = (grade: string, id: string) => {
  const gradeKey = grade.toLowerCase();
  const quizzes = allQuizzes[gradeKey] || [];
  
  // The ID is the 1-based index (e.g., "1", "41", "60")
  const index = parseInt(id) - 1;
  return quizzes[index] || null;
};
