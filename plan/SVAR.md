# Johans svar på de nio frågorna
*Arbetsfil. Folds in i planen när alla nio är besvarade.*

| # | Fråga | Svar | Status |
|---|---|---|---|
| 1 | Organisationsnummer | **559494-7052** (Luhn-kontrollsiffra verifierad ✓) | ✅ |
| 1b | Besöksadress | **Ingen** — "vi kommer dit kunden vill ha oss". Ersätts av copy på kontaktsidan, se nedan. | ✅ |
| 1c | Säte | **Bjärred** (Lomma kommun, Skåne). Visas som "Säte: Bjärred". Ingen postadress ut på sajten. | ✅ |
| 2 | E-post för jobbansökningar | **info@selectsociety.se** — samma som allmän. Separat `jobEmail` utgår ur `site.ts`. | ✅ |
| 3 | LinkedIn-URL | `https://www.linkedin.com/company/selectsociety` | ✅ |
| 4 | SharePoint-URL | `https://selectsocietynordic.sharepoint.com/sites/SelectSociety9` | ✅ |
| 5 | Kompetensområden | 10 st, se nedan. **Viktigt: de är lednings- och rådgivningsnära, inte hands-on utveckling.** | ✅ |
| 6 | Kundlogotyper | **Nej — visas inte.** Sektion 2.4 och komponenten `LogoWall` utgår helt. | ✅ |
| 7 | Teamfoton och namn | Kommer senare. **Bygg `TeamGrid` med platshållare** enligt plan. | ✅ |
| 8 | Text till integritetspolicy | | ⬜ |
| 9 | Geografi | **Nej — Stockholm är fel.** Främst **Skåne**, öppna för uppdrag i södra Sverige och **Köpenhamn**. Vald formulering: **Öresundsregionen**. | ✅ |

## Beslut som följer av svaren

**Ingen besöksadress (fråga 1b).** Kontaktsidans adressrad tas bort och ersätts med en rad som gör det till en poäng i stället för en lucka:

> SV: Vi har inget kontor att bjuda in dig till. Vi kommer dit ni är.
> EN: We don't have an office to invite you to. We come to where you are.

Detta ändrar `02-SITEMAP-INNEHALL.md` avsnitt 5.1: raden "Adress" utgår, den nya raden läggs in under ingressen. `site.ts` behåller `orgNr` men `address` byts mot `postalAddress` (för fakturor och juridik) om Johan lämnar en sådan.

**Geografi (fråga 9).** "Stockholm" måste bort överallt. Berör:
- `02` avsnitt 1.1 — hero-eyebrow
- `02` SEO-tabellerna — startsidans description säger "Seniora IT-konsulter i Stockholm"
- `02` avsnitt 5.1 — kontaktuppgifter, ny rad "Säte: Bjärred"
**Beslutad copy:**

| Plats | Svenska | English |
|---|---|---|
| Hero-eyebrow (02 §1.1) | `IT-KONSULTER · ÖRESUNDSREGIONEN` | `IT CONSULTANTS · THE ØRESUND REGION` |
| Kontaktsidan, rad 1 (02 §5.1) | Vi har inget kontor att bjuda in dig till. Vi kommer dit ni är. | We don't have an office to invite you to. We come to where you are. |
| Kontaktsidan, rad 2 (02 §5.1) | Vi utgår från Skåne och tar uppdrag i södra Sverige och Köpenhamn. | We're based in Skåne and take assignments across southern Sweden and Copenhagen. |
| Kontaktsidan, säte | Säte: Bjärred · Org.nr 559494-7052 | Registered office: Bjärred, Sweden · Reg. no. 559494-7052 |
| SEO, startsidan SV | Seniora IT-konsulter i Öresundsregionen. Konsultägt, kräset och byggt av konsulter för konsulter. | |
| SEO, startsidan EN | | Senior IT consultants in the Øresund region. Consultant-owned, selective, built by consultants for consultants. |

Räckviddsraden ligger **bara** på kontaktsidan — inte på "Vad vi gör".

**Färdig `site.ts` (ersätter TODO-versionen i plan/03):**

