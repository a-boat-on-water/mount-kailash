export interface TransportOption {
  id: string;
  name: { en: string; zh: string };
  details: { en: string; zh: string };
}

export interface FeeItem {
  id: string;
  name: { en: string; zh: string };
  price: { en: string; zh: string };
  note?: { en: string; zh: string };
}

export interface PorterInfo {
  id: string;
  name: { en: string; zh: string };
  price: { en: string; zh: string };
  note: { en: string; zh: string };
}

export const transport: TransportOption[] = [
  {
    id: 'lhasa-bus',
    name: { en: 'Lhasa → Ali bus', zh: '拉萨→阿里班车' },
    details: {
      en: 'Departs from Lhasa North Suburb Bus Station at 9:00. 652 CNY, ~24 hours.',
      zh: '拉萨北郊客运站乘"拉萨-阿里"班车，9:00发车，652元，约24小时。',
    },
  },
  {
    id: 'shigatse-bus',
    name: { en: 'Shigatse → Ali bus', zh: '日喀则→阿里班车' },
    details: {
      en: 'Departs from Shigatse Main Station at 12:00. 497 CNY.',
      zh: '日喀则总站发车，12:00发，497元。',
    },
  },
  {
    id: 'airports',
    name: { en: 'Airports', zh: '机场' },
    details: {
      en: 'Ali Kunsha Airport (200km away) or Pulan Airport (90km). Pulan has daily "Lhasa–Pulan" flights during 2026 kora season, with shuttle bus to Darchen (60 CNY/person).',
      zh: '阿里昆莎机场（200公里）或普兰机场（90公里）。普兰机场2026转山季每天一班"拉萨-普兰"，机场有班车直达塔钦（60元/人）。',
    },
  },
];

export const darchen = {
  overview: {
    en: 'Darchen sits along National Highway 219, 10km south of Kailash, at 4,640–4,700m elevation. It is the starting and ending point for most pilgrims.',
    zh: '塔钦在219国道旁、神山以南10公里，海拔约4640～4700米，是绝大多数转山者的起终点。',
  },
  accommodation: {
    en: 'Ranges from budget dorm beds (tens of CNY) to 1000+ CNY/night peak season rooms. Mid-range: 200-300 off-peak, 500-600 peak. Many new hotels have heating and oxygen supply. 2026 (Horse Year) prices significantly higher. First-timers should book a private room for better rest.',
    zh: '住宿从几十元床位到旺季千元标间都有，中档淡季200-300、旺季500-600。许多新宾馆有供暖、供氧。马年（2026）房价大幅上涨。建议初次转山者订独立房间以便休息。',
  },
  facilities: [
    { en: 'Restaurants (mainly Sichuan cuisine, pricier than Lhasa)', zh: '餐馆遍布（川菜为主，物价比拉萨贵）' },
    { en: 'Multiple supermarkets', zh: '多家超市' },
    { en: 'Baga Township Health Clinic', zh: '巴嘎镇卫生院' },
    { en: 'Agricultural Bank of China', zh: '农业银行' },
    { en: 'China Mobile / China Telecom offices', zh: '移动/电信营业厅' },
    { en: 'Post office', zh: '邮政' },
    { en: 'WeChat Pay widely accepted', zh: '微信支付普及' },
  ],
};

export const fees: FeeItem[] = [
  {
    id: 'entrance',
    name: { en: 'Kailash entrance ticket', zh: '神山门票' },
    price: { en: '150 CNY', zh: '150元' },
    note: { en: 'ID registration required. Valid for 3 days.', zh: '售票需身份证登记，有效期3天。' },
  },
  {
    id: 'shuttle-tarboche',
    name: { en: 'Darchen ↔ Tarboche shuttle', zh: '塔钦↔大经幡杆接驳车' },
    price: { en: '20 CNY', zh: '20元' },
  },
  {
    id: 'shuttle-chuku',
    name: { en: 'Darchen ↔ Chuku Bridge shuttle', zh: '塔钦↔曲古桥接驳车' },
    price: { en: '50 CNY', zh: '50元' },
  },
  {
    id: 'shuttle-zongdui',
    name: { en: 'Zongdui ↔ Darchen shuttle', zh: '宗堆↔塔钦接驳车' },
    price: { en: '20 CNY', zh: '20元' },
  },
  {
    id: 'rescue-car',
    name: { en: 'Rescue/transfer vehicle', zh: '转运车（救援车）' },
    price: { en: '150 CNY/person', zh: '150元/人' },
    note: {
      en: 'Dispatch: 0897-2607026 / 400-6666-712. Goes up to Small Sky Burial Ground or Earth Nail supply point. 14-seat minibus from Gangga/Earth Nail back to Darchen.',
      zh: '调度电话 0897-2607026 / 400-6666-712。最远到小天葬台或不动地钉补给点。岗加、不动地钉到塔钦也有14座中巴，150元/人。',
    },
  },
];

export const porters: PorterInfo[] = [
  {
    id: 'porter',
    name: { en: 'Porter', zh: '背夫' },
    price: { en: '990 CNY / circuit (3 days)', zh: '990元/圈（3天）' },
    note: { en: 'Carries your pack for the full 3-day circuit.', zh: '全程3天背负行李。' },
  },
  {
    id: 'horse',
    name: { en: 'Horse/Yak ride', zh: '骑马' },
    price: { en: '2,370 CNY / circuit', zh: '2370元/圈' },
    note: {
      en: 'Only 37km of the trail is rideable. Must dismount for the 3km steep descent after the pass.',
      zh: '仅37公里路段可骑（垭口前后3公里下坡需下马）。',
    },
  },
];

export const supplyPoints = {
  count: { en: '11 fixed + multiple temporary points', zh: '11个固定补给点 + 多个临时点' },
  maxGap: { en: 'Max 7km between supply points', zh: '相邻最远约7公里' },
  infrastructure: {
    en: 'All connected to national power grid, have mobile signal, accept WeChat Pay.',
    zh: '均接入国家电网、有手机信号、支持微信支付。',
  },
  services: {
    en: 'Most offer rice dishes, noodles, butter tea, and bottled water. NO shower facilities anywhere on the trail.',
    zh: '大多提供盖饭、面条、酥油茶、矿泉水。所有补给点均无洗澡条件。',
  },
};
