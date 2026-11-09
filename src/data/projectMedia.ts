import type { StaticImageData } from 'next/image';
import type { Localized } from '../types/i18n';

import RickYMortyLogo from '../assets/projects/RickYMorty/RickYMorty.jpg';
import RickYMortySidebar from '../assets/projects/RickYMorty/Sidebar.png';
import RickYMortyFilters from '../assets/projects/RickYMorty/Filters.png';
import RickYMortyCharactersGallery from '../assets/projects/RickYMorty/CharactersGallery.png';

import HospitalLogin from '../assets/projects/Hospital/Image1(Login).png';
import HospitalPrincipal from '../assets/projects/Hospital/Image2(Principal).png';
import HospitalInventory from '../assets/projects/Hospital/Image3(Inventory).png';
import HospitalAlerts from '../assets/projects/Hospital/Image4(Alerts).png';
import HospitalSales from '../assets/projects/Hospital/Image5(Sales).png';
import HospitalSuppliers from '../assets/projects/Hospital/Image6(Suppliers).png';

import StreamingHome from '../assets/projects/Streaming/Home.png';
import StreamingSearchAll from '../assets/projects/Streaming/Search_TODO.png';
import StreamingSearchSongs from '../assets/projects/Streaming/Search_songs.png';
import StreamingLibrary from '../assets/projects/Streaming/Library.png';
import StreamingPlaylist from '../assets/projects/Streaming/Playlist.png';
import StreamingStatistics from '../assets/projects/Streaming/Statistycs.png';
import StreamingSettings from '../assets/projects/Streaming/Settings.png';

import InsecureVulHome from '../assets/projects/Vulnerabilidades/Sitio Inseguro (Menú principal).png';
import InsecureVulList from '../assets/projects/Vulnerabilidades/Sitio Inseguro (Lista Vulnerabilidades).png';
import InsecureVulExplan from '../assets/projects/Vulnerabilidades/Sitio Inseguro (Explicación Error).png';
import InsecureVulFix from '../assets/projects/Vulnerabilidades/Sitio Inseguro (Arreglo).png';
import SecureVulHome from '../assets/projects/Vulnerabilidades/Sitio Seguro (Menú principal).png';
import SecureVulLists from '../assets/projects/Vulnerabilidades/Sitio Seguro (Lista Vulnerabilidades Solucionadas).png';
import SecureVulExplan from '../assets/projects/Vulnerabilidades/Sitio Seguro (Explicación Error).png';

export interface GalleryImage {
  src: StaticImageData;
  caption: Localized<string>;
}

export interface ProjectMedia {
  /** Small square mark shown in the card header instead of the initial-letter avatar. */
  logo?: StaticImageData;
  gallery?: GalleryImage[];
  /** Shown on the card when the repo was built together with other people. */
  collaborationNote?: Localized<string>;
}

/**
 * Hand-curated media for specific repos, keyed by the GitHub repo name (FeaturedProject.slug).
 * Repos without an entry here simply render without a logo/gallery/note, as before.
 */
export const PROJECT_MEDIA: Record<string, ProjectMedia> = {
  Streaming: {
    gallery: [
      { src: StreamingHome, caption: { en: 'Home', es: 'Inicio' } },
      { src: StreamingSearchAll, caption: { en: 'Search — all results', es: 'Búsqueda — todos los resultados' } },
      { src: StreamingSearchSongs, caption: { en: 'Search — songs', es: 'Búsqueda — canciones' } },
      { src: StreamingLibrary, caption: { en: 'Library', es: 'Biblioteca' } },
      { src: StreamingPlaylist, caption: { en: 'Playlist', es: 'Lista de reproducción' } },
      { src: StreamingStatistics, caption: { en: 'Listening statistics', es: 'Estadísticas de escucha' } },
      { src: StreamingSettings, caption: { en: 'Settings', es: 'Ajustes' } },
    ],
  },
  ProyectoRickYMorty: {
    logo: RickYMortyLogo,
    gallery: [
      { src: RickYMortySidebar, caption: { en: 'Sidebar navigation', es: 'Navegación lateral' } },
      { src: RickYMortyFilters, caption: { en: 'Character filters', es: 'Filtros de personajes' } },
      { src: RickYMortyCharactersGallery, caption: { en: 'Characters gallery', es: 'Galería de personajes' } },
    ],
  },
  'Hospital-JM-': {
    collaborationNote: {
      en: 'Collaborative university project, built together with classmates.',
      es: 'Proyecto universitario colaborativo, desarrollado junto a compañeros de clase.',
    },
    gallery: [
      { src: HospitalLogin, caption: { en: 'Login screen', es: 'Pantalla de inicio de sesión' } },
      { src: HospitalPrincipal, caption: { en: 'Main dashboard', es: 'Panel principal' } },
      { src: HospitalInventory, caption: { en: 'Inventory management', es: 'Gestión de inventario' } },
      { src: HospitalAlerts, caption: { en: 'Stock alerts', es: 'Alertas de stock' } },
      { src: HospitalSales, caption: { en: 'Sales module', es: 'Módulo de ventas' } },
      { src: HospitalSuppliers, caption: { en: 'Suppliers management', es: 'Gestión de proveedores' } },
    ],
  },
  'Vulnerabilidades_MalasPracticasFrecuentes': {
    gallery: [
      { src: InsecureVulHome, caption: { en: 'Insecure Web Home', es: 'Inicio Sitio Inseguro' } },
      { src: InsecureVulList, caption: { en: 'All Vulnerabilities on the Website', es: 'Todas las vulnerabilidades en el sitio web' } },
      { src: InsecureVulExplan, caption: { en: 'Explanation — each vulnerability includes an in-depth explanation.', es: 'Explicación — cada vulnerabilidad incluye una explicación detallada.' } },
      { src: InsecureVulFix, caption: { en: 'Recommendations', es: 'Recomendaciones' } },
      { src: SecureVulHome, caption: { en: 'Secure Web Home', es: 'Inicio Sitio Seguro' } },
      { src: SecureVulLists, caption: { en: 'All vulnerabilities fixed on the website', es: 'Todas las vulnerabilidades solucionadas en el sitio web' } },
      { src: SecureVulExplan, caption: { en: 'Explanation — same as in the insecure version.', es: 'Explicación — la misma que en la versión insegura.' } },
    ],
  }, 
};
