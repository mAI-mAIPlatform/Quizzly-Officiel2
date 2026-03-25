"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Quest = {
  id: string;
  title: string;
  target: number;
  current: number;
  xpReward: number;
  isCompleted: boolean;
};

type UserProgress = {
  xp: number;
  level: number;
  streak: number;
  crystals: number;
  completedQuizzes: string[];
  quests: Quest[];
  passTier: number;
  lastPlayDate: string | null;
  stars: number;
  lastStarRegen: string | null;
  pseudo: string;
  bio: string;
  avatar: string;
  unlockedThemes: string[];
  unlockedAvatars: string[];
  claimedPassRewards: number[];
  selectedClass: string;
  xpBoost: number;
  unlockedAchievements: string[];
  friends: string[];
  tribes: { id: string; name: string; members: string[]; mascot: string }[];
  messages: { [chatId: string]: { sender: string; text: string; timestamp: string; isSystem?: boolean }[] };
  rankedPoints: number;
  rankedRank: 'Apprenti' | 'Etudiant' | 'Expert' | 'Savant' | 'Génie';
  rankedCompletedQuizzes: string[];
  survivalHighScore: number;
  survivalTotalXP: number;
  isPassPro: boolean;
  unlockedTitles: string[];
  selectedTitle: string;
  chests: string[];
  // v0.9.4 additions
  settings: { musicEnabled: boolean; soundEnabled: boolean };
  dailyRewardClaimed: boolean;
  lastDailyRewardDate: string | null;
  shields: number;
  boosterCount: number;
  profileFrame: string;
  profileBanner: string;
  selectedMascot: string;
  selectedEffect: string;
  unlockedFrames: string[];
  unlockedBanners: string[];
  unlockedEffects: string[];
  unlockedMascots: string[];
  streakDays: string[]; // ISO dates of streak days
  history: { id: string; date: string; type: 'classic' | 'ranked' | 'survival' | 'duel' | 'blitz' | 'vrai_faux' | 'visuel'; score: number; maxScore: number; title: string }[];
  selectedTheme: string;
  // v0.9.7.1 additions
  selectedPseudoEffect: string;
  unlockedPseudoEffects: string[];
  activeBoosters: { id: string; multiplier: number; expiresAt: string }[];
  lastDailyQuizDate: string | null;
  weeklyXP: number;
  league: 'Débutant' | 'Apprenti' | 'Étudiant' | 'Nouveau' | 'Intello' | 'HPI' | 'Savant' | 'Expert' | 'Génie';
  lastWeeklyReset: string | null;
};

type ProgressContextType = {
  progress: UserProgress;
  addXP: (amount: number) => void;
  addCrystals: (amount: number) => void;
  markQuizCompleted: (quizId: string, matiereId: string) => void;
  isQuizCompleted: (quizId: string) => boolean;
  claimQuestReward: (questId: string) => void;
  useStar: () => boolean;
  buyStars: (amount: number, cost: number) => boolean;
  buyCosmetic: (type: 'avatar' | 'theme', id: string, cost: number) => boolean;
  claimPassReward: (tier: number) => void;
  updateProfile: (data: Partial<UserProgress>) => void;
  buyBooster: (multiplier: number, cost: number) => boolean;
  unlockAchievement: (id: string) => void;
  addFriend: (pseudo: string) => void;
  createTribe: (name: string) => void;
  joinTribe: (id: string) => void;
  sendMessage: (chatId: string, text: string) => void;
  addRankedPoints: (amount: number) => void;
  markRankedQuizCompleted: (quizId: string) => void;
  updateSurvivalScore: (score: number) => void;
  buyPassPro: () => boolean;
  claimChest: (type: string) => void;
  buyChest: (type: string, cost: number) => boolean;
  addChestRewards: (type: string) => void;
  updateWeekendQuest: () => void;
  activeChest: { type: string; isOpen: boolean } | null;
  closeChest: () => void;
  claimDailyReward: () => boolean;
  buyRandomChest: (cost: number) => boolean;
  updateSettings: (s: Partial<{ musicEnabled: boolean; soundEnabled: boolean }>) => void;
  updateTheme: (theme: string) => void;
  buyFrame: (id: string, cost: number) => boolean;
  buyBanner: (id: string, cost: number) => boolean;
  buyEffect: (id: string, cost: number) => boolean;
  buyMascot: (id: string, cost: number) => boolean;
  buyShield: (days: number, cost: number) => boolean;
  buyCustomBooster: (multiplier: number, minutes: number, cost: number) => boolean;
  buyPseudoEffect: (id: string, cost: number) => boolean;
  addHistoryEntry: (entry: { id: string; type: 'classic' | 'ranked' | 'survival' | 'duel' | 'blitz' | 'vrai_faux' | 'visuel'; score: number; maxScore: number; title: string }) => void;
  completeDailyQuiz: () => boolean;
};

