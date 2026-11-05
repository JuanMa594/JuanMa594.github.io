import type { EducationItem } from '../types/experience';
import itmLogo from '../assets/experience/itm.jpg';
import senaLogo from '../assets/experience/sena.jpg';
import liceoLogo from '../assets/experience/liceo-antioqueno.jpg';

// Reverse chronological order.
export const EDUCATION: EducationItem[] = [
  {
    id: 'itm',
    degree: {
      en: 'Technologist in Software Development',
      es: 'Tecnólogo en Desarrollo de Software',
    },
    institution: 'Institución Universitaria ITM',
    dateRange: {
      en: '2023 – Present',
      es: '2023 – Actualidad',
    },
    type: 'higher_ed',
    description: {
      en: 'Currently studying.',
      es: 'Actualmente en curso.',
    },
    logo: itmLogo,
    current: true,
  },
  {
    id: 'sena',
    degree: {
      en: 'Systems Technician',
      es: 'Técnico en Sistemas',
    },
    institution: 'SENA',
    dateRange: {
      en: '2021 – 2022',
      es: '2021 – 2022',
    },
    type: 'technical',
    description: {
      en: 'Technical program completed alongside high school.',
      es: 'Programa técnico completado junto con el bachillerato.',
    },
    logo: senaLogo,
  },
  {
    id: 'liceo-antioqueno',
    degree: {
      en: 'High School Diploma',
      es: 'Bachiller Académico',
    },
    institution: 'Liceo Antioqueño',
    dateRange: {
      en: '2017 – 2022',
      es: '2017 – 2022',
    },
    type: 'high_school',
    description: {
      en: 'Grades 6 to 11.',
      es: 'Grados 6 a 11.',
    },
    logo: liceoLogo,
  },
];
