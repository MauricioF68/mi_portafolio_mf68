import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauricio Terrones | Portafolio",
  description: "Estudiante de Ingeniería de Sistemas e IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      {/* AQUÍ ESTÁ LA MAGIA DE LOS COLORES: */}
      <body className={`${inter.className} bg-white dark:bg-[#0b0e14] text-slate-900 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}