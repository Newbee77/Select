# Deploy — Select Society

Sajten är en helt statisk Astro-build. `npm run build` ger en `dist/`-mapp med bara HTML, CSS,
JS, bilder och de statiska filerna i `public/` — inget serverkrav, ingen databas. Det gör den
leverantörsoberoende: den fungerar likadant på Azure Static Web Apps, Netlify och Cloudflare
Pages. Välj efter pris/vana, inte efter tekniska begränsningar.

Byggkommando och output är samma överallt:

```
Byggkommando:  npm run build
Output-mapp:   dist
Node-version:  22
```

`npm run build` kör även `scripts/clean-unreferenced-assets.mjs` efteråt, som städar bort
Astros oanvända originalbilder ur `dist/_astro/`. Kör aldrig bara `astro build` direkt i CI/CD —
använd `npm run build` (eller `npm ci && npm run build`) så att städningen alltid körs.

---

## Innan första deploy

- [ ] Sätt det riktiga Formspree-endpointet i `src/config/site.ts` (`formEndpoint`). Det är
      fortfarande `https://formspree.io/f/TODO`.
- [ ] Läs `src/i18n/sv.ts` och `en.ts` — sök på `TODO (Johan)` i integritetspolicyns nycklar och
      fyll i det som är markerat (lagringstider, hostingleverantör, Microsoft 365-bekräftelse,
      publiceringsdatum för policyn).
- [ ] Bekräfta att domänen i `astro.config.mjs` (`site: 'https://selectsociety.se'`) och
      `src/config/site.ts` (`baseUrl`) stämmer med den domän ni faktiskt deployar till — annars
      blir kanoniska URL:er, hreflang, sitemap och OG-taggar fel.

---

## Azure Static Web Apps

Enklast med GitHub-integrationen (Azure skapar en GitHub Actions-workflow automatiskt):

1. Skapa en **Static Web App**-resurs i Azure Portal, koppla till
   `https://github.com/Newbee77/Select` och grenen som ska deployas.
2. Byggkonfiguration i guiden:
   - **App location:** `/`
   - **Api location:** _(lämna tomt — ingen API finns)_
   - **Output location:** `dist`
3. Azure lägger till en workflow-fil under `.github/workflows/azure-static-web-apps-*.yml` som
   kör `npm install && npm run build` och deployar `dist/`. Den lever vid sidan av det befintliga
   `.github/workflows/ci.yml` (som bara kör kvalitetskontroller) — låt båda vara kvar.
4. Fri nivå (Free) räcker gott för en sajt av den här storleken.

**staticwebapp.config.json** behövs inte för grundfunktionen (statiska filer, trailing slash och
404 hanteras av Astros egna sidor), men lägg till en om ni vill styra cache-headers eller senare
låsa en rutt bakom inloggning (se nästa avsnitt).

### Framtida Entra ID-inloggning (gör INTE detta nu)

Planen (`plan/03-TEKNISK-ARKITEKTUR.md`, "Uppgraderingsvägen till Entra ID") beskriver hur en
inloggad medarbetardel kan slås på senare utan att skriva om det som redan är byggt:

1. **Idag:** `Medarbetare`-knappen är en vanlig länk till `site.sharepointUrl`. SharePoint sköter
   sin egen Entra ID-inloggning — noll auth-kod i den här sajten.
2. **Steg 2, om ni vill ha eget innehåll bakom inloggning:** uppgradera till
   **Azure Static Web Apps Standard** (~9 USD/mån) och lägg till en `staticwebapp.config.json`
   med en `customAuth`-provider mot er Entra-tenant, som skyddar en rutt (t.ex. `/medarbetare/*`).
   Astro-sidorna under den rutten byggs precis som alla andra — ingen kodändring i komponenterna.
3. **Steg 3, bara om ni vill ha _personaliserat_ innehåll** (namn, roll, rollstyrda länkar):
   det kräver MSAL.js och är ett eget projekt, inte en del av den här planen.

Skriv ingen MSAL-, app-registrerings- eller inloggningskod förrän ni aktivt beslutar att ta steg 2.

---

## Netlify

1. **New site from Git** → koppla `https://github.com/Newbee77/Select`.
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Netlify läser Node-version från `.nvmrc`/`engines` om den finns — annars, sätt
   `NODE_VERSION=22` under Environment variables för att matcha CI.
4. Formuläret använder redan Formspree (se ovan), så Netlifys egna formulärhantering
   (`netlify.forms`) behövs inte — rör inte `<form>`-attributen om ni ändå aktiverar den, det är
   inte vad planen beskriver som förstahandsval.
5. `public/_redirects` finns inte och behövs inte: Astro bygger `404.html` och `en/404/index.html`
   direkt, och Netlify serverar automatiskt den 404-sida som ligger närmast i katalogträdet för
   den begärda sökvägen (t.ex. `/en/nagot-fel` → `en/404/index.html`, allt annat → `404.html`).

---

## Cloudflare Pages

1. **Workers & Pages → Create → Pages → Connect to Git** → välj repot.
2. Build settings:
   - **Framework preset:** Astro (Cloudflare känner igen den automatiskt) eller manuellt:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Sätt miljövariabeln `NODE_VERSION=22` under Settings → Environment variables.
4. Precis som Netlify serverar Cloudflare Pages automatiskt den `404.html` som ligger närmast i
   katalogträdet för den begärda sökvägen, så `404.astro` och `en/404.astro` fungerar utan extra
   konfiguration.

---

## Efter varje deploy — snabb koll

- [ ] `https://<domän>/robots.txt` och `https://<domän>/sitemap-index.xml` svarar 200
- [ ] `/404` och `/en/404` visar rätt sida (testa en påhittad URL, t.ex. `/finns-inte`)
- [ ] Språkväxlaren SV/EN fungerar på minst tre olika sidor
- [ ] Kontaktformuläret går att skicka (kräver att `formEndpoint` är satt till ett riktigt
      Formspree-formulär, se checklistan ovan)
