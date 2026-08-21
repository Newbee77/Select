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
  services: {
    hero: {
      eyebrow: 'För dig som köper IT',
      heading: 'Seniora konsulter, utan mellanhänder',
      lead: 'Ni får de personer ni träffat. Inga juniorer i förklädnad, ingen säljare som lovar något teamet inte känner till.',
    },
    process: {
      steps: [
        {
          number: '01',
          title: 'Analys',
          body: 'Vi börjar med att förstå. Nuläge, mål, begränsningar, och vad som faktiskt skaver. Ni får en rekommendation vi kan stå för — inte den som råkar sälja flest timmar.',
        },
        {
          number: '02',
          title: 'Genomförande',
          body: 'Projektledning, utvecklingsledning och förändringsledning. Vi arbetar i era processer, inte tvärtom. Ni får löpande insyn — inga överraskningar vid leverans.',
        },
        {
          number: '03',
          title: 'Uppföljning',
          body: 'Vi mäter mot målen vi satte, dokumenterar det som gjordes och lämnar över så att ni klarar er utan oss. Det är hela poängen.',
        },
      ],
    },
    skills: {
      eyebrow: 'Vad vi är bra på',
      heading: 'Vi leder, analyserar och förändrar',
      groups: [
        {
          label: 'Leda',
          tags: [
            'Projektledning',
            'IT-projektledning',
            'Utvecklingsledning',
            'Förändringsledning',
          ],
        },
        {
          label: 'Analysera och designa',
          tags: ['Kravanalys', 'Arkitektur', 'Lösningsdesign'],
        },
        {
          label: 'Förändra',
          tags: ['Digitalisering', 'Processutveckling', 'Systeminförande'],
        },
      ],
      note: 'Behöver genomförandet utvecklare tar vi in dem — men det är ledningen och arbetet dit som är vårt.',
    },
    ctaBand: {
      heading: 'Behöver ni förstärkning?',
      text: 'Berätta vad ni står inför så återkommer vi inom ett dygn.',
      cta: 'Kontakta oss',
    },
  },
  careers: {
    hero: {
      eyebrow: 'Karriär',
      heading: 'Vi är kräsna. Var det du också.',
      lead: 'Select Society växer långsamt med flit. Vi tar in människor vi själva vill jobba med — och som har något att lära oss.',
    },
    perks: [
      {
        number: '01',
        title: 'Frihet under ansvar',
        body: 'Du är senior. Vi behandlar dig därefter. Du är med och väljer uppdrag, och vi säger nej till sådant som inte passar dig.',
      },
      {
        number: '02',
        title: 'Utveckling på riktigt',
        body: 'Tid och budget för certifieringar, konferenser och det där du velat lära dig men aldrig hunnit.',
      },
      {
        number: '03',
        title: 'En gemenskap som märks',
        body: 'Vi ses regelbundet, delar kunskap och har roligt. Konsultrollen behöver inte vara ensam.',
      },
      {
        number: '04',
        title: 'Rak kommunikation',
        body: 'Öppna villkor, tydliga förväntningar, inga överraskningar i lönekuvertet.',
      },
    ],
    fit: {
      heading: 'Passar du hos oss?',
      paragraphs: [
        'Vi letar inte efter en viss metod eller certifiering. Vi söker efter personer som är seniora nog att veta vad de gör, ödmjuka nog att fortsätta lära sig, och sällskapliga nog att vilja bidra till en grupp.',
        'Har du några års erfarenhet och känner igen dig — skicka ett mejl. Vi läser allt, och vi svarar. Har vi inget just nu säger vi det rakt ut.',
      ],
    },
    ctaBand: {
      heading: 'Skicka ett mejl, så tar vi det därifrån',
      text: 'Ingen mall, inget personligt brev på tre sidor. Berätta kort vem du är och vad du vill göra.',
    },
  },
  about: {
    hero: {
      eyebrow: 'Om Select Society',
      heading: 'Vi tog saken i egna händer',
      lead: 'Ett konsultbolag startat av konsulter, för konsulter — och därför också bättre för kunderna.',
    },
    story: {
      paragraphs: [
        'Vi hade alla jobbat på konsultbolag förut. Vi visste vad som fungerade och vad som inte gjorde det. Framför allt visste vi hur ofta det senare berodde på att någon längre upp aldrig hade suttit i uppdraget.',
        'Så vi slutade vänta på att någon annan skulle bygga rätt arbetsplats, och byggde den själva. Select Society drivs på principen frihet under ansvar: vi litar på att seniora människor fattar bra beslut, och vi bygger organisationen därefter.',
        'Det får konsekvenser. Vi växer långsamt. Vi tackar nej till uppdrag som inte passar. Vi lägger tid och pengar på sådant som inte syns i en kvartalsrapport. Och det är precis därför det fungerar.',
      ],
    },
    values: {
      items: [
        {
          title: 'Frihet under ansvar',
          consequence: 'Vi kontrollerar inte tider. Vi förväntar oss omdöme.',
        },
        {
          title: 'Seniort hela vägen',
          consequence: 'Den du träffar i säljmötet är den som gör jobbet.',
        },
        {
          title: 'Gemenskap före storlek',
          consequence:
            'Vi är hellre trettio som känner varandra än trehundra som inte gör det.',
        },
      ],
    },
    team: {
      members: [
        { name: 'Namn tillkommer', role: 'Roll tillkommer' },
        { name: 'Namn tillkommer', role: 'Roll tillkommer' },
        { name: 'Namn tillkommer', role: 'Roll tillkommer' },
        { name: 'Namn tillkommer', role: 'Roll tillkommer' },
        { name: 'Namn tillkommer', role: 'Roll tillkommer' },
        { name: 'Namn tillkommer', role: 'Roll tillkommer' },
      ],
    },
  },
  contact: {
    heading: 'Hör av dig',
    lead: 'Vi svarar inom ett dygn, vardagar. Ofta snabbare.',
    details: [
      {
        label: 'Var vi finns',
        value: 'Vi har inget kontor att bjuda in dig till. Vi kommer dit ni är.',
      },
      {
        label: 'Räckvidd',
        value: 'Vi utgår från Skåne och tar uppdrag i södra Sverige och Köpenhamn.',
      },
      { label: 'E-post', value: '{email}', note: 'Gäller även jobbansökningar.' },
      { label: 'LinkedIn', value: '{linkedin}' },
      { label: 'Bolag', value: '{name} · Org.nr {orgNr} · Säte: {registeredOffice}' },
    ],
    form: {
      title: 'Skicka ett meddelande',
      name: 'Namn',
      email: 'E-post',
      role: 'Jag är',
      rolePlaceholder: 'Välj ett alternativ',
      roleOptions: [
        { value: 'kund', label: 'Kund' },
        { value: 'konsult', label: 'Konsult' },
        { value: 'annat', label: 'Annat' },
      ],
      message: 'Meddelande',
      submit: 'Skicka',
      sending: 'Skickar…',
      consent: 'Jag godkänner att mina uppgifter behandlas enligt {link}.',
      consentLinkLabel: 'integritetspolicyn',
      honeypot: 'Lämna det här fältet tomt',
      success: 'Tack! Vi hör av oss inom ett dygn.',
      failure: 'Meddelandet kunde inte skickas. Mejla oss på {email} i stället.',
      errors: {
        name: 'Fyll i ditt namn.',
        email: 'Fyll i din e-postadress.',
        emailFormat: 'Kontrollera e-postadressen.',
        message: 'Skriv ett meddelande.',
        consent: 'Du behöver godkänna behandlingen av dina uppgifter.',
      },
    },
  },
  privacy: {
    heading: 'Integritetspolicy',
    lastUpdatedLabel: 'Senast uppdaterad',
    // TODO (Johan): fyll i publiceringsdatumet här när policyn är granskad och publicerad.
    lastUpdated: '(fylls i vid publicering)',
    sections: [
      {
        heading: 'Personuppgiftsansvarig',
        blocks: [
          {
            kind: 'paragraph',
            text: '{name}, org.nr {orgNr}, med säte i {registeredOffice}, är personuppgiftsansvarig för behandlingen av personuppgifter på selectsociety.se.',
          },
          { kind: 'paragraph', text: 'Kontakt i integritetsfrågor: {email}' },
        ],
      },
      {
        heading: 'Vilka uppgifter vi samlar in',
        blocks: [
          { kind: 'paragraph', text: 'Vi samlar bara in uppgifter du själv lämnar till oss.' },
          {
            kind: 'paragraph',
            lead: 'Via kontaktformuläret:',
            text: 'namn, e-postadress, vilken kategori du anger (kund, konsult eller annat) och innehållet i ditt meddelande.',
          },
          {
            kind: 'paragraph',
            lead: 'Om du mejlar oss direkt:',
            text: 'de uppgifter som finns i ditt mejl.',
          },
          {
            kind: 'paragraph',
            lead: 'Vi använder inga kakor och ingen besöksstatistik.',
            text: 'Vi mäter inte hur du rör dig på sajten, och vi delar inga uppgifter med annonsnätverk.',
          },
          // TODO (Johan): lägg till ett stycke om serverloggar när hosting är vald.
          // IP-adresser i åtkomstloggar är personuppgifter och måste beskrivas här.
        ],
      },
      {
        heading: 'Ändamål och laglig grund',
        blocks: [
          {
            kind: 'table',
            headers: ['Vad vi gör', 'Varför', 'Laglig grund'],
            rows: [
              [
                'Besvarar din förfrågan',
                'Du har kontaktat oss och vill ha svar',
                'Berättigat intresse (art. 6.1 f)',
              ],
              [
                'Behandlar din jobbansökan',
                'Du söker arbete hos oss',
                'Berättigat intresse och åtgärder inför avtal (art. 6.1 b och f)',
              ],
              [
                'Sparar affärskorrespondens',
                'Vi behöver kunna följa upp överenskommelser',
                'Berättigat intresse (art. 6.1 f)',
              ],
            ],
          },
        ],
      },
      {
        heading: 'Hur länge vi sparar uppgifterna',
        // TODO (Johan): bekräfta lagringstiderna nedan — de är förslag, inte beslut.
        blocks: [
          {
            kind: 'list',
            items: [
              'Allmänna förfrågningar: raderas senast tolv månader efter att ärendet avslutats.',
              'Jobbansökningar: sparas i tolv månader efter att rekryteringen avslutats, om du inte samtycker till längre lagring.',
              'Uppgifter i affärsrelationer: sparas så länge relationen pågår och därefter enligt bokföringslagen, sju år.',
            ],
          },
        ],
      },
      {
        heading: 'Vem som får ta del av uppgifterna',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Vi säljer aldrig dina uppgifter och delar dem inte för marknadsföringsändamål.',
          },
          {
            kind: 'paragraph',
            text: 'Uppgifterna hanteras av oss själva och av de leverantörer som driver våra system:',
          },
          {
            kind: 'list',
            items: [
              'Formspree — tar emot och vidarebefordrar kontaktformuläret',
              // TODO (Johan): bekräfta att bolaget kör Microsoft 365 innan detta publiceras.
              'Microsoft — e-post och dokumenthantering',
              // TODO (Johan): lägg till hostingleverantören i listan när den är vald.
            ],
          },
          {
            kind: 'paragraph',
            text: 'Samtliga är personuppgiftsbiträden och behandlar uppgifterna enligt biträdesavtal och endast på våra instruktioner.',
          },
          // TODO (Johan): om Formspree behandlar uppgifter utanför EU/EES — beskriv
          // överföringsmekanismen (EU–US Data Privacy Framework eller standardavtals-
          // klausuler) i ett eget stycke här. Kontrollera även att DPA är påskrivet.
        ],
      },
      {
        heading: 'Dina rättigheter',
        blocks: [
          { kind: 'paragraph', text: 'Du har rätt att:' },
          {
            kind: 'list',
            items: [
              'få veta vilka uppgifter vi har om dig och få en kopia av dem',
              'få felaktiga uppgifter rättade',
              'få dina uppgifter raderade',
              'invända mot vår behandling eller begära att den begränsas',
              'få ut dina uppgifter i ett maskinläsbart format',
            ],
          },
          {
            kind: 'paragraph',
            text: 'Hör av dig till {email} så hjälper vi dig. Vi svarar inom en månad.',
          },
          {
            kind: 'paragraph',
            text: 'Om du tycker att vi hanterar dina uppgifter felaktigt har du rätt att klaga hos Integritetsskyddsmyndigheten (IMY), imy.se.',
          },
        ],
      },
      {
        heading: 'Kakor',
        blocks: [
          {
            kind: 'paragraph',
            text: 'selectsociety.se använder inga kakor. Vi laddar heller inga typsnitt, kartor eller videospelare från tredje part, så inga uppgifter om ditt besök lämnar sajten.',
          },
        ],
      },
      {
        heading: 'Ändringar i denna policy',
        blocks: [
          {
            kind: 'paragraph',
            text: 'Om vi ändrar hur vi behandlar personuppgifter uppdaterar vi den här sidan och ändrar datumet överst.',
          },
        ],
      },
      {
        heading: 'Kontakt',
        blocks: [{ kind: 'contact' }],
      },
    ],
  },
};
