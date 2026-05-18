export interface SeasonalPeriod {
  id: string;
  period: { en: string; zh: string };
  months: { en: string; zh: string };
  rating: 'best' | 'good' | 'caution' | 'closed';
  description: { en: string; zh: string };
  context?: { en: string; zh: string };
}

export interface MonthDetail {
  id: string;
  month: { en: string; zh: string };
  temp: { en: string; zh: string };
  conditions: { en: string; zh: string };
  note?: { en: string; zh: string };
}

export const seasons: SeasonalPeriod[] = [
  {
    id: 'best',
    period: { en: 'Mid Sep – Mid Oct', zh: '9月中～10月中' },
    months: { en: 'September – October', zh: '九月至十月' },
    rating: 'best',
    description: {
      en: 'Dry and clear skies. Best weather for the kora. Avoid the National Day holiday week (Oct 1-7) for fewer crowds.',
      zh: '天气干燥晴朗，是最佳转山时段。避开国庆黄金周可减少人流。',
    },
    context: {
      en: 'Post-monsoon clarity means the best mountain views. Temperatures drop rapidly after mid-October — dress warmly for cold mornings. Accommodation prices spike during National Day week.',
      zh: '雨季结束后天气晴朗，神山能见度最佳。10月中旬后气温骤降，早晚需注意保暖。国庆期间住宿价格飙升。',
    },
  },
  {
    id: 'secondary',
    period: { en: 'Mid May – Late Jun', zh: '5月中～6月底' },
    months: { en: 'May – June', zh: '五月至六月' },
    rating: 'good',
    description: {
      en: 'Second-best window. Avoid the few days around Saga Dawa festival (peak pilgrim crowds).',
      zh: '次佳时段。避开萨嘎达瓦节前后几天的高峰。',
    },
    context: {
      en: 'The trail may still have residual winter snow near Dolma La in early June. Weather is generally stable but snow is possible at the pass in any month. The Saga Dawa festival draws massive Tibetan pilgrim crowds.',
      zh: '6月初卓玛拉附近可能仍有冬季残雪。天气总体稳定但垭口段每月都可能降雪。萨嘎达瓦节吸引大量藏族朝圣者。',
    },
  },
  {
    id: 'summer',
    period: { en: 'July – August', zh: '7月、8月' },
    months: { en: 'July – August', zh: '七月至八月' },
    rating: 'caution',
    description: {
      en: 'Green grass and wildflowers, but frequent rain and clouds often obscure the mountain. Peak season for Indian pilgrims — accommodation is tight.',
      zh: '草绿花开但多雨多云，神山常被遮挡，且是印度香客高峰，住宿紧张。',
    },
    context: {
      en: 'July marks the start of the monsoon season — afternoon rain is common. Trail conditions deteriorate with mud and wet rocks. August is peak Indian pilgrimage season, putting heavy pressure on accommodation.',
      zh: '7月进入雨季，午后降雨频繁，路面泥泞湿滑。8月是印度香客朝圣高峰，住宿压力极大。',
    },
  },
  {
    id: 'late-autumn',
    period: { en: 'After mid-September', zh: '9月中后' },
    months: { en: 'Late September onwards', zh: '九月中旬以后' },
    rating: 'caution',
    description: {
      en: 'South wind picks up daily from noon — you will face strong headwinds on the return leg.',
      zh: '每天中午开始刮南风，回程顶风。',
    },
    context: {
      en: 'Despite strong afternoon winds, mornings remain calm and sunny. Plan the Stage 3 return walk for early morning to avoid the worst headwinds. Late September to mid-October still has excellent visibility.',
      zh: '尽管午后风大，早晨仍然晴朗无风。第三阶段回程尽量安排在上午早些时候以避开大风。9月下旬至10月中旬能见度仍然极佳。',
    },
  },
  {
    id: 'winter',
    period: { en: 'November – April (CLOSED)', zh: '11月～4月（封山）' },
    months: { en: 'Winter closure', zh: '冬季封山' },
    rating: 'closed',
    description: {
      en: 'Mountain is officially closed Nov 1 – late April. NEVER attempt a winter kora — multiple fatalities have occurred.',
      zh: '11月1日封山至4月下旬开放。冬季封山期切勿转山——已有多起致命事故。',
    },
    context: {
      en: 'In winter, temperatures plunge to -20°C to -30°C. Hidden water pools under thick snow can soak boots — life-threatening in those conditions. In 2022, 5 people attempted a winter kora: 2 died and 3 were seriously injured in a blizzard.',
      zh: '冬季气温降至零下二三十度。厚厚积雪下仍有未结冰的水坑，一旦踩入弄湿鞋袜，在严寒中极为危险。2022年5人在封山期强行转山遭遇暴风雪，2人遇难3人重伤。',
    },
  },
];

