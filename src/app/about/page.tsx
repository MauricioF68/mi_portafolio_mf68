"use client";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Users, GanttChartSquare } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: "Más que código:",
      subtitle: "Estrategia y Estructura.",
      description: "Soy Mauricio, estudiante de Ingeniería de Sistemas e IA. Mi objetivo no es solo escribir software, sino entender por qué lo construimos. Me especializo en cerrar la brecha entre la visión del negocio y la ejecución técnica.",
      cards: {
        mgmt: { title: "Gestión de Proyectos", desc: "Enfoque en metodologías ágiles y planificación estructurada." },
        req: { title: "Ingeniería de Requisitos", desc: "Traducción de necesidades de usuario a especificaciones técnicas." },
        dev: { title: "Desarrollo Full Stack", desc: "Capacidad para construir lo que diseño y auditar código." },
        ai: { title: "IA & Datos", desc: "Interés en la aplicación de IA para optimizar procesos." }
      }
    },
    en: {
      title: "More than code:",
      subtitle: "Strategy and Structure.",
      description: "I'm Mauricio, a Systems Engineering & AI student. My goal is not just to write software, but to understand why we build it. I specialize in bridging the gap between business vision and technical execution.",
      cards: {
        mgmt: { title: "Project Management", desc: "Focus on agile methodologies and structured planning." },
        req: { title: "Requirements Engineering", desc: "Translating user needs into technical specifications." },
        dev: { title: "Full Stack Development", desc: "Ability to build what I design and audit code." },
        ai: { title: "AI & Data", desc: "Interest in applying AI to optimize processes." }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e14]">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold tracking-tight mb-6">
            {content[language].title} <br />
            <span className="text-blue-600 dark:text-blue-400">{content[language].subtitle}</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {content[language].description}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {/* Tarjeta 1 */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <GanttChartSquare size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">{content[language].cards.mgmt.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {content[language].cards.mgmt.desc}
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>• Scrum & Kanban</li>
              <li>• Jira / Trello / Notion</li>
              <li>• Planificación de Sprints</li>
            </ul>
          </div>

          {/* Tarjeta 2 */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
              <Users size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">{content[language].cards.req.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
               {content[language].cards.req.desc}
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>• User Stories</li>
              <li>• BPMN Diagrams</li>
              <li>• Stakeholder Interviews</li>
            </ul>
          </div>

          {/* Tarjeta 3 */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
              <Code2 size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">{content[language].cards.dev.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
               {content[language].cards.dev.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-slate-200 dark:border-slate-700">React</span>
              <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-slate-200 dark:border-slate-700">Next.js</span>
              <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-slate-200 dark:border-slate-700">Node.js</span>
              <span className="px-2 py-1 bg-white dark:bg-slate-800 rounded text-xs border border-slate-200 dark:border-slate-700">SQL</span>
            </div>
          </div>

           {/* Tarjeta 4 */}
           <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#151921] border border-slate-100 dark:border-slate-800">
            <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
              <BrainCircuit size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">{content[language].cards.ai.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
               {content[language].cards.ai.desc}
            </p>
            <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
              <li>• Python for Data Science</li>
              <li>• ML Models</li>
              <li>• Automation</li>
            </ul>
          </div>

        </motion.div>
      </main>
    </div>
  );
}