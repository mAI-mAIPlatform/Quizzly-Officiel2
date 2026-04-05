"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ALL_QUIZZES, THEMES } from "@/data/quizs";
import QuizCard from "@/components/quiz/QuizCard";
import { AnimatePresence, motion } from "framer-motion";

const CLASSES = [
  { id: "6eme", nom: "6ème" },
  { id: "5eme", nom: "5ème" },
  { id: "4eme", nom: "4ème" },
  { id: "3eme", nom: "3ème" },
  { id: "2nde", nom: "2nde" },
  { id: "1ere", nom: "1ère" },
  { id: "terminale", nom: "Terminale" },
] as const;

const MATIERES = [
  { id: "Maths", nom: "Mathématiques", color: "from-blue-500 to-cyan-400", icon: "🧮", dispo: true, theme: "Sciences" },
  { id: "Francais", nom: "Français", color: "from-purple-500 to-pink-400", icon: "🖋️", dispo: true, theme: "Littérature" },
  { id: "HistoireGeo", nom: "Histoire-Géo", color: "from-orange-500 to-yellow-400", icon: "🏛️", dispo: true, theme: "Histoire" },
  { id: "SVT", nom: "SVT", icon: "🌿", color: "from-green-500 to-emerald-500", dispo: true, theme: "Sciences" },
  { id: "PhysiqueChimie", nom: "Physique-Chimie", icon: "🧪", color: "from-violet-500 to-purple-500", dispo: true, theme: "Sciences" },
  { id: "Anglais", nom: "Anglais", icon: "🗣️", color: "from-rose-500 to-red-600", dispo: true, theme: "Langues" },
  { id: "Espagnol", nom: "Espagnol", icon: "🇪🇸", color: "from-yellow-400 to-orange-500", dispo: true, theme: "Langues" },
  { id: "Allemand", nom: "Allemand", icon: "🇩🇪", color: "from-gray-700 to-black", dispo: true, theme: "Langues" },
  { id: "SES", nom: "SES", icon: "📈", color: "from-emerald-400 to-teal-600", dispo: true, theme: "Sciences" },
  { id: "Philosophie", nom: "Philosophie", icon: "🧘", color: "from-indigo-400 to-purple-600", dispo: true, theme: "Histoire" },
  { id: "Technologie", nom: "Technologie", icon: "⚙️", color: "from-slate-500 to-blue-600", dispo: true, theme: "Technologie" },
  { id: "EMC", nom: "EMC", icon: "⚖️", color: "from-blue-600 to-red-600", dispo: true, theme: "Histoire" },
  { id: "ArtsPlastiques", nom: "Arts Plastiques", icon: "🎨", color: "from-pink-400 to-rose-600", dispo: true, theme: "Art" },
  { id: "Musique", nom: "Éducation Musicale", icon: "🎵", color: "from-fuchsia-400 to-rose-600", dispo: true, theme: "Musique" },
] as const;

