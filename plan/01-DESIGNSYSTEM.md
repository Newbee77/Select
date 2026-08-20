# Select Society — Designsystem
*Version 1.0 · Underlag för byggsessioner. Ändra inte värden här utan att uppdatera alla sessioner.*

## 1. Designprincip

Korpen bär hög hatt och monokel. Det är hela varumärket i en bild: **teknisk skärpa buren med stil och en glimt i ögat.** Sajten ska kännas som en välskräddad kostym — mörk, lugn, precis — inte som ett stockfoto-konsultbolag.

Tre regler som allt annat följer av:

1. **Mörkt är standard.** Ljusa sektioner används sparsamt som andningspaus, inte som utgångsläge.
2. **Guld är accent, aldrig yta.** `amber-500` markerar det viktigaste på skärmen. Används det överallt betyder det ingenting.
3. **Luft är lyx.** Generösa marginaler signalerar självförtroende. Trängsel signalerar billigt.

## 2. Färg

Paletten är byggd ur logotypens två faktiska färger — `#FFBD59` (guld) och `#545454` (grå) — utökade till en skala med kontrastutrymme.

### Kärnfärger (från loggan)
| Token | Hex | Roll |
|---|---|---|
| `amber-500` | `#FFBD59` | **Varumärkesguld.** Primär accent, knappar, ikoner, understrykningar |
| `ink-600` | `#545454` | **Varumärkesgrå.** Kantlinjer, kortytor, avdelare |

### Fullständig skala
| Token | Hex | Användning |
|---|---|---|
| `ink-950` | `#141414` | Sidbakgrund (mörkt läge), hero |
| `ink-900` | `#1C1C1C` | Sektionsbakgrund, alternerande band |
| `ink-850` | `#242424` | Kortbakgrund på mörk yta |
| `ink-800` | `#2E2E2E` | Hover-yta, input-fält |
| `ink-700` | `#3D3D3D` | Kantlinje på mörk yta |
| `ink-600` | `#545454` | Varumärkesgrå — kantlinje, avdelare |
| `ink-500` | `#6E6E6E` | Sekundär text **endast på ljus yta**. Aldrig text på mörk yta. |
| `ink-400` | `#8F8F8F` | Dämpad text på mörk yta (endast ≥16px) |
| `ink-300` | `#B5B5B5` | Brödtext på mörk yta |
| `ink-200` | `#D6D6D6` | Brödtext på mörk yta, hög läsbarhet |
| `ink-100` | `#EBEBEB` | Kantlinje på ljus yta; text på mörk yta (t.ex. ghost-knapp) |
| `paper` | `#F7F5F2` | Ljus sektionsbakgrund (varm off-white) |
| `white` | `#FFFFFF` | Kortbakgrund på ljus yta |
| `amber-300` | `#FFD9A0` | Ljus guldton, bakgrundstoning |
| `amber-400` | `#FFCB7B` | Hover på guldknapp (ljusare) |
| `amber-500` | `#FFBD59` | **Primär accent** |
| `amber-600` | `#E0A143` | Hover på guldyta (mörkare) |
| `amber-700` | `#A8741F` | Guldtext på ljus yta — **endast stor text (≥24px)** |
| `amber-800` | `#7A5312` | Guldtext på ljus yta — **brödtext, länkar** |

### Kontrastregler — verifierade mot WCAG 2.1
```
amber-500 på ink-950 ....... 11.12:1  AAA   ✅ rubriker, länkar, ikoner
amber-500 på ink-900 ....... 10.29:1  AAA   ✅
amber-500 på ink-600 ........ 4.57:1  AA    ✅ endast text ≥16px
amber-500 på white .......... 1.66:1  FAIL  ❌ ALDRIG text
amber-800 på white .......... 6.83:1  AA    ✅ guldtext på ljus yta
amber-800 på paper .......... 6.28:1  AA    ✅ guldtext på paper-band
amber-700 på white .......... 4.05:1  AA-L  ✅ endast ≥24px
amber-700 på paper .......... 3.72:1  AA-L  ✅ endast ≥24px
white     på ink-950 ....... 18.42:1  AAA   ✅
ink-200   på ink-950 ....... 12.68:1  AAA   ✅ brödtext mörkt läge
ink-300   på ink-950 ........ 8.98:1  AAA   ✅
ink-400   på ink-950 ........ 5.70:1  AA    ✅ endast ≥16px, metadata
ink-950   på paper ......... 16.93:1  AAA   ✅ brödtext ljust läge
ink-500   på paper .......... 4.69:1  AA    ✅ sekundär text, ingress på paper
ink-500   på ink-950 ........ 3.61:1  FAIL  ❌ ALDRIG text på mörk yta
ink-950   på amber-500 ..... 11.12:1  AAA   ✅ text på guldknapp
```

