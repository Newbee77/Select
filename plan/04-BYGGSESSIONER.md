# Select Society — Byggsessioner för Sonnet
*Version 1.0 · Fyra sessioner. Kör dem i ordning. Starta inte nästa förrän föregående är granskad.*

## Så här går det till

1. Johan öppnar en **ny session med Sonnet** och klistrar in prompten för sessionen.
2. Sonnet bygger, kör `npm run check` och `npm run build`, och pushar till GitHub.
3. Sonnet säger till när den är klar.
4. Johan öppnar en **planeringssession (Opus/Fable)** och ber om granskning: *"Sonnet är klar med session N — granska."*
5. Först efter godkänd granskning startar nästa session.

**Alla fyra prompter förutsätter att dessa filer ligger i projektmappen:**
`plan/01-DESIGNSYSTEM.md` · `plan/02-SITEMAP-INNEHALL.md` · `plan/03-TEKNISK-ARKITEKTUR.md` · `plan/05-INTEGRITETSPOLICY.md` · `plan/SelectSociety-designmockup.html`

---

# SESSION 1 — Fundament

**Omfattning:** projektuppsättning, designtokens, layoutskal, i18n-motor, CI. Inget sidinnehåll.
**Ungefärlig storlek:** medel. Inga sidor med riktigt innehåll byggs här.

### Prompt att klistra in