```ts
export const site = {
  name: 'SelectSociety Nordic AB',
  shortName: 'Select Society',
  email: 'info@selectsociety.se',        // används även för jobbansökningar
  orgNr: '559494-7052',
  registeredOffice: 'Bjärred',
  linkedinUrl: 'https://www.linkedin.com/company/selectsociety',
  sharepointUrl: 'https://selectsocietynordic.sharepoint.com/sites/SelectSociety9',
  formEndpoint: 'https://formspree.io/f/TODO',   // enda kvarvarande TODO
  baseUrl: 'https://selectsociety.se',
} as const;
```

Nycklarna `jobEmail` och `address` utgår helt. **Session 1 är därmed obligerad** så när som på `formEndpoint`, som inte behövs förrän session 4.

**Copy som ändras av att jobbmejlen är info@:**
- `02` §3.4 CTA-knapp: `jobb@selectsociety.se` → `info@selectsociety.se` (samma på engelska)
- `02` §5.1 kontaktuppgifter: raden "Jobb" utgår, en adress räcker

**Följd av att logotypväggen utgår (fråga 6).** Sidan "Vad vi gör" tappar sitt enda ljusa band och blir mörk hela vägen från hero till CTA. Åtgärd: **flytta kompetensområdena (§2.3) till `paper`-bandet** i stället. Ingen ny copy behövs, sidrytmen bevaras, och taggarna blir mer lättlästa som mörk text på ljust.

Ny sektionsordning för `/vad-vi-gor`:
`ink-950` sidhero → `ink-900` processen → **`paper` kompetensområden** → `amber-500` CTA-band

Taggarna på `paper`: `1px ink-100`-kant, `ink-950`-text, hover-kant `amber-800`.
`LogoWall.astro` stryks ur `plan/03` projektstruktur och ur session 3 i `plan/04`.

## ⚠️ Kompetenslistan avslöjar en positioneringsmiss i min copy

Johans lista: Projektledning · IT-projektledning · Kravanalys · Arkitektur · Lösningsdesign · Utvecklingsledning · Förändringsledning · Digitalisering · Processutveckling · Systeminförande

Det här är **IT-ledning och verksamhetsnära rådgivning** — inte kodproduktion. Min copy, som ärvdes från nuvarande sajt, lovar på två ställen sådant Select Society uppenbarligen inte säljer:

| Var | Nuvarande text | Problem |
|---|---|---|
| `02` §1.3 kort 02 | "Projektledning, **utveckling, integration och test**" | Lovar hands-on utveckling |
| `02` §2.2 steg 02 | "Projektledning, **systemutveckling, integration och test**" | Samma |

**Föreslagen ny text (kort 02, startsidan):**
> SV: Vi leder genomförandet — projekt, leveranser och förändringen som följer med. Seniora konsulter som tar ansvar utan att behöva hållas i handen.
> EN: We lead the delivery — the project, the rollout and the change that comes with it. Senior consultants who take responsibility without hand-holding.

**Föreslagen ny text (steg 02, Vad vi gör):**
> SV: Projektledning, utvecklingsledning och förändringsledning. Vi arbetar i era processer, inte tvärtom. Ni får löpande insyn — inga överraskningar vid leverans.
> EN: Project management, development leadership and change management. We work inside your process, not around it. You get continuous visibility — no surprises at delivery.

**Dubblett:** "Projektledning" och "IT-projektledning" ligger nära varandra. Förslag: behåll båda men gruppera dem, se nedan.

## Kompetensområden — gruppering och översättning

Tio taggar i ett platt moln blir en lista att skumma förbi. Grupperade i tre får de betydelse och matchar processens tre steg.

| Grupp SV | Grupp EN | Taggar SV | Taggar EN |
|---|---|---|---|
| Leda | Leading | Projektledning · IT-projektledning · Utvecklingsledning · Förändringsledning | Project management · IT project management · Development leadership · Change management |
| Analysera och designa | Analysing & designing | Kravanalys · Arkitektur · Lösningsdesign | Requirements analysis · Architecture · Solution design |
| Förändra | Transforming | Digitalisering · Processutveckling · Systeminförande | Digitalisation · Process improvement · System implementation |

## Filer som ska uppdateras när allt är inne
- `02-SITEMAP-INNEHALL.md` — avsnitt 5.1 (kontaktuppgifter), 2.3 (kompetensområden), 1.1 (ort i eyebrow), listan sist
- `03-TEKNISK-ARKITEKTUR.md` — `src/config/site.ts`-objektet
- `04-BYGGSESSIONER.md` — session 1 task 5 om site.ts ändrar form
