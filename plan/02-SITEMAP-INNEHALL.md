# Select Society — Sitemap och innehåll
*Version 1.0 · All copy nedan är färdig att kopiera rakt in i sajten. Sonnet ska inte hitta på egen text.*

## Tonläge

Självsäker med glimten i ögat. Korta meningar. Inga floskler ("helhetsleverantör", "i framkant", "skräddarsydda lösningar"). Vi säger hellre en sann konkret sak än tre vaga. Humorn är torr och underdriven — den finns i formuleringen, aldrig i utropstecken.

**Förbjudna ord:** synergi, holistisk, i framkant, kundresa, passionerad, marknadsledande, lösningsorienterad.

---

## Sitemap

```
/                       Start                    /en/                  Home
/vad-vi-gor             Vad vi gör (kund)        /en/what-we-do        What we do
/bli-en-av-oss          Bli en av oss (konsult)  /en/join-us           Join us
/om-oss                 Om oss                   /en/about             About
/kontakt                Kontakt                  /en/contact           Contact
/integritetspolicy      Integritetspolicy        /en/privacy           Privacy policy
/404                    Sidan finns inte         /en/404               Page not found  (noindex, ej i sitemap)
[extern]                Medarbetare → SharePoint (öppnas i ny flik)
```

Svenska är standardspråk och ligger i roten. Engelska under `/en/`. Språkväxlaren i headern länkar till motsvarande sida på det andra språket — aldrig till startsidan om man står på en undersida.

---

## Navigation

| SV | EN | Länk |
|---|---|---|
| Vad vi gör | What we do | `/vad-vi-gor` |
| Bli en av oss | Join us | `/bli-en-av-oss` |
| Om oss | About | `/om-oss` |
| Kontakt | Contact | `/kontakt` |
| **Medarbetare** *(knapp)* | **Employees** *(knapp)* | SharePoint, `target="_blank" rel="noopener"` |

---

# SIDA 1 — Start `/`

### 1.1 Hero — `ink-950`
Bakgrund: `Images/Customers.png` (guldkorpen på torget) i 32 % opacitet med `ink-950`-gradient från vänster så att texten alltid ligger mot mörkt. Vänsterställd text: H1 max 900 px, ingress max 56ch.

| | Svenska | English |
|---|---|---|
| Eyebrow | IT-KONSULTER · ÖRESUNDSREGIONEN | IT CONSULTANTS · THE ØRESUND REGION |
| H1 | Där IT-experter trivs | Where IT experts thrive |
| Ingress | Vi är seniorkonsulterna som tröttnade på att vänta på den perfekta arbetsgivaren. Så vi blev den. | We're the senior consultants who got tired of waiting for the perfect employer. So we became one. |
| Primär CTA | Se vad vi gör → | See what we do → |
| Sekundär CTA | Jobba hos oss | Work with us |

### 1.2 Förtroendeband — `ink-900`
Tunn remsa direkt under hero. Tre påståenden separerade av små guldromber (4 px, roterade 45°), centrerade. Versaler, `0.75rem`, spärr `0.18em`, färg **`ink-300`** — alltså *inte* eyebrow-guld och utan inledande streck.

| Svenska | English |
|---|---|
| ENBART SENIORA KONSULTER | SENIOR CONSULTANTS ONLY |
| FRIHET UNDER ANSVAR | FREEDOM WITH RESPONSIBILITY |
| KONSULTÄGT | CONSULTANT-OWNED |

### 1.3 Vad vi gör — `ink-950`
Tre kort i rad (staplade mobil). Kort: `ink-850`-yta, `1px ink-700`-kant, guldsiffra `01/02/03` i Voga överst, hover lyfter kanten till `amber-500`.

| | Svenska | English |
|---|---|---|
| Eyebrow | FÖR DIG SOM KÖPER IT | FOR CLIENTS |
| H2 | Vi leder arbetet, ni får resultatet | We lead the work, you get the result |
| Ingress | Vi börjar inte i lösningen. Först förstår vi vad ni faktiskt behöver — sen leder vi arbetet dit. | We don't start with the solution. First we understand what you actually need, then we lead the work there. |

