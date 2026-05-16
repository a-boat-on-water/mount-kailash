export interface Chapter {
  slug: string;
  num: number;
  title: { en: string; zh: string };
  category: 'planning' | 'route' | 'culture';
  file: string;
}

export const chapters: Chapter[] = [
  {
    slug: 'introduction',
    num: 1,
    title: { en: 'Introduction: For Cultural Travelers & Pilgrims', zh: '缘起：为文化旅行者、朝圣者而写' },
    category: 'culture',
    file: '01_introduction.md',
  },
  {
    slug: 'mt-kailash-significance',
    num: 2,
    title: { en: 'Mount Kailash Overview', zh: '冈仁波齐神山简介' },
    category: 'culture',
    file: '02_mt_kailash_significance.md',
  },
  {
    slug: 'weather-by-month',
    num: 3,
    title: { en: 'Monthly Weather Conditions', zh: '转山季各月份情况' },
    category: 'planning',
    file: '03_weather_by_month.md',
  },
  {
    slug: 'gear-and-supplies',
    num: 4,
    title: { en: 'Gear & Supplies', zh: '转山的装备与物资准备' },
    category: 'planning',
    file: '04_gear_and_supplies.md',
  },
  {
    slug: 'tarchen-base-camp',
    num: 5,
    title: { en: 'Darchen Base Camp', zh: '塔钦——转山者的"大本营"' },
    category: 'planning',
    file: '05_tarchen_base_camp.md',
  },
  {
    slug: 'overall-itinerary',
    num: 6,
    title: { en: 'Overall Itinerary', zh: '转山整体行程安排' },
    category: 'planning',
    file: '06_overall_itinerary.md',
  },
  {
    slug: 'health-and-safety',
    num: 7,
    title: { en: 'Health & Safety', zh: '转山的健康与安全' },
    category: 'planning',
    file: '07_health_and_safety.md',
  },
  {
    slug: 'stage-1-tarchen-to-dirapuk',
    num: 8,
    title: { en: 'Stage 1: Darchen → Drirapuk', zh: '转山阶段一：塔钦→止热寺' },
    category: 'route',
    file: '08_stage_1_tarchen_to_dirapuk.md',
  },
  {
    slug: 'stage-2-dolma-la-pass',
    num: 9,
    title: { en: 'Stage 2: Drirapuk → Zutul Puk', zh: '转山阶段二：止热寺→尊珠寺' },
    category: 'route',
    file: '09_stage_2_dolma_la_pass.md',
  },
  {
    slug: 'stage-3-back-to-tarchen',
    num: 10,
    title: { en: 'Stage 3: Zutul Puk → Darchen', zh: '转山阶段三：尊珠寺→塔钦' },
    category: 'route',
    file: '10_stage_3_back_to_tarchen.md',
  },
  {
    slug: 'respect-and-responsible-travel',
    num: 11,
    title: { en: 'Respecting Culture & Religion', zh: '对宗教、文化的尊重' },
    category: 'culture',
    file: '11_respect_and_responsible_travel.md',
  },
  {
    slug: 'acknowledgments',
    num: 12,
    title: { en: 'Credits & References', zh: '鸣谢及主要参考资料' },
    category: 'culture',
    file: '12_acknowledgments.md',
  },
];
