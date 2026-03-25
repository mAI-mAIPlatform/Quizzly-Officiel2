"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import QuestionQCM from "./QuestionQCM";
import QuestionVraiFaux from "./QuestionVraiFaux";
import QuestionTrous from "./QuestionTrous";
import QuestionRelier from "./QuestionRelier";
import { useProgress } from "@/context/ProgressContext";
import confetti from "canvas-confetti";
import { useRef } from "react";

export type QuizTypeEnum = 'classic' | 'ranked' | 'survival' | 'duel' | 'blitz' | 'vrai_faux' | 'visuel';

export default function QuizEngine({ quiz, backUrl, matiereId, onComplete, isSurvival, quizType = 'classic' }: { quiz: { id: string; titre: string; questions: any[] /* eslint-disable-line @typescript-eslint/no-explicit-any */ }; backUrl: string; matiereId: string; onComplete?: (score: number) => void; isSurvival?: boolean; quizType?: QuizTypeEnum }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [finishStep, setFinishStep] = useState<'results' | 'flame' | 'quests'>('results');
  const { addXP, markQuizCompleted, isQuizCompleted, progress: userProgress, useStar: consumeStar, sendMessage, addHistoryEntry, completeDailyQuiz } = useProgress();
  const hasSavedHistory = useRef(false);

  const encouragementsCorrect = [
    "Excellent !", "Impérial !", "Bravo !", "Incroyable !", "Quel talent !", 
    "Tu gères !", "Parfait !", "Magnifique !", "Génie !", "Trop fort !"
  ];
  const encouragementsWrong = [
    "Oups...", "Pas loin !", "Dommage...", "Presque !", "Concentre-toi !",
    "BOOM ! Perdu...", "Aïe !", "Raté !", "Réessaie !", "Courage !"
  ];

  const [currentEncouragement, setCurrentEncouragement] = useState("");

  // État de la réponse en cours
  const [hasAnswered, setHasAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [hasLostStar, setHasLostStar] = useState(false);

  useEffect(() => {
    if (isFinished && onComplete) {
      onComplete(score);
    }
  }, [isFinished, onComplete, score]);

  const currentQuestion = quiz.questions[currentIndex];
  const progressBarWidth = ((currentIndex) / quiz.questions.length) * 100;

  const handleValidate = (correct: boolean) => {
    setHasAnswered(true);
    setIsCorrect(correct);
    if (correct) {
      setScore(s => s + 1);
      setCombo(c => c + 1);
      setCurrentEncouragement(encouragementsCorrect[Math.floor(Math.random() * encouragementsCorrect.length)]);
    } else {
      setCombo(0);
      setCurrentEncouragement(encouragementsWrong[Math.floor(Math.random() * encouragementsWrong.length)]);
      if (isSurvival) {
        // En mode survie, une erreur = fin immédiate après un petit délai pour voir la croix
        setTimeout(() => setIsFinished(true), 1500);
      }
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

      // Historique global (sauvegarde une seule fois)
      if (!hasSavedHistory.current) {
        let finalType = quizType;
        if (isSurvival) finalType = 'survival';
        if (matiereId === 'ranked') finalType = 'ranked';
        
        addHistoryEntry({
          id: quiz.id,
          type: finalType,
          score: score,
          maxScore: quiz.questions.length,
          title: quiz.titre
        });
        hasSavedHistory.current = true;
      }

      if (!isQuizCompleted(quiz.id) && isSuccess) {
        // Gain de base : bonnes réponses x 2
        const baseXP = score * 2;
        addXP(baseXP);
        markQuizCompleted(quiz.id, matiereId);
        
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#7c3aed', '#ec4899', '#06b6d4', '#4ade80']
        });
      }

      if (!isSuccess && !hasLostStar) {
        consumeStar();
        setHasLostStar(true);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFinished]);

  if (isFinished) {
    const successRate = (score / quiz.questions.length) * 100;
    const survivalBonus = isSurvival ? Math.floor(score * 10) : 0;
    const earnedXP = ((score * 2) + survivalBonus) * (userProgress.xpBoost || 1);

    if (onComplete) {
      onComplete(score);
    }
    
    let message = "Bien joué !";
    let statusImage = "/images/bien_joue.png";

    if (successRate === 100) {
      message = "Impérial !";
      statusImage = "/images/objectifs_atteints.png";
    } else if (successRate >= 80) {
      message = "Félicitations !";
      statusImage = "/images/felicitations.png";
    } else if (successRate < 50) {
      message = "Dommage...";
      statusImage = "/images/score_faible.png";
    }

    return (
      <div className="flex flex-col items-center justify-center h-full text-center animate-in zoom-in-95 duration-700 w-full pb-20">
        <div className="w-48 h-48 mb-6 relative">
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src={statusImage} alt={message} className="w-full h-full object-contain" />
        </div>
        <h2 className="text-4xl font-space font-black mb-4 tracking-tighter uppercase italic text-primary">{message}</h2>
        
        <div className="glass p-8 rounded-3xl w-full max-w-sm mb-12 flex flex-col items-center relative overflow-hidden ring-2 ring-primary/5 shadow-2xl">
           {userProgress.xpBoost > 1 && (
             <div className="absolute top-0 right-0 bg-cyan text-white text-[10px] font-black px-3 py-1 rounded-bl-xl z-20 uppercase tracking-widest">
               Booster x{userProgress.xpBoost} ✨
             </div>
           )}
          <div className="text-[10px] uppercase tracking-[0.3em] font-black opacity-40 mb-2">Points d&apos;Expérience</div>
          <div className="text-5xl font-space font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan mb-4 drop-shadow-md">
            +{earnedXP} XP
          </div>
          <div className="text-lg font-bold opacity-60 flex items-center gap-2">
            <span className="text-2xl">🎯</span> {score} / {quiz.questions.length} correctes
          </div>
        </div>

        <div className="w-40 h-40 mx-auto rounded-full border-8 border-primary/5 flex flex-col items-center justify-center mb-10 relative bg-white/30 backdrop-blur-sm">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle 
              cx="50" cy="50" r="46" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="8" 
              className="text-primary/10"
            />
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
          <span className="text-5xl font-black font-space text-primary tracking-tighter">{score}</span>
          <span className="text-[10px] uppercase tracking-widest opacity-40 font-black">sur {quiz.questions.length}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm px-6">
          <button 
            onClick={() => {
              const today = new Date().toISOString().split('T')[0];
              if (userProgress.lastDailyQuizDate !== today) {
                setFinishStep('flame');
                completeDailyQuiz();
              } else {
                setFinishStep('quests');
              }
            }}
            className="flex-1 px-8 py-5 bg-primary text-white font-black rounded-3xl hover:scale-105 transition-all font-space text-sm uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center justify-center italic"
          >
            Continuer 🚀
          </button>
          <button 
            onClick={() => {
              const tribeId = userProgress.tribes[0]?.id || 'social_feed';
              const modeName = isSurvival ? 'Mode Survie 🔥' : 'de défi';
              sendMessage(tribeId, `Vient de faire un score de ${score} en ${modeName} (${quiz.titre}) ! 🏆✨`);
              alert("Score partagé avec ta tribu ! 📣");
            }}
            className="flex-1 px-8 py-5 bg-cyan text-white font-black rounded-3xl hover:scale-105 transition-all font-space text-sm uppercase tracking-widest shadow-xl shadow-cyan/20 flex items-center justify-center italic"
          >
            Partager 📣
          </button>
        </div>
      </div>
    );
  }

  if (isFinished && finishStep === 'flame') {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-20 animate-in fade-in zoom-in duration-500">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-9xl mb-10 drop-shadow-[0_0_50px_rgba(249,115,22,0.8)]"
        >
          🔥
        </motion.div>
        <h2 className="text-5xl font-space font-black mb-4 tracking-tighter uppercase italic text-orange-500">Quiz Quotidien !</h2>
        <p className="text-xl font-bold opacity-70 mb-12">Ta série de {userProgress.streak} jours continue ! ✨</p>
        
        <button 
          onClick={() => setFinishStep('quests')}
          className="px-12 py-6 bg-orange-500 text-white font-black rounded-3xl hover:scale-110 transition-all font-space text-lg uppercase tracking-widest shadow-2xl shadow-orange-500/30 italic"
        >
          Voir mes Quêtes ➜
        </button>
      </div>
    );
  }

  if (isFinished && finishStep === 'quests') {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-10 animate-in fade-in slide-in-from-bottom-10 duration-500 w-full max-w-lg mx-auto">
        <h2 className="text-4xl font-space font-black mb-8 tracking-tighter uppercase italic text-primary">Progression des Quêtes</h2>
        
        <div className="w-full space-y-6 mb-12">
          {userProgress.quests.map((quest, i) => (
            <motion.div 
              key={quest.id} 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="glass p-6 rounded-[2rem] border-primary/10 flex flex-col gap-3 relative overflow-hidden"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-black text-sm uppercase tracking-tight">{quest.title}</span>
                <span className="text-xs font-black text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {quest.current} / {quest.target}
                </span>
              </div>
              <div className="w-full bg-primary/5 h-4 rounded-full overflow-hidden border border-primary/10">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(100, (quest.current / quest.target) * 100)}%` }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + i * 0.2 }}
                  className={`h-full rounded-full ${quest.isCompleted ? 'bg-green' : 'bg-gradient-to-r from-primary to-cyan shadow-[0_0_10px_rgba(124,58,237,0.3)]'}`}
                />
              </div>
              {quest.isCompleted && (
                <div className="absolute top-2 right-2 text-green text-xl rotate-12">✅</div>
              )}
            </motion.div>
          ))}
        </div>

        <Link 
          href={backUrl}
          className="px-12 py-6 bg-primary text-white font-black rounded-3xl hover:scale-110 transition-all font-space text-lg uppercase tracking-widest shadow-2xl shadow-primary/30 italic"
        >
          Terminer 🚀
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
            key={currentQuestion.id}
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
        {currentQuestion.type === "vrai_faux" && (
          <QuestionVraiFaux 
            key={currentQuestion.id}
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
        {currentQuestion.type === "trous" && (
          <QuestionTrous 
            key={currentQuestion.id}
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
        {currentQuestion.type === "relier" && (
          <QuestionRelier 
            key={currentQuestion.id}
            question={currentQuestion} 
            hasAnswered={hasAnswered} 
            onValidate={handleValidate} 
          />
        )}
      </div>

      {/* Footer Actions */}
      <AnimatePresence mode="wait">
        {hasAnswered && (
          <motion.div 
            animate={{ 
              y: 0, 
              opacity: 1,
              x: isCorrect ? 0 : [0, -10, 10, -10, 10, 0] 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              x: isCorrect ? {} : { duration: 0.4 } 
            }}
            exit={{ y: 100, opacity: 0 }}
            className={`mt-8 p-8 rounded-[2rem] shadow-2xl backdrop-blur-3xl border-2 transition-colors duration-500 ${isCorrect ? 'bg-green/20 border-green/40 shadow-green/20' : 'bg-rose/20 border-rose/40 shadow-rose/20'}`}
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
              <div className="flex items-center gap-6">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-xl ${isCorrect ? 'bg-green text-green-950' : 'bg-rose text-rose-950'}`}
                >
                  {isCorrect ? '✨' : '💥'}
                </motion.div>
                <div className="text-center sm:text-left">
                  <h3 className={`font-space font-black text-2xl tracking-tighter uppercase italic ${isCorrect ? 'text-green-500' : 'text-rose-500'}`}>
                    {currentEncouragement || (isCorrect ? 'Excellent !' : 'BOOM ! Perdu...')}
                  </h3>
                  <p className="text-xs font-bold opacity-60 uppercase tracking-widest mt-1">
                    {isCorrect ? `Combo x${combo} ! 🔥` : (isSurvival ? 'Ta survie s\'arrête ici.' : 'Concentration maximale !')}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={handleNext}
                className={`group px-10 py-4 rounded-2xl font-black font-space text-lg transition-all shadow-xl flex items-center gap-3 ${isCorrect ? 'bg-green text-emerald-950 shadow-green/20 hover:scale-105 active:scale-95' : 'bg-rose text-rose-950 shadow-rose/20 hover:scale-105 active:scale-95'}`}
              >
                {isCorrect ? 'Continuer' : (currentIndex < quiz.questions.length - 1 ? 'Suivant' : 'Voir mon score')}
                <span className="group-hover:translate-x-1 transition-transform">➜</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
