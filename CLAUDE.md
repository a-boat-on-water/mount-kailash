@AGENTS.md

## Project Conventions

### Next.js 16 Breaking Changes
- `params` and `searchParams` in pages/layouts are **Promises** — must `await` them
- Turbopack is the default bundler
- No `next lint` command — use `npx eslint .` directly
- Use `generateStaticParams()` for dynamic routes

### Architecture Patterns
- **Server components** load data (fs.readFileSync, JSON parsing) and pass to client components
- **Client components** handle interactivity (language toggle, filters, map, animations)
- **i18n**: Global `LanguageContext` provides `{ lang, setLang, t }`. All UI strings in `src/i18n/`. Content data uses `{ en: string, zh: string }` objects.
- **Data loading**: Guide JSON at `doc/kailash_pilgrimage_guide.json` loaded server-side only. Typed data files in `src/data/`.

### Styling
- Tailwind CSS 4 with CSS variable tokens defined in `globals.css`
- Color palette: terracotta primary (`#C2714F`), warm cream background (`#FAF8F5`), earthy tones
- Framer Motion for animations (fade-up, layout transitions)
- Mobile-first (max-w-md container), designed for iPhone

### File Organization
- Pages: `src/app/[route]/page.tsx` (server) + `src/app/[route]/ComponentName.tsx` (client)
- Shared components: `src/components/`
- Data loaders: `src/data/` (export typed functions for server, typed arrays for client)

### Key Dependencies
- `framer-motion` — animations
- `lucide-react` — icons
- `maplibre-gl` — map rendering
- `react-markdown` + `remark-gfm` — guide content rendering
- `clsx` + `tailwind-merge` — className utility (`cn()` in `src/lib/utils.ts`)
