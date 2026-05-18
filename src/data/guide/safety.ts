export interface SafetyTip {
  id: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
  context?: { en: string; zh: string };
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
    context: {
      en: 'Most people start experiencing altitude symptoms from 3,000m, with a noticeable threshold every 1,000m higher. Avoid ascending more than 800m in overnight elevation per day. This is why the guide recommends a 3-stage, 2.5-day itinerary instead of the "2-day speed treks" commonly found online.',
      zh: '通常从海拔3000米开始出现反应，基本每升高1000米都是一个坎。尽量不要在一天内升高过夜海拔超过800米。这也是本指南将转山行程安排得比那些"户外徒步攻略"宽松很多的重要原因。',
    },
  },
  {
    id: 'rest-first',
    title: { en: 'Rest before starting', zh: '先休息再出发' },
    content: {
      en: 'Rest at least one night in Darchen before starting the kora.',
      zh: '到塔钦后至少休息一晚再出发。',
    },
    context: {
      en: 'Darchen is built on a slope with ~60m elevation difference — most newcomers feel breathless walking uphill. Avoid showering immediately (steam reduces oxygen concentration). Altitude symptoms are typically worse at night; consider hotels with oxygen supply.',
      zh: '塔钦建在斜坡上，南低北高约60米海拔差，多数刚到的人往上走都会喘。洗澡时水蒸气多，空气含氧量降低，注意通风。高反症状在晚间更为明显，可选择有供氧的宾馆。',
    },
  },
  {
    id: 'medication',
    title: { en: 'Medication & monitoring', zh: '药物与监测' },
    content: {
      en: 'Consider internationally recognized altitude medication. Use a finger pulse oximeter — if SpO₂ stays below 70%, descend immediately.',
      zh: '可服国际认可的抗高反药；用指夹式血氧仪监测，SpO₂持续低于70%应立即下撤。',
    },
    context: {
      en: 'If mild headache prevents sleep, painkillers may be enough — once pain eases and you sleep well, altitude sickness often resolves. For mild, non-alarming headaches at night, simple analgesics can break the cycle.',
      zh: '如果只是因非剧烈的头疼难以入睡，可以吃止痛药——痛楚缓解睡好了，高反也消失了大半。',
    },
  },
  {
    id: 'oxygen',
    title: { en: 'Supplemental oxygen', zh: '补充氧气' },
    content: {
      en: 'Many people only need oxygen on Day 2 climbs. 3-5 disposable oxygen cans are sufficient.',
      zh: '不少人只需在第二天爬坡时吸氧，3-5瓶一次性氧气足够。',
    },
    context: {
      en: 'Save oxygen for uphills — on flat or downhill sections, if you feel okay, don\'t use it to avoid dependency. Portable oxygen concentrators or larger lightweight tanks can be rented from hotels in Darchen and some supply points along the trail.',
      zh: '建议平路或下坡时若感觉还可以就不吸氧，上坡时才吸，以免过度依赖。轻便氧气瓶或便携式制氧机可在塔钦宾馆及部分补给点租到。',
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

export const spo2Guide = {
  title: { en: 'SpO₂ (Pulse Oximetry) Guide', zh: '血氧饱和度（SpO₂）指南' },
  normalSeaLevel: {
    en: '≥95% at sea level (normal resting SpO₂)',
    zh: '平原地区静息状态应不低于95%',
  },
  normalAtAltitude: {
    en: '≥85% at 4,600m+ (normal for Darchen elevation)',
    zh: '在塔钦（海拔4600米以上），85%或以上都算正常',
  },
  cautionThreshold: {
    en: '<80% — monitor closely, reduce activity',
    zh: '低于80%——需密切留意身体状况',
  },
  dangerThreshold: {
    en: '<70% sustained — stop trekking, descend immediately, seek medical help',
    zh: '长时间持续低于70%——强烈建议停止转山、尽快下撤到低海拔处并求医',
  },
  disclaimer: {
    en: 'Health advice in this guide is based on the author\'s years of high-altitude experience and observation. It may not apply to everyone and does not constitute medical advice. Consult a professional doctor if in doubt.',
    zh: '本指南内所有健康建议仅基于作者多年在高原的实际体会与观察，可能不适用于所有人，不构成医疗建议，若有疑问请咨询专业医生。',
  },
};

export const otherRisks: SafetyTip[] = [
  {
    id: 'dogs',
    title: { en: 'Wild dogs', zh: '野狗' },
    content: {
      en: 'Keep your distance. Don\'t tease or feed them. They are more active at night — never walk at night.',
      zh: '保持距离，不要逗、不要喂，夜间更活跃，勿走夜路。',
    },
    context: {
      en: 'Wild dogs around Kailash are semi-feral strays, not domesticated. They generally don\'t approach people and keep their distance. Pulan County now conducts annual roundups, significantly reducing numbers. All known bite incidents occurred when people tried to pet or play with the dogs.',
      zh: '冈仁波齐周围的狗几乎都是半野生状态的流浪狗。它们一般不会主动亲近人，保持距离。近年普兰县每年派专人捕捉收容，数量大幅减少。已知的咬伤事件都是因为人去摸、去逗野狗。',
    },
  },
  {
    id: 'marmots',
    title: { en: 'Marmots (plague hosts)', zh: '旱獭（鼠疫宿主）' },
    content: {
      en: 'NEVER touch or feed marmots — they carry plague in this region. Bite victims face mandatory quarantine.',
      zh: '是鼠疫宿主，绝对不要触摸或喂食，已有被咬隔离案例。',
    },
    context: {
      en: 'Himalayan marmots around Kailash are natural plague reservoirs — their fleas transmit the disease. Multiple cases of human plague infection (including deaths) from marmot contact have occurred on the Tibetan Plateau, including in Pulan County. Social media has irresponsibly promoted "feeding marmots" as a must-do activity. In reality, marmots hibernate Oct–May, eat only grass, and are harmed by the salty/sugary snacks tourists offer.',
      zh: '冈仁波齐周边的喜马拉雅旱獭是鼠疫的自然宿主，其身上的跳蚤传播鼠疫——青藏高原及周边已有多起因接触旱獭而感染鼠疫甚至死亡的事件，包括普兰县。社交媒体不负责任地将"喂旱獭"炒作为"打卡必玩项目"。实际上旱獭10月至次年6月冬眠，是草食性动物，转山者投喂的高盐高糖零食反而危害其健康。',
    },
  },
  {
    id: 'weather-risk',
    title: { en: 'Weather & snow', zh: '天气与降雪' },
    content: {
      en: 'Snow is possible any month at the pass. In heavy snowfall, retreat immediately to the nearest supply point.',
      zh: '垭口段每月都可能下雪，遇大雪应立即下撤到最近补给点。',
    },
    context: {
      en: 'Light snow actually makes the rocky trail easier to walk on (fills gaps between rocks), but avoid shiny/reflective patches — those are ice. In blizzard conditions, visibility drops to near zero; retreat to the last supply point rather than pushing forward. The 3km descent after Dolma La is the most accident-prone area in whiteout conditions. Protect your face with a scarf — snow reflection causes severe sunburn. Wear sunglasses to prevent snow blindness.',
      zh: '薄雪反而能填平乱石路面，走起来更舒服——但不要踩雪面的反光区域，那里是冰层。大风雪时能见度极低，应立即往回撤到最近补给点，不要勉强前进。卓玛拉下行3公里是白雪中事故最多的区域。用头巾遮好脸部防止雪面反射紫外线灼伤，戴好墨镜防雪盲。',
    },
  },
  {
    id: 'dangerous-descent',
    title: { en: 'Dangerous descent', zh: '危险路段' },
    content: {
      en: 'The 3km descent after Dolma La is the most dangerous section — multiple fatalities. Iron railings have been installed.',
      zh: '卓玛拉下行3公里下坡是全程最危险处，多处事故发生于此；现已加装铁护栏。',
    },
    context: {
      en: 'According to local rescue personnel, the descent from Dolma La has the highest accident rate of any section across all years. The terrain is steep, rocky, and prone to thick snow accumulation. NEVER walk this section at night — if you reach Dolma La after dark, consider sheltering at the pass rather than descending.',
      zh: '据当地救援人员介绍，卓玛拉往下的下坡路段是历年来游客事故最多的区域。地势陡峭、乱石密布、最容易积厚雪。切勿在入夜后行走此路段——如果天黑后才到达卓玛拉，宁可在垭口附近找地方暂避也不要摸黑下行。',
    },
  },
  {
    id: 'night-hiking',
    title: { en: 'No night trekking', zh: '不要走夜路' },
    content: {
      en: 'Never continue walking after dark. Rocky trails, rapid temperature drops, and active wild dogs make night trekking extremely dangerous.',
      zh: '入夜后切勿继续行走。乱石路、气温骤降、野狗活跃，夜间转山极为危险。',
    },
    context: {
      en: 'Even with a headlamp, visibility is far worse than daytime on the rocky trails. Temperatures plummet after sunset. The clothing warmth recommendations in this guide assume you will NOT be walking at night.',
      zh: '即使有头灯，在乱石路上的视野也远不如白天。太阳下山后气温降得快。本指南提供的衣物御寒温度建议不考虑长时间走夜路的情况。',
    },
  },
  {
    id: 'medical-stations',
    title: { en: 'Medical infrastructure', zh: '医疗设施' },
    content: {
      en: '7 major supply points have medical stations (AED, oxygen generators). 30 video monitoring points with one-button alarm pillars and free WiFi nearby.',
      zh: '7个重要补给点设有医疗服务点（含AED、制氧机）；沿途30处装有视频监控与一键报警柱，附近有免密WiFi。',
    },
    context: {
      en: 'Medical stations are located at: Chuku Bridge, Matou Mingwang Station, Gangga, Small Sky Burial Platform West, Earth Nail (Budong Diding), Medicine Buddha Valley, and Zutulpuk. Each has oxygen generators, AED, and basic medicine. Emergency alarm pillars provide "Ngari Smart Tourism" and "Kailash Scenic Area" WiFi hotspots (no password) as backup when phone signal is weak.',
      zh: '医疗服务点分布在曲古桥、马头明王驿站、岗加、小天葬台西侧、不动地钉、药师佛沟、尊珠寺这7个补给点。每个配备制氧机、AED和常用药品。报警柱旁提供"阿里智慧旅游"和"冈仁波齐景区"WiFi热点（无需密码），手机信号不佳时可作应急联网之用。',
    },
  },
];

export const incidents: Incident[] = [
  {
    id: 'winter-2022',
    year: 2022,
    title: { en: '2022 Winter Fatality', zh: '2022年冬季事故' },
    description: {
      en: '5 people attempted a winter kora during closure season. Hit by a blizzard — 2 died, 3 seriously injured. Never trek during official closure (Nov–Apr).',
      zh: '5人在封山期（11月-4月）强行冬季转山，遭遇暴风雪，2人遇难3人重伤。封山期间绝对不要尝试转山。',
    },
  },
  {
    id: 'edema-2020',
    year: 2020,
    title: { en: '2020 Pulmonary Edema', zh: '2020年肺水肿事件' },
    description: {
      en: 'A girl on an "8-day Ali tour" started trekking immediately upon arrival. Developed fever/cough at 5,060m Drirapuk but returned to Darchen alone without telling anyone. Found semi-conscious the next evening — SpO₂ at 40%, mild pulmonary edema. Emergency transfer to Pulan county hospital.',
      zh: '一名参加"阿里南线8天拼车团"的女孩到达塔钦当天直接开始转山，在海拔5060米的芝热寺出现发烧咳嗽，独自叫车返回塔钦但未告知任何人。次日傍晚被同伴发现时已意识模糊，血氧只有40%左右，轻微肺水肿。紧急送普兰县医院抢救。',
    },
  },
  {
    id: 'forbidden-2024',
    year: 2024,
    title: { en: '2024 Forbidden Area Fatality', zh: '2024年禁区事故' },
    description: {
      en: 'Tourists ignored warnings and entered the forbidden "undeveloped areas" (inner kora routes). Fatalities occurred. Similar incidents in September 2025. These areas have no phone signal and no rescue infrastructure.',
      zh: '游客不顾景区警示劝告，执意进入"未开发区域"（内转路线）而出事丧生。2025年9月再次发生类似事故。这些区域无手机信号，无任何救援保障。',
    },
  },
  {
    id: 'marmot-2024',
    year: 2024,
    title: { en: '2024 Marmot Bite', zh: '2024年旱獭咬伤' },
    description: {
      en: 'A foreign tourist fed a marmot and was bitten. Forced into 9-day quarantine — marmots are plague hosts in this region.',
      zh: '一名外国游客投喂旱獭被咬伤，被迫隔离观察9天。该区域旱獭是鼠疫宿主，切勿接触。',
    },
  },
];

export const badWeatherGuide: SafetyTip[] = [
  {
    id: 'light-snow',
    title: { en: 'Light snow on the trail', zh: '薄雪路面' },
    content: {
      en: 'Light snow actually fills gaps between rocks, making the trail easier to walk. But avoid shiny/reflective patches — those are ice.',
      zh: '薄雪反而能填平乱石路面走起来更舒服——但不要踩雪面反光区域，那里是冰层，滑。',
    },
  },
  {
    id: 'snow-protection',
    title: { en: 'Snow UV protection', zh: '雪地防护' },
    content: {
      en: 'Snow-reflected UV is extremely intense. Cover your face with a scarf/buff and wear sunglasses to prevent snow blindness and severe sunburn.',
      zh: '雪面反射紫外线非常强烈。用头巾遮好脸部防止灼伤，戴好墨镜防雪盲。',
    },
  },
  {
    id: 'blizzard-retreat',
    title: { en: 'Blizzard: retreat immediately', zh: '大风雪：立即撤退' },
    content: {
      en: 'In heavy snowfall, visibility drops to near zero. Retreat to the previous supply point rather than pushing forward. If climbing toward Dolma La when heavy snow starts, turn back to the nearest supply point (Small Sky Burial Platform west side). If already past the pass, proceed carefully downhill — the 3km descent is the most accident-prone area in whiteout conditions.',
      zh: '大风雪时能见度极低，应立即往回撤到最近补给点。爬卓玛拉途中遇到持续大雪应立即往回走到小天葬台西侧补给点。如果已过垭口则小心下行——卓玛拉下行3公里在白雪中事故最多。',
    },
  },
  {
    id: 'management-closure',
    title: { en: 'Temporary closure', zh: '临时封山' },
    content: {
      en: 'If snowfall is heavy or accumulation too deep, local management will temporarily close the trail — all trekkers must stop and wait. Do not attempt to bypass closures.',
      zh: '遇持续大雪或垭口积雪过深，管理部门会暂时"封山"禁止所有人进入，必须等待开放。',
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
