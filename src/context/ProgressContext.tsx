"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createId,
  hashPassword,
  isKnownPlayer,
  KNOWN_PLAYER_SEEDS,
  mapLegacyClassToLearningLevel,
  normalizePseudo,
  type ColorBlindMode,
  type LearningLevel,
  verifyPassword,
} from "@/lib/quizzly-utils";

export type Quest = {
  id: string;
  title: string;
  target: number;
  current: number;
  xpReward: number;
  isCompleted: boolean;
};

type AudioSettings = {
  musicEnabled: boolean;
  musicVolume: number;
  effectsEnabled: boolean;
  effectsVolume: number;
  notificationsVolume: number;
};

type AccessibilitySettings = {
  highContrast: boolean;
  reducedMotion: boolean;
  colorBlindMode: ColorBlindMode;
};

type GameplaySettings = {
  quizTimerSeconds: number;
  learningLevel: LearningLevel;
};

type SocialSettings = {
  friendRequestsEnabled: boolean;
};

type NotificationSettings = {
  enabled: boolean;
  challenge: boolean;
  quest: boolean;
  streak: boolean;
  reminder: boolean;
  soundPreset: "calm" | "spark" | "pulse";
  effectPreset: "glow" | "pop" | "ring";
};

type SecurityState = {
  passwordSalt: string | null;
  passwordHash: string | null;
  lockEnabled: boolean;
};

type FriendContact = {
  id: string;
  pseudo: string;
  nickname: string;
  favorite: boolean;
  blocked: boolean;
  reported: boolean;
  requestStatus: "accepted" | "pending" | "none";
  lastInteractionAt?: string;
};

type SocialActivity = {
  id: string;
  user: string;
  type: "quiz_completed" | "level_up" | "join" | "achievement";
  detail: string;
  timestamp: string;
};

type Tribe = {
  id: string;
  name: string;
  members: string[];
  mascot: string;
  favorite?: boolean;
  archived?: boolean;
  blocked?: boolean;
  reported?: boolean;
  activities: SocialActivity[];
};

type SocialConversation = {
  id: string;
  type: "friend" | "tribe" | "system";
  title: string;
  archived: boolean;
  favorite: boolean;
  blocked: boolean;
  reported: boolean;
  muted: boolean;
  pinnedMessageId: string | null;
};

type SocialMessage = {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
  isSystem?: boolean;
  replyTo?: string | null;
  forwardedFrom?: string | null;
  favorite?: boolean;
  pinned?: boolean;
  reported?: boolean;
  deletedForSelf?: boolean;
  deletedForAll?: boolean;
  editedAt?: string | null;
};

type SettingsSchema = {
  audio: AudioSettings;
  accessibility: AccessibilitySettings;
  gameplay: GameplaySettings;
  social: SocialSettings;
  notifications: NotificationSettings;
};

type UserProgress = {
  schemaVersion: number;
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
  learningLevel: LearningLevel;
  xpBoost: number;
  unlockedAchievements: string[];
  friends: FriendContact[];
  tribes: Tribe[];
  conversations: Record<string, SocialConversation>;
  messages: Record<string, SocialMessage[]>;
  playerDirectory: string[];
  rankedPoints: number;
  rankedRank: "Apprenti" | "Etudiant" | "Expert" | "Savant" | "Génie";
  rankedCompletedQuizzes: string[];
  survivalHighScore: number;
  survivalTotalXP: number;
  isPassPro: boolean;
  unlockedTitles: string[];
  selectedTitle: string;
  chests: string[];
  settings: SettingsSchema;
  security: SecurityState;
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
  streakDays: string[];
  history: { id: string; date: string; type: "classic" | "ranked" | "survival" | "duel" | "blitz" | "vrai_faux" | "visuel"; score: number; maxScore: number; title: string }[];
  selectedTheme: string;
  selectedPseudoEffect: string;
  unlockedPseudoEffects: string[];
  activeBoosters: { id: string; multiplier: number; expiresAt: string }[];
  lastDailyQuizDate: string | null;
  weeklyXP: number;
  league: "Débutant" | "Apprenti" | "Étudiant" | "Nouveau" | "Intello" | "HPI" | "Savant" | "Expert" | "Génie";
  lastWeeklyReset: string | null;
  customShortcuts: string[];
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
  buyCosmetic: (type: "avatar" | "theme", id: string, cost: number) => boolean;
  claimPassReward: (tier: number) => void;
  updateProfile: (data: Partial<UserProgress>) => void;
  buyBooster: (multiplier: number, cost: number) => boolean;
  unlockAchievement: (id: string) => void;
  addFriend: (pseudo: string) => boolean;
  updateFriend: (friendId: string, patch: Partial<FriendContact>) => void;
  removeFriend: (friendId: string) => void;
  createTribe: (name: string) => void;
  joinTribe: (id: string) => void;
  updateConversation: (chatId: string, patch: Partial<SocialConversation>) => void;
  sendMessage: (chatId: string, text: string, options?: { replyTo?: string; forwardedFrom?: string; isSystem?: boolean; pinned?: boolean; favorite?: boolean }) => string;
  updateMessage: (chatId: string, messageId: string, patch: Partial<SocialMessage>) => void;
  addRankedPoints: (amount: number) => void;
  markRankedQuizCompleted: (quizId: string) => void;
  updateSurvivalScore: (score: number) => void;
  buyPassPro: () => boolean;
  claimChest: (type: string) => void;
  buyChest: (type: string, cost: number) => boolean;
  addChestRewards: (type: string) => void;
  activeChest: { type: string; isOpen: boolean } | null;
  closeChest: () => void;
  claimDailyReward: () => boolean;
  buyRandomChest: (cost: number) => boolean;
  updateSettings: (s: Partial<SettingsSchema>) => void;
  updateTheme: (theme: string) => void;
  buyFrame: (id: string, cost: number) => boolean;
  buyBanner: (id: string, cost: number) => boolean;
  buyEffect: (id: string, cost: number) => boolean;
  buyMascot: (id: string, cost: number) => boolean;
  buyShield: (days: number, cost: number) => boolean;
  buyCustomBooster: (multiplier: number, minutes: number, cost: number) => boolean;
  buyPseudoEffect: (id: string, cost: number) => boolean;
  addHistoryEntry: (entry: { id: string; type: "classic" | "ranked" | "survival" | "duel" | "blitz" | "vrai_faux" | "visuel"; score: number; maxScore: number; title: string }) => void;
  completeDailyQuiz: () => boolean;
  setAccountPassword: (password: string) => Promise<boolean>;
  unlockAccount: (password: string) => Promise<boolean>;
  changeAccountPassword: (currentPassword: string, nextPassword: string) => Promise<boolean>;
  reorderShortcuts: (newOrder: string[]) => void;
  addTribeActivity: (tribeId: string, activity: Omit<SocialActivity, "id" | "timestamp">) => void;
};

const storageKey = "quizzly_progress";
const sessionUnlockKey = "quizzly_account_unlocked";

