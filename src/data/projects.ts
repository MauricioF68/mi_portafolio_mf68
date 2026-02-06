import { Project } from '@/lib/types';

export const projects: Project[] = [
  //proyecto 1
  {
    id: '1',
    slug: 'sistema-gestion-inventario',
    title: {
      es: 'Sistema ERP de Inventario',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación y desarrollo de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project Manager & Lead Dev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'PostgreSQL', 'Docker', 'Jira', 'BPMN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/project-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresa sufría de pérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transformación digital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsistencia de datos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
      },
      
      // Diagramas de Proceso
      diagrams: {
        bpmnBefore: "/images/diagrams/bpmn1.png", 
        bpmnAfter: "/images/diagrams/bpmn2.png"
      },

      // Base de Datos
      database: {
        diagramUrl: "/images/diagrams/mer-database.png",
        engine: "PostgreSQL 15",
        tablesCount: 24,
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },
  // Puedes copiar y pegar este bloque para agregar otro proyecto...

  //proyecto 2
  {
    id: '2',
    slug: 'sistema-gestion-veterinaria',
    title: {
      es: 'Sistema ERP de Inventsdfo',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación asdasd de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project asdasdev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresd sufríssssssérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsaaaaaaaaaaaaaatos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
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
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },
  //proyecto 3
  {
    id: '2',
    slug: 'sistema-gestion-veterinaria',
    title: {
      es: 'Sistema ERP de Inventsdfo',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación asdasd de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project asdasdev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresd sufríssssssérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsaaaaaaaaaaaaaatos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
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
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },

  //proyecto 4
  {
    id: '2',
    slug: 'sistema-gestion-veterinaria',
    title: {
      es: 'Sistema ERP de Inventsdfo',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación asdasd de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project asdasdev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresd sufríssssssérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsaaaaaaaaaaaaaatos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
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
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },

  //proyecto 5
  {
    id: '2',
    slug: 'sistema-gestion-veterinaria',
    title: {
      es: 'Sistema ERP de Inventsdfo',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación asdasd de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project asdasdev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresd sufríssssssérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsaaaaaaaaaaaaaatos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
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
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },

  //proyecto 6
  {
    id: '2',
    slug: 'sistema-gestion-veterinaria',
    title: {
      es: 'Sistema ERP de Inventsdfo',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación asdasd de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project asdasdev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresd sufríssssssérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsaaaaaaaaaaaaaatos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
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
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },

  //proyecto 7
  {
    id: '2',
    slug: 'sistema-gestion-veterinaria',
    title: {
      es: 'Sistema ERP de Inventsdfo',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación asdasd de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project asdasdev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresd sufríssssssérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsaaaaaaaaaaaaaatos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
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
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },

  //proyecto 8
  {
    id: '2',
    slug: 'sistema-gestion-veterinaria',
    title: {
      es: 'Sistema ERP de Inventsdfo',
      en: 'Inventory ERP System',
    },
    description: {
      es: 'Planificación asdasd de un módulo de gestión de stock. Enfoque en la toma de requisitos con stakeholders y arquitectura escalable.',
      en: 'Planning and development of a stock management module. Focus on stakeholder requirements gathering and scalable architecture.',
    },
    role: {
      es: 'Project asdasdev',
      en: 'Project Manager & Lead Dev',
    },
    techStack: ['Laravel', 'Postgreasd', 'Dockas', 'Jsda', 'BPsN'],
    category: 'Híbrido',
    imageUrl: '/images/projects/projecs-1.jpg', // Asegúrate de tener esta imagen o cambiar la ruta
    githubUrl: 'https://github.com/mauriciof68',
    demoUrl: 'https://demo-inventario.com',
    featured: true,
    date: '2024-02-15',

    // --- CASO DE ESTUDIO COMPLETO ---
    caseStudy: {
      problem: {
        es: "La empresd sufríssssssérdidas de stock debido a un registro manual en Excel que generaba inconsistencias del 20% en el inventario mensual y cuellos de botella en almacén.",
        en: "The company suffered from stock losses due to manual Excel tracking, leading to a 20% monthly inventory inconsistency."
      },
      approach: {
        es: "Lideré la transforaaaaaaaaigital usando Scrum con Sprints de 2 semanas. Realicé sesiones de 'Event Storming' para mapear el proceso actual y diseñé la nueva arquitectura basada en microservicios.",
        en: "I led the digital transformation using Scrum with 2-week sprints. I conducted Event Storming sessions."
      },
      result: {
        es: "Se redujo la inconsaaaaaaaaaaaaaatos al 2% en el primer mes. El tiempo de registro de entrada bajó de 15 minutos a 2 minutos por lote.",
        en: "Data inconsistency was reduced to 2% in the first month."
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
        normalization: "3ra Forma Normal (3FN)"
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
        "Como Almacenero, quiero escanear códigos QR para registrar ingresos sin escribir manualmente.",
        "Como Gerente de Logística, quiero recibir alertas automáticas cuando el stock baje del mínimo seguro.",
        "Como Auditor, quiero ver un historial inmutable de todos los movimientos de inventario."
      ]
    }
  },

];