**01 · Analys / Analysis**
> SV: Vi kartlägger nuläget, sätter mål och väljer väg. Ibland är slutsatsen att ni inte behöver göra något alls. Det säger vi också.
> EN: We map where you are, set the goal and pick the route. Sometimes the answer is that you don't need to do anything. We'll say that too.

**02 · Genomförande / Delivery**
> SV: Vi leder genomförandet — projektet, införandet och förändringen som följer med. Seniora konsulter som tar ansvar utan att behöva hållas i handen.
> EN: We lead the delivery — the project, the rollout and the change that comes with it. Senior consultants who take responsibility without hand-holding.

**03 · Uppföljning / Follow-through**
> SV: Vi utvärderar det vi levererat och förbättrar processen. Ett avslutat uppdrag är inte samma sak som ett avslutat ansvar.
> EN: We evaluate what we delivered and improve the process. A finished assignment isn't the same as finished responsibility.

CTA: `Läs mer om vårt erbjudande →` / `More about what we do →`

### 1.4 Varför Select Society — `paper` (ljus paus)
Tvådelad: vänster text, höger bild (`Images/Outstanding.jpeg`).

| | Svenska | English |
|---|---|---|
| Eyebrow | VÅR IDÉ | OUR IDEA |
| H2 | Vi byggde arbetsplatsen vi själva ville jobba på | We built the workplace we wanted to work at |
| Brödtext | Select Society startades av konsulter som hade sett hur branschen fungerar — och hur den skulle kunna fungera. Vi tror att nöjda konsulter levererar bättre. Det är inte en värdegrund på en vägg, det är hela affärsmodellen.<br><br>Därför är vi få, seniora och noga med vilka som får följa med. Därför får våra konsulter frihet under ansvar, tid för utveckling och en gemenskap som faktiskt märks. Och därför får våra kunder människor som vill vara där de är. | Select Society was started by consultants who had seen how the industry works — and how it could work. We believe consultants who enjoy their work deliver better work. That's not a poster in the hallway, it's the business model.<br><br>So we stay small, senior and selective. Our consultants get freedom with responsibility, real time to develop, and a community you can actually feel. And our clients get people who want to be where they are. |
| CTA | Om oss → | About us → |

### 1.5 För konsulter — `ink-950`
Tvådelad, omvänd: vänster bild (`Images/TheGrassIsGreener.jpeg`), höger text + fyra punkter med guldbockar.

| | Svenska | English |
|---|---|---|
| Eyebrow | FÖR DIG SOM ÄR KONSULT | FOR CONSULTANTS |
| H2 | Gräset är faktiskt grönare här | The grass really is greener here |
| Ingress | Vi rekryterar sällan och noggrant. Om du är senior, nyfiken och trött på att vara en rad i ett resursschema — hör av dig. | We recruit rarely and carefully. If you're senior, curious and tired of being a line in a resourcing spreadsheet — get in touch. |

Punkter (renderas som `ticks`-lista i `SplitFeature`, guldbock-SVG framför varje rad):
| Svenska | English |
|---|---|
| Frihet under ansvar — du väljer uppdrag, vi backar upp | Freedom with responsibility — you pick the assignment, we back you up |
| Tid och budget för kompetensutveckling | Real time and budget to keep learning |
| En gemenskap som faktiskt träffas | A community that actually meets up |
| Rak kommunikation och ingen konsultfabrik | Straight talk and no consultancy factory |

CTA: `Bli en av oss →` / `Join us →`

### 1.6 CTA-band — `amber-500`
All text `ink-950`. Centrerad, generös luft.

| | Svenska | English |
|---|---|---|
| H2 | Ska vi ta ett samtal? | Shall we talk? |
| Text | Oavsett om du behöver en konsult eller vill bli en — börja här. | Whether you need a consultant or want to become one — start here. |
| CTA (knapp `ink-950`, text `amber-500`) | Kontakta oss | Get in touch |

---

# SIDA 2 — Vad vi gör `/vad-vi-gor`

