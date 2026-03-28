"use client";

import { useProgress } from "@/context/ProgressContext";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Simple Web Audio API music generator for stressed ambiance
function createStressedMusic(ctx: AudioContext, intensity: "medium" | "high", volume: number) {
  const gainNode = ctx.createGain();
  gainNode.gain.value = Math.max(0.01, volume * 0.12);
  gainNode.connect(ctx.destination);

  const oscillators: OscillatorNode[] = [];

  // Base drone
  const drone = ctx.createOscillator();
  drone.type = 'sine';
  drone.frequency.value = intensity === 'high' ? 80 : 100;
  drone.connect(gainNode);
  oscillators.push(drone);

  // Tension oscillator
  const tension = ctx.createOscillator();
  tension.type = 'sawtooth';
  tension.frequency.value = intensity === 'high' ? 220 : 180;
  const tensionGain = ctx.createGain();
  tensionGain.gain.value = 0.03;
  tension.connect(tensionGain);
  tensionGain.connect(ctx.destination);
  oscillators.push(tension);

  // Heartbeat LFO
  const lfo = ctx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.value = intensity === 'high' ? 2.5 : 1.5;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 20;
  lfo.connect(lfoGain);
  lfoGain.connect(drone.frequency);
  oscillators.push(lfo);

  return {
    start: () => oscillators.forEach(o => o.start()),
    stop: () => {
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      setTimeout(() => oscillators.forEach(o => { try { o.stop(); } catch {} }), 600);
    }
  };
}

export default function MusicPlayer() {
  const { progress } = useProgress();
  const pathname = usePathname();
  const audioRef = useRef<{ stop: () => void } | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const musicSettings = progress.settings.audio;

  useEffect(() => {
    if (!musicSettings.musicEnabled || musicSettings.musicVolume <= 0) {
      audioRef.current?.stop();
      audioRef.current = null;
      return;
    }

    const isRanked = pathname?.includes('/classe') || pathname?.includes('/ranked');
    const isSurvival = pathname?.includes('/survie') || pathname?.includes('/survival');

    if (isRanked || isSurvival) {
      try {
        if (!ctxRef.current) ctxRef.current = new AudioContext();
        const music = createStressedMusic(ctxRef.current, isSurvival ? "high" : "medium", musicSettings.musicVolume);
        music.start();
        audioRef.current = music;
      } catch (e) {
        console.warn("Audio not available:", e);
      }
    } else {
      audioRef.current?.stop();
      audioRef.current = null;
    }

    return () => {
      audioRef.current?.stop();
      audioRef.current = null;
    };
  }, [pathname, musicSettings.musicEnabled, musicSettings.musicVolume]);

  return null; // Invisible component
}
