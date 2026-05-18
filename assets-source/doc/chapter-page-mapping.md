# Chapter-to-Page Mapping

> This document maps each guide chapter (markdown source) to its corresponding app page(s).
> Use it to identify gaps and plan the tree-like page hierarchy.

## Coverage Overview

| Ch | Markdown Source | App Page(s) | Status |
|----|----------------|-------------|--------|
| 01 | `01_introduction.md` | — | MISSING |
| 02 | `02_mt_kailash_significance.md` | `/about/mountain` | PARTIAL — core concepts only |
| 03 | `03_weather_by_month.md` | `/guide/when-to-go` | PARTIAL — condensed to 5 seasonal windows, no month-by-month detail |
| 04 | `04_gear_and_supplies.md` | `/guide/packing` | FULL — ~50 items, interactive checklist |
| 05 | `05_tarchen_base_camp.md` | `/guide/logistics` | FULL — transport, accommodation, facilities |
| 06 | `06_overall_itinerary.md` | `/guide/route` + `/guide/route/[stage]` | FULL — map + 3 stage pages |
| 07 | `07_health_and_safety.md` | `/guide/safety` | FULL — tips, risks, incidents |
| 08 | `08_stage_1_tarchen_to_dirapuk.md` (67KB) | `/guide/route/1` | PARTIAL — 8 landmarks listed, but detailed trail narrative + 30+ sacred sites MISSING |
| 09 | `09_stage_2_dolma_la_pass.md` (71KB) | `/guide/route/2` | PARTIAL — 8 landmarks listed, detailed narrative MISSING |
| 10 | `10_stage_3_zutrulpuk_to_tarchen.md` (24KB) | `/guide/route/3` | PARTIAL — 5 landmarks listed, detailed narrative MISSING |
| 11 | `11_respect_and_responsibility.md` | `/about/protocols` | PARTIAL — 6 protocols condensed |
| 12 | `12_acknowledgments.md` | — | MISSING |

## Supplementary Content (in app but not from the 12 chapters)

| App Page | Data Source | Notes |
|----------|------------|-------|
| `/about/sacred-sites` | `kailash_pilgrimage_guide.json` | Comprehensive sacred sites database |
| `/about/legends` | `doc/markdown/legends.md` | Milarepa stories |
| `/about/rituals` | `doc/markdown/rituals.md` | Kora practice, prostration |
| `/about/glossary` | `src/data/about/glossary.ts` | 24 bilingual terms |
| `/guide/contacts` | `src/data/contacts.ts` | Phone numbers |
| `/map` | `src/data/route.ts` | Interactive full-screen map |

## Biggest Gaps

### 1. Stage detail pages (Ch 08-10) — the richest content is barely surfaced
The markdown files for stages 1-3 are the **longest and most detailed** (67KB, 71KB, 24KB).
Each contains dozens of sacred sites with stories, precise directions, photos, and cultural context.
The app currently only shows ~8 landmark bullet points per stage.

**What's missing per stage:**
- Detailed sub-segment breakdowns (I-1, I-2, I-3... with distance/time/elevation)
- 30+ sacred sites with stories (e.g., Chuku Monastery's three relics, the Gold Basin story)
- Trail navigation details (which fork to take, where to cross bridges)
- Cultural legends (Gesar King, Milarepa vs Naro Bonchung, Ravana stealing the mountain)
- Debunked myths and author's corrections
- Accommodation comparisons (Gangga vs Drirapuk pros/cons)

### 2. Introduction (Ch 01) — sets the tone, not in app
- Author's 12-year, 64-kora journey
- Why this guide exists (correcting misinformation)
- "For cultural travelers and pilgrims, not hikers" philosophy

### 3. Month-by-month detail (Ch 03) — condensed too much
- Each month has specific wind, snow, crowd, visibility info
- Saga Dawa festival dates
- Winter closure details

## Proposed Tree Structure

For each chapter/page, organize content in 3 levels:

```
Level 1: KEY INFO (what you need to know/do)
  Level 2: CONTEXT (why it matters, cultural meaning)
    Level 3: DEEP DIVE (full stories, legends, historical background, author's notes)
```

### Example: Stage 1 page tree

```
Stage 1: Darchen → Drirapuk (20km, 7-8h, +400m)
├── Quick Stats (distance, time, elevation, difficulty)
├── Sub-segments
│   ├── I-1: Darchen → First Prostration (3.8km, 1h)
│   │   ├── KEY: Route directions, what to look for
│   │   ├── CONTEXT: First Prostration meaning, Kailash first appears
│   │   └── DEEP: Gotsangpa discovering the route
│   ├── I-2: First Prostration → Sershong (2.3km, 30min)
│   │   ├── KEY: Downhill, supply point location
│   │   ├── CONTEXT: Black/Yellow Jambhala palaces
│   │   └── DEEP: Gold Basin (Sershong) legend, Norbu Zangpo story
│   ├── I-3: Sershong → Chuku Bridge (2.4km, 40min)
│   │   ├── KEY: Route + supply point info
│   │   ├── CONTEXT: Tarboche flagpole, Sky Burial platform
│   │   └── DEEP: 17th century war history, Saga Dawa ceremony, Ravana legend
│   ├── I-4: Chuku Bridge → 2nd Prostration (5.5km, 100min)
│   │   ├── KEY: Uphill terrain, next supply 7km away
│   │   ├── CONTEXT: Kailash west face, Gesar King landmarks
│   │   └── DEEP: Chuku Monastery 3 relics story, waterfalls, Gesar legends
│   ├── I-5: 2nd Prostration → Hayagriva Station (1.5km, 30min)
│   │   ├── KEY: Supply point, brief rest
│   │   ├── CONTEXT: Tiger/Leopard gate stones, Hayagriva statue
│   │   └── DEEP: Underworld gate symbolism
│   └── I-6: Hayagriva → Gangga/Drirapuk (4.3km, 1.5h)
│       ├── KEY: Accommodation options, Gangga vs Drirapuk comparison
│       ├── CONTEXT: Drirapuk Monastery, north face viewing
│       └── DEEP: Yak Horn Cave legend, Gotsangpa footprint, 1000 Buddhas Palace
├── Practical Tips
│   ├── When to start (after sunrise, before 10am)
│   ├── Side trips (Sky Burial platform +30min, Chuku Monastery +1h)
│   └── Accommodation booking contacts
└── Sacred Sites Index (quick reference list with names in Tibetan/Chinese/English)
```

## Data Architecture Notes

Current data flow:
- `markdown-clean/*.md` → source of truth (Chinese full text)
- `kailash_pilgrimage_guide.json` → structured extraction for app
- `src/data/guide/stages.ts` → TypeScript landmarks for stage pages
- `src/data/sacred-sites.ts` → loads from JSON

To support tree structure, we could:
1. Add a `depth` or `level` field to landmarks/sections in the data files
2. Create expandable/collapsible UI components
3. Extract sub-segments as first-class data (I-1, I-2, etc.) with nested sacred sites
