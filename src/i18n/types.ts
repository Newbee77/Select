export type Lang = 'sv' | 'en';

export interface NavDict {
  whatWeDo: string;
  joinUs: string;
  about: string;
  contact: string;
  employees: string;
  openMenu: string;
  closeMenu: string;
  menuLabel: string;
  primaryNav: string;
}

export interface FooterDict {
  tagline: string;
  siteHeading: string;
  followHeading: string;
  linkedin: string;
  employeesHeading: string;
  employeesText: string;
  employeesCta: string;
  privacyLink: string;
  /** Template with {year}, {orgNr} and {registeredOffice} placeholders. */
  copyright: string;
}

export interface MetaEntry {
  title: string;
  description: string;
}

export interface MetaDict {
  home: MetaEntry;
  whatWeDo: MetaEntry;
  joinUs: MetaEntry;
  about: MetaEntry;
  contact: MetaEntry;
  privacy: MetaEntry;
  notFound: MetaEntry;
}

export interface PagePlaceholder {
  h1: string;
}

export interface NotFoundPage extends PagePlaceholder {
  body: string;
  backHome: string;
}

export interface HomeCard {
  number: string;
  title: string;
  body: string;
}

export interface HomeDict {
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trustBar: string[];
  services: {
    eyebrow: string;
    heading: string;
    lead: string;
    cards: HomeCard[];
    cta: string;
  };
  whyUs: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    cta: string;
  };
  forConsultants: {
    eyebrow: string;
    heading: string;
    lead: string;
    ticks: string[];
    cta: string;
  };
  ctaBand: {
    heading: string;
    text: string;
    cta: string;
  };
}

export interface PagesDict {
  home: PagePlaceholder;
  whatWeDo: PagePlaceholder;
  joinUs: PagePlaceholder;
  about: PagePlaceholder;
  contact: PagePlaceholder;
  privacy: PagePlaceholder;
  notFound: NotFoundPage;
}

export interface ProcessStep {
  number: string;
  title: string;
  body: string;
}

export interface SkillGroup {
  label: string;
  tags: string[];
}

export interface ServicesDict {
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
  process: {
    steps: ProcessStep[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    groups: SkillGroup[];
    note: string;
  };
  ctaBand: {
    heading: string;
    text: string;
    cta: string;
  };
}

export interface CareerPerk {
  number: string;
  title: string;
  body: string;
}

export interface CareersDict {
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
  perks: CareerPerk[];
  fit: {
    heading: string;
    paragraphs: string[];
  };
  ctaBand: {
    heading: string;
    text: string;
  };
}

export interface AboutValue {
  title: string;
  consequence: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface AboutDict {
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
  story: {
    paragraphs: string[];
  };
  values: {
    items: AboutValue[];
  };
  team: {
    members: TeamMember[];
  };
}

export interface ContactDetail {
  label: string;
  /** Rendered as-is. Values that live in site.ts are interpolated by the page. */
  value: string;
  note?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface ContactFormDict {
  title: string;
  name: string;
  email: string;
  role: string;
  rolePlaceholder: string;
  roleOptions: SelectOption[];
  message: string;
  submit: string;
  sending: string;
  /** Template with a {link} placeholder for the privacy policy link. */
  consent: string;
  consentLinkLabel: string;
  /** Honeypot label — visually hidden, read by bots only. */
  honeypot: string;
  success: string;
  failure: string;
  errors: {
    name: string;
    email: string;
    emailFormat: string;
    message: string;
    consent: string;
  };
}

export interface ContactDict {
  heading: string;
  lead: string;
  /** Templates may contain {name}, {orgNr} and {registeredOffice}. */
  details: ContactDetail[];
  form: ContactFormDict;
}

export type PrivacyBlock =
  | { kind: 'paragraph'; lead?: string; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'table'; headers: string[]; rows: string[][] }
  | { kind: 'contact' };

export interface PrivacySection {
  heading: string;
  blocks: PrivacyBlock[];
}

export interface PrivacyDict {
  heading: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: PrivacySection[];
}

export interface Dict {
  lang: Lang;
  htmlLang: string;
  skipLink: string;
  nav: NavDict;
  footer: FooterDict;
  meta: MetaDict;
  pages: PagesDict;
  home: HomeDict;
  services: ServicesDict;
  careers: CareersDict;
  about: AboutDict;
  contact: ContactDict;
  privacy: PrivacyDict;
}
