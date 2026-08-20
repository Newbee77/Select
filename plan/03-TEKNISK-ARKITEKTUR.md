# Select Society — Teknisk arkitektur
*Version 1.0*

## Beslut

| Fråga | Beslut | Motivering |
|---|---|---|
| Ramverk | **Astro 5** | Skickar noll JavaScript som standard. Sajten är i praktiken innehåll — då är statisk HTML rätt svar. Snabbast tänkbara sidladdning, bäst SEO. |
| Styling | **Tailwind CSS 4** | Designsystemet i avsnitt 01 mappar direkt till tokens. Ingen CSS-drift mellan sessioner. |
| Språk | **TypeScript** (strict) | Astros content-schema fångar innehållsfel vid bygge i stället för i produktion. |
| Innehåll | **TypeScript-ordböcker** per språk | Sajten är liten. Ett CMS är overkill. `src/i18n/sv.ts` och `en.ts` — typade, så en saknad nyckel bryter bygget. |
| Versionshantering | **GitHub** — `https://github.com/Newbee77/Select.git` (privat) | Enligt Johans beslut. Planmappen `plan/` versionshanteras i samma repo så att varje byggsession har den. |
| Hosting | **Beslutas senare** | Bygget är leverantörsoberoende: `astro build` ger statiska filer i `dist/` som fungerar på Azure Static Web Apps, Netlify, Vercel, Cloudflare Pages eller GitHub Pages. |
| Beroenden | `@astrojs/sitemap` · `@astrojs/tailwind` · `@fontsource-variable/inter` · `sharp` | Detta är hela listan. Allt utöver detta kräver godkännande. |
| Inloggning | **Länk till SharePoint (steg 1)** | SharePoint sköter Entra ID själv. Noll auth-kod, noll kostnad. Se uppgraderingsvägen nedan. |

## Uppgraderingsvägen till Entra ID

Sajten byggs så att en inloggad medarbetardel kan slås på utan omskrivning:

1. **Idag:** knappen `Medarbetare` i headern är en vanlig länk till SharePoint-URL:en. URL:en ligger i `src/config/site.ts` — en rad att byta.
2. **Om ni senare vill ha eget innehåll bakom inloggning:** deploya till **Azure Static Web Apps Standard** (~9 USD/mån). Lägg till `staticwebapp.config.json` med en `customAuth`-provider mot er Entra-tenant och skydda rutten `/medarbetare/*`. Astro-sidorna under den rutten byggs som vanligt — ingen kodändring i komponenterna behövs.
3. Först om ni vill ha *personaliserat* innehåll (namn, roll, rollstyrda länkar) behövs MSAL.js. Det är ett eget projekt, inte en del av den här planen.

**Vad Sonnet ska göra nu:** ingenting utöver en länk. Bygg **inte** MSAL, app-registrering eller inloggningssida.

## `src/config/site.ts`

En enda plats för allt som är verksamhetsdata snarare än innehåll. Inga av dessa värden får skrivas direkt i en komponent. Alla värden utom `formEndpoint` är bekräftade av Johan.

```ts
export const site = {
  name: 'SelectSociety Nordic AB',
  shortName: 'Select Society',
  email: 'info@selectsociety.se',          // används även för jobbansökningar
  orgNr: '559494-7052',
  registeredOffice: 'Bjärred',             // säte; ingen besöksadress finns
  linkedinUrl: 'https://www.linkedin.com/company/selectsociety',
  sharepointUrl: 'https://selectsocietynordic.sharepoint.com/sites/SelectSociety9',
  formEndpoint: 'https://formspree.io/f/TODO',   // enda kvarvarande TODO
  baseUrl: 'https://selectsociety.se',
} as const;
```

## Projektstruktur

