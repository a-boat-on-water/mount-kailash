export interface StageLandmark {
  id: string;
  name: { en: string; zh: string };
  description: { en: string; zh: string };
  elevation?: number;
  type: 'sacred' | 'supply' | 'accommodation' | 'landmark';
}

export interface Stage {
  id: number;
  title: { en: string; zh: string };
  distance: string;
  duration: string;
  elevationGain: string;
  startElevation: number;
  endElevation: number;
  highPoint?: number;
  timingTip: { en: string; zh: string };
  landmarks: StageLandmark[];
  safetyAlert?: { en: string; zh: string };
}

export interface ItineraryOverview {
  totalDistance: { en: string; zh: string };
  philosophy: { en: string; zh: string };
  context?: { en: string; zh: string };
  deepDive?: { en: string; zh: string };
  supplyOverview: { en: string; zh: string };
}

export const itineraryOverview: ItineraryOverview = {
  totalDistance: {
    en: '~50 km (49.7 km or 50.4 km depending on Day 1 accommodation choice)',
    zh: '约50公里（因第一天住宿点选择不同，全程49.7公里或50.4公里）',
  },
  philosophy: {
    en: 'This is a pilgrimage, not a trail race. The author strongly recommends 3 stages over 2.5 days for normal fitness levels. Most "2-day speed guides" online are written from a sports/challenge perspective — they leave people exhausted, unable to appreciate the sacred sites, and arriving after dark.',
    zh: '转山就是转经，不是高原山地越野赛。作者明确建议普通体能者分3阶段、两天半完成。网上多数"两天走法"从户外运动角度出发，导致很多人疲惫不堪、无暇顾及沿途圣迹、甚至入夜后才能回到塔钦。',
  },
  context: {
    en: 'Many Chinese guides promote 2-day or even 1-day completions as badges of honor. But even many Tibetan pilgrims take 2-3 days — especially older ones or those from lower altitudes. Young Tibetans who finish in one day start at 4 AM, travel light, and are fully acclimatized. "8-day Ali tour" groups often allow less than 1.5 days, forcing pilgrims to start immediately upon arrival — extremely dangerous.',
    zh: '不少中文攻略将两天甚至一天转完视为"壮举"。但分两三天的藏族人也很多，尤其是年长者或来自低海拔藏区的。一天转完的年轻藏族人凌晨4点出发、轻装、完全适应高海拔。"阿里南线8天拼车团"经常只留不到1天半的转山时间，游客到塔钦后不能休息就得出发，极其危险。',
  },
  deepDive: {
    en: 'The route was pioneered by Kagyu master Gotsangpa over 800 years ago. The officially measured distance is 49 km (no monastery detours). Various online sources cite 54-57 km, but these have significant positive error. The author\'s GPS measurements from dozens of koras, combined with Google Earth, yield 49.7-50.4 km. The guide divides the route into 14 sub-segments with terrain descriptions and realistic timing, rather than just point-to-point distances.',
    zh: '转山路由噶举派大师郭仓巴800多年前开创。景区公司测量的不进寺庙全程约49公里。网上流传的54-57公里数据出处不明，正误差较大。作者根据数十次全程GPS轨迹结合Google Earth综合测算，全程49.7-50.4公里。本指南将全程细分为14个小阶段，着重说明路况及实际需时，比单看距离更具参考意义。',
  },
  supplyOverview: {
    en: '11 fixed supply points + 5 temporary points (2026). Max 7 km between points. All connected to the national power grid (since 2024), mobile signal, WeChat Pay accepted. Major points offer rice dishes, noodles, butter tea. Two main overnight stops (Gangga/Drirapuk and Zutulpuk) have proper guesthouses. NO showers anywhere on the trail.',
    zh: '11个固定补给点 + 5个临时点（2026年）。相邻最远约7公里。全部已接入国家电网（2024年起），有手机信号，支持微信支付。主要补给点提供盖饭、面条、酥油茶。岗加/芝热寺和尊珠寺有条件较好的大型宾馆。所有住宿点均无洗澡条件。',
  },
};