### 2.1 Sidhero — `ink-950`, kompakt (`py-24`)
| | Svenska | English |
|---|---|---|
| Eyebrow | FÖR DIG SOM KÖPER IT | FOR CLIENTS |
| H1 | Seniora konsulter, utan mellanhänder | Senior consultants, no middlemen |
| Ingress | Ni får de personer ni träffat. Inga juniorer i förklädnad, ingen säljare som lovar något teamet inte känner till. | You get the people you met. No juniors in disguise, no salesperson promising things the team hasn't heard about. |

### 2.2 Processen — `ink-900`
Tre steg som ett vertikalt spår med guldlinje som binder ihop dem. Samma tre steg som på startsidan men utvecklade.

**01 · Analys / Analysis**
> SV: Vi börjar med att förstå. Nuläge, mål, begränsningar, och vad som faktiskt skaver. Ni får en rekommendation vi kan stå för — inte den som råkar sälja flest timmar.
> EN: We start by understanding. Where you are, where you're going, what's constraining you and actual pain-points. You get a recommendation we can stand behind — not the one that happens to sell the most hours.

**02 · Genomförande / Delivery**
> SV: Projektledning, utvecklingsledning och förändringsledning. Vi arbetar i era processer, inte tvärtom. Ni får löpande insyn — inga överraskningar vid leverans.
> EN: Project management, development leadership and change management. We work inside your process, not around it. You get continuous visibility — no surprises at delivery.

**03 · Uppföljning / Follow-through**
> SV: Vi mäter mot målen vi satte, dokumenterar det som gjordes och lämnar över så att ni klarar er utan oss. Det är hela poängen.
> EN: We measure against the goals we set, document what was done, and hand over so you can run it without us. That's the whole point.

### 2.3 Kompetensområden — `paper` (ljus paus)
Tre grupper, inte ett platt taggmoln. Varje grupp: liten versalrubrik i `amber-800` med guldstreck, därunder taggarna. Tre kolumner desktop, staplat mobil.

Tagg på `paper`: `1px ink-100`-kant, `ink-950`-text, `2px` radie, padding `10px 18px`. Hover: kant → `amber-800`. Taggarna är **inte** klickbara.

| | Svenska | English |
|---|---|---|
| Eyebrow | VAD VI ÄR BRA PÅ | WHAT WE'RE GOOD AT |
| H2 | Vi leder, analyserar och förändrar | We lead, analyse and transform |

**Grupp 1 — Leda / Leading**
`Projektledning` · `IT-projektledning` · `Utvecklingsledning` · `Förändringsledning`
`Project management` · `IT project management` · `Development leadership` · `Change management`

**Grupp 2 — Analysera och designa / Analysing & designing**
`Kravanalys` · `Arkitektur` · `Lösningsdesign`
`Requirements analysis` · `Architecture` · `Solution design`

**Grupp 3 — Förändra / Transforming**
`Digitalisering` · `Processutveckling` · `Systeminförande`
`Digitalisation` · `Process improvement` · `System implementation`

Avslutande rad under grupperna, `ink-500`, `0.9375rem`:
> SV: Behöver genomförandet utvecklare tar vi in dem — men det är ledningen och arbetet dit som är vårt.
> EN: When delivery needs developers, we bring them in — but the leadership and the road there is what we do.

### 2.4 CTA-band — `amber-500`
| Svenska | English |
|---|---|
| H2: Behöver ni förstärkning? | H2: Need reinforcements? |
| Text: Berätta vad ni står inför så återkommer vi inom ett dygn. | Text: Tell us what you're facing and we'll come back within a day. |
| Knapp: Kontakta oss | Button: Get in touch |

---

# SIDA 3 — Bli en av oss `/bli-en-av-oss`

### 3.1 Sidhero — `ink-950`
Bakgrund: `Images/moln.JPG` i låg opacitet.
| | Svenska | English |
|---|---|---|
| Eyebrow | KARRIÄR | CAREERS |
| H1 | Vi är kräsna. Var det du också. | We're picky. You should be too. |
| Ingress | Select Society växer långsamt med flit. Vi tar in människor vi själva vill jobba med — och som har något att lära oss. | Select Society grows slowly on purpose. We bring in people we want to work with — and who have something to teach us. |

