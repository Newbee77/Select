import type { Dict, Lang } from './types';
import { site } from '../config/site';
import { sv } from './sv';
import { en } from './en';

export const PAGE_MAP = [
  { sv: '/', en: '/en/' },
  { sv: '/vad-vi-gor', en: '/en/what-we-do' },
  { sv: '/bli-en-av-oss', en: '/en/join-us' },
  { sv: '/om-oss', en: '/en/about' },
  { sv: '/kontakt', en: '/en/contact' },
  { sv: '/integritetspolicy', en: '/en/privacy' },
] as const;

export const getLang = (url: URL): Lang => (url.pathname.startsWith('/en') ? 'en' : 'sv');

export const t = (lang: Lang): Dict => (lang === 'en' ? en : sv);

export const withTrailingSlash = (path: string): string =>
  path.endsWith('/') ? path : `${path}/`;

export const altPath = (path: string, lang: Lang): string => {
  const current = withTrailingSlash(path);
  const entry = PAGE_MAP.find(
    (page) => withTrailingSlash(page.sv) === current || withTrailingSlash(page.en) === current,
  );

  if (!entry) {
    return lang === 'sv' ? '/' : '/en/';
  }

  return lang === 'sv' ? entry.sv : entry.en;
};

/**
 * The PAGE_MAP entry for a path, or undefined when the path isn't one of the
 * twelve bilingual content routes (e.g. a 404 page). Used for hreflang, which
 * must be omitted rather than defaulted on pages with no real translation.
 */
export const findPageEntry = (path: string): (typeof PAGE_MAP)[number] | undefined => {
  const current = withTrailingSlash(path);
  return PAGE_MAP.find(
    (page) => withTrailingSlash(page.sv) === current || withTrailingSlash(page.en) === current,
  );
};

/** Replaces {token} placeholders in dictionary strings with real values. */
export const interpolate = (template: string, values: Record<string, string>): string =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);

/** LinkedIn URL without protocol or www — what the plan shows on the contact page. */
export const linkedinDisplay = site.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '');

/** The site.ts values that dictionary templates are allowed to reference. */
export const siteTokens: Record<string, string> = {
  name: site.name,
  shortName: site.shortName,
  email: site.email,
  orgNr: site.orgNr,
  registeredOffice: site.registeredOffice,
  linkedin: linkedinDisplay,
};