```
Du ska starta ett nytt webbprojekt för Select Society, ett svenskt IT-konsultbolag.
Detta är session 1 av 4. Bygg ENDAST det som står under "Uppgift" nedan — inget mer.

LÄS FÖRST, i denna ordning:
  plan/01-DESIGNSYSTEM.md      — färger, typografi, spacing, komponentregler
  plan/03-TEKNISK-ARKITEKTUR.md — stack, mappstruktur, i18n-modell, kvalitetskrav
  plan/02-SITEMAP-INNEHALL.md   — läs avsnitten "Sitemap" och "Navigation"
  plan/SelectSociety-designmockup.html — öppna och studera header och footer

Designmockupen är facit för utseendet, med tre undantag som texten i plan/01
går före: mockupen visar headern i sitt NEDSCROLLADE läge, den saknar mobilmeny
helt, och den hämtar Inter från Google Fonts (i bygget ska Inter self-hostas).
Återskapa mockupen i Astro + Tailwind — kopiera inte dess CSS rakt av.

UPPGIFT

0. PRE-FLIGHT — gör detta allra först, innan något annat:
   curl -sS -o /dev/null -w "%{http_code}\n" https://registry.npmjs.org/astro
   - Svarar den 200: fortsätt med steg 1.
   - Svarar den 403 eller liknande: byggmiljön saknar nätverksåtkomst till
     npm. STANNA DÄR. Rapportera till Johan och hänvisa till bilagan
     "Nätverksbegränsning i byggmiljön" sist i plan/03-TEKNISK-ARKITEKTUR.md.
     Börja INTE bygga en alternativ lösning på eget initiativ.

1. Initiera Astro 5 med TypeScript i strict-läge och Tailwind CSS 4.
   Skapa mappstrukturen exakt enligt plan/03-TEKNISK-ARKITEKTUR.md.
2. Lägg in designsystemets tokens i tailwind.config.ts som anpassade färger
   (ink-975, ink-950 … ink-100, paper, white, amber-300 … amber-800) och
   typografi-skalan från plan/01 avsnitt 3.
   Inga hårdkodade hexvärden får förekomma någon annanstans i projektet.
3. Skapa src/styles/global.css med @font-face, bas-typografi och
   fokusmarkeringen. Kopiera Voga-Medium.woff2 till public/fonts/ och sätt upp
   @font-face med font-display:swap plus <link rel="preload"> i BaseLayout.
   Installera @fontsource-variable/inter och self-hosta den — inga anrop till
   Google Fonts (GDPR).
   Kopiera även BirdBySidePeach.png till public/images/logo.png (används av
   header och footer) och RavenFav.png till public/images/ för session 4.
4. Bygg i18n-motorn: src/i18n/types.ts, sv.ts, en.ts, utils.ts med getLang(),
   t() och altPath(), samt PAGE_MAP enligt plan/03. en.ts ska typas som Dict så
   att en saknad nyckel bryter bygget. Fyll ordböckerna med nav-, footer- och
   metadatatexterna från plan/02 — resten av innehållet kommer i senare sessioner.
5. src/config/site.ts — kopiera objektet exakt som det står i
   plan/03-TEKNISK-ARKITEKTUR.md under rubriken "src/config/site.ts".
   Alla värden är riktiga och bekräftade — endast formEndpoint är TODO.
   Det finns INGEN separat jobbmejladress och INGEN besöksadress; bolaget
   har bara ett säte (Bjärred) som visas som text.
6. Bygg BaseLayout.astro: <html lang>, meta-taggar, preload, skip-link,
   header, <main>, footer.
7. Bygg komponenterna:
   layout/  Header · Footer · MobileMenu · LangSwitch · SkipLink
   ui/      Button (varianterna primary, dark, ghost-dark, ghost-light, link,
            plus en kompakt storlek med padding 12px 24px)
            Eyebrow · SectionHeading · Card · Container · TickList
   Card ska ha ett valfritt slot för en Voga-siffra överst (01, 02, 03 …).
   TickList är en punktlista med guldbock-SVG framför varje rad.
   Header ska vara sticky, 72px, transparent över hero och glida in med
   ink-950/92 + backdrop-blur + 1px ink-700-underkant efter 40px scroll.
   Mobilmenyn är en helskärmsoverlay i ink-950 med stora Voga-länkar,
   stängs med Escape, låser scroll och fångar fokus.
   "Medarbetare"-knappen är en vanlig länk till site.sharepointUrl med
   target="_blank" rel="noopener". Bygg INGEN inloggning, ingen MSAL,
   ingen Entra ID-kod. Bara en länk.
8. Skapa tomma platshållarsidor för alla 12 rutter i PAGE_MAP (sv + en).
   Varje sida ska ha rätt <title>, rätt lang-attribut och en <h1>.
   Innehållet fylls i session 2-4.
9. Sätt upp Prettier (med prettier-plugin-astro), ESLint (eslint-plugin-astro
   + jsx-a11y) och npm-skriptet "check" = astro check && tsc --noEmit && eslint.
10. Skapa .github/workflows/ci.yml som kör npm ci && npm run check && npm run build.
11. Initiera git och koppla mot det befintliga repot:
    git remote add origin https://github.com/Newbee77/Select.git
    Lägg planmapparna i repot (plan/) så att kommande sessioner kan läsa dem.
    Gör ett första commit och pusha till main.
    Om push misslyckas på grund av autentisering — STANNA och säg till mig.
    Försök inte lösa det själv och skapa inte något nytt repo.
12. Skriv README.md: hur man kör lokalt, mappstruktur, hur man lägger till
    text i i18n, och en not om att designsystemet i plan/01 är facit.

KLART NÄR
- npm run check och npm run build går igenom utan fel eller varningar
- npm run dev visar alla 12 rutter med korrekt header och footer
- Språkväxlaren tar mig från /vad-vi-gor till /en/what-we-do och tillbaka
- Header och footer ser ut som i designmockupen; mobilmenyn byggs enligt
  plan/01 avsnitt 6 eftersom mockupen inte visar någon
- Språkväxlaren är två riktiga länkar med minst 44px klickyta, inte text
- Allt går att nå med enbart tangentbord och fokusmarkeringen är
  2px amber-500 med 2px offset
- Koden är pushad till https://github.com/Newbee77/Select

GÖR INTE
- Bygg inte sidinnehåll utöver platshållarna
- Skriv ingen egen copy — all text kommer från plan/02
- Lägg inte till bibliotek som inte står i plan/03
- Bygg ingen inloggning

När du är klar: sammanfatta vad du byggt, lista filer du skapat, och skriv
ut eventuella beslut du fattat som inte stod i planen.
```

---

# SESSION 2 — Startsidan

**Omfattning:** hela startsidan på båda språken, plus bildpipeline.
**Förutsätter:** session 1 godkänd.

### Prompt att klistra in

