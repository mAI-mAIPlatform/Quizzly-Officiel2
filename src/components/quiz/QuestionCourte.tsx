/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

export default function QuestionCourte({ 
  question, 
  hasAnswered, 
  onValidate 
}: { 
  question: any; 
  hasAnswered: boolean; 
  onValidate: (correct: boolean) => void 
}) {
  const [inputValue, setInputValue] = useState("");

  const [prevQuestionId, setPrevQuestionId] = useState(question.id);
  if (question.id !== prevQuestionId) {
    setPrevQuestionId(question.id);
    setInputValue("");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasAnswered || !inputValue.trim()) return;

    // Normaliser la réponse (enlever espaces, minuscules)
    const normalizedInput = inputValue.trim().toLowerCase();
    
    // Vérifier si la réponse correspond à l'une des réponses attendues
    const attendues = question.reponsesAttendues || [question.answer];
    const isCorrect = attendues.some(
      (ans: string) => ans && ans.toLowerCase() === normalizedInput
    );

    onValidate(isCorrect);
  };

  return (
    <div className="flex flex-col h-full items-center justify-center animate-in slide-in-from-right-8 duration-500">
      <div className="glass p-10 rounded-3xl w-full max-w-2xl border-2 border-primary/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-cyan to-primary opacity-30" />
        
        <div className="inline-block px-4 py-1 rounded-full bg-foreground/10 uppercase tracking-widest text-[10px] font-black mb-6 text-primary border border-primary/10">
          Réponse courte
        </div>
        
        <h2 className="text-2xl md:text-3xl font-space font-black mb-10 leading-tight text-center italic tracking-tighter">
          {question.question || question.enonce}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 w-full">
          <input
            type="text"
            disabled={hasAnswered}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ta réponse ici..."
            className={`w-full max-w-md p-5 bg-background/40 border-b-4 border-primary/20 focus:border-primary outline-none text-primary font-black transition-all text-center text-2xl rounded-t-2xl shadow-inner ${
              hasAnswered 
                ? (question.reponsesAttendues || [question.answer]).some((ans:string) => ans && ans.toLowerCase() === inputValue.trim().toLowerCase())
                  ? 'border-green text-green bg-gradient-to-b from-green/10 to-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                  : 'border-rose text-rose bg-gradient-to-b from-rose/10 to-red-500/5 shadow-[0_0_20px_rgba(244,63,94,0.1)]'
                : 'hover:bg-background/60 focus:bg-background/80'
            }`}
            autoFocus
          />

          {!hasAnswered && (
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="px-14 py-5 bg-primary text-primary-foreground font-black rounded-3xl hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 transition-all font-space uppercase tracking-[0.15em] italic shadow-2xl shadow-primary/30 text-sm"
            >
              Vérifier 🚀
            </button>
          )}

          {hasAnswered && !(question.reponsesAttendues || [question.answer]).some((ans:string) => ans && ans.toLowerCase() === inputValue.trim().toLowerCase()) && (
            <div className="w-full text-lg font-sans bg-gradient-to-br from-rose/20 via-red-500/10 to-orange-500/5 text-rose-100 border border-rose/20 p-8 rounded-[2rem] animate-in zoom-in-95 shadow-xl">
              <div className="text-[10px] uppercase tracking-[0.3em] font-black opacity-50 mb-3 text-rose-400">La bonne réponse était :</div>
              <div className="text-3xl text-rose font-black font-space italic drop-shadow-sm">
                {(question.reponsesAttendues || [question.answer])[0]}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
