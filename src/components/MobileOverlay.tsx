"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MarkdownText from "@/components/MarkdownText";

export default function MobileOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed inset-x-0 bottom-4 z-[100] px-4 md:hidden pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.96 }}
            className="glass p-5 rounded-[1.75rem] border-primary/20 shadow-2xl flex flex-col items-center gap-4 text-center max-w-md mx-auto bg-background/90 backdrop-blur-2xl pointer-events-auto"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl animate-bounce">
              📱
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-space font-black uppercase italic tracking-tighter text-primary">
                Attention ! ⚡
              </h2>
              <p className="text-sm font-medium opacity-70 leading-relaxed">
                <MarkdownText text="Quizzly fonctionne mieux sur **desktop**, mais la version mobile est maintenant utilisable." />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row w-full gap-3 mt-2">
              <button
                onClick={handleDismiss}
                className="flex-1 py-3 bg-primary text-white font-black rounded-2xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-xs"
              >
                Compris
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