> **Hård regel:** `amber-500` får aldrig bära text mot vit eller `paper`-bakgrund. Behövs guldtext på ljus yta — använd `amber-800`.

## 3. Typografi

### Typsnitt
| Roll | Typsnitt | Källa | Fallback |
|---|---|---|---|
| Display / rubriker | **Voga Medium** | Egen fil, `Fonts/Voga-Medium.woff2` (17 kB) | `'Playfair Display', Georgia, serif` |
| Brödtext / UI | **Inter** | Self-hostad via `@fontsource-variable/inter` | `system-ui, -apple-system, sans-serif` |

Voga är samma didone-snitt som logotypen — hög kontrast, smala serifer. Det är en **displayfont**: den används till rubriker, siffror och enstaka citat. Aldrig till brödtext, aldrig under 24 px.

Inter bär allt annat. Kombinationen ger samma spänning som korpen själv: klassisk elegans plus modern precision.

### Skala (fluid, `clamp()`)
| Roll | Snitt | Storlek | Radavstånd | Spärr | Vikt |
|---|---|---|---|---|---|
| `display` — hero H1 | Voga | `clamp(2.75rem, 7vw, 5.5rem)` | 1.02 | `0.01em` | 500 |
| `h1` — sidrubrik | Voga | `clamp(2.25rem, 5vw, 3.75rem)` | 1.08 | `0.01em` | 500 |
| `h2` — sektionsrubrik | Voga | `clamp(1.75rem, 3.5vw, 2.75rem)` | 1.15 | `0.01em` | 500 |
| `h3` — kortrubrik | Inter | `1.25rem` | 1.3 | `-0.01em` | 600 |
| `eyebrow` — etikett | Inter | `0.75rem` | 1.2 | `0.18em` | 600, VERSALER |
| `lead` — ingress | Inter | `clamp(1.125rem, 2vw, 1.375rem)` | 1.6 | `0` | 400 |
| `body` | Inter | `1rem` | 1.7 | `0` | 400 |
| `small` | Inter | `0.875rem` | 1.6 | `0` | 400 |

**Radlängd:** brödtext max `68ch`, ingress max `56ch`. Aldrig bredare.

**Eyebrow-mönster:** varje sektion inleds med en spärrad versaletikett i `amber-500`, föregången av ett 24 px guldstreck. Det är sajtens signaturdetalj — samma streck som ramar in "WHERE IT EXPERTS THRIVE" i loggan.

## 4. Rum och raster

- **Basenhet:** 4 px. Alla avstånd är multiplar av 4.
- **Sektionsluft:** `py-24` mobil → `py-32` surfplatta → `py-40` desktop.
- **Innehållsbredd:** max `1200px`, sidopadding `24px` mobil / `48px` desktop.
- **Smal textkolumn:** max `720px` för längre löptext.
- **Raster:** 12 kolumner desktop, 6 surfplatta, 4 mobil. Gap `24px` / `32px`.
- **Brytpunkter (Tailwind standard):** `sm 640` · `md 768` · `lg 1024` · `xl 1280` · `2xl 1536`.

## 5. Form och yta