```
Du fortsätter arbetet på Select Societys webbplats. Detta är session 2 av 4.
Session 1 (fundamentet: layout, header, footer, i18n, designtokens) är klar
och godkänd. Bygg ENDAST startsidan.

LÄS FÖRST:
  plan/01-DESIGNSYSTEM.md      — särskilt avsnitt 6 (komponenter) och 7 (rörelse)
  plan/02-SITEMAP-INNEHALL.md  — avsnitt "SIDA 1 — Start". Där finns ALL text,
                                  på svenska och engelska, ordagrant.
  plan/03-TEKNISK-ARKITEKTUR.md — avsnittet "Bilder"
  plan/SelectSociety-designmockup.html — detta är exakt hur startsidan ska se ut

Designmockupen är facit. Öppna den i webbläsaren och titta på den innan du
börjar koda. Återskapa den i Astro + Tailwind med projektets tokens.

UPPGIFT
1. Bildpipeline: kopiera de bilder som behövs från Johans mapp till
   src/assets/, optimera med Astros <Image> (AVIF med WebP-fallback).
   Ingen bildfil i dist/ får överstiga 200 kB. Hero-bilden får
   fetchpriority="high", allt annat loading="lazy". Alla bilder måste ha
   explicit width och height.
   Bilder som används: Customers.png (hero), Outstanding.jpeg,
   TheGrassIsGreener.jpeg. De ligger i mappen Images/ i projektroten.
   Kopiera dem till src/assets/images/ med gemena filnamn — INTE till public/,
   eftersom <Image> bara optimerar det som ligger under src/.
   Kontrollera att filerna finns innan du börjar; saknas någon, fråga Johan.
2. Bygg sektionskomponenterna:
   sections/Hero.astro         bakgrundsbild 32% opacitet + gradientslöja
                               (se mockupens .hero-bg och .hero-veil),
                               vänsterställd text, eyebrow, h1, ingress, två CTA
   sections/TrustBar.astro     tre versaletiketter separerade av guldromber
   sections/ServiceCards.astro tre kort med Voga-siffror 01/02/03
   sections/SplitFeature.astro tvåspalt text + bild, prop för att kasta om sidorna,
                               prop för ljus/mörk bakgrund, och ett valfritt
                               slot för en TickList under ingressen
   sections/CtaBand.astro      guldband, centrerat, Button variant="dark"
                               (ink-950-yta, amber-500-text). All text på
                               guldbandet är ink-950.
   ui/Reveal.astro             IntersectionObserver-intoning, opacity 0→1 och
                               translateY 16px→0 över 500ms, körs en gång.
                               MÅSTE respektera prefers-reduced-motion: reduce.
3. Lägg in all startsidetext i src/i18n/sv.ts och en.ts under nyckeln "home".
   Kopiera texten ordagrant från plan/02 — hitta inte på egen copy och
   översätt inte om den engelska versionen, den är redan skriven.
4. Bygg src/pages/index.astro och src/pages/en/index.astro. Båda sidorna
   ska vara identiska i struktur och bara skilja sig i vilken ordbok de läser.
   Sektionsordning och bakgrundsband enligt plan/02 avsnitt 1.1-1.6:
   ink-950 → ink-900 → ink-950 → paper → ink-950 → amber-500.
5. Sätt title och meta description från SEO-tabellen i plan/02.

KLART NÄR
- npm run check och npm run build går igenom rent
- Startsidan är visuellt i princip identisk med designmockupen vid 1440px
- Sidan fungerar och ser bra ut vid 390px, 768px och 1440px
- Engelska versionen på /en/ har all text översatt, ingen svensk text kvar
- Ingen bildfil i dist/ överstiger 200 kB
- prefers-reduced-motion: reduce stänger av all intoning
- Lighthouse mobil på produktionsbygget: Performance ≥ 95, Accessibility 100

GÖR INTE
- Skriv ingen egen text — allt står i plan/02
- Bygg inga undersidor, de kommer i session 3
- Lägg inte till animationsbibliotek. IntersectionObserver räcker.
- Använd inga hårdkodade färger, bara tokens

När du är klar: sammanfatta vad du byggt och klistra in dina Lighthouse-siffror.
```

---

# SESSION 3 — Undersidorna

**Omfattning:** Vad vi gör, Bli en av oss, Om oss — båda språken.
**Förutsätter:** session 2 godkänd.

### Prompt att klistra in

