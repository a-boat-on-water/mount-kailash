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

// ---------------------------------------------------------------------------
// Tarchen Base Camp (Ch 5) — detailed sections
// ---------------------------------------------------------------------------

export interface TarchenSection {
  id: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
  context?: { en: string; zh: string };
}

export const tarchenSections: TarchenSection[] = [
  {
    id: 'arrival',
    title: { en: 'Getting to & from Tarchen', zh: '到达与离开' },
    content: {
      en: 'If not self-driving, chartering, ride-sharing, or joining a tour, you can take a scheduled bus. From Lhasa: departs North Suburb Bus Station at 9:00, 652 CNY, ~24h. From Shigatse: departs Main Station at 12:00, 497 CNY. Buy tickets at the station or via WeChat mini-program "西藏票务通" (select "阿里南"). Online tickets have a service fee and are only available 2–3 days ahead.',
      zh: '如果不是自驾、包车、拼车或跟团，可以坐班车到塔钦。从拉萨：北郊客运站9:00发车，652元，约24小时。从日喀则：总站12:00发车，497元。可现场或通过微信小程序"西藏票务通"购买，终点选"阿里南"。网购加收服务费，通常只能提前2-3天预售。',
    },
    context: {
      en: 'Buses must rest between 2–5 AM (regulation). The Lhasa–Ali bus takes roughly 24 hours depending on rest stops and freight loading. Tell the driver you\'re going to Darchen ("Shenshan"). Return bus departs Darchen at 13:00 daily during kora season. Ali Kunsha Airport (200km) has flights to Lhasa, Kashgar, Xining, Chengdu — 2–3 daily Lhasa flights at ~3,200 CNY (no discounts). Pulan Airport (90km) has a daily Lhasa flight during 2026 kora season with shuttle to Darchen (60 CNY).',
      zh: '交通部门规定客车凌晨2-5点需停车休息。拉萨-阿里班车大概24小时，上车跟司机说到塔钦（神山）。转山季塔钦返拉萨班车每天13:00出发。阿里昆莎机场（200公里）有拉萨、喀什、西宁、成都航线，每天2-3班拉萨航班，约3200元不打折。普兰机场（90公里）2026转山季每天一班拉萨航班，班车到塔钦60元。',
    },
  },
  {
    id: 'overview',
    title: { en: 'Tarchen Overview', zh: '塔钦现况' },
    content: {
      en: 'Tarchen is built on a south-facing slope at 4,640–4,700m. Most areas have views of Kailash\'s south face (top portion only, due to foreground hills). The 7,694m Naimona\'nyi peak (Himalayas) is fully visible to the south. Rapid construction and expansion in recent years.',
      zh: '整个塔钦集镇建在一个南低北高的斜坡上，海拔约4640～4700米。多数地方能见到冈仁波齐峰南壁顶上的小部分。南面远处可完整看到海拔7694米的纳木那尼峰。近几年塔钦各处持续大兴土木、快速膨胀。',
    },
  },
  {
    id: 'accommodation',
    title: { en: 'Accommodation', zh: '住宿' },
    content: {
      en: 'Ranges from budget dorm beds (tens of CNY) to 1,000+ CNY/night peak season rooms. Mid-range: 200–300 off-peak, 500–600 peak. Many new hotels have heating and supplemental oxygen. 2026 (Horse Year) prices significantly higher than normal. National Day week (Oct 1–7) is the most expensive period. First-timers should book a private room for better rest and acclimatization.',
      zh: '住宿从几十元床位到旺季千元标间都有，中档淡季200-300、旺季500-600。许多新宾馆有供暖、供氧。2026马年房价比往年大幅上涨。国庆黄金周期间标间可达1000元。建议初次转山者订独立房间以便休息。',
    },
    context: {
      en: 'Tarchen is now a major stop on Highway 219, attracting many non-pilgrim tourists during peak season, straining accommodation. Due to the remote location and harsh climate, resources and supplies are expensive — everything must be transported in from outside. Because Tarchen sits on a slope with ~60m elevation difference, most newcomers feel breathless walking uphill.',
      zh: '如今塔钦已是219国道上重要的"补给站"，旅游旺季也有很多不转山的游客在此停留过夜，住宿紧张。由于地处偏远、气候差，几乎所有物资都从外地运来，运输成本及损耗率高。塔钦建在斜坡上，南低北高约60米海拔差，多数刚到的人往上走都会喘。',
    },
  },
  {
    id: 'restaurants',
    title: { en: 'Restaurants', zh: '餐馆' },
    content: {
      en: 'Restaurants throughout town — Sichuan cuisine dominant, also Northeastern, Hunan, halal, plus newer Western restaurants, cafés, and fast food. Many Tibetan restaurants also serve basic Chinese dishes. Prices: stir-fried vegetables from 35 CNY, meat dishes from 50 CNY, quick meals (rice bowls, noodles, dumplings) from 30 CNY. Use food review apps for locations and contacts.',
      zh: '大小餐馆遍布集镇，川菜为主，也有东北菜、湖南菜、清真餐馆，近年新增西餐厅、咖啡馆。不少藏餐馆也提供简单中餐。价格：素菜35元起、荤菜50元起、快餐30元起。可通过餐饮点评APP了解详情。',
    },
  },
  {
    id: 'shops',
    title: { en: 'Supermarkets & Shops', zh: '超市、商店' },
    content: {
      en: 'Multiple supermarkets and shops for food, drinks, trail snacks, daily necessities, and emergency clothing/shoes. Notable stores: "优选购物中心" (south of Himalaya Kailash Hotel on Middle Road), "百惠超市" (in the Trade Center at Gela Road junction), "兴盛购物中心" (Building 10, International Tourism Town), and "清惠超市" (northeast corner of North Road–Renmin Road junction).',
      zh: '塔钦各处有多家超市、小商店，食品饮料（包括干粮）、日用品、应急用衣服鞋子都能买到。主要超市："优选购物中心"（塔钦中路喜马拉雅酒店南侧）、"百惠超市"（格拉路-塔钦中路交界处商贸中心内）、"兴盛购物中心"（国际旅游小镇10号楼）、"清惠超市"（塔钦北路-人民路交界处东北侧）。',
    },
  },
  {
    id: 'utilities',
    title: { en: 'Water, Power & Connectivity', zh: '水电与通信' },
    content: {
      en: 'Connected to the national power grid since December 2020 — stable 24h electricity. Tap water coverage is limited; some buildings rely on wells or river water. WeChat Pay accepted everywhere; Alipay slightly less common. Only one bank: Agricultural Bank of China (Gela Road–Gangsha Road junction, NE side). China Mobile and China Telecom offices for SIM services. China Post office with EMS and parcel delivery to anywhere in China.',
      zh: '2020年12月接入国家电网，全天供电基本稳定。管道自来水覆盖有限，部分房屋需打井或取河水。微信支付普及，支付宝略低。仅有一家农业银行（格拉路-岗莎路交界处东北侧）。有中国移动、中国电信营业厅。中国邮政营业厅有EMS、快递包裹服务。',
    },
  },
  {
    id: 'medical',
    title: { en: 'Hospital & Pharmacy', zh: '医院、药店' },
    content: {
      en: 'Baga Township Health Clinic (Pulan County Central Hospital branch) at Gela Road–Laqu Road junction, SW side. Outpatient hours: Summer (May–Sep) 10:00–13:00 & 16:30–19:00, Winter (Oct–Apr) 10:30–13:30 & 16:00–18:30. Weekday clinic only; weekends/off-hours emergency only — call the duty doctor (posted at entrance). Multiple pharmacies and private clinics also in town. Many hotels rent portable oxygen concentrators or large oxygen cans for the trek.',
      zh: '"巴嘎镇卫生院"（普兰县中心医院巴嘎镇分院）在格拉路-拉曲路交界处西南侧。门诊时间：夏季（5-9月）10:00-13:00、16:30-19:00 / 冬季（10月-次年4月）10:30-13:30、16:00-18:30。周一至周五门诊，周末及非门诊时间只有急诊。多家药店和私人诊所。很多酒店有轻便氧气瓶或便携式制氧机出租。',
    },
  },
  {
    id: 'local-transport',
    title: { en: 'Local Transport & Charters', zh: '周边交通、包车' },
    content: {
      en: 'Scheduled buses: "Ali–Pulan" bus for Pulan County, Manasarovar, Rakshas Tal — arrives ~4 PM daily at the parking lot on North Road. "Lhasa–Zanda" bus every 2 days for Zanda Earth Forest and Guge Kingdom ruins — arrives ~9 AM at "Ouguan Tianqi Hotel." Gangsha Village has a taxi fleet (4 cars) for trips to nearby attractions, Pulan, Shiquanhe, or airport transfers.',
      zh: '客运班车："阿里-普兰"班车可去普兰县城、玛旁雍错、拉昂错，每天下午4点左右到塔钦。"拉萨-札达"每两天一班去札达土林、古格遗址，早上9点左右到塔钦。岗莎村有4辆出租车可包车去周边景点、普兰县城、狮泉河镇及机场接送。',
    },
  },
  {
    id: 'weather-info',
    title: { en: 'Weather Forecast & Time', zh: '天气预报与时差' },
    content: {
      en: 'Standard weather apps only show "Pulan County" (the county seat, 80km south at 3,880m) — this is NOT accurate for Tarchen (800m higher, very different climate). Search specifically for "Tarchen/Taqin" or "Baga Township." Follow WeChat account "冈底斯气象" (ID: aliqixiang) for local 72-hour forecasts. Note: Tibet uses Beijing Time but actual solar time is ~2 hours behind — sunrise and sunset are about 2 hours later than eastern China.',
      zh: '天气预报APP只能查到"普兰县"（普兰县城在塔钦以南80公里、海拔仅3880米），与塔钦气候相差甚远。必须搜"塔钦（塔尔钦）"或"（普兰县）巴嘎（镇）"。可关注微信公众号"冈底斯气象"（微信号：aliqixiang）。西藏使用北京时间但实际日照比东部晚约2小时。',
    },
  },
];

