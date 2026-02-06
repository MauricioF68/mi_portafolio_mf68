import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext"; // <--- IMPORTAR

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mauricio Terrones | Portafolio",
  description: "Estudiante de Ingeniera de Sistemas e Inteligencia Artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider> {/* <--- ENVOLVER AQUÍ */}
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}