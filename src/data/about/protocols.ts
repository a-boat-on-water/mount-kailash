export interface Protocol {
  id: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
}

export const culturalProtocols: Protocol[] = [
  {
    id: 'clockwise',
    title: { en: 'Always go clockwise', zh: '顺时针绕行' },
    content: {
      en: 'When passing stupas, mani stones, prayer wheels, or any sacred object, always circle from the left (clockwise). This applies to the entire kora route.',
      zh: '路上遇到佛塔、玛尼石、转经筒等圣物请从左侧顺时针绕行。整条转山路亦如此。',
    },
  },
  {
    id: 'photography',
    title: { en: 'Ask before photographing people', zh: '拍摄先征求同意' },
    content: {
      en: 'Always ask permission before photographing local people, especially monks and pilgrims in prayer.',
      zh: '拍摄当地人请先征求同意，尤其是僧侣和正在祈祷的朝圣者。',
    },
  },
  {
    id: 'no-alcohol',
    title: { en: 'No alcohol on the trail', zh: '转山路上禁酒' },
    content: {
      en: 'Do not drink alcohol on the kora trail. It is disrespectful to the sacred space and dangerous at altitude.',
      zh: '不要在转山路上喝酒。这既是对圣地的不敬，在高海拔也很危险。',
    },
  },
];

export const environmentalProtocols: Protocol[] = [
  {
    id: 'trash',
    title: { en: 'Pack out your trash', zh: '自带垃圾袋' },
    content: {
      en: 'Bring trash bags and carry out all lightweight non-degradable waste (plastic bags, snack wrappers). The Dolma La area is highest in elevation and hardest to clean.',
      zh: '自带垃圾袋将轻量难降解垃圾（塑料袋、零食包装）带回塔钦丢弃，卓玛拉一带海拔最高、清运最难。',
    },
  },
  {
    id: 'wildlife',
    title: { en: 'Leave wildlife alone', zh: '不要接触野生动物' },
    content: {
      en: 'Do not pick flowers, do not feed wild animals. Marmots carry plague — absolutely no touching or feeding.',
      zh: '不要采花、不要喂野生动物。旱獭携带鼠疫——绝对不要触摸或喂食。',
    },
  },
  {
    id: 'prayer-flags',
    title: { en: 'Eco-friendly prayer flags', zh: '环保经幡' },
    content: {
      en: 'Choose prayer flags made of biodegradable materials when possible.',
      zh: '选择可降解材料的环保经幡。',
    },
  },
];
