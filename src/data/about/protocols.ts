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
      en: 'Always ask permission before photographing local people. Many Tibetans on the trail, especially older ones, may not speak Mandarin — use body language and a smile to express your request. Show them the photo afterward or send it to them as thanks. If someone declines, respect their wishes and do not insist.',
      zh: '拍摄别人请先征得对方的允许。转山途中遇到的藏族人，特别是年纪大的，可能汉语能力有限。用身体语言和微笑表达善意请求，拍完之后回放给对方看或把照片发给对方以表谢意。对方不愿意则不要强行拍照。',
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
      en: 'Bring trash bags and carry out all lightweight non-degradable waste (plastic bags, snack wrappers). The Dolma La area is highest in elevation and hardest to clean — vehicles cannot reach it, so all trash removal relies on people and horses. Strong winds blow light litter far from the trail into unreachable areas. If you see serious trash problems, call the scenic area hotline: 400-6666-712.',
      zh: '自带垃圾袋将轻量难降解垃圾（塑料袋、零食包装）带回塔钦丢弃。卓玛拉前后这段海拔最高，车辆开不上去，垃圾运送靠人背马驮。大风会将轻垃圾吹到远处无法清理。如发现严重垃圾问题可打景区综合服务热线400-6666-712。',
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
