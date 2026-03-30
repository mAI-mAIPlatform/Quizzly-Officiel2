/* eslint-disable @typescript-eslint/no-explicit-any */
// v1.1.0 - Correction question vide
"use client";

import { useState } from "react";

const OptionButton = ({ value, label, color, bgHover, hasAnswered, questionReponse, selectedResponse, onSelect }: any) => {
  const isGreen = color === "green";
  let stateClass = "glass";
  if (hasAnswered) {
    if (value === questionReponse) {
      stateClass = isGreen
        ? "bg-gradient-to-br from-green/30 via-emerald-500/20 to-cyan/10 border-green text-green-50 ring-2 ring-green/60 shadow-[0_0_28px_rgba(255,255,255,0.04)]"
        : "bg-gradient-to-br from-rose/30 via-red-500/20 to-orange-500/10 border-rose text-rose-50 ring-2 ring-rose/60 shadow-[0_0_28px_rgba(255,255,255,0.04)]";
    } else if (value === selectedResponse) {
      stateClass = "bg-gradient-to-br from-rose/30 via-red-500/20 to-orange-500/10 border-rose text-rose-50 ring-2 ring-rose/50 shadow-[0_0_28px_rgba(244,63,94,0.16)]";
    } else {
      stateClass = "opacity-50 grayscale";
    }
  } else {
    stateClass = `${bgHover} border-foreground/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.03)] ${isGreen ? "hover:border-green/50" : "hover:border-rose/50"}`;
  }

  return (
    <button
      disabled={hasAnswered}
      onClick={() => onSelect(value)}
      className={`p-10 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ${stateClass} ${!hasAnswered && 'hover:scale-[1.02] active:scale-95'}`}
    >
      <span className="text-4xl font-space font-bold tracking-widest uppercase">
        {label}
      </span>
    </button>
  );
};

export default function QuestionVraiFaux({ 
  question, 
  hasAnswered, 
  onValidate 
}: { 
  question: any; 
  hasAnswered: boolean; 
  onValidate: (correct: boolean) => void 
}) {
  const [selectedResponse, setSelectedResponse] = useState<boolean | null>(null);

  const [prevQuestionId, setPrevQuestionId] = useState(question.id);
  if (question.id !== prevQuestionId) {
    setPrevQuestionId(question.id);
    setSelectedResponse(null);
  }

  const handleSelect = (response: boolean) => {
    if (hasAnswered) return;
    setSelectedResponse(response);
    const actualReponse = question.bonne_reponse !== undefined 
      ? (typeof question.bonne_reponse === 'string' ? question.bonne_reponse === "Vrai" : question.bonne_reponse)
      : (question.reponse !== undefined ? question.reponse : question.answer);
    onValidate(response === actualReponse);
  };

  const questionReponse = question.bonne_reponse !== undefined 
    ? (typeof question.bonne_reponse === 'string' ? question.bonne_reponse === "Vrai" : question.bonne_reponse)
    : (question.reponse !== undefined ? question.reponse : question.answer);

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-8 duration-500">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="inline-block px-4 py-1 rounded-full bg-foreground/10 uppercase tracking-widest text-xs font-bold mb-6 text-primary">
          Vrai ou Faux ?
        </div>
        <h2 className="text-3xl md:text-4xl font-space font-bold leading-tight">
          &quot;{question.enonce || question.question}&quot;
        </h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mt-12">
        <OptionButton 
          value={true} label="Vrai" color="green" bgHover="hover:bg-green/10" 
          hasAnswered={hasAnswered} questionReponse={questionReponse} 
          selectedResponse={selectedResponse} onSelect={handleSelect} 
        />
        <OptionButton 
          value={false} label="Faux" color="rose" bgHover="hover:bg-rose/10" 
          hasAnswered={hasAnswered} questionReponse={questionReponse} 
          selectedResponse={selectedResponse} onSelect={handleSelect} 
        />
      </div>

      {hasAnswered && question.explication && (
        <div className="mt-12 p-6 glass border-primary/20 rounded-2xl animate-in slide-in-from-bottom-4 duration-500">
          <p className="text-sm font-medium opacity-90 leading-relaxed text-center italic">
            💡 {question.explication}
          </p>
        </div>
      )}
    </div>
  );
}

