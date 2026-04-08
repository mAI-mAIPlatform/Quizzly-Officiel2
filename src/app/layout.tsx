import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Quizzly — Maintenance importante en cours",
  description:
    "Maintenance longue durée en cours sur Quizzly. Retour prévu au plus tôt le 18 avril.",
};

export default function RootLayout(): JSX.Element {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground antialiased min-h-screen`}
      >
        <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-violet/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 right-0 h-96 w-96 rounded-full bg-accent-blue/30 blur-3xl"
          />

          {/*
            Blocage global volontaire : aucun rendu de l'application métier tant que
            la maintenance n'est pas levée. Le contenu des routes ({children}) n'est
            pas injecté, ce qui empêche l'accès même en modifiant l'URL.
          */}
          <section className="glass relative z-10 w-full max-w-3xl p-8 md:p-12 text-center">
            <p className="inline-flex items-center rounded-full border border-white/40 bg-white/40 px-4 py-1 text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Quizzly indisponible temporairement
            </p>

            <h1 className="mt-6 font-space text-3xl font-bold leading-tight md:text-5xl">
              Maintenance importante en cours
            </h1>

            <p className="mt-6 text-base leading-relaxed md:text-lg">
              Une maintenance longue durée est en cours, elle se déroulera jusqu&apos;au
              18 avril minimum.
            </p>
            <p className="mt-4 text-base leading-relaxed md:text-lg">
              Nous vous remercions de votre patience. Cette mise à jour intègre en
              toute sécurité, les données nécessaires pour la génération IA de vos
              contenus.
            </p>
            <p className="mt-4 text-base leading-relaxed md:text-lg">
              Nous comprenons votre colère et impatience mais nous reviendrons
              bientôt. Cette maintenance signera la version publique officielle et
              stable (1.0.0) de Quizzly !
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}
