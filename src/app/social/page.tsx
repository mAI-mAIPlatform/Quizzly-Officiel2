"use client";

/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialPage() {
  const { progress, addFriend, createTribe, joinTribe, sendMessage } = useProgress();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'amis' | 'tribus' | 'chat' | 'classement'>('amis');
  const [searchPseudo, setSearchPseudo] = useState("");
  const [newTribeName, setNewTribeName] = useState("");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchChat, setSearchChat] = useState("");
  const [searchTribe, setSearchTribe] = useState("");
  const [chatFilter, setChatFilter] = useState<'all' | 'user' | 'system'>('all');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [progress.messages, selectedChat]);

  const handleAddFriend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPseudo.trim()) return;
    addFriend(searchPseudo);
    setSearchPseudo("");
    showToast(`${searchPseudo} ajouté en ami ! 🤝`, "success");
  };

  const handleCreateTribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTribeName.trim()) return;
    createTribe(newTribeName);
    // Send system message
    const tribeId = `tribe_${Date.now()}`;
    showToast(`Tribu "${newTribeName}" créée ! 🏰`, "success");
    setNewTribeName("");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChat || !messageInput.trim()) return;
    sendMessage(selectedChat, messageInput);
    setMessageInput("");
  };

  const currentMessages = selectedChat ? (progress.messages[selectedChat] || []) : [];

  // Build dynamic activity feed
  const activityFeed = [
    { icon: "🌱", text: `Tu as rejoint la version v0.9.5`, time: "Aujourd'hui" },
    ...(progress.friends.length > 0 ? [{ icon: "✨", text: `Tu as ajouté ${progress.friends[progress.friends.length - 1]}`, time: "Récemment" }] : []),
    ...(progress.completedQuizzes.length > 0 ? [{ icon: "📝", text: `${progress.completedQuizzes.length} quiz complétés au total`, time: "Progression" }] : []),
    ...(progress.tribes.length > 0 ? [{ icon: "🏰", text: `Membre de ${progress.tribes[0].name}`, time: "Actif" }] : []),
    ...(progress.streak > 1 ? [{ icon: "🔥", text: `Série de ${progress.streak} jours d'affilée !`, time: "En cours" }] : []),
    ...(progress.level > 1 ? [{ icon: "⚡", text: `Niveau ${progress.level} atteint`, time: "Progression" }] : []),
  ];

  // Get all chatable targets
  const chatTargets = [
    ...progress.friends.map(f => ({ id: f, name: f, icon: "👤", type: "ami" })),
    ...progress.tribes.map(t => ({ id: t.id, name: t.name, icon: "🏰", type: "tribu" })),
  ];

  // Inter-Tribe Ranking (Simulated Data)
  const rankingTribes = [
    { id: "tr_1", name: "Les Érudits", mascot: "🦉", score: 14500, rank: 1 },
    { id: "tr_2", name: "Ordre du Dragon", mascot: "🐉", score: 12300, rank: 2 },
    { id: "tr_global", name: "Les Savants", mascot: "🌍", score: 9800, rank: 3 },
    { id: "tr_3", name: "L'Alliance", mascot: "⚔️", score: 8500, rank: 4 },
    { id: "tr_4", name: "Gardiens du Savoir", mascot: "🛡️", score: 7200, rank: 5 },
  ];

  // Current Weekly Challenge
  const weeklyChallenge = {
    title: "Le Régiment des Maths",
    description: "Terminez collectivement 500 quiz de mathématiques avant dimanche.",
    progress: 342,
    target: 500,
    reward: "Bannière 'Génie Mathématique' & 500 💎"
  };

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      <header className="space-y-2">
        <h1 className="text-6xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">SOCIAL 🤝</h1>
        <p className="opacity-70 font-black uppercase tracking-[0.2em] text-xs">Connecte-toi avec tes amis et rejoins des tribus.</p>
      </header>

      {/* Tabs */}
      <div className="flex gap-2 p-1.5 bg-foreground/5 rounded-2xl w-fit flex-wrap">
        {(['amis', 'tribus', 'classement', 'chat'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all focus:outline-none ${activeTab === tab ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'opacity-50 hover:opacity-100 hover:bg-foreground/5'}`}
          >
            {tab === 'amis' ? 'Mes Amis' : tab === 'tribus' ? 'Les Tribus' : tab === 'classement' ? 'Classement' : 'Messages'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <AnimatePresence mode="wait">
            {activeTab === 'amis' && (
              <motion.section 
                key="amis"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass p-8 space-y-8 min-h-[500px]"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-primary/10 pb-6">
                  <h2 className="text-3xl font-space font-black flex items-center gap-3">
                    <span className="text-4xl text-primary">🤝</span> Mes Amis ({progress.friends.length})
                  </h2>
                  <form onSubmit={handleAddFriend} className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Pseudo de ton ami..."
                      value={searchPseudo}
                      onChange={(e) => setSearchPseudo(e.target.value)}
                      className="bg-foreground/5 px-4 py-3 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-primary/30 transition-all w-48"
                    />
                    <button type="submit" className="bg-primary text-white font-black px-4 py-3 rounded-xl text-sm transition-transform hover:scale-105">AJOUTER +</button>
                  </form>
                </div>

                {progress.friends.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 opacity-40 text-center">
                    <div className="text-8xl mb-6">🏜️</div>
                    <p className="font-black italic text-xl">Tu n'as pas encore d'amis...<br/>Invite ton entourage !</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {progress.friends.map((friend) => (
                      <div key={friend} className="glass border-primary/5 p-6 flex justify-between items-center group hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">👤</div>
                          <div>
                            <div className="font-black text-lg leading-none">{friend}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">En ligne</div>
                          </div>
                        </div>
                        <button 
                          onClick={() => { setSelectedChat(friend); setActiveTab('chat'); }}
                          className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          💬
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </motion.section>
            )}

            {activeTab === 'tribus' && (
              <motion.section 
                key="tribus"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass p-8 space-y-8 min-h-[500px]"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-cyan/10 pb-6">
                  <h2 className="text-3xl font-space font-black flex items-center gap-3">
                    <span className="text-4xl text-cyan">🏰</span> Tribus
                  </h2>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Rechercher une tribu..."
                      value={searchTribe}
                      onChange={(e) => setSearchTribe(e.target.value)}
                      className="bg-foreground/5 px-4 py-3 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-cyan/30 transition-all w-48"
                    />
                    <form onSubmit={handleCreateTribe} className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="Créer..."
                        value={newTribeName}
                        onChange={(e) => setNewTribeName(e.target.value)}
                        className="bg-foreground/5 px-4 py-3 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-cyan/30 transition-all w-32"
                      />
                      <button type="submit" className="bg-cyan text-white font-black px-4 py-3 rounded-xl text-sm transition-transform hover:scale-105">+</button>
                    </form>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {progress.tribes
                    .filter(t => t.name.toLowerCase().includes(searchTribe.toLowerCase()))
                    .map((tribe) => (
                    <div key={tribe.id} className="glass border-cyan/10 p-8 flex flex-col gap-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 -mr-12 -mt-12 rounded-full transition-all group-hover:scale-110"></div>
                      <div className="flex justify-between items-start">
                        <div className="text-5xl">{tribe.mascot || "🦁"}</div>
                        <div className="text-xs font-black bg-cyan/10 text-cyan px-4 py-1.5 rounded-full uppercase tracking-widest">{tribe.members.length} membres</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-space font-black italic tracking-tighter uppercase text-cyan">{tribe.name}</h3>
                        <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest mt-1">Tribu Active</p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => { setSelectedChat(tribe.id); setActiveTab('chat'); }}
                          className="flex-1 bg-cyan text-white font-black py-4 rounded-2xl text-xs uppercase tracking-widest shadow-lg shadow-cyan/20 hover:scale-105 transition-transform"
                        >
                          DISCUTER 💬
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="glass flex flex-col items-center justify-center p-8 border-dashed border-2 border-primary/20 opacity-60">
                    <div className="text-4xl mb-4">✨</div>
                    <p className="font-black text-center text-sm mb-4">Rejoins la tribu mondiale des Savants</p>
                    <button 
                      onClick={() => { joinTribe("tribe_global"); showToast("Tu as rejoint les Savants ! 🌍", "success"); }}
                      className="text-[10px] font-black text-primary border border-primary/20 px-4 py-2 rounded-full uppercase tracking-tighter hover:bg-primary/5 transition-colors"
                    >
                      Rejoindre +
                    </button>
                  </div>
                </div>
              </motion.section>
            )}

            {activeTab === 'classement' && (
              <motion.section 
                key="classement"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass p-8 space-y-10 min-h-[500px]"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-primary/10 pb-6">
                  <div>
                    <h2 className="text-3xl font-space font-black flex items-center gap-3">
                      <span className="text-4xl text-amber-500">🏆</span> Ligues Hebdomadaires
                    </h2>
                    <p className="opacity-50 text-[10px] font-black uppercase tracking-widest mt-2">Saison Régulière — XP de la semaine</p>
                  </div>
                  <div className="bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20 text-center">
                    <div className="text-[10px] font-black uppercase opacity-40">Ma Ligue</div>
                    <div className="text-lg font-space font-black text-primary uppercase italic">{progress.league}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Ma Progression dans la ligue */}
                  <div className="glass p-8 bg-gradient-to-r from-primary/10 to-transparent border-primary/20 rounded-[2rem]">
                     <div className="flex justify-between items-end mb-4">
                        <div>
                          <div className="text-xs font-black uppercase opacity-40 mb-1">XP Gagné cette Semaine</div>
                          <div className="text-4xl font-space font-black tracking-tighter text-primary italic">{progress.weeklyXP} XP</div>
                        </div>
                     </div>
                     <div className="w-full h-3 bg-foreground/5 rounded-full overflow-hidden border border-foreground/5 p-0.5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, (progress.weeklyXP % 5000) / 5000 * 100)}%` }}
                          className="h-full bg-gradient-to-r from-primary to-cyan rounded-full"
                        />
                     </div>
                     <p className="text-[10px] font-bold opacity-50 mt-4 italic uppercase">Reset tous les lundis à 00:00 ⏰</p>
                  </div>

                  {/* List of leagues */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 mb-4">Hiérarchie des Ligues Quizzly</h3>
                    {['Génie', 'Expert', 'Savant', 'HPI', 'Intello', 'Nouveau', 'Étudiant', 'Apprenti', 'Débutant'].map((l, i) => (
                      <div key={l} className={`glass px-6 py-4 flex items-center justify-between border-l-4 transition-all ${progress.league === l ? 'border-primary bg-primary/5 scale-105 shadow-xl z-20' : 'border-l-transparent opacity-40'}`}>
                         <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">
                             {l === 'Génie' ? '👑' : l === 'Expert' ? '💎' : l === 'Savant' ? '🧪' : '🛡️'}
                           </div>
                           <span className="font-space font-black italic uppercase text-lg tracking-tighter">{l}</span>
                         </div>
                         {progress.league === l && (
                           <span className="text-[10px] bg-primary text-white px-3 py-1 rounded-full font-black uppercase shadow-lg shadow-primary/30">Votre Rang</span>
                         )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            )}

            {activeTab === 'chat' && (
              <motion.section 
                key="chat"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass p-0 flex flex-col min-h-[600px] border-primary/20 overflow-hidden shadow-2xl"
              >
                {!selectedChat ? (
                  <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-20">
                    <div className="text-9xl mb-4 opacity-20">💬</div>
                    <p className="text-2xl font-space font-black uppercase tracking-tighter italic opacity-40">Sélectionne une discussion</p>
                    
                    {/* Start new conversation */}
                    <div className="w-full max-w-md space-y-3 pt-8">
                      <p className="text-[10px] font-black uppercase tracking-widest opacity-40 text-center">Ou débute une nouvelle conversation :</p>
                      {chatTargets.length === 0 ? (
                        <p className="text-center text-sm opacity-40 italic">Ajoute des amis ou rejoins une tribu d'abord !</p>
                      ) : (
                        <div className="grid grid-cols-1 gap-2">
                          {chatTargets.map(target => (
                            <button
                              key={target.id}
                              onClick={() => setSelectedChat(target.id)}
                              className="flex items-center gap-3 p-4 glass rounded-2xl hover:bg-primary/5 transition-all text-left group"
                            >
                              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-lg">{target.icon}</div>
                              <div className="flex-1">
                                <div className="font-black text-sm">{target.name}</div>
                                <div className="text-[9px] font-bold uppercase tracking-widest opacity-40">{target.type}</div>
                              </div>
                              <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-black text-xs">OUVRIR →</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-6 border-b border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/40 backdrop-blur-xl sticky top-0 z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold">
                          {selectedChat.startsWith('tribe_') ? '🏰' : '👤'}
                        </div>
                        <div>
                          <h3 className="text-xl font-space font-black uppercase italic tracking-tighter leading-none">
                            {progress.tribes.find(t => t.id === selectedChat)?.name || selectedChat}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-1">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">En ligne</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="flex bg-foreground/5 p-1 rounded-xl">
                          <button onClick={() => setChatFilter('all')} className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg transition-all ${chatFilter === 'all' ? 'bg-white shadow-sm opacity-100' : 'opacity-40 hover:opacity-100'}`}>Tous</button>
                          <button onClick={() => setChatFilter('user')} className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg transition-all ${chatFilter === 'user' ? 'bg-white shadow-sm opacity-100' : 'opacity-40 hover:opacity-100'}`}>Humains</button>
                          <button onClick={() => setChatFilter('system')} className={`px-3 py-1 text-[10px] font-black uppercase rounded-lg transition-all ${chatFilter === 'system' ? 'bg-white shadow-sm opacity-100' : 'opacity-40 hover:opacity-100'}`}>Crises 🚨</button>
                        </div>
                        <input 
                          type="text" 
                          placeholder="Filtrer message..."
                          value={searchChat}
                          onChange={(e) => setSearchChat(e.target.value)}
                          className="bg-foreground/5 px-4 py-2 rounded-xl text-xs font-bold outline-none border border-transparent focus:border-primary/20 transition-all w-32"
                        />
                        <button onClick={() => setSelectedChat(null)} className="text-xs font-black opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest ml-2">✕</button>
                      </div>
                    </div>

                    <div className="flex-1 p-8 space-y-4 overflow-y-auto max-h-[450px] scrollbar-hide bg-foreground/[0.02]">
                      {currentMessages.length === 0 && (
                        <div className="text-center py-20 opacity-30 italic font-medium">Début de la conversation... ✨</div>
                      )}
                      {currentMessages
                        .filter(msg => {
                          if (chatFilter === 'user') return !msg.isSystem;
                          if (chatFilter === 'system') return msg.isSystem;
                          return true;
                        })
                        .filter(msg => msg.text.toLowerCase().includes(searchChat.toLowerCase()))
                        .map((msg, idx) => (
                        <div key={idx} className={`flex flex-col ${msg.isSystem ? 'items-center' : msg.sender === progress.pseudo ? 'items-end' : 'items-start'}`}>
                          {msg.isSystem ? (
                            <div className="text-[10px] font-bold italic opacity-40 bg-foreground/5 px-4 py-2 rounded-full">
                              🔔 {msg.text}
                            </div>
                          ) : (
                            <>
                              <div className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-40 mx-2">{msg.sender}</div>
                              <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-bold shadow-sm ${msg.sender === progress.pseudo ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-foreground border-2 border-foreground/5 rounded-tl-none'}`}>
                                {msg.text}
                              </div>
                              <div className="text-[7px] mt-1 opacity-20 font-black">{new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                            </>
                          )}
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-primary/10 flex gap-3">
                      <input 
                        type="text" 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Écris ton message..."
                        className="flex-1 bg-foreground/5 px-6 py-4 rounded-2xl font-bold outline-none border-2 border-transparent focus:border-primary/20 transition-all text-sm"
                      />
                      <button type="submit" className="w-14 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">🚀</button>
                    </form>
                  </>
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <section className="glass p-8 border-primary/10 shadow-xl overflow-hidden relative group">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
             <h3 className="text-sm font-black uppercase tracking-[0.25em] text-primary/60 mb-6">Activité Récente</h3>
             <div className="space-y-4">
                {activityFeed.slice(0, 5).map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start opacity-80">
                     <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center shrink-0">{item.icon}</div>
                     <div>
                       <div className="text-[10px] font-bold leading-tight uppercase tracking-tight">{item.text}</div>
                       <div className="text-[8px] font-bold opacity-30 uppercase mt-0.5">{item.time}</div>
                     </div>
                  </div>
                ))}
             </div>
          </section>

          <section className="glass p-8 bg-gradient-to-br from-primary/5 to-cyan/5 border-white/40 shadow-xl border-2">
             <h3 className="text-xl font-space font-black italic tracking-tighter mb-4 text-primary">🤝 DÉFI HEBDOMADAIRE</h3>
             
             <div className="mb-6">
               <div className="font-black text-sm uppercase mb-1">{weeklyChallenge.title}</div>
               <div className="text-xs opacity-70 mb-4">{weeklyChallenge.description}</div>
               
               <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                 <span className="text-cyan">Progression Tribu</span>
                 <span>{weeklyChallenge.progress} / {weeklyChallenge.target}</span>
               </div>
               <div className="w-full h-2 bg-foreground/10 rounded-full overflow-hidden mb-4">
                 <div className="h-full bg-cyan transition-all duration-1000" style={{ width: `${(weeklyChallenge.progress / weeklyChallenge.target) * 100}%` }}></div>
               </div>
               
               <div className="flex items-center gap-2 bg-yellow-400/10 text-yellow-600 p-2 rounded-lg text-xs font-bold border border-yellow-400/20">
                 <span>🎁</span> Gain: {weeklyChallenge.reward}
               </div>
             </div>

             <button 
               onClick={() => showToast("Score partagé avec ta tribu pour le défi ! 📣", "success")}
               className="w-full py-4 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-1 active:translate-y-0 transition-transform"
             >
               Contribuer au Défi 📣
             </button>
          </section>
        </div>
      </div>
    </div>
  );
}
