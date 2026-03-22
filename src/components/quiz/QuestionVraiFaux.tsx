/* eslint-disable @typescript-eslint/no-explicit-any */
// v1.1.0 - Correction question vide
"use client";

import { useState } from "react";

const OptionButton = ({ value, label, color, bgHover, hasAnswered, questionReponse, selectedResponse, onSelect }: any) => {
  let stateClass = "glass";
  if (hasAnswered) {
    if (value === questionReponse) {
      stateClass = `bg-${color}/20 border-${color} text-${color}-100 ring-2 ring-${color}/50`;
    } else if (value === selectedResponse) {
      stateClass = "bg-rose/20 border-rose text-rose-100";
    } else {
      stateClass = "opacity-50 grayscale";
    }
  } else {
    stateClass = `${bgHover} border-foreground/10 hover:border-${color}/50`;
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
    const actualReponse = question.reponse !== undefined ? question.reponse : question.answer;
    onValidate(response === actualReponse);
  };

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
          hasAnswered={hasAnswered} questionReponse={question.reponse !== undefined ? question.reponse : question.answer} 
          selectedResponse={selectedResponse} onSelect={handleSelect} 
        />
        <OptionButton 
          value={false} label="Faux" color="rose" bgHover="hover:bg-rose/10" 
          hasAnswered={hasAnswered} questionReponse={question.reponse !== undefined ? question.reponse : question.answer} 
          selectedResponse={selectedResponse} onSelect={handleSelect} 
        />
      </div>
    </div>
  );
}

