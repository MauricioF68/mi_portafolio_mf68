"use client";
import { useTheme } from "next-themes";
import { Sun, Moon, Languages, Download, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importar Hook

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage(); // <--- Usar el Hook
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0b0e14]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Mauricio F.
          </Link>
          <span className="hidden sm:block text-slate-400 text-sm">/ Gestión & Desarrollo</span>
        </div>

        {/* MENU DE NAVEGACIÓN (Usa t() para traducir) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/projects" className="hover:text-black dark:hover:text-white transition-colors">
            {t("nav.projects")}
          </Link>
          <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">
            {t("nav.contact")}
          </Link>
        </div>

        {/* ACCIONES */}
        <div className="flex items-center gap-3">
          
          <a 
            href="/cv-mauricio.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-md text-xs font-semibold hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors"
          >
            <span>CV</span>
            <Download size={14} />
          </a>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block"></div>

          {/* Selector de Idioma (FUNCIONAL) */}
          <button 
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} // <--- LOGICA CAMBIO
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500 font-medium flex items-center gap-1"
          >
            <Languages size={18} />
            <span className="text-xs">{language.toUpperCase()}</span>
          </button>

          {/* Modo Oscuro */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-500"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}