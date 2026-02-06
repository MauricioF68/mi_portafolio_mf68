"use client";

import { Project } from "@/lib/types";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext"; // 1. Importamos el hook

// Configuración de la animación
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProjectCard({ project }: { project: Project }) {
  // 2. Obtenemos el idioma actual ('es' o 'en') del contexto
  const { language } = useLanguage();

  return (
    <motion.div variants={item} layout>
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <div className="relative h-full bg-white dark:bg-[#151921] border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col">
          
          {/* IMAGEN DE PORTADA */}
          <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden shrink-0">
            {project.imageUrl && !project.imageUrl.includes("placehold") ? (
              <Image 
                src={project.imageUrl} 
                // 3. Título dinámico para el texto alternativo
                alt={project.title[language]} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-4xl">
                🏗️
              </div>
            )}
            
            <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700 shadow-sm z-10">
              {project.category}
            </div>
          </div>

          {/* CONTENIDO DE TEXTO */}
          <div className="p-5 flex flex-col flex-grow">
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                {/* 4. TÍTULO DINÁMICO */}
                {project.title[language]} 
              </h3>
              <ArrowUpRight className="text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" size={20} />
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">
              {/* 5. DESCRIPCIÓN DINÁMICA */}
              {project.description[language]} 
            </p>

            <div className="space-y-4 mt-auto">
              {/* Stack Tecnológico */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-slate-50 dark:bg-slate-900 rounded text-slate-500 border border-slate-200 dark:border-slate-800">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* Rol y Fecha */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1 line-clamp-1">
                  <FolderGit2 size={14} />
                  {/* 6. ROL DINÁMICO */}
                  {project.role[language]} 
                </span>
                <span className="flex items-center gap-1 ml-auto shrink-0">
                  <Calendar size={14} />
                  {new Date(project.date).getFullYear()}
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </Link>
    </motion.div>
  );
}