### 3.2 Vad du får — `ink-900`
Fyra kort, `ink-850`, guldsiffra `01`–`04` i Voga överst (samma `Card` som på startsidan).

| # | Svenska | English |
|---|---|---|
| 1 | **Frihet under ansvar**<br>Du är senior. Vi behandlar dig därefter. Du är med och väljer uppdrag, och vi säger nej till sådant som inte passar dig. | **Freedom with responsibility**<br>You're senior. We treat you accordingly. You help choose your assignments, and we say no to the ones that don't fit. |
| 2 | **Utveckling på riktigt**<br>Tid och budget för certifieringar, konferenser och det där du velat lära dig men aldrig hunnit. | **Actual development**<br>Time and budget for certifications, conferences and the thing you've been meaning to learn but never had time for. |
| 3 | **En gemenskap som märks**<br>Vi ses regelbundet, delar kunskap och har roligt. Konsultrollen behöver inte vara ensam. | **A community you will notice**<br>We meet regularly, share knowledge and enjoy ourselves. Consulting doesn't have to be lonely. |
| 4 | **Rak kommunikation**<br>Öppna villkor, tydliga förväntningar, inga överraskningar i lönekuvertet. | **Straight talk**<br>Open terms, clear expectations, no surprises in the payslip. |

### 3.3 Vem vi söker — `paper`
Smal textkolumn, max 720 px.
| | Svenska | English |
|---|---|---|
| H2 | Passar du hos oss? | Would you fit in? |
| Brödtext | Vi letar inte efter en viss metod eller certifiering. Vi söker efter personer som är seniora nog att veta vad de gör, ödmjuka nog att fortsätta lära sig, och sällskapliga nog att vilja bidra till en grupp.<br><br>Har du några års erfarenhet och känner igen dig — skicka ett mejl. Vi läser allt, och vi svarar. Har vi inget just nu säger vi det rakt ut. | We're not looking for a particular method or certification. We're looking for people senior enough to know what they're doing, humble enough to keep learning, and sociable enough to want to contribute to a group.<br><br>If you've got a few years behind you and recognise yourself in that description — send an email. We read everything, and we reply. If we've got nothing right now, we'll let you know. |

### 3.4 CTA-band — `amber-500`
| Svenska | English |
|---|---|
| H2: Skicka ett mejl, så tar vi det därifrån | H2: Send an email and we'll take it from there |
| Text: Ingen mall, inget personligt brev på tre sidor. Berätta kort vem du är och vad du vill göra. | Text: No template, no three-page cover letter. Tell us briefly who you are and what you want to do. |
| Knapp: info@selectsociety.se | Button: info@selectsociety.se |

---

# SIDA 4 — Om oss `/om-oss`

### 4.1 Sidhero — `ink-950`
| | Svenska | English |
|---|---|---|
| Eyebrow | OM SELECT SOCIETY | ABOUT SELECT SOCIETY |
| H1 | Vi tog saken i egna händer | We took matters into our own hands |
| Ingress | Ett konsultbolag startat av konsulter, för konsulter — och därför också bättre för kunderna. | A consultancy started by consultants, for consultants — and therefore better for clients too. |

### 4.2 Historien — `ink-950`, smal textkolumn
| Svenska | English |
|---|---|
| Vi hade alla jobbat på konsultbolag förut. Vi visste vad som fungerade och vad som inte gjorde det. Framför allt visste vi hur ofta det senare berodde på att någon längre upp aldrig hade suttit i uppdraget.<br><br>Så vi slutade vänta på att någon annan skulle bygga rätt arbetsplats, och byggde den själva. Select Society drivs på principen frihet under ansvar: vi litar på att seniora människor fattar bra beslut, och vi bygger organisationen därefter.<br><br>Det får konsekvenser. Vi växer långsamt. Vi tackar nej till uppdrag som inte passar. Vi lägger tid och pengar på sådant som inte syns i en kvartalsrapport. Och det är precis därför det fungerar. | We had all worked at consultancies before. We knew what worked and what didn't. Above all, we knew how often the latter came down to someone further up who had never actually sat in the assignment.<br><br>So we stopped waiting for someone else to build the right workplace and built it ourselves. Select Society runs on freedom with responsibility: we trust senior people to make good decisions, and we build the organisation around that.<br><br>It has consequences. We grow slowly. We turn down assignments that don't fit. We spend time and money on things that never show up in a quarterly report. And that's exactly why it works. |