// ---------------------------------------------------------------------------
// Itinerary Planning (Ch 6) — enriched data
// ---------------------------------------------------------------------------

export const itineraryPlanning = {
  howManyDays: {
    title: { en: 'How Many Days?', zh: '几天转完？' },
    content: {
      en: 'Foreign travel guides typically plan 3 days for the Kailash kora. Chinese "hiking guides" often compress it to 2 days or even 1 day — treating it as a trail-running challenge. This guide recommends a 3-stage, 2.5-day itinerary that prioritizes acclimatization, cultural experience, and safety over speed. There is no religious or traditional requirement for completing it in any set number of days — the key is completing a closed circuit (end = start).',
      zh: '外国旅行指南通常安排三天转完。中文"徒步攻略"多压缩成两天甚至一天——将其当成户外挑战。本指南推荐三阶段两天半的行程安排，更重视适应海拔、文化体验和安全。转山从来没有规定要走几天，关键是走完一个闭合的圈。',
    },
    context: {
      en: 'Many who "nearly collapsed" on the kora were following overly aggressive 2-day schedules found online. The kora is a pilgrimage, not a race. Walking slowly allows you to notice the sacred sites, engage with the landscape, and acclimatize properly. The most devout Tibetan pilgrims take 15 days, completing the circuit by full-body prostration.',
      zh: '不少在转山路上"累成狗"的人，是按照网上那些紧凑的两天行程走的。转山是朝圣不是比赛。放慢脚步才能留意圣迹、感受环境、适应海拔。最虔诚的藏族朝圣者以磕长头方式15天完成一圈。',
    },
  },
  routeOverview: {
    title: { en: 'Overall Route', zh: '整体路线' },
    content: {
      en: 'The full outer kora is approximately 52km, measured by GPS over multiple circuits. The route starts and ends at Darchen, going clockwise around Mount Kailash. Highest point: Dolma La Pass at 5,650m. The trail is divided into 3 stages with 2 overnight stops.',
      zh: '外转山路全程约52公里（多次GPS轨迹综合数据）。从塔钦出发顺时针绕冈仁波齐一圈。最高点：卓玛拉垭口海拔5650米。分3个阶段，途中住2晚。',
    },
  },
};

// ---------------------------------------------------------------------------
// Supply Points (existing, enriched)
// ---------------------------------------------------------------------------

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
