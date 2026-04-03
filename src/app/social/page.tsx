/* eslint-disable react/no-unescaped-entities */
﻿"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { type FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";
import { isKnownPlayer } from "@/lib/quizzly-utils";
import { playUiSound } from "@/lib/quizzly-audio";

type SocialTab = "amis" | "tribus" | "messages";

const tabs: Array<{ id: SocialTab; label: string; icon: string }> = [
  { id: "amis", label: "Mes amis", icon: "🤝" },
  { id: "tribus", label: "Tribus", icon: "🏝️" },
  { id: "messages", label: "Discussions", icon: "💬" },
];

function formatTime(timestamp?: string | null) {
  if (!timestamp) return "À l'instant";
  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? "À l'instant" : date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function SocialPage() {
  const {
    progress,
    addFriend,
    createTribe,
    joinTribe,
    removeFriend,
    updateFriend,
    updateConversation,
    sendMessage,
    updateMessage,
  } = useProgress();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<SocialTab>("amis");
  const [searchPseudo, setSearchPseudo] = useState("");
  const [newTribeName, setNewTribeName] = useState("");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [replyToId, setReplyToId] = useState<string | null>(null);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [nicknameDrafts, setNicknameDrafts] = useState<Record<string, string>>({});
  const chatEndRef = useRef<HTMLDivElement>(null);

  const conversationEntries = useMemo(() => {
    return Object.values(progress.conversations)
      .map((conversation) => {
        const linkedFriend = progress.friends.find((friend) => friend.id === conversation.id) ?? null;
        const linkedTribe = progress.tribes.find((tribe) => tribe.id === conversation.id) ?? null;
        const messages = progress.messages[conversation.id] || [];
        const lastMessage = messages[messages.length - 1] ?? null;
        const preview = lastMessage
          ? lastMessage.deletedForAll
            ? "Message supprimé"
            : lastMessage.deletedForSelf
              ? "Masqué pour toi"
              : lastMessage.text
          : "Aucun message pour l’instant";

        return { conversation, linkedFriend, linkedTribe, messageCount: messages.length, lastMessage, preview };
      })
      .sort((left, right) => {
        const leftScore = Number(left.conversation.favorite) * 3 - Number(left.conversation.archived) - Number(left.conversation.blocked) * 2;
        const rightScore = Number(right.conversation.favorite) * 3 - Number(right.conversation.archived) - Number(right.conversation.blocked) * 2;
        if (leftScore !== rightScore) return rightScore - leftScore;

        const leftTime = left.lastMessage?.timestamp ? new Date(left.lastMessage.timestamp).getTime() : 0;
        const rightTime = right.lastMessage?.timestamp ? new Date(right.lastMessage.timestamp).getTime() : 0;
        return rightTime - leftTime;
      });
  }, [progress.conversations, progress.friends, progress.tribes, progress.messages]);

  const resolvedChatId = activeTab === "messages" ? selectedChat ?? conversationEntries[0]?.conversation.id ?? null : null;
  const activeChatId = resolvedChatId;

  const effectsVolume = progress.settings.audio.effectsEnabled ? progress.settings.audio.effectsVolume : 0;
  const reduceMotion = progress.settings.accessibility.reducedMotion;
  const friendRequestsEnabled = progress.settings.social.friendRequestsEnabled;

  const currentConversation = resolvedChatId ? progress.conversations[resolvedChatId] ?? null : null;
  const currentMessages = resolvedChatId ? progress.messages[resolvedChatId] || [] : [];
  const currentReplyMessage = replyToId ? currentMessages.find((message) => message.id === replyToId) ?? null : null;
  const currentEditingMessage = editingMessageId ? currentMessages.find((message) => message.id === editingMessageId) ?? null : null;
  const pinnedMessage = currentConversation?.pinnedMessageId ? currentMessages.find((message) => message.id === currentConversation.pinnedMessageId) ?? null : null;
  const myTribes = progress.tribes.filter((tribe) => tribe.members.includes(progress.pseudo));

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }, [currentMessages.length, reduceMotion, resolvedChatId]);

  const actionChipClass = "px-3 py-1.5 rounded-full bg-foreground/5 text-[9px] font-black uppercase tracking-widest hover:bg-foreground/10 transition-all hover:scale-105 active:scale-95 whitespace-nowrap";

  const feedback = (message: string, type: "success" | "error" | "info" = "info", sound: "success" | "error" | "tap" | "notify" | "challenge" | "quest" | "streak" = "tap") => {
    showToast(message, type);
    playUiSound(sound, effectsVolume);
  };

  const handleTabChange = (tab: SocialTab) => {
    setActiveTab(tab);
    if (tab !== "messages") {
      setSelectedChat(null);
      setReplyToId(null);
      setEditingMessageId(null);
      setMessageInput("");
    }
  };

  const openChat = (chatId: string) => {
    setSelectedChat(chatId);
    setReplyToId(null);
    setEditingMessageId(null);
    setMessageInput("");
    handleTabChange("messages");
  };

  const handleAddFriend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const pseudo = searchPseudo.trim();
    if (!pseudo) return;

    if (!friendRequestsEnabled) {
      feedback("Les demandes d&apos;amis sont désactivées dans les réglages.", "error", "error");
      return;
    }

    if (!isKnownPlayer(pseudo, progress.playerDirectory)) {
      feedback("Ce pseudo ne correspond à aucun joueur connu.", "error", "error");
      return;
    }

    const added = addFriend(pseudo);
    if (!added) {
      feedback("Impossible d'ajouter cet ami pour le moment.", "error", "error");
      return;
    }

    setSearchPseudo("");
    feedback(`Ami ajouté : ${pseudo} 🤝`, "success", "success");
  };

  const handleCreateTribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const tribeName = newTribeName.trim();
    if (!tribeName) return;

    createTribe(tribeName);
    setNewTribeName("");
    feedback(`Tribu créée : ${tribeName} 🏝️`, "success", "quest");
  };

  const handleSaveNickname = (friendId: string) => {
    const friend = progress.friends.find((entry) => entry.id === friendId);
    if (!friend) return;

    const nickname = (nicknameDrafts[friendId] ?? friend.nickname).trim();
    if (!nickname) {
      feedback("Le surnom ne peut pas être vide.", "error", "error");
      return;
    }

    updateFriend(friendId, { nickname });
    updateConversation(friendId, { title: nickname });
    feedback("Surnom enregistré.", "success", "tap");
  };

  const handleToggleFriendFavorite = (friendId: string) => {
    const friend = progress.friends.find((entry) => entry.id === friendId);
    if (!friend) return;

    updateFriend(friendId, { favorite: !friend.favorite });
    feedback(friend.favorite ? "Ami retiré des favoris." : "Ami ajouté aux favoris.", "info", "tap");
  };

  const handleToggleFriendBlock = (friendId: string) => {
    const friend = progress.friends.find((entry) => entry.id === friendId);
    if (!friend) return;

    const nextBlocked = !friend.blocked;
    updateFriend(friendId, { blocked: nextBlocked });
    updateConversation(friendId, { blocked: nextBlocked, archived: nextBlocked });
    feedback(nextBlocked ? "Ami bloqué." : "Ami débloqué.", "info", nextBlocked ? "error" : "tap");
  };

  const handleReportFriend = (friendId: string) => {
    updateFriend(friendId, { reported: true });
    updateConversation(friendId, { reported: true });
    feedback("Ami signalé localement.", "info", "notify");
  };

  const handleRemoveFriend = (friendId: string) => {
    const friend = progress.friends.find((entry) => entry.id === friendId);
    if (!friend) return;
    if (!window.confirm(`Supprimer ${friend.nickname} de tes amis ?`)) return;

    removeFriend(friendId);
    if (activeChatId === friendId) setSelectedChat(null);
    feedback("Ami supprimé.", "info", "error");
  };

  const patchConversation = (chatId: string, patch: { archived?: boolean; favorite?: boolean; blocked?: boolean; reported?: boolean }) => {
    updateConversation(chatId, patch);
  };

  const handleConversationFavorite = (chatId: string) => {
    const conversation = progress.conversations[chatId];
    if (!conversation) return;
    patchConversation(chatId, { favorite: !conversation.favorite });
    feedback(conversation.favorite ? "Conversation retirée des favoris." : "Conversation ajoutée aux favoris.", "info", "tap");
  };

  const handleConversationArchive = (chatId: string) => {
    const conversation = progress.conversations[chatId];
    if (!conversation) return;
    patchConversation(chatId, { archived: !conversation.archived });
    feedback(conversation.archived ? "Conversation désarchivée." : "Conversation archivée.", "info", "tap");
  };

  const handleConversationBlock = (chatId: string) => {
    const conversation = progress.conversations[chatId];
    if (!conversation) return;
    const nextBlocked = !conversation.blocked;
    patchConversation(chatId, { blocked: nextBlocked, archived: nextBlocked || conversation.archived });
    feedback(nextBlocked ? "Conversation bloquée." : "Conversation débloquée.", "info", nextBlocked ? "error" : "tap");
  };

  const handleConversationReport = (chatId: string) => {
    patchConversation(chatId, { reported: true });
    feedback("Conversation signalée localement.", "info", "notify");
  };

  const handleCopyMessage = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      feedback("Message copié.", "success", "tap");
    } catch {
      feedback("Impossible de copier le message.", "error", "error");
    }
  };

  const handleReplyMessage = (messageId: string) => {
    setEditingMessageId(null);
    setReplyToId(messageId);
    feedback("Réponse préparée.", "info", "tap");
  };

  const handleEditMessage = (messageId: string) => {
    const message = currentMessages.find((entry) => entry.id === messageId);
    if (!message || message.sender !== progress.pseudo || message.deletedForAll) return;

    setReplyToId(null);
    setEditingMessageId(messageId);
    setMessageInput(message.text);
    feedback("Modification du message.", "info", "tap");
  };

  const handleForwardMessage = (messageId: string) => {
    if (!activeChatId) return;
    const message = currentMessages.find((entry) => entry.id === messageId);
    if (!message || message.deletedForAll) return;

    sendMessage(activeChatId, message.text, { forwardedFrom: message.id });
    feedback("Message transféré.", "success", "notify");
  };

  const handlePinMessage = (messageId: string) => {
    if (!activeChatId) return;
    const message = currentMessages.find((entry) => entry.id === messageId);
    if (!message) return;

    const nextPinned = !message.pinned;
    updateMessage(activeChatId, messageId, { pinned: nextPinned });
    updateConversation(activeChatId, { pinnedMessageId: nextPinned ? messageId : null });
    feedback(nextPinned ? "Message épinglé." : "Message désépinglé.", "info", "tap");
  };

  const handleToggleMessageFavorite = (messageId: string) => {
    if (!activeChatId) return;
    const message = currentMessages.find((entry) => entry.id === messageId);
    if (!message) return;

    updateMessage(activeChatId, messageId, { favorite: !message.favorite });
    feedback(message.favorite ? "Message retiré des favoris." : "Message ajouté aux favoris.", "info", "tap");
  };

  const handleReportMessage = (messageId: string) => {
    if (!activeChatId) return;
    updateMessage(activeChatId, messageId, { reported: true });
    updateConversation(activeChatId, { reported: true });
    feedback("Message signalé localement.", "info", "notify");
  };

  const handleDeleteMessageForSelf = (messageId: string) => {
    if (!activeChatId) return;
    updateMessage(activeChatId, messageId, { deletedForSelf: true });
    feedback("Message masqué pour toi.", "info", "error");
  };

  const handleDeleteMessageForAll = (messageId: string) => {
    if (!activeChatId) return;
    const message = currentMessages.find((entry) => entry.id === messageId);
    if (!message) return;

    if (message.sender !== progress.pseudo) {
      handleDeleteMessageForSelf(messageId);
      return;
    }

    if (!window.confirm("Supprimer ce message pour tout le monde ?")) return;
    updateMessage(activeChatId, messageId, {
      deletedForSelf: true,
      deletedForAll: true,
      text: "Message supprimé",
    });
    feedback("Message supprimé pour tous.", "info", "error");
  };

  const handleCancelPreview = () => {
    setReplyToId(null);
    setEditingMessageId(null);
    setMessageInput("");
  };

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!activeChatId) return;
    if (currentConversation?.blocked) {
      feedback("Cette discussion est bloquée.", "error", "error");
      return;
    }

    const text = messageInput.trim();
    if (!text) return;

    if (editingMessageId) {
      updateMessage(activeChatId, editingMessageId, { text, editedAt: new Date().toISOString() });
      setEditingMessageId(null);
      setMessageInput("");
      setReplyToId(null);
      feedback("Message modifié.", "success", "success");
      return;
    }

    sendMessage(activeChatId, text, { replyTo: replyToId || undefined });
    setMessageInput("");
    setReplyToId(null);
    feedback("Message envoyé.", "success", "notify");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700 pb-32">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            Communauté locale
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 text-foreground/70 text-[10px] font-black uppercase tracking-[0.25em]">
            {progress.playerDirectory.length} joueurs connus
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 text-cyan text-[10px] font-black uppercase tracking-[0.25em]">
            {progress.settings.gameplay.quizTimerSeconds > 0 ? `${progress.settings.gameplay.quizTimerSeconds}s chrono` : "Chrono désactivé"}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">
              Social 🤝
            </h1>
            <p className="opacity-70 font-black uppercase tracking-[0.2em] text-xs">
              Amis, tribus et messages enrichis, sans backend mais avec du style ✨
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest">
            <span className="px-3 py-2 rounded-full bg-primary/10 text-primary">{progress.friends.length} amis</span>
            <span className="px-3 py-2 rounded-full bg-cyan/10 text-cyan">{progress.tribes.length} tribus</span>
            <span className="px-3 py-2 rounded-full bg-rose-500/10 text-rose-500">{conversationEntries.length} discussions</span>
            <span className="px-3 py-2 rounded-full bg-foreground/5 text-foreground/60">
              Demandes {friendRequestsEnabled ? "actives" : "coupées"}
            </span>
          </div>
        </div>
      </header>

      <div className="flex flex-wrap gap-2 p-1.5 bg-foreground/5 rounded-2xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-6 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
              activeTab === tab.id ? "bg-primary text-white shadow-lg shadow-primary/30" : "opacity-50 hover:opacity-100 hover:bg-foreground/5"
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === "amis" && (
              <motion.section
                key="amis"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
                className="glass p-8 space-y-8 min-h-[520px]"
              >
                <div className="flex flex-col gap-4 border-b border-primary/10 pb-6">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-space font-black flex items-center gap-3">
                        <span className="text-4xl text-primary">🤝</span> Mes amis
                      </h2>
                      <p className="text-xs font-black uppercase tracking-widest opacity-40 mt-2">
                        Tu peux ajouter seulement un pseudo qui correspond à un joueur connu.
                      </p>
                    </div>

                    <form onSubmit={handleAddFriend} className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        placeholder="Pseudo du joueur..."
                        value={searchPseudo}
                        onChange={(event) => setSearchPseudo(event.target.value)}
                        className="bg-foreground/5 px-5 py-3 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-primary/30 transition-all w-full sm:w-72"
                      />
                      <button
                        type="submit"
                        className="bg-primary text-white font-black px-6 py-3 rounded-xl text-sm transition-transform hover:scale-105 active:scale-95"
                      >
                        Ajouter
                      </button>
                    </form>
                  </div>

                  {!friendRequestsEnabled && (
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-sm font-bold text-amber-700">
                      Les demandes d'amis sont désactivées dans les réglages.
                    </div>
                  )}
                </div>

                {progress.friends.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 opacity-40 text-center">
                    <div className="text-8xl mb-6">🏜️</div>
                    <p className="font-black italic text-xl">
                      Tu n'as pas encore d'amis...
                      <br />
                      Invite ton entourage dès qu'un pseudo est connu.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    {progress.friends.map((friend) => {
                      const isSelected = activeChatId === friend.id;
                      return (
                        <motion.article
                          key={friend.id}
                          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                          className={`glass border-primary/5 p-5 space-y-4 transition-all ${isSelected ? "ring-2 ring-primary/20" : ""} ${friend.blocked ? "opacity-70 grayscale-[0.2]" : ""}`}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-center gap-4 min-w-0">
                              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                                👤
                              </div>
                              <div className="min-w-0">
                                <div className="font-black text-lg leading-none truncate">{friend.nickname}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mt-1 truncate">
                                  @{friend.pseudo}
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 justify-end">
                              {friend.favorite && <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[9px] font-black uppercase tracking-widest">Favori</span>}
                              {friend.blocked && <span className="px-2 py-1 rounded-full bg-rose-500/10 text-rose-600 text-[9px] font-black uppercase tracking-widest">Bloqué</span>}
                              {friend.reported && <span className="px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 text-[9px] font-black uppercase tracking-widest">Signalé</span>}
                            </div>
                          </div>

                          <div className="grid grid-cols-[1fr_auto] gap-2">
                            <input
                              value={nicknameDrafts[friend.id] ?? friend.nickname}
                              onChange={(event) => setNicknameDrafts((prev) => ({ ...prev, [friend.id]: event.target.value }))}
                              placeholder="Ajouter un surnom"
                              className="w-full rounded-2xl bg-foreground/5 px-4 py-3 text-sm font-bold outline-none border border-transparent focus:border-primary/20"
                            />
                            <button
                              type="button"
                              onClick={() => handleSaveNickname(friend.id)}
                              className="rounded-2xl bg-foreground/10 px-4 py-3 text-xs font-black uppercase tracking-widest hover:bg-foreground/15 transition-colors"
                            >
                              Sauver
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() => openChat(friend.id)}
                              className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform"
                            >
                              Discuter
                            </button>
                            <button
                              type="button"
                              onClick={() => handleToggleFriendFavorite(friend.id)}
                              className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors"
                            >
                              {friend.favorite ? "Retirer favori" : "Favori"}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleToggleFriendBlock(friend.id)}
                              className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors"
                            >
                              {friend.blocked ? "Débloquer" : "Bloquer"}
                            </button>
                            <button
                              type="button"
                              onClick={() => handleReportFriend(friend.id)}
                              className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors"
                            >
                              Signaler
                            </button>
                            <button
                              type="button"
                              onClick={() => handleRemoveFriend(friend.id)}
                              className="px-4 py-2 rounded-xl bg-rose-500/10 text-rose-600 text-xs font-black uppercase tracking-widest hover:bg-rose-500/15 transition-colors"
                            >
                              Supprimer
                            </button>
                          </div>
                        </motion.article>
                      );
                    })}
                  </div>
                )}
              </motion.section>
            )}

            {activeTab === "tribus" && (
              <motion.section
                key="tribus"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
                className="glass p-8 space-y-8 min-h-[520px]"
              >
                <div className="flex flex-col gap-4 border-b border-cyan/10 pb-6">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-space font-black flex items-center gap-3">
                        <span className="text-4xl text-cyan">🏝️</span> Tribus de connaissances
                      </h2>
                      <p className="text-xs font-black uppercase tracking-widest opacity-40 mt-2">
                        Crée une tribu, rejoins-en une, ou ouvre le salon de discussion.
                      </p>
                    </div>

                    <form onSubmit={handleCreateTribe} className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        placeholder="Nom de ta tribu..."
                        value={newTribeName}
                        onChange={(event) => setNewTribeName(event.target.value)}
                        className="bg-foreground/5 px-5 py-3 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-cyan/30 transition-all w-full sm:w-72"
                      />
                      <button
                        type="submit"
                        className="bg-cyan text-white font-black px-6 py-3 rounded-xl text-sm transition-transform hover:scale-105 active:scale-95"
                      >
                        Créer
                      </button>
                    </form>
                  </div>
                </div>

                {/* Flux d'activité (v0.8.0) */}
                {myTribes.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Activités récentes</h3>
                    <div className="flex flex-col gap-2">
                      {myTribes.flatMap(t => t.activities || []).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 5).map(activity => (
                        <div key={activity.id} className="flex items-center gap-3 glass p-3 border-cyan/5 text-xs">
                          <span className="text-lg">
                            {activity.type === 'achievement' ? '🎖️' : activity.type === 'quiz_completed' ? '🏆' : '✨'}
                          </span>
                          <div className="flex-1">
                            <span className="font-bold">{activity.user}</span> {activity.detail}
                          </div>
                          <span className="text-[9px] opacity-40 uppercase font-black">{new Date(activity.timestamp).toLocaleDateString()}</span>
                        </div>
                      ))}
                      {myTribes.every(t => !t.activities?.length) && (
                        <div className="text-[10px] opacity-30 italic">Aucune activité récente dans tes tribus.</div>
                      )}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {progress.tribes.map((tribe) => {
                    const conversation = progress.conversations[tribe.id];
                    const isMember = tribe.members.includes(progress.pseudo);
                    return (
                      <motion.article
                        key={tribe.id}
                        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        className={`glass border-cyan/10 p-5 space-y-4 transition-all ${activeChatId === tribe.id ? "ring-2 ring-cyan/20" : ""} ${conversation?.blocked ? "opacity-70 grayscale-[0.15]" : ""}`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4 min-w-0">
                            <div className="text-4xl shrink-0">{tribe.mascot || "🦁"}</div>
                            <div className="min-w-0">
                              <div className="font-black text-xl leading-none truncate">{tribe.name}</div>
                              <div className="text-[10px] font-black uppercase tracking-widest text-cyan/60 mt-1">
                                {tribe.members.length} membres
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 justify-end">
                            {conversation?.favorite && <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 text-[9px] font-black uppercase tracking-widest">Favori</span>}
                            {conversation?.archived && <span className="px-2 py-1 rounded-full bg-slate-500/10 text-slate-600 text-[9px] font-black uppercase tracking-widest">Archivé</span>}
                            {conversation?.blocked && <span className="px-2 py-1 rounded-full bg-rose-500/10 text-rose-600 text-[9px] font-black uppercase tracking-widest">Bloqué</span>}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              if (isMember) {
                                openChat(tribe.id);
                                return;
                              }

                              joinTribe(tribe.id);
                              feedback("Tu as rejoint cette tribu.", "success", "quest");
                              openChat(tribe.id);
                            }}
                            className="px-4 py-2 rounded-xl bg-cyan text-white text-xs font-black uppercase tracking-widest hover:scale-[1.02] transition-transform"
                          >
                            {isMember ? "Discuter" : "Rejoindre"}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleConversationFavorite(tribe.id)}
                            className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors"
                          >
                            {conversation?.favorite ? "Retirer favori" : "Favori"}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleConversationArchive(tribe.id)}
                            className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors"
                          >
                            {conversation?.archived ? "Désarchiver" : "Archiver"}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleConversationBlock(tribe.id)}
                            className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors"
                          >
                            {conversation?.blocked ? "Débloquer" : "Bloquer"}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleConversationReport(tribe.id)}
                            className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors"
                          >
                            Signaler
                          </button>
                        </div>
                      </motion.article>
                    );
                  })}

                  <div className="glass flex flex-col items-center justify-center p-8 border-dashed border-2 border-primary/20 opacity-70 min-h-[220px]">
                    <div className="text-4xl mb-4">✨</div>
                    <p className="font-black text-center text-sm mb-4">Ta tribu locale grandit au fil des discussions.</p>
                    <button
                      type="button"
                      onClick={() => feedback("Partage un quiz pour animer ta tribu.", "info", "challenge")}
                      className="text-[10px] font-black text-primary border border-primary/20 px-4 py-2 rounded-full uppercase tracking-tighter hover:bg-primary/5 transition-colors"
                    >
                      Défi partagé
                    </button>
                  </div>
                </div>
              </motion.section>
            )}
            {activeTab === "messages" && (
              <motion.section
                key="messages"
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -16 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 xl:grid-cols-[340px_minmax(0,1fr)] gap-6">
                  <div className="glass p-6 space-y-4 border-primary/10 min-h-[640px]">
                    <div className="flex items-center justify-between gap-3 border-b border-primary/10 pb-4">
                      <div>
                        <h2 className="text-2xl font-space font-black">Discussions</h2>
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-1">Favoris, archives et blocages</p>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-2 rounded-full">
                        {conversationEntries.length}
                      </span>
                    </div>

                    <div className="space-y-3 overflow-y-auto max-h-[560px] pr-1">
                      {conversationEntries.length === 0 ? (
                        <div className="rounded-3xl bg-foreground/5 p-6 text-center opacity-50">
                          Aucune discussion pour l'instant.
                        </div>
                      ) : (
                        conversationEntries.map(({ conversation, linkedFriend, linkedTribe, preview, messageCount }) => (
                          <motion.article
                            layout
                            key={conversation.id}
                            className={`rounded-3xl border p-5 space-y-4 transition-all duration-300 relative group/item ${
                              activeChatId === conversation.id 
                                ? "border-primary/40 bg-primary/10 shadow-lg shadow-primary/5" 
                                : "border-transparent bg-foreground/5 hover:bg-foreground/[0.08] hover:translate-x-1"
                            } ${conversation.blocked ? "opacity-60" : ""}`}
                          >
                            <button type="button" onClick={() => openChat(conversation.id)} className="w-full text-left">
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                  <div className="font-space font-black text-sm truncate flex items-center gap-2">
                                    {conversation.type === "tribe" ? "🏝️" : "👤"}
                                    {conversation.title || linkedFriend?.nickname || linkedTribe?.name || conversation.id}
                                  </div>
                                  <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mt-1.5 flex items-center gap-1.5">
                                    {conversation.type === "tribe" ? "Tribu" : conversation.type === "friend" ? "Ami" : "Système"} 
                                    <span className="w-1 h-1 rounded-full bg-foreground/20" />
                                    {messageCount} message(s)
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-1 justify-end shrink-0">
                                  {conversation.favorite && <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-amber-500/20 text-amber-600 text-[10px] animate-pulse">★</span>}
                                  {conversation.archived && <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-slate-500/20 text-slate-600 text-[10px]">A</span>}
                                  {conversation.blocked && <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-rose-500/20 text-rose-600 text-[10px]">⛔</span>}
                                </div>
                              </div>
                              <p className="text-[11px] font-medium opacity-50 mt-4 line-clamp-1 italic leading-relaxed">
                                {preview}
                              </p>
                            </button>

                            <div className="flex flex-wrap gap-1.5 pt-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                              <button type="button" onClick={() => handleConversationFavorite(conversation.id)} className="px-2.5 py-1.5 rounded-xl bg-white/80 text-[8px] font-black uppercase tracking-widest hover:bg-white transition-colors">
                                {conversation.favorite ? "Favori !" : "Favori"}
                              </button>
                              {!conversation.archived && (
                                <button type="button" onClick={() => handleConversationArchive(conversation.id)} className="px-2.5 py-1.5 rounded-xl bg-white/80 text-[8px] font-black uppercase tracking-widest hover:bg-white transition-colors">
                                  Archiver
                                </button>
                              )}
                            </div>
                          </motion.article>
                        ))
                      )}
                    </div>
                  </div>

                  <div className="glass p-0 flex flex-col min-h-[640px] border-primary/20 overflow-hidden shadow-2xl">
                    {!activeChatId || !currentConversation ? (
                      <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-12 opacity-50 text-center">
                        <div className="text-9xl mb-4 animate-bounce">💬</div>
                        <p className="text-2xl font-space font-black uppercase tracking-tighter italic">Sélectionne une discussion</p>
                        <p className="text-sm font-bold opacity-60 max-w-md">
                          Choisis un ami ou une tribu à gauche pour voir le fil, épingler des messages et gérer la discussion.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="p-6 border-b border-primary/10 flex flex-col gap-4 bg-white/40 backdrop-blur-xl sticky top-0 z-10">
                          <div className="flex justify-between items-center gap-4">
                            <div className="flex items-center gap-4 min-w-0">
                              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold shrink-0">
                                {currentConversation.type === "tribe" ? "🏝️" : currentConversation.type === "friend" ? "👤" : "⚙️"}
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-xl font-space font-black uppercase italic tracking-tighter leading-none truncate">
                                  {currentConversation.title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-green-600">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    En ligne localement
                                  </span>
                                  {currentConversation.favorite && <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-700 text-[9px] font-black uppercase tracking-widest">Favori</span>}
                                  {currentConversation.archived && <span className="px-2 py-1 rounded-full bg-slate-500/10 text-slate-700 text-[9px] font-black uppercase tracking-widest">Archivé</span>}
                                  {currentConversation.blocked && <span className="px-2 py-1 rounded-full bg-rose-500/10 text-rose-700 text-[9px] font-black uppercase tracking-widest">Bloqué</span>}
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => setSelectedChat(null)}
                              className="text-xs font-black opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest"
                            >
                              Fermer ✕
                            </button>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            <button type="button" onClick={() => handleConversationFavorite(currentConversation.id)} className="px-4 py-2 rounded-full bg-foreground/5 text-[10px] font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors">
                              {currentConversation.favorite ? "Retirer favori" : "Favori"}
                            </button>
                            <button type="button" onClick={() => handleConversationArchive(currentConversation.id)} className="px-4 py-2 rounded-full bg-foreground/5 text-[10px] font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors">
                              {currentConversation.archived ? "Désarchiver" : "Archiver"}
                            </button>
                            <button type="button" onClick={() => handleConversationBlock(currentConversation.id)} className="px-4 py-2 rounded-full bg-foreground/5 text-[10px] font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors">
                              {currentConversation.blocked ? "Débloquer" : "Bloquer"}
                            </button>
                            <button type="button" onClick={() => handleConversationReport(currentConversation.id)} className="px-4 py-2 rounded-full bg-foreground/5 text-[10px] font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors">
                              Signaler
                            </button>
                          </div>

                          {pinnedMessage && (
                            <div className="rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-medium">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-1">Message épinglé</div>
                              <div className="line-clamp-2">
                                {pinnedMessage.deletedForAll ? "Message supprimé" : pinnedMessage.deletedForSelf ? "Message masqué" : pinnedMessage.text}
                              </div>
                            </div>
                          )}

                          {currentConversation.blocked && (
                            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm font-bold text-rose-700">
                              Cette conversation est bloquée. Tu peux lire l'historique, mais l'envoi est désactivé.
                            </div>
                          )}
                        </div>

                        <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[480px] scrollbar-hide bg-foreground/[0.01] backdrop-blur-3xl custom-scrollbar">
                          {currentMessages.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-20 opacity-30 text-center animate-in zoom-in duration-1000">
                              <div className="text-6xl mb-4">✨</div>
                              <p className="font-space font-black uppercase tracking-widest italic">Début de l&apos;aventure...</p>
                            </div>
                          )}

                          <AnimatePresence initial={false}>
                            {currentMessages.map((message, index) => {
                              const isMine = message.sender === progress.pseudo || message.sender === "Système";
                              const replySource = message.replyTo ? currentMessages.find((entry) => entry.id === message.replyTo) ?? null : null;
                              const bubbleText = message.deletedForAll ? "Message supprimé pour tout le monde" : message.deletedForSelf ? "Message supprimé pour toi" : message.text;

                              return (
                                <motion.div
                                  key={message.id}
                                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                                  animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                                  transition={{ delay: index * 0.05, duration: 0.4, type: "spring", stiffness: 100 }}
                                  className={`flex flex-col group ${isMine ? "items-end" : "items-start"}`}
                                >
                                  <div className="text-[9px] font-black uppercase tracking-[0.2em] mb-2 opacity-50 mx-4 flex items-center gap-2">
                                    {isMine ? "Toi" : message.sender}
                                    {message.editedAt && <span className="w-1 h-1 rounded-full bg-primary/40" />}
                                    {message.editedAt && <span className="opacity-60 italic">Modifié</span>}
                                  </div>

                                  <div className={`relative max-w-[85%] p-5 rounded-[2rem] text-sm font-bold shadow-2xl transition-all hover:scale-[1.01] ${
                                    isMine 
                                      ? "bg-gradient-to-br from-primary to-violet text-white rounded-tr-none shadow-primary/20" 
                                      : "glass bg-white/70 text-foreground border-white/50 rounded-tl-none shadow-black/5"
                                  } ${message.favorite ? "ring-2 ring-amber-500/40 ring-offset-2 ring-offset-background" : ""}`}>
                                    
                                    {replySource && (
                                      <div className={`mb-4 rounded-2xl px-4 py-3 text-[10px] font-black uppercase tracking-widest border-l-4 ${
                                        isMine ? "bg-white/10 border-white/40" : "bg-primary/5 border-primary/40"
                                      }`}>
                                        <div className="opacity-60 mb-1 flex items-center gap-2">
                                          <span>↩️</span> Réponse à {replySource.sender}
                                        </div>
                                        <div className="normal-case font-bold tracking-normal line-clamp-1">
                                          {replySource.deletedForAll ? "Message supprimé" : replySource.deletedForSelf ? "Message masqué" : replySource.text}
                                        </div>
                                      </div>
                                    )}

                                    {message.forwardedFrom && (
                                      <div className={`mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] ${isMine ? "text-white/60" : "text-primary/60"}`}>
                                        <span>↪️</span> Transféré
                                      </div>
                                    )}

                                    <div className={`leading-relaxed ${message.deletedForAll || message.deletedForSelf ? "italic opacity-60 font-medium" : ""}`}>
                                      {bubbleText}
                                    </div>

                                    <div className={`mt-3 flex items-center justify-between gap-4 text-[8px] font-black uppercase tracking-widest ${isMine ? "text-white/50" : "text-foreground/30"}`}>
                                      <span>{formatTime(message.timestamp)}</span>
                                      {message.pinned && <span className="text-sm">📌</span>}
                                    </div>
                                  </div>

                                  {!message.deletedForAll && !message.deletedForSelf && (
                                    <div className="flex flex-wrap gap-1.5 mt-3 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300">
                                      <button type="button" onClick={() => handleCopyMessage(message.text)} className={actionChipClass}>Copier</button>
                                      <button type="button" onClick={() => handleReplyMessage(message.id)} className={actionChipClass}>Répondre</button>
                                      <button type="button" onClick={() => handleForwardMessage(message.id)} className={actionChipClass}>Transférer</button>
                                      <button type="button" onClick={() => handleToggleMessageFavorite(message.id)} className={`${actionChipClass} !text-amber-600 !bg-amber-500/10`}>
                                        {message.favorite ? "Favori !" : "Favori"}
                                      </button>
                                      <button type="button" onClick={() => handlePinMessage(message.id)} className={actionChipClass}>
                                        {message.pinned ? "Désépingler" : "Épingler"}
                                      </button>
                                      {message.sender === progress.pseudo && !message.deletedForAll && (
                                        <button type="button" onClick={() => handleEditMessage(message.id)} className={actionChipClass}>Modifier</button>
                                      )}
                                      <button type="button" onClick={() => handleReportMessage(message.id)} className={actionChipClass}>Signaler</button>
                                      <button type="button" onClick={() => handleDeleteMessageForSelf(message.id)} className={`${actionChipClass} !text-rose-600 !bg-rose-500/10`}>Supprimer</button>
                                      {message.sender === progress.pseudo && (
                                        <button type="button" onClick={() => handleDeleteMessageForAll(message.id)} className={`${actionChipClass} !text-rose-600 !bg-rose-500/10 font-black`}>X ALL</button>
                                      )}
                                    </div>
                                  )}
                                </motion.div>
                              );
                            })}
                          </AnimatePresence>

                          <div ref={chatEndRef} />
                        </div>

                        <form onSubmit={handleSendMessage} className="p-5 bg-white border-t border-primary/10 space-y-3">
                          {(currentReplyMessage || currentEditingMessage) && (
                            <div className="flex items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-primary/5 px-4 py-3">
                              <div className="min-w-0">
                                {currentEditingMessage ? (
                                  <>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">Modification en cours</div>
                                    <div className="truncate text-sm font-bold">{currentEditingMessage.text}</div>
                                  </>
                                ) : (
                                  <>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/60">Réponse à</div>
                                    <div className="truncate text-sm font-bold">
                                      {currentReplyMessage?.sender} · {currentReplyMessage?.text}
                                    </div>
                                  </>
                                )}
                              </div>
                              <button type="button" onClick={handleCancelPreview} className="text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-70 transition-opacity">
                                Annuler
                              </button>
                            </div>
                          )}

                          <div className="flex gap-4">
                            <input
                              type="text"
                              value={messageInput}
                              onChange={(event) => setMessageInput(event.target.value)}
                              placeholder={currentConversation?.blocked ? "Conversation bloquée..." : "Écris ton message..."}
                              disabled={Boolean(currentConversation?.blocked)}
                              className="flex-1 bg-foreground/5 px-6 py-4 rounded-3xl font-bold outline-none border-2 border-transparent focus:border-primary/20 transition-all text-sm shadow-inner disabled:opacity-50"
                            />
                            <button
                              type="submit"
                              disabled={Boolean(currentConversation?.blocked)}
                              className="w-20 rounded-3xl bg-primary text-white flex items-center justify-center text-xl shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                            >
                              {currentEditingMessage ? "✓" : "🚀"}
                            </button>
                          </div>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        <div className="space-y-6">
          <section className="glass p-8 border-primary/10 shadow-xl overflow-hidden relative group">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-primary/60 mb-5">Infos locales</h3>

            <div className="space-y-4 text-sm">
              <div className="rounded-2xl bg-foreground/5 px-4 py-3">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Titre équipé</div>
                <div className="font-black mt-1">{progress.selectedTitle}</div>
              </div>

              <div className="rounded-2xl bg-foreground/5 px-4 py-3">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Chronomètre</div>
                <div className="font-black mt-1">{progress.settings.gameplay.quizTimerSeconds > 0 ? `${progress.settings.gameplay.quizTimerSeconds} secondes` : "Désactivé"}</div>
              </div>

              <div className="rounded-2xl bg-foreground/5 px-4 py-3">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Audio</div>
                <div className="font-black mt-1">
                  Musique {Math.round(progress.settings.audio.musicVolume * 100)}% • Effets {Math.round(progress.settings.audio.effectsVolume * 100)}%
                </div>
              </div>

              <div className="rounded-2xl bg-foreground/5 px-4 py-3">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">Sécurité</div>
                <div className="font-black mt-1">{progress.security.lockEnabled ? "Verrouillage actif" : "Compte libre"}</div>
              </div>
            </div>
          </section>

          <section className="glass p-8 bg-gradient-to-br from-primary/5 to-cyan/5 border-white/40 shadow-xl border-2">
            <h3 className="text-xl font-space font-black italic tracking-tighter mb-4">🏆 Défi partagé</h3>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-6">
              Envoie un score ou un message pour faire vivre ta tribu.
            </p>
            <button
              type="button"
              onClick={() => {
                const tribeId = myTribes[0]?.id || progress.tribes[0]?.id;
                if (!tribeId) {
                  feedback("Crée d'abord une tribu pour partager un score.", "error", "error");
                  return;
                }
                sendMessage(tribeId, `Vient de lancer un défi social local dans Quizzly. ${progress.pseudo} est chaud ! 🏅`, { isSystem: true, pinned: false });
                feedback("Message partagé avec ta tribu.", "success", "challenge");
              }}
              className="w-full py-4 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all"
            >
              Partager un score 📣
            </button>
          </section>

          <section className="glass p-8 border-foreground/10 shadow-xl">
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-foreground/60 mb-4">Pistes utiles</h3>
            <div className="space-y-3 text-[11px] font-bold leading-relaxed opacity-70">
              <p>• Les pseudos inconnus sont refusés automatiquement.</p>
              <p>• Les messages peuvent être copiés, modifiés, signalés, épinglés ou transférés.</p>
              <p>• Les discussions peuvent être archivées, bloquées ou marquées en favori.</p>
              <p>• Le tout reste sauvegardé en local, sans backend.</p>
            </div>

            <Link href="/reglages" className="inline-flex mt-5 px-4 py-2 rounded-full bg-foreground/5 text-[10px] font-black uppercase tracking-widest hover:bg-foreground/10 transition-colors">
              Aller aux réglages
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
