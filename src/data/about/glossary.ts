export interface GlossaryEntry {
  id: string;
  term: { en: string; zh: string };
  meaning: { en: string; zh: string };
}

export const glossaryEntries: GlossaryEntry[] = [
  {
    id: 'kora',
    term: { en: 'Kora', zh: '转山 / 转经' },
    meaning: {
      en: 'Circumambulation — walking clockwise around a sacred mountain, temple, or stupa. A core practice of Tibetan Buddhist pilgrimage.',
      zh: '围绕神山、寺庙、佛塔等圣地顺时针绕行一圈，是藏传佛教重要的修行与朝圣方式。',
    },
  },
  {
    id: 'outer-kora',
    term: { en: 'Outer Kora', zh: '外转 / 外圈' },
    meaning: {
      en: 'The standard 52km circuit around Mount Kailash — the route described in this guide.',
      zh: '围绕冈仁波齐峰一整圈的标准转山路，约52公里，本指南所述路线。',
    },
  },
  {
    id: 'inner-kora',
    term: { en: 'Inner Kora', zh: '内转 / 内圈' },
    meaning: {
      en: 'A special inner circumambulation path. Traditionally requires completing 13 outer koras first. Extremely dangerous — not covered in this guide.',
      zh: '特殊的内圈转经道，传统上需先完成13次外转才有资格走。极凶险，本指南不介绍。',
    },
  },
  {
    id: 'saga-dawa',
    term: { en: 'Saga Dawa Festival', zh: '萨嘎达瓦节' },
    meaning: {
      en: 'The most important Tibetan Buddhist holiday (15th day of 4th Tibetan month, usually late May – mid June). Commemorates Buddha\'s birth, enlightenment, and passing. Pilgrim numbers surge during this period.',
      zh: '藏历四月十五日，藏传佛教最重要的节日，纪念释迦牟尼诞生、成道、涅槃。通常在公历5月底~6月中，期间转山朝圣者剧增。',
    },
  },
  {
    id: 'horse-year',
    term: { en: 'Year of the Horse', zh: '马年' },
    meaning: {
      en: 'Legend says Buddha was born and attained enlightenment in a Horse Year. Kora merit in a Horse Year equals 13 times that of a normal year. Next: 2026.',
      zh: '藏地传说佛祖诞生、成道于马年。马年转山功德相当于平常年份的13倍，朝圣活动特别隆重。下一个马年为2026年。',
    },
  },
  {
    id: 'merit',
    term: { en: 'Merit', zh: '功德' },
    meaning: {
      en: 'Spiritual reward accumulated through good deeds, practice, and pilgrimage. Purifies karma and benefits future lives.',
      zh: '通过善行、修行、朝圣等积累的精神福报，可净化业障、利益后世。',
    },
  },
  {
    id: 'karma',
    term: { en: 'Karmic Obscurations', zh: '业障 / 罪业' },
    meaning: {
      en: 'Negative karma created by past harmful actions that obstructs liberation. The kora is believed to purify these.',
      zh: '由过去恶行所造、阻碍解脱的业力。转山被认为可以净除业障。',
    },
  },
  {
    id: 'prostration',
    term: { en: 'Full-body Prostration', zh: '磕长头' },
    meaning: {
      en: 'The most devout form of worship in Tibetan Buddhism: lying fully flat with each step, measuring the earth with one\'s body. Some pilgrims complete the entire kora this way.',
      zh: '藏传佛教最虔诚的朝拜方式：每走一步即五体投地一次，以身体丈量大地。一些朝圣者以磕长头方式完成转山。',
    },
  },
  {
    id: 'chakrasamvara',
    term: { en: 'Chakrasamvara', zh: '胜乐金刚' },
    meaning: {
      en: 'One of the five principal deities of Tibetan Buddhist tantra. Mount Kailash is regarded as his "body mandala".',
      zh: '藏传佛教密宗五大本尊之一。冈仁波齐被视为其「身坛城」。',
    },
  },
  {
    id: 'prayer-flags',
    term: { en: 'Prayer Flags (lungta)', zh: '经幡' },
    meaning: {
      en: 'Colorful cloth banners printed with scriptures and images. Each flutter in the wind is considered one recitation of the prayers. Found everywhere along the kora.',
      zh: '印有经文图像的彩色布幡，风吹动一次即被视为念诵一遍。转山路沿途处处可见。',
    },
  },
  {
    id: 'mani-stones',
    term: { en: 'Mani Stones', zh: '玛尼石 / 玛尼堆' },
    meaning: {
      en: 'Stones carved with the six-syllable mantra "Om Mani Padme Hum" and other scriptures. Pilgrims stack them along the route or circumambulate them clockwise.',
      zh: '刻有六字真言「嗡嘛呢叭咪吽」等经文的石头，朝圣者会沿路堆放或顺时针绕行。',
    },
  },
  {
    id: 'darchen',
    term: { en: 'Darchen', zh: '塔钦' },
    meaning: {
      en: '"Great Prayer Flag Pole" in Tibetan. A small town 10km south of Kailash at ~4,600m — the base camp, start and end point for most pilgrims.',
      zh: '藏语「大经幡杆」之意。位于冈仁波齐神山以南10公里的小镇，是绝大多数转山者的「大本营」、起点与终点。海拔约4600米。',
    },
  },
  {
    id: 'dolma-la',
    term: { en: 'Dolma La (Tara\'s Pass)', zh: '卓玛拉垭口' },
    meaning: {
      en: 'The highest point of the kora at 5,650m, named after the goddess Tara. Pilgrims view crossing this pass as "rebirth" — old karma dies on one side, new life begins on the other.',
      zh: '转山路全程最高点，海拔5650米，以度母命名。藏地朝圣者视通过此垭口为「重生」——前世/旧业死于山的一面，新生于另一面。',
    },
  },
  {
    id: 'drirapuk',
    term: { en: 'Drirapuk Monastery', zh: '芝热寺' },
    meaning: {
      en: 'Monastery directly facing the north face of Kailash. Named "Female Yak Horn Cave" (Milarepa\'s meditation cave). Night stop for Day 1.',
      zh: '冈仁波齐北壁正对的寺院，得名于「母牦牛角洞」（米拉日巴修行洞）。是转山第一天的住宿地。',
    },
  },
  {
    id: 'zutulpuk',
    term: { en: 'Zutul Puk Monastery', zh: '尊珠寺' },
    meaning: {
      en: 'Named "Milarepa\'s Miracle Cave" — where Milarepa used supernatural power to press rock into a low ceiling. Night stop for Day 2.',
      zh: '得名于「米拉日巴神变洞」（米拉日巴以神通将岩石压低修出的洞）。是转山第二天的住宿地。',
    },
  },
  {
    id: 'chuku',
    term: { en: 'Chuku Monastery', zh: '曲古寺' },
    meaning: {
      en: 'Monastery facing the west face of Kailash. Houses three sacred objects: the Chuku statue, a miraculous white conch, and a miraculous stone pot.',
      zh: '冈仁波齐西壁对面的寺院，供奉三圣物：曲古塑像、神奇白海螺、神奇石锅。',
    },
  },
  {
    id: 'prostration-point',
    term: { en: 'Prostration Point', zh: '恰采岗 / 朝拜处' },
    meaning: {
      en: 'Four points along the kora facing Kailash where pilgrims prostrate. Located at the SW, W, E, and SE positions around the mountain.',
      zh: '转山路上四个面对冈仁波齐的朝拜处，朝圣者会在此跪拜神山。分别位于冈仁波齐的西南、西、东、东南方位。',
    },
  },
  {
    id: 'sky-burial',
    term: { en: 'Sky Burial Ground', zh: '天葬台' },
    meaning: {
      en: 'A traditional Tibetan funeral site. The kora has several, where pilgrims symbolically "offer" hair, cloth fragments, or undergo a symbolic death ritual.',
      zh: '天葬是藏地传统的葬礼方式。转山路上有「色雄天葬台（大天葬台）」和「斯巴恰天葬台（小天葬台）」等。朝圣者可在此象征性「献出」头发、衣物碎片或经历象征性死亡仪式。',
    },
  },
  {
    id: 'karma-mirror',
    term: { en: 'Mirror of Karma', zh: '业之镜' },
    meaning: {
      en: 'A sacred site before Dolma La pass, said to reflect the pilgrim\'s good and evil karma.',
      zh: '卓玛拉垭口前的圣迹，相传可映照出转山者的善恶业。',
    },
  },
  {
    id: 'sin-crevice',
    term: { en: 'Sin-testing Crevice', zh: '善恶检验石缝' },
    meaning: {
      en: 'A narrow gap between three boulders. Legend says those with heavy sins cannot squeeze through.',
      zh: '三块巨石之间窄窄的缝隙，相传罪孽深的人钻不过去。',
    },
  },
  {
    id: 'amrita',
    term: { en: 'Amrita (Sacred Water)', zh: '甘露 / 圣水' },
    meaning: {
      en: 'Water blessed by the sacred mountain. Many springs and waterfalls along the route are considered sacred and able to purify body and mind.',
      zh: '被神山加持的水，沿途多处泉水、瀑布被视为甘露圣水，可净化身心、治病。',
    },
  },
  {
    id: 'blessing',
    term: { en: 'Blessing', zh: '加持' },
    meaning: {
      en: 'The infusion of sacred power from buddhas, bodhisattvas, teachers, or holy places into objects or people.',
      zh: '佛、菩萨、上师或圣地的力量注入，使物品或人获得神圣品质。',
    },
  },
];
