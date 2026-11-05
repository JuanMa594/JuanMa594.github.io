import type { StaticImageData } from 'next/image';
import type { Localized } from '../types/i18n';

import profile from '../assets/about/profile.png';
import coffee from '../assets/about/coffee.jpeg';
import diving from '../assets/about/diving.jpeg';
import fcBarcelona from '../assets/about/fc-barcelona.jpeg';
import photography from '../assets/about/photography.jpeg';
import piano from '../assets/about/piano.jpeg';
import cine from '../assets/about/ChristopherNolan.jpeg';

export interface AboutBio {
  intro: Localized<string>;
  paragraphs: Localized<string[]>;
}

export const ABOUT_BIO: AboutBio = {
  intro: {
    en: 'Software, Automation & AI developer passionate about Artificial Intelligence, Process Automation, Digital Transformation, and Cibersecurity.',
    es: 'Desarrollador de Software, Automatización e IA apasionado por la Inteligencia Artificial, la Automatización de Procesos, la Transformación Digital y la Ciberseguridad.',
  },
  paragraphs: {
    en: [
      'Experienced in developing intelligent applications and AI-powered assistants using Microsoft Copilot Studio, local LLMs, Python, C#, TypeScript, JavaScript, SQL, Power Automate, and Microsoft 365 technologies. I standout for my quick learning, adaptability, and teamwork, and I have a strong interest in continuing to develop technological solutions. I also have advanced English skills.',
      'My passion for technology comes from a genuine curiosity about how things work. I enjoy exploring new tools, understanding the mechanisms behind them, and staying ahead of emerging trends. What motivates me the most is the ability to learn continuously and transform new ideas into practical solutions that improve the way people work and collaborate.',
    ],
    es: [
      'Tengo experiencia en el desarrollo de aplicaciones inteligentes y asistentes impulsados por IA usando Microsoft Copilot Studio, LLMs locales, Python, C#, TypeScript, JavaScript, SQL, Power Automate y tecnologías de Microsoft 365. Destaco por mi rapidez de aprendizaje, adaptabilidad y trabajo en equipo, y tengo un gran interés en seguir desarrollando soluciones tecnológicas. También tengo un nivel avanzado de inglés.',
      'Mi pasión por la tecnología nace de una curiosidad genuina por entender cómo funcionan las cosas. Disfruto explorar nuevas herramientas, comprender los mecanismos que hay detrás y mantenerme al día con las tendencias emergentes. Lo que más me motiva es la capacidad de aprender continuamente y transformar nuevas ideas en soluciones prácticas que mejoren la forma en que las personas trabajan y colaboran.',
    ],
  },
};

export const PROFILE_TAGS: Localized<string[]> = {
  en: [
    'Full-Stack',
    'Automation',
    'Problem Solver',
    'AI Agents Dev',
    'Team Player',
    'Continuous Learner',
    'Tech Explorer',
  ],
  es: [
    'Full-Stack',
    'Automatización',
    'Resolución de problemas',
    'Desarrollo de agentes de IA',
    'Trabajo en equipo',
    'Aprendizaje continuo',
    'Explorador tecnológico',
  ],
};

export const PROFILE_PHOTO: StaticImageData = profile;

export interface GalleryItem {
  id: string;
  title: Localized<string>;
  category: Localized<string>;
  description: Localized<string>;
  imageSrc: StaticImageData;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'diving',
    category: {
      en: 'Adventure & Exploration',
      es: 'Aventura y exploración',
    },
    title: {
      en: 'Scuba Diving — Focus & Depth',
      es: 'Buceo — concentración y profundidad',
    },
    description: {
      en: 'Diving allows me to explore the underwater world and find peace in the tranquility of the ocean.',
      es: 'Bucear me permite explorar el mundo submarino y encontrar paz en la tranquilidad del océano.',
    },
    imageSrc: diving,
  },
  {
    id: 'piano',
    category: {
      en: 'Music',
      es: 'Música',
    },
    title: {
      en: 'Piano — Practice & Patience',
      es: 'Piano — práctica y paciencia',
    },
    description: {
      en: 'I enjoy playing the piano and practicing new pieces. It is a great way to relax and focus.',
      es: 'Disfruto tocar el piano y practicar nuevas piezas. Es una excelente forma de relajarme y concentrarme.',
    },
    imageSrc: piano,
  },
  {
    id: 'photography',
    category: {
      en: 'Hobby',
      es: 'Pasatiempo',
    },
    title: {
      en: 'Photography — Framing the World',
      es: 'Fotografía — enmarcar el mundo',
    },
    description: {
      en: 'I enjoy taking photos and capturing moments that tell a story. Photography allows me to see the world from different perspectives and appreciate the beauty in everyday life.',
      es: 'Disfruto tomando fotos y capturando momentos que cuentan una historia. La fotografía me permite ver el mundo desde distintas perspectivas y apreciar la belleza de lo cotidiano.',
    },
    imageSrc: photography,
  },
  {
    id: 'fc-barcelona',
    category: {
      en: 'Fandom & Sport',
      es: 'Afición y deporte',
    },
    title: {
      en: 'FC Barcelona — Passion & Pride',
      es: 'FC Barcelona — pasión y orgullo',
    },
    description: {
      en: 'I am a lifelong fan of FC Barcelona. Also, I play football and follow the sport closely.',
      es: 'Soy seguidor del FC Barcelona desde siempre. Además, juego al fútbol y sigo de cerca este deporte.',
    },
    imageSrc: fcBarcelona,
  },
  {
    id: 'coffee',
    category: {
      en: 'Daily Ritual',
      es: 'Ritual diario',
    },
    title: {
      en: 'Coffee — Fuel for the Craft',
      es: 'Café — combustible para el oficio',
    },
    description: {
      en: 'Capuccino, Moca, Latte, Espresso, Cold Brew... Every kind of coffee has its own story. I enjoy the ritual of brewing and savoring a good cup of coffee.',
      es: 'Capuchino, moca, latte, espresso, cold brew... Cada tipo de café tiene su propia historia. Disfruto el ritual de preparar y saborear una buena taza de café.',
    },
    imageSrc: coffee,
  },
  {
    id: 'cine',
    category: {
      en: 'Cinema',
      es: 'Cine',
    },
    title: {
      en: 'Cinema — Storytelling & Immersion',
      es: 'Cine — narrativa e inmersión',
    },
    description: {
      en: "I love watching movies and the art of cinema. Nolan's movies are my favorites.",
      es: 'Me encanta ver películas y el arte del cine. Las películas de Nolan son mis favoritas.',
    },
    imageSrc: cine,
  },
];
