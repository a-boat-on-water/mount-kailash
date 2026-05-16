# Kailash Trail — Mount Kailash Pilgrimage Guide

A bilingual (English/Chinese) mobile app for the Mount Kailash pilgrimage (kora). Offline maps, GPS tracking, and comprehensive guide content for the 52km sacred circuit.

## Tech Stack

- **Next.js 16** (App Router, TypeScript, Tailwind CSS 4)
- **Capacitor** — wraps web app into native iOS (.ipa for TestFlight)
- **MapLibre GL JS** — free vector maps with offline PMTiles support
- **Framer Motion** — animations and page transitions

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — best viewed at mobile width (390px).

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home — cinematic hero + categories
│   ├── map/page.tsx        # MapLibre map with waypoints + route
│   ├── guide/              # Guide chapter list + reader
│   │   ├── [slug]/         # Dynamic chapter pages
│   │   ├── sacred-sites/   # 87 sacred sites browser
│   │   ├── glossary/       # Tibetan/Buddhist terminology
│   │   ├── legends/        # Sacred site legends
│   │   └── rituals/        # Ritual practices
│   └── info/               # Kora info, elevation, weather, gear
├── components/             # Shared UI components
├── contexts/               # React contexts (language/i18n)
├── data/                   # Typed data (waypoints, route, chapters)
├── i18n/                   # Translation dictionaries (en, zh)
└── lib/                    # Utilities (cn helper)

doc/                        # Source guide data
├── kailash_pilgrimage_guide.json   # Structured data (87 sites, weather, gear...)
└── markdown/               # 23 markdown chapter/content files

public/images/              # Hero and card images
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |

## Content

Based on Jansen Wong's "Mount Kailash Pilgrimage Guide" (冈仁波齐转山朝圣指南) v8.0.1, containing:
- 14 chapters of guide content
- 87 sacred sites with descriptions and legends
- Weather, gear, fees, and safety information
- Bilingual throughout (Simplified Chinese + English)

## License

Content copyright belongs to original author (Jansen Wong). App code is private.