### 4.3 Så gör vi — `ink-900`
Tre värderingar. **Inte** som floskelkort — varje värdering får en rubrik och en konkret konsekvens.

| Svenska | English |
|---|---|
| **Frihet under ansvar** → Vi kontrollerar inte tider. Vi förväntar oss omdöme. | **Freedom with responsibility** → We don't track hours. We expect judgement. |
| **Seniort hela vägen** → Den du träffar i säljmötet är den som gör jobbet. | **Senior all the way** → The person you meet in the sales meeting does the work. |
| **Gemenskap före storlek** → Vi är hellre trettio som känner varandra än trehundra som inte gör det. | **Community over scale** → We'd rather be thirty people who know each other than three hundred who don't. |

### 4.4 Teamet — `paper`
**Platshållare — bekräftat.** Johan levererar foton och namn senare. Bygg komponenten med 6 platshållare och en tydlig `TODO`-kommentar. Rutnät av porträtt (namn, roll, ev. LinkedIn), kvadratisk beskärning, bilder i gråskala som tonar till färg vid hover. Platshållarna ska vara neutrala `ink-800`-rutor med initialer — **inga** stockfoton.

### 4.5 CTA-band — `amber-500` (samma som startsidan)

---

# SIDA 5 — Kontakt `/kontakt`

### 5.1 Sidhero + kontaktuppgifter — `ink-950`
Tvåspalt: vänster rubrik + uppgifter, höger formulär i `ink-850`-kort.

| | Svenska | English |
|---|---|---|
| H1 | Hör av dig | Get in touch |
| Ingress | Vi svarar inom ett dygn, vardagar. Ofta snabbare. | We reply within one business day. Usually faster. |
| Var vi finns | Vi har inget kontor att bjuda in dig till. Vi kommer dit ni är. | We don't have an office to invite you to. We come to where you are. |
| Räckvidd | Vi utgår från Skåne och tar uppdrag i södra Sverige och Köpenhamn. | We're based in Skåne and take assignments across southern Sweden and Copenhagen. |
| E-post | info@selectsociety.se *(gäller även jobbansökningar)* | info@selectsociety.se *(also for job applications)* |
| LinkedIn | linkedin.com/company/selectsociety | linkedin.com/company/selectsociety |
| Bolag | SelectSociety Nordic AB · Org.nr 559494-7052 · Säte: Bjärred | SelectSociety Nordic AB · Reg. no. 559494-7052 · Registered office: Bjärred, Sweden |

Alla dessa värden hämtas från `src/config/site.ts` — skriv dem inte i komponenten.

### 5.2 Formulär
Fält: **Namn** *(krav)* · **E-post** *(krav)* · **Jag är…** *(select: Kund / Konsult / Annat)* · **Meddelande** *(krav, textarea)* · GDPR-kryssruta med länk till integritetspolicyn.

Teknik: **Formspree** (beslutat i plan/03). Sajten är statisk, så formuläret behöver en extern mottagare. Honeypot-fält mot spam. Bekräftelsemeddelande visas inline, ingen omdirigering.

Etiketter: `Namn/Name` · `E-post/Email` · `Jag är/I am a` · `Meddelande/Message` · `Skicka/Send`
Bekräftelse: `Tack! Vi hör av oss inom ett dygn.` / `Thanks! We'll be in touch within a business day.`

---

# SIDA 6 — Integritetspolicy `/integritetspolicy`
Enkel textsida. **⚠️ Innehållet skrivs av Johan eller i en separat session** — Sonnet bygger mallen med rubriker: Personuppgiftsansvarig · Vilka uppgifter vi samlar in · Ändamål och laglig grund · Lagringstid · Dina rättigheter · Kakor · Kontakt.

---

## SEO och metadata

**Svenska**