```
Du fortsätter arbetet på Select Societys webbplats. Detta är session 3 av 4.
Fundamentet och startsidan är klara och godkända. Bygg tre undersidor.

LÄS FÖRST:
  plan/02-SITEMAP-INNEHALL.md  — avsnitten "SIDA 2", "SIDA 3" och "SIDA 4".
                                  All text finns där, ordagrant, sv och en.
  plan/01-DESIGNSYSTEM.md      — komponent- och sektionsregler
  src/components/sections/     — återanvänd det som redan finns

UPPGIFT
1. Bildpipeline för denna session: kopiera Images/moln.JPG till
   src/assets/images/moln.jpg (gemener — CI kör Linux och är skiftlägeskänsligt)
   och använd den som bakgrund i heron på /bli-en-av-oss. Samma krav som i
   session 2: <Image>, max 200 kB, explicit width och height.
2. Nya komponenter som behövs:
   sections/PageHero.astro     kompakt sidhero (py-24), eyebrow + h1 + ingress,
                               valfri bakgrundsbild
   sections/ProcessSteps.astro tre steg som ett vertikalt spår med guldlinje
                               som binder ihop stegen
   sections/ValueList.astro    värdering som rubrik + konkret konsekvens
   sections/TeamGrid.astro     porträttrutnät, kvadratisk beskärning, gråskala
                               som tonar till färg vid hover. Sex platshållare
                               med tydlig TODO. Platshållarna är neutrala
                               ink-800-rutor med initialer — inga stockfoton.
   sections/SkillGroups.astro  tre grupper av kompetenstaggar på paper-band
   ui/Tag.astro                kompetenstagg, ljus variant för paper-bandet
   OBS: bygg INGEN LogoWall. Kundlogotyper ska inte visas — sektionen utgår.
   Fyra kort i rad för "Vad du får" använder befintlig Card med guldsiffra
   01-04 överst — samma mönster som ServiceCards på startsidan.
3. Bygg sidorna:
   /vad-vi-gor      + /en/what-we-do
   /bli-en-av-oss   + /en/join-us
   /om-oss          + /en/about
   Sektionsordning, bakgrundsband och text exakt enligt plan/02.
   OBS för /vad-vi-gor: kompetensområdena ligger på paper-bandet (inte ink-950)
   eftersom logotypväggen har utgått. Ordning: ink-950 → ink-900 → paper → amber-500.
4. LÄS FÖRST avsnittet "Positionering" sist i plan/02. Select Society LEDER
   IT-arbete — de säljer inte systemutveckling, integration eller test.
   Skriv aldrig något som lovar det.
5. Lägg in all text i i18n-ordböckerna under nycklarna "services",
   "careers" och "about". Ordagrant från plan/02.
6. Platshållare: endast TeamGrid är platshållare (Johan levererar foton
   och namn senare). Markera med tydlig TODO-kommentar och nämn det i din
   slutrapport. Kompetensområdena är färdiga och ska INTE vara platshållare.
7. Sätt title och meta description per sida från SEO-tabellen i plan/02
   (både den svenska och den engelska tabellen finns där — hitta inte på egna).
8. Korskoppla CTA-länkarna mellan sidorna så att inget leder till 404.

KLART NÄR
- npm run check och npm run build går igenom rent
- Alla sex sidor renderar korrekt på båda språken
- Ingen intern länk är trasig
- Sidorna fungerar vid 390px, 768px och 1440px
- Accessibility 100 i Lighthouse på varje sida
- Rubrikhierarkin är korrekt: exakt en h1 per sida, inga hopp i nivåerna

GÖR INTE
- Skriv ingen egen copy
- Bygg inte kontaktsidan eller integritetspolicyn, de kommer i session 4
- Uppfinn inga nya färger eller storlekar utanför designsystemet

När du är klar: sammanfatta, och lista allt Johan behöver leverera
(teamfoton, kundlogotyper, kompetensområden).
```

---

# SESSION 4 — Kontakt, SEO och slutputs

**Omfattning:** kontaktsida med formulär, integritetspolicy, all SEO-infrastruktur, prestandapass.
**Förutsätter:** session 3 godkänd.

### Prompt att klistra in

