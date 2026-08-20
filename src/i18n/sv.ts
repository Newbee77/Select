import type { Dict } from './types';

export const sv: Dict = {
  lang: 'sv',
  htmlLang: 'sv',
  skipLink: 'Hoppa till innehåll',
  nav: {
    whatWeDo: 'Vad vi gör',
    joinUs: 'Bli en av oss',
    about: 'Om oss',
    contact: 'Kontakt',
    employees: 'Medarbetare',
    openMenu: 'Öppna meny',
    closeMenu: 'Stäng meny',
    menuLabel: 'Mobilmeny',
    primaryNav: 'Huvudmeny',
  },
  footer: {
    tagline:
      'Seniora IT-konsulter i Öresundsregionen. Konsultägt, kräset och byggt av konsulter för konsulter.',
    siteHeading: 'Sajten',
    followHeading: 'Följ',
    linkedin: 'LinkedIn',
    employeesHeading: 'Medarbetare',
    employeesText: 'Logga in med ditt Select Society-konto för att nå SharePoint.',
    employeesCta: 'Till SharePoint →',
    privacyLink: 'Integritetspolicy',
    copyright: '© {year} SelectSociety Nordic AB · {orgNr} · Säte: {registeredOffice}',
  },
  meta: {
    home: {
      title: 'Select Society — Där IT-experter trivs',
      description:
        'Seniora IT-konsulter i Öresundsregionen. Konsultägt, kräset och byggt av konsulter för konsulter.',
    },
    whatWeDo: {
      title: 'Vad vi gör — Select Society',
      description:
        'Projektledning, kravanalys, arkitektur och förändringsledning från seniora konsulter. Ni får de personer ni träffat.',
    },
    joinUs: {
      title: 'Bli en av oss — Select Society',
      description:
        'Vi rekryterar sällan och noggrant. Frihet under ansvar, riktig kompetensutveckling och en gemenskap som märks.',
    },
    about: {
      title: 'Om oss — Select Society',
      description:
        'Ett konsultbolag startat av konsulter som tröttnade på att vänta på rätt arbetsplats.',
    },
    contact: {
      title: 'Kontakt — Select Society',
      description: 'Hör av dig till Select Society. Vi svarar inom ett dygn.',
    },
    privacy: {
      title: 'Integritetspolicy — Select Society',
      description: 'Så hanterar SelectSociety Nordic AB dina personuppgifter.',
    },
    notFound: {
      title: 'Sidan finns inte — Select Society',
      description: 'Sidan du sökte finns inte. Här är vägen tillbaka.',
    },
  },
  home: {
    hero: {
      eyebrow: 'IT-konsulter · Öresundsregionen',
      heading: 'Där IT-experter trivs',
      lead: 'Vi är seniorkonsulterna som tröttnade på att vänta på den perfekta arbetsgivaren. Så vi blev den.',
      ctaPrimary: 'Se vad vi gör →',
      ctaSecondary: 'Jobba hos oss',
    },
    trustBar: ['Enbart seniora konsulter', 'Frihet under ansvar', 'Konsultägt'],
    services: {
      eyebrow: 'För dig som köper IT',
      heading: 'Vi leder arbetet, ni får resultatet',
      lead: 'Vi börjar inte i lösningen. Först förstår vi vad ni faktiskt behöver — sen leder vi arbetet dit.',
      cards: [
        {
          number: '01',
          title: 'Analys',
          body: 'Vi kartlägger nuläget, sätter mål och väljer väg. Ibland är slutsatsen att ni inte behöver göra något alls. Det säger vi också.',
        },
        {
          number: '02',
          title: 'Genomförande',
          body: 'Vi leder genomförandet — projektet, införandet och förändringen som följer med. Seniora konsulter som tar ansvar utan att behöva hållas i handen.',
        },
        {
          number: '03',
          title: 'Uppföljning',
          body: 'Vi utvärderar det vi levererat och förbättrar processen. Ett avslutat uppdrag är inte samma sak som ett avslutat ansvar.',
        },
      ],
      cta: 'Läs mer om vårt erbjudande →',
    },
    whyUs: {
      eyebrow: 'Vår idé',
      heading: 'Vi byggde arbetsplatsen vi själva ville jobba på',
      paragraphs: [
        'Select Society startades av konsulter som hade sett hur branschen fungerar — och hur den skulle kunna fungera. Vi tror att nöjda konsulter levererar bättre. Det är inte en värdegrund på en vägg, det är hela affärsmodellen.',
        'Därför är vi få, seniora och noga med vilka som får följa med. Därför får våra konsulter frihet under ansvar, tid för utveckling och en gemenskap som faktiskt märks. Och därför får våra kunder människor som vill vara där de är.',
      ],
      cta: 'Om oss →',
    },
    forConsultants: {
      eyebrow: 'För dig som är konsult',
      heading: 'Gräset är faktiskt grönare här',
      lead: 'Vi rekryterar sällan och noggrant. Om du är senior, nyfiken och trött på att vara en rad i ett resursschema — hör av dig.',
      ticks: [
        'Frihet under ansvar — du väljer uppdrag, vi backar upp',
        'Tid och budget för kompetensutveckling',
        'En gemenskap som faktiskt träffas',
        'Rak kommunikation och ingen konsultfabrik',
      ],
      cta: 'Bli en av oss →',
    },
    ctaBand: {
      heading: 'Ska vi ta ett samtal?',
      text: 'Oavsett om du behöver en konsult eller vill bli en — börja här.',
      cta: 'Kontakta oss',
    },
  },
  pages: {
    home: { h1: 'Start' },
    whatWeDo: { h1: 'Vad vi gör' },
    joinUs: { h1: 'Bli en av oss' },
    about: { h1: 'Om oss' },
    contact: { h1: 'Kontakt' },
    privacy: { h1: 'Integritetspolicy' },
    notFound: {
      h1: 'Sidan finns inte',
      body: 'Sidan du sökte finns inte. Här är vägen tillbaka.',
      backHome: 'Till startsidan',
    },
  },
};
