/* eslint-disable @typescript-eslint/no-explicit-any */
// v1.1.0 - Gère la question vide en utilisant question.question si question.enonce n'est pas fourni.
"use client";

import { useState } from "react";
import Image from "next/image";

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

  const handleSelect = (index: number) => {
    if (hasAnswered) return;
    setSelectedIndex(index);
    const actualCorrectIndex = question.correctIndex ?? 
                               question.options.findIndex((opt: string) => opt === (question.bonne_reponse || question.answer));
    onValidate(index === actualCorrectIndex);
  };

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-8 duration-500">
      {question.image && (
        <div className="w-full max-w-md mx-auto mb-6 rounded-2xl overflow-hidden glass border-primary/20 shadow-xl shadow-primary/5 relative aspect-video">
          <Image 
            src={question.image} 
            alt="Quiz Visuel" 
            fill
            className="object-cover"
          />
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-space font-bold mb-8 text-center mt-4">
        {question.enonce || question.question}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
        {question.options.map((option: string, index: number) => {
          const actualCorrectIndex = question.correctIndex ?? 
                                     question.options.findIndex((opt: string) => opt === (question.bonne_reponse || question.answer));
          let stateClass = "glass hover:bg-white/5 border-primary/20";
          
          if (hasAnswered) {
            if (index === actualCorrectIndex) {
              stateClass = "bg-gradient-to-br from-green/30 via-emerald-500/20 to-cyan/10 border-green text-green-50 ring-2 ring-green/60 shadow-[0_0_30px_rgba(16,185,129,0.18)]";
            } else if (index === selectedIndex) {
              stateClass = "bg-gradient-to-br from-rose/30 via-red-500/20 to-orange-500/10 border-rose text-rose-50 ring-2 ring-rose/40 shadow-[0_0_30px_rgba(244,63,94,0.16)]";
            } else {
              stateClass = "opacity-50 grayscale";
            }
          } else if (selectedIndex === index) {
            stateClass = "bg-primary/20 border-primary ring-2 ring-primary/50 shadow-[0_0_20px_rgba(99,102,241,0.18)]";
          }

          return (
            <button
              key={index}
              disabled={hasAnswered}
              onClick={() => handleSelect(index)}
              className={`p-6 rounded-2xl text-left text-lg font-medium transition-all duration-300 relative overflow-hidden ${stateClass} ${!hasAnswered && 'hover:scale-[1.02] active:scale-95'}`}
            >
              <div className="flex items-center gap-4 relative z-10">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${hasAnswered && index === actualCorrectIndex ? 'bg-green text-green-950' : 'bg-primary/20 text-primary'}`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {hasAnswered && question.explication && (
        <div className="mt-8 p-6 glass border-primary/20 rounded-2xl animate-in slide-in-from-bottom-4 duration-500">
          <p className="text-sm font-medium opacity-90 leading-relaxed text-center italic">
            💡 {question.explication}
          </p>
        </div>
      )}
    </div>
  );
}
