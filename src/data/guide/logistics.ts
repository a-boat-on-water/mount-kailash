export interface TransportOption {
  id: string;
  name: { en: string; zh: string };
  details: { en: string; zh: string };
  context?: { en: string; zh: string };
}

export interface FeeItem {
  id: string;
  name: { en: string; zh: string };
  price: { en: string; zh: string };
  note?: { en: string; zh: string };
  context?: { en: string; zh: string };
}

export interface PorterInfo {
  id: string;
  name: { en: string; zh: string };
  price: { en: string; zh: string };
  note: { en: string; zh: string };
  context?: { en: string; zh: string };
}

export const transport: TransportOption[] = [
  {
    id: 'lhasa-bus',
    name: { en: 'Lhasa → Ali bus', zh: '拉萨→阿里班车' },
    details: {
      en: 'Departs from Lhasa North Suburb Bus Station at 9:00. 652 CNY, ~24 hours.',
      zh: '拉萨北郊客运站乘"拉萨-阿里"班车，9:00发车，652元，约24小时。',
    },
    context: {
      en: 'Buy tickets at the station or via WeChat mini-program "西藏票务通" (select "阿里南"). Online tickets have a service fee and are only available 2-3 days ahead. Buses stop for mandatory rest between 2-5 AM. Tell the driver you\'re going to Darchen ("Shenshan"). Return bus departs Darchen at 13:00 daily during kora season.',
      zh: '可在现场或通过微信小程序"西藏票务通"购票（终点选"阿里南"）。网购加收服务费且只能提前2-3天。班车凌晨2-5点需停车休息。上车跟司机说到塔钦（神山）。转山季有塔钦返回拉萨班车，每天13:00出发。',
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
    context: {
      en: 'Both airports charge full fare (~3,200 CNY one-way to Lhasa, no discounts). Kunsha has more flight options (Lhasa, Kashgar, Xining, Chengdu) and 2-3 daily Lhasa flights. Pulan Airport shuttle bus contact: 18989975777 / 13618975655. If you need to leave urgently due to altitude sickness, Kunsha offers more flexibility despite being farther.',
      zh: '两个机场票价均不打折，到拉萨单程约3200元。昆莎机场航班选择多（拉萨、喀什、西宁、成都），每天2-3班拉萨航班。普兰机场班车联系电话：18989975777 / 13618975655。如因高反需紧急离开，昆莎机场虽远但航班更灵活。',
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
    context: {
      en: 'Kailash and Lake Manasarovar are separate tickets (150 CNY each). 2026 added two new ticket outlets: "Himalaya Kailash Hotel" on Darchen Middle Road (0897-2660999) and "Origin Hotel" at Building 6, International Tourism Town (13989972572), in addition to the original entrance gate northwest of Darchen.',
      zh: '神山（冈仁波齐）与圣湖（玛旁雍错）门票分开，各150元。2026年新增两个售票点：塔钦中路的"喜马拉雅·冈仁波齐酒店"（0897-2660999）和国际旅游小镇6号楼"起点酒店"（13989972572）。',
    },
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
    context: {
      en: 'Extra days charged at 330 CNY/day. Only use registered porters from Gangsha Village — unregistered "black porters" may be stopped mid-trail. Porters walk fast and may get far ahead; keep essentials (power bank, water, snacks) on your person. Some porters may rush you — firmly decline if it exceeds your ability.',
      zh: '延长按330元/天计。务必使用岗莎村登记在册的背夫——"黑背夫"途中可能被拦下影响行程。背夫走得快可能抛离你很远，充电宝、水杯、少量干粮等随时要用的小件物品最好自己携带。个别背夫催促赶路时，请明确拒绝，按自己节奏走。',
    },
  },
  {
    id: 'horse',
    name: { en: 'Horse/Yak ride', zh: '骑马' },
    price: { en: '2,370 CNY / circuit', zh: '2370元/圈' },
    note: {
      en: 'Only 37km of the trail is rideable. Must dismount for the 3km steep descent after the pass.',
      zh: '仅37公里路段可骑（垭口前后3公里下坡需下马）。',
    },
    context: {
      en: 'Riding starts at Selong (6km from Darchen) and ends at Zongdui (4km from Darchen) — you must walk or take shuttles for the first and last sections. Consider walking Stage 1 (20km to Gangga/Drirapuk) first; if needed, horses can also be hired there for the remaining stages.',
      zh: '骑马起点在塔钦6公里外的色雄，终点在离塔钦4公里的宗堆，前后两段需自行走路或坐接驳车。可以先尝试走第一阶段20公里到岗加/芝热寺，如有需要那里也可以租到马。',
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