const defaultQuests: Quest[] = [
  { id: "q_daily_1", title: "Terminer 1 quiz", target: 1, current: 0, xpReward: 20, isCompleted: false },
  { id: "q_daily_2", title: "Faire un sans-faute", target: 1, current: 0, xpReward: 50, isCompleted: false },
  { id: "q_daily_3", title: "Gagner 100 XP", target: 100, current: 0, xpReward: 30, isCompleted: false },
  { id: "q_weekly_1", title: "Terminer 10 quiz", target: 10, current: 0, xpReward: 200, isCompleted: false },
  { id: "q_weekly_2", title: "Série de 3 jours", target: 3, current: 0, xpReward: 150, isCompleted: false },
];

const createDefaultSettings = (): SettingsSchema => ({
  audio: {
    musicEnabled: true,
    musicVolume: 0.8,
    effectsEnabled: true,
    effectsVolume: 0.8,
    notificationsVolume: 0.7,
  },
  accessibility: {
    highContrast: false,
    reducedMotion: false,
    colorBlindMode: "default",
  },
  gameplay: {
    quizTimerSeconds: 0,
    learningLevel: "Débutant",
  },
  social: {
    friendRequestsEnabled: true,
  },
  notifications: {
    enabled: true,
    challenge: true,
    quest: true,
    streak: true,
    reminder: true,
    soundPreset: "spark",
    effectPreset: "glow",
  },
});

const createDefaultProgress = (): UserProgress => ({
  schemaVersion: 2,
  xp: 0,
  level: 1,
  streak: 1,
  crystals: 0,
  completedQuizzes: [],
  quests: defaultQuests.map((quest) => ({ ...quest })),
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
  learningLevel: "Débutant",
  xpBoost: 1,
  unlockedAchievements: [],
  friends: [],
  tribes: [],
  conversations: {},
  messages: {},
  playerDirectory: [...new Set(["Apprenti Quizzly", ...KNOWN_PLAYER_SEEDS])],
  rankedPoints: 0,
  rankedRank: "Apprenti",
  rankedCompletedQuizzes: [],
  survivalHighScore: 0,
  survivalTotalXP: 0,
  isPassPro: false,
  unlockedTitles: ["Petit Nouveau"],
  selectedTitle: "Petit Nouveau",
  chests: [],
  settings: createDefaultSettings(),
  security: {
    passwordSalt: null,
    passwordHash: null,
    lockEnabled: false,
  },
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
  league: "Débutant",
  lastWeeklyReset: null,
  customShortcuts: ["Maths-6eme", "Français", "Histoire-Géo", "SVT", "Physique", "Anglais"],
});

function clampVolume(value: unknown, fallback: number) {
  if (typeof value !== "number" || Number.isNaN(value)) return fallback;
  return Math.min(1, Math.max(0, value));
}

function computeLeague(weeklyXP: number): UserProgress["league"] {
  const thresholds: Array<[UserProgress["league"], number]> = [
    ["Débutant", 0],
    ["Apprenti", 500],
    ["Étudiant", 1500],
    ["Nouveau", 3000],
    ["Intello", 5000],
    ["HPI", 8000],
    ["Savant", 12000],
    ["Expert", 18000],
    ["Génie", 25000],
  ];

  return thresholds.reduce<UserProgress["league"]>((current, [league, threshold]) => {
    return weeklyXP >= threshold ? league : current;
  }, "Débutant");
}

function applyXpGain(prev: UserProgress, amount: number) {
  const finalAmount = amount * (prev.xpBoost || 1);
  let newXP = prev.xp + finalAmount;
  let newLevel = prev.level;
  let newCrystals = prev.crystals;

  while (newXP >= 100) {
    newLevel += 1;
    newXP -= 100;
    newCrystals += 50;
  }

  const weeklyXP = (prev.weeklyXP || 0) + finalAmount;
  const totalXPCumulated = newXP + (newLevel - 1) * 100;

  return {
    ...prev,
    xp: newXP,
    level: newLevel,
    crystals: newCrystals,
    weeklyXP,
    league: computeLeague(weeklyXP),
    passTier: Math.min(30, Math.floor(totalXPCumulated / 200) + 1),
  };
}

function normalizeSettings(rawSettings: unknown, selectedClass?: string): SettingsSchema {
  const base = createDefaultSettings();
  const settings = typeof rawSettings === "object" && rawSettings !== null ? (rawSettings as Record<string, unknown>) : {};
  const legacyAudio = typeof settings.audio === "object" && settings.audio !== null ? (settings.audio as Record<string, unknown>) : {};
  const legacyAccessibility = typeof settings.accessibility === "object" && settings.accessibility !== null ? (settings.accessibility as Record<string, unknown>) : {};
  const legacyGameplay = typeof settings.gameplay === "object" && settings.gameplay !== null ? (settings.gameplay as Record<string, unknown>) : {};
  const legacySocial = typeof settings.social === "object" && settings.social !== null ? (settings.social as Record<string, unknown>) : {};
  const legacyNotifications = typeof settings.notifications === "object" && settings.notifications !== null ? (settings.notifications as Record<string, unknown>) : {};

  return {
    audio: {
      musicEnabled: typeof legacyAudio.musicEnabled === "boolean" ? legacyAudio.musicEnabled : typeof settings.musicEnabled === "boolean" ? settings.musicEnabled : base.audio.musicEnabled,
      musicVolume: clampVolume(legacyAudio.musicVolume ?? settings.musicVolume, base.audio.musicVolume),
      effectsEnabled: typeof legacyAudio.effectsEnabled === "boolean" ? legacyAudio.effectsEnabled : typeof settings.soundEnabled === "boolean" ? settings.soundEnabled : base.audio.effectsEnabled,
      effectsVolume: clampVolume(legacyAudio.effectsVolume ?? settings.effectsVolume, base.audio.effectsVolume),
      notificationsVolume: clampVolume(legacyAudio.notificationsVolume ?? settings.notificationsVolume, base.audio.notificationsVolume),
    },
    accessibility: {
      highContrast: typeof legacyAccessibility.highContrast === "boolean" ? legacyAccessibility.highContrast : base.accessibility.highContrast,
      reducedMotion: typeof legacyAccessibility.reducedMotion === "boolean" ? legacyAccessibility.reducedMotion : base.accessibility.reducedMotion,
      colorBlindMode:
        legacyAccessibility.colorBlindMode === "protanopia" ||
        legacyAccessibility.colorBlindMode === "deuteranopia" ||
        legacyAccessibility.colorBlindMode === "tritanopia"
          ? legacyAccessibility.colorBlindMode
          : base.accessibility.colorBlindMode,
    },
    gameplay: {
      quizTimerSeconds: typeof legacyGameplay.quizTimerSeconds === "number" ? Math.max(0, Math.min(180, legacyGameplay.quizTimerSeconds)) : base.gameplay.quizTimerSeconds,
      learningLevel:
        typeof legacyGameplay.learningLevel === "string"
          ? (legacyGameplay.learningLevel as LearningLevel)
          : mapLegacyClassToLearningLevel(selectedClass || "6ème"),
    },
    social: {
      friendRequestsEnabled:
        typeof legacySocial.friendRequestsEnabled === "boolean"
          ? legacySocial.friendRequestsEnabled
          : typeof settings.friendRequestsEnabled === "boolean"
            ? settings.friendRequestsEnabled
            : base.social.friendRequestsEnabled,
    },
    notifications: {
      enabled: typeof legacyNotifications.enabled === "boolean" ? legacyNotifications.enabled : base.notifications.enabled,
      challenge: typeof legacyNotifications.challenge === "boolean" ? legacyNotifications.challenge : base.notifications.challenge,
      quest: typeof legacyNotifications.quest === "boolean" ? legacyNotifications.quest : base.notifications.quest,
      streak: typeof legacyNotifications.streak === "boolean" ? legacyNotifications.streak : base.notifications.streak,
      reminder: typeof legacyNotifications.reminder === "boolean" ? legacyNotifications.reminder : base.notifications.reminder,
      soundPreset:
        legacyNotifications.soundPreset === "calm" || legacyNotifications.soundPreset === "spark" || legacyNotifications.soundPreset === "pulse"
          ? legacyNotifications.soundPreset
          : base.notifications.soundPreset,
      effectPreset:
        legacyNotifications.effectPreset === "glow" || legacyNotifications.effectPreset === "pop" || legacyNotifications.effectPreset === "ring"
          ? legacyNotifications.effectPreset
          : base.notifications.effectPreset,
    },
  };
}

