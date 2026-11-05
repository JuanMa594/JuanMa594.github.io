import type { Translation } from './en';

/** UI copy dictionary (Spanish). */
export const es: Translation = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos/Habilidades',
    exp: 'Exp.',
    contact: 'Contacto',
  },
  theme: {
    dark: 'Oscuro',
    light: 'Claro',
    toggle: 'Cambiar tema',
  },
  language: {
    label: 'Idioma',
    en: 'Inglés',
    es: 'Español',
  },
  hero: {
    eyebrow: '// Desarrollador de Software',
    greeting: 'Soy',
    role: 'Desarrollador de Software, Automatización e IA',
  },
  about: {
    title: 'Sobre mí',
    galleryTitle: 'Algunas cosas que me encantan',
    gallerySubtitle: 'Estas son algunas de las cosas que me alegran fuera del código.',
  },
  projects: {
    title: 'Proyectos',
    subtitle: 'Algunas cosas que he construido.',
    all: 'Todos',
    noResults: 'Todavía no hay proyectos que coincidan con este filtro.',
    privateRepo: 'Repositorio privado — contáctame y te comparto el enlace.',
    liveDemo: 'Demo en vivo',
    preview: 'Vista previa',
    github: 'GitHub',
    modal: {
      close: 'Cerrar vista previa',
      previous: 'Captura anterior',
      next: 'Captura siguiente',
      screenshot: 'Captura',
    },
  },
  skills: {
    title: 'Habilidades',
    subtitle: 'Lenguajes, frameworks y herramientas que uso a diario.',
  },
  experience: {
    title: 'Experiencia y educación',
    subtitle: 'Dónde he trabajado y qué he estudiado.',
    experienceLabel: 'Experiencia',
    educationLabel: 'Educación',
    types: {
      higher_ed: 'Educación superior',
      technical: 'Técnico',
      high_school: 'Bachillerato',
    },
  },
  contact: {
    title: 'Contacto',
    subtitle:
      '¿Tienes un proyecto, una oportunidad o simplemente una pregunta? Envíame un mensaje o contáctame directamente.',
    links: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Correo',
    },
    form: {
      name: 'Nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando…',
      website: 'Sitio web',
    },
    errors: {
      name: 'El nombre debe tener entre 2 y 100 caracteres.',
      email: 'Introduce un correo electrónico válido.',
      message: 'El mensaje debe tener entre 10 y 2000 caracteres.',
      generic: 'No se pudo enviar tu mensaje. Inténtalo de nuevo más tarde.',
      rateLimited: 'Demasiados mensajes. Inténtalo de nuevo en unos minutos.',
      forbidden: 'Esta solicitud no está permitida desde este sitio.',
      invalidRequest: 'Solicitud no válida. Revisa tu mensaje e inténtalo de nuevo.',
    },
    success: '¡Mensaje enviado! Te responderé pronto.',
  },
  common: {
    downloadCv: 'Descargar CV',
    dismiss: 'Cerrar notificación',
  },
  terminal: {
    homeInfo: 'El portafolio de JuanMa — punto de partida. Prueba /about, /skills o /exp para ver más.',
    projectsInfo: (githubUrl: string) => `Consulta ${githubUrl} mientras tanto.`,
  },
};
