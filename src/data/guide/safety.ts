export interface SafetyTip {
  id: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
}

export interface Incident {
  id: string;
  year: number;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
}

export const altitudeTips: SafetyTip[] = [
  {
    id: 'slow-down',
    title: { en: 'Slow down', zh: '放慢节奏' },
    content: {
      en: 'Don\'t rush — let your body acclimatize. The altitude ranges from 4,600m (Darchen) to 5,650m (pass).',
      zh: '不要急——放慢节奏，让身体适应。海拔从塔钦4600米到垭口5650米。',
    },
  },
  {
    id: 'rest-first',
    title: { en: 'Rest before starting', zh: '先休息再出发' },
    content: {
      en: 'Rest at least one night in Darchen before starting the kora.',
      zh: '到塔钦后至少休息一晚再出发。',
    },
  },
  {
    id: 'medication',
    title: { en: 'Medication & monitoring', zh: '药物与监测' },
    content: {
      en: 'Consider internationally recognized altitude medication. Use a finger pulse oximeter — if SpO\u2082 stays below 70%, descend immediately.',
      zh: '可服国际认可的抗高反药；用指夹式血氧仪监测，SpO\u2082持续低于70%应立即下撤。',
    },
  },
  {
    id: 'oxygen',
    title: { en: 'Supplemental oxygen', zh: '补充氧气' },
    content: {
      en: 'Many people only need oxygen on Day 2 climbs. 3-5 disposable oxygen cans are sufficient.',
      zh: '不少人只需在第二天爬坡时吸氧，3-5瓶一次性氧气足够。',
    },
  },
  {
    id: 'contraindications',
    title: { en: 'Medical contraindications', zh: '禁忌症' },
    content: {
      en: 'People with heart disease, high blood pressure, or severe respiratory conditions should NOT attempt the kora.',
      zh: '患心脏病、高血压、严重呼吸道疾病者不建议转山。',
    },
  },
];

export const otherRisks: SafetyTip[] = [
  {
    id: 'dogs',
    title: { en: 'Wild dogs', zh: '野狗' },
    content: {
      en: 'Keep your distance. Don\'t tease or feed them. They are more active at night — never walk at night.',
      zh: '保持距离，不要逗、不要喂，夜间更活跃，勿走夜路。',
    },
  },
  {
    id: 'marmots',
    title: { en: 'Marmots (plague hosts)', zh: '旱獭（鼠疫宿主）' },
    content: {
      en: 'NEVER touch or feed marmots — they carry plague in this region. Bite victims face mandatory quarantine.',
      zh: '是鼠疫宿主，绝对不要触摸或喂食，已有被咬隔离案例。',
    },
  },
  {
    id: 'weather-risk',
    title: { en: 'Weather', zh: '天气' },
    content: {
      en: 'Snow is possible any month at the pass. In heavy snowfall, retreat immediately to the nearest supply point.',
      zh: '垭口段每月都可能下雪，遇大雪应立即下撤到最近补给点。',
    },
  },
  {
    id: 'dangerous-descent',
    title: { en: 'Dangerous descent', zh: '危险路段' },
    content: {
      en: 'The 3km descent after Dolma La is the most dangerous section — multiple fatalities. Iron railings have been installed.',
      zh: '卓玛拉下行3公里下坡是全程最危险处，多处事故发生于此；现已加装铁护栏。',
    },
  },
  {
    id: 'medical-stations',
    title: { en: 'Medical infrastructure', zh: '医疗设施' },
    content: {
      en: '7 major supply points have medical stations (AED, oxygen generators). 30 video monitoring points with one-button alarm pillars and free WiFi nearby.',
      zh: '7个重要补给点设有医疗服务点（含AED、制氧机）；沿途30处装有视频监控与一键报警柱，附近有免密WiFi。',
    },
  },
];

export const incidents: Incident[] = [
  {
    id: 'winter-2022',
    year: 2022,
    title: { en: '2022 Winter Fatality', zh: '2022年冬季事故' },
    description: {
      en: '5 people attempted a winter kora during closure season. Hit by a blizzard — 2 died, 3 seriously injured. Never trek during official closure (Nov\u2013Apr).',
      zh: '5人在封山期（11月-4月）强行冬季转山，遭遇暴风雪，2人遇难3人重伤。封山期间绝对不要尝试转山。',
    },
  },
  {
    id: 'edema-2020',
    year: 2020,
    title: { en: '2020 Pulmonary Edema', zh: '2020年肺水肿事件' },
    description: {
      en: 'A girl went to Drirapuk the same day she arrived. Developed fever and cough but didn\'t tell anyone. SpO\u2082 dropped to 40% \u2014 emergency transfer to Pulan county hospital.',
      zh: '一名女孩到达当天直接前往止热寺，出现发烧咳嗽但未告知同伴，血氧降至40%，紧急送普兰县医院抢救。',
    },
  },
  {
    id: 'marmot-2024',
    year: 2024,
    title: { en: '2024 Marmot Bite', zh: '2024年旱獭咬伤' },
    description: {
      en: 'A foreign tourist fed a marmot and was bitten. Forced into 9-day quarantine \u2014 marmots are plague hosts in this region.',
      zh: '一名外国游客投喂旱獭被咬伤，被迫隔离观察9天。该区域旱獭是鼠疫宿主，切勿接触。',
    },
  },
];

export const authorTips: SafetyTip[] = [
  {
    id: 'pace',
    title: { en: 'Pace over speed', zh: '节奏胜过速度' },
    content: {
      en: 'Treat this as a pilgrimage, not a trail race. Three stages over 2.5 days gives better stamina and experience.',
      zh: '把它当朝圣不是越野赛。三阶段两天半，体力与体验都更佳。',
    },
  },
  {
    id: 'pack-light',
    title: { en: 'Pack light', zh: '轻装上阵' },
    content: {
      en: 'Many who "nearly died of exhaustion" were carrying too much unused gear.',
      zh: '不少"累成狗"的人，是背了太多用不上的东西。',
    },
  },
  {
    id: 'no-night',
    title: { en: 'No night trekking', zh: '不要走夜路' },
    content: {
      en: 'Especially after crossing Dolma La pass.',
      zh: '尤其翻完卓玛拉那段。',
    },
  },
  {
    id: 'forbidden-areas',
    title: { en: 'Forbidden areas', zh: '禁止区域' },
    content: {
      en: 'NEVER enter the "inner kora" or "Dakini Secret Path" — undeveloped, multiple fatalities, officially prohibited.',
      zh: '不要去"内转""空行母密道"等未开发区域——已多次致命，景区明令禁止。',
    },
  },
  {
    id: 'stay-connected',
    title: { en: 'Stay connected', zh: '保持联系' },
    content: {
      en: 'If descending alone, always inform your group of your status and where you are staying.',
      zh: '独自下撤要告知队友自己的状况和住处。',
    },
  },
];
