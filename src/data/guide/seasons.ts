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
    id: 'apr',
    month: { en: 'April', zh: '四月' },
    temp: { en: 'Daytime 0–8°C, Night -15–-5°C', zh: '白天0～8°C，夜间-15～-5°C' },
    conditions: {
      en: 'Season opens late April. Still cold with extensive snow at high elevations. Snow can be deep and dangerous. Not recommended for inexperienced trekkers.',
      zh: '4月下旬开放。气温低，高海拔路段积雪范围较多、雪较深，可能下大雪，无丰富经验者不建议。',
    },
    note: {
      en: 'The kora opens when the scenic area resumes ticket sales, usually late April. Dates may shift based on weather conditions — check for official announcements.',
      zh: '每年4月下旬景区恢复出售门票即为开放转山，具体开放/结束日期可能根据天气条件略作调整，可留意景区公告。',
    },
  },
  {
    id: 'may',
    month: { en: 'May', zh: '五月' },
    temp: { en: 'Daytime 5–12°C, Night -5–3°C', zh: '白天5～12°C，夜间-5～3°C' },
    conditions: {
      en: 'Warming up, more trekkers arrive. Generally clear skies. Rivers still have ice; residual snow at high elevations. Surrounding grass still brown.',
      zh: '气温逐步回升，转山人增多。天气大致晴朗，但河面有很多冰还没化，高海拔处依然有积雪，沿途草基本还是枯黄。',
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

export const bestTiming = {
  firstChoice: {
    period: { en: 'Mid September – Mid October', zh: '9月中～10月中' },
    note: {
      en: 'Best overall window for first-timers. Dry, clear skies, best mountain visibility. Avoid National Day holiday week (Oct 1–7).',
      zh: '最佳时段。天气干燥晴朗，能见度最佳。尽量避开国庆黄金周。',
    },
  },
  secondChoice: {
    period: { en: 'Mid May – Late June', zh: '5月中～6月底' },
    note: {
      en: 'Second-best window. Generally stable weather. Avoid the few days around Saga Dawa festival unless you specifically want to experience it.',
      zh: '次佳时段。天气大致稳定。如非专门为萨嘎达瓦节而来，最好错开节日及前后几天。',
    },
  },
  winterWarning: {
    en: 'NEVER attempt a kora during the closure period (Nov 1 – late April). No supply points, extreme cold, life-threatening conditions. In February 2022, 5 people ignored warnings and attempted a winter kora — 2 died and 3 were seriously injured in a blizzard. The trail now has surveillance cameras; authorities will intercept and turn back anyone attempting a winter kora.',
    zh: '切勿在景区关闭（封山）期间转山！全程无补给，气温低路况差，极易发生致命意外。2022年2月初，5人不顾劝阻执意冬季转山，遭遇大风雪导致两死三伤。现在沿途安装了大量监控摄像头，管理部门发现有人在封山期间转山会阻拦遣返。',
  },
};

export const windWarning = {
  title: { en: 'Afternoon Headwinds', zh: '午后大风' },
  content: {
    en: 'From mid-September onward, strong south winds pick up daily around noon — gusts can exceed force 8. On the return leg (Stage 3), you\'ll face direct headwinds that slow your pace considerably. The wind dies down after sunset. Plan your Stage 3 walk for early morning to avoid the worst.',
    zh: '大致从9月中起，每天中午左右开始刮南向大风，有时阵风超过8级。回程（第三阶段）刚好是迎头风，影响行走速度，大风要到日落后才慢慢消停。第三阶段回程尽量安排在上午。',
  },
};