export default function MatieresPage() {
  const [activeClasse, setActiveClasse] = useState("6eme");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState("Tous");
  const [viewMode, setViewMode] = useState<"explorer" | "quizz">("explorer");

  const query = searchQuery.trim().toLowerCase();

  const filteredMatieres = useMemo(
    () =>
      MATIERES.filter((m) => {
        const matchesSearch = query.length === 0 || m.nom.toLowerCase().includes(query);
        const matchesTheme = activeTheme === "Tous" || m.theme === activeTheme;
        return matchesSearch && matchesTheme;
      }),
    [query, activeTheme],
  );

  const filteredQuizzes = useMemo(
    () =>
      ALL_QUIZZES.filter((q) => {
        const matchesSearch = query.length === 0 || q.titre.toLowerCase().includes(query) || q.description.toLowerCase().includes(query);
        const matchesTheme = activeTheme === "Tous" || q.theme === activeTheme;
        return matchesSearch && matchesTheme;
      }),
    [query, activeTheme],
  );

  const availableThemeCount = useMemo(() => {
    const count = new Set(filteredMatieres.map((m) => m.theme)).size;
    return Math.max(count, activeTheme === "Tous" ? THEMES.length - 1 : 1);
  }, [filteredMatieres, activeTheme]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto text-foreground relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-3">
          <span className="w-fit px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.25em]">
            Liquid Glass v1.2.5
          </span>
          <h1 className="text-5xl font-black font-space italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet to-cyan">
            DÉCOUVRE 📚
          </h1>
          <p className="opacity-70 text-lg font-medium">Explore les matières, filtre vite et lance de nouveaux quiz express.</p>
        </div>

        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none opacity-50 group-focus-within:opacity-100 transition-opacity">🔍</div>
          <input
            type="text"
            placeholder="Rechercher un quiz, une matière..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-14 pl-12 pr-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all outline-none font-medium text-sm"
          />
        </div>
      </header>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Matières visibles</p>
          <p className="text-3xl font-black font-space mt-2">{filteredMatieres.length}</p>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Quiz trouvés</p>
          <p className="text-3xl font-black font-space mt-2">{filteredQuizzes.length}</p>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Thèmes actifs</p>
          <p className="text-3xl font-black font-space mt-2">{availableThemeCount}</p>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-50">Classe</p>
          <p className="text-3xl font-black font-space mt-2">{CLASSES.find((c) => c.id === activeClasse)?.nom}</p>
        </div>
      </section>

      <div className="flex items-center gap-4 p-1.5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-2xl w-fit">
        <button
          onClick={() => setViewMode("explorer")}
          className={`px-6 py-2.5 rounded-xl font-bold font-space text-sm transition-all ${
            viewMode === "explorer" ? "bg-primary text-white shadow-lg shadow-primary/20" : "opacity-60 hover:opacity-100"
          }`}
        >
          PAR MATIÈRE
        </button>
        <button
          onClick={() => setViewMode("quizz")}
          className={`px-6 py-2.5 rounded-xl font-bold font-space text-sm transition-all ${
            viewMode === "quizz" ? "bg-primary text-white shadow-lg shadow-primary/20" : "opacity-60 hover:opacity-100"
          }`}
        >
          QUIZ EXPRESS
        </button>
      </div>

      <div className="space-y-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 italic">Filtrer par thème</h3>
            {activeTheme !== "Tous" && (
              <button onClick={() => setActiveTheme("Tous")} className="text-[10px] font-black uppercase text-primary hover:underline transition-all">
                Réinitialiser
              </button>
            )}
          </div>
          <div className="flex overflow-x-auto pb-2 gap-2 snap-x hide-scrollbar">
            {THEMES.map((theme) => (
              <button
                key={theme}
                onClick={() => setActiveTheme(theme)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all snap-center border ${
                  activeTheme === theme ? "bg-primary/10 border-primary text-primary" : "border-white/15 bg-white/10 backdrop-blur-xl opacity-70 hover:opacity-100"
                }`}
              >
                {theme}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === "explorer" ? (
            <motion.div key="explorer" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="space-y-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 italic">Choisir ta classe</h3>
                <div className="flex overflow-x-auto pb-2 gap-4 snap-x hide-scrollbar">
                  {CLASSES.map((cls) => (
                    <button
                      key={cls.id}
                      onClick={() => setActiveClasse(cls.id)}
                      className={`min-w-[100px] h-20 rounded-2xl font-black font-space transition-all snap-center border flex flex-col items-center justify-center gap-1 ${
                        activeClasse === cls.id
                          ? "bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105"
                          : "border-white/15 bg-white/10 backdrop-blur-xl opacity-60 hover:opacity-100"
                      }`}
                    >
                      <span className="text-xs opacity-70">NIVEAU</span>
                      <span className="text-lg">{cls.nom}</span>
                    </button>
                  ))}
                </div>
              </div>

              {filteredMatieres.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredMatieres.map((matiere) => (
                    <div key={matiere.id} className="relative group">
                      {matiere.dispo ? (
                        <Link
                          href={`/matiere/${matiere.id}-${activeClasse}`}
                          className="border border-white/15 bg-white/10 backdrop-blur-2xl p-6 rounded-[2.5rem] flex flex-col items-center text-center gap-4 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer block h-full overflow-hidden"
                        >
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${matiere.color} flex items-center justify-center text-3xl text-white shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                            {matiere.icon}
                          </div>
                          <div className="relative z-10">
                            <h2 className="text-xl font-space font-black uppercase italic tracking-tighter">{matiere.nom}</h2>
                            <div className="mt-2 flex items-center justify-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                              <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Contenu disponible</span>
                            </div>
                          </div>
                        </Link>
                      ) : (
                        <div className="border border-white/10 bg-white/5 backdrop-blur-xl p-6 rounded-[2.5rem] flex flex-col items-center text-center gap-4 opacity-40 grayscale select-none h-full">
                          <div className="w-16 h-16 rounded-2xl bg-foreground/10 flex items-center justify-center text-3xl text-white shadow-inner">{matiere.icon}</div>
                          <div className="mt-2">
                            <h2 className="text-xl font-space font-black uppercase italic tracking-tighter">{matiere.nom}</h2>
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mt-2">Bientôt</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-56 flex flex-col items-center justify-center text-center border border-white/15 bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10">
                  <span className="text-5xl mb-4">🧭</span>
                  <h3 className="text-xl font-bold font-space uppercase">Aucune matière trouvée</h3>
                  <p className="opacity-60 text-sm mt-2 max-w-xs">Change le thème ou vide la recherche pour relancer l&apos;exploration.</p>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div key="quizz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black font-space italic uppercase tracking-tighter">Quiz Express 🔥</h2>
                <span className="text-xs font-bold opacity-40">{filteredQuizzes.length} quiz trouvés</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredQuizzes.map((quiz) => (
                  <QuizCard key={quiz.id} quiz={quiz} />
                ))}
              </div>

              {filteredQuizzes.length === 0 && (
                <div className="h-64 flex flex-col items-center justify-center text-center border border-white/15 bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10">
                  <span className="text-5xl mb-4">🏜️</span>
                  <h3 className="text-xl font-bold font-space uppercase">Aucun quiz trouvé</h3>
                  <p className="opacity-60 text-sm mt-2 max-w-xs">Essaie de modifier ta recherche ou tes filtres pour trouver ce que tu cherches.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
