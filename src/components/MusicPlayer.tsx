"use client";

import { useProgress } from "@/context/ProgressContext";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const TRACKS = [
  { id: "learning", src: "/music/go_learning.mp3", title: "Focus Apprentissage 🧠" },
  { id: "vibe", src: "/music/learning_vibe.mp3", title: "Vibration Scolaire ✨" },
  { id: "dynamic", src: "/music/dynamic_vibes.mp3", title: "Énergie Quizzly ⚡" },
  { id: "energetic", src: "/music/energetic.mp3", title: "Défi Intense 🏆" },
];

export default function MusicPlayer() {
  const { progress, updateSettings } = useProgress();
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const { musicEnabled, musicVolume } = progress.settings.audio;

  // Handle Volume and Sync
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = musicVolume;
  }, [musicVolume]);

  // Handle Play/Pause
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (musicEnabled && isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [musicEnabled, isPlaying, currentTrackIndex]);

  // Dynamic route music
  useEffect(() => {
    const isStressedRoute = pathname?.includes('/classe') || pathname?.includes('/survie') || pathname?.includes('/ranked');
    if (!isStressedRoute || !musicEnabled) return;

    let targetIndex = currentTrackIndex;
    if (pathname?.includes('/survie')) targetIndex = 3; // Energetic
    else if (pathname?.includes('/ranked')) targetIndex = 2; // Dynamic
    else if (pathname?.includes('/classe')) targetIndex = 1; // Learning Vibe

    if (targetIndex !== currentTrackIndex) {
      const timer = setTimeout(() => setCurrentTrackIndex(targetIndex), 0);
      return () => clearTimeout(timer);
    }
  }, [pathname, musicEnabled, currentTrackIndex]);


  const togglePlay = () => setIsPlaying(!isPlaying);
  const nextTrack = () => setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  const prevTrack = () => setCurrentTrackIndex((prev) => (prev === 0 ? TRACKS.length - 1 : prev - 1));

  const currentTrack = TRACKS[currentTrackIndex];

  return (
    <>
      <audio
        ref={audioRef}
        src={currentTrack.src}
        loop
        onEnded={nextTrack}
      />
      
      <div className="fixed bottom-24 md:bottom-10 left-6 z-[60] flex items-end gap-3 pointer-events-none">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, scale: 0.9, filter: "blur(10px)" }}
              className="glass p-5 mb-3 pointer-events-auto min-w-[280px] border-primary/20 shadow-2xl shadow-primary/20 bg-background/80 backdrop-blur-2xl rounded-3xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4 border-b border-foreground/5 pb-3">
                  <div className="min-w-0">
                    <p className="text-[8px] font-black uppercase tracking-[0.3em] text-primary/60">Quizzly Radio 📻</p>
                    <p className="font-space font-black text-sm truncate italic mt-1 leading-none">{currentTrack.title}</p>
                  </div>
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="w-6 h-6 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-[10px] transition-colors"
                  >
                    ✕
                  </button>
                </div>

                {/* Track Selector */}
                <div className="flex flex-col gap-1 max-h-32 overflow-y-auto pr-1 custom-scrollbar">
                  {TRACKS.map((track, index) => (
                    <button
                      key={track.id}
                      onClick={() => setCurrentTrackIndex(index)}
                      className={`text-left p-2 rounded-xl text-[10px] transition-all flex items-center justify-between ${
                        currentTrackIndex === index 
                          ? "bg-primary/20 text-primary font-bold" 
                          : "hover:bg-foreground/5 opacity-60"
                      }`}
                    >
                      <span className="truncate">{track.title}</span>
                      {currentTrackIndex === index && <span className="text-[8px]">●</span>}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTrack}
                    className="w-8 h-8 rounded-xl bg-foreground/5 flex items-center justify-center text-xs hover:bg-foreground/10 transition-colors"
                  >
                    ⏮
                  </button>
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
                  >
                    <span className="text-xl">{isPlaying ? "⏸" : "▶"}</span>
                  </button>
                  <button
                    onClick={nextTrack}
                    className="w-8 h-8 rounded-xl bg-foreground/5 flex items-center justify-center text-xs hover:bg-foreground/10 transition-colors"
                  >
                    ⏭
                  </button>
                  <div className="flex-1 flex flex-col gap-2">
                     <div className="flex justify-between text-[8px] font-black uppercase tracking-widest opacity-40">
                        <span>Volume</span>
                        <span>{Math.round(musicVolume * 100)}%</span>
                     </div>
                     <input 
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={musicVolume}
                        onChange={(e) => updateSettings({ audio: { ...progress.settings.audio, musicVolume: parseFloat(e.target.value) } })}
                        className="w-full accent-primary h-1.5 bg-foreground/10 rounded-full appearance-none cursor-pointer hover:accent-primary/80 transition-all"
                     />
                  </div>
                </div>

                {!isPlaying && (
                  <p className="text-[9px] font-bold italic opacity-40 text-center">Choisis ton ambiance et lance la musique ✨</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`pointer-events-auto w-14 h-14 rounded-2xl glass flex items-center justify-center text-2xl shadow-xl transition-all hover:scale-110 active:scale-90 relative ${
            isPlaying && musicEnabled ? "border-primary/50 text-primary" : "opacity-60 grayscale-[0.5] hover:grayscale-0"
          }`}
        >
          {isPlaying && musicEnabled ? (
            <>
              <span className="animate-bounce">🎵</span>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary/80"></span>
              </span>
            </>
          ) : "🔇"}
        </button>
      </div>
    </>
  );
}