export const stages: Stage[] = [
  {
    id: 1,
    title: { en: 'Darchen → Drirapuk', zh: '塔钦 → 岗加/芝热寺' },
    distance: '20 km',
    duration: '7-8h',
    elevationGain: '+400m',
    startElevation: 4690,
    endElevation: 5085,
    timingTip: {
      en: 'No need to start early — finish breakfast and depart by 10 AM.',
      zh: '不必清早出发，吃完早餐10点前启程即可。',
    },
    landmarks: [
      {
        id: 'first-prostration',
        name: { en: 'First Prostration Point', zh: '第一朝拜处' },
        description: {
          en: 'Southwest of Darchen. Legend says Master Gotsangpa first saw the sacred mountain here.',
          zh: '位于西南方向，相传郭仓巴大师在此首次拜见神山。',
        },
        type: 'sacred',
      },
      {
        id: 'tarboche',
        name: { en: 'Tarboche (Grand Prayer Flag Pole)', zh: '大经幡杆（达波切）' },
        description: {
          en: 'Erected in the 17th century by the Ganden Phodrang government to commemorate victory over Ladakh. The Saga Dawa festival (15th day of 4th Tibetan month) features the annual re-raising ceremony — the most important Buddhist event around Kailash.',
          zh: '17世纪甘丹颇章政权为纪念战胜拉达克所立。藏历四月十五（萨嘎达瓦节）举行重立大经幡仪式，是冈仁波齐周边最隆重的佛事。',
        },
        type: 'sacred',
      },
      {
        id: 'sky-burial-500',
        name: { en: 'Sky Burial Ground of 500 Arhats', zh: '五百罗汉天葬台' },
        description: {
          en: 'Legend says Shakyamuni led 500 arhats here and left the first "immovable earth nail" footprint.',
          zh: '传释迦牟尼率五百罗汉降临，踩下第一个"不动地钉"。',
        },
        type: 'sacred',
      },
      {
        id: 'chuku-monastery',
        name: { en: 'Chuku Monastery', zh: '曲古寺' },
        description: {
          en: 'The first monastery on the kora trail.',
          zh: '转山路第一座寺庙。',
        },
        type: 'sacred',
      },
      {
        id: 'second-prostration',
        name: { en: 'Second Prostration Point', zh: '第二朝拜处' },
        description: {
          en: 'From here you can see the Gesar King\'s horse saddle stone (Karma Saddle).',
          zh: '可见格萨尔王马鞍石（业之马鞍）。',
        },
        type: 'sacred',
      },
      {
        id: 'hayagriva-station',
        name: { en: 'Hayagriva Station (3rd Supply Point)', zh: '马头明王驿站（第三补给点）' },
        description: {
          en: 'Third supply point on the trail. Has a medical service station.',
          zh: '第三补给点，有医疗服务点。',
        },
        type: 'supply',
      },
      {
        id: 'drirapuk-monastery',
        name: { en: 'Drirapuk Monastery', zh: '芝热寺' },
        description: {
          en: '"Female Yak Horn Monastery", founded by Master Gotsangpa. Directly faces the north face of Kailash — the best viewpoint for photographing the sacred mountain.',
          zh: '"母牦牛角寺"，由郭仓巴大师开创；正对冈仁波齐北壁，是观赏拍摄神山的绝佳位置。',
        },
        type: 'sacred',
      },
      {
        id: 'gangga-vs-drirapuk',
        name: { en: 'Gangga vs Drirapuk Accommodation', zh: '岗加 vs 芝热寺住宿' },
        description: {
          en: '800m apart across the Lha Chu river. Gangga Guesthouse has the best facilities but the mountain is too close and blocked. Drirapuk has the best north face view. Ask your group which one before departure.',
          zh: '两处隔拉曲河约800米。岗加宾馆条件最好但离神山太近遮挡严重；芝热寺看北壁视野最佳。团队出发前务必问清具体住宿点。',
        },
        type: 'accommodation',
      },
    ],
  },
  {
    id: 2,
    title: { en: 'Drirapuk → Zutul Puk', zh: '岗加/芝热寺 → 尊珠寺' },
    distance: '20 km',
    duration: '10-11h',
    elevationGain: '+565m / -740m',
    startElevation: 5085,
    endElevation: 4810,
    highPoint: 5650,
    timingTip: {
      en: 'Option A: Start before dawn to see the golden sunrise on the NE face. Option B: Start after dawn to first see the golden light on the north face.',
      zh: '可选日出前出发（看冈仁波齐东北侧日照金山），或日出后出发（先看北壁日照金山）。',
    },
    safetyAlert: {
      en: 'DANGER: The 3km steep descent after Dolma La is the most dangerous section of the entire kora. Multiple fatalities have occurred here. Do NOT continue past the "Immovable Earth Nail" supply point after 6:30 PM — stay overnight instead.',
      zh: '警告：卓玛拉下行3公里下坡是全程最危险处，多处事故发生于此。下午6:30后到不动地钉建议过夜，勿赶夜路。',
    },
    landmarks: [
      {
        id: 'sky-burial-small',
        name: { en: 'Sipachak Sky Burial Ground', zh: '斯巴恰天葬台（小天葬台）' },
        description: {
          en: 'Tibetan devotees regard this as a place to experience the cycle of life and death.',
          zh: '藏地信众视为生死轮回的体验地。',
        },
        type: 'sacred',
      },
      {
        id: 'karma-tests',
        name: { en: 'Karma Testing Sites', zh: '业力检验圣迹' },
        description: {
          en: 'Mirror of Karma, Three-Layer Strength Testing Stone, Good-Evil Testing Crevice — multiple sites where pilgrims test their karma.',
          zh: '业之镜、三层斗力石、善恶检验石缝等多个"检验业力"的圣迹。',
        },
        type: 'sacred',
      },
      {
        id: 'dolma-la',
        name: { en: 'Dolma La Pass (5,650m)', zh: '卓玛拉垭口（5650米）' },
        description: {
          en: 'The highest point of the entire kora. Covered in prayer flags.',
          zh: '全程最高点，挂满经幡。',
        },
        elevation: 5650,
        type: 'landmark',
      },
      {
        id: 'gauri-kund',
        name: { en: 'Gauri Kund (Lake of Compassion)', zh: '空行母沐浴池（慈悲湖）' },
        description: {
          en: 'A sacred lake near the pass.',
          zh: '垭口附近的圣湖。',
        },
        type: 'sacred',
      },
      {
        id: 'earth-nail-ne',
        name: { en: 'NE Buddha Footprint (Immovable Earth Nail)', zh: '东北佛祖脚印（不动地钉）' },
        description: {
          en: 'Reached after descending the pass into the valley. The 3km descent to here is the most dangerous section — iron railings have been installed.',
          zh: '翻完垭口到达河谷。下垭口的3公里陡坡是全程最危险路段，现已加装铁护栏。',
        },
        type: 'supply',
      },
      {
        id: 'third-prostration',
        name: { en: 'Third Prostration Point', zh: '第三朝拜处' },
        description: {
          en: 'The only place after crossing the pass where you can see Kailash again.',
          zh: '唯一翻越垭口后可再见神山的位置。',
        },
        elevation: 5150,
        type: 'sacred',
      },
      {
        id: 'medicine-valley',
        name: { en: 'Medicine Buddha Valley & Sacred Sites', zh: '药师佛沟、八大佛塔、噶玛巴黑帽宝冠印记' },
        description: {
          en: 'A series of sacred sites along the trail including Medicine Buddha Valley, Eight Great Stupas, and the Karmapa Black Hat Crown imprint.',
          zh: '沿途圣迹包括药师佛沟、八大佛塔、噶玛巴黑帽宝冠印记等。',
        },
        type: 'sacred',
      },
      {
        id: 'zutul-puk',
        name: { en: 'Zutul Puk Monastery', zh: '尊珠寺' },
        description: {
          en: 'Tonight\'s accommodation. At 4,810m elevation, sleep quality is better here.',
          zh: '当晚住宿点。海拔4810米，可睡得较好。',
        },
        elevation: 4810,
        type: 'accommodation',
      },
    ],
  },
  {
    id: 3,
    title: { en: 'Zutul Puk → Darchen', zh: '尊珠寺 → 塔钦' },
    distance: '10.6 km',
    duration: '3.5-4h',
    elevationGain: '-120m',
    startElevation: 4810,
    endElevation: 4690,
    timingTip: {
      en: 'Sleep well, then depart — you can be back in Darchen before noon.',
      zh: '睡饱后出发，午前就能回到塔钦。',
    },
    landmarks: [
      {
        id: 'zutul-puk-monastery',
        name: { en: 'Zutul Puk (Miracle Cave Monastery)', zh: '尊珠寺（神通洞寺）' },
        description: {
          en: 'Stone hut built during the contest of magic between Milarepa and Naro Bonchung. Inside: Milarepa\'s head, hand, and footprints on the ceiling. The courtyard houses relocated sacred stones including the "Kham woman\'s arm print" and "mad yogi Drukpa Kunley\'s phallus print".',
          zh: '米拉日巴与那若本琼斗法所建石屋遗迹；洞顶有米拉日巴头印、手印、脚印；院内藏有"康巴妇人手臂印""疯狂瑜伽士竹巴衮列阳具印""猎狗脚印"等迁移保护的石头。',
        },
        type: 'sacred',
      },
      {
        id: 'dakini-dance',
        name: { en: 'Dakini Dance Ground & Hunter Footprint', zh: '空行母舞场、猎人贡布多吉脚印' },
        description: {
          en: 'Sacred sites from the tales in "The Hundred Thousand Songs of Milarepa".',
          zh: '《米拉日巴道歌》典故圣迹。',
        },
        type: 'sacred',
      },
      {
        id: 'red-cliffs',
        name: { en: 'Yellow-Red Dangerous Path', zh: '黄红色险路' },
        description: {
          en: 'Legend says King Gesar slew a demon yak here, its blood staining the earth red.',
          zh: '相传格萨尔王在此斩魔野牦牛，牛血染红泥土。',
        },
        type: 'landmark',
      },
      {
        id: 'fourth-prostration',
        name: { en: 'Fourth Prostration Point', zh: '第四朝拜处' },
        description: {
          en: 'The last prostration point on the kora — and the only one where you cannot see Mount Kailash.',
          zh: '转山路最后、唯一看不到神山的朝拜处，位于东南方向。',
        },
        type: 'sacred',
      },
      {
        id: 'rakshasi-breasts',
        name: { en: 'Rakshasi Twin Peaks & Tarchen Ruins', zh: '罗刹女双乳、塔钦拉章废墟' },
        description: {
          en: 'The final landmarks before returning to Darchen.',
          zh: '临近塔钦的最后地标。',
        },
        type: 'landmark',
      },
    ],
  },
];
