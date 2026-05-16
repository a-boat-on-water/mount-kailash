# 冈仁波齐转山朝圣指南
## Mount Kailash Pilgrimage (Kora) Guide

**Author:** Jansen Wong (黄振成)
**Version:** 8.0.1 (released 2026-04-29)
**Original source:** 《冈仁波齐转山朝圣指南》8.0.1版(20260429)抢鲜版 (1).pdf
**Total pages:** 229

> Personal reading is free. Non-personal use requires written permission from Jansen Wong. See chapter 14 for full copyright terms.

---

## What this folder contains

This folder is a complete, app-ready conversion of the *Mount Kailash Pilgrimage Guide* by Jansen Wong, split into two layers:

**Structured data (JSON)** — see [`../kailash_pilgrimage_guide.json`](../kailash_pilgrimage_guide.json):

- `metadata`, `tableOfContents`
- `chapters` — parsed chapter content with sub-sections
- `categorizedData` — sacred sites, route segments, weather by month, gear, fees, contacts, supply points
- `religiousMeaning` — why the mountain is sacred and to whom (four religions, cosmic axis, key legends)
- `koraPractice` — what kora means, outer vs. inner, direction, starting point, duration options, merit
- `etiquette` — religious respect and leave-no-trace rules
- `glossary` — 24 key Tibetan/Chinese religious terms with English explanations

**Narrative prose (Markdown, this folder)** — full text preserved:

| File | Description |
|------|-------------|
| [`01_introduction.md`](./01_introduction.md) | Chapter 1 — Introduction (为文化旅行者、朝圣者而写的冈仁波齐转山指南) (pp. 5–13) |
| [`02_mt_kailash_significance.md`](./02_mt_kailash_significance.md) | Chapter 2 — Mt. Kailash — Religious Significance (冈仁波齐神山简介) (pp. 14–21) |
| [`03_weather_by_month.md`](./03_weather_by_month.md) | Chapter 3 — Weather by Month (转山季各月份情况) (pp. 22–23) |
| [`04_gear_and_supplies.md`](./04_gear_and_supplies.md) | Chapter 4 — Gear & Supplies (转山的装备与物资准备) (pp. 24–29) |
| [`05_tarchen_base_camp.md`](./05_tarchen_base_camp.md) | Chapter 5 — Tarchen — Pilgrim's Base Camp (塔钦) (pp. 30–40) |
| [`06_overall_itinerary.md`](./06_overall_itinerary.md) | Chapter 6 — Overall Itinerary & Fees (转山整体行程安排、沿途补给概况) (pp. 41–56) |
| [`07_health_and_safety.md`](./07_health_and_safety.md) | Chapter 7 — Health & Safety (转山的健康与安全) (pp. 57–65) |
| [`08_stage_1_tarchen_to_dirapuk.md`](./08_stage_1_tarchen_to_dirapuk.md) | Chapter 8 — Stage 1: Tarchen → Dirapuk (转山阶段一) (pp. 66–126) |
| [`09_stage_2_dolma_la_pass.md`](./09_stage_2_dolma_la_pass.md) | Chapter 9 — Stage 2: Dirapuk → Zutulpuk via Dolma La (转山阶段二) (pp. 127–191) |
| [`10_stage_3_back_to_tarchen.md`](./10_stage_3_back_to_tarchen.md) | Chapter 10 — Stage 3: Zutulpuk → Tarchen (转山阶段三) (pp. 192–217) |
| [`11_respect_and_responsible_travel.md`](./11_respect_and_responsible_travel.md) | Chapter 11 — Respect & Responsible Travel (对宗教、文化的尊重，负责任的旅行) (pp. 218–219) |
| [`12_acknowledgments.md`](./12_acknowledgments.md) | Chapter 12 — Acknowledgments (鸣谢及主要参考资料) (pp. 220–221) |
| [`13_changelog.md`](./13_changelog.md) | Chapter 13 — Version Changelog (版本更新日志) (pp. 222–226) |
| [`14_copyright.md`](./14_copyright.md) | Chapter 14 — Copyright & Usage (版权声明及使用限制) (pp. 227–229) |
| [`glossary.md`](./glossary.md) | Religious terms glossary (Chinese, Tibetan, English) |
| [`sacred_sites.md`](./sacred_sites.md) | All 87 sacred sites, sorted by stage and page |
| [`legends.md`](./legends.md) | Legends collected per sacred site |
| [`rituals.md`](./rituals.md) | Ritual practices collected per sacred site |

## How to use this with Claude Code

- **For programmatic lookup** (filtering, joins, computed views): use the JSON file.
- **For semantic context** (when the model needs the prose, the legend, the cultural framing): point Claude Code at the relevant Markdown file.
- **For best results in a pilgrim-assistant app**: combine both — load the JSON as a structured index, then fetch the relevant Markdown chapter for full narrative when answering a user question.

## A note on the spirit of the guide

> 「转山就是转经，跟转寺庙转佛塔一样，从来没有人规定你要走几天，关键是转完。」
> *Kora is just like circumambulating a temple or stupa — no rule says how many days. What matters is completing the circuit.*

Jansen Wong wrote this guide specifically for *cultural travelers and pilgrims* — not for trekking-challenge enthusiasts. The author has spent 736 days near Mt. Kailash over twelve years and completed 64 koras. The book's purpose is to make sure pilgrims can find every sacred site, understand its meaning, and walk the route in a spirit of reverence rather than as a sport.