```
Select/                             # github.com/Newbee77/Select
├── plan/                           Planen — 00-LASMIG … 05, mockupen
├── .github/workflows/ci.yml        Bygg + länkkontroll vid varje push
├── public/
│   ├── fonts/Voga-Medium.woff2     Från /Claude/Select/Fonts
│   ├── images/logo.png             BirdBySidePeach.png — passeras oförändrad
│   ├── favicon.ico  ...            Genererade från RavenFav.png
│   ├── robots.txt
│   └── og-image.png
├── src/
│   ├── assets/images/              Källbilder som ska optimeras av <Image>
│   ├── components/
│   │   ├── layout/    Header · Footer · MobileMenu · LangSwitch · SkipLink
│   │   ├── ui/        Button · Card · Eyebrow · SectionHeading · Tag · Reveal
│   │   │               Container · TickList
│   │   └── sections/  Hero · PageHero · TrustBar · ServiceCards · SplitFeature
│   │                  · ProcessSteps · ValueList · TeamGrid
│   │                  · CtaBand · ContactForm
│   ├── layouts/       BaseLayout.astro
│   ├── i18n/          sv.ts · en.ts · types.ts · utils.ts
│   ├── config/        site.ts        Alla externa URL:er och kontaktuppgifter
│   ├── styles/        global.css     Tokens, @font-face, bas-typografi
│   └── pages/
│       ├── index.astro · vad-vi-gor.astro · bli-en-av-oss.astro
│       │   om-oss.astro · kontakt.astro · integritetspolicy.astro · 404.astro
│       └── en/  index · what-we-do · join-us · about · contact · privacy · 404
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## i18n-modell

Ingen i18n-beroendekedja. Astros inbyggda routing plus två typade ordböcker:

```ts
// src/i18n/types.ts
export type Lang = 'sv' | 'en';
export interface Dict { nav: {...}; home: {...}; /* ... */ }

