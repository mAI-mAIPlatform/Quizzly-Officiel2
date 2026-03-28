type SoundKind = "success" | "error" | "timeout" | "tap" | "notify" | "quest" | "streak" | "challenge";

let sharedAudioContext: AudioContext | null = null;

function getAudioContext() {
  if (typeof window === "undefined") return null;

  if (!sharedAudioContext) {
    sharedAudioContext = new AudioContext();
  }

  return sharedAudioContext;
}

function gainEnvelope(ctx: AudioContext, gainNode: GainNode, duration: number, volume: number) {
  const now = ctx.currentTime;
  gainNode.gain.cancelScheduledValues(now);
  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.exponentialRampToValueAtTime(Math.max(0.0001, volume), now + 0.02);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);
}

export function playUiSound(kind: SoundKind, volume = 0.5) {
  if (typeof window === "undefined" || volume <= 0) return;

  const ctx = getAudioContext();
  if (!ctx) return;
  if (ctx.state === "suspended") {
    ctx.resume().catch(() => undefined);
  }

  const config: Record<SoundKind, Array<{ frequency: number; duration: number; type: OscillatorType }>> = {
    success: [
      { frequency: 523, duration: 0.12, type: "triangle" },
      { frequency: 659, duration: 0.16, type: "triangle" },
      { frequency: 784, duration: 0.18, type: "triangle" },
    ],
    error: [
      { frequency: 196, duration: 0.12, type: "square" },
      { frequency: 146, duration: 0.16, type: "square" },
    ],
    timeout: [
      { frequency: 293, duration: 0.12, type: "sawtooth" },
      { frequency: 220, duration: 0.2, type: "sawtooth" },
    ],
    tap: [{ frequency: 440, duration: 0.08, type: "triangle" }],
    notify: [
      { frequency: 587, duration: 0.1, type: "triangle" },
      { frequency: 880, duration: 0.14, type: "triangle" },
    ],
    quest: [
      { frequency: 440, duration: 0.1, type: "triangle" },
      { frequency: 523, duration: 0.12, type: "triangle" },
      { frequency: 659, duration: 0.16, type: "triangle" },
    ],
    streak: [
      { frequency: 392, duration: 0.08, type: "triangle" },
      { frequency: 523, duration: 0.1, type: "triangle" },
      { frequency: 784, duration: 0.15, type: "triangle" },
    ],
    challenge: [
      { frequency: 330, duration: 0.1, type: "sawtooth" },
      { frequency: 440, duration: 0.12, type: "triangle" },
      { frequency: 554, duration: 0.14, type: "triangle" },
    ],
  };

  const notes = config[kind];

  notes.forEach((note, index) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = note.type;
    osc.frequency.value = note.frequency;
    osc.connect(gain);
    gain.connect(ctx.destination);

    const noteVolume = volume * (kind === "error" ? 0.7 : 0.8);
    gainEnvelope(ctx, gain, note.duration, noteVolume);

    const startAt = ctx.currentTime + index * 0.05;
    osc.start(startAt);
    osc.stop(startAt + note.duration + 0.05);
  });
}

export function notifyBrowser(title: string, body: string, icon = "/images/logo.png") {
  if (typeof window === "undefined" || !("Notification" in window)) return;
  if (Notification.permission !== "granted") return;

  new Notification(title, {
    body,
    icon,
    silent: true,
  });
}
