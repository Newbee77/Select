import type { Dict, Lang } from './types';
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

const withTrailingSlash = (path: string): string => (path.endsWith('/') ? path : `${path}/`);

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