function normalizeFriends(rawFriends: unknown): FriendContact[] {
  if (!Array.isArray(rawFriends)) return [];

  return rawFriends
    .map((friend, index) => {
      if (typeof friend === "string") {
        return {
          id: normalizePseudo(friend) || `friend_${index}`,
          pseudo: friend,
          nickname: friend,
          favorite: false,
          blocked: false,
          reported: false,
          requestStatus: "accepted" as const,
        };
      }

      if (friend && typeof friend === "object") {
        const data = friend as Partial<FriendContact> & { pseudo?: string; name?: string };
        const pseudo = data.pseudo || data.name || `Ami ${index + 1}`;
        return {
          id: data.id || normalizePseudo(pseudo) || `friend_${index}`,
          pseudo,
          nickname: data.nickname || pseudo,
          favorite: Boolean(data.favorite),
          blocked: Boolean(data.blocked),
          reported: Boolean(data.reported),
          requestStatus: data.requestStatus || "accepted",
          lastInteractionAt: data.lastInteractionAt,
        };
      }

      return null;
    })
    .filter(Boolean) as FriendContact[];
}

function normalizeTribes(rawTribes: unknown): Tribe[] {
  if (!Array.isArray(rawTribes)) return [];

  return rawTribes
    .map((tribe, index) => {
      if (!tribe || typeof tribe !== "object") return null;
      const data = tribe as Partial<Tribe> & { name?: string; mascot?: string };
      const name = data.name || `Tribu ${index + 1}`;
      return {
        id: data.id || `tribe_${index + 1}`,
        name,
        members: Array.isArray(data.members) ? data.members.filter((member): member is string => typeof member === "string") : [],
        mascot: data.mascot || "🦁",
        favorite: Boolean(data.favorite),
        archived: Boolean(data.archived),
        blocked: Boolean(data.blocked),
        reported: Boolean(data.reported),
        activities: Array.isArray(data.activities) ? data.activities : [],
      };
    })
    .filter(Boolean) as Tribe[];
}

function normalizeMessages(rawMessages: unknown): Record<string, SocialMessage[]> {
  if (!rawMessages || typeof rawMessages !== "object") return {};

  return Object.entries(rawMessages as Record<string, unknown>).reduce<Record<string, SocialMessage[]>>((acc, [chatId, messages]) => {
    if (!Array.isArray(messages)) return acc;

    acc[chatId] = messages
      .map((message, index) => {
        if (!message || typeof message !== "object") return null;
        const data = message as Partial<SocialMessage> & { sender?: string; text?: string; timestamp?: string };
        return {
          id: data.id || createId(`${chatId}_${index}`),
          sender: data.sender || "Système",
          text: data.text || "",
          timestamp: data.timestamp || new Date().toISOString(),
          isSystem: Boolean(data.isSystem),
          replyTo: data.replyTo ?? null,
          forwardedFrom: data.forwardedFrom ?? null,
          favorite: Boolean(data.favorite),
          pinned: Boolean(data.pinned),
          reported: Boolean(data.reported),
          deletedForSelf: Boolean(data.deletedForSelf),
          deletedForAll: Boolean(data.deletedForAll),
          editedAt: data.editedAt ?? null,
        };
      })
      .filter(Boolean) as SocialMessage[];

    return acc;
  }, {});
}

function normalizeConversations(rawConversations: unknown, friends: FriendContact[], tribes: Tribe[], messages: Record<string, SocialMessage[]>) {
  const base: Record<string, SocialConversation> = {};
  const raw = rawConversations && typeof rawConversations === "object" ? (rawConversations as Record<string, Partial<SocialConversation>>) : {};

  friends.forEach((friend) => {
    base[friend.id] = {
      id: friend.id,
      type: "friend",
      title: friend.nickname || friend.pseudo,
      archived: false,
      favorite: friend.favorite,
      blocked: friend.blocked,
      reported: friend.reported,
      muted: false,
      pinnedMessageId: null,
    };
  });

  tribes.forEach((tribe) => {
    base[tribe.id] = {
      id: tribe.id,
      type: "tribe",
      title: tribe.name,
      archived: Boolean(tribe.archived),
      favorite: Boolean(tribe.favorite),
      blocked: Boolean(tribe.blocked),
      reported: Boolean(tribe.reported),
      muted: false,
      pinnedMessageId: null,
    };
  });

  Object.entries(messages).forEach(([chatId]) => {
    if (base[chatId]) return;
    base[chatId] = {
      id: chatId,
      type: chatId.startsWith("tribe_") ? "tribe" : "friend",
      title: chatId,
      archived: false,
      favorite: false,
      blocked: false,
      reported: false,
      muted: false,
      pinnedMessageId: null,
    };
  });

  Object.entries(raw).forEach(([chatId, conversation]) => {
    const fallback = base[chatId] || {
      id: chatId,
      type: chatId.startsWith("tribe_") ? "tribe" : "friend",
      title: chatId,
      archived: false,
      favorite: false,
      blocked: false,
      reported: false,
      muted: false,
      pinnedMessageId: null,
    };

    base[chatId] = {
      ...fallback,
      ...conversation,
      title: conversation.title || fallback.title,
      pinnedMessageId: conversation.pinnedMessageId ?? fallback.pinnedMessageId,
    };
  });

  return base;
}