| Sida | Title | Description |
|---|---|---|
| Start | Select Society — Där IT-experter trivs | Seniora IT-konsulter i Öresundsregionen. Vi leder projekt, kravarbete och förändring. Konsultägt och kräset. |
| Vad vi gör | Vad vi gör — Select Society | Projektledning, kravanalys, arkitektur och förändringsledning från seniora konsulter. Ni får de personer ni träffat. |
| Bli en av oss | Bli en av oss — Select Society | Vi rekryterar sällan och noggrant. Frihet under ansvar, riktig kompetensutveckling och en gemenskap som märks. |
| Om oss | Om oss — Select Society | Ett konsultbolag startat av konsulter som tröttnade på att vänta på rätt arbetsplats. |
| Kontakt | Kontakt — Select Society | Hör av dig till Select Society. Vi svarar inom ett dygn. |
| Integritetspolicy | Integritetspolicy — Select Society | Så hanterar SelectSociety Nordic AB dina personuppgifter. |
| 404 | Sidan finns inte — Select Society | Sidan du sökte finns inte. Här är vägen tillbaka. |

**English**

| Page | Title | Description |
|---|---|---|
| Home | Select Society — Where IT experts thrive | Senior IT consultants in the Øresund region. We lead projects, requirements and change. Consultant-owned and selective. |
| What we do | What we do — Select Society | Project management, requirements, architecture and change leadership from senior consultants. You get the people you met. |
| Join us | Join us — Select Society | We recruit rarely and carefully. Freedom with responsibility, real development and a community you can feel. |
| About | About — Select Society | A consultancy started by consultants who got tired of waiting for the right workplace. |
| Contact | Contact — Select Society | Get in touch with Select Society. We reply within one business day. |
| Privacy | Privacy policy — Select Society | How SelectSociety Nordic AB handles your personal data. |
| 404 | Page not found — Select Society | The page you were looking for doesn't exist. Here's the way back. |

404-sidorna ska ha `<meta name="robots" content="noindex">` och ligga utanför sitemap och hreflang.

**Krävs på varje sida:** unik `<title>` och `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`), `twitter:card=summary_large_image`, kanonisk URL, `hreflang`-par sv/en + `x-default`, `sitemap.xml`, `robots.txt`, favicon från `RavenFav.png` (16/32/180/512 px), `JSON-LD` av typen `Organization` på startsidan.

**OG-bild:** 1200×630 px, `ink-950`-bakgrund, guldkorpen till vänster, "SELECTSOCIETY" i Voga och taglinen under. Skapas i session 4.

---

## Status på öppna punkter

| # | Punkt | Status |
|---|---|---|
| 1 | Org.nr | ✅ 559494-7052 |
| 2 | Besöks-/postadress | ✅ Ingen besöksadress. Endast "Säte: Bjärred" visas. |
| 3 | E-post för jobbansökningar | ✅ info@selectsociety.se — samma som allmän |
| 4 | LinkedIn-URL | ✅ linkedin.com/company/selectsociety |
| 5 | SharePoint-URL | ✅ selectsocietynordic.sharepoint.com/sites/SelectSociety9 |
| 6 | Kompetensområden | ✅ Tio st, grupperade i tre teman, se §2.3 |
| 7 | Kundlogotyper | ✅ Visas inte. Sektionen struken. |
| 8 | Teamfoton och namn | 🟡 Kommer senare. Platshållare byggs. |
| 9 | Ort | ✅ Öresundsregionen. Skåne, södra Sverige och Köpenhamn. |
| 10 | Integritetspolicy | 🟡 Utkast finns i `05-INTEGRITETSPOLICY.md`, Johan granskar |

## Positionering — läs detta innan du skriver ny text

Select Society **leder** IT-arbete. De kodar inte som kärnaffär. Kompetenserna är projektledning, kravanalys, arkitektur, lösningsdesign, utvecklingsledning, förändringsledning, digitalisering, processutveckling och systeminförande.

Utvecklare tas in när genomförandet kräver det, men det är inte det de säljer. Skriv därför **aldrig** något som lovar systemutveckling, integration eller test som en Select Society-tjänst. Formuleringar som "sen bygger vi det" eller "vi kodar" är fel och ska inte förekomma.
