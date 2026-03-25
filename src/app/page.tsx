"use client";

/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { useProgress } from "@/context/ProgressContext";

export default function Home() {
  const { progress, claimQuestReward } = useProgress();
  const xpNeededForNextLevel = progress.level * 100;
  const xpProgressPercent = (progress.xp / xpNeededForNextLevel) * 100;
  
  // Calcul approximatif basé sur 30 quiz (3 chapitres de 10)
  const mathsProgressPercent = Math.min(100, Math.round((progress.completedQuizzes.length / 30) * 100));

  return (
    <div className="flex flex-col gap-8 w-full h-full text-foreground relative z-10">
      
      {/* En-tête du Dashboard */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold font-space text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose drop-shadow-sm">
            Bonjour ! 👋
          </h1>
          <p className="opacity-80 mt-1 text-lg">Prêt à relever de nouveaux défis aujourd'hui ?</p>
        </div>
        
        <div className="glass px-6 py-3 flex items-center gap-4">
          <div className="flex flex-col text-right">
            <span className="text-sm opacity-70 font-medium tracking-wider uppercase">Niveau {progress.level}</span>
            <span className="font-bold text-primary">{progress.xp} XP / {xpNeededForNextLevel}</span>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-cyan shadow-inner flex flex-col relative items-center justify-center text-white font-bold text-xl border-2 border-white/40 overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-white/20 transition-all duration-1000" 
              style={{ height: `${xpProgressPercent}%` }}
            ></div>
            <span className="relative z-10">🎮</span>
          </div>
        </div>
      </header>

      {/* Grid Principale */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Colonne Principale (Cours et Prog) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Reprendre où vous en étiez */}
          <Link href="/matiere/maths-debutant/ch2" className="glass p-6 group hover:border-primary/60 transition-colors duration-500 cursor-pointer relative overflow-hidden block">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
            <h2 className="text-2xl font-space font-bold mb-4">Reprendre l'apprentissage</h2>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue to-cyan flex items-center justify-center text-white shadow-lg grid-background">
                <span className="text-3xl">📐</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">Mathématiques - Débutant</h3>
                <p className="opacity-70 mb-3">Chapitre en cours</p>
                <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue to-cyan rounded-full transition-all duration-1000" style={{ width: `${mathsProgressPercent}%` }}></div>
                </div>
                <p className="text-sm mt-1 opacity-60 text-right">{mathsProgressPercent}% complété</p>
              </div>
            </div>
          </Link>

          {/* Matières Rapides */}
          <h2 className="text-2xl font-space font-bold mt-4">Vos matières</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Français', 'Histoire-Géo', 'SVT', 'Physique', 'Anglais'].map((matiere, i) => (
              <div key={i} className="glass p-4 rounded-2xl text-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 mx-auto rounded-full bg-foreground/5 flex items-center justify-center mb-3">
                  <span className="text-xl">📚</span>
                </div>
                <h4 className="font-semibold text-sm">{matiere}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne Latérale (Quêtes & Pass) */}
        <div className="flex flex-col gap-6">
          
          {/* Quête du Jour */}
          <section className="glass p-6">
            <h2 className="text-xl font-space font-bold mb-4 flex items-center gap-2">
              <span className="text-rose text-2xl">🔥</span> Quête du jour
            </h2>
            <div className="flex flex-col gap-3">
              {progress.quests.map(quest => {
                const percent = Math.min((quest.current / quest.target) * 100, 100);
                const isDone = quest.current >= quest.target;

                return (
                  <div key={quest.id} className={`rounded-xl p-4 border transition-colors ${quest.isCompleted ? 'bg-green/10 border-green/30' : 'bg-foreground/5 border-foreground/5'}`}>
                    <h3 className="font-bold text-sm">{quest.title}</h3>
                    <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden my-2">
                      <div className={`h-full rounded-full transition-all duration-1000 ${isDone ? 'bg-green' : 'bg-rose'}`} style={{ width: `${percent}%` }}></div>
                    </div>
                    <div className="flex justify-between items-center text-xs font-bold mt-1">
                      <span>{Math.min(quest.current, quest.target)} / {quest.target}</span>
                      
                      {quest.isCompleted ? (
                        <span className="text-green uppercase tracking-widest text-[10px]">Récupéré</span>
                      ) : isDone ? (
                        <button onClick={() => claimQuestReward(quest.id)} className="text-primary bg-primary/20 px-2 py-1 rounded-md hover:bg-primary/30 transition-colors uppercase tracking-widest text-[10px]">
                          Récupérer +{quest.xpReward} XP
                        </button>
                      ) : (
                        <span className="text-rose">+{quest.xpReward} XP</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Quizzly Pass */}
          <section className="glass p-6 flex flex-col relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-violet/20 rounded-full blur-3xl"></div>
            <h2 className="text-xl font-space font-bold mb-1">Quizzly Pass</h2>
            <p className="text-sm opacity-70 mb-4">Saison 1 : Découverte</p>
            
            <div className="flex justify-between items-end mb-2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-foreground/10 flex items-center justify-center mb-1 font-bold">{progress.passTier}</div>
                <span className="text-xs opacity-50">Actuel</span>
              </div>
              <div className="flex-1 px-2 pb-5">
                <div className="w-full h-1 bg-foreground/10 rounded-full relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-violet rounded-full transition-all duration-1000" style={{ width: `${(progress.xp % 200) / 2}%` }}></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet to-primary text-white flex items-center justify-center mb-1 font-bold shadow-lg shadow-violet/30 border border-white/20">
                  🎁
                </div>
                <span className="text-xs opacity-80 font-bold text-violet">Palier {progress.passTier + 1}</span>
              </div>
            </div>
            <p className="text-xs text-center opacity-70">Encore {200 - (progress.xp % 200)} XP avant la prochaine récompense !</p>
          </section>

        </div>
      </div>
    </div>
  );
}
