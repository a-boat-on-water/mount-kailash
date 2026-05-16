export interface Waypoint {
  id: string;
  name: { en: string; zh: string };
  description: { en: string; zh: string };
  coordinate: [number, number]; // [longitude, latitude]
  elevation: number;
  type:
    | 'monastery'
    | 'pass'
    | 'campsite'
    | 'viewpoint'
    | 'sacred'
    | 'village'
    | 'lake'
    | 'landmark'
    | 'supply'
    | 'medical';
  distanceFromStart: number; // km
  stage: 1 | 2 | 3;
  segment?: string; // e.g. "I-1", "II-3"
}

export interface RouteSegment {
  id: string;
  stage: 1 | 2 | 3;
  from: { en: string; zh: string };
  to: { en: string; zh: string };
  distance: number; // km
  elevationChange: number; // meters (positive = up, negative = down)
  terrain: { en: string; zh: string };
  duration: string; // raw Chinese duration
  durationMin: number | null;
}

export const routeSegments: RouteSegment[] = [
  {
    id: 'I-1',
    stage: 1,
    from: { en: 'Darchen', zh: '塔钦' },
    to: { en: 'First Prostration Point', zh: '第一朝拜处' },
    distance: 3.8,
    elevationChange: 100,
    terrain: { en: 'Gentle continuous uphill', zh: '较缓的持续上坡' },
    duration: '1小时',
    durationMin: 60,
  },
  {
    id: 'I-2',
    stage: 1,
    from: { en: 'First Prostration Point', zh: '第一朝拜处' },
    to: { en: 'Sershung', zh: '色雄' },
    distance: 2.3,
    elevationChange: -50,
    terrain: { en: 'Mostly downhill & flat', zh: '下坡及平路为主' },
    duration: '30分钟',
    durationMin: 30,
  },
  {
    id: 'I-3',
    stage: 1,
    from: { en: 'Sershung', zh: '色雄' },
    to: { en: 'Chuku Bridge Supply', zh: '曲古桥补给点' },
    distance: 2.4,
    elevationChange: 10,
    terrain: { en: 'Mostly flat', zh: '平路为主' },
    duration: '40分钟',
    durationMin: 40,
  },
  {
    id: 'I-4',
    stage: 1,
    from: { en: 'Chuku Bridge Supply', zh: '曲古桥补给点' },
    to: { en: 'Second Prostration Point', zh: '第二朝拜处' },
    distance: 5.5,
    elevationChange: 120,
    terrain: { en: 'Gradual climb with undulations', zh: '逐渐上升有多段起伏' },
    duration: '100分钟',
    durationMin: 100,
  },
  {
    id: 'I-5',
    stage: 1,
    from: { en: 'Second Prostration Point', zh: '第二朝拜处' },
    to: { en: 'Hayagriva Station', zh: '马头明王驿站' },
    distance: 1.5,
    elevationChange: 30,
    terrain: { en: 'Slight uphill with undulations', zh: '轻微上升有起伏' },
    duration: '30分钟',
    durationMin: 30,
  },
  {
    id: 'I-6',
    stage: 1,
    from: { en: 'Hayagriva Station', zh: '马头明王驿站' },
    to: { en: 'Kangka / Drirapuk', zh: '岗加/芝热寺' },
    distance: 4.7,
    elevationChange: 190,
    terrain: { en: 'Gradual climb with slight undulations', zh: '逐渐上升略有起伏' },
    duration: '1.5小时',
    durationMin: 90,
  },
  {
    id: 'II-1',
    stage: 2,
    from: { en: 'Kangka / Drirapuk', zh: '岗加/芝热寺' },
    to: { en: 'Sky Burial W. Supply', zh: '小天葬台西侧补给点' },
    distance: 2.4,
    elevationChange: 230,
    terrain: { en: 'Steep + moderate slopes', zh: '陡坡+缓坡' },
    duration: '80分钟',
    durationMin: 80,
  },
  {
    id: 'II-2',
    stage: 2,
    from: { en: 'Sky Burial W. Supply', zh: '小天葬台西侧补给点' },
    to: { en: 'Dolma La base', zh: '开始爬卓玛拉处' },
    distance: 2.5,
    elevationChange: 190,
    terrain: { en: 'Moderate slope, short steep section, then gentle', zh: '缓坡接小段陡坡后大段缓坡' },
    duration: '1.5小时',
    durationMin: 90,
  },
  {
    id: 'II-3',
    stage: 2,
    from: { en: 'Dolma La base', zh: '开始爬卓玛拉处' },
    to: { en: 'Dolma La Pass', zh: '卓玛拉垭口' },
    distance: 1.4,
    elevationChange: 170,
    terrain: { en: 'Steep then moderate', zh: '先陡坡后缓坡' },
    duration: '1.5小时',
    durationMin: 90,
  },
  {
    id: 'II-4',
    stage: 2,
    from: { en: 'Dolma La Pass', zh: '卓玛拉垭口' },
    to: { en: 'Akshobhya Supply', zh: '不动地钉补给点' },
    distance: 3.0,
    elevationChange: -410,
    terrain: { en: 'Steep & moderate downhill — be careful', zh: '下山陡坡及缓坡 注意安全' },
    duration: '1.5小时',
    durationMin: 90,
  },
  {
    id: 'II-5',
    stage: 2,
    from: { en: 'Akshobhya Supply', zh: '不动地钉补给点' },
    to: { en: 'Medicine Buddha Valley', zh: '药师佛沟补给点' },
    distance: 5.7,
    elevationChange: -270,
    terrain: { en: 'Gradual descent with undulations', zh: '整体缓慢下坡有多段起伏' },
    duration: '100分钟',
    durationMin: 100,
  },
  {
    id: 'II-6',
    stage: 2,
    from: { en: 'Medicine Buddha Valley', zh: '药师佛沟补给点' },
    to: { en: 'Zutul Puk Monastery', zh: '尊珠寺' },
    distance: 4.6,
    elevationChange: -160,
    terrain: { en: 'Gradual descent with undulations', zh: '整体缓慢下坡有多段起伏' },
    duration: '80分钟',
    durationMin: 80,
  },
  {
    id: 'III-1',
    stage: 3,
    from: { en: 'Zutul Puk Monastery', zh: '尊珠寺' },
    to: { en: 'Dzongdui Supply', zh: '宗堆补给点' },
    distance: 6.7,
    elevationChange: -130,
    terrain: { en: 'Gradual descent with undulations', zh: '整体缓慢下降有多段起伏' },
    duration: '2小时',
    durationMin: 120,
  },
  {
    id: 'III-2',
    stage: 3,
    from: { en: 'Dzongdui Supply', zh: '宗堆补给点' },
    to: { en: 'Darchen', zh: '塔钦' },
    distance: 3.9,
    elevationChange: 10,
    terrain: { en: 'Down then up with small undulations', zh: '先降后升有多段小起伏' },
    duration: '1小时',
    durationMin: 60,
  },
];

