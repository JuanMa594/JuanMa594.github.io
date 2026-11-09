export type Language = 'en' | 'es';

/**
 * A piece of content available in every supported language.
 * Used by static data files so the structure (ids, images, links) stays
 * in one place while the text can be rendered in the active language.
 */
export type Localized<T> = Record<Language, T>;
