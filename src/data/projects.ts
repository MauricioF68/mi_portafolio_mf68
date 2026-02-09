import { Project } from '@/lib/types';

export const projects: Project[] = [
  //proyecto 1
  {
    id: '1',
    slug: 'pwa-gestion-residuos-recompensas',
    title: {
      es: 'EcoCheck: PWA de Gestión de Residuos con Sistema de Recompensas',
      en: 'EcoCheck: Waste Management PWA with Rewards System',
    },
    description: {
      es: 'Aplicación web progresiva (PWA) que conecta ciudadanos con recolectores de residuos en tiempo real. Incluye un sistema de gamificación que otorga puntos canjeables por incentivar el reciclaje y la limpieza urbana.',
      en: 'Progressive Web App (PWA) connecting citizens with waste collectors in real-time. Features a gamification system that awards redeemable points to incentivize recycling and urban cleanliness.',
    },
    role: {
      es: 'Arquitecto de Software & Desarrollador',
      en: 'Software Architect & Developer',
    },
    techStack: ['Laravel','JavaScript', 'MySQL','PWA', 'Pusher','Google Maps API'],
    category: 'PWA / Real-time',
    imageUrl: '/images/projects/project-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/MauricioF68/recolectores-clientes',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2025-10-22',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La falta de coordinación entre ciudadanos y recolectores genera acumulación de basura en las calles y desincentiva el reciclaje por la falta de beneficios directos para el usuario.",
        en: "Lack of coordination between citizens and collectors leads to waste accumulation and disincentivizes recycling due to a lack of direct benefits for users."
      },
      approach: {
        es: "rrrrital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Desarrollé una PWA con notificaciones en tiempo real mediante WebSockets. Implementé un algoritmo de proximidad para asignar recolectores y un motor de reglas para el sistema de puntos y canje de premios",
        en: "Developed a PWA with real-time notifications via WebSockets. Implemented a proximity algorithm for collector assignment and a rule engine for the points and rewards system."
      },
      
      // Diagramas de Proceso
      diagrams: {
        bpmnBefore: "/images/diagrams/bpmn1.png", 
        bpmnAfter: "/images/diagrams/bpmn2.png"
      },

      // Base de Datos
      database: {
        diagramUrl: "/images/diagrams/mer-database.png",
        engine: "MySQL",
        tablesCount: 24,
       
      },

      // Gestión (Evidencia Visual)
      management: {
        backlogUrl: "https://notion.so/tu-proyecto-publico",
        screenshots: [
          "/images/projects/jira-board.png",
          "/images/projects/notion-roadmap.png"
        ]
      },
      
      // Muestra de Historias de Usuario
      userStories: [
        "Como Ciudadano, quiero solicitar un recojo de basura desde mi ubicación actual y recibir puntos al finalizar el proceso.",
        "Como Recolector, quiero recibir notificaciones push en tiempo real de solicitudes cercanas para optimizar mi ruta.",
        "Como Administrador, quiero gestionar el catálogo de premios y supervisar el historial de recojos completados."
      ]
    }
  },
  // Puedes copiar y pegar este bloque para agregar otro proyecto...

  //proyecto 2
  {
    id: '2',
    slug: 'sistema-agritech-trazabilidad-arroz',
    title: {
      es: 'Marketplace y Sistema Logístico para la Industria Arrocera',
      en: 'Marketplace & Logistics System for the Rice Industry',
    },
    description: {
      es: 'Plataforma multi-actor que digitaliza la cadena de suministro del arroz. Gestiona desde la oferta de lotes y negociación de precios en tiempo real hasta la logística de recojo y validación de calidad mediante QR.',
      en: 'Multi-stakeholder platform digitalizing the rice supply chain. Manages everything from crop listing and real-time price negotiation to pickup logistics and quality validation via QR codes.',
    },
    role: {
      es: 'Arquitecto de Software & Desarrolador',
      en: 'Software Architect & Developer',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'AgriTech',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/MauricioF68/smart-rice-app-web',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2025-11-08',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La falta de transparencia en la negociación de precios, la ineficiencia logística en el recojo de cosechas y la pérdida de trazabilidad en la calidad del arroz al llegar al molino.",
        en: "Lack of transparency in price negotiation, logistical inefficiency in crop pickup, and loss of quality traceability when rice arrives at the mill."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Desarrollé un sistema con múltiples perfiles (Agricultor, Molino, Logística, Caseta). Implementé un motor de negociación en tiempo real, integración con APIs de mapas para rutas óptimas y un sistema de auditoría basado en códigos QR únicos por lote.",
        en: "Developed a multi-profile system (Farmer, Mill, Logistics, Quality Booth). Implemented a real-time negotiation engine, map API integration for optimal routing, and an audit system based on unique QR codes per lot."
      },
      
      // Diagramas de Proceso
      diagrams: {
        bpmnBefore: "/images/diagrams/bpmd1.png", 
        bpmnAfter: "/images/diagrams/bpms2.png"
      },

      // Base de Datos
      database: {
        diagramUrl: "/images/diagrams/mer-databsse.png",
        engine: "PostgreSQL 15",
        tablesCount: 24,
        
      },

      // Gestión (Evidencia Visual)
      management: {
        backlogUrl: "https://notion.so/tu-proyecto-publico",
        screenshots: [
          "/images/projects/jira-board.png",
          "/images/projects/notion-roadmap.png"
        ]
      },
      
      // Muestra de Historias de Usuario
      userStories: [
      "Como Agricultor, quiero registrar mis lotes y variedades de sacos para recibir ofertas de distintos molinos.",
      "Como Molino, quiero programar rutas de recojo automáticas para mis camiones basadas en la ubicación de los lotes pactados.",
      "Como Encargado de Caseta, quiero escanear el código QR del camión para validar que la calidad del arroz coincida con lo negociado."
      ]
    }
  },

  //PROYECTO 03 - Plataforma Web Corporativa y CMS para MyD Controles IndustrialeS

  {
    id: '3',
    slug: 'aplicacion-web-myd-controles-industriales',
    title: {
      es: 'Plataforma Web Corporativa y CMS para MyD Controles Industriales',
      en: 'Corporate Web Platform & CMS for MyD Controles Industriales',
    },
    description: {
      es: 'Planificación y desarrollo de una plataforma web mediante una landing page responsive y un panel administrativo (CMS). Incluye validación de identidad en tiempo real y gestión autónoma de proyectos.',
      en: 'Full digitalization of the company through a responsive landing page and a custom CMS. Includes real-time identity validation and autonomous project management.',
    },
    role: {
      es: 'Desarrollador & Analista de Software ',
      en: 'Developer & Software Analyst',
    },
    techStack: ['Laravel', 'CSS', 'JavaScript', 'MySQL', 'Postman', 'Notion'],
    category: 'Web App / CMS',
    imageUrl: '/images/projects/myd/myd-portada.png',
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://mydcontrolesindustriales.com/',
    featured: true,
    date: '2025-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresa carecía de presencia digital, lo que limitaba su alcance comercial y obligaba a una gestión de contactos manual, lenta y propensa a errores de datos.",
        en: "The company lacked a digital presence, limiting its market reach and forcing manual, slow, and error-prone lead management."
      },
      approach: {
        es: "Diseñé una solución basada en Laravel para centralizar la información. Implementé un formulario inteligente con integración a la API de RENIEC/SUNAT y un panel administrativo para eliminar la dependencia técnica del cliente.",
        en: "I designed a Laravel-based solution to centralize information. I implemented a smart form integrated with RENIEC/SUNAT APIs and a custom CMS to eliminate the client's technical dependency."
      },
      result: {
        es: "Diseñé una solución basada en Laravel para centralizar la información. Implementé un formulario inteligente con integración a la API de RENIEC/SUNAT y un panel administrativo para eliminar la dependencia técnica del cliente.",
        en: "I designed a Laravel-based solution to centralize information. I implemented a smart form integrated with RENIEC/SUNAT APIs and a custom CMS to eliminate the client's technical dependency."
      },
      
      // Diagramas de Proceso
      diagrams: {
        bpmnBefore: "/images/diagrams/bpmd1.png", 
        bpmnAfter: "/images/diagrams/bpms2.png"
      },

      // Base de Datos
      database: {
        diagramUrl: "/images/diagrams/mer-databsse.png",
        engine: "MySQL 8.0",
        tablesCount: 24,
        
      },

      // Gestión (Evidencia Visual)
      management: {
        backlogUrl: "https://notion.so/tu-proyecto-publico",
        screenshots: [
          "/images/projects/jira-board.png",
          "/images/projects/notion-roadmap.png"
        ]
      },
      
      // Muestra de Historias de Usuario
      userStories: [
        "Como Cliente, quiero que mis datos se autocompleten al ingresar mi DNI/RUC para contactar rápido a la empresa.",
        "Como Administrador, quiero subir fotos de nuevos proyectos industriales para mantener el portafolio actualizado.",
        "Como Usuario, quiero ver la web correctamente desde mi celular para conocer los servicios en cualquier lugar."
      ]
    }
  },

   

  

  
  

  
 

  

];