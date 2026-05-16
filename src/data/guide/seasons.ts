export interface SeasonalPeriod {
  id: string;
  period: { en: string; zh: string };
  months: { en: string; zh: string };
  rating: 'best' | 'good' | 'caution' | 'closed';
  description: { en: string; zh: string };
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
  },
];

export const seasonOverview = {
  openingSeason: { en: 'May – October (late April opening, Nov 1 closure)', zh: '5月～10月底（4月下旬开放、11月1日封山）' },
};
