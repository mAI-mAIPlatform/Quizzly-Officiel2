"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";
import { LEARNING_LEVELS } from "@/lib/quizzly-utils";

const THEME_OPTIONS = [
  { id: "light", name: "Clair", icon: "☀️", color: "bg-white text-black" },
  { id: "dark", name: "Sombre", icon: "🌙", color: "bg-slate-900 text-white" },
  { id: "premium-dark", name: "Dark Premium", icon: "🌌", color: "bg-indigo-950 text-indigo-200" },
  { id: "neon", name: "Neon Cyberpunk", icon: "⚡", color: "bg-black text-cyan-400" },
  { id: "aurora", name: "Aurora", icon: "🌌", color: "bg-gradient-to-br from-emerald-300 to-cyan-400 text-emerald-950" },
  { id: "royal", name: "Royal", icon: "👑", color: "bg-gradient-to-br from-indigo-950 via-violet-800 to-amber-500 text-amber-100" },
];

const TIMER_OPTIONS = [0, 15, 30, 45, 60, 90, 120];
const SOUND_PRESETS = [
  { id: "calm", label: "Calme" },
  { id: "spark", label: "Spark" },
  { id: "pulse", label: "Pulse" },
] as const;
const EFFECT_PRESETS = [
  { id: "glow", label: "Glow" },
  { id: "pop", label: "Pop" },
  { id: "ring", label: "Ring" },
] as const;

