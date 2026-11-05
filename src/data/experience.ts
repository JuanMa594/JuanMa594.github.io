import type { ExperienceItem } from '../types/experience';
import summaLogo from '../assets/experience/summa.jpg';

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'summa-sci',
    role: {
      en: 'Technology Apprentice',
      es: 'Aprendiz de Tecnología',
    },
    company: 'Summa SCI',
    location: {
      en: 'Sabaneta, Colombia',
      es: 'Sabaneta, Colombia',
    },
    dateRange: {
      en: 'Apr 2026 – Oct 2026 · 6 months',
      es: 'Abr 2026 – Oct 2026 · 6 meses',
    },
    bullets: {
      en: [
        'Built document-management and reporting apps for the GI and GH teams, merging loose Python scripts into one tool that finds files and generates folders and Excel reports from the database.',
        'Developed local-AI tools: a slide generator based on the corporate template, and a meeting assistant with transcription, diarization and Q&A.',
        'Created a multi-agent app that turns a Teams transcript into a process discovery card, KPIs, risks, automation ideas and a BPMN diagram.',
        'Built a Copilot Studio agent for internal documentation and process questions.',
        'Automated manual work with Power Automate flows, macros and scripts, with fewer typos and traceable results.',
      ],
      es: [
        'Construí aplicaciones de gestión documental y generación de informes para los equipos GI y GH, unificando scripts sueltos de Python en una sola herramienta que encuentra archivos y genera carpetas e informes de Excel desde la base de datos.',
        'Desarrollé herramientas de IA local: un generador de diapositivas basado en la plantilla corporativa y un asistente de reuniones con transcripción, diarización y preguntas y respuestas.',
        'Creé una aplicación multiagente que convierte la transcripción de una reunión de Teams en una ficha de descubrimiento de procesos, KPIs, riesgos, ideas de automatización y un diagrama BPMN.',
        'Construí un agente de Copilot Studio para documentación interna y consultas sobre procesos.',
        'Automaticé trabajo manual con flujos de Power Automate, macros y scripts, con menos errores tipográficos y resultados trazables.',
      ],
    },
    techKeys: ['powerplatform', 'localllms', 'excel', 'python', 'sqlite', 'pytorch', 'chromadb'],
    logo: summaLogo,
  },
];
