"use client";
import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Terminal, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importamos el hook

export default function Home() {
  const { language } = useLanguage(); // <--- Obtenemos el idioma actual

  // DICCIONARIO DE TEXTOS PARA ESTA PÁGINA
  const content = {
    es: {
      badge: "Estudiante de Ingeniería de Sistemas e IA",
      title1: "Construyendo software con",
      title2: "visión estratégica.",
      description: "Hola, soy Mauricio. Me especializo en conectar el mundo de la ingeniería de requisitos con el desarrollo de software escalable.",
      btnProjects: "Ver Portafolio",
      btnAbout: "Más sobre mí"
    },
    en: {
      badge: "Systems Engineering & AI Student",
      title1: "Building software with",
      title2: "strategic vision.",
      description: "Hi, I'm Mauricio. I specialize in bridging the gap between requirements engineering and scalable software development.",
      btnProjects: "View Portfolio",
      btnAbout: "More about me"
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e14] overflow-hidden">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 flex flex-col justify-center min-h-[80vh]">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {content[language].badge} {/* <--- Texto Dinámico */}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl">
            {content[language].title1} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              {content[language].title2}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {content[language].description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-lg font-medium transition-all hover:scale-105">
              <Terminal size={18} />
              {content[language].btnProjects}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <BookOpen size={18} />
              {content[language].btnAbout}
            </Link>
          </div>
        </motion.div>

      </main>
    </div>
  );
}