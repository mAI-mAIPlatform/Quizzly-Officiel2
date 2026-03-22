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
  neurones: number;
  lastNeuroneRegen: string | null;
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
  messages: { [chatId: string]: { sender: string; text: string; timestamp: string }[] };
  rankedPoints: number;
  rankedRank: 'Apprenti' | 'Etudiant' | 'Expert' | 'Savant' | 'Génie';
  rankedCompletedQuizzes: string[];
  survivalHighScore: number;
  survivalTotalXP: number;
  isPassPro: boolean;
};

type ProgressContextType = {
  progress: UserProgress;
  addXP: (amount: number) => void;
  addCrystals: (amount: number) => void;
  markQuizCompleted: (quizId: string, matiereId: string) => void;
  isQuizCompleted: (quizId: string) => boolean;
  claimQuestReward: (questId: string) => void;
  useNeurone: () => boolean;
  buyNeurones: (amount: number, cost: number) => boolean;
  buyCosmetic: (type: 'avatar' | 'theme', id: string, cost: number) => boolean;
  claimPassReward: (tier: number) => void;
  updateProfile: (data: Partial<{ pseudo: string; bio: string; avatar: string; selectedClass: string }>) => void;
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
  neurones: 5,
  lastNeuroneRegen: null,
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
  isPassPro: false
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);
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
    
    // Check for neurone regeneration
    const checkRegen = () => {
      const now = Date.now();
      const saved = localStorage.getItem("quizzly_progress");
      
      if (saved) {
        const currentProgress = JSON.parse(saved);
        if (currentProgress.neurones < 5) {
          const lastTime = currentProgress.lastNeuroneRegen ? new Date(currentProgress.lastNeuroneRegen).getTime() : now;
          const diffMs = now - lastTime;
          const neuronesToAdd = Math.floor(diffMs / (30 * 60 * 1000)); // 1 neurone toutes les 30 min pour tester (au lieu de 2h)
          
          if (neuronesToAdd > 0) {
            currentProgress.neurones = Math.min(5, currentProgress.neurones + neuronesToAdd);
            currentProgress.lastNeuroneRegen = new Date(now).toISOString();
            setProgress(currentProgress);
            localStorage.setItem("quizzly_progress", JSON.stringify(currentProgress));
          }
        }
      }
    };

    checkRegen();
    const interval = setInterval(checkRegen, 60000); // Check every minute
    
    setIsLoaded(true);
    return () => clearInterval(interval);
  }, []);

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
      
      // Mini-logique pour le Pass (Tous les 200 XP cumulés - Max 20 paliers)
      const totalXPCumulated = newXP + (newLevel - 1) * 100;
      newProgress.passTier = Math.min(20, Math.floor(totalXPCumulated / 200) + 1);

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
            updated.streak = 1;
          }
        } else {
          updated.streak = 1;
        }
        updated.lastPlayDate = today;
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

  const useNeurone = () => {
    if (progress.neurones <= 0) return false;
    setProgress(prev => {
      const updated = { 
        ...prev, 
        neurones: prev.neurones - 1,
        lastNeuroneRegen: prev.neurones === 5 ? new Date().toISOString() : prev.lastNeuroneRegen 
      };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const buyNeurones = (amount: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress(prev => {
      const updated = { 
        ...prev, 
        crystals: prev.crystals - cost,
        neurones: Math.min(5, prev.neurones + amount)
      };
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
    return true;
  };

  const updateProfile = (data: Partial<{ pseudo: string; bio: string; avatar: string; selectedClass: string }>) => {
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
      
      // Determine reward based on tier (index = tier - 1)
      const i = tier - 1;
      if (i === 19) {
        // Lion de Légende (Avatar)
        if (!updated.unlockedAvatars.includes("🦁")) {
          updated.unlockedAvatars = [...updated.unlockedAvatars, "🦁"];
        }
      } else if (tier % 5 === 0) {
        // Gros Pack Diamants (ex: 250)
        updated.crystals += 250;
      } else if (tier % 2 === 0) {
        // 50 Diamants
        updated.crystals += 50;
      } else {
        // Neurone Bonus
        updated.neurones = Math.min(5, updated.neurones + 1);
      }
      
      localStorage.setItem("quizzly_progress", JSON.stringify(updated));
      return updated;
    });
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

  if (!isLoaded) return <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-bold">Chargement de ton cerveau... 🧠</div>;

  return (
    <ProgressContext.Provider value={{ 
      progress, 
      addXP, 
      addCrystals, 
      markQuizCompleted, 
      isQuizCompleted, 
      claimQuestReward,
      useNeurone,
      buyNeurones,
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
      buyPassPro
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