function normalizeProgress(raw: unknown): UserProgress {
  const base = createDefaultProgress();
  if (!raw || typeof raw !== "object") return base;

  const parsed = raw as Record<string, unknown>;
  const selectedClass = typeof parsed.selectedClass === "string" ? parsed.selectedClass : base.selectedClass;
  const settings = normalizeSettings(parsed.settings, selectedClass);
  const friends = normalizeFriends(parsed.friends);
  const tribes = normalizeTribes(parsed.tribes);
  const messages = normalizeMessages(parsed.messages);
  const conversations = normalizeConversations(parsed.conversations, friends, tribes, messages);
  const learningLevel = typeof parsed.learningLevel === "string" ? (parsed.learningLevel as LearningLevel) : settings.gameplay.learningLevel;
  const selectedTitleRaw = typeof parsed.selectedTitle === "string" ? parsed.selectedTitle : base.selectedTitle;
  const unlockedTitlesRaw = Array.isArray(parsed.unlockedTitles) ? parsed.unlockedTitles.filter((title): title is string => typeof title === "string") : base.unlockedTitles;
  const unlockedTitles = unlockedTitlesRaw.length > 0 ? unlockedTitlesRaw : base.unlockedTitles;
  const selectedTitle = unlockedTitles.includes(selectedTitleRaw) ? selectedTitleRaw : unlockedTitles[0] || base.selectedTitle;
  const securityRaw = typeof parsed.security === "object" && parsed.security !== null ? (parsed.security as Record<string, unknown>) : {};

  const playerDirectory = [
    ...new Set([
      ...base.playerDirectory,
      ...(Array.isArray(parsed.playerDirectory) ? parsed.playerDirectory.filter((item): item is string => typeof item === "string") : []),
      ...(Array.isArray(parsed.friends)
        ? parsed.friends.flatMap((friend) =>
            typeof friend === "string"
              ? [friend]
              : friend && typeof friend === "object" && typeof (friend as Record<string, unknown>).pseudo === "string"
                ? [(friend as Record<string, unknown>).pseudo as string]
                : [],
          )
        : []),
      ...(Array.isArray(parsed.tribes)
        ? parsed.tribes.flatMap((tribe) => {
            if (!tribe || typeof tribe !== "object") return [];
            const members = (tribe as Record<string, unknown>).members;
            return Array.isArray(members) ? members.filter((member): member is string => typeof member === "string") : [];
          })
        : []),
      typeof parsed.pseudo === "string" ? parsed.pseudo : base.pseudo,
    ]),
  ];

  return {
    ...base,
    ...parsed,
    schemaVersion: 2,
    completedQuizzes: Array.isArray(parsed.completedQuizzes) ? parsed.completedQuizzes.filter((item): item is string => typeof item === "string") : base.completedQuizzes,
    quests: Array.isArray(parsed.quests)
      ? parsed.quests.map((quest) => ({
          id: typeof (quest as { id?: unknown }).id === "string" ? (quest as { id: string }).id : createId("quest"),
          title: typeof (quest as { title?: unknown }).title === "string" ? (quest as { title: string }).title : "Quête",
          target: typeof (quest as { target?: unknown }).target === "number" ? (quest as { target: number }).target : 1,
          current: typeof (quest as { current?: unknown }).current === "number" ? (quest as { current: number }).current : 0,
          xpReward: typeof (quest as { xpReward?: unknown }).xpReward === "number" ? (quest as { xpReward: number }).xpReward : 0,
          isCompleted: Boolean((quest as { isCompleted?: unknown }).isCompleted),
        }))
      : base.quests,
    friends,
    tribes,
    conversations,
    messages,
    playerDirectory,
    learningLevel,
    selectedClass,
    selectedTitle,
    unlockedTitles,
    settings,
    security: {
      passwordSalt: typeof securityRaw.passwordSalt === "string" ? securityRaw.passwordSalt : base.security.passwordSalt,
      passwordHash:
        typeof securityRaw.passwordHash === "string"
          ? securityRaw.passwordHash
          : typeof (parsed as Record<string, unknown>).passwordHash === "string"
            ? ((parsed as Record<string, unknown>).passwordHash as string)
            : base.security.passwordHash,
      lockEnabled:
        typeof securityRaw.lockEnabled === "boolean"
          ? securityRaw.lockEnabled
          : Boolean(typeof securityRaw.passwordHash === "string" || typeof (parsed as Record<string, unknown>).passwordHash === "string"),
    },
    unlockedPseudoEffects: Array.isArray(parsed.unlockedPseudoEffects) ? parsed.unlockedPseudoEffects.filter((item): item is string => typeof item === "string") : base.unlockedPseudoEffects,
    unlockedThemes: Array.isArray(parsed.unlockedThemes) ? parsed.unlockedThemes.filter((item): item is string => typeof item === "string") : base.unlockedThemes,
    unlockedAvatars: Array.isArray(parsed.unlockedAvatars) ? parsed.unlockedAvatars.filter((item): item is string => typeof item === "string") : base.unlockedAvatars,
    unlockedFrames: Array.isArray(parsed.unlockedFrames) ? parsed.unlockedFrames.filter((item): item is string => typeof item === "string") : base.unlockedFrames,
    unlockedBanners: Array.isArray(parsed.unlockedBanners) ? parsed.unlockedBanners.filter((item): item is string => typeof item === "string") : base.unlockedBanners,
    unlockedEffects: Array.isArray(parsed.unlockedEffects) ? parsed.unlockedEffects.filter((item): item is string => typeof item === "string") : base.unlockedEffects,
    unlockedMascots: Array.isArray(parsed.unlockedMascots) ? parsed.unlockedMascots.filter((item): item is string => typeof item === "string") : base.unlockedMascots,
    claimedPassRewards: Array.isArray(parsed.claimedPassRewards) ? parsed.claimedPassRewards.filter((item): item is number => typeof item === "number") : base.claimedPassRewards,
    activeBoosters: Array.isArray(parsed.activeBoosters)
      ? parsed.activeBoosters
          .map((booster) => ({
            id: typeof (booster as { id?: unknown }).id === "string" ? (booster as { id: string }).id : createId("boost"),
            multiplier: typeof (booster as { multiplier?: unknown }).multiplier === "number" ? (booster as { multiplier: number }).multiplier : 1,
            expiresAt: typeof (booster as { expiresAt?: unknown }).expiresAt === "string" ? (booster as { expiresAt: string }).expiresAt : new Date().toISOString(),
          }))
          .filter((booster) => Boolean(booster.id))
      : base.activeBoosters,
    customShortcuts: Array.isArray(parsed.customShortcuts) ? (parsed.customShortcuts.filter((s): s is string => typeof s === "string")) : base.customShortcuts,
  };
}