export default function ReglagesPage() {
  const { progress, updateSettings, updateTheme, setAccountPassword, changeAccountPassword } = useProgress();
  const { showToast } = useToast();
  const [setupPassword, setSetupPassword] = useState("");
  const [setupConfirm, setSetupConfirm] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirm, setNewPasswordConfirm] = useState("");

  const settings = progress.settings;

  const updateAudio = (patch: Partial<typeof settings.audio>) => {
    updateSettings({ audio: { ...settings.audio, ...patch } });
  };

  const updateAccessibility = (patch: Partial<typeof settings.accessibility>) => {
    updateSettings({ accessibility: { ...settings.accessibility, ...patch } });
  };

  const updateGameplay = (patch: Partial<typeof settings.gameplay>) => {
    updateSettings({ gameplay: { ...settings.gameplay, ...patch } });
  };

  const updateSocial = (patch: Partial<typeof settings.social>) => {
    updateSettings({ social: { ...settings.social, ...patch } });
  };

  const updateNotifications = (patch: Partial<typeof settings.notifications>) => {
    updateSettings({ notifications: { ...settings.notifications, ...patch } });
  };

  const handleNotificationToggle = async (enabled: boolean) => {
    updateNotifications({ enabled });
    if (enabled && "Notification" in window && Notification.permission === "default") {
      await Notification.requestPermission();
    }
    showToast(enabled ? "Notifications activées 🔔" : "Notifications désactivées 🔕", "info");
  };

  const handleCreatePassword = async () => {
    if (!setupPassword || setupPassword !== setupConfirm) {
      showToast("Les mots de passe ne correspondent pas.", "error");
      return;
    }

    const ok = await setAccountPassword(setupPassword);
    if (ok) {
      showToast("Mot de passe local créé 🔐", "success");
      setSetupPassword("");
      setSetupConfirm("");
    }
  };

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || newPassword !== newPasswordConfirm) {
      showToast("Vérifie l'ancien mot de passe et la confirmation.", "error");
      return;
    }

    const ok = await changeAccountPassword(currentPassword, newPassword);
    if (ok) {
      showToast("Mot de passe changé 🔐", "success");
      setCurrentPassword("");
      setNewPassword("");
      setNewPasswordConfirm("");
    } else {
      showToast("Impossible de changer le mot de passe.", "error");
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-32">
      <header className="space-y-3">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary font-black uppercase tracking-[0.25em] text-[10px]">
          ⚙️ Version v1.2.0
        </div>
        <h1 className="text-5xl md:text-6xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet">
          Réglages
        </h1>
        <p className="opacity-70 font-bold uppercase tracking-widest text-xs">
          Personnalise ton apprentissage, ton confort et ta sécurité locale.
        </p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
            <span className="text-3xl">🎓</span> Niveau d'apprentissage
          </h2>
          <p className="text-sm opacity-70">
            Remplace l'ancien langage "classe" par un niveau plus lisible dans les réglages.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {LEARNING_LEVELS.map((level) => {
              const isSelected = settings.gameplay.learningLevel === level.id;
              return (
                <button
                  key={level.id}
                  onClick={() => {
                    updateGameplay({ learningLevel: level.id });
                    showToast(`Niveau défini : ${level.id}`, "success");
                  }}
                  className={`p-4 rounded-2xl text-left border-2 transition-all ${
                    isSelected ? "bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-[1.02]" : "bg-foreground/5 border-transparent hover:border-primary/20 hover:bg-foreground/10"
                  }`}
                >
                  <div className="font-space font-black uppercase italic tracking-tight">{level.id}</div>
                  <div className="text-[10px] font-bold opacity-70 mt-1 leading-relaxed">{level.description}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
            <span className="text-3xl">🎵</span> Audio
          </h2>

          <div className="space-y-5">
            {[
              { label: "Musique de fond", enabled: settings.audio.musicEnabled, volume: settings.audio.musicVolume, onToggle: () => updateAudio({ musicEnabled: !settings.audio.musicEnabled }) },
              { label: "Effets sonores", enabled: settings.audio.effectsEnabled, volume: settings.audio.effectsVolume, onToggle: () => updateAudio({ effectsEnabled: !settings.audio.effectsEnabled }) },
            ].map((entry) => (
              <div key={entry.label} className="space-y-3 rounded-2xl bg-foreground/5 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-black text-sm">{entry.label}</div>
                    <div className="text-[10px] font-bold opacity-40">Réglage indépendant</div>
                  </div>
                  <button
                    onClick={entry.onToggle}
                    className={`w-14 h-8 rounded-full transition-all duration-300 relative ${entry.enabled ? "bg-primary" : "bg-foreground/20"}`}
                    aria-label={`Basculer ${entry.label}`}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-md ${entry.enabled ? "left-7" : "left-1"}`} />
                  </button>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={Math.round(entry.volume * 100)}
                  onChange={(event) =>
                    updateAudio(
                      entry.label === "Musique de fond"
                        ? { musicVolume: Number(event.target.value) / 100 }
                        : { effectsVolume: Number(event.target.value) / 100 },
                    )
                  }
                  className="w-full accent-primary"
                />
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{Math.round(entry.volume * 100)}%</div>
              </div>
            ))}

            <div className="rounded-2xl bg-foreground/5 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-black text-sm">Volume des notifications</div>
                  <div className="text-[10px] font-bold opacity-40">Défis, quêtes, rappels</div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">{Math.round(settings.audio.notificationsVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={Math.round(settings.audio.notificationsVolume * 100)}
                onChange={(event) => updateAudio({ notificationsVolume: Number(event.target.value) / 100 })}
                className="w-full accent-primary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
            <span className="text-3xl">⏱️</span> Chronomètre
          </h2>
          <p className="text-sm opacity-70">Le temps s'affiche au centre du quiz et une réponse expirée compte comme fausse.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {TIMER_OPTIONS.map((seconds) => (
              <button
                key={seconds}
                onClick={() => {
                  updateGameplay({ quizTimerSeconds: seconds });
                  showToast(seconds === 0 ? "Chronomètre désactivé" : `Chronomètre : ${seconds}s`, "info");
                }}
                className={`rounded-2xl border-2 px-4 py-4 text-sm font-black transition-all ${
                  settings.gameplay.quizTimerSeconds === seconds ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-foreground/5 border-transparent hover:border-primary/20 hover:bg-foreground/10"
                }`}
              >
                {seconds === 0 ? "Off" : `${seconds}s`}
              </button>
            ))}
          </div>
        </div>

        <div className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
            <span className="text-3xl">🔔</span> Notifications
          </h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-foreground/5 p-4">
              <div>
                <div className="font-black text-sm">Activer les notifications</div>
                <div className="text-[10px] font-bold opacity-40">In-app et navigateur si autorisé</div>
              </div>
              <button
                onClick={() => handleNotificationToggle(!settings.notifications.enabled)}
                className={`w-14 h-8 rounded-full transition-all duration-300 relative ${settings.notifications.enabled ? "bg-primary" : "bg-foreground/20"}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-md ${settings.notifications.enabled ? "left-7" : "left-1"}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                ["challenge", "Défis"],
                ["quest", "Quêtes"],
                ["streak", "Séries"],
                ["reminder", "Rappels"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => updateNotifications({ [key]: !settings.notifications[key as keyof typeof settings.notifications] } as Partial<typeof settings.notifications>)}
                  className={`rounded-2xl border-2 px-4 py-4 text-left transition-all ${
                    settings.notifications[key as keyof typeof settings.notifications]
                      ? "bg-primary/10 border-primary/20 text-primary"
                      : "bg-foreground/5 border-transparent hover:border-primary/20"
                  }`}
                >
                  <div className="font-black text-sm">{label}</div>
                  <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest mt-1">Notification locale</div>
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Son</div>
                <select
                  value={settings.notifications.soundPreset}
                  onChange={(event) => updateNotifications({ soundPreset: event.target.value as typeof settings.notifications.soundPreset })}
                  className="w-full rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
                >
                  {SOUND_PRESETS.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Effet</div>
                <select
                  value={settings.notifications.effectPreset}
                  onChange={(event) => updateNotifications({ effectPreset: event.target.value as typeof settings.notifications.effectPreset })}
                  className="w-full rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
                >
                  {EFFECT_PRESETS.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-foreground/5 p-4">
              <div>
                <div className="font-black text-sm">Demandes d'amis</div>
                <div className="text-[10px] font-bold opacity-40">Autoriser ou couper les demandes locales</div>
              </div>
              <button
                onClick={() => {
                  updateSocial({ friendRequestsEnabled: !settings.social.friendRequestsEnabled });
                  showToast(settings.social.friendRequestsEnabled ? "Demandes désactivées" : "Demandes autorisées", "info");
                }}
                className={`w-14 h-8 rounded-full transition-all duration-300 relative ${settings.social.friendRequestsEnabled ? "bg-primary" : "bg-foreground/20"}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-md ${settings.social.friendRequestsEnabled ? "left-7" : "left-1"}`} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
            <span className="text-3xl">♿</span> Accessibilité
          </h2>

          <div className="space-y-4">
            {[
              { label: "Contraste élevé", key: "highContrast" as const, desc: "Renforcer les contrastes et les contours." },
              { label: "Réduire les effets", key: "reducedMotion" as const, desc: "Réduire les animations et les transitions." },
            ].map((entry) => (
              <div key={entry.key} className="flex items-center justify-between gap-4 rounded-2xl bg-foreground/5 p-4">
                <div>
                  <div className="font-black text-sm">{entry.label}</div>
                  <div className="text-[10px] font-bold opacity-40">{entry.desc}</div>
                </div>
                <button
                  onClick={() => updateAccessibility({ [entry.key]: !settings.accessibility[entry.key] } as Partial<typeof settings.accessibility>)}
                  className={`w-14 h-8 rounded-full transition-all duration-300 relative ${settings.accessibility[entry.key] ? "bg-primary" : "bg-foreground/20"}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-md ${settings.accessibility[entry.key] ? "left-7" : "left-1"}`} />
                </button>
              </div>
            ))}

            <label className="space-y-2 block">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Couleurs daltonisme</div>
              <select
                value={settings.accessibility.colorBlindMode}
                onChange={(event) => updateAccessibility({ colorBlindMode: event.target.value as typeof settings.accessibility.colorBlindMode })}
                className="w-full rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
              >
                <option value="default">Normal</option>
                <option value="protanopia">Protanopie</option>
                <option value="deuteranopia">Deutéranopie</option>
                <option value="tritanopia">Tritanopie</option>
              </select>
            </label>
          </div>
        </div>

        <div className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
            <span className="text-3xl">🔐</span> Sécurité locale
          </h2>

          {progress.security.passwordHash ? (
            <div className="space-y-4">
              <div className="rounded-2xl bg-foreground/5 p-4">
                <div className="font-black text-sm">Compte verrouillé localement</div>
                <div className="text-[10px] font-bold opacity-40 mt-1">
                  La session courante peut rester déverrouillée jusqu'à fermeture de l'onglet.
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(event) => setCurrentPassword(event.target.value)}
                  placeholder="Ancien mot de passe"
                  className="rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
                />
                <input
                  type="password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  placeholder="Nouveau mot de passe"
                  className="rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
                />
                <input
                  type="password"
                  value={newPasswordConfirm}
                  onChange={(event) => setNewPasswordConfirm(event.target.value)}
                  placeholder="Confirmer le nouveau mot de passe"
                  className="rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
                />
              </div>

              <button
                onClick={handleChangePassword}
                className="w-full rounded-2xl bg-primary text-white font-black uppercase tracking-widest py-4 shadow-lg shadow-primary/20"
              >
                Changer le mot de passe
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-sm opacity-70">
                Crée un mot de passe local pour protéger tes sauvegardes sur cet appareil.
              </p>
              <div className="grid grid-cols-1 gap-3">
                <input
                  type="password"
                  value={setupPassword}
                  onChange={(event) => setSetupPassword(event.target.value)}
                  placeholder="Créer un mot de passe"
                  className="rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
                />
                <input
                  type="password"
                  value={setupConfirm}
                  onChange={(event) => setSetupConfirm(event.target.value)}
                  placeholder="Confirmer le mot de passe"
                  className="rounded-2xl bg-foreground/5 border border-transparent px-4 py-3 font-bold outline-none focus:border-primary/20"
                />
              </div>

              <button
                onClick={handleCreatePassword}
                className="w-full rounded-2xl bg-primary text-white font-black uppercase tracking-widest py-4 shadow-lg shadow-primary/20"
              >
                Créer le mot de passe
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="glass p-8 space-y-6 border-white/20 shadow-xl md:col-span-2">
        <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
          <span className="text-3xl">🎨</span> Thème visuel
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {THEME_OPTIONS.map((theme) => {
            const isUnlocked = progress.unlockedThemes.includes(theme.id);
            const isSelected = progress.selectedTheme === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => {
                  if (isUnlocked) {
                    updateTheme(theme.id);
                    showToast(`Thème appliqué : ${theme.name}`, "success");
                  } else {
                    showToast("Ce thème n'est pas encore débloqué ! 💎", "error");
                  }
                }}
                className={`p-4 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all border-4 relative overflow-hidden ${
                  isSelected ? "border-primary ring-4 ring-primary/20 scale-105" : "border-transparent hover:scale-105 opacity-80"
                } ${!isUnlocked && "grayscale opacity-50"}`}
              >
                <div className={`absolute inset-0 opacity-20 ${theme.color}`} />
                <span className="text-4xl drop-shadow-md relative z-10">{theme.icon}</span>
                <span className="font-black font-space tracking-tight text-sm text-center relative z-10">{theme.name}</span>
                {!isUnlocked && <span className="absolute top-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded-full z-10">🔒</span>}
              </button>
            );
          })}
        </div>
      </section>

      <section className="glass p-8 bg-rose-50/60 border-rose-300/30 shadow-xl">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl font-black font-space text-rose-700 mb-2">Zone de danger</h2>
            <p className="text-sm opacity-70">Réinitialisation complète de la progression locale.</p>
          </div>
          <button
            onClick={() => {
              if (confirm("Es-tu sûr de vouloir réinitialiser ta progression ? Cette action est irréversible !")) {
                localStorage.removeItem("quizzly_progress");
                sessionStorage.removeItem("quizzly_account_unlocked");
                window.location.reload();
              }
            }}
            className="px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black uppercase tracking-widest shadow-lg shadow-rose-500/20"
          >
            Réinitialiser ma progression
          </button>
        </div>
      </section>
    </div>
  );
}
