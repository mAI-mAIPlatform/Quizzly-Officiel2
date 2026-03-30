"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  OAuthProvider, 
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  ConfirmationResult
} from "firebase/auth";
import { app } from "@/lib/firebase";

const auth = getAuth(app);

export default function AuthOptions() {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);

  const onSuccess = () => {
    // Redirection vers le dashboard après un login réussi
    router.push("/dashboard");
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      onSuccess();
    } catch (error) {
      console.error("Erreur Google SignIn", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAppleSignIn = async () => {
    setLoading(true);
    const provider = new OAuthProvider('apple.com');
    try {
      await signInWithPopup(auth, provider);
      onSuccess();
    } catch (error) {
      console.error("Erreur Apple SignIn", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGameCenterSignIn = async () => {
    // Game Center mock integration for UI testing
    setLoading(true);
    console.log("Appel Game Center Auth simulé...");
    setTimeout(() => {
      setLoading(false);
      onSuccess();
    }, 1000);
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible'
      });
    }
  };

  const handlePhoneSignIn = async () => {
    if (!phoneNumber) return;
    setLoading(true);
    setupRecaptcha();
    try {
      const appVerifier = window.recaptchaVerifier;
      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
    } catch (error) {
      console.error("Erreur Phone SignIn", error);
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    if (!confirmationResult || !verificationCode) return;
    setLoading(true);
    try {
      await confirmationResult.confirm(verificationCode);
      onSuccess();
    } catch (error) {
      console.error("Code invalide", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl relative z-10 text-white overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/40 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-violet/40 rounded-full blur-[80px]"></div>
      
      <div className="relative text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-violet mb-4 shadow-lg shadow-violet/30 border border-white/20">
          <span className="text-3xl">🎮</span>
        </div>
        <h2 className="text-3xl font-black tracking-tight font-space text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
          Bienvenue
        </h2>
        <p className="text-white/50 text-sm mt-2">Connectez-vous pour continuer l&apos;aventure</p>
      </div>

      <div className="flex flex-col gap-4 relative">
        <button 
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="group flex items-center justify-center gap-3 bg-white text-gray-900 w-full py-3.5 px-4 rounded-xl font-bold hover:bg-gray-50 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          Google
        </button>

        <button 
          onClick={handleAppleSignIn}
          disabled={loading}
          className="group flex items-center justify-center gap-3 bg-[#000000] text-white w-full py-3.5 px-4 rounded-xl font-bold hover:bg-gray-900 border border-white/10 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 shadow-lg"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" style={{display:'none'}}/>
            <path d="M16.2 8.7C15.9 7 17.3 5.3 18.8 4c-.2-1.5-1.9-2.5-3.6-2.5-1.6 0-3.3.9-4 1.7-.5.6-1.3 1.7-1.3 3.1.2 1.7-1 3.3-2.6 4.5.3 1.6 2 2.5 3.6 2.5 1.7 0 3.3-.8 4.2-1.7.5-.6 1.3-1.8 1.1-2.9zm-4.6 9c-.5.5-1.6.8-2.6.8-1.4 0-2.8-.8-3.6-2-1.2-1.9-2.2-6.5-1.3-9C5.3 5.4 7.6 4.1 9.8 4.1c1.5 0 2.8.6 3.6 1L15.3 4c1-.7 2.1-1.1 3.2-1.1 1.7 0 3.5.7 4.8 2.2-2.1 1.1-3.4 3.2-3 5.7.5 2.6 2.6 4.6 5.2 5-1.1 2.9-3.4 8.7-6.5 8.7-1.5 0-2.3-.6-3.8-.6-1.5 0-2.2.6-4 .6zm11.2-5.4z" />
          </svg>
          Apple
        </button>

        <button 
          onClick={handleGameCenterSignIn}
          disabled={loading}
          className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-full py-3.5 px-4 rounded-xl font-bold hover:opacity-90 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 shadow-[0_0_20px_rgba(6,182,212,0.3)] border border-white/20"
        >
          <span className="text-xl">🎯</span>
          Game Center
        </button>

        <div className="flex items-center gap-4 my-2 opacity-30">
          <div className="h-px bg-white flex-1"></div>
          <span className="text-xs uppercase tracking-widest font-bold">Ou par téléphone</span>
          <div className="h-px bg-white flex-1"></div>
        </div>

        {!confirmationResult ? (
          <div className="flex flex-col gap-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-1 flex focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary/50 transition-all">
              <span className="flex items-center justify-center px-3 opacity-50 text-xl">📱</span>
              <input 
                type="tel" 
                placeholder="+33 6 12 34 56 78" 
                value={phoneNumber} 
                onChange={(e) => setPhoneNumber(e.target.value)} 
                className="bg-transparent border-none outline-none p-2 flex-1 text-white placeholder:text-white/30"
              />
            </div>
            <button 
              onClick={handlePhoneSignIn}
              disabled={loading || phoneNumber.length < 8}
              className="bg-white/10 text-white w-full py-3 px-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 disabled:opacity-30 backdrop-blur-md border border-white/10"
            >
              Recevoir le code SMS
            </button>
            <div id="recaptcha-container"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white/5 border border-primary/50 rounded-xl p-1 flex focus-within:ring-2 focus-within:ring-primary/80 transition-all shadow-[0_0_15px_rgba(236,72,153,0.2)]">
              <span className="flex items-center justify-center px-3 opacity-50 text-xl">💬</span>
              <input 
                type="text" 
                placeholder="Code à 6 chiffres" 
                value={verificationCode} 
                onChange={(e) => setVerificationCode(e.target.value)} 
                className="bg-transparent border-none outline-none p-2 flex-1 text-white font-mono tracking-widest placeholder:text-white/30"
                maxLength={6}
              />
            </div>
            <button 
              onClick={verifyCode}
              disabled={loading || verificationCode.length < 6}
              className="bg-gradient-to-r from-primary to-rose text-white w-full py-3 px-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300 shadow-lg shadow-rose/20 disabled:opacity-50"
            >
              Vérifier et continuer
            </button>
          </div>
        )}
      </div>
      
      {loading && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 rounded-[2rem]">
          <div className="w-10 h-10 border-4 border-white/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}

declare global {
  interface Window {
    recaptchaVerifier: import("firebase/auth").RecaptchaVerifier;
  }
}