function createConversationFromChatId(chatId: string, progress: UserProgress): SocialConversation {
  if (chatId.startsWith("tribe_")) {
    const tribe = progress.tribes.find((entry) => entry.id === chatId);
    return {
      id: chatId,
      type: "tribe",
      title: tribe?.name || chatId,
      archived: Boolean(tribe?.archived),
      favorite: Boolean(tribe?.favorite),
      blocked: Boolean(tribe?.blocked),
      reported: Boolean(tribe?.reported),
      muted: false,
      pinnedMessageId: null,
    };
  }

  const friend = progress.friends.find((entry) => entry.id === chatId || normalizePseudo(entry.pseudo) === normalizePseudo(chatId));
  return {
    id: friend?.id || chatId,
    type: "friend",
    title: friend?.nickname || friend?.pseudo || chatId,
    archived: Boolean(friend?.blocked),
    favorite: Boolean(friend?.favorite),
    blocked: Boolean(friend?.blocked),
    reported: Boolean(friend?.reported),
    muted: false,
    pinnedMessageId: null,
  };
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window === "undefined") return createDefaultProgress();
    const saved = localStorage.getItem(storageKey);
    return saved ? normalizeProgress(JSON.parse(saved)) : createDefaultProgress();
  });
  const [activeChest, setActiveChest] = useState<{ type: string; isOpen: boolean } | null>(null);
  const [isLoaded] = useState(() => typeof window !== "undefined");

  const persist = (updated: UserProgress) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    }
    return updated;
  };

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [isLoaded, progress]);

  useEffect(() => {
    if (!isLoaded) return;

    const root = document.documentElement;
    root.setAttribute("data-theme", progress.selectedTheme || "light");
    root.setAttribute("data-high-contrast", progress.settings.accessibility.highContrast ? "true" : "false");
    root.setAttribute("data-reduced-motion", progress.settings.accessibility.reducedMotion ? "true" : "false");
    root.setAttribute("data-color-blind", progress.settings.accessibility.colorBlindMode);
    root.setAttribute("data-learning-level", progress.settings.gameplay.learningLevel);
  }, [
    isLoaded,
    progress.selectedTheme,
    progress.settings.accessibility.highContrast,
    progress.settings.accessibility.reducedMotion,
    progress.settings.accessibility.colorBlindMode,
    progress.settings.gameplay.learningLevel,
  ]);

  useEffect(() => {
    if (!isLoaded) return;

    const maintenance = () => {
      setProgress((prev) => {
        let updated = prev;
        const now = Date.now();

        if (updated.stars < 5) {
          const lastRegen = updated.lastStarRegen ? new Date(updated.lastStarRegen).getTime() : now;
          const starsToAdd = Math.floor((now - lastRegen) / (30 * 60 * 1000));
          if (starsToAdd > 0) {
            updated = {
              ...updated,
              stars: Math.min(5, updated.stars + starsToAdd),
              lastStarRegen: new Date(now).toISOString(),
            };
          }
        }

        if (updated.activeBoosters.length > 0) {
          const validBoosters = updated.activeBoosters.filter((booster) => new Date(booster.expiresAt).getTime() > now);
          if (validBoosters.length !== updated.activeBoosters.length) {
            updated = {
              ...updated,
              activeBoosters: validBoosters,
              xpBoost: Math.max(1, ...validBoosters.map((booster) => booster.multiplier), 1),
            };
          }
        }

        const today = new Date();
        const lastReset = updated.lastWeeklyReset ? new Date(updated.lastWeeklyReset) : new Date(0);
        const lastMonday = new Date(today);
        lastMonday.setDate(today.getDate() - ((today.getDay() + 6) % 7));
        lastMonday.setHours(0, 0, 0, 0);

        if (lastReset < lastMonday) {
          updated = {
            ...updated,
            weeklyXP: 0,
            league: "Débutant",
            lastWeeklyReset: today.toISOString(),
          };
        }

        if (updated !== prev) persist(updated);
        return updated;
      });
    };

    maintenance();
    const interval = setInterval(maintenance, 60000);
    return () => clearInterval(interval);
  }, [isLoaded]);

  const addXP = (amount: number) => {
    setProgress((prev) => persist(applyXpGain(prev, amount)));
  };

  const addCrystals = (amount: number) => {
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals + amount }));
  };

  const markQuizCompleted = (quizId: string, matiereId: string) => {
    setProgress((prev) => {
      if (prev.completedQuizzes.includes(quizId)) return prev;

      const updated: UserProgress = {
        ...prev,
        completedQuizzes: [...prev.completedQuizzes, quizId],
      };

      const today = new Date().toISOString().split("T")[0];
      if (updated.lastPlayDate !== today) {
        if (updated.lastPlayDate) {
          const last = new Date(updated.lastPlayDate);
          const current = new Date(today);
          const diffDays = Math.round((current.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            updated.streak += 1;
          } else if (diffDays > 1) {
            const shieldsNeeded = diffDays - 1;
            if (updated.shields >= shieldsNeeded) {
              updated.shields -= shieldsNeeded;
              updated.streak += 1;
            } else {
              updated.shields = 0;
              updated.streak = 1;
            }
          }
        } else {
          updated.streak = 1;
        }

        updated.lastPlayDate = today;
        updated.streakDays = [...new Set([...(updated.streakDays || []), today])];

        if (updated.streak > 0 && updated.streak % 30 === 0) {
          updated.stars = Math.min(5, updated.stars + 1);
          updated.crystals += 5;
        }
      }

      updated.quests = updated.quests.map((quest) => {
        if (quest.isCompleted) return quest;
        let current = quest.current;
        if (quest.id === "q_daily_1") current += 1;
        if (quest.id === "q_weekly_1") current += 1;
        if (quest.id === "q_weekly_2") current += 1;
        if (quest.id === "q_any_5" && matiereId) current += 1;
        return { ...quest, current };
      });

      return persist(updated);
    });
  };

  const claimQuestReward = (questId: string) => {
    setProgress((prev) => {
      const quest = prev.quests.find((entry) => entry.id === questId);
      if (!quest || quest.isCompleted || quest.current < quest.target) return prev;

      const updated: UserProgress = {
        ...prev,
        quests: prev.quests.map((entry) => (entry.id === questId ? { ...entry, isCompleted: true } : entry)),
      };

      return persist(applyXpGain(updated, quest.xpReward));
    });
  };

  const useStar = () => {
    if (progress.stars <= 0) return false;
    setProgress((prev) =>
      persist({
        ...prev,
        stars: Math.max(0, prev.stars - 1),
        lastStarRegen: prev.stars === 5 ? new Date().toISOString() : prev.lastStarRegen,
      }),
    );
    return true;
  };

  const buyStars = (amount: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals - cost, stars: Math.min(5, prev.stars + amount) }));
    return true;
  };

  const updateProfile = (data: Partial<UserProgress>) => {
    setProgress((prev) => {
      const merged: UserProgress = {
        ...prev,
        ...data,
        settings: data.settings
          ? {
              ...prev.settings,
              ...data.settings,
              audio: { ...prev.settings.audio, ...(data.settings.audio || {}) },
              accessibility: { ...prev.settings.accessibility, ...(data.settings.accessibility || {}) },
              gameplay: { ...prev.settings.gameplay, ...(data.settings.gameplay || {}) },
              social: { ...prev.settings.social, ...(data.settings.social || {}) },
              notifications: { ...prev.settings.notifications, ...(data.settings.notifications || {}) },
            }
          : prev.settings,
      };

      if (typeof data.learningLevel === "string") {
        merged.settings = {
          ...merged.settings,
          gameplay: {
            ...merged.settings.gameplay,
            learningLevel: data.learningLevel,
          },
        };
      }

      if (typeof data.selectedTitle === "string" && !merged.unlockedTitles.includes(data.selectedTitle)) {
        merged.unlockedTitles = [...merged.unlockedTitles, data.selectedTitle];
      }

      if (typeof data.pseudo === "string") {
        merged.playerDirectory = [...new Set([...merged.playerDirectory, data.pseudo])];
      }

      if (!merged.unlockedTitles.includes(merged.selectedTitle)) {
        merged.selectedTitle = merged.unlockedTitles[0] || "Petit Nouveau";
      }

      return persist(merged);
    });
  };

  const buyBooster = (multiplier: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals - cost, xpBoost: multiplier }));
    return true;
  };

  const unlockAchievement = (id: string) => {
    setProgress((prev) => {
      if (prev.unlockedAchievements.includes(id)) return prev;
      return persist({ ...prev, unlockedAchievements: [...prev.unlockedAchievements, id] });
    });
  };

  const addFriend = (pseudo: string) => {
    const cleanPseudo = pseudo.trim();
    if (!cleanPseudo) return false;
    if (!progress.settings.social.friendRequestsEnabled) return false;
    if (normalizePseudo(cleanPseudo) === normalizePseudo(progress.pseudo)) return false;
    if (!isKnownPlayer(cleanPseudo, progress.playerDirectory)) return false;

    let added = false;
    setProgress((prev) => {
      const existing = prev.friends.find((friend) => normalizePseudo(friend.pseudo) === normalizePseudo(cleanPseudo));
      if (existing) return prev;

      const newFriend: FriendContact = {
        id: normalizePseudo(cleanPseudo) || createId("friend"),
        pseudo: cleanPseudo,
        nickname: cleanPseudo,
        favorite: false,
        blocked: false,
        reported: false,
        requestStatus: "accepted",
        lastInteractionAt: new Date().toISOString(),
      };

      added = true;
      return persist({
        ...prev,
        friends: [...prev.friends, newFriend],
        conversations: {
          ...prev.conversations,
          [newFriend.id]: {
            id: newFriend.id,
            type: "friend",
            title: newFriend.nickname,
            archived: false,
            favorite: false,
            blocked: false,
            reported: false,
            muted: false,
            pinnedMessageId: null,
          },
        },
        playerDirectory: [...new Set([...prev.playerDirectory, cleanPseudo])],
      });
    });

    return added;
  };

  const updateFriend = (friendId: string, patch: Partial<FriendContact>) => {
    setProgress((prev) => {
      const updatedConversations = { ...prev.conversations };
      if (updatedConversations[friendId]) {
        updatedConversations[friendId] = {
          ...updatedConversations[friendId],
          title: patch.nickname || updatedConversations[friendId].title,
          favorite: typeof patch.favorite === "boolean" ? patch.favorite : updatedConversations[friendId].favorite,
          blocked: typeof patch.blocked === "boolean" ? patch.blocked : updatedConversations[friendId].blocked,
          reported: typeof patch.reported === "boolean" ? patch.reported : updatedConversations[friendId].reported,
        };
      }

      return persist({
        ...prev,
        friends: prev.friends.map((friend) => (friend.id === friendId ? { ...friend, ...patch } : friend)),
        conversations: updatedConversations,
      });
    });
  };

  const removeFriend = (friendId: string) => {
    setProgress((prev) => {
      const nextFriends = prev.friends.filter((friend) => friend.id !== friendId);
      const nextConversations = { ...prev.conversations };
      delete nextConversations[friendId];
      const nextMessages = { ...prev.messages };
      delete nextMessages[friendId];

      return persist({
        ...prev,
        friends: nextFriends,
        conversations: nextConversations,
        messages: nextMessages,
      });
    });
  };

  const createTribe = (name: string) => {
    const tribeId = `tribe_${Math.random().toString(36).slice(2, 10)}`;
    const mascots = ["🦁", "🦊", "🐘", "🦅", "🐺"];
    const mascot = mascots[Math.floor(Math.random() * mascots.length)];

    setProgress((prev) =>
      persist({
        ...prev,
        tribes: [...prev.tribes, { id: tribeId, name, members: [prev.pseudo], mascot, activities: [] }],
        conversations: {
          ...prev.conversations,
          [tribeId]: {
            id: tribeId,
            type: "tribe",
            title: name,
            archived: false,
            favorite: false,
            blocked: false,
            reported: false,
            muted: false,
            pinnedMessageId: null,
          },
        },
      }),
    );
  };

  const joinTribe = (id: string) => {
    setProgress((prev) => {
      const tribe = prev.tribes.find((entry) => entry.id === id);
      if (!tribe || tribe.members.includes(prev.pseudo)) return prev;
      return persist({
        ...prev,
        tribes: prev.tribes.map((entry) => (entry.id === id ? { ...entry, members: [...entry.members, prev.pseudo] } : entry)),
        conversations: {
          ...prev.conversations,
          [id]: prev.conversations[id] || {
            id,
            type: "tribe",
            title: tribe.name,
            archived: false,
            favorite: false,
            blocked: false,
            reported: false,
            muted: false,
            pinnedMessageId: null,
          },
        },
      });
    });
  };

  const updateConversation = (chatId: string, patch: Partial<SocialConversation>) => {
    setProgress((prev) => {
      const conversation = prev.conversations[chatId] || createConversationFromChatId(chatId, prev);
      return persist({
        ...prev,
        conversations: {
          ...prev.conversations,
          [chatId]: { ...conversation, ...patch },
        },
      });
    });
  };

  const sendMessage = (
    chatId: string,
    text: string,
    options?: { replyTo?: string; forwardedFrom?: string; isSystem?: boolean; pinned?: boolean; favorite?: boolean },
  ) => {
    const messageId = createId("msg");
    setProgress((prev) => {
      const conversation = prev.conversations[chatId] || createConversationFromChatId(chatId, prev);
      const newMessage: SocialMessage = {
        id: messageId,
        sender: options?.isSystem ? "Système" : prev.pseudo,
        text,
        timestamp: new Date().toISOString(),
        isSystem: Boolean(options?.isSystem),
        replyTo: options?.replyTo ?? null,
        forwardedFrom: options?.forwardedFrom ?? null,
        favorite: Boolean(options?.favorite),
        pinned: Boolean(options?.pinned),
        reported: false,
        deletedForSelf: false,
        deletedForAll: false,
        editedAt: null,
      };

      return persist({
        ...prev,
        conversations: {
          ...prev.conversations,
          [chatId]: {
            ...conversation,
            pinnedMessageId: options?.pinned ? messageId : conversation.pinnedMessageId,
          },
        },
        messages: {
          ...prev.messages,
          [chatId]: [...(prev.messages[chatId] || []), newMessage],
        },
      });
    });

    return messageId;
  };

  const updateMessage = (chatId: string, messageId: string, patch: Partial<SocialMessage>) => {
    setProgress((prev) => {
      const chatMessages = prev.messages[chatId] || [];
      const updatedMessages = chatMessages.map((message) => (message.id === messageId ? { ...message, ...patch } : message));
      return persist({
        ...prev,
        messages: {
          ...prev.messages,
          [chatId]: updatedMessages,
        },
        conversations: patch.pinned
          ? {
              ...prev.conversations,
              [chatId]: {
                ...(prev.conversations[chatId] || createConversationFromChatId(chatId, prev)),
                pinnedMessageId: messageId,
              },
            }
          : prev.conversations,
      });
    });
  };

  const isQuizCompleted = (quizId: string) => progress.completedQuizzes.includes(quizId);

  const addRankedPoints = (amount: number) => {
    setProgress((prev) => {
      const newPoints = prev.rankedPoints + amount;
      let newRank = prev.rankedRank;
      if (newPoints >= 6001) newRank = "Génie";
      else if (newPoints >= 3001) newRank = "Savant";
      else if (newPoints >= 1501) newRank = "Expert";
      else if (newPoints >= 501) newRank = "Etudiant";
      else newRank = "Apprenti";
      return persist({ ...prev, rankedPoints: newPoints, rankedRank: newRank });
    });
  };

  const markRankedQuizCompleted = (quizId: string) => {
    setProgress((prev) => {
      if (prev.rankedCompletedQuizzes.includes(quizId)) return prev;
      return persist({ ...prev, rankedCompletedQuizzes: [...prev.rankedCompletedQuizzes, quizId] });
    });
  };

  const updateSurvivalScore = (score: number) => {
    setProgress((prev) => persist({ ...prev, survivalHighScore: Math.max(prev.survivalHighScore, score), survivalTotalXP: prev.survivalTotalXP + score * 5 }));
  };

  const buyPassPro = () => {
    if (progress.crystals < 50 || progress.isPassPro) return false;
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals - 50, isPassPro: true }));
    return true;
  };

  const claimChest = (type: string) => {
    setActiveChest({ type, isOpen: true });
  };

  const buyChest = (type: string, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals - cost }));
    setActiveChest({ type, isOpen: true });
    return true;
  };

  const addChestRewards = (type: string) => {
    setProgress((prev) => {
      const updated = { ...prev };
      if (type === "Rare") updated.crystals += 100;
      else if (type === "Epique") {
        updated.crystals += 250;
        if (!updated.unlockedTitles.includes("Guerrier du Weekend")) updated.unlockedTitles.push("Guerrier du Weekend");
      } else if (type === "Mythique") {
        updated.crystals += 500;
        if (!updated.unlockedAvatars.includes("🔥")) updated.unlockedAvatars.push("🔥");
      } else if (type === "Légendaire") {
        updated.crystals += 1000;
        if (!updated.unlockedTitles.includes("Immortel")) updated.unlockedTitles.push("Immortel");
      } else if (type === "Ultra") {
        updated.crystals += 5000;
        if (!updated.unlockedAvatars.includes("✨")) updated.unlockedAvatars.push("✨");
        if (!updated.unlockedTitles.includes("Dieu du Quiz")) updated.unlockedTitles.push("Dieu du Quiz");
      }
      return persist(updated);
    });
  };

  const closeChest = () => setActiveChest(null);

  const claimDailyReward = () => {
    const today = new Date().toISOString().split("T")[0];
    if (progress.lastDailyRewardDate === today) return false;
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals + 5, dailyRewardClaimed: true, lastDailyRewardDate: today }));
    return true;
  };

  const buyRandomChest = (cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals - cost }));

    const roll = Math.random() * 100;
    let tier = "Rare";
    if (roll >= 99) tier = "Ultra";
    else if (roll >= 97) tier = "Légendaire";
    else if (roll >= 92) tier = "Mythique";
    else if (roll >= 80) tier = "Epique";

    setActiveChest({ type: tier, isOpen: true });
    return true;
  };

  const updateSettings = (s: Partial<SettingsSchema>) => {
    setProgress((prev) =>
      persist({
        ...prev,
        learningLevel: typeof s.gameplay?.learningLevel === "string" ? s.gameplay.learningLevel : prev.learningLevel,
        settings: {
          ...prev.settings,
          ...s,
          audio: { ...prev.settings.audio, ...(s.audio || {}) },
          accessibility: { ...prev.settings.accessibility, ...(s.accessibility || {}) },
          gameplay: { ...prev.settings.gameplay, ...(s.gameplay || {}) },
          social: { ...prev.settings.social, ...(s.social || {}) },
          notifications: { ...prev.settings.notifications, ...(s.notifications || {}) },
        },
      }),
    );
  };

  const updateTheme = (theme: string) => {
    setProgress((prev) => {
      if (!prev.unlockedThemes.includes(theme)) return prev;
      return persist({ ...prev, selectedTheme: theme });
    });
  };

  const buyGenericCosmetic = (field: string, unlockedField: string, id: string, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => {
      const unlocked = (prev as Record<string, unknown>)[unlockedField] as string[];
      if (unlocked.includes(id)) return prev;
      return persist({ ...prev, crystals: prev.crystals - cost, [unlockedField]: [...unlocked, id], [field]: id } as UserProgress);
    });
    return true;
  };

  const buyCosmetic = (type: "avatar" | "theme", id: string, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => {
      const updated = { ...prev, crystals: prev.crystals - cost };
      if (type === "avatar") {
        if (!updated.unlockedAvatars.includes(id)) updated.unlockedAvatars = [...updated.unlockedAvatars, id];
      } else if (!updated.unlockedThemes.includes(id)) {
        updated.unlockedThemes = [...updated.unlockedThemes, id];
      }
      return persist(updated);
    });
    return true;
  };

  const buyFrame = (id: string, cost: number) => buyGenericCosmetic("profileFrame", "unlockedFrames", id, cost);
  const buyBanner = (id: string, cost: number) => buyGenericCosmetic("profileBanner", "unlockedBanners", id, cost);
  const buyEffect = (id: string, cost: number) => buyGenericCosmetic("selectedEffect", "unlockedEffects", id, cost);
  const buyMascot = (id: string, cost: number) => buyGenericCosmetic("selectedMascot", "unlockedMascots", id, cost);
  const buyPseudoEffect = (id: string, cost: number) => buyGenericCosmetic("selectedPseudoEffect", "unlockedPseudoEffects", id, cost);

  const buyShield = (days: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => persist({ ...prev, crystals: prev.crystals - cost, shields: prev.shields + days }));
    return true;
  };

  const buyCustomBooster = (multiplier: number, minutes: number, cost: number) => {
    if (progress.crystals < cost) return false;
    setProgress((prev) => {
      const expiresAt = new Date(Date.now() + minutes * 60 * 1000).toISOString();
      const newBooster = { id: `boost_${Date.now()}`, multiplier, expiresAt };
      const updatedBoosters = [...prev.activeBoosters, newBooster];
      return persist({
        ...prev,
        crystals: prev.crystals - cost,
        activeBoosters: updatedBoosters,
        xpBoost: Math.max(1, ...updatedBoosters.map((booster) => booster.multiplier), 1),
      });
    });
    return true;
  };

  const claimPassReward = (tier: number) => {
    if (tier > progress.passTier || progress.claimedPassRewards.includes(tier)) return;

    setProgress((prev) => {
      const updated: UserProgress = { ...prev, claimedPassRewards: [...prev.claimedPassRewards, tier] };
      const rewards: Record<number, () => void> = {
        1: () => {
          updated.crystals += 50;
        },
        2: () => {
          if (!updated.unlockedTitles.includes("Major de Promo")) updated.unlockedTitles.push("Major de Promo");
        },
        3: () => {
          updated.stars = Math.min(5, updated.stars + 1);
        },
        4: () => {
          if (!updated.unlockedAvatars.includes("🎓")) updated.unlockedAvatars.push("🎓");
        },
        5: () => {
          updated.crystals += 100;
        },
        6: () => {
          updated.xpBoost = 1.5;
        },
        7: () => {
          if (!updated.unlockedTitles.includes("Petit Génie")) updated.unlockedTitles.push("Petit Génie");
        },
        8: () => {
          updated.stars = Math.min(5, updated.stars + 1);
        },
        9: () => {
          updated.crystals += 150;
        },
        10: () => {
          if (!updated.unlockedAvatars.includes("🧠")) updated.unlockedAvatars.push("🧠");
        },
        11: () => {
          if (!updated.unlockedTitles.includes("Chercheur")) updated.unlockedTitles.push("Chercheur");
        },
        12: () => {
          updated.crystals += 200;
        },
        13: () => {
          updated.stars = Math.min(5, updated.stars + 1);
        },
        14: () => {
          if (!updated.unlockedAvatars.includes("🦉")) updated.unlockedAvatars.push("🦉");
        },
        15: () => {
          if (!updated.unlockedTitles.includes("Expert")) updated.unlockedTitles.push("Expert");
        },
        16: () => {
          updated.crystals += 250;
        },
        17: () => {
          updated.xpBoost = 2;
        },
        18: () => {
          updated.stars = Math.min(5, updated.stars + 1);
        },
        19: () => {
          updated.crystals += 300;
        },
        20: () => {
          if (!updated.unlockedAvatars.includes("🦁")) updated.unlockedAvatars.push("🦁");
        },
        21: () => {
          if (!updated.unlockedTitles.includes("Maître")) updated.unlockedTitles.push("Maître");
        },
        22: () => {
          updated.crystals += 400;
        },
        23: () => {
          updated.stars = Math.min(5, updated.stars + 1);
        },
        24: () => {
          if (!updated.unlockedAvatars.includes("🐉")) updated.unlockedAvatars.push("🐉");
        },
        25: () => {
          if (!updated.unlockedTitles.includes("Légende")) updated.unlockedTitles.push("Légende");
        },
        26: () => {
          updated.crystals += 500;
        },
        27: () => {
          updated.xpBoost = 3;
        },
        28: () => {
          updated.stars = Math.min(5, updated.stars + 1);
        },
        29: () => {
          updated.crystals += 1000;
        },
        30: () => {
          if (!updated.unlockedAvatars.includes("👑")) updated.unlockedAvatars.push("👑");
        },
      };

      if (rewards[tier]) rewards[tier]();
      return persist(updated);
    });
  };

  const addHistoryEntry = (entry: { id: string; type: "classic" | "ranked" | "survival" | "duel" | "blitz" | "vrai_faux" | "visuel"; score: number; maxScore: number; title: string }) => {
    setProgress((prev) => persist({ ...prev, history: [{ ...entry, date: new Date().toISOString() }, ...(prev.history || [])].slice(0, 100) }));
  };

  const completeDailyQuiz = () => {
    const today = new Date().toISOString().split("T")[0];
    if (progress.lastDailyQuizDate === today) return false;
    setProgress((prev) => persist({ ...prev, lastDailyQuizDate: today }));
    return true;
  };

  const setAccountPassword = async (password: string) => {
    if (!password.trim()) return false;
    const { salt, hash } = await hashPassword(password);
    setProgress((prev) =>
      persist({
        ...prev,
        security: { passwordSalt: salt, passwordHash: hash, lockEnabled: true },
      }),
    );
    if (typeof window !== "undefined") sessionStorage.setItem(sessionUnlockKey, "1");
    return true;
  };

  const unlockAccount = async (password: string) => {
    if (!progress.security.passwordSalt || !progress.security.passwordHash) return false;
    const ok = await verifyPassword(password, progress.security.passwordSalt, progress.security.passwordHash);
    if (!ok) return false;
    if (typeof window !== "undefined") sessionStorage.setItem(sessionUnlockKey, "1");
    return true;
  };

  const changeAccountPassword = async (currentPassword: string, nextPassword: string) => {
    if (!progress.security.passwordSalt || !progress.security.passwordHash) return false;
    const verified = await verifyPassword(currentPassword, progress.security.passwordSalt, progress.security.passwordHash);
    if (!verified || !nextPassword.trim()) return false;
    const { salt, hash } = await hashPassword(nextPassword);
    setProgress((prev) =>
      persist({
        ...prev,
        security: { passwordSalt: salt, passwordHash: hash, lockEnabled: true },
      }),
    );
    if (typeof window !== "undefined") sessionStorage.setItem(sessionUnlockKey, "1");
    return true;
  };

  const reorderShortcuts = (newOrder: string[]) => {
    setProgress((prev) => persist({ ...prev, customShortcuts: newOrder }));
  };

  const addTribeActivity = (tribeId: string, activity: Omit<SocialActivity, "id" | "timestamp">) => {
    setProgress((prev) => {
      const tribe = prev.tribes.find((t) => t.id === tribeId);
      if (!tribe) return prev;

      const newActivity: SocialActivity = {
        ...activity,
        id: createId("act"),
        timestamp: new Date().toISOString(),
      };

      return persist({
        ...prev,
        tribes: prev.tribes.map((t) =>
          t.id === tribeId ? { ...t, activities: [newActivity, ...t.activities].slice(0, 50) } : t,
        ),
      });
    });
  };

  if (!isLoaded) {
    return <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-bold">Chargement de ton cerveau... 🧠</div>;
  }

  return (
    <ProgressContext.Provider
      value={{
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
        updateFriend,
        removeFriend,
        createTribe,
        joinTribe,
        updateConversation,
        sendMessage,
        updateMessage,
        addRankedPoints,
        markRankedQuizCompleted,
        updateSurvivalScore,
        buyPassPro,
        claimChest,
        buyChest,
        addChestRewards,
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
        setAccountPassword,
        unlockAccount,
        changeAccountPassword,
        reorderShortcuts,
        addTribeActivity,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
