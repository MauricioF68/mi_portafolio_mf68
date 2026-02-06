"use client";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // <--- Importar

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function ProjectsPage() {
  const { language } = useLanguage(); // <--- Usar idioma

  const content = {
    es: {
      title: "Mis Proyectos 🚀",
      description: "Una colección de soluciones tecnológicas enfocadas en valor de negocio. Desde la toma de requisitos hasta el despliegue."
    },
    en: {
      title: "My Projects 🚀",
      description: "A collection of tech solutions focused on business value. From requirements gathering to deployment."
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0e14]">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tight">{content[language].title}</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            {content[language].description}
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

      </main>
    </div>
  );
}