# Select Society

Webbplatsen för Select Society, ett IT-konsultbolag i Öresundsregionen.
Byggd med [Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com), statisk utdata, TypeScript i strict-läge.

**Designsystemet i [`plan/01-DESIGNSYSTEM.md`](./plan/01-DESIGNSYSTEM.md) är facit.** Alla färger,
typsnitt, avstånd och komponentregler kommer därifrån. Uppstår tvivel om hur något ska se ut eller
bete sig — planmappen vinner, inte tycke och smak i koden.

## Status

Detta är resultatet av **session 1 av 4**: fundamentet. Layout, designtokens, i18n-motor, header,
footer, mobilmeny och tomma platshållarsidor för alla 12 rutter. Inget sidinnehåll är byggt än —
det kommer i session 2–4 enligt [`plan/04-BYGGSESSIONER.md`](./plan/04-BYGGSESSIONER.md).

## Köra lokalt

```bash
npm install
npm run dev       # startar dev-servern på http://localhost:4321
```

Andra skript:

```bash
npm run build          # produktionsbygge till dist/
npm run preview        # förhandsgranska produktionsbygget lokalt
npm run check           # astro check && tsc --noEmit && eslint .
npm run format          # formaterar allt med Prettier
npm run format:check    # kontrollerar formattering utan att skriva
```

`npm run check` ska vara grönt innan en session räknas som klar. Samma kommandon körs i CI
(`.github/workflows/ci.yml`) på varje push.

## Mappstruktur

```
plan/                   Planen — läs 00-LASMIG.md först. Facit för design och innehåll.
public/
  fonts/                Voga-Medium.woff2 (self-hostad displayfont)
  images/                logo.png, RavenFav.png
src/
  assets/images/        Källbilder som ska optimeras via Astros <Image> (session 2+)
  components/
    layout/              Header · Footer · MobileMenu · LangSwitch · SkipLink
    ui/                  Button · Card · Eyebrow · SectionHeading · Container · TickList
    sections/            Byggs i session 2–4
  layouts/
    BaseLayout.astro     <html>, meta, preload, skip-länk, header/main/footer
  i18n/
    types.ts             Dict-typen — en.ts måste implementera den exakt
    sv.ts / en.ts        Ordböcker, en per språk
    utils.ts             getLang(), t(), altPath(), PAGE_MAP
  config/
    site.ts              All verksamhetsdata: e-post, org.nr, säte, SharePoint-URL, Formspree
  styles/
    global.css           Tailwind-import, @font-face, bas-typografi, fokusmarkering
  pages/
    *.astro               Svenska rutter (roten)
    en/*.astro             Engelska rutter (/en/)
tailwind.config.ts        Designsystemets tokens som Tailwind-färger/typografi
```

## Lägga till text i i18n

All text på sajten kommer från `src/i18n/sv.ts` och `src/i18n/en.ts` — **aldrig hårdkodad i en
komponent**. Så här lägger du till en ny textnyckel:

1. Lägg till fältet i `src/i18n/types.ts` (i rätt del av `Dict`-interfacet).
2. Fyll i värdet i **både** `sv.ts` och `en.ts`. `en.ts` är typad som `Dict`, så bygget går sönder
   om en nyckel saknas — det är meningen.
3. Läs ut texten i komponenten via `const dict = t(lang)` och `dict.din.nyckel`.

Ny sida på båda språken? Lägg till raden i `PAGE_MAP` i `src/i18n/utils.ts` så att språkväxlaren
(`altPath()`) hittar rätt motsvarighet.

All copy hämtas ordagrant från [`plan/02-SITEMAP-INNEHALL.md`](./plan/02-SITEMAP-INNEHALL.md) —
hitta inte på egen text.

## Kända avsteg från planen (session 1)

- **Astro-version:** senaste 5.x (`5.18.2`) installerad, inte en äldre patch. `npm audit` visar ett
  antal XSS/SSRF-advisories som första gången är fixade i Astro 6/7 — inget säkert 5.x-släpp
  existerar. Ingen av de sårbara funktionerna (server islands, `define:vars`, View Transitions,
  dynamiska spread-props) används i den här statiska sajten. Uppgraderas i en separat, godkänd
  session om det blir aktuellt.
- **Tailwind-integration:** `@astrojs/tailwind` stöder bara Tailwind 3 (bekräftat mot npm), så
  Tailwind 4 kopplas in via det officiella `@tailwindcss/vite`-pluginet i stället.
  `tailwind.config.ts` finns kvar och laddas via `@config` i `global.css`, precis som begärt.
- **ESLint-version:** `eslint-plugin-jsx-a11y` stöder ännu inte ESLint 10 i sin `peerDependencies`,
  så ESLint är pinnad till `^9.39.5` och `eslint-plugin-astro` till `^1.3.1` (som bygger in sin
  egen `astro-eslint-parser`) för en konfliktfri `npm install`.

## Nästa steg

Session 2 bygger startsidan (bildpipeline + alla sektioner). Se
[`plan/04-BYGGSESSIONER.md`](./plan/04-BYGGSESSIONER.md) för prompten.
