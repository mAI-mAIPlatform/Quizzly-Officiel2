"use client";

 
 
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
 
 
 
import { useProgress } from "@/context/ProgressContext";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SocialPage() {
  const { progress, addFriend, createTribe, joinTribe, sendMessage } = useProgress();
  const [activeTab, setActiveTab] = useState<'amis' | 'tribus' | 'chat'>('amis');
  const [searchPseudo, setSearchPseudo] = useState("");
  const [newTribeName, setNewTribeName] = useState("");
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [progress.messages, selectedChat]);

  const handleAddFriend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPseudo.trim()) return;
    addFriend(searchPseudo);
    setSearchPseudo("");
    alert(`Ami ${searchPseudo} ajouté ! 🤝`);
  };

  const handleCreateTribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTribeName.trim()) return;
    createTribe(newTribeName);
    setNewTribeName("");
    alert(`Tribu ${newTribeName} créée ! 🏙️`);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChat || !messageInput.trim()) return;
    sendMessage(selectedChat, messageInput);
    setMessageInput("");
  };

  const currentMessages = selectedChat ? (progress.messages[selectedChat] || []) : [];

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 pb-20">
      <header className="space-y-2">
        <h1 className="text-6xl font-space font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan">SOCIAL 🤝</h1>
        <p className="opacity-70 font-black uppercase tracking-[0.2em] text-xs">Connecte-toi avec tes amis et rejoins des tribus.</p>
      </header>

      {/* Tabs Menu */}
      <div className="flex gap-2 p-1.5 bg-foreground/5 rounded-2xl w-fit">
        {(['amis', 'tribus', 'chat'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-3 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'opacity-50 hover:opacity-100 hover:bg-foreground/5'}`}
          >
            {tab === 'amis' ? 'Mes Amis' : tab === 'tribus' ? 'Les Tribus' : 'Messages'}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
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
                <div className="flex justify-between items-center border-b border-primary/10 pb-6">
                  <h2 className="text-3xl font-space font-black flex items-center gap-3">
                    <span className="text-4xl text-primary">🤝</span> Mes Amis ({progress.friends.length})
                  </h2>
                  <form onSubmit={handleAddFriend} className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Pseudo de ton ami..."
                      value={searchPseudo}
                      onChange={(e) => setSearchPseudo(e.target.value)}
                      className="bg-foreground/5 px-6 py-3 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-primary/30 transition-all w-64"
                    />
                    <button type="submit" className="bg-primary text-white font-black px-6 py-3 rounded-xl text-sm transition-transform hover:scale-105">AJOUTER +</button>
                  </form>
                </div>

                {progress.friends.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 opacity-40 text-center">
                    <div className="text-8xl mb-6">🏜️</div>
                    <p className="font-black italic text-xl">Tu n'as pas encore d'amis... <br/>Invite ton entourage !</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {progress.friends.map((friend) => (
                      <div key={friend} className="glass border-primary/5 p-6 flex justify-between items-center group hover:border-primary/20 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">👤</div>
                          <div>
                            <div className="font-black text-lg leading-none">{friend}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-primary mt-1">Niveau ??</div>
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
                <div className="flex justify-between items-center border-b border-primary/10 pb-6">
                  <h2 className="text-3xl font-space font-black flex items-center gap-3">
                    <span className="text-4xl text-cyan">🏙️</span> Tribus de Connaissances
                  </h2>
                  <form onSubmit={handleCreateTribe} className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Nom de ta tribu..."
                      value={newTribeName}
                      onChange={(e) => setNewTribeName(e.target.value)}
                      className="bg-foreground/5 px-6 py-3 rounded-xl font-bold text-sm outline-none border-2 border-transparent focus:border-cyan/30 transition-all w-64"
                    />
                    <button type="submit" className="bg-cyan text-white font-black px-6 py-3 rounded-xl text-sm transition-transform hover:scale-105">CRÉER 🏙️</button>
                  </form>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {progress.tribes.map((tribe) => (
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
                  {/* Public Tribes suggestion */}
                  <div className="glass flex flex-col items-center justify-center p-8 border-dashed border-2 border-primary/20 opacity-60">
                    <div className="text-4xl mb-4">✨</div>
                    <p className="font-black text-center text-sm mb-4">Rejoins la tribu mondiale des Savants</p>
                    <button className="text-[10px] font-black text-primary border border-primary/20 px-4 py-2 rounded-full uppercase tracking-tighter hover:bg-primary/5 transition-colors">Rejoindre +</button>
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
                  <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-20 opacity-40">
                    <div className="text-9xl mb-4 animate-bounce">💬</div>
                    <p className="text-2xl font-space font-black uppercase tracking-tighter italic">Sélectionne une discussion</p>
                  </div>
                ) : (
                  <>
                    <div className="p-6 border-b border-primary/10 flex justify-between items-center bg-white/40 backdrop-blur-xl sticky top-0 z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl font-bold">
                          {selectedChat.startsWith('tribe_') ? '🏙️' : '👤'}
                        </div>
                        <div>
                          <h3 className="text-xl font-space font-black uppercase italic tracking-tighter leading-none">
                            {progress.tribes.find(t => t.id === selectedChat)?.name || selectedChat}
                          </h3>
                          <div className="flex items-center gap-1.5 mt-1">
                             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                             <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">En ligne (WebSocket)</span>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => setSelectedChat(null)} className="text-xs font-black opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">Fermer ✕</button>
                    </div>

                    <div className="flex-1 p-8 space-y-6 overflow-y-auto max-h-[450px] scrollbar-hide bg-foreground/[0.02]">
                      {currentMessages.length === 0 && (
                        <div className="text-center py-20 opacity-30 italic font-medium">Début de la conversation... ✨</div>
                      )}
                      {currentMessages.map((msg, idx) => (
                        <div key={idx} className={`flex flex-col ${msg.sender === progress.pseudo ? 'items-end' : 'items-start'}`}>
                          <div className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-40 mx-2">{msg.sender}</div>
                          <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-bold shadow-sm ${msg.sender === progress.pseudo ? 'bg-primary text-white rounded-tr-none' : 'bg-white text-foreground border-2 border-foreground/5 rounded-tl-none'}`}>
                            {msg.text}
                          </div>
                          <div className="text-[7px] mt-1 opacity-20 font-black">{new Date(msg.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>

                    <form onSubmit={handleSendMessage} className="p-6 bg-white border-t border-primary/10 flex gap-4">
                      <input 
                        type="text" 
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Écris ton message..."
                        className="flex-1 bg-foreground/5 px-8 py-5 rounded-3xl font-bold outline-none border-2 border-transparent focus:border-primary/20 transition-all text-sm shadow-inner"
                      />
                      <button type="submit" className="w-20 rounded-3xl bg-primary text-white flex items-center justify-center text-xl shadow-xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95">🚀</button>
                    </form>
                  </>
                )}
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Sidebar Info Panels */}
        <div className="space-y-6">
          <section className="glass p-8 border-primary/10 shadow-xl overflow-hidden relative group">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
             <h3 className="text-sm font-black uppercase tracking-[0.25em] text-primary/60 mb-6">Activité Récente</h3>
             <div className="space-y-6">
                <div className="flex gap-4 items-start opacity-70">
                   <div className="w-8 h-8 rounded-lg bg-green/10 flex items-center justify-center">🌱</div>
                   <div className="text-[10px] font-bold leading-tight uppercase tracking-tight">Tu as rejoint la version v0.4.5</div>
                </div>
                {progress.friends.length > 0 && (
                  <div className="flex gap-4 items-start opacity-70">
                     <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">✨</div>
                     <div className="text-[10px] font-bold leading-tight uppercase tracking-tight">Tu as ajouté {progress.friends[0]}</div>
                  </div>
                )}
             </div>
          </section>

          <section className="glass p-8 bg-gradient-to-br from-primary/5 to-cyan/5 border-white/40 shadow-xl border-2">
             <h3 className="text-xl font-space font-black italic tracking-tighter mb-4">🏆 DÉFI PARTAGÉ</h3>
             <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-6">Finis un quiz aujourd'hui pour motiver ta tribu !</p>
             <button className="w-full py-4 rounded-2xl bg-primary text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all">Partager un score 📣</button>
          </section>
        </div>
      </div>
    </div>
  );
}
