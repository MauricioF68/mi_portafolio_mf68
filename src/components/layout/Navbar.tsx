"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes"; // <--- CAMBIO IMPORTANTE: Usamos la librería oficial
import { Moon, Sun, Languages, Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme(); // <--- Hook oficial
  const { language, setLanguage, t } = useLanguage();
  
  // Estado para controlar si el componente ya se montó en el cliente
  // (Esto evita errores de hidratación con el tema)
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Esperamos a que el componente se monte para mostrar el botón de tema
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Si no está montado, renderizamos un navbar "placeholder" o null para evitar saltos
  if (!mounted) {
    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#0b0e14]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 h-16"></nav>
    );
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#0b0e14]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            Mauricio Terrones Alayo
          </Link>
          <span className="hidden sm:block text-slate-400 text-sm">/ Gestión & Desarrollo</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t("nav.about")}
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t("nav.projects")}
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
            {t("nav.contact")}
          </Link>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2"></div>

          {/* Botones de Acción */}
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative group"
              aria-label="Cambiar idioma"
            >
              <Languages size={20} />
              <span className="absolute -bottom-1 -right-1 text-[10px] font-bold bg-slate-200 dark:bg-slate-700 px-1 rounded">
                {language.toUpperCase()}
              </span>
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-yellow-500 dark:text-blue-400"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0b0e14] border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                {t("nav.about")}
              </Link>
              <Link href="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                {t("nav.projects")}
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                {t("nav.contact")}
              </Link>
              
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="flex gap-4">
                  <a href="#" className="text-slate-500 hover:text-blue-600"><Github size={20} /></a>
                  <a href="#" className="text-slate-500 hover:text-blue-600"><Linkedin size={20} /></a>
                </div>
                <div className="flex gap-4">
                   <button onClick={toggleLanguage} className="text-sm font-bold flex items-center gap-2">
                     <Languages size={16} /> {language.toUpperCase()}
                   </button>
                   <button onClick={toggleTheme} className="text-yellow-500 dark:text-blue-400">
                      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}