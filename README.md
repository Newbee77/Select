# Select Society

Webbplatsen för Select Society, ett IT-konsultbolag i Öresundsregionen.
Byggd med [Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com), statisk utdata, TypeScript i strict-läge.

**Designsystemet i [`plan/01-DESIGNSYSTEM.md`](./plan/01-DESIGNSYSTEM.md) är facit.** Alla färger,
typsnitt, avstånd och komponentregler kommer därifrån. Uppstår tvivel om hur något ska se ut eller
bete sig — planmappen vinner, inte tycke och smak i koden.

## Status

**Alla fyra byggsessioner är klara.** Fundamentet (layout, designtokens, i18n-motor, header,
footer, mobilmeny), startsidan, de tre innehållssidorna (Vad vi gör, Bli en av oss, Om oss) och nu
session 4: kontaktformulär, integritetspolicy, SEO-infrastruktur och prestandapass. Se
[`plan/04-BYGGSESSIONER.md`](./plan/04-BYGGSESSIONER.md) för vad varje session omfattade.

Sajten är **inte lanseringsklar** — se ["Kvarvarande TODO:s för Johan"](#kvarvarande-todos-för-johan)
nedan. Framför allt: `formEndpoint` i `src/config/site.ts` pekar fortfarande på ett platshållar-ID,
och integritetspolicyn har flera juridiska punkter markerade som TODO i planen som ännu inte är
bekräftade.

`npm run check` och `npm run build` går igenom rent. Lighthouse mobil på produktionsbygget:
**Performance 100 · Accessibility 100 · Best Practices 100 · SEO 100** på alla tolv
innehållsrutter (LCP 1,1–1,4 s, CLS 0) — se ["Lighthouse"](#lighthouse) nedan.

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
  icons/                Favicons genererade från RavenFav.png: 16/32/512 px + apple-touch-icon
  images/                logo.png, RavenFav.png
  og-image.png            1200×630, delas av alla sidor (Open Graph / Twitter card)
  robots.txt · site.webmanifest
src/
  assets/images/        Källbilder som optimeras via Astros <Image> (AVIF/WebP, max 200 kB)
  components/
    layout/              Header · Footer · MobileMenu · LangSwitch · SkipLink
    ui/                  Button · Card · Eyebrow · SectionHeading · Container · TickList · Tag · Reveal
    sections/            Hero · TrustBar · ServiceCards · SplitFeature · CtaBand · PageHero ·
                          ProcessSteps · ValueList · TeamGrid · SkillGroups · ContactForm ·
                          PrivacyContent
  layouts/
    BaseLayout.astro     <html>, meta, SEO-taggar (OG/Twitter/hreflang/canonical/JSON-LD),
                          preload, skip-länk, header/main/footer
  i18n/
    types.ts             Dict-typen — en.ts måste implementera den exakt
    sv.ts / en.ts        Ordböcker, en per språk
    utils.ts             getLang(), t(), altPath(), findPageEntry(), interpolate(), PAGE_MAP
  config/
    site.ts              All verksamhetsdata: e-post, org.nr, säte, SharePoint-URL, Formspree
  styles/
    global.css           Tailwind-import, @font-face, bas-typografi, fokusmarkering
  pages/
    *.astro               Svenska rutter (roten) + 404.astro
    en/*.astro             Engelska rutter (/en/) + en/404.astro
tailwind.config.ts        Designsystemets tokens som Tailwind-färger/typografi
DEPLOY.md                 Hur man deployar till Azure Static Web Apps, Netlify, Cloudflare Pages
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

## Lighthouse

Mätt mobil, produktionsbygge (`npm run build && npm run preview`), samtliga tolv innehållsrutter:

| Sida                      | Performance | Accessibility | Best Practices | SEO                      | LCP       | CLS |
| ------------------------- | ----------- | ------------- | -------------- | ------------------------ | --------- | --- |
| Start (sv/en)             | 100         | 100           | 100            | 100                      | 1,4 s     | 0   |
| Vad vi gör (sv/en)        | 100         | 100           | 100            | 100                      | 1,1–1,3 s | 0   |
| Bli en av oss (sv/en)     | 100         | 100           | 100            | 100                      | 1,3–1,4 s | 0   |
| Om oss (sv/en)            | 100         | 100           | 100            | 100                      | 1,3 s     | 0   |
| Kontakt (sv/en)           | 100         | 100           | 100            | 100                      | 1,2 s     | 0   |
| Integritetspolicy (sv/en) | 100         | 100           | 100            | 100                      | 1,2 s     | 0   |
| 404 (sv)                  | 100         | 100           | 100            | _(noindex, SEO ej mätt)_ | —         | —   |

Alla mål i `plan/03-TEKNISK-ARKITEKTUR.md` under "Prestandamål" är uppnådda med marginal.

## Kända avsteg från planen

**Session 1:**

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

**Session 4:**

- **OG-bild och favicons är programmatiskt genererade**, inte ritade i ett designverktyg. De
  byggs av ett engångsskript med `sharp` som komponerar `Images/RavenFav.png` (guldkorpen) med
  text satt i den riktiga Voga-filen (`Fonts/Voga-Medium.otf`, tillfälligt registrerad i
  byggmiljöns fontcache för att kunna renderas till en rastergrafik) på en `ink-950`-bakgrund.
  Skriptet sparades inte i repot eftersom det är en engångskörning, inte en del av bygg-pipen —
  vill ni justera layouten (t.ex. annan tagline) är det snabbast att återskapa kompositionen i
  valfritt bildverktyg med samma tre element: raven vänster, "SELECTSOCIETY" i Voga, tagline under.
- **404-sidorna** ligger på `src/pages/404.astro` och `src/pages/en/404.astro`, enligt konventionen
  som Netlify och Cloudflare Pages båda stöder (de serverar den `404.html` som ligger närmast i
  katalogträdet för den begärda sökvägen). Azure Static Web Apps har inte samma konvention —
  se `DEPLOY.md` om Azure blir valet.
- **Kontaktformulärets JavaScript** är en liten inline-`<script>` i `ContactForm.astro`, inte en
  fristående modul. Den är det enda JS:et på sajten utöver `Reveal.astro`s
  `IntersectionObserver`, och håller sig gott under 30 kB-budgeten i `plan/03`.

## Kvarvarande TODO:s för Johan

Innan sajten kan lanseras:

1. **Formspree-endpoint.** `src/config/site.ts` → `formEndpoint` är fortfarande
   `https://formspree.io/f/TODO`. Skapa ett formulär i Formspree (gärna med deras EU-läge
   aktiverat, se punkt 4) och klistra in det riktiga ID:t.
2. **Integritetspolicyn — juridiska bekräftelser.** Utkastet i `plan/05-INTEGRITETSPOLICY.md` har
   flera `⚠️ TODO`-punkter som nu ligger som `TODO (Johan)`-kommentarer direkt i
   `src/i18n/sv.ts` och `en.ts` (sök på `TODO (Johan)`), redo att fyllas i utan att någon annan
   text behöver ändras:
   - Publiceringsdatum för policyn (`privacy.lastUpdated`).
   - Ett stycke om serverloggar, när hostingleverantören är vald.
   - Bekräfta lagringstiderna (12 månader för förfrågningar/ansökningar, 7 år för
     affärskorrespondens) — de är förslag, inte beslut.
   - Bekräfta att bolaget kör Microsoft 365 (eller ta bort raden).
   - Lägg till vald hostingleverantör i listan över personuppgiftsbiträden.
   - Om Formspree behandlar uppgifter utanför EU/EES: beskriv överföringsmekanismen
     (Data Privacy Framework eller standardavtalsklausuler) och bekräfta att DPA är påskrivet.
3. **Teamfoton och namn.** `src/components/sections/TeamGrid.astro` visar sex neutrala
   platshållarrutor med initialer, byggda enligt planen. Ersätt `sv.about.team.members` och
   `en.about.team.members` i i18n-ordböckerna med riktiga namn/roller, och koppla in riktiga
   foton i komponenten när de finns.
4. **Välj hostingleverantör.** Se `DEPLOY.md` för Azure Static Web Apps, Netlify och Cloudflare
   Pages — alla tre fungerar rakt av mot det statiska bygget. Bekräfta att `site` i
   `astro.config.mjs` och `baseUrl` i `src/config/site.ts` matchar den slutgiltiga domänen.
5. **OG-bild/favicons — valfri finputs.** Se avsnittet "Kända avsteg" ovan. Fungerar som de är,
   men är inte handritade i ett designverktyg.