```
Du fortsätter arbetet på Select Societys webbplats. Detta är session 4 av 4,
den sista. Alla innehållssidor utom kontakt och integritetspolicy är klara.

LÄS FÖRST:
  plan/02-SITEMAP-INNEHALL.md  — avsnitten "SIDA 5", "SIDA 6", "SEO och metadata"
  plan/05-INTEGRITETSPOLICY.md — färdig text till integritetspolicyn
  plan/03-TEKNISK-ARKITEKTUR.md — avsnitten "Formulärhantering" och "Prestandamål"
  plan/01-DESIGNSYSTEM.md      — avsnitt 8, tillgänglighet

UPPGIFT
1. Bygg sections/ContactForm.astro och kontaktsidan /kontakt + /en/contact:
   Tvåspalt — vänster rubrik och kontaktuppgifter, höger formulär i ett
   ink-850-kort. Fält enligt plan/02 avsnitt 5.2.
   Formuläret postar till Formspree via site.formEndpoint (lämna som TODO).
   Kontaktuppgifterna hämtas från src/config/site.ts (email, orgNr,
   registeredOffice, linkedinUrl) — skriv dem inte direkt i komponenten.
   Det finns ingen besöksadress och ingen separat jobbmejladress.
   Krav: synliga <label> på varje fält, felmeddelanden kopplade med
   aria-describedby, honeypot-fält mot spam, GDPR-kryssruta som länkar till
   integritetspolicyn, inline-bekräftelse utan omdirigering,
   aria-live="polite" på statusmeddelandet.
   Validering ska fungera utan JavaScript som första försvarslinje
   (required, type="email") och förbättras med JS, inte förlita sig på det.
2. Integritetspolicy /integritetspolicy + /en/privacy:
   Texten finns färdig i plan/05-INTEGRITETSPOLICY.md under rubriken
   "Integritetspolicy". Kopiera den ordagrant. Där det står ⚠️ TODO i
   utkastet ska du behålla en tydlig TODO-kommentar i koden i stället för
   att hitta på innehåll. Översätt till engelska enligt instruktionen sist
   i samma fil.
3. SEO-infrastruktur på ALLA sidor. Titlar och beskrivningar tas ordagrant
   från SEO-tabellerna i plan/02 — det finns en svensk och en engelsk tabell,
   inklusive rader för integritetspolicyn och 404:
   - unik title och meta description
   - Open Graph: og:title, og:description, og:image, og:url, og:type, og:locale
   - twitter:card=summary_large_image
   - kanonisk URL
   - hreflang-par sv/en plus x-default
   - JSON-LD av typen Organization på startsidan
4. Generera med @astrojs/sitemap: sitemap.xml. Skriv robots.txt.
5. Favicons från Images/RavenFav.png: 16, 32, 180 (apple-touch) och 512 px,
   plus site.webmanifest.
6. OG-bild 1200x630: ink-950-bakgrund, guldkorpen till vänster,
   SELECTSOCIETY i Voga och taglinen under. Spara som public/og-image.png.
7. 404-sida i samma design, på båda språken, med länk tillbaka till start.
   404-sidorna får <meta name="robots" content="noindex"> och ska INTE ingå
   i sitemap.xml eller i hreflang-kedjan.
8. Slutpass:
   - Kör Lighthouse mobil på produktionsbygget för varje sida.
     Mål: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100.
     Åtgärda allt som ligger under.
   - Verifiera att hela sajten går att använda med enbart tangentbord.
   - Verifiera kontrastvärdena mot tabellen i plan/01 avsnitt 2.
   - Kontrollera att ingen intern länk är trasig.
   - Kontrollera att ingen hårdkodad textsträng finns kvar i komponenterna.
9. Skriv DEPLOY.md: hur man deployar till Azure Static Web Apps, Netlify och
   Cloudflare Pages, samt en kort beskrivning av hur man senare slår på
   Entra ID-inloggning via Azure Static Web Apps Standard och
   staticwebapp.config.json. Skriv INGEN inloggningskod nu.
10. Uppdatera README.md med aktuell status och en lista över alla TODO:s
    som återstår för Johan.

KLART NÄR
- npm run check och npm run build går igenom rent
- Alla mål i plan/03 "Prestandamål" är uppnådda på alla sidor
- Formuläret validerar, visar fel korrekt och bekräftar utan omdirigering
- sitemap.xml, robots.txt, favicons och og-image finns i dist/
- hreflang är korrekt på alla 12 innehållsrutter (404-sidorna undantagna)
- DEPLOY.md och README.md är uppdaterade

GÖR INTE
- Skriv ingen Entra ID- eller MSAL-kod
- Lägg inte till analytics eller kakbanner
- Hitta inte på innehåll till integritetspolicyn — den ska vara TODO

När du är klar: sammanfatta, klistra in Lighthouse-siffror för varje sida,
och lista alla kvarvarande TODO:s.
```

---

## Granskningsmall för planeringssessionen

När Sonnet säger att en session är klar — kör den här checklistan:

1. **Bygget:** går `npm run check` och `npm run build` igenom rent? Är CI grön?
2. **Mot designsystemet:** hårdkodade hexvärden? Fel radie? Fel typsnitt i brödtext? Voga under 24 px?
3. **Mot mockupen:** ta skärmdumpar vid 390, 768 och 1440 px och jämför.
4. **Mot innehållsplanen:** är texten ordagrant den i plan/02, på båda språken? Finns svensk text kvar i `/en/`?
5. **i18n:** finns hårdkodade strängar i komponenter? Leder språkväxlaren rätt från varje sida?
6. **Tillgänglighet:** en h1 per sida, korrekt rubrikordning, fokusmarkeringar, alt-texter, tangentbordsnavigation, kontrast enligt tabellen.
7. **Prestanda:** Lighthouse-siffror mot målen i plan/03. Bildstorlekar.
8. **Omfattning:** har Sonnet byggt något den inte skulle bygga? Särskilt: någon form av inloggning.
