"use client";

import { useState, useEffect } from "react";

export default function QuestionQCM({ 
  question, 
  hasAnswered, 
  onValidate 
}: { 
  question: any; 
  hasAnswered: boolean; 
  onValidate: (correct: boolean) => void 
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Reset quand on change de question
  useEffect(() => {
    setSelectedIndex(null);
  }, [question.id]);

  const handleSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedIndex(index);
    onValidate(index === question.correctIndex);
  };

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-8 duration-500">
      <h2 className="text-2xl md:text-3xl font-space font-bold mb-8 text-center mt-4">
        {question.enonce}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
        {question.options.map((option: string, index: number) => {
          let stateClass = "glass hover:bg-white/5 border-primary/20";
          if (hasAnswered) {
            if (index === question.correctIndex) {
              stateClass = "bg-green/20 border-green text-green-100 ring-2 ring-green/50";
            } else if (index === selectedIndex) {
              stateClass = "bg-rose/20 border-rose text-rose-100";
            } else {
              stateClass = "opacity-50 grayscale";
            }
          } else if (selectedIndex === index) {
            stateClass = "bg-primary/20 border-primary ring-2 ring-primary/50";
          }

          return (
            <button
              key={index}
              disabled={hasAnswered}
              onClick={() => handleSelect(index)}
              className={`p-6 rounded-2xl text-left text-lg font-medium transition-all duration-300 relative overflow-hidden ${stateClass} ${!hasAnswered && 'hover:scale-[1.02] active:scale-95'}`}
            >
              <div className="flex items-center gap-4 relative z-10">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${hasAnswered && index === question.correctIndex ? 'bg-green text-green-950' : 'bg-primary/20 text-primary'}`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