export const waypoints: Waypoint[] = [
  // ===== STAGE 1: Darchen → Drirapuk (D1, ~20km) =====
  {
    id: 'darchen',
    name: { en: 'Darchen', zh: '塔钦' },
    description: {
      en: 'Starting point of the kora. A small town at the southern base of Mount Kailash with guesthouses, restaurants and supplies.',
      zh: '转山起点。冈仁波齐南麓小镇，有住宿、餐馆和补给。',
    },
    coordinate: [81.2856, 30.9978],
    elevation: 4690,
    type: 'village',
    distanceFromStart: 0,
    stage: 1,
    segment: 'I-1',
  },
  {
    id: 'first-prostration',
    name: { en: 'First Prostration Point', zh: '第一朝拜处（恰采岗）' },
    description: {
      en: 'First of four prostration points along the kora. Kailash appears to the northeast for the first time. Pilgrims prostrate toward the sacred peak here. 4870m.',
      zh: '转山四个朝拜处中的第一个。冈仁波齐首次出现在东北方。朝圣者在此向神山跪拜。海拔4870米。',
    },
    coordinate: [81.274, 31.008],
    elevation: 4870,
    type: 'sacred',
    distanceFromStart: 3.8,
    stage: 1,
    segment: 'I-2',
  },
  {
    id: 'sershung',
    name: { en: 'Sershung (Golden Basin)', zh: '色雄（金盆）' },
    description: {
      en: 'Major supply and lodging cluster at 5020m. Named after a legend where a merchant left a basin of gold here after realizing merit cannot be bought. Good views of Kailash.',
      zh: '海拔5020米的补给和住宿集散地。传说大商人罗布桑布在此留下一盆黄金后悟到功德不可买卖。可观冈仁波齐。',
    },
    coordinate: [81.268, 31.018],
    elevation: 5020,
    type: 'landmark',
    distanceFromStart: 6.1,
    stage: 1,
    segment: 'I-3',
  },
  {
    id: 'sky-burial-big',
    name: { en: 'Big Sky Burial Platform', zh: '大天葬台（五百罗汉天葬台）' },
    description: {
      en: 'Major sky-burial site of the Gelug tradition, also known as the "500 Arhats" platform. A sacred place of transformation at 4820m.',
      zh: '格鲁派重要天葬台，又称"五百罗汉天葬台"。海拔4820米的神圣转化之地。',
    },
    coordinate: [81.266, 31.019],
    elevation: 4820,
    type: 'sacred',
    distanceFromStart: 6.3,
    stage: 1,
  },
  {
    id: 'two-legged-stupa',
    name: { en: 'Two-Legged Stupa', zh: '双腿佛塔' },
    description: {
      en: 'Sacred stupa pilgrims pass through for purification. Known as Yama Dwar (Gate of Death) in Hindu tradition — passage symbolizes death and rebirth.',
      zh: '朝圣者从中穿过以净化罪业的佛塔。印度教称"阎魔之门"——穿过象征死亡与重生。',
    },
    coordinate: [81.264, 31.022],
    elevation: 4760,
    type: 'sacred',
    distanceFromStart: 6.7,
    stage: 1,
  },
  {
    id: 'tarboche',
    name: { en: 'Tarboche Flagpole', zh: '塔博切经幡柱（大经幡杆）' },
    description: {
      en: 'Giant prayer flagpole marking the Saga Dawa festival site. The pole is replaced annually. Major gathering point for pilgrims.',
      zh: '巨大的经幡柱，萨嘎达瓦节主会场。每年更换旗杆。朝圣者重要集聚点。',
    },
    coordinate: [81.265, 31.021],
    elevation: 4750,
    type: 'landmark',
    distanceFromStart: 6.5,
    stage: 1,
  },
  {
    id: 'chuku-bridge-supply',
    name: { en: 'Chuku Bridge Supply Point', zh: '曲古桥补给点' },
    description: {
      en: 'Supply station with food and hot water at the foot of Chuku Monastery. Medical aid station nearby. 4830m.',
      zh: '曲古寺山下的补给站，有食物和热水。旁边设有医疗服务点。海拔4830米。',
    },
    coordinate: [81.258, 31.035],
    elevation: 4830,
    type: 'supply',
    distanceFromStart: 8.5,
    stage: 1,
    segment: 'I-4',
  },
  {
    id: 'chuku',
    name: { en: 'Chuku Monastery', zh: '曲古寺' },
    description: {
      en: 'Ancient monastery on the western hillside. Houses a sacred white marble Amitabha statue. Views of the west face of Kailash.',
      zh: '位于西侧山坡的古老寺院。供奉珍贵的白色大理石阿弥陀佛像。可望冈仁波齐西壁。',
    },
    coordinate: [81.262, 31.045],
    elevation: 4870,
    type: 'monastery',
    distanceFromStart: 9,
    stage: 1,
  },
  {
    id: 'second-prostration',
    name: { en: 'Second Prostration Point', zh: '第二朝拜处（恰采岗）' },
    description: {
      en: 'Second prostration point on the western approach. Kailash\'s dramatic west face is visible. Medical aid post here. ~4900m.',
      zh: '西侧进山路上的第二个朝拜处。可望冈仁波齐壮丽的西壁。设有医疗服务点。约4900米。',
    },
    coordinate: [81.265, 31.055],
    elevation: 4900,
    type: 'sacred',
    distanceFromStart: 14,
    stage: 1,
    segment: 'I-5',
  },
  {
    id: 'hayagriva-station',
    name: { en: 'Hayagriva Station', zh: '马头明王驿站（旦真仲康）' },
    description: {
      en: 'Rest station named after Hayagriva (Horse-headed Wisdom King). Supply point with food, hot water and medical aid. ~4900m.',
      zh: '以马头明王命名的驿站。补给点，有食物、热水和医疗服务。约4900米。',
    },
    coordinate: [81.272, 31.062],
    elevation: 4900,
    type: 'supply',
    distanceFromStart: 15.5,
    stage: 1,
    segment: 'I-6',
  },
  {
    id: 'kangka',
    name: { en: 'Kangka Guesthouse', zh: '岗加香客宾馆' },
    description: {
      en: 'Largest accommodation along the kora with 50+ rooms. Located below Drirapuk Monastery. Main overnight stop for Day 1. 5060m.',
      zh: '转山全程最大的住宿点，50多间房。位于止热寺下方。第一天主要住宿地。海拔5060米。',
    },
    coordinate: [81.295, 31.078],
    elevation: 5060,
    type: 'campsite',
    distanceFromStart: 20,
    stage: 1,
    segment: 'II-1',
  },
  {
    id: 'drirapuk',
    name: { en: 'Drirapuk Monastery', zh: '止热寺' },
    description: {
      en: 'Monastery at the foot of Kailash\'s dramatic north face. Spectacular close-up views of the mountain. Adjacent to Kangka guesthouse area.',
      zh: '位于冈仁波齐壮丽北壁脚下的寺院。可近距离观赏神山。与岗加住宿区相邻。',
    },
    coordinate: [81.305, 31.085],
    elevation: 5085,
    type: 'monastery',
    distanceFromStart: 20.2,
    stage: 1,
  },

  // ===== STAGE 2: Drirapuk → Zutul Puk (D2, ~20km) =====
  {
    id: 'sky-burial-west-supply',
    name: { en: 'Sky Burial W. Supply Point', zh: '小天葬台西侧补给点' },
    description: {
      en: 'Supply point west of the sky burial site. Food, hot water, medical aid. Last major resupply before Dolma La. ~5290m.',
      zh: '天葬台西侧的补给点。有食物、热水、医疗服务。翻越卓玛拉前最后的主要补给。约5290米。',
    },
    coordinate: [81.315, 31.088],
    elevation: 5290,
    type: 'supply',
    distanceFromStart: 22.4,
    stage: 2,
    segment: 'II-2',
  },
  {
    id: 'sky-burial',
    name: { en: 'Sky Burial Site', zh: '天葬台' },
    description: {
      en: 'Sacred sky burial ground. Pilgrims symbolically leave behind their old life — clothing or hair as offerings. A place of transformation.',
      zh: '神圣的天葬场。朝圣者在此象征性地告别旧生活，留下衣物或头发作为供奉。象征转变重生之地。',
    },
    coordinate: [81.318, 31.089],
    elevation: 5330,
    type: 'sacred',
    distanceFromStart: 22.8,
    stage: 2,
  },
  {
    id: 'shiva-tshal',
    name: { en: 'Shiva-tshal (Death Ground)', zh: '希瓦察（死亡之地）' },
    description: {
      en: 'Sacred death ground before the final ascent. Pilgrims perform prostrations and leave offerings. Symbolizes shedding of the old self.',
      zh: '卓玛拉山口前的圣地"死亡之地"。朝圣者在此磕头留供品。象征旧我的消亡。',
    },
    coordinate: [81.325, 31.09],
    elevation: 5400,
    type: 'sacred',
    distanceFromStart: 24,
    stage: 2,
  },
  {
    id: 'polonggu-supply',
    name: { en: 'Polong-gu Supply Point', zh: '坡龙古补给点' },
    description: {
      en: 'Supply point near the Third Prostration Point on the steep approach section. Food and hot water. ~5150m.',
      zh: '位于第三朝拜处附近的补给点，陡坡路段。有食物和热水。约5150米。',
    },
    coordinate: [81.326, 31.089],
    elevation: 5150,
    type: 'supply',
    distanceFromStart: 24.2,
    stage: 2,
  },
  {
    id: 'dolma-la-base',
    name: { en: 'Dolma La Ascent Start', zh: '开始爬卓玛拉处' },
    description: {
      en: 'The steep final climb to Dolma La begins here. 1.4km to the pass, ~170m elevation gain. Take it slow. ~5480m.',
      zh: '从此开始最后的陡坡攀爬。距山口1.4公里，爬升约170米。慢慢走。约5480米。',
    },
    coordinate: [81.335, 31.087],
    elevation: 5480,
    type: 'landmark',
    distanceFromStart: 26.5,
    stage: 2,
    segment: 'II-3',
  },
  {
    id: 'dolma-la',
    name: { en: 'Dolma La Pass', zh: '卓玛拉山口（垭口）' },
    description: {
      en: 'Highest point of the kora at 5650m! Adorned with prayer flags. Dedicated to Tara (Dolma). Crossing symbolizes death and rebirth. ⚠️ Go slow, watch for altitude sickness.',
      zh: '转山最高点！海拔5650米。挂满经幡，献给度母（卓玛）。翻越象征死亡与重生。⚠️ 慢行，注意高反。',
    },
    coordinate: [81.35, 31.08],
    elevation: 5650,
    type: 'pass',
    distanceFromStart: 28,
    stage: 2,
    segment: 'II-4',
  },
  {
    id: 'gauri-kund',
    name: { en: 'Gauri Kund (Tukje Tso)', zh: '托吉错（慈悲湖）' },
    description: {
      en: 'Sacred emerald-green lake just below Dolma La. Holy bathing site for Hindu pilgrims; said to be where Parvati bathed.',
      zh: '卓玛拉东侧的翠绿色圣湖。印度教朝圣者的圣浴地，传说帕尔瓦蒂在此沐浴。',
    },
    coordinate: [81.355, 31.075],
    elevation: 5560,
    type: 'lake',
    distanceFromStart: 29,
    stage: 2,
  },
  {
    id: 'akshobhya-supply',
    name: { en: 'Akshobhya Supply Point', zh: '不动地钉补给点' },
    description: {
      en: 'First supply point after Dolma La. Food, hot water, medical aid. Rest and recover here. ~5240m.',
      zh: '翻完卓玛拉后第一个补给点。有食物、热水、医疗服务。在此休息恢复。约5240米。',
    },
    coordinate: [81.362, 31.065],
    elevation: 5240,
    type: 'supply',
    distanceFromStart: 31,
    stage: 2,
    segment: 'II-5',
  },
  {
    id: 'medicine-buddha-supply',
    name: { en: 'Medicine Buddha Valley Supply', zh: '药师佛沟补给点（桑杰缅砻）' },
    description: {
      en: 'Supply point in the Medicine Buddha Valley. Food, hot water, medical aid. Named after the healing Buddha. ~4970m.',
      zh: '药师佛沟中的补给点。有食物、热水、医疗服务。以药师佛命名。约4970米。',
    },
    coordinate: [81.358, 31.048],
    elevation: 4970,
    type: 'supply',
    distanceFromStart: 36.7,
    stage: 2,
    segment: 'II-6',
  },
  {
    id: 'zutul-puk',
    name: { en: 'Zutul Puk Monastery', zh: '尊珠寺' },
    description: {
      en: 'Cave monastery where Milarepa meditated. Main overnight stop for Day 2. Contains the miraculous cave ceiling shaped by Milarepa\'s power.',
      zh: '米拉日巴尊者修行的洞穴寺院。第二天主要住宿点。内有米拉日巴以神通塑造的洞顶。',
    },
    coordinate: [81.35, 31.035],
    elevation: 4910,
    type: 'monastery',
    distanceFromStart: 41.3,
    stage: 2,
    segment: 'III-1',
  },

  // ===== STAGE 3: Zutul Puk → Darchen (D3, ~10.6km) =====
  {
    id: 'third-prostration',
    name: { en: 'Third Prostration Point', zh: '第三朝拜处（坡龙古）' },
    description: {
      en: 'Third prostration point at Polong-gu, near the steep section before Dolma La. Elevation 5150m. Pilgrims prostrate here.',
      zh: '第三个朝拜处，位于坡龙古补给点附近，卓玛拉前陡坡段。海拔5150米。朝圣者在此跪拜。',
    },
    coordinate: [81.328, 31.088],
    elevation: 5150,
    type: 'sacred',
    distanceFromStart: 24.5,
    stage: 2,
  },
  {
    id: 'govt-teahouse-supply',
    name: { en: 'Government Teahouse Supply', zh: '政府茶馆补给点' },
    description: {
      en: 'Supply point along the eastern valley descent. Food and hot water available. 4825m.',
      zh: '东侧山谷下坡路上的补给点。有食物和热水。海拔4825米。',
    },
    coordinate: [81.345, 31.04],
    elevation: 4825,
    type: 'supply',
    distanceFromStart: 42.5,
    stage: 3,
  },
  {
    id: 'fourth-prostration',
    name: { en: 'Fourth Prostration Point', zh: '第四朝拜处（恰采岗）' },
    description: {
      en: 'Fourth and final prostration point. Southeast of Kailash. Marks the spiritual completion of the inner journey.',
      zh: '第四个也是最后一个朝拜处。位于冈仁波齐东南面。标志着内在旅程的精神圆满。',
    },
    coordinate: [81.32, 31.015],
    elevation: 4700,
    type: 'sacred',
    distanceFromStart: 45,
    stage: 3,
  },
  {
    id: 'dzongdui-supply',
    name: { en: 'Dzongdui Supply Point', zh: '宗堆补给点' },
    description: {
      en: 'Last supply point before Darchen. Food and hot water. ~4km from Darchen. Shuttle bus available back to town.',
      zh: '回塔钦前最后一个补给点。有食物和热水。距塔钦约4公里。可搭接驳车回镇上。',
    },
    coordinate: [81.30, 31.005],
    elevation: 4830,
    type: 'supply',
    distanceFromStart: 48.1,
    stage: 3,
    segment: 'III-2',
  },
  {
    id: 'darchen-return',
    name: { en: 'Darchen (Kora Complete!)', zh: '塔钦（转山圆满！）' },
    description: {
      en: 'Completion of the 52km kora! One circumambulation erases a lifetime of sins. 108 koras lead to enlightenment.',
      zh: '52公里转山圆满完成！一次转山可消除一生罪业。转满108圈可得解脱。',
    },
    coordinate: [81.2856, 30.9978],
    elevation: 4690,
    type: 'village',
    distanceFromStart: 52,
    stage: 3,
  },
];
