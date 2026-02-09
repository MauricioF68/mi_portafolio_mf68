// src/lib/types.ts

export type Language = 'es' | 'en';

export interface Project {
  id: string;
  slug: string;
  title: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  role: {
    es: string;
    en: string;
  };
  techStack: string[];
  category: 'Desarrollo' | 'Gestión' | 'Híbrido'|'Web App / CMS'| 'PWA / Real-time'|'AgriTech';
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  featured: boolean;
  date: string;

  // Detalles del Caso de Estudio
  caseStudy?: {
    problem: { es: string; en: string };
    approach: { es: string; en: string };
    result: { es: string; en: string };
    
    // --- NUEVO: Artefactos de Ingeniería ---
    diagrams?: {
      bpmnBefore?: string; // Ruta de la imagen AS-IS
      bpmnAfter?: string;  // Ruta de la imagen TO-BE
    };
    
    database?: {
      diagramUrl: string; // La foto del MER
      engine: string;     // Ej: PostgreSQL
      tablesCount: number;      
    };
    management?: {
      backlogUrl?: string; // Link a tu Notion/Jira público
      screenshots?: string[]; // Fotos del tablero Kanban
    };
    userStories?: string[]; // Lista de historias
  };
}

export interface Profile {
  name: string;
  role: { es: string; en: string };
  about: { es: string; en: string };
  socials: { github: string; linkedin: string; email: string };
}