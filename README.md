# EnviLabs — marketingwebsite

Publieke marketingwebsite voor **EnviLabs**: digitale toepassingen op maat voor
het fysieke domein (de fysieke leefomgeving) én trainingen en opleiding voor de
teams die ermee werken. De Omgevingswet is daarbinnen één van de werkterreinen,
niet het hele verhaal.

Gebouwd met **Next.js (App Router) + TypeScript + Tailwind CSS**. De volledige
huisstijl (kleur, typografie, logo, spacing, iconografie en toegankelijkheid)
komt uit het EnviLabs Merkboek en is vastgelegd in `tailwind.config.ts`.

## Installeren en draaien

Vereist Node.js 18.18+ (getest op Node 24).

```bash
npm install
npm run dev
```

De site draait dan op [http://localhost:3000](http://localhost:3000).

### Productie

```bash
npm run build
npm run start
```

### Linten

```bash
npm run lint
```

## Projectstructuur

```
src/
├── app/                      # App Router: pagina's, layout, sitemap, robots
│   ├── layout.tsx            # Root layout: fonts, metadata, skip-link, header/footer
│   ├── page.tsx              # Home
│   ├── toepassingen/         # Digitale toepassingen (types + werkwijze)
│   ├── trainingen/           # Trainingen & opleiding
│   ├── over-ons/             # Over ons (missie/visie/waarden)
│   ├── contact/              # Contact (formulier)
│   ├── privacy/ …            # Juridische pagina's (placeholder)
│   ├── sitemap.ts            # SEO-sitemap
│   ├── robots.ts             # robots.txt
│   ├── icon.svg              # Favicon (merkteken)
│   └── globals.css           # Basisstijlen, focus-ring, reduced-motion
├── components/
│   ├── ui/                   # Button, Card, Badge, Logo, Section, Container, icons, Reveal
│   ├── layout/               # Header, Footer
│   ├── sections/             # CtaSection, GemeenteLogos, ContactForm, LegalPage
│   └── mockups/              # DashboardMockup, ModuleMockup
└── lib/                      # fonts, navigatie, classnames-helper
```

## Design system

De design tokens uit het merkboek zijn één-op-één gemapt naar Tailwind:

- **Kleur** — `navy` (#0B1F3A, dominant), `teal` (#00C9A7, accent), slate-schaal,
  signaalkleuren (`success`/`warning`/`error`/`info`).
- **Typografie** — Space Grotesk (display), Inter (body/UI), JetBrains Mono
  (cijfers/labels), geladen via `next/font`.
- **Spacing** — uitsluitend de schaal 4·8·12·16·24·32·48·64·96.
- **Radii** — `sm` (3px), `md` (6px), `lg` (8px).

## Toegankelijkheid

- WCAG 2.1 AA als ondergrens.
- Witte tekst nooit op teal; teal-knoppen hebben navy tekst.
- Status nooit met kleur alleen — altijd icoon + tekst (zie `Badge`).
- Zichtbare focus-ring (2px teal, 2px offset).
- Semantische HTML, correcte heading-volgorde, alt-/aria-teksten.
- `prefers-reduced-motion` wordt gerespecteerd (animaties uit).

## Opmerkingen

- Het bestand `EnviLabs Merkboek.html` was niet aanwezig in de projectmap; de
  design tokens en richtlijnen uit de opdracht zijn als bron van waarheid
  gebruikt.
- Gemeentelogo's en foto's zijn nette placeholders met duidelijke tekst.
- Het demoformulier valideert client-side en toont een bevestiging; er is nog
  geen backend gekoppeld.
