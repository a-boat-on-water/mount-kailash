import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// Types for the raw JSON chapter structure
// ---------------------------------------------------------------------------

/** A section within a flat-text chapter (Chinese-only in source JSON) */
export interface RawChapterSection {
  id: string;
  title: string;
  content: string;
}

/** A chapter as it appears in the source JSON */
export interface RawChapter {
  number: number;
  title_zh: string;
  title_en: string;
  category: string;
  page_range: [number, number];
  section_count: number;
  sections: RawChapterSection[];
}

// ---------------------------------------------------------------------------
// Bilingual chapter types for app consumption
// ---------------------------------------------------------------------------

export interface BookSection {
  id: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
}

export interface BookChapter {
  number: number;
  title: { en: string; zh: string };
  category: string;
  pageRange: [number, number];
  /** 'flat' = prose chapters (1-7, 11-14), 'stage' = route chapters (8-10) */
  type: 'flat' | 'stage';
  sections: BookSection[];
}

export type ChapterCategory =
  | 'introduction'
  | 'prepare'
  | 'route'
  | 'culture'
  | 'reference';

const CATEGORY_MAP: Record<string, ChapterCategory> = {
  introduction: 'introduction',
  cultural_background: 'prepare',
  weather_and_seasons: 'prepare',
  gear_and_supplies: 'prepare',
  base_camp: 'prepare',
  itinerary_overview: 'prepare',
  health_and_safety: 'prepare',
  route_stage_1: 'route',
  route_stage_2: 'route',
  route_stage_3: 'route',
  ethics_and_respect: 'culture',
  acknowledgments: 'reference',
  changelog: 'reference',
  copyright: 'reference',
};

// ---------------------------------------------------------------------------
// English translations for flat-text chapter sections
// (Source JSON is Chinese-only for these chapters)
// ---------------------------------------------------------------------------

const SECTION_TRANSLATIONS: Record<string, Record<string, string>> = {
  // Section title translations (Chinese title → English title)
};

const SECTION_TITLE_EN: Record<string, string> = {
  '缘起': 'Origin Story',
  '为文化旅行者、朝圣者而写的冈仁波齐转山': 'A Kailash Guide for Cultural Travelers and Pilgrims',
  '冈仁波齐转山的权威指南': 'The Authoritative Kailash Pilgrimage Guide',
  'main': 'Main',
  '到达与离开': 'Getting to and from Tarchen',
  '塔钦现况': 'Current State of Tarchen',
  '住宿': 'Accommodation',
  '餐馆': 'Restaurants',
  '超市、商店': 'Supermarkets & Shops',
  '水电供应': 'Water & Electricity',
  '电子支付、银行': 'Electronic Payment & Banking',
  '通信营业厅、邮局': 'Telecom & Post Office',
  '医院、药店': 'Hospital & Pharmacy',
  '周边交通、短途包车': 'Local Transport & Short-trip Charters',
  '天气预报 、时差': 'Weather Forecast & Time Difference',
  '几天转完？': 'How Many Days?',
  '转山整体路线安排、转山地图': 'Overall Route & Map',
  '转山相关收费、服务项目': 'Fees & Services',
  '转山沿途补给及其他信息概述': 'Supply Points & Other Information',
  '转山时要带什么？': 'What to Bring?',
  '高原反应及海拔适应': 'Altitude Sickness & Acclimatization',
  '野狗': 'Wild Dogs',
  '野生动物接触风险': 'Wildlife Contact Risks',
  '危险路段': 'Dangerous Sections',
  '夜路': 'Night Hiking',
  '恶劣天气、冰雪路面、冬季封山': 'Bad Weather, Icy Trails & Winter Closure',
  '紧急求助设施、医疗服务点、医院': 'Emergency Facilities & Medical Stations',
};

// ---------------------------------------------------------------------------
// Data loading
// ---------------------------------------------------------------------------

let cachedData: ReturnType<typeof parseGuideJSON> | null = null;

function loadRawJSON() {
  const filePath = path.join(process.cwd(), 'assets-source', 'kailash_pilgrimage_guide.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function parseGuideJSON() {
  const raw = loadRawJSON();
  const chapters: BookChapter[] = (raw.chapters as RawChapter[]).map((ch) => {
    const isStage = [8, 9, 10].includes(ch.number);
    return {
      number: ch.number,
      title: { en: ch.title_en, zh: ch.title_zh },
      category: CATEGORY_MAP[ch.category] ?? 'reference',
      pageRange: ch.page_range,
      type: isStage ? 'stage' as const : 'flat' as const,
      sections: ch.sections.map((s) => ({
        id: s.id,
        title: {
          en: SECTION_TITLE_EN[s.title] ?? s.title,
          zh: s.title === 'main' ? ch.title_zh : s.title,
        },
        content: {
          en: '', // English translations added in enrichment phase
          zh: s.content,
        },
      })),
    };
  });

  return { metadata: raw.metadata, chapters };
}

function getCache() {
  if (!cachedData) {
    cachedData = parseGuideJSON();
  }
  return cachedData;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function getAllChapters(): BookChapter[] {
  return getCache().chapters;
}

export function getChapter(num: number): BookChapter | undefined {
  return getCache().chapters.find((ch) => ch.number === num);
}

export function getChaptersByCategory(category: ChapterCategory): BookChapter[] {
  return getCache().chapters.filter((ch) => ch.category === category);
}

export function getFlatChapters(): BookChapter[] {
  return getCache().chapters.filter((ch) => ch.type === 'flat');
}

export function getStageChapters(): BookChapter[] {
  return getCache().chapters.filter((ch) => ch.type === 'stage');
}

export function getMetadata() {
  return getCache().metadata;
}

/** Category display labels */
export const categoryLabels: Record<ChapterCategory, { en: string; zh: string }> = {
  introduction: { en: 'Introduction', zh: '前言' },
  prepare: { en: 'Prepare', zh: '行前准备' },
  route: { en: 'Route', zh: '转山路线' },
  culture: { en: 'Culture', zh: '文化礼仪' },
  reference: { en: 'Reference', zh: '参考资料' },
};
