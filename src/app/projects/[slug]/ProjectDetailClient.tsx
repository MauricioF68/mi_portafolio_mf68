// src/app/projects/[slug]/ProjectDetailClient.tsx
"use client";

import Navbar from "@/components/layout/Navbar";
import ZoomableImage from "@/components/ui/ZoomableImage";
import { ArrowLeft, Github, Globe, Target, Lightbulb, Workflow, LayoutList, ExternalLink, Layers, Calendar, User, Database, Table, FileSpreadsheet } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; 
import { Project } from "@/lib/types"; // Importamos el tipo

// Diccionario de traducciones
const content = {
  es: {
    back: "Volver a Proyectos",
    role: "Rol Desempeñado",
    stack: "Stack Tecnológico",
    demo: "Ver Despliegue",
    code: "Ver Código",
    challenge: "El Desafío",
    solution: "La Solución",
    process: "Ingeniería de Procesos (BPMN)",
    asIs: "Situación Actual (AS-IS)",
    toBe: "Propuesta (TO-BE)",
    manual: "Manual",
    automated: "Automatizado",
    asIsMissing: "Diagrama AS-IS no disponible",
    toBeMissing: "Diagrama TO-BE no disponible",
    dataArch: "Arquitectura de Datos",
    dbEngine: "Motor de Base de Datos",
    structure: "Estructura",
    tables: "Tablas Maestras",    
    mer: "Diagrama Entidad-Relación (MER)",
    zoom: "Click para ampliar",
    backlog: "Gestión del Alcance (Backlog)",
    viewBoard: "Ver Tablero Completo (Notion/Jira)",
    stories: "Historias de Usuario Destacadas",
    highPriority: "Alta Prioridad",
    assigned: "Asignado"
  },
  en: {
    back: "Back to Projects",
    role: "Role",
    stack: "Tech Stack",
    demo: "View Demo",
    code: "View Code",
    challenge: "The Challenge",
    solution: "The Solution",
    process: "Process Engineering (BPMN)",
    asIs: "Current Situation (AS-IS)",
    toBe: "Proposal (TO-BE)",
    manual: "Manual",
    automated: "Automated",
    asIsMissing: "AS-IS Diagram not available",
    toBeMissing: "TO-BE Diagram not available",
    dataArch: "Data Architecture",
    dbEngine: "Database Engine",
    structure: "Structure",
    tables: "Master Tables",
    mer: "Entity-Relationship Diagram (ERD)",
    zoom: "Click to zoom",
    backlog: "Scope Management (Backlog)",
    viewBoard: "View Full Board (Notion/Jira)",
    stories: "Featured User Stories",
    highPriority: "High Priority",
    assigned: "Assigned"
  }
};

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e14]">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors text-sm font-medium group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </Link>

        {/* HEADER */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20 border-b border-slate-100 dark:border-slate-800 pb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-3 items-center">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
              <span className="flex items-center gap-1 text-slate-500 text-sm font-medium">
                <Calendar size={14} />
                {new Date(project.date).getFullYear()}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              {project.title[language]}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              {project.description[language]}
            </p>

            <div className="flex items-center gap-2 pt-4">
               <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full">
                 <User size={20} className="text-slate-700 dark:text-slate-300"/>
               </div>
               <div>
                 <p className="text-xs text-slate-400 uppercase font-bold">{t.role}</p>
                 <p className="text-sm font-medium text-slate-900 dark:text-white">{project.role[language]}</p>
               </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-[#151921] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 h-fit sticky top-24">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <Layers size={18} className="text-blue-500"/> {t.stack}
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20">
                  <Globe size={18} /> {t.demo}
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 rounded-xl font-medium transition-colors">
                  <Github size={18} /> {t.code}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* CASO DE ESTUDIO */}
        {project.caseStudy ? (
          <div className="space-y-24 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="grid md:grid-cols-2 gap-12">
              <section className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500/50 to-transparent rounded-full"></div>
                <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white mb-6">
                  <div className="p-2 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-lg"><Target size={24} /></div>
                  {t.challenge}
                </h3>
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg pl-2">
                  {project.caseStudy.problem[language]}
                </div>
              </section>
              <section className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500/50 to-transparent rounded-full"></div>
                 <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white mb-6">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 rounded-lg"><Lightbulb size={24} /></div>
                  {t.solution}
                </h3>
                <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg pl-2">
                  {project.caseStudy.result[language]}
                </div>
              </section>
            </div>

            {project.caseStudy.diagrams && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg"><Workflow size={24} /></div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.process}</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8 bg-slate-50 dark:bg-[#151921] p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t.asIs}</span>
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">{t.manual}</span>
                    </div>
                    <div className="aspect-video bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col items-center justify-center relative overflow-hidden">
                         {project.caseStudy.diagrams.bpmnBefore ? (
                             <ZoomableImage src={project.caseStudy.diagrams.bpmnBefore} alt="Diagrama AS-IS" />
                         ) : (
                             <span className="text-slate-400 text-sm">{t.asIsMissing}</span>
                         )}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">{t.toBe}</span>
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">{t.automated}</span>
                    </div>
                    <div className="aspect-video bg-blue-50 dark:bg-blue-900/10 rounded-xl border-2 border-dashed border-blue-300 dark:border-blue-700 flex flex-col items-center justify-center relative overflow-hidden">
                        {project.caseStudy.diagrams.bpmnAfter ? (
                             <ZoomableImage src={project.caseStudy.diagrams.bpmnAfter} alt="Diagrama TO-BE" />
                        ) : (
                             <span className="text-blue-500 text-sm font-medium">{t.toBeMissing}</span>
                        )}
                    </div>
                  </div>
                </div>
              </section>
            )}

            {project.caseStudy.database && (
              <section className="border-t border-slate-100 dark:border-slate-800 pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 rounded-lg"><Database size={24} /></div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.dataArch}</h3>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="space-y-4">
                     <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold mb-1">{t.dbEngine}</p>
                          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium"><Database size={16} /> {project.caseStudy.database.engine}</div>
                        </div>
                        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold mb-1">{t.structure}</p>
                          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium"><Table size={16} /> {project.caseStudy.database.tablesCount} {t.tables}</div>
                        </div>
                        <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-700"></div>
                        
                     </div>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="space-y-2">
                       <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-slate-500 uppercase">{t.mer}</span>
                          <span className="text-xs text-blue-500 font-medium animate-pulse">{t.zoom}</span>
                       </div>
                       <div className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                          <ZoomableImage src={project.caseStudy.database.diagramUrl} alt="Diagrama de Base de Datos" />
                       </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {(project.caseStudy.userStories || project.caseStudy.management) && (
              <section className="border-t border-slate-100 dark:border-slate-800 pt-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 rounded-lg"><LayoutList size={24} /></div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.backlog}</h3>
                   </div>
                   {project.caseStudy.management?.backlogUrl && (
                     <a href={project.caseStudy.management.backlogUrl} target="_blank" className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium transition-colors border border-slate-200 dark:border-slate-700">
                       <ExternalLink size={16} /> {t.viewBoard}
                     </a>
                   )}
                </div>
                {project.caseStudy.management?.screenshots && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                    {project.caseStudy.management.screenshots.map((shot, idx) => (
                      <div key={idx} className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm">
                        <ZoomableImage src={shot} alt={`Evidencia de Gestión ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
                {project.caseStudy.userStories && (
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">{t.stories}</h4>
                    <div className="grid md:grid-cols-3 gap-5">
                      {project.caseStudy.userStories.map((story, index) => (
                        <div key={index} className="flex flex-col p-5 bg-white dark:bg-slate-900 border-l-4 border-l-purple-500 border-y border-r border-slate-200 dark:border-slate-800 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start mb-3">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">US-{101 + index}</span>
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded uppercase">{t.highPriority}</span>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">&quot;{story}&quot;</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        ) : (
          <div className="p-12 text-center bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500">Cargando...</p>
          </div>
        )} 
      </main>
    </div>
  );
}