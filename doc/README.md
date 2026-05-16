# Plain-text extraction of《冈仁波齐转山朝圣指南》8.0.1

This folder contains the full PDF converted into plain text in three different
granularities, so downstream tools (Claude Code, search indexers, embeddings, etc.)
can pick whichever fits best.

## Files

### `full_text.txt`  (≈280 KB)
The entire 229-page book in a single file. Each page is preceded by a `[PAGE N]`
marker so you can map text back to the original PDF. Whitespace is left as raw
PDF extraction (some extra line breaks).

### `full_text_clean.txt`  (≈260 KB)
Same content as above, but with whitespace normalised: collapsed multiple spaces,
trimmed trailing whitespace, max two consecutive newlines, and stripped Unicode
replacement characters (`\ufffd`). Easier on the eye and on token budgets.
`[PAGE N]` markers preserved.

### `by_chapter/*.txt`  (14 files)
One file per chapter, ordered:

  01_introduction.txt
  02_mt_kailash_significance.txt
  03_weather_by_month.txt
  04_gear_and_supplies.txt
  05_tarchen_base_camp.txt
  06_overall_itinerary.txt
  07_health_and_safety.txt
  08_stage_1_tarchen_to_dirapuk.txt
  09_stage_2_dolma_la_pass.txt
  10_stage_3_back_to_tarchen.txt
  11_respect_and_responsible_travel.txt
  12_acknowledgments.txt
  13_changelog.txt
  14_copyright.txt

Use these when you want Claude Code to load just one topic into context (e.g.
when the user asks "what should I pack for the kora?", load chapter 4 only).

### `by_page/*.txt`  (229 files: page_001.txt … page_229.txt)
One file per page. Useful for fine-grained retrieval — e.g. if you build a
search index that returns page numbers, you can load just that page.

## Notes on text quality

- **Chinese**: extracts cleanly, no issues.
- **Tibetan script** (Unicode block U+0F00–U+0FFF): the source PDF embeds
  complex stacked Tibetan characters that PDF text extractors handle imperfectly.
  Some combining marks may appear in slightly wrong positions or get split.
  Treat Tibetan strings as approximate transliteration aids, not authoritative.
- **Images & captions**: figures appear in the PDF but only their `▲ caption`
  text survives in the extraction (the images themselves are not included).
- **Tables**: the PDF has very few tables; most tabular-looking content is
  prose with prices/distances inline.

## How this fits with the other deliverables

| Layer | File(s) | Best for |
|-------|---------|----------|
| Raw text | this folder (`txt/`) | Search, full-text retrieval, fresh re-parsing |
| Structured data | `../kailash_pilgrimage_guide.json` | Programmatic queries, filtering, app data layer |
| Narrative for humans/LLMs | `../markdown/` | Reading, semantic context, mixed-format display |

Start from the txt layer if you want to do your own parsing or want full
fidelity. Use the JSON when you want pre-categorised data. Use the Markdown
when you want headers, formatted lists, and cross-references.