export const monthByMonth: MonthDetail[] = [
  {
    id: 'may',
    month: { en: 'May', zh: '五月' },
    temp: { en: 'Daytime 5–12°C, Night -5–3°C', zh: '白天5～12°C，夜间-5～3°C' },
    conditions: {
      en: 'Season opens late April. Generally dry with cold nights. Residual snow possible near Dolma La. Saga Dawa festival usually falls in late May or mid-June.',
      zh: '4月下旬开放。天气干燥，夜间寒冷。卓玛拉附近可能有残雪。萨嘎达瓦节通常在5月底或6月中。',
    },
  },
  {
    id: 'jun',
    month: { en: 'June', zh: '六月' },
    temp: { en: 'Daytime 8–15°C, Night 0–5°C', zh: '白天8～15°C，夜间0～5°C' },
    conditions: {
      en: 'Warm and relatively dry before monsoon. Late winter snow near the pass may still linger. Pre-monsoon thunderstorms possible in late June.',
      zh: '雨季前温暖干燥。垭口附近可能仍有冬季残雪。6月底可能出现雷阵雨前兆。',
    },
  },
  {
    id: 'jul',
    month: { en: 'July', zh: '七月' },
    temp: { en: 'Daytime 10–16°C, Night 2–7°C', zh: '白天10～16°C，夜间2～7°C' },
    conditions: {
      en: 'Monsoon begins — afternoon rain common. Trail gets muddy. Wildflowers bloom. Mountain often obscured by clouds.',
      zh: '雨季开始，午后常有降雨。路面泥泞。野花盛开。神山常被云遮挡。',
    },
  },
  {
    id: 'aug',
    month: { en: 'August', zh: '八月' },
    temp: { en: 'Daytime 10–15°C, Night 2–6°C', zh: '白天10～15°C，夜间2～6°C' },
    conditions: {
      en: 'Peak monsoon and peak Indian pilgrimage season. Frequent rain, tight accommodation. Greenest landscape of the year.',
      zh: '雨季高峰，也是印度香客朝圣高峰。降雨频繁，住宿紧张。全年植被最绿的时段。',
    },
  },
  {
    id: 'sep',
    month: { en: 'September', zh: '九月' },
    temp: { en: 'Daytime 8–13°C, Night -2–4°C', zh: '白天8～13°C，夜间-2～4°C' },
    conditions: {
      en: 'Monsoon retreats, skies clear. Best visibility. Afternoon south wind picks up after mid-month. Golden grass and autumn colors.',
      zh: '雨季退去，天空晴朗，能见度最佳。9月中旬后午后南风增强。草地金黄，秋色渐浓。',
    },
  },
  {
    id: 'oct',
    month: { en: 'October', zh: '十月' },
    temp: { en: 'Daytime 3–10°C, Night -8–0°C', zh: '白天3～10°C，夜间-8～0°C' },
    conditions: {
      en: 'Dry and clear but cold. National Day week (Oct 1–7) brings crowds and high prices. After mid-October temperatures drop fast; season ends Nov 1.',
      zh: '干燥晴朗但渐冷。国庆黄金周（10月1-7日）人多价高。10月中旬后气温骤降，11月1日封山。',
    },
  },
];

export const sagaDawa = {
  description: {
    en: 'Saga Dawa (Tibetan 4th month, 15th day) — the holiest Buddhist festival, commemorating Buddha\'s birth, enlightenment, and parinirvana. Massive pilgrim gatherings at Kailash. The iconic Tarboche flagpole is ceremonially replaced on this day.',
    zh: '萨嘎达瓦节（藏历四月十五日）——纪念佛祖诞生、成道、涅槃的最殊胜佛教节日。冈仁波齐迎来大量朝圣者。当天举行标志性的大经幡杆换旗仪式。',
  },
  dates: [
    { year: 2026, gregorian: '2026-05-31', display: { en: 'May 31, 2026', zh: '2026年5月31日' } },
    { year: 2027, gregorian: '2027-06-18', display: { en: 'June 18, 2027', zh: '2027年6月18日' } },
    { year: 2028, gregorian: '2028-06-07', display: { en: 'June 7, 2028', zh: '2028年6月7日' } },
  ],
};

export const seasonOverview = {
  openingSeason: { en: 'May – October (late April opening, Nov 1 closure)', zh: '5月～10月底（4月下旬开放、11月1日封山）' },
};