// src/i18n/utils.ts
export const getLang  = (url: URL): Lang => url.pathname.startsWith('/en') ? 'en' : 'sv';
export const t        = (lang: Lang): Dict => lang === 'en' ? en : sv;
export const altPath  = (path: string, lang: Lang): string => /* motsvarande sida på andra språket */;
```

`en.ts` typas som `Dict` — saknas en nyckel misslyckas bygget. Det är hela poängen.

Sidparen ska mappas explicit i en tabell så att språkväxlaren aldrig hamnar på fel sida:

```ts
export const PAGE_MAP = [
  { sv: '/',                   en: '/en/' },
  { sv: '/vad-vi-gor',         en: '/en/what-we-do' },
  { sv: '/bli-en-av-oss',      en: '/en/join-us' },
  { sv: '/om-oss',             en: '/en/about' },
  { sv: '/kontakt',            en: '/en/contact' },
  { sv: '/integritetspolicy',  en: '/en/privacy' },
] as const;
```

## Bilder

Källbilderna är stora — `BirdBySideBlack.png` är 6 MB, `Open4Bizz.png` 2,5 MB. De får **inte** läggas i repot som de är.

- Fotografiska källbilder läggs i `src/assets/images/` — **inte** i `public/`. Astros `<Image>` optimerar bara det som ligger under `src/`; filer i `public/` passeras oförändrade och skulle spränga storleksmålet.
- Använd Astros `<Image>` (Sharp) för allt fotografiskt. Utdata: AVIF med WebP-fallback.
- Hero-bilder max 1920 px bred, sektionsbilder max 1200 px, porträtt max 600 px.
- Måltal: ingen enskild bildfil över **200 kB**.
- Logotyper (`Logga_webb.png`, `BirdBySidePeach.png`) läggs i `public/images/` och används som de är — de är redan små och skarpa.
- **Filnamn normaliseras till gemener** vid kopiering (`moln.JPG` → `moln.jpg`). CI kör Linux och är skiftlägeskänsligt.
- `loading="lazy"` + `decoding="async"` på allt utom hero-bilden, som får `fetchpriority="high"`.
- Alla `<Image>` behöver explicit `width`/`height` så att inget hoppar vid laddning.

## Typsnittsladdning

```css
@font-face {
  font-family: 'Voga';
  src: url('/fonts/Voga-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;   /* aldrig block — rubriker får hellre byta snitt än utebli */
}
```
`<link rel="preload" as="font" type="font/woff2" crossorigin>` på Voga i `<head>`.
Inter self-hostas via `@fontsource-variable/inter` — inga anrop till Google Fonts (GDPR).

## Prestandamål

Mätt med Lighthouse på mobil, produktionsbygge:

| Mått | Mål |
|---|---|
| Performance | ≥ 95 |
| Accessibility | **100** |
| Best Practices | ≥ 95 |
| SEO | 100 |
| LCP | < 2,0 s |
| CLS | < 0,05 |
| JS-nyttolast | < 30 kB komprimerat |

## Formulärhantering

Statisk sajt ⇒ formuläret behöver en extern mottagare.

- **Förstahandsval: Formspree** — leverantörsoberoende, GDPR-läge finns, fri nivå räcker för väntad volym.
- **Alternativ:** Netlify Forms om hostingen landar på Netlify.
- Formulärets endpoint ligger i `src/config/site.ts`. Honeypot-fält mot spam. Ingen tredjeparts-JS utöver postningen.

## Kod- och kvalitetskrav

- Prettier + `prettier-plugin-astro`, ESLint med `eslint-plugin-astro` och `jsx-a11y`.
- `npm run check` = `astro check` + `tsc --noEmit` + lint. Ska vara grön innan en session anses klar.
- GitHub Actions kör `npm ci && npm run check && npm run build` på varje push.
- Conventional commits (`feat:`, `fix:`, `chore:`).
- **Inga hårdkodade strängar i komponenter.** All text kommer från `i18n`-ordböckerna. Detta är den viktigaste regeln i projektet — bryts den blir engelska versionen omöjlig att underhålla.
- **Inga hårdkodade färger.** Endast Tailwind-tokens från designsystemet.

## Vad som uttryckligen INTE ingår

Nej till, om Johan inte säger annat: CMS, blogg, konsultdatabas, kundinloggning, MSAL/Entra-kod, analytics, kakbanner (behövs inte utan spårning), animationsbibliotek, React/Vue-öar, mörkerläge-växlare (sajten *är* mörk).

---

# ⚠️ Bilaga: nätverksbegränsning i byggmiljön

**Upptäckt 19 augusti 2026.** Molnmiljön som byggsessionerna kör i skickar all utgående trafik genom en proxy med *allowlist*. Vid test var följande **blockerade**:

```
registry.npmjs.org  →  403 "Host not in allowlist"
github.com          →  403 "no rule allows host"
pypi.org            →  403
```

Det betyder att `npm install` inte fungerar, och därmed kan **Astro inte installeras** i byggmiljön som den ser ut nu.

## Åtgärd (Plan A — försök detta först)

Lägg till dessa värdar i organisationens inställningar för nätverksåtkomst:

```
registry.npmjs.org
github.com
codeload.github.com
objects.githubusercontent.com
raw.githubusercontent.com
```

Miljön har redan `GITHUB_TOKEN` och `GH_TOKEN` satta till `proxy-injected`, vilket betyder att GitHub-autentisering hanteras av proxyn så snart värden är tillåten. **Ingen personlig access token behövs då.**

## Plan B — om allowlisten inte går att ändra

Byt ut hela verktygskedjan mot noll externa beroenden. Det låter drastiskt men är mindre arbete än det verkar, av ett enkelt skäl: **designmockupen är redan ren CSS med custom properties.** Det finns ingen Tailwind att ersätta — bara att flytta.

| | Plan A | Plan B |
|---|---|---|
| Ramverk | Astro 5 | Egen generator, ~150 rader Node med enbart inbyggda moduler (`fs`, `path`) |
| Styling | Tailwind 4 | Handskriven CSS med custom properties — **finns redan i mockupen** |
| Typsnitt | `@fontsource-variable/inter` | Ladda ner Inter woff2 en gång manuellt, lägg i `public/fonts/` |
| Bildoptimering | Astros `<Image>` (Sharp) | Python + Pillow, som redan finns i miljön och fungerar offline |
| Sitemap | `@astrojs/sitemap` | Tjugo rader i generatorn |
| i18n | Typade TS-ordböcker | Samma ordböcker som vanlig JS — inget bygge behövs |
| Kontroll av typer | `astro check` + `tsc` | Utgår. Ersätts av att generatorn kastar fel på saknad i18n-nyckel. |

Vad som **inte** förändras: designsystemet, all copy, sitemapen, tillgänglighetskraven, SEO-kraven och prestandamålen. De är oberoende av verktyget.

Vad som blir sämre: ingen typkontroll av innehållet, ingen hot reload, och bildoptimeringen blir ett separat skript i stället för en del av bygget. Inget av det märks för besökaren.

## Plan C — bygg lokalt på Johans dator

`device_bash` kör på Johans Mac men saknar också nätverk. Johan kan dock köra `npm install` **själv** en gång i terminalen; därefter finns `node_modules` och Sonnet kan köra `npm run build` och `npm run dev` lokalt via `device_bash`. Samma sak med `git push` — Johan gör den enda nätverksberoende operationen, Sonnet gör resten.

Detta är den minst eleganta men mest robusta vägen och kräver ingen inställningsändring.

## Vad byggsessionen ska göra

**Session 1 börjar med en pre-flight-kontroll:**

```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://registry.npmjs.org/astro
```

- `200` → kör Plan A som planerat.
- `403` → **stanna och rapportera till Johan.** Börja inte bygga Plan B på eget initiativ; det är hans beslut.
