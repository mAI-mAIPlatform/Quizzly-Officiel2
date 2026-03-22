"use client";

/* eslint-disable react/no-unescaped-entities */
import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";

const THEME_OPTIONS = [
  { id: "light", name: "Clair", icon: "☀️", color: "bg-white text-black" },
  { id: "dark", name: "Sombre", icon: "🌙", color: "bg-slate-900 text-white" },
  { id: "premium-dark", name: "Dark Premium", icon: "🌌", color: "bg-indigo-950 text-indigo-200" },
  { id: "neon", name: "Neon Cyberpunk", icon: "⚡", color: "bg-black text-cyan-400" },
];

export default function ReglagesPage() {
  const { progress, updateProfile, updateSettings, updateTheme } = useProgress();
  const { showToast } = useToast();

  const activeClasses = ["6ème", "5ème", "4ème", "3ème", "Seconde", "Première", "Terminale"];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-700 pb-20">
      <header className="space-y-2">
        <h1 className="text-5xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet">RÉGLAGES ⚙️</h1>
        <p className="opacity-70 font-bold uppercase tracking-widest text-xs">Personnalise ton expérience d'apprentissage.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Scolarité */}
        <section className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
             <span className="text-3xl">🎓</span> Scolarité
          </h2>
          
          <div className="space-y-4">
             <label className="block text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Ma classe actuelle</label>
             <div className="grid grid-cols-2 gap-3">
                {activeClasses.map(c => (
                  <button 
                    key={c}
                    onClick={() => { updateProfile({ selectedClass: c }); showToast(`Classe changée : ${c}`, "success"); }}
                    className={`p-4 rounded-2xl font-black transition-all border-2 text-sm font-space tracking-tight ${progress.selectedClass === c ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30 scale-105' : 'bg-white/5 border-white/5 hover:border-primary/30 hover:bg-white/10 opacity-70'}`}
                  >
                    {c}
                  </button>
                ))}
             </div>
          </div>
        </section>

        {/* Audio */}
        <section className="glass p-8 space-y-6 border-white/20 shadow-xl">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
            <span className="text-3xl">🎵</span> Audio
          </h2>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-2xl">
              <div>
                <div className="font-black text-sm">Musique de fond</div>
                <div className="text-[10px] font-bold opacity-40">Ambiance stressante en Classé & Survie</div>
              </div>
              <button
                onClick={() => { 
                  updateSettings({ musicEnabled: !progress.settings?.musicEnabled });
                  showToast(progress.settings?.musicEnabled ? "Musique désactivée 🔇" : "Musique activée 🎵", "info");
                }}
                className={`w-14 h-8 rounded-full transition-all duration-300 relative ${progress.settings?.musicEnabled ? 'bg-primary' : 'bg-foreground/20'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-md ${progress.settings?.musicEnabled ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-foreground/5 rounded-2xl">
              <div>
                <div className="font-black text-sm">Effets sonores</div>
                <div className="text-[10px] font-bold opacity-40">Sons lors des interactions</div>
              </div>
              <button
                onClick={() => {
                  updateSettings({ soundEnabled: !progress.settings?.soundEnabled });
                  showToast(progress.settings?.soundEnabled ? "Sons désactivés 🔇" : "Sons activés 🔊", "info");
                }}
                className={`w-14 h-8 rounded-full transition-all duration-300 relative ${progress.settings?.soundEnabled ? 'bg-primary' : 'bg-foreground/20'}`}
              >
                <div className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-300 shadow-md ${progress.settings?.soundEnabled ? 'left-7' : 'left-1'}`}></div>
              </button>
            </div>
          </div>
        </section>

        {/* Thèmes Visuels */}
        <section className="glass p-8 space-y-6 border-white/20 shadow-xl md:col-span-2">
          <h2 className="text-2xl font-black font-space border-b border-primary/10 pb-4 flex items-center gap-3">
             <span className="text-3xl">🎨</span> Thème Visuel
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {THEME_OPTIONS.map(t => {
                const isUnlocked = progress.unlockedThemes.includes(t.id);
                const isSelected = progress.selectedTheme === t.id;
                return (
                  <button 
                    key={t.id}
                    onClick={() => {
                      if (isUnlocked) {
                        updateTheme(t.id);
                        showToast(`Thème appliqué : ${t.name}`, "success");
                      } else {
                        showToast("Ce thème n'est pas encore débloqué ! 💎", "error");
                      }
                    }}
                    className={`p-4 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all border-4 relative overflow-hidden ${isSelected ? 'border-primary ring-4 ring-primary/20 scale-105' : 'border-transparent hover:scale-105 opacity-80'} ${!isUnlocked && 'grayscale opacity-50'}`}
                  >
                    <div className={`absolute inset-0 opacity-20 ${t.color}`}></div>
                    <span className="text-4xl drop-shadow-md relative z-10">{t.icon}</span>
                    <span className="font-black font-space tracking-tight text-sm text-center relative z-10">{t.name}</span>
                    {!isUnlocked && <span className="absolute top-2 right-2 text-xs bg-black/50 text-white px-2 py-1 rounded-full z-10">🔒</span>}
                  </button>
                );
             })}
          </div>
        </section>
      </div>

      {/* Zone de danger */}
      <section className="glass p-8 bg-rose/5 border-rose/20">
        <h2 className="text-xl font-bold font-space text-rose mb-4">Zone de danger</h2>
        <button 
          onClick={() => {
            if (confirm("Es-tu sûr de vouloir réinitialiser ta progression ? Cette action est irréversible !")) {
              localStorage.removeItem("quizzly_progress");
              window.location.reload();
            }
          }}
          className="px-6 py-3 bg-rose text-white font-bold rounded-xl hover:brightness-110 shadow-lg shadow-rose/20"
        >
          Réinitialiser ma progression
        </button>
      </section>
    </div>
  );
}
