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
  contact: {
    heading: 'Get in touch',
    lead: 'We reply within one business day. Usually faster.',
    details: [
      {
        label: 'Where we are',
        value: "We don't have an office to invite you to. We come to where you are.",
      },
      {
        label: 'Reach',
        value:
          "We're based in Skåne and take assignments across southern Sweden and Copenhagen.",
      },
      { label: 'Email', value: '{email}', note: 'Also for job applications.' },
      { label: 'LinkedIn', value: '{linkedin}' },
      {
        label: 'Company',
        value: '{name} · Reg. no. {orgNr} · Registered office: {registeredOffice}, Sweden',
      },
    ],
    form: {
      title: 'Send a message',
      name: 'Name',
      email: 'Email',
      role: 'I am a',
      rolePlaceholder: 'Choose an option',
      roleOptions: [
        { value: 'kund', label: 'Client' },
        { value: 'konsult', label: 'Consultant' },
        { value: 'annat', label: 'Other' },
      ],
      message: 'Message',
      submit: 'Send',
      sending: 'Sending…',
      consent: 'I agree that my details are processed in accordance with the {link}.',
      consentLinkLabel: 'privacy policy',
      honeypot: 'Leave this field empty',
      success: "Thanks! We'll be in touch within a business day.",
      failure: 'The message could not be sent. Please email us at {email} instead.',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email address.',
        emailFormat: 'Please check the email address.',
        message: 'Please write a message.',
        consent: 'You need to agree to the processing of your details.',
      },
    },
  },
  privacy: {
    heading: 'Privacy policy',
    lastUpdatedLabel: 'Last updated',
    // TODO (Johan): fill in the publication date here once the policy is reviewed and published.
    lastUpdated: '(to be filled in at publication)',
    sections: [
      {
        heading: 'Data controller',
        blocks: [
          {
            kind: 'paragraph',
            text: '{name}, reg. no. {orgNr}, with its registered office in {registeredOffice}, Sweden, is the controller for the processing of personal data on selectsociety.se.',
          },
          { kind: 'paragraph', text: 'Contact for privacy matters: {email}' },
        ],
      },
      {
        heading: 'What data we collect',
        blocks: [
          { kind: 'paragraph', text: 'We only collect data you give us yourself.' },
          {
            kind: 'paragraph',
            lead: 'Via the contact form:',
            text: 'your name, email address, the category you select (client, consultant or other) and the contents of your message.',
          },
          {
            kind: 'paragraph',
            lead: 'If you email us directly:',
            text: 'the data contained in your email.',
          },
          {
            kind: 'paragraph',
            lead: 'We use no cookies and no visitor analytics.',
            text: "We don't measure how you move around the site, and we share no data with ad networks.",
          },
          // TODO (Johan): add a paragraph about server logs once hosting is chosen.
          // IP addresses in access logs are personal data and must be described here.
        ],
      },
      {
        heading: 'Purposes and legal basis',
        blocks: [
          {
            kind: 'table',
            headers: ['What we do', 'Why', 'Legal basis'],
            rows: [
              [
                'Answer your enquiry',
                'You contacted us and want a reply',
                'Legitimate interest (Article 6(1)(f) GDPR)',
              ],
              [
                'Process your job application',
                'You are applying for work with us',
                'Legitimate interest and steps prior to a contract (Article 6(1)(b) and (f) GDPR)',
              ],
              [
                'Keep business correspondence',
                'We need to be able to follow up on agreements',
                'Legitimate interest (Article 6(1)(f) GDPR)',
              ],
            ],
          },
        ],
      },
      {
        heading: 'How long we keep the data',
        // TODO (Johan): confirm the retention periods below — they are proposals, not decisions.
        blocks: [
          {
            kind: 'list',
            items: [
              'General enquiries: deleted no later than twelve months after the matter is closed.',
              'Job applications: kept for twelve months after the recruitment is closed, unless you consent to longer storage.',
              'Data in business relationships: kept for as long as the relationship lasts and thereafter for seven years under the Swedish Accounting Act.',
            ],
          },
        ],
      },
      {
        heading: 'Who has access to the data',
        blocks: [
          {
            kind: 'paragraph',
            text: 'We never sell your data and we do not share it for marketing purposes.',
          },
          {
            kind: 'paragraph',
            text: 'The data is handled by us and by the suppliers that run our systems:',
          },
          {
            kind: 'list',
            items: [
              'Formspree — receives and forwards the contact form',
              // TODO (Johan): confirm that the company runs Microsoft 365 before this is published.
              'Microsoft — email and document management',
              // TODO (Johan): add the hosting provider to this list once it is chosen.
            ],
          },
          {
            kind: 'paragraph',
            text: 'All of them are processors and handle the data under a data processing agreement and only on our instructions.',
          },
          // TODO (Johan): if Formspree processes data outside the EU/EEA — describe the
          // transfer mechanism (EU–US Data Privacy Framework or standard contractual
          // clauses) in its own paragraph here. Also confirm the DPA is signed.
        ],
      },
      {
        heading: 'Your rights',
        blocks: [
          { kind: 'paragraph', text: 'You have the right to:' },
          {
            kind: 'list',
            items: [
              'know what data we hold about you and receive a copy of it',
              'have incorrect data corrected',
              'have your data erased',
              'object to our processing or request that it be restricted',
              'receive your data in a machine-readable format',
            ],
          },
          {
            kind: 'paragraph',
            text: 'Get in touch at {email} and we will help you. We reply within one month.',
          },
          {
            kind: 'paragraph',
            text: 'If you believe we handle your data incorrectly, you have the right to complain to the Swedish Authority for Privacy Protection (IMY), imy.se.',
          },
        ],
      },
      {
        heading: 'Cookies',
        blocks: [
          {
            kind: 'paragraph',
            text: 'selectsociety.se uses no cookies. We also load no fonts, maps or video players from third parties, so no data about your visit leaves the site.',
          },
        ],
      },
      {
        heading: 'Changes to this policy',
        blocks: [
          {
            kind: 'paragraph',
            text: 'If we change how we process personal data, we update this page and change the date at the top.',
          },
        ],
      },
      {
        heading: 'Contact',
        blocks: [{ kind: 'contact' }],
      },
    ],
  },
};
