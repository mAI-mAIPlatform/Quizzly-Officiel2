"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import QuestionQCM from "./QuestionQCM";
import QuestionVraiFaux from "./QuestionVraiFaux";
import QuestionTrous from "./QuestionTrous";
import QuestionRelier from "./QuestionRelier";
import { useProgress } from "@/context/ProgressContext";
import confetti from "canvas-confetti";

export default function QuizEngine({ quiz, backUrl, matiereId }: { quiz: { id: string; titre: string; questions: any[] }; backUrl: string; matiereId: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { addXP, markQuizCompleted, isQuizCompleted, progress: userProgress, useNeurone } = useProgress();

  // État de la réponse en cours
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasLostNeurone, setHasLostNeurone] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const progressBarWidth = ((currentIndex) / quiz.questions.length) * 100;

  const handleValidate = (correct: boolean) => {
    setHasAnswered(true);
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setHasAnswered(false);
    setIsCorrect(null);
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(c => c + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Distribution des récompenses au moment où le quiz se termine
  useEffect(() => {
    if (isFinished) {
      const isSuccess = score >= quiz.questions.length / 2;

      if (!isQuizCompleted(quiz.id) && isSuccess) {
        const baseXP = score * 10;
        const finalXP = userProgress.streak >= 3 ? Math.floor(baseXP * 1.5) : baseXP;
        addXP(finalXP);
        markQuizCompleted(quiz.id, matiereId);
        
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#7c3aed', '#ec4899', '#06b6d4', '#4ade80']
        });
      }

      if (!isSuccess && !hasLostNeurone) {
        useNeurone();
        setHasLostNeurone(true);
      }
    }
  }, [isFinished]);

  if (isFinished) {
    const successRate = (score / quiz.questions.length) * 100;
    const finalXP = userProgress.streak >= 3 ? Math.floor(score * 10 * 1.5) : score * 10;
    
    let message = "Bien joué !";
    let emoji = "🎉";
    if (successRate === 100) {
      message = "Parfait ! Impérial !";
      emoji = "🤩";
    } else if (successRate >= 80) {
      message = "Excellent travail !";
      emoji = "🥳";
    } else if (successRate < 50) {
      message = "Il faut encore s'entraîner !";
      emoji = "🤔";
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 duration-700 w-full">
        <h2 className="text-4xl font-space font-bold mb-4">{message}</h2>
        <div className="text-6xl mb-8">{emoji}</div>
        
        <div className="glass p-8 rounded-3xl w-full max-w-sm mb-12 flex flex-col items-center relative overflow-hidden">
           {userProgress.streak >= 3 && (
             <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
               Bonus Streak x1.5 🔥
             </div>
           )}
          <div className="text-sm uppercase tracking-widest font-bold opacity-60 mb-2">XP Gagné</div>
          <div className="text-5xl font-space font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue mb-4">
            +{finalXP}
          </div>
          <div className="text-xl font-medium opacity-80">
            {score} / {quiz.questions.length} correctes
          </div>
        </div>
        
        <div className="w-40 h-40 mx-auto rounded-full border-8 border-primary/20 flex flex-col items-center justify-center mb-8 relative">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="46" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="8" 
              className="text-primary transition-all duration-1000 ease-out"
              strokeDasharray="289"
              strokeDashoffset={289 - (289 * successRate) / 100}
              strokeLinecap="round"
            />
          </svg>
          <span className="text-5xl font-bold font-space text-primary">{score}</span>
          <span className="text-sm uppercase tracking-widest opacity-60 mt-1">sur {quiz.questions.length}</span>
        </div>

        <Link 
          href={backUrl}
          className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:brightness-110 transition-all font-space text-lg"
        >
          Terminer et Continuer
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full relative">
      {/* Barre de progression */}
      <div className="w-full bg-foreground/10 h-3 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>

      <div className="flex-1 flex flex-col">
        {currentQuestion.type === "qcm" && (
          <QuestionQCM 
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
        {currentQuestion.type === "vrai_faux" && (
          <QuestionVraiFaux 
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
        {currentQuestion.type === "trous" && (
          <QuestionTrous 
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
        {currentQuestion.type === "relier" && (
          <QuestionRelier 
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
      </div>

      {/* Footer Actions */}
      {hasAnswered && (
        <div className={`mt-8 p-6 rounded-3xl animate-in slide-in-from-bottom-5 duration-300 ${isCorrect ? 'bg-green/10 border-2 border-green/30' : 'bg-rose/10 border-2 border-rose/30'}`}>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${isCorrect ? 'bg-green text-green-950' : 'bg-rose text-rose-950'}`}>
                {isCorrect ? '✓' : '×'}
              </div>
              <div>
                <h3 className={`font-space font-bold text-xl ${isCorrect ? 'text-green-400' : 'text-rose-400'}`}>
                  {isCorrect ? 'Excellent !' : 'Oups, fausse route !'}
                </h3>
              </div>
            </div>
            
            <button 
              onClick={handleNext}
              className={`px-8 py-3 rounded-2xl font-bold font-space text-lg transition-transform hover:scale-105 ${isCorrect ? 'bg-green text-emerald-950' : 'bg-rose text-rose-950'}`}
            >
              Continuer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
