import type { Dict } from './types';

export const en: Dict = {
  lang: 'en',
  htmlLang: 'en',
  skipLink: 'Skip to content',
  nav: {
    whatWeDo: 'What we do',
    joinUs: 'Join us',
    about: 'About',
    contact: 'Contact',
    employees: 'Employees',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuLabel: 'Mobile menu',
    primaryNav: 'Main navigation',
  },
  footer: {
    tagline:
      'Senior IT consultants in the Øresund region. Consultant-owned, selective, built by consultants for consultants.',
    siteHeading: 'Site',
    followHeading: 'Follow',
    linkedin: 'LinkedIn',
    employeesHeading: 'Employees',
    employeesText: 'Sign in with your Select Society account to reach SharePoint.',
    employeesCta: 'To SharePoint →',
    privacyLink: 'Privacy policy',
    copyright:
      '© {year} SelectSociety Nordic AB · Reg. no. {orgNr} · Registered office: {registeredOffice}',
  },
  meta: {
    home: {
      title: 'Select Society — Where IT experts thrive',
      description:
        'Senior IT consultants in the Øresund region. Consultant-owned, selective, built by consultants for consultants.',
    },
    whatWeDo: {
      title: 'What we do — Select Society',
      description:
        'Project management, requirements, architecture and change leadership from senior consultants. You get the people you met.',
    },
    joinUs: {
      title: 'Join us — Select Society',
      description:
        'We recruit rarely and carefully. Freedom with responsibility, real development and a community you can feel.',
    },
    about: {
      title: 'About — Select Society',
      description:
        'A consultancy started by consultants who got tired of waiting for the right workplace.',
    },
    contact: {
      title: 'Contact — Select Society',
      description: 'Get in touch with Select Society. We reply within one business day.',
    },
    privacy: {
      title: 'Privacy policy — Select Society',
      description: 'How SelectSociety Nordic AB handles your personal data.',
    },
    notFound: {
      title: 'Page not found — Select Society',
      description: "The page you were looking for doesn't exist. Here's the way back.",
    },
  },
  home: {
    hero: {
      eyebrow: 'IT consultants · The Øresund region',
      heading: 'Where IT experts thrive',
      lead: "We're the senior consultants who got tired of waiting for the perfect employer. So we became one.",
      ctaPrimary: 'See what we do →',
      ctaSecondary: 'Work with us',
    },
    trustBar: ['Senior consultants only', 'Freedom with responsibility', 'Consultant-owned'],
    services: {
      eyebrow: 'For clients',
      heading: 'We lead the work, you get the result',
      lead: "We don't start with the solution. First we understand what you actually need, then we lead the work there.",
      cards: [
        {
          number: '01',
          title: 'Analysis',
          body: "We map where you are, set the goal and pick the route. Sometimes the answer is that you don't need to do anything. We'll say that too.",
        },
        {
          number: '02',
          title: 'Delivery',
          body: 'We lead the delivery — the project, the rollout and the change that comes with it. Senior consultants who take responsibility without hand-holding.',
        },
        {
          number: '03',
          title: 'Follow-through',
          body: "We evaluate what we delivered and improve the process. A finished assignment isn't the same as finished responsibility.",
        },
      ],
      cta: 'More about what we do →',
    },
    whyUs: {
      eyebrow: 'Our idea',
      heading: 'We built the workplace we wanted to work at',
      paragraphs: [
        "Select Society was started by consultants who had seen how the industry works — and how it could work. We believe consultants who enjoy their work deliver better work. That's not a poster in the hallway, it's the business model.",
        'So we stay small, senior and selective. Our consultants get freedom with responsibility, real time to develop, and a community you can actually feel. And our clients get people who want to be where they are.',
      ],
      cta: 'About us →',
    },
    forConsultants: {
      eyebrow: 'For consultants',
      heading: 'The grass really is greener here',
      lead: "We recruit rarely and carefully. If you're senior, curious and tired of being a line in a resourcing spreadsheet — get in touch.",
      ticks: [
        'Freedom with responsibility — you pick the assignment, we back you up',
        'Real time and budget to keep learning',
        'A community that actually meets up',
        'Straight talk and no consultancy factory',
      ],
      cta: 'Join us →',
    },
    ctaBand: {
      heading: 'Shall we talk?',
      text: 'Whether you need a consultant or want to become one — start here.',
      cta: 'Get in touch',
    },
  },
  pages: {
    home: { h1: 'Home' },
    whatWeDo: { h1: 'What we do' },
    joinUs: { h1: 'Join us' },
    about: { h1: 'About' },
    contact: { h1: 'Contact' },
    privacy: { h1: 'Privacy policy' },
    notFound: {
      h1: 'Page not found',
      body: "The page you were looking for doesn't exist. Here's the way back.",
      backHome: 'Back to the homepage',
    },
  },
  services: {
    hero: {
      eyebrow: 'For clients',
      heading: 'Senior consultants, no middlemen',
      lead: "You get the people you met. No juniors in disguise, no salesperson promising things the team hasn't heard about.",
    },
    process: {
      steps: [
        {
          number: '01',
          title: 'Analysis',
          body: "We start by understanding. Where you are, where you're going, what's constraining you and actuall pain-points. You get a recommendation we can stand behind — not the one that happens to sell the most hours.",
        },
        {
          number: '02',
          title: 'Delivery',
          body: 'Project management, development leadership and change management. We work inside your process, not around it. You get continuous visibility — no surprises at delivery.',
        },
        {
          number: '03',
          title: 'Follow-through',
          body: "We measure against the goals we set, document what was done, and hand over so you can run it without us. That's the whole point.",
        },
      ],
    },
    skills: {
      eyebrow: "What we're good at",
      heading: 'We lead, analyse and transform',
      groups: [
        {
          label: 'Leading',
          tags: [
            'Project management',
            'IT project management',
            'Development leadership',
            'Change management',
          ],
        },
        {
          label: 'Analysing & designing',
          tags: ['Requirements analysis', 'Architecture', 'Solution design'],
        },
        {
          label: 'Transforming',
          tags: ['Digitalisation', 'Process improvement', 'System implementation'],
        },
      ],
      note: 'When delivery needs developers, we bring them in — but the leadership and the road there is what we do.',
    },
    ctaBand: {
      heading: 'Need reinforcements?',
      text: "Tell us what you're facing and we'll come back within a day.",
      cta: 'Get in touch',
    },
  },
  careers: {
    hero: {
      eyebrow: 'Careers',
      heading: "We're picky. You should be too.",
      lead: 'Select Society grows slowly on purpose. We bring in people we want to work with — and who have something to teach us.',
    },
    perks: [
      {
        number: '01',
        title: 'Freedom with responsibility',
        body: "You're senior. We treat you accordingly. You help choose your assignments, and we say no to the ones that don't fit.",
      },
      {
        number: '02',
        title: 'Actual development',
        body: "Time and budget for certifications, conferences and the thing you've been meaning to learn but never had time for.",
      },
      {
        number: '03',
        title: 'A community you will notice',
        body: "We meet regularly, share knowledge and enjoy ourselves. Consulting doesn't have to be lonely.",
      },
      {
        number: '04',
        title: 'Straight talk',
        body: 'Open terms, clear expectations, no surprises in the payslip.',
      },
    ],
    fit: {
      heading: 'Would you fit in?',
      paragraphs: [
        "We're not looking for a particular method or certification. We're looking for people senior enough to know what they're doing, humble enough to keep learning, and sociable enough to want to contribute to a group.",
        "If you've got a few years behind you and recognise yourself in that description — send an email. We read everything, and we reply. If we've got nothing right now, we'll let you know.",
      ],
    },
    ctaBand: {
      heading: "Send an email and we'll take it from there",
      text: 'No template, no three-page cover letter. Tell us briefly who you are and what you want to do.',
    },
  },
  about: {
    hero: {
      eyebrow: 'About Select Society',
      heading: 'We took matters into our own hands',
      lead: 'A consultancy started by consultants, for consultants — and therefore better for clients too.',
    },
    story: {
      paragraphs: [
        "We had all worked at consultancies before. We knew what worked and what didn't. Above all, we knew how often the latter came down to someone further up who had never actually sat in the assignment.",
        'So we stopped waiting for someone else to build the right workplace and built it ourselves. Select Society runs on freedom with responsibility: we trust senior people to make good decisions, and we build the organisation around that.',
        "It has consequences. We grow slowly. We turn down assignments that don't fit. We spend time and money on things that never show up in a quarterly report. And that's exactly why it works.",
      ],
    },
    values: {
      items: [
        {
          title: 'Freedom with responsibility',
          consequence: "We don't track hours. We expect judgement.",
        },
        {
          title: 'Senior all the way',
          consequence: 'The person you meet in the sales meeting does the work.',
        },
        {
          title: 'Community over scale',
          consequence:
            "We'd rather be thirty people who know each other than three hundred who don't.",
        },
      ],
    },
    team: {
      members: [
        { name: 'Name to be added', role: 'Role to be added' },
        { name: 'Name to be added', role: 'Role to be added' },
        { name: 'Name to be added', role: 'Role to be added' },
        { name: 'Name to be added', role: 'Role to be added' },
        { name: 'Name to be added', role: 'Role to be added' },
        { name: 'Name to be added', role: 'Role to be added' },
      ],
    },
  },
};
