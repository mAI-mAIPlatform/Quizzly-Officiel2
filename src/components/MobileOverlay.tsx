"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if on mobile (screen width < 768px as per md: prefix in project)
    const isMobile = window.innerWidth < 768;
    // Check if user has already seen and dismissed the overlay in this session
    const hasSeenOverlay = sessionStorage.getItem("quizzly_mobile_warning_seen");

    if (isMobile && !hasSeenOverlay) {
      const timeout = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timeout);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem("quizzly_mobile_warning_seen", "true");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-background/80 backdrop-blur-2xl p-6 md:hidden"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass p-8 rounded-[2.5rem] border-primary/20 shadow-2xl flex flex-col items-center gap-6 text-center max-w-sm bg-white/40"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl animate-bounce">
              📱
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-space font-black uppercase italic tracking-tighter text-primary">
                Attention ! ⚡
              </h2>
              <p className="text-sm font-medium opacity-70 leading-relaxed">
                Quizzly fonctionne mieux sur **desktop**. L&apos;expérience mobile est encore en cours d&apos;optimisation.
              </p>
            </div>

            <div className="flex flex-col w-full gap-3 mt-4">
              <button
                onClick={handleDismiss}
                className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs"
              >
                OK, J&apos;AI COMPPRIS
              </button>
              <button
                onClick={handleDismiss}
                className="w-full py-4 bg-foreground/5 text-foreground/40 font-black rounded-2xl hover:bg-foreground/10 transition-all uppercase tracking-widest text-[10px]"
              >
                Plus tard
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
