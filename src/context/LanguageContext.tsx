"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string; // Función para traducir textos fijos
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// DICCIONARIO DE TEXTOS FIJOS (Navbar, Botones, etc.)
const translations: Record<string, { es: string; en: string }> = {
  // Navbar
  "nav.about": { es: "Sobre mí", en: "About Me" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.contact": { es: "Contacto", en: "Contact" },
  "nav.subtitle": { es: "/ Gestión & Desarrollo", en: "/ Management & Development" },
  "nav.cv": { es: "CV", en: "CV" },
  // Home
  "hero.badge": { es: "Disponible para nuevos proyectos", en: "Available for new projects" },
  "hero.btn.primary": { es: "Ver Portafolio", en: "View Portfolio" },
  "hero.btn.secondary": { es: "Más sobre mí", en: "More about me" },
  
  // General
  "btn.back": { es: "Volver", en: "Go Back" },
  "btn.viewCode": { es: "Ver Código", en: "View Code" },
  "btn.viewDemo": { es: "Ver Despliegue", en: "View Demo" },
  "loading": { es: "Cargando...", en: "Loading..." },

  // Contact
  "contact.placeholderName": { es: "Ej. Juan Pérez", en: "Ex. John Doe"},
  "contact.placeholderEmail": { es: "nombre@empresa.com", en: "name@company.com"},
  "contact.placeholderMessage": { es: "Cuéntame brevemente sobre tu proyecto o idea...", en: "Tell me briefly about your project or idea..."},
  "contact.successMessage": { es: "¡Mensaje enviado con éxito!", en: "Message sent successfully!" },
  "contact.errorMessage": { es: "Error al enviar el mensaje. Intenta de nuevo.", en: "Error sending message. Please try again." },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  // Función traductora simple
  const t = (key: string) => {
    const text = translations[key];
    if (!text) return key; // Si no encuentra la traducción, devuelve la clave
    return text[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usar el idioma fácil
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}