const defaultQuests: Quest[] = [
  { id: "q_daily_1", title: "Terminer 1 quiz", target: 1, current: 0, xpReward: 20, isCompleted: false },
  { id: "q_daily_2", title: "Faire un sans-faute", target: 1, current: 0, xpReward: 50, isCompleted: false },
  { id: "q_daily_3", title: "Gagner 100 XP", target: 100, current: 0, xpReward: 30, isCompleted: false },
  { id: "q_weekly_1", title: "Terminer 10 quiz", target: 10, current: 0, xpReward: 200, isCompleted: false },
  { id: "q_weekly_2", title: "Série de 3 jours", target: 3, current: 0, xpReward: 150, isCompleted: false },
];

const defaultProgress: UserProgress = {
  xp: 0,
  level: 1,
  streak: 1,
  crystals: 0,
  completedQuizzes: [],
  quests: defaultQuests,
  passTier: 1,
  lastPlayDate: null,
  stars: 5,
  lastStarRegen: null,
  pseudo: "Apprenti Quizzly",
  bio: "Prêt à apprendre !",
  avatar: "🦁",
  unlockedThemes: ["light"],
  unlockedAvatars: ["🦁"],
  claimedPassRewards: [],
  selectedClass: "6ème",
  xpBoost: 1,
  unlockedAchievements: [],
  friends: [],
  tribes: [],
  messages: {},
  rankedPoints: 0,
  rankedRank: 'Apprenti',
  rankedCompletedQuizzes: [],
  survivalHighScore: 0,
  survivalTotalXP: 0,
  isPassPro: false,
  unlockedTitles: ["Petit Nouveau"],
  selectedTitle: "Petit Nouveau",
  chests: [],
  settings: { musicEnabled: true, soundEnabled: true },
  dailyRewardClaimed: false,
  lastDailyRewardDate: null,
  shields: 3,
  boosterCount: 0,
  profileFrame: "default",
  profileBanner: "default",
  selectedMascot: "",
  selectedEffect: "",
  unlockedFrames: ["default"],
  unlockedBanners: ["default"],
  unlockedEffects: [],
  unlockedMascots: [],
  streakDays: [],
  history: [],
  selectedTheme: "light",
  selectedPseudoEffect: "",
  unlockedPseudoEffects: [],
  activeBoosters: [],
  lastDailyQuizDate: null,
  weeklyXP: 0,
  league: 'Débutant',
  lastWeeklyReset: null,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
  const [activeChest, setActiveChest] = useState<{ type: string; isOpen: boolean } | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("quizzly_progress");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // eslint-disable-next-line
        setProgress({ ...defaultProgress, ...parsed });
      } catch (e) {
        console.error("Erreur de parsing localStorage", e);
      }
    }
    
    // Check for star regeneration
    const checkRegen = () => {
      const now = Date.now();
      const saved = localStorage.getItem("quizzly_progress");
      
      if (saved) {
        const currentProgress = JSON.parse(saved);
        if (currentProgress.stars < 5) {
          const lastTime = currentProgress.lastStarRegen ? new Date(currentProgress.lastStarRegen).getTime() : now;
          const diffMs = now - lastTime;
          const starsToAdd = Math.floor(diffMs / (30 * 60 * 1000)); // 1 étoile toutes les 30 min
          
          if (starsToAdd > 0) {
            currentProgress.stars = Math.min(5, currentProgress.stars + starsToAdd);
            currentProgress.lastStarRegen = new Date(now).toISOString();
            setProgress(currentProgress);
            localStorage.setItem("quizzly_progress", JSON.stringify(currentProgress));
          }
        }
      }
    };

    checkRegen();

    // Check for expired boosters
    const checkBoosters = () => {
      const now = new Date();
      setProgress(prev => {
        if (prev.activeBoosters.length === 0) return prev;
        const validBoosters = prev.activeBoosters.filter(b => new Date(b.expiresAt) > now);
        if (validBoosters.length === prev.activeBoosters.length) return prev;
        
        // Update xpBoost based on highest remaining multiplier
        const maxMult = validBoosters.reduce((max, b) => Math.max(max, b.multiplier), 1);
        const updated = { ...prev, activeBoosters: validBoosters, xpBoost: maxMult };
        localStorage.setItem("quizzly_progress", JSON.stringify(updated));
        return updated;
      });
    };

    checkBoosters();
    const boosterInt = setInterval(checkBoosters, 10000); // Every 10s

    const interval = setInterval(checkRegen, 60000); // Check every minute

    // Check for weekly reset (Monday 00:00)
    const checkWeeklyReset = () => {
      const saved = localStorage.getItem("quizzly_progress");
      if (saved) {
        const currentProgress = JSON.parse(saved);
        const lastReset = currentProgress.lastWeeklyReset ? new Date(currentProgress.lastWeeklyReset) : new Date(0);
        const now = new Date();
        
        // Find last monday
        const lastMonday = new Date(now);
        lastMonday.setDate(now.getDate() - ((now.getDay() + 6) % 7));
        lastMonday.setHours(0, 0, 0, 0);

        if (lastReset < lastMonday) {
          currentProgress.weeklyXP = 0;
          currentProgress.lastWeeklyReset = now.toISOString();
          // League doesn't reset, but weeklyXP does. 
          // One could argue league should drop? User said "classe chaque semaine".
          // We'll keep the league reached but reset the race.
          setProgress(currentProgress);
          localStorage.setItem("quizzly_progress", JSON.stringify(currentProgress));
        }
      }
    };

    checkWeeklyReset();
    const weeklyResetInt = setInterval(checkWeeklyReset, 3600000); // Every hour

    setIsLoaded(true);
    return () => {
      if (interval) clearInterval(interval);
      if (boosterInt) clearInterval(boosterInt);
      if (weeklyResetInt) clearInterval(weeklyResetInt);
    };
  }, []);

  // Update document root theme attribute
  useEffect(() => {
    if (isLoaded && progress.selectedTheme) {
      document.documentElement.setAttribute("data-theme", progress.selectedTheme);
    }
  }, [isLoaded, progress.selectedTheme]);

  const addXP = (amount: number) => {
    setProgress(prev => {
      const finalAmount = amount * (prev.xpBoost || 1);
      let newXP = prev.xp + finalAmount;
      let newLevel = prev.level;
      let newCrystals = prev.crystals;
      
      while (newXP >= 100) {
        newLevel += 1;
        newXP -= 100;
        newCrystals += 50;
      }
      
      const newProgress = { ...prev, xp: newXP, level: newLevel, crystals: newCrystals };
      
      // Update weekly XP
      newProgress.weeklyXP = (prev.weeklyXP || 0) + finalAmount;

      // League logic (simplified threshold for demo)
      const thresholds: { [key: string]: number } = {
        'Débutant': 0, 'Apprenti': 500, 'Étudiant': 1500, 'Nouveau': 3000, 
        'Intello': 5000, 'HPI': 8000, 'Savant': 12000, 'Expert': 18000, 'Génie': 25000
      };
      
      let nextLeague = newProgress.league;
      Object.entries(thresholds).forEach(([name, val]) => {
        if (newProgress.weeklyXP >= val) nextLeague = name as UserProgress['league'];
      });
      newProgress.league = nextLeague;

      // Mini-logique pour le Pass (Tous les 200 XP cumulés - Max 30 paliers)
      const totalXPCumulated = newXP + (newLevel - 1) * 100;
      newProgress.passTier = Math.min(30, Math.floor(totalXPCumulated / 200) + 1);

      localStorage.setItem("quizzly_progress", JSON.stringify(newProgress));
      return newProgress;
    });
  };

  const addCrystals = (amount: number) => {
    setProgress(prev => {
      const updated = { ...prev, crystals: prev.crystals + amount };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const markQuizCompleted = (quizId: string, matiereId: string) => {
    setProgress(prev => {
      if (prev.completedQuizzes.includes(quizId)) return prev;
      
      const updated = { ...prev, completedQuizzes: [...prev.completedQuizzes, quizId] };
      
      // Update streak
      const today = new Date().toISOString().split('T')[0];
      if (updated.lastPlayDate !== today) {
        if (updated.lastPlayDate) {
          const last = new Date(updated.lastPlayDate);
          const curr = new Date(today);
          const diffDays = Math.round((curr.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
          if (diffDays === 1) {
            updated.streak += 1;
          } else if (diffDays > 1) {
            // Check for shields
            const shieldsNeeded = diffDays - 1;
            if (updated.shields >= shieldsNeeded) {
              updated.shields -= shieldsNeeded;
              updated.streak += 1; // Protected!
            } else {
              updated.shields = 0;
              updated.streak = 1;
            }
          }
        } else {
          updated.streak = 1;
        }
        updated.lastPlayDate = today;

        // Récompense tous les 30 jours
        if (updated.streak > 0 && updated.streak % 30 === 0) {
          updated.stars = Math.min(5, (updated.stars || 0) + 1);
          updated.crystals += 5;
        }
      }

      // Mettre à jour les quêtes
      updated.quests = updated.quests.map(q => {
        if (q.isCompleted) return q;
        let newCurrent = q.current;
        if (q.id === "q_maths_3" && matiereId.includes("maths")) {
          newCurrent += 1;
        }
        if (q.id === "q_any_5") {
          newCurrent += 1;
        }
        return { ...q, current: newCurrent };
      });

      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };
  
  const claimQuestReward = (questId: string) => {
    setProgress(prev => {
      const quest = prev.quests.find(q => q.id === questId);
      if (!quest || quest.isCompleted || quest.current < quest.target) return prev;
      
      const updated = { ...prev };
      updated.quests = updated.quests.map(q => q.id === questId ? { ...q, isCompleted: true } : q);
      // Ajout manuel d'XP sans reboucler sur saveToStorage pour éviter une double setState
      updated.xp += quest.xpReward;
      const xpNeeded = updated.level * 100;
      if (updated.xp >= xpNeeded) {
        updated.level += 1;
        updated.xp -= xpNeeded;
        updated.crystals += 50;
      }
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const useStar = () => {
    if (progress.stars <= 0) return false;
    setProgress(prev => {
      const updated = { 
        ...prev, 
        stars: (prev.stars || 0) - 1,
        lastStarRegen: prev.stars === 5 ? new Date().toISOString() : prev.lastStarRegen 
      };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const buyStars = (amount: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const updated = { 
        ...prev, 
        crystals: prev.crystals - cost,
        stars: Math.min(5, (prev.stars || 0) + amount)
      };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const updateProfile = (data: Partial<UserProgress>) => {
    setProgress(prev => {
      const updated = { ...prev, ...data };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const buyBooster = (multiplier: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const updated = { ...prev, crystals: prev.crystals - cost, xpBoost: multiplier };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const unlockAchievement = (id: string) => {
    setProgress(prev => {
      if (prev.unlockedAchievements.includes(id)) return prev;
      const updated = { ...prev, unlockedAchievements: [...prev.unlockedAchievements, id] };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const buyCosmetic = (type: 'avatar' | 'theme', id: string, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const updated = { ...prev, crystals: prev.crystals - cost };
      if (type === 'avatar') {
        if (!updated.unlockedAvatars.includes(id)) {
          updated.unlockedAvatars = [...updated.unlockedAvatars, id];
        }
      } else {
        if (!updated.unlockedThemes.includes(id)) {
          updated.unlockedThemes = [...updated.unlockedThemes, id];
        }
      }
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const claimPassReward = (tier: number) => {
    if (tier > progress.passTier || progress.claimedPassRewards.includes(tier)) return;
    
    setProgress(prev => {
      const updated = { ...prev, claimedPassRewards: [...prev.claimedPassRewards, tier] };
      
      const rewards30: { [key: number]: () => void } = {
        1: () => updated.crystals += 50,
        2: () => updated.unlockedTitles.push("Major de Promo"),
        3: () => updated.stars = Math.min(5, (updated.stars || 0) + 1),
        4: () => updated.unlockedAvatars.push("🎓"),
        5: () => updated.crystals += 100,
        6: () => updated.xpBoost = 1.5,
        7: () => updated.unlockedTitles.push("Petit Génie"),
        8: () => updated.stars = Math.min(5, (updated.stars || 0) + 1),
        9: () => updated.crystals += 150,
        10: () => updated.unlockedAvatars.push("🧠"),
        11: () => updated.unlockedTitles.push("Chercheur"),
        12: () => updated.crystals += 200,
        13: () => updated.stars = Math.min(5, (updated.stars || 0) + 1),
        14: () => updated.unlockedAvatars.push("🦉"),
        15: () => updated.unlockedTitles.push("Expert"),
        16: () => updated.crystals += 250,
        17: () => updated.xpBoost = 2,
        18: () => updated.stars = Math.min(5, (updated.stars || 0) + 1),
        19: () => updated.crystals += 300,
        20: () => updated.unlockedAvatars.push("🦁"),
        21: () => updated.unlockedTitles.push("Maître"),
        22: () => updated.crystals += 400,
        23: () => updated.stars = Math.min(5, (updated.stars || 0) + 1),
        24: () => updated.unlockedAvatars.push("🐉"),
        25: () => updated.unlockedTitles.push("Légende"),
        26: () => updated.crystals += 500,
        27: () => updated.xpBoost = 3,
        28: () => updated.stars = Math.min(5, (updated.stars || 0) + 1),
        29: () => updated.crystals += 1000,
        30: () => updated.unlockedAvatars.push("👑"),
      };

      if (rewards30[tier]) rewards30[tier]();
      
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const buyChest = (type: string, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
        const updated = { ...prev, crystals: prev.crystals - cost };
        localStorage.setItem("quizzly_progress", JSON.stringify(updated));
        return updated;
    });
    setActiveChest({ type, isOpen: true });
    return true;
  };

  const closeChest = () => setActiveChest(null);

  const claimChest = (type: string) => {
    setActiveChest({ type, isOpen: true });
    // Les gains réels sont gérés dans la modal à la fin de l'animation pour plus de réalisme
  };

  const addChestRewards = (type: string) => {
    setProgress(prev => {
        const updated = { ...prev };
        if (type === "Rare") { updated.crystals += 100; }
        else if (type === "Epique") { updated.crystals += 250; updated.unlockedTitles.push("Guerrier du Weekend"); }
        else if (type === "Mythique") { updated.crystals += 500; updated.unlockedAvatars.push("🔥"); }
        else if (type === "Légendaire") { updated.crystals += 1000; updated.unlockedTitles.push("Immortel"); }
        else if (type === "Ultra") { updated.crystals += 5000; updated.unlockedAvatars.push("✨"); updated.unlockedTitles.push("Dieu du Quiz"); }
        
        localStorage.setItem("quizzly_progress", JSON.stringify(updated));
        return updated;
    });
  };

  const updateWeekendQuest = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = Dimanche, 5 = Vendredi, 6 = Samedi
    const hour = now.getHours();

    if (day === 5 && hour >= 15 || day === 6 || day === 0) {
        setProgress(prev => {
           if (prev.quests.some(q => q.id === "q_weekend")) return prev;
           const weekendQuests = [
             { id: "q_weekend", title: "Gagner 500 XP ce Weekend", target: 500, current: 0, xpReward: 0, isCompleted: false },
             { id: "q_weekend", title: "Faire 10 quiz parfaits", target: 10, current: 0, xpReward: 0, isCompleted: false },
             { id: "q_weekend", title: "Monter un niveau ce Weekend", target: 1, current: 0, xpReward: 0, isCompleted: false }
           ];
           const randomQuest = weekendQuests[Math.floor(Math.random() * weekendQuests.length)];
           const updated = { ...prev, quests: [...prev.quests, randomQuest] };
           localStorage.setItem("quizzly_progress", JSON.stringify(updated));
           return updated;
        });
    }
  };

  const addFriend = (pseudo: string) => {
    setProgress(prev => {
      if (prev.friends.includes(pseudo)) return prev;
      const updated = { ...prev, friends: [...prev.friends, pseudo] };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const createTribe = (name: string) => {
    const id = "tribe_" + Math.random().toString(36).substr(2, 9);
    const mascots = ["🦁", "🦊", "🐘", "🦅", "🐺"];
    const mascot = mascots[Math.floor(Math.random() * mascots.length)];
    
    setProgress(prev => {
      const newTribe = { id, name, members: [prev.pseudo], mascot };
      const updated = { ...prev, tribes: [...prev.tribes, newTribe] };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const joinTribe = (id: string) => {
    setProgress(prev => {
      const tribe = prev.tribes.find(t => t.id === id);
      if (!tribe || tribe.members.includes(prev.pseudo)) return prev;
      
      const updatedTribes = prev.tribes.map(t => 
        t.id === id ? { ...t, members: [...t.members, prev.pseudo] } : t
      );
      const updated = { ...prev, tribes: updatedTribes };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const sendMessage = (chatId: string, text: string) => {
    setProgress(prev => {
      const newMessage = {
        sender: prev.pseudo,
        text,
        timestamp: new Date().toISOString()
      };
      
      const chatMessages = prev.messages[chatId] || [];
      const updatedMessages = {
        ...prev.messages,
        [chatId]: [...chatMessages, newMessage]
      };
      
      const updated = { ...prev, messages: updatedMessages };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const isQuizCompleted = (quizId: string) => {
    return progress.completedQuizzes.includes(quizId);
  };

  const addRankedPoints = (amount: number) => {
    setProgress(prev => {
      const newPoints = prev.rankedPoints + amount;
      let newRank = prev.rankedRank;

      if (newPoints >= 6001) newRank = 'Génie';
      else if (newPoints >= 3001) newRank = 'Savant';
      else if (newPoints >= 1501) newRank = 'Expert';
      else if (newPoints >= 501) newRank = 'Etudiant';
      else newRank = 'Apprenti';

      const updated = { ...prev, rankedPoints: newPoints, rankedRank: newRank };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const markRankedQuizCompleted = (quizId: string) => {
    setProgress(prev => {
      if (prev.rankedCompletedQuizzes.includes(quizId)) return prev;
      const updated = { ...prev, rankedCompletedQuizzes: [...prev.rankedCompletedQuizzes, quizId] };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const updateSurvivalScore = (score: number) => {
    setProgress(prev => {
      const newHighScore = Math.max(prev.survivalHighScore, score);
      const updated = { ...prev, survivalHighScore: newHighScore, survivalTotalXP: prev.survivalTotalXP + (score * 5) };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const buyPassPro = () => {
    if (progress.crystals < 50 || progress.isPassPro) return false;
    setProgress(prev => {
      const updated = { ...prev, crystals: prev.crystals - 50, isPassPro: true };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const claimDailyReward = () => {
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastDailyRewardDate === today) return false;
    setProgress(prev => {
      const updated = { ...prev, crystals: prev.crystals + 5, dailyRewardClaimed: true, lastDailyRewardDate: today };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const buyRandomChest = (cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const updated = { ...prev, crystals: prev.crystals - cost };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    // Rarity %: 80% Rare, 12% Épique, 5% Mythique, 2% Légendaire, 1% Ultra
    const roll = Math.random() * 100;
    let tier = "Rare";
    if (roll >= 99) tier = "Ultra";
    else if (roll >= 97) tier = "Légendaire";
    else if (roll >= 92) tier = "Mythique";
    else if (roll >= 80) tier = "Epique";
    setActiveChest({ type: tier, isOpen: true });
    return true;
  };

  const updateSettings = (s: Partial<{ musicEnabled: boolean; soundEnabled: boolean }>) => {
    setProgress(prev => {
      const updated = { ...prev, settings: { ...prev.settings, ...s } };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const updateTheme = (theme: string) => {
    setProgress(prev => {
      if (!prev.unlockedThemes.includes(theme)) return prev;
      const updated = { ...prev, selectedTheme: theme };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const buyGenericCosmetic = (field: string, unlockedField: string, id: string, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const unlockedArr = (prev as Record<string, unknown>)[unlockedField] as string[];
      if (unlockedArr.includes(id)) return prev;
      const updated = { ...prev, crystals: prev.crystals - cost, [unlockedField]: [...unlockedArr, id], [field]: id };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const buyFrame = (id: string, cost: number) => buyGenericCosmetic("profileFrame", "unlockedFrames", id, cost);
  const buyBanner = (id: string, cost: number) => buyGenericCosmetic("profileBanner", "unlockedBanners", id, cost);
  const buyEffect = (id: string, cost: number) => buyGenericCosmetic("selectedEffect", "unlockedEffects", id, cost);
  const buyMascot = (id: string, cost: number) => buyGenericCosmetic("selectedMascot", "unlockedMascots", id, cost);

  const buyShield = (days: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const updated = { ...prev, crystals: prev.crystals - cost, shields: prev.shields + days };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const buyCustomBooster = (multiplier: number, minutes: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const expiresAt = new Date(Date.now() + minutes * 60 * 1000).toISOString();
      const newBooster = { id: `boost_${Date.now()}`, multiplier, expiresAt };
      const updatedBoosters = [...prev.activeBoosters, newBooster];
      const maxMult = updatedBoosters.reduce((max, b) => Math.max(max, b.multiplier), Math.max(prev.xpBoost, multiplier));
      
      const updated = { 
        ...prev, 
        crystals: prev.crystals - cost, 
        activeBoosters: updatedBoosters, 
        xpBoost: maxMult 
      };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const buyPseudoEffect = (id: string, cost: number) => buyGenericCosmetic("selectedPseudoEffect", "unlockedPseudoEffects", id, cost);

  const addHistoryEntry = (entry: { id: string; type: 'classic' | 'ranked' | 'survival' | 'duel' | 'blitz' | 'vrai_faux' | 'visuel'; score: number; maxScore: number; title: string }) => {
    setProgress(prev => {
      const historyEntry = { ...entry, date: new Date().toISOString() };
      const updated = { ...prev, history: [historyEntry, ...(prev.history || [])].slice(0, 100) }; // Keep last 100
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
  };

  const completeDailyQuiz = () => {
    const today = new Date().toISOString().split('T')[0];
    if (progress.lastDailyQuizDate === today) return false;
    setProgress(prev => {
      const updated = { ...prev, lastDailyQuizDate: today };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  if (!isLoaded) return <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-bold">Chargement de ton cerveau... 🧠</div>;

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      addXP, 
      addCrystals, 
      markQuizCompleted, 
      isQuizCompleted, 
      claimQuestReward,
      useStar,
      buyStars,
      buyCosmetic,
      claimPassReward,
      updateProfile,
      buyBooster,
      unlockAchievement,
      addFriend,
      createTribe,
      joinTribe,
      sendMessage,
      addRankedPoints,
      markRankedQuizCompleted,
      updateSurvivalScore,
      buyPassPro,
      claimChest,
      buyChest,
      addChestRewards,
      updateWeekendQuest,
      activeChest,
      closeChest,
      claimDailyReward,
      buyRandomChest,
      updateSettings,
      updateTheme,
      buyFrame,
      buyBanner,
      buyEffect,
      buyMascot,
      buyShield,
      buyCustomBooster,
      buyPseudoEffect,
      addHistoryEntry,
      completeDailyQuiz,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress doit être utilisé à l'intérieur d'un ProgressProvider");
  }
  return context;
}

