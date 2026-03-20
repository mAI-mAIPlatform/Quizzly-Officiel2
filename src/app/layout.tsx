import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { ProgressProvider } from "@/context/ProgressContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Quizzly — Apprends tout, joue partout",
  description: "L'application d'apprentissage gamifiée de la 6ème à la Terminale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col md:flex-row overflow-hidden`}>
        <ProgressProvider>
          {/* Menu principal (côté gauche sur desktop, bas sur mobile) */}
          <Sidebar />
          
          {/* Contenu principal */}
          <main className="flex-1 flex flex-col h-screen overflow-hidden bg-background relative z-10">
            <Navbar />
            <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth pb-24 md:pb-8">
              {children}
            </div>
          </main>
        </ProgressProvider>
      </body>
    </html>
  );
}