- **Hörnradie:** `2px` på knappar och inputs, `4px` på kort. Nästan skarpt — didone-typografin kräver raka kanter. **Inga rundade piller.**
- **Kantlinjer:** `1px solid ink-700` på mörk yta, `1px solid ink-100` på ljus. Kantlinjer före skuggor.
- **Skuggor:** används i princip inte i mörkt läge. På ljus yta max `0 1px 3px rgb(20 20 20 / 0.08)`.
- **Bilder:** alltid `4px` radie, alltid med en `1px` `ink-700`-kant på mörk bakgrund.

> **Om designmockupen:** `SelectSociety-designmockup.html` visar headern i sitt *nedscrollade* läge och innehåller ingen mobilmeny. Båda beteendena specificeras i text nedan och gäller före mockupen.

## 6. Komponenter

### Knappar
| Variant | Yta | Text | Kant | Hover |
|---|---|---|---|---|
| **Primär** | `amber-500` | `ink-950` | ingen | yta → `amber-400`, lyft 1px |
| **Sekundär (mörk)** | transparent | `ink-100` | `1px ink-600` | kant → `amber-500`, text → `amber-500` |
| **Sekundär (ljus)** | transparent | `ink-950` | `1px ink-100` | kant → `ink-950` |
| **Mörk (på guldband)** | `ink-950` | `amber-500` | ingen | yta → `ink-975` (`#0D0D0D`) |
| **Text-länk** | — | `amber-500` (mörk) / `amber-800` (ljus) | — | understrykning glider in från vänster |

Padding `14px 28px`. Text `0.9375rem`, vikt 600, spärr `0.02em`. Övergång `180ms ease-out`.
**Kompakt variant** (header, footer): padding `12px 24px`, text `0.875rem`. Klickytan blir 45 px hög — precis över 44 px-kravet. Gå inte lägre.

### Header
Sticky, `72px` hög. Transparent över hero, glider in `ink-950/92` + `backdrop-blur-md` + `1px ink-700`-underkant efter 40 px scroll. Logotyp vänster (`BirdBySidePeach.png`, höjd 32 px). Navigation höger. Längst till höger: språkväxlare `SV | EN` och knappen **Medarbetare** (sekundär, mörk). Mobil: hamburgare → helskärmsoverlay i `ink-950` med stora Voga-länkar.

### Footer
`ink-950`, `1px ink-700` överkant. Fyra kolumner desktop → staplat mobil. Kolumn 1: logotyp + tagline + e-post. Kolumn 2: navigation. Kolumn 3: LinkedIn. Kolumn 4: SharePoint-knapp. Understa raden: `© 2026 SelectSociety Nordic AB · Org.nr … · Integritetspolicy`.

### Sektionsmönster
Sidorna alternerar mellan fyra bakgrundsband så att sidan får rytm:
`ink-950` (hero) → `ink-900` → `ink-950` → `paper` (ljus paus) → `ink-950` → `amber-500` (CTA-band) → `ink-950` (footer).

Guldbandet används **en gång per sida**, alltid som sista uppmaning före footern, med `ink-950`-text.

## 7. Rörelse

- Övergångar `180–220ms`, `cubic-bezier(0.2, 0, 0, 1)`.
- Sektioner tonar in vid scroll: `opacity 0→1`, `translateY 16px→0`, `500ms`, en gång, via `IntersectionObserver`.
- Ingen parallax, inga auto-karuseller, inga räknare som tickar upp.
- **`prefers-reduced-motion: reduce` stänger av allt ovan.** Obligatoriskt.

## 8. Tillgänglighet — icke förhandlingsbart

- Kontrastreglerna i avsnitt 2 gäller undantagslöst.
- Fokusmarkering: `2px solid amber-500`, `2px offset`, på **allt** interaktivt. Ta aldrig bort outline utan ersättning.
- Semantisk HTML: en `<h1>` per sida, korrekt rubrikhierarki, `<nav>`/`<main>`/`<footer>`, "Hoppa till innehåll"-länk först i DOM.
- Alla bilder har `alt`. Dekorativa får `alt=""`.
- Formulär: synliga `<label>`, felmeddelanden kopplade med `aria-describedby`.
- Klickyta minst `44×44px`.
- Hela sajten ska gå att använda med enbart tangentbord.
- `<html lang="sv">` respektive `lang="en"`.
