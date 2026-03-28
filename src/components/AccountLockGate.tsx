"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useProgress } from "@/context/ProgressContext";
import { useToast } from "@/components/Toast";

export default function AccountLockGate() {
  const { progress, setAccountPassword, unlockAccount } = useProgress();
  const { showToast } = useToast();
  const [isReady, setIsReady] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  useEffect(() => {
    const hasPassword = Boolean(progress.security.passwordHash);
    const sessionUnlocked = typeof window !== "undefined" && sessionStorage.getItem("quizzly_account_unlocked") === "1";

    if (!hasPassword) {
      setIsUnlocked(false);
      setIsReady(true);
      return;
    }

    setIsUnlocked(sessionUnlocked);
    setIsReady(true);
  }, [progress.security.passwordHash]);

  if (!isReady || isUnlocked) return null;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (status === "loading") return;

    setStatus("loading");

    try {
      if (!progress.security.passwordHash) {
        if (!password || password !== confirmPassword) {
          showToast("Les mots de passe ne correspondent pas.", "error");
          return;
        }

        const ok = await setAccountPassword(password);
        if (ok) {
          showToast("Compte verrouillé localement 🔐", "success");
          setIsUnlocked(true);
        }
        return;
      }

      const ok = await unlockAccount(password);
      if (ok) {
        showToast("Compte déverrouillé ✅", "success");
        setIsUnlocked(true);
      } else {
        showToast("Mot de passe incorrect.", "error");
      }
    } finally {
      setStatus("idle");
    }
  };

  const isSetup = !progress.security.passwordHash;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[300] flex items-center justify-center bg-background/85 backdrop-blur-2xl p-5"
      >
        <motion.form
          initial={{ y: 24, scale: 0.96 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ y: 24, scale: 0.96 }}
          onSubmit={handleSubmit}
          className="glass w-full max-w-md p-8 md:p-10 space-y-6 shadow-2xl border-primary/20"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl">🔐</div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-primary/60">Sécurité locale</p>
              <h2 className="text-2xl font-space font-black tracking-tighter uppercase italic">
                {isSetup ? "Créer le mot de passe" : "Déverrouiller le compte"}
              </h2>
            </div>
          </div>

          <p className="text-sm leading-relaxed opacity-70">
            {isSetup
              ? "On protège ta progression directement sur cet appareil avec un mot de passe local."
              : "Entre le mot de passe local pour rouvrir Quizzly."}
          </p>

          <div className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder={isSetup ? "Créer un mot de passe" : "Mot de passe"}
              className="w-full rounded-2xl bg-foreground/5 border border-white/10 px-4 py-4 font-bold outline-none focus:border-primary/30"
            />

            {isSetup && (
              <input
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirmer le mot de passe"
                className="w-full rounded-2xl bg-foreground/5 border border-white/10 px-4 py-4 font-bold outline-none focus:border-primary/30"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-2xl bg-primary text-white font-black uppercase tracking-widest py-4 shadow-xl shadow-primary/20 disabled:opacity-60"
          >
            {status === "loading" ? "Validation..." : isSetup ? "Verrouiller" : "Déverrouiller"}
          </button>
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
}
