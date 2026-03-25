"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useProgress } from "@/context/ProgressContext";
import QuizEngine from "@/components/quiz/QuizEngine";
import { getDuelQuizData } from "@/data/duel/allDuelQuizzes";
import { motion } from "framer-motion";

export default function DuelPage() {
  const { progress } = useProgress();
  const [socket, setSocket] = useState<Socket | null>(null);
  
  const [status, setStatus] = useState<"idle" | "waiting" | "playing" | "game_over">("idle");
  const [opponent, setOpponent] = useState<any>(null);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [quizData, setQuizData] = useState<any>(null);
  
  const [myScore, setMyScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [winner, setWinner] = useState<any>(null);

  useEffect(() => {
    // Connect to WebSocket server running on port 3001
    const newSocket = io("http://localhost:3001");
    const timeout = setTimeout(() => setSocket(newSocket), 0);

    newSocket.on("queue_status", () => {
      setStatus("waiting");
    });

    newSocket.on("match_found", (data) => {
      const { roomId, quizId, opponent } = data;
      setOpponent(opponent);
      setRoomId(roomId);
      setQuizData(getDuelQuizData(quizId.toString()));
      setStatus("playing");
      setMyScore(0);
      setOpponentScore(0);
    });

    newSocket.on("opponent_score", (newScore) => {
      setOpponentScore(newScore);
    });

    newSocket.on("game_over", (data) => {
      setWinner(data);
      setStatus("game_over");
    });

    newSocket.on("opponent_disconnected", () => {
      setWinner({ winnerId: newSocket.id, winnerPseudo: progress.pseudo, reason: "Abandon" });
      setStatus("game_over");
    });

    return () => {
      newSocket.off("queue_status");
      newSocket.off("match_found");
      newSocket.off("opponent_score");
      newSocket.off("game_over");
      newSocket.off("opponent_disconnected");
      newSocket.close();
      clearTimeout(timeout);
    };
  }, [progress.pseudo]);

  const joinQueue = () => {
    if (socket) {
      socket.emit("join_queue", {
        pseudo: progress.pseudo,
        avatar: progress.avatar,
        level: progress.level
      });
      setStatus("waiting");
    }
  };

  const leaveQueue = () => {
    if (socket) {
      socket.emit("leave_queue");
      setStatus("idle");
    }
  };

  const currentScoreUpdate = (score: number) => {
    setMyScore(score);
    if (socket && roomId) {
      socket.emit("score_update", { roomId, newScore: score });
    }
  };

  if (status === "idle") {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center animate-in fade-in zoom-in duration-500">
        <div className="text-8xl mb-6">🤝</div>
        <h1 className="text-6xl font-space font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-violet to-primary drop-shadow-lg mb-4">
          MODE DUEL
        </h1>
        <p className="opacity-70 font-bold mb-10 max-w-md mx-auto">
          Défie un autre joueur en temps réel ! Le premier à atteindre 10 points remporte la victoire. Montre de quoi tu es capable.
        </p>
        <button 
          onClick={joinQueue}
          className="bg-primary text-white font-black px-12 py-5 rounded-2xl text-2xl shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
        >
          RECHERCHER UN ADVERSAIRE ⚔️
        </button>
      </div>
    );
  }

  if (status === "waiting") {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <div className="glass p-16 rounded-[3xl] flex flex-col items-center gap-8 border-primary/20 bg-primary/5">
          <div className="w-24 h-24 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <div>
            <h2 className="text-3xl font-space font-black italic tracking-tighter uppercase text-primary">Recherche en cours...</h2>
            <p className="opacity-50 mt-2 font-bold uppercase tracking-widest text-xs">Préparation de l'arène</p>
          </div>
          <button 
            onClick={leaveQueue}
            className="text-white/50 hover:text-white mt-10 text-sm font-bold uppercase tracking-widest"
          >
            Annuler
          </button>
        </div>
      </div>
    );
  }

  if (status === "playing" && quizData) {
    return (
      <div className="max-w-5xl mx-auto py-6 px-4 space-y-6">
        {/* En-tête de Duel */}
        <div className="flex justify-between items-center glass p-6 rounded-[2rem] border-primary/20 shadow-xl relative overflow-hidden bg-gradient-to-r from-blue-500/10 via-transparent to-rose-500/10">
          {/* Joueur 1 (Toi) */}
          <div className="flex items-center gap-4 relative z-10 w-1/3">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-3xl border-2 border-blue-500">
              {progress.avatar}
            </div>
            <div>
              <div className="font-space font-black text-xl text-blue-500 truncate">{progress.pseudo}</div>
              <div className="text-[10px] font-black uppercase opacity-60">Toi</div>
            </div>
          </div>

          {/* Scores centraux */}
          <div className="w-1/3 flex flex-col items-center justify-center relative z-10">
             <div className="flex items-center gap-4 text-4xl font-space font-black">
                <span className="text-blue-500">{myScore}</span>
                <span className="text-xl text-foreground/30">VS</span>
                <span className="text-rose-500">{opponentScore}</span>
             </div>
             <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mt-1">Premier à 10</div>
          </div>

          {/* Joueur 2 (Adversaire) */}
          <div className="flex items-center justify-end gap-4 relative z-10 text-right w-1/3">
            <div>
              <div className="font-space font-black text-xl text-rose-500 truncate">{opponent.pseudo}</div>
              <div className="text-[10px] font-black uppercase opacity-60">Niv {opponent.level}</div>
            </div>
            <div className="w-16 h-16 rounded-full bg-rose-500/20 flex items-center justify-center text-3xl border-2 border-rose-500">
              {opponent.avatar}
            </div>
          </div>

          {/* Vagues de progression */}
          <div className="absolute left-0 bottom-0 h-1 bg-blue-500 transition-all duration-300" style={{ width: `${(myScore/10)*50}%` }}></div>
          <div className="absolute right-0 bottom-0 h-1 bg-rose-500 transition-all duration-300" style={{ width: `${(opponentScore/10)*50}%` }}></div>
        </div>

        {/* Moteur de Quiz */}
        <div className="glass p-8 rounded-[2rem] border-primary/20 shadow-2xl relative bg-white/40">
           <QuizEngine 
              quiz={quizData} 
              backUrl="/modes" 
              matiereId="duel"
              quizType="duel"
              onComplete={(finalScore) => {
                 currentScoreUpdate(finalScore);
              }}
           />
           {/* Masquage des confettis du moteur si nécessaire, ou on laisse faire */}
        </div>
      </div>
    );
  }

  if (status === "game_over" && winner) {
    const isMe = winner.winnerId === socket?.id;
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`glass p-16 rounded-[3xl] border-4 flex flex-col items-center gap-6 shadow-2xl ${isMe ? 'border-green-500 bg-green-500/10' : 'border-rose-500 bg-rose-500/10'}`}
        >
          <div className="text-8xl mb-4">{isMe ? '🏆' : '💀'}</div>
          <h2 className="text-5xl font-space font-black italic tracking-tighter uppercase uppercase">
            {isMe ? 'VICTOIRE !' : 'DÉFAITE'}
          </h2>
          <p className="text-xl font-bold opacity-80">
            {isMe ? "Tu as écrasé ton adversaire ! +50 XP" : `${winner.winnerPseudo} l'emporte. Tu feras mieux la prochaine fois !`}
          </p>
          {winner.reason && <p className="text-sm opacity-50 italic">({winner.reason})</p>}
          <button 
            onClick={() => window.location.reload()}
            className="mt-8 bg-foreground text-background font-black px-10 py-4 rounded-xl hover:scale-105 transition-transform"
          >
            Quitter
          </button>
        </motion.div>
      </div>
    );
  }

  return null;
}
