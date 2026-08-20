# Select Society — webbplats: plan och design

**Status:** planering klar. Alla nio öppna frågor besvarade. **Session 1 kan starta.**
**Datum:** 18 augusti 2026, uppdaterad efter Johans svar

---

## Vad du ska titta på först

1. **`SelectSociety-designmockup.html`** — öppna i webbläsaren. Det här är hur startsidan kommer att se ut. Allt annat i mappen beskriver hur vi tar oss dit.
2. **`02-SITEMAP-INNEHALL.md`** — all text på sajten, svenska och engelska. Det är här du mest sannolikt vill ändra.
3. **`04-BYGGSESSIONER.md`** — de fyra prompterna du klistrar in i Sonnet-sessioner när du godkänt.

---

## Besluten som ligger till grund

| | |
|---|---|
| **Uppgift** | Publik sajt utåt mot kunder och framtida medarbetare, plus en väg in till SharePoint för anställda |
| **Positionering** | Select Society **leder** IT-arbete — projektledning, kravanalys, arkitektur, förändringsledning. De säljer inte systemutveckling. Utvecklare tas in när genomförandet kräver det. |
| **Geografi** | Öresundsregionen. Säte i Bjärred, uppdrag i Skåne, södra Sverige och Köpenhamn. |
| **Uttryck** | Mörkt och elegant, byggt på loggans två faktiska färger — guld `#FFBD59` och grått `#545454` |
| **Ton** | Självsäker med glimten i ögat |
| **Språk** | Svenska i roten, engelska under `/en/` |
| **Omfattning** | 6 sidor × 2 språk = 12 rutter |
| **Teknik** | Astro 5 + Tailwind 4, statisk utdata, TypeScript |
| **Kod** | https://github.com/Newbee77/Select (privat) |
| **Hosting** | Beslutas senare — bygget är leverantörsoberoende |
| **Inloggning** | Steg 1: knappen *Medarbetare* länkar till SharePoint, som sköter Entra ID själv. Kostar noll. Uppgraderingsvägen till riktig Entra-auth finns beskriven men byggs inte nu. |

---

## Filerna

| Fil | Innehåll |
|---|---|
| `SelectSociety-designmockup.html` | Visuellt facit. Startsidan, svensk version. |
| `01-DESIGNSYSTEM.md` | Färger med verifierade kontrastvärden, typografi, spacing, komponentregler, tillgänglighetskrav |
| `02-SITEMAP-INNEHALL.md` | Sitemap, alla sidor sektion för sektion, **all copy på sv och en**, SEO-tabeller |
| `03-TEKNISK-ARKITEKTUR.md` | Stack, mappstruktur, i18n-modell, bildpipeline, prestandamål, `site.ts` |
| `04-BYGGSESSIONER.md` | Fyra färdiga Sonnet-prompter + granskningsmall |
| `05-INTEGRITETSPOLICY.md` | Utkast till integritetspolicy + teknisk kartläggning av vad sajten faktiskt samlar in |
| `SVAR.md` | Dina svar på de nio frågorna och vad de ändrade i planen |
| `preview-desktop.png` / `preview-mobile.png` | Skärmdumpar av mockupen |

---

## Så här går bygget till

Fyra sessioner, i ordning. Efter varje: be en planeringssession granska innan nästa startar.

| # | Session | Vad som blir klart |
|---|---|---|
| 1 | Fundament | Astro-projekt, designtokens, typsnitt, i18n-motor, header, footer, mobilmeny, CI, GitHub-repo. 12 tomma rutter. |
| 2 | Startsidan | Hela startsidan på båda språken + bildpipeline |
| 3 | Undersidorna | Vad vi gör, Bli en av oss, Om oss — båda språken |
| 4 | Kontakt & slutputs | Kontaktformulär, integritetspolicy, all SEO, favicons, OG-bild, 404, Lighthouse-pass, DEPLOY.md |

---

## Status på de nio frågorna

| # | Punkt | Status |
|---|---|---|
| 1 | Org.nr | ✅ 559494-7052 |
| 2 | Adress | ✅ Ingen besöksadress. Bara "Säte: Bjärred". Kontaktsidan gör en poäng av det. |
| 3 | Jobbmejl | ✅ info@selectsociety.se |
| 4 | LinkedIn | ✅ linkedin.com/company/selectsociety |
| 5 | SharePoint | ✅ .../sites/SelectSociety9 |
| 6 | Kompetensområden | ✅ Tio st, grupperade i tre teman |
| 7 | Kundlogotyper | ✅ Visas inte — sektionen struken |
| 8 | Teamfoton | 🟡 Kommer senare, platshållare byggs |
| 9 | Ort | ✅ Öresundsregionen |
| 10 | Integritetspolicy | 🟡 Utkast klart i `05-INTEGRITETSPOLICY.md` — **granska det** |

## ⚠️ Detta måste lösas innan session 1

Jag testade byggmiljöns nätverk. Den skickar all trafik genom en proxy med allowlist, och just nu är **både npm och GitHub blockerade**:

```
registry.npmjs.org  →  403 "Host not in allowlist"
github.com          →  403 "no rule allows host"
```

Det betyder att en byggsession inte kan installera Astro och inte kan pusha kod. Session 1 skulle stanna på första kommandot.

**Åtgärd:** lägg till `registry.npmjs.org`, `github.com`, `codeload.github.com` och `objects.githubusercontent.com` i organisationens inställningar för nätverksåtkomst. Miljön har redan GitHub-autentisering förberedd via proxyn, så när github.com är tillåten behövs **ingen personlig access token alls**.

Om inställningen inte går att ändra finns två fungerande alternativ beskrivna sist i `03-TEKNISK-ARKITEKTUR.md`: bygga helt utan externa beroenden (mindre arbete än det låter — mockupen är redan ren CSS), eller att du kör `npm install` och `git push` själv och Sonnet gör resten.

Session 1-prompten inleds nu med en pre-flight-kontroll som stannar och frågar dig i stället för att köra i diket.

## Det jag fortfarande behöver

1. **Granska integritetspolicyn** i `05-INTEGRITETSPOLICY.md`. Den har fyra ⚠️-punkter som kräver ditt beslut, bland annat om Formspree och er lagringstid.
2. **Teamfoton och namn** när de finns. Blockerar ingenting — platshållare byggs.
3. **Formspree-konto** och dess endpoint. Behövs först i session 4.

Och det viktigaste: **läs igenom texten i `02-SITEMAP-INNEHALL.md`.** Jag har skrivit om allt från grunden i den ton vi kom överens om. Den är avsiktligt vassare än den nuvarande sajtens — säg till om jag tagit i för mycket eller för lite.

---

## Vad som medvetet INTE ingår

CMS, blogg, konsultdatabas, kundinloggning, MSAL/Entra-kod, analytics, kakbanner, mörkerlägesväxlare. Säg till om något av det borde in.
