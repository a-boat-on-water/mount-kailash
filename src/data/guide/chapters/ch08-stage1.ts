import type { GuideChapter } from '../types';

// ---------------------------------------------------------------------------
// Chapter 8 – Stage 1: Tarchen → Drirapuk
// ---------------------------------------------------------------------------

export const chapter8: GuideChapter = {
  id: 8,
  slug: 'stage-1-tarchen-to-drirapuk',
  title: {
    en: 'Stage 1: Tarchen → Gangga / Drirapuk',
    zh: '转山阶段一：塔钦→岗加/芝热寺',
  },
  type: 'stage',
  stageData: {
    distance: '~20km (19.8km to Gangga, 20.2km to Drirapuk)',
    duration: '7–8h (excluding side trips to Sky Burial Ground and Chuku Monastery)',
    elevationGain: '+400m / +370m',
    startElevation: 4690,
    endElevation: 5090,
    highPoint: 5090,
    timingTip: {
      en: 'Have breakfast in Darchen and start after sunrise — no need to leave before dawn. Generally do not depart later than 10:00 to avoid arriving too late.',
      zh: '建议在塔钦吃完早餐，太阳出来后再启程。一般不要迟于10点出发，以免太晚到达住宿点。',
    },
    segments: [
      // ---------------------------------------------------------------
      // I-1: Darchen → First Prostration Point
      // ---------------------------------------------------------------
      {
        id: 'I-1',
        from: { en: 'Darchen', zh: '塔钦' },
        to: { en: 'First Prostration Point', zh: '第一朝拜处' },
        distance: '3.8km',
        duration: '1h',
        elevationChange: '+100m',
        terrain: { en: 'Gradual uphill', zh: '较缓的持续上坡' },
        trailNote: {
          en: 'Start from the ticket office at the NW corner of Darchen. Do not walk on the vehicle road. The Himalayas are visible to the south including Namnani (7694m) and even Api (7132m) in NW Nepal on clear days.',
          zh: '景区售票处在塔钦西北角。不要走车路，路程远而且吃灰。天气好时南面远处喜马拉雅山脉清晰可见，包括纳木那尼峰（7694m），甚至110公里外尼泊尔的阿比峰（7132m）。',
        },
        sites: [
          {
            id: 'first-prostration',
            name: { en: 'First Prostration Point', zh: '第一朝拜处' },
            tibetan: 'ཕྱག་འཚལ་གྱི་གང་དང་པོ།',
            elevation: 4790,
            type: 'sacred',
            content: {
              key: {
                en: 'First point where Kailash becomes visible. Pilgrims prostrate toward the mountain.',
                zh: '冈仁波齐第一次出现在眼前的位置，朝圣信众在此向神山叩拜、持咒念经。海拔4790米。',
              },
              context: {
                en: 'One of four prostration points around Kailash (SW, W, E, SE). Called "Chaktsal Gang" in Tibetan. This is the SW prostration point.',
                zh: '转山路上共有四个"恰采岗"（朝拜处），分别位于冈仁波齐的西南、西、东及东南面，此处为第一个，即"西南朝拜处"。',
              },
              deepDive: {
                en: 'When Gotsangpa was exploring the kora route from Lake Manasarovar, he became thirsty near here and looked for stones to build a stove. But every stone he found had sutras or Buddha images on it and could not be used. He continued up the slope, saw Kailash appear to the northeast, and immediately prostrated. This spot became the first prostration point on the kora.',
                zh: '郭仓巴从圣湖玛旁雍错探索转山路线，走到这附近时口渴，去找石头架锅烧水煮茶，却发现周边的石头上都显现出经文或佛像图案，不能作为灶石。他继续往山坡走，发现冈仁波齐出现在右前方，便立即向神山跪拜，此处后来就成了转山路上首个朝拜处。',
              },
            },
          },
        ],
      },

      // ---------------------------------------------------------------
      // I-2: First Prostration → Sershong
      // ---------------------------------------------------------------
      {
        id: 'I-2',
        from: { en: 'First Prostration Point', zh: '第一朝拜处' },
        to: { en: 'Sershong', zh: '色雄' },
        distance: '2.3km',
        duration: '30min',
        elevationChange: '-50m',
        terrain: { en: 'Mostly downhill and flat', zh: '下坡及平路为主' },
        sites: [
          {
            id: 'jambhala-palaces',
            name: {
              en: 'Black & Yellow Jambhala Palaces',
              zh: '黑财神宫殿、黄财神宫殿',
            },
            tibetan: 'རྒྱལ་སྲུང་ལ་ནག་པ་ཡི་ཕོ་བྲང་། རྒྱལ་སྲུང་ལ་སེར་པོའི་ཕོ་བྲང་།',
            type: 'sacred',
            content: {
              key: {
                en: 'Two mountain palaces of wealth deities visible ahead. Black rock mountain to the NW, yellow earth mountain to the NE.',
                zh: '前方可见两座财神宫殿：西北偏北方向有大面积黑红色岩石的大山为黑财神宫殿，东北方向以泥土为主的高山为黄财神宫殿。',
              },
              context: {
                en: 'Jambhala (Zambala) is the Buddhist wealth deity. There are five Jambhala in Tibetan Buddhism — yellow, red, green, white, and black — who protect devotees\' resources so they can practice and accumulate merit.',
                zh: '藏传佛教有黄、红、绿、白、黑五位瞻巴拉财神，合称"五姓财神"，善护信众资财，使其免于窘困可安心修行、广作布施以聚积功德。',
              },
            },
          },
          {
            id: 'sershong',
            name: { en: 'Sershong', zh: '色雄' },
            tibetan: 'གསེར་གསོང་།',
            elevation: 4740,
            type: 'supply',
            content: {
              key: {
                en: 'First supply point. Simple food and drinks available. Gathering point for Indian pilgrim groups (Jun–Sep).',
                zh: '转山路第一个补给点，提供快速食品、饮料。6至9月常聚集大批印度香客朝圣团。',
              },
              context: {
                en: '"Sershong" means "Gold Basin" in Tibetan.',
                zh: '"色雄"藏语意为"金盆"（"色"：黄金；"雄"：盘、盆）。',
              },
              deepDive: {
                en: 'The legendary Tibetan merchant Norbu Zangpo wanted to circumambulate Kailash but didn\'t want to walk. He hired someone and loaded a basin of gold onto a horse as payment. When they arrived here, the horse knelt and refused to continue. Norbu Zangpo realized that buying merit was foolish, left the gold for the hired man, and did the kora himself. The place has been called "Gold Basin" ever since.',
                zh: '传奇藏地大商人罗布桑布想转冈仁波齐又不愿自己走，雇人并安排马驮了一盆黄金作为替他转山的报酬。来到这儿时马跪下不愿再走，他顿悟以金钱换取功德是很愚蠢的，于是把金盆留给雇的人，自己亲自转山去了。此后此地就被称为"色雄"（金盆）。',
              },
            },
          },
          {
            id: 'small-kailash',
            name: { en: 'Small Kailash', zh: '小冈底斯' },
            tibetan: 'ཏི་ཙེ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Small pyramid-shaped snow peak beside Kailash, visible from the Sershong area.',
                zh: '冈仁波齐峰顶左侧旁的小金字塔状雪顶，从色雄附近可见。',
              },
              context: {
                en: 'Called "Titse" in Tibetan, meaning "Small Kailash". Believed to be the abode of Vajravarahi (Dorje Phagmo), consort of Chakrasamvara who resides at the main peak.',
                zh: '藏语名"底琼"，意为"小冈底斯"，被认为是金刚亥母（多吉帕姆）的居所。金刚亥母是胜乐金刚的明妃，而胜乐金刚居所为冈仁波齐峰顶。',
              },
            },
          },
          {
            id: 'hanuman',
            name: { en: 'Monkey God Hanuman', zh: '猴神哈努曼' },
            tibetan: 'ཧྲུ་ད་སུ་མན།',
            type: 'sacred',
            content: {
              key: {
                en: 'Distinctive upright rock on the slope below Kailash peak, resembling a kneeling figure.',
                zh: '冈仁波齐峰顶前方斜坡山体上一块很特别的竖立岩石，形似跪拜者。',
              },
              context: {
                en: 'Hindu monkey god Hanuman, kneeling before Shiva who resides at the summit.',
                zh: '印度教猴神哈努曼，以忠诚奉献、英勇机智著称，正向居住在山顶的湿婆跪拜。',
              },
              deepDive: {
                en: 'In the ancient Tibetan Ramayana (1300 years old), Rama sent Hanuman to Mount Kailash to gather medicinal herbs to heal his wounded brother and soldiers. Not knowing which herbs to pick, Hanuman carried the entire mountain to Lanka, gathered the herbs, then returned it.',
                zh: '有一千三百年历史的古藏文版《罗摩衍那》中，罗摩派遣哈努曼到冈仁波齐采草药救治受伤的弟弟及兵将。哈努曼不认识草药，就把整座冈仁波齐峰搬到楞伽城，采完药再搬回原处。',
              },
            },
          },
          {
            id: 'gonpo-pen-palace',
            name: { en: 'Gonpo Pen Palace', zh: '贡波禀宫殿' },
            tibetan: 'མགོན་པོ་བེར་ནག་གི་ཕོ་བྲང་།',
            type: 'sacred',
            content: {
              key: {
                en: 'Dome-shaped rock mountain to the west of Kailash.',
                zh: '冈仁波齐左方（西）稍远处，顶部半圆状像帽子的岩石山体。',
              },
              context: {
                en: 'Palace of Ravana (Gonpo Pen), the demon king who tried to steal Mount Kailash.',
                zh: '贡波禀（即印度教魔王罗波那Ravana）的宫殿，他曾试图偷走冈仁波齐神山。',
              },
              deepDive: {
                en: 'Buddhist version: Ravana tied ropes around Kailash to carry it away. Shakyamuni flew from India with 500 arhats and stamped four footprints (the "Immovable Earth Nails") around the mountain to pin it down. The horizontal lines on Kailash\'s south face are said to be rope marks. Hindu version: Ravana shook and lifted Kailash, but Shiva casually pressed it back with his big toe, trapping Ravana beneath.',
                zh: '佛教版本：贡波禀将冈仁波齐用绳子绑起来准备背走，释迦牟尼率五百罗汉从印度飞来，在神山四侧各踩一个脚印（"不动地钉"）将其固定。南壁横向痕迹据说是绳子印。印度教版本：罗波那摇撼神山将其拔起举起，湿婆不慌不忙伸出大脚趾轻松按回原地，将罗波那压在山底。',
              },
            },
          },
        ],
      },

      // ---------------------------------------------------------------
      // I-3: Sershong → Chuku Bridge Supply
      // ---------------------------------------------------------------
      {
        id: 'I-3',
        from: { en: 'Sershong', zh: '色雄' },
        to: { en: 'Chuku Bridge Supply Point', zh: '曲古桥补给点' },
        distance: '2.4km',
        duration: '40min',
        elevationChange: '+10m',
        terrain: { en: 'Mostly flat', zh: '平路为主' },
        trailNote: {
          en: 'At the Y-fork after Sershong, take the right path toward the stupa, NOT the left fork. If visiting the flagpole, cut right across the meadow.',
          zh: 'Y字分岔路口沿通向佛塔的路走，不要走左拐那边；如果去经幡杆，则从右侧草地小路直接朝经幡杆走去。',
        },
        sites: [
          {
            id: 'tarboche',
            name: {
              en: 'Tarboche / Grand Prayer Flag Pole',
              zh: '大经幡杆/达波切',
            },
            tibetan: 'དར་ལྕོག་ཆེ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Giant prayer flag pole. Site of the Saga Dawa festival flag-raising ceremony — the most important Buddhist event at Kailash. Dates: 2026-05-31, 2027-06-18, 2028-06-07.',
                zh: '巨大的经幡杆，萨嘎达瓦节重新竖立大经幡杆仪式在此举行，是冈仁波齐最盛大最重要的佛事活动。近几年日期：2026年5月31日、2027年6月18日、2028年6月7日。',
              },
              context: {
                en: '"Tarboche" means "grand prayer flag pole" in Tibetan — same meaning as "Darchen" (the town name).',
                zh: '"达波切"藏语意为"大经幡杆"，与集镇名"塔钦"含义基本一样。',
              },
              deepDive: {
                en: 'Erected in the late 17th century to commemorate the Ganden Phodrang government\'s victory over the Ladakh Kingdom\'s invasion of Ngari. The Mongol-Tibetan army, led by Ganden Tsewang, fought for three years to reclaim Purang, Tsada, and Rutok. Flagpoles were erected both in Lhasa (near Jokhang) and here to celebrate victory and atone for war deaths. Some hiking guides wrongly call this the "starting point" of the kora — in fact, kora has no fixed start, only the requirement to complete a full circle.',
                zh: '17世纪下半叶，拉达克王国进犯阿里，甘丹颇章政权派甘丹才旺率蒙藏联军历时三年打败拉达克军队，收复阿里各地。分别在拉萨大昭寺旁及此处各竖立巨大经幡杆，纪念胜利并为战争生灵涂炭赎罪。一些攻略将此处误称为"转山起点"，实际上转山无固定起点，关键是走完一个闭合的圈。',
              },
            },
          },
          {
            id: 'sky-burial-500-arhats',
            name: {
              en: 'Sky Burial Ground of 500 Arhats',
              zh: '五百罗汉天葬台/大天葬台',
            },
            tibetan: 'དར་འཆམས་ལྔ་བརྒྱའི་དུར་གནས།',
            elevation: 4820,
            type: 'sacred',
            content: {
              key: {
                en: 'Active sky burial platform on the Mandala Terrace. Side trip: ~30min round trip from Tarboche. Visit in groups, not after dark (wild dogs).',
                zh: '坛城台上现仍使用的天葬台，是冈仁波齐周围唯一还在使用的天葬台。从大经幡杆来回约半小时。建议结伴前往，不要天黑后去（有野狗）。',
              },
              context: {
                en: 'Named for the legend that Shakyamuni led 500 arhats here from India. The pits in the rock platform are said to be the arhats\' footprints.',
                zh: '相传释迦牟尼率五百罗汉从天降临于此。天葬石台表面众多坑洼据说是五百罗汉的脚印，也是名称由来。',
              },
              deepDive: {
                en: 'The platform is enclosed by tall iron fencing. The stone surface is deeply stained from centuries of sky burial use. Crows (not vultures) are the primary scavengers here. The SW Buddha Footprint ("Immovable Earth Nail") is also on this platform — a stone tablet marks it, but the actual footprint has become indistinguishable due to the staining.',
                zh: '平台被高高的铁网围起。石台因长年天葬被染成很深的颜色。此处天葬时吃遗体的鸟类主要是乌鸦而非秃鹫。西南佛祖脚印（西南不动地钉）也在此石台上，东北角立有石碑标记，但脚印因石面染色已难以辨认。',
              },
            },
            sideTrip: {
              duration: '30min round trip',
              note: {
                en: 'Climb from east of Tarboche. Go in groups, avoid after dark.',
                zh: '从大经幡杆东侧旁的斜坡往上爬。建议结伴前往，不要天黑后去。',
              },
            },
          },
          {
            id: 'double-legged-stupa',
            name: { en: 'Double-Legged Stupa', zh: '双腿佛塔' },
            tibetan: 'མཆོད་རྟེན་རྐང་གཉིས།',
            type: 'sacred',
            content: {
              key: {
                en: 'Gate-shaped stupa 200m west of Tarboche. Tradition: walk through it to purify sins and receive blessings.',
                zh: '大经幡杆往西约200米的大门般佛塔。传统说法：转山时从中间通过，以去除罪孽、获得神山祝福加持。',
              },
              context: {
                en: 'Hindus call it "Yama Dwar" (Gate of the Death God). Passing through symbolizes death and rebirth.',
                zh: '印度教徒称其为"Yama Dwar"（阎摩/死神之门），从中通过寓意经历死亡后重生、身体得以净化。',
              },
              deepDive: {
                en: 'The current stupa was rebuilt in 2004. The author debunks the widespread myth that "sinners cannot pass through" — no Tibetan source supports this claim, and local scholars and monks have never heard it. The truth is simply: passing through purifies sins. If you can\'t get through, it\'s because of offerings blocking the way, not your karma.',
                zh: '现在的双腿佛塔是2004年重修的。作者辟谣"有罪者无法从双腿佛塔中通过"的说法——查阅多份藏文权威资料均无此说法，多位当地学者、僧人、村民也从未听过。正确说法是：从中走过可消除罪孽。走不过去是因为塔内供奉物品太多，不是罪孽太深。',
              },
            },
          },
          {
            id: 'three-family-lords',
            name: { en: 'Three Family Lords Image', zh: '三族姓尊像' },
            tibetan: 'སྐུན་རས་གཟིགས་གྱི་རི་འགོར་གསུམ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Three connected upright rocks on the western riverbank mountains, visible from near the stupa.',
                zh: '双腿佛塔附近可见河谷西岸山峰上三块连在一起、中间高两边低的竖立岩石。',
              },
              context: {
                en: 'Represents the Three Protectors: Avalokiteshvara (center), Manjushri (left), Vajrapani (right) — wisdom, compassion, and power.',
                zh: '代表"三族姓尊"：中间观世音菩萨，左侧文殊菩萨，右侧金刚手菩萨，分别是密宗莲花部、佛部、金刚部之主。',
              },
            },
          },
          {
            id: 'naro-bonchung-cave',
            name: { en: "Naro Bonchung's Cave", zh: '那若本琼修行洞' },
            tibetan: 'ན་རོ་བོན་ཆུང་ཕུག',
            type: 'sacred',
            content: {
              key: {
                en: 'Cave on the hillside with prayer flags, visible from the river valley trail.',
                zh: '坛城台岩石平台北端左下方半山腰处，周边挂有经幡的山洞。',
              },
              context: {
                en: "Meditation cave of the Bon master Naro Bonchung, Milarepa's rival.",
                zh: '本教大师那若本琼的修行洞，米拉日巴与其争夺冈仁波齐归属权时的对手。',
              },
              deepDive: {
                en: "During their contest for Kailash, Milarepa stretched his leg from his cave across the river to stamp a footprint in Naro Bonchung's cave. Naro Bonchung tried to reciprocate but could only reach the river valley floor. Celestial beings watching from above burst into laughter. Another victory for Milarepa.",
                zh: '米拉日巴在对岸修行洞中使出神通，将腿伸到那若本琼修行洞的石头上踩了脚印。那若本琼不服气要以腿还腿，但腿怎么也伸不到对面，只踩在拉曲河谷上。天上看热闹的非人忍不住哈哈大笑，又是米拉日巴胜。',
              },
            },
          },
          {
            id: 'sixteen-arhats',
            name: { en: 'Self-Arisen 16 Arhats', zh: '自生十六罗汉像' },
            tibetan: 'གནས་བརྟན་བཅུ་དྲུག་རང་བྱོན།',
            type: 'sacred',
            content: {
              key: {
                en: 'Row of 16+ towering rock formations along the cliff edge north of the Mandala Terrace.',
                zh: '坛城台岩石平台北端边缘上方，十多座连绵的高耸山体岩石。',
              },
              context: {
                en: 'Represents the original 16 arhats (Tibetan Buddhism preserves the original 16, unlike Chinese Buddhism\'s 18).',
                zh: '代表十六罗汉（十六尊者）。佛经原本只有十六罗汉，汉地后来演变成十八罗汉，藏传佛教保持原本的十六。',
              },
            },
          },
          {
            id: 'chuku-bridge-supply',
            name: {
              en: 'Chuku Bridge Supply Point',
              zh: '曲古桥补给点',
            },
            elevation: 4750,
            type: 'supply',
            content: {
              key: {
                en: 'Second supply point, first major one. Hot meals, simple lodging, medical station. Next supply point 7km away (~2h).',
                zh: '转山路第二个补给点，也是首个重要补给点。可提供现做快餐在内的基本饮食与简单住宿。设有医疗服务点。下一个补给点约7公里后（两小时路程）。',
              },
              context: {
                en: 'Named for the small bridge leading to Chuku Monastery nearby.',
                zh: '因补给点旁通往曲古寺的小桥而命名。',
              },
            },
          },
          {
            id: 'chuku-monastery',
            name: { en: 'Chuku Monastery', zh: '曲古寺' },
            tibetan: 'ཆོས་སྐུ་དགོན་པ།',
            elevation: 4870,
            type: 'sacred',
            content: {
              key: {
                en: 'First monastery on the kora trail. Contains three holy relics. Best pyramid-shaped view of Kailash. Tradition: 13 circuits of Chuku = 1 circuit of Kailash (for elderly/infirm).',
                zh: '外转路上经过的第一座寺庙，有三件圣物。此处看冈仁波齐最像金字塔形状。习俗称年老体弱者绕曲古寺十三圈等同转一圈神山。',
              },
              context: {
                en: 'Belongs to Drikung Kagyu lineage. Named after the Amitabha statue ("Choku" = Dharmakaya). Has a roof mirror reflecting Kailash.',
                zh: '属于直贡噶举派。名称来自无量光佛像（"曲古"即法身）。主殿顶部装有大镜子，可见反射的冈仁波齐。',
              },
              deepDive: {
                en: 'Three relics representing Buddha\'s body/speech/mind: (1) A naturally-formed marble Amitabha statue from a holy lake in NW India — originally belonged to the Guge King. (2) A conch shell used by Naropa. (3) A large tea-brewing cauldron. Legend: Kailash\'s protector deity Gangri Lhatsen, disguised as 7 Indian yogis, was insulted by Guge monks. He used powers to "invite" the statue to Chuku. When Guge soldiers tried to reclaim it, the statue grew impossibly heavy. They took the conch and cauldron instead, but the conch flew back. When they brewed tea in the cauldron, it produced blood. They fled in terror, and the cauldron also flew back. Days later, an old cook found the statue in the rocks — it spoke: "Take me back to the temple" — and became light as a feather.',
                zh: '三件圣物代表佛陀身语意：（1）自然生成的大理石无量光佛像，出自印度西北部圣湖，本属古格王。（2）那若巴用过的法螺。（3）煮茶大锅。传说冈仁波齐护法神岗日拉詹化身七位印度瑜伽士到古格寺庙化缘遭辱，七天后施展神通将佛像"请"到曲古寺。古格王后来派兵夺回，佛像越来越沉拉不动。士兵先把法螺和大锅搬走，法螺腾空飞回，大锅煮出鲜血吓走士兵后也飞回。数天后老厨师在乱石中发现佛像，佛像开口说"把我送回寺庙去"，变得轻飘飘被背回寺庙。',
              },
            },
            sideTrip: {
              duration: '1–1.5h round trip',
              note: {
                en: 'Cross the small bridge, climb 120m elevation. Boardwalk being built (2026).',
                zh: '过小桥去拉曲西岸后沿山坡上行，高差约120米。2026年4月正在修建栈道。',
              },
            },
          },
          {
            id: 'gangri-lhatsen-palace',
            name: { en: 'Gangri Lhatsen Palace', zh: '岗日拉詹宫殿' },
            tibetan: 'གངས་རི་ལྷ་བཙན་གྱི་ཕོ་བྲང་།',
            type: 'sacred',
            content: {
              key: {
                en: "The entire mountain where Chuku Monastery sits is considered the palace of Kailash's protector deity.",
                zh: '曲古寺所在的整座大山，被视为冈仁波齐护法神的宫殿。',
              },
              context: {
                en: "Gangri Lhatsen is the protector deity of Mount Kailash. His fierce image is enshrined in Chuku's protector chapel.",
                zh: '岗日拉詹是冈仁波齐的护法神，其忿怒相神像供奉在曲古寺护法殿内。',
              },
            },
          },
          {
            id: 'milarepa-cave',
            name: { en: "Milarepa's Cave / Rechen Puk", zh: '日钦普' },
            tibetan: 'རས་ཆེན་ཕུག',
            type: 'sacred',
            content: {
              key: {
                en: "Milarepa's meditation cave on the hillside above Chuku Monastery. NOT recommended for first-timers — steep, unclear path, rockfall danger.",
                zh: '曲古寺后山腰上米拉日巴的修行洞。山路陡峭不好走，道路痕迹不清晰，有落石危险，不建议初次转山及经验不足者前往。',
              },
              context: {
                en: "From this cave, Milarepa used supernatural powers to stretch his leg across the river to stamp a footprint in Naro Bonchung's cave.",
                zh: '米拉日巴在此修行洞中用神通将腿伸到拉曲河对岸那若本琼洞的石头上踩下脚印。',
              },
            },
          },
        ],
      },

      // ---------------------------------------------------------------
      // I-4: Chuku Bridge → Second Prostration
      // ---------------------------------------------------------------
      {
        id: 'I-4',
        from: { en: 'Chuku Bridge Supply Point', zh: '曲古桥补给点' },
        to: { en: 'Second Prostration Point', zh: '第二朝拜处' },
        distance: '5.5km',
        duration: '100min',
        elevationChange: '+120m',
        terrain: {
          en: 'Gradual ascent with undulations',
          zh: '逐渐上升有多段起伏',
        },
        trailNote: {
          en: 'Walking along east bank of Lha Chu river. Kailash hidden for ~4.4km after first 700m. Seasonal waterfalls Jul–Sep.',
          zh: '沿拉曲东岸走，往前约700米后冈仁波齐被遮挡，要再走约4.4公里才能再次看到。7至9月融雪季节两侧山上会出现多条瀑布。',
        },
        sites: [
          {
            id: 'five-color-waterfall',
            name: { en: 'Five-Color Sacred Waterfall', zh: '五彩神瀑' },
            tibetan: 'འབབ་ཆོན་སྣ་ལྔ་ཆུ་རྒྱུན།',
            type: 'sacred',
            content: {
              key: {
                en: 'Multi-tiered waterfall on the east cliff, ~950m from Chuku Bridge supply. Said to shimmer in rainbow colors in sunlight.',
                zh: '曲古桥补给点往前约950米，河谷东侧高山岩壁上的多层级小瀑布，水流在阳光下会呈现多种色彩。',
              },
              context: {
                en: 'Believed to be holy water blessed by Kailash.',
                zh: '相传是被冈仁波齐加持的甘露圣水。',
              },
            },
          },
          {
            id: 'gesar-horse-tail-waterfall',
            name: {
              en: "Gesar King's Horse Tail Waterfall",
              zh: '格萨尔王枣红马尾巴瀑布',
            },
            tibetan: 'གེ་སར་གྱི་ཏ་རྒོད་སྤོད་ཨེ་མ།',
            type: 'sacred',
            content: {
              key: {
                en: "Long, elegant waterfall on the west bank, visible during snowmelt season. Sways in the wind like a horse's tail.",
                zh: '拉曲西岸两座山峰间半山腰的长条瀑布，融雪季节可见，随风飘扬特别飘逸。',
              },
              context: {
                en: "Named after King Gesar's chestnut horse. Gesar is the legendary warrior king of the Ling Kingdom (eastern Tibet), considered an incarnation of Guru Rinpoche. Many sacred sites along the kora relate to him.",
                zh: '以格萨尔王的枣红马命名。格萨尔王是藏民族古代传奇英雄领袖，岭国位于藏东康区，在藏传佛教中被认为是莲花生大师的化身。转山路周边有不少圣迹与其相关。',
              },
            },
          },
          {
            id: 'gesar-divination-dice',
            name: {
              en: "Gesar King's Divination Dice",
              zh: '格萨尔王占卜骰子',
            },
            tibetan: 'གེ་སར་གྱི་མོ་རྡོ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Cube-shaped boulder on the eastern cliff face, lighter in color than surrounding rock.',
                zh: '转山路右侧半山腰岩壁上一块近似正方体的巨石，颜色比周围岩石浅很多，像飞来之物。',
              },
              context: {
                en: 'Dice have been used in Tibet for over 1000 years, originally for divination, later for games.',
                zh: '骰子在藏地已出现千年以上，起初作为占卜工具，后面也演变成流行至今的娱乐游戏用具。',
              },
            },
          },
          {
            id: 'drukmo-barley-wine-jar',
            name: {
              en: "Drukmo's Barley Wine Jar",
              zh: '珠姆青稞酒坛',
            },
            tibetan: 'འབྲུག་མོ་མོའི་ཆང་བུམ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Long slot-shaped rock cavity on the west bank cliff with water flowing through it.',
                zh: '拉曲西岸山体岩壁上一个有山水从中落下的长条形岩石槽洞。',
              },
              context: {
                en: "Named after Drukmo (also spelled \"Drugmo\"), King Gesar's beloved queen, a major figure in the Epic of King Gesar.",
                zh: '以格萨尔王最宠爱的王妃珠姆命名，她在《格萨尔王传》中戏份颇重。',
              },
            },
          },
          {
            id: 'gesar-horse-saddle',
            name: {
              en: "Gesar King's Horse Saddle / Karma Saddle",
              zh: '格萨尔王马鞍/业之马鞍',
            },
            tibetan: 'གེ་སར་གྱི་ཏ་རྡོ། ལས་གྱི་ཏ་རྡོ།',
            type: 'sacred',
            content: {
              key: {
                en: "Saddle-shaped stone in a protective iron cage, at the top of a prayer-flag-covered slope. Kailash's west face becomes visible here.",
                zh: '经幡覆盖的斜坡顶部，灰色铁笼子内一块马鞍形状的石头。冈仁波齐西壁在此重新可见。',
              },
              context: {
                en: 'Also called "Karma Saddle". Pilgrims used to lean against it to relieve the burden of the journey (symbolizing removing bad karma).',
                zh: '也称"业之马鞍"（藏语"列及达噶"）。以前藏族转山者会背靠此石，寓意去除劳累或消除恶业。',
              },
              deepDive: {
                en: "The pits on the stone's surface were carved by pilgrims grinding it for \"holy powder\" — locals strongly oppose this. Protective iron cages were installed starting late 2025 to prevent further damage. As of April 2026, most sacred stones along the trail now have cages.",
                zh: '石头表面坑洼是信众拿石块磨出来取"圣粉"所致，当地藏族朋友很反感这种行为。2025年底开始陆续安装保护铁笼子，2026年4月大部分圣迹石头都已装上。',
              },
            },
          },
          {
            id: 'second-prostration',
            name: { en: 'Second Prostration Point', zh: '第二朝拜处' },
            tibetan: 'ཕྱག་འཚལ་གྱི་གང་གཉིས་པ།',
            elevation: 4870,
            type: 'sacred',
            content: {
              key: {
                en: 'The west prostration point of Kailash, on the same ridge as the Horse Saddle stone.',
                zh: '冈仁波齐的"西朝拜处"，与格萨尔王马鞍石在同一小山梁上。海拔4870米。',
              },
              context: {
                en: 'Second of four prostration points around the mountain. ~5.5km and 1.5h from Chuku Bridge supply.',
                zh: '四个朝拜处中的第二个。从曲古桥补给点走到这里约5.5公里，需一个半小时左右。',
              },
            },
          },
          {
            id: 'ling-kingdom-gesar',
            name: { en: 'Ling Kingdom Gesar King', zh: '岭国格萨尔王' },
            tibetan: 'གླིང་གི་གསར།',
            type: 'sacred',
            content: {
              key: {
                en: 'Distant tall mountain on the west bank, with smaller peaks around it like generals surrounding a king.',
                zh: '拉曲西岸最远（北）的那座高山，峰顶旁围绕着几个稍矮的小山头，仿如众人簇拥。',
              },
              context: {
                en: "Represents King Gesar with his seven greatest generals of the Ling Kingdom's thirty.",
                zh: '代表格萨尔王及其七位最出色的大将军。相传格萨尔王有三十名大将，其中七位最为出色。',
              },
            },
          },
        ],
      },

      // ---------------------------------------------------------------
      // I-5: Second Prostration → Hayagriva Station
      // ---------------------------------------------------------------
      {
        id: 'I-5',
        from: { en: 'Second Prostration Point', zh: '第二朝拜处' },
        to: { en: 'Hayagriva Station Supply Point', zh: '马头明王驿站补给点' },
        distance: '1.5km',
        duration: '30min',
        elevationChange: '+30m',
        terrain: {
          en: 'Slight ascent with undulations',
          zh: '轻微上升有起伏',
        },
        sites: [
          {
            id: 'tiger-leopard-deities',
            name: {
              en: "Tiger & Leopard Head Deities / Drukmo's Weaving Stones",
              zh: '自生虎头豹头神像/珠姆织石',
            },
            tibetan:
              'སྐྱེས་མེད་སྟག་དང་གཟིག་གྱི་སྐུ་གཟུགས། འབྲུག་མོ་མོའི་འཐག་རྡོ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Two dark conglomerate boulders flanking the trail, ~450m after Second Prostration.',
                zh: '第二朝拜处往前约450米，下坡转山路左右两侧各一块深色砾岩。',
              },
              context: {
                en: 'Commonly called "Drukmo\'s Weaving Stones" (for fixing carpet loom poles). Original name: "Self-Arisen Tiger and Leopard Head Deities" — guardians of the underworld gate. Pilgrims should vow here to do no more evil.',
                zh: '常被叫做"珠姆织石"（织毯子固定杆子的石头），原本的说法是"自生虎头豹头神像"，代表阴间大门入口的两位神祇。转山者在此要立誓今生不再做恶业。',
              },
            },
          },
          {
            id: 'hayagriva-station',
            name: {
              en: 'Hayagriva Station Supply Point',
              zh: '马头明王驿站补给点',
            },
            tibetan: 'རྟ་མགྲིན་མགྲོན་ཁང་།',
            elevation: 4900,
            type: 'supply',
            content: {
              key: {
                en: 'Third supply point. Larger scale, multiple teahouses. Hot meals (rice, noodles), lodging. Medical station.',
                zh: '第三个补给点，规模较大，多家茶馆。可提供现做荤素快餐盖饭、挂面及住宿。设有医疗服务点。',
              },
              context: {
                en: 'Named after the self-arisen Hayagriva image nearby. Gotsangpa rested here while exploring the kora route.',
                zh: '因附近的自生马头明王像而得名。相传郭仓巴探索转山路时曾在此停留休息。',
              },
            },
          },
        ],
      },

      // ---------------------------------------------------------------
      // I-6: Hayagriva Station → Gangga / Drirapuk
      // ---------------------------------------------------------------
      {
        id: 'I-6',
        from: { en: 'Hayagriva Station', zh: '马头明王驿站' },
        to: { en: 'Gangga / Drirapuk', zh: '岗加/芝热寺' },
        distance: '4.3/4.7km',
        duration: '1.5h',
        elevationChange: '+190/+160m',
        terrain: {
          en: 'Gradual ascent with slight undulations',
          zh: '逐渐上升略有起伏',
        },
        trailNote: {
          en: 'After ~2km, trail turns east and Kailash disappears behind ridges. Temporary supply point at ~2.8km. Iron bridge at ~3.1km — fork: south bank → Gangga, cross bridge + turn right → Drirapuk Monastery.',
          zh: '约2公里后转山路变为向东走，冈仁波齐又被山挡住。约2.8公里处有临时补给点。约3.1公里处铁桥分岔：沿南岸走到岗加，过桥后右拐沿北岸走到芝热寺。',
        },
        sites: [
          {
            id: 'hayagriva-image',
            name: { en: 'Self-Arisen Hayagriva Image', zh: '自生马头明王像' },
            tibetan: 'རྟ་མགྲིན་རང་བྱོན།',
            type: 'sacred',
            content: {
              key: {
                en: 'Large boulder in iron cage, 80m past the supply point. Butter-coated back with re-carved image.',
                zh: '补给点往前约80米，转山路右侧旁灰色铁笼子内的浅色巨石，背面被酥油涂成深色，上面已被重新雕刻了图案。',
              },
              context: {
                en: 'Hayagriva (Horse-Head King) is the wrathful emanation of Avalokiteshvara. This image gave the area its name.',
                zh: '马头明王（马头金刚）是观世音菩萨的降魔忿怒相化身。此处因有自生马头明王像而得名"旦真仲康"。',
              },
            },
          },
          {
            id: 'nw-buddha-footprint',
            name: {
              en: 'NW Buddha Footprint / Immovable Earth Nail',
              zh: '西北佛祖脚印/西北不动地钉',
            },
            tibetan:
              'ཏི་སེ་བྱང་ནུབ་མི་འགྱུར་བའི་གཞེར། ཤབས་རྗེས་ཞབས་ནུབ་མ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Stone sunk into the ground with deep imprint, 20m past Hayagriva image. Easy to miss — watch carefully on the right side of the trail.',
                zh: '自生马头明王像再往前约20米，路右侧旁一块陷入地里的石头，表面有很深的凹陷印。非常容易错过。',
              },
              context: {
                en: 'Second of four Buddha footprints around Kailash. Called "footprint sunk to the instep" in Tibetan. Many pilgrims, including Tibetans, walk right past without noticing.',
                zh: '佛祖在冈仁波齐周边踩下的第二个脚印，藏语名意为"陷至脚背的脚印"。很多转山者包括藏族人都不知道或没留意到，匆匆而过。',
              },
            },
          },
          {
            id: 'longevity-triad-palace',
            name: { en: 'Longevity Triad Palace', zh: '长寿三尊宫殿' },
            tibetan: 'ཚེ་ལྷ་རྣམ་གསུམ་གྱི་ཕོ་བྲང་།',
            type: 'sacred',
            content: {
              key: {
                en: 'Three majestic mountains of similar height on the west bank, visible looking south.',
                zh: '回头往南看，拉曲西岸三座高度相若、形如宏伟建筑的大山。',
              },
              context: {
                en: 'Palaces of White Tara, Amitayus, and Ushnishavijaya — the three deities of longevity in Tibetan Buddhism.',
                zh: '从远至近分别是白度母、长寿佛、尊胜佛母的宫殿。三位主司护佑信众健康长寿，合称"长寿三尊"。',
              },
            },
          },
          {
            id: '1000-buddhas-palace',
            name: {
              en: '1000 Buddhas of Fortunate Aeon Palace',
              zh: '贤劫千佛宫殿',
            },
            tibetan:
              'བསྐལ་པ་བཟང་པོའི་སངས་རྒྱས་སྟོང་གི་ཕོ་བྲང་།',
            type: 'sacred',
            content: {
              key: {
                en: 'Wall-like mountain with multiple peaks behind Drirapuk Monastery, visible looking north.',
                zh: '芝热寺背后像一堵高墙、有多个峰顶的大山。',
              },
              context: {
                en: 'Represents the 1000 buddhas of the current cosmic age ("Fortunate Aeon"). Shakyamuni is one of them. Note: "Kalpa" meaning "cosmic age" is different from "Gesang flower" meaning "good fortune" — same Chinese characters, different Tibetan words.',
                zh: '代表当前"贤劫"中要出现的千位佛，释迦牟尼佛是其中一位。注意：贤劫的"格桑"（བསྐལ་པ་བཟང）与格桑花的"格桑"（སྐལ་པ་བཟང，意"好运"）汉译用字一样，但藏文写法与含义均不同。',
              },
            },
          },
          {
            id: 'gotsangpa-footprint',
            name: { en: 'Gotsangpa Footprint', zh: '郭仓巴脚印' },
            tibetan: 'རྒོད་ཚང་པའི་ཞབས་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'Large boulder with footprint imprint, 430m past the iron bridge on the north bank path to Drirapuk.',
                zh: '过铁桥约430米后，主道左侧旁一块大石，顶部有脚印印记。',
              },
              context: {
                en: 'Left by Gotsangpa while exploring the kora route. Devotees walk around its left side and pile small stones on top.',
                zh: '郭仓巴探索转山路时留下的脚印。信众从大石左侧通过，并在顶上堆放小石头。',
              },
            },
          },
          {
            id: 'gangga',
            name: { en: 'Gangga Accommodation', zh: '岗加住宿' },
            elevation: 5090,
            type: 'accommodation',
            content: {
              key: {
                en: 'Gangga ("behind the snow mountain") has the largest guesthouse (50+ rooms) plus smaller board houses. Medical station. Best facilities but mountain partly blocked by nearby slopes. Tel: +86 17308972225.',
                zh: '岗加（"雪山背面"）有最大宾馆（50多间房）及板房住宿，设有医疗服务点。住宿环境最舒适但受旁边山坡遮挡看冈仁波齐一般。电话：+86 17308972225。',
              },
              context: {
                en: 'The Shishapangma Guesthouse (40+ rooms, tel: +86 17354578888) is slightly lower at 5060m and has a better Kailash view. Indian pilgrims often stay here for worship rituals.',
                zh: '希夏邦马宾馆（40多间房，电话+86 17354578888）海拔5060米，看冈仁波齐效果更好。印度香客团常住此处进行礼拜仪式。',
              },
            },
          },
          {
            id: 'drirapuk-monastery',
            name: { en: 'Drirapuk Monastery', zh: '芝热寺' },
            tibetan: 'འབྲི་ར་དགོན་པ།',
            elevation: 5085,
            type: 'sacred',
            content: {
              key: {
                en: 'Largest of the five monasteries around Kailash. Best viewpoint for the north face. Golden sunrise on the north face visible May–Oct in clear weather.',
                zh: '冈仁波齐周边五座寺庙中规模最大。正对北壁，是朝拜观赏拍摄神山的绝佳位置。5至10月天气好时可见壮观的北壁日照金山。',
              },
              context: {
                en: '"Drirapuk" means "Female Yak Horn Monastery". Belongs to Karma Kagyu lineage. Current abbot: Tenzin Namgyal Rinpoche (since 1996).',
                zh: '"芝热"藏语意为"母牦牛角"（"芝"：母牦牛；"热"：牛角）。属噶玛噶举派。1996年起住持为丁增南江仁波切。',
              },
              deepDive: {
                en: 'Founded by Gotsangpa. While exploring the kora, he saw that the mountain behind was the "Palace of 1000 Buddhas" and considered including it in the circuit. A wild female yak appeared — actually Simhamukha (Lion-Faced Dakini) in disguise — and led him east. The yak vanished into a cave, leaving horn marks on the rock. Gotsangpa meditated there and pressed his head against the ceiling, leaving a hat imprint and blessing all future visitors. The monastery was built around this "Yak Horn Cave".',
                zh: '郭仓巴探索转山路线时看出后山是"贤劫千佛宫殿"，正考虑纳入转山范围。眼前突然出现一头母野牦牛（实为狮面空行母化身），引他往东走。母牦牛钻入洞穴消失，大石上留下牦牛角划痕。郭仓巴在洞中修行，离开时用头顶着洞顶大石发愿，留下帽子印记。芝热寺就以此"母牦牛角洞"为基础建成。',
              },
            },
          },
          {
            id: 'drirapuk-guesthouse',
            name: {
              en: 'Drirapuk Monastery Guesthouse',
              zh: '芝热寺宾馆住宿',
            },
            elevation: 5060,
            type: 'accommodation',
            content: {
              key: {
                en: "Monastery-run guesthouse below the temple, on the river's north bank. Electric blankets available. Tel: +86 13659524729. Hot meals. A new building (Songtsen Group project) is unfinished since Dec 2025.",
                zh: '寺庙附属宾馆在寺庙下方、拉曲河北岸旁。有电热毯。电话：+86 13659524729。有现做快餐。松赞集团新楼2025年12月停工，未完成。',
              },
              context: {
                en: "Best location for viewing and photographing Kailash's north face at sunrise.",
                zh: '观赏拍摄冈仁波齐北壁日出的最佳位置。',
              },
            },
          },
          {
            id: 'yak-horn-cave',
            name: { en: 'Yak Horn Cave', zh: '母牦牛角洞' },
            tibetan: 'འབྲི་ར་ཕུག',
            type: 'sacred',
            content: {
              key: {
                en: 'Inside Drirapuk Monastery. Enter through the main gate, climb steps to reach the cave. Murals of Simhamukha, Chakrasamvara, and Milarepa at entrance.',
                zh: '在芝热寺内部，从主建筑台阶上去通过大门即可到达。洞口旁墙上绘有狮面空行母、胜乐金刚、米拉日巴等壁画。',
              },
              context: {
                en: "The yak horn scratch mark and Gotsangpa's hat imprint are on the cave ceiling. Photos authorized by the abbot.",
                zh: '洞内顶部巨石表面有母牦牛角划痕和郭仓巴帽子印记。寺庙内部照片已得到住持丁增南江仁波切授权公开。',
              },
            },
          },
          {
            id: 'simhamukha-footprint',
            name: { en: 'Simhamukha Footprint', zh: '狮面空行母脚印' },
            tibetan: 'མཁའ་འགྲོ་སེང་གདོང་མའི་ཞབས་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'Hidden footprint on a stone behind the "Songtsen Hotel" building, beside the stairs to the temple. Very few people know about it.',
                zh: '"松赞酒店"房子背后、通往寺庙的石头梯级左侧旁围墙佛龛凹陷内的石头上。位置隐蔽，很少人知道。',
              },
              context: {
                en: 'Left by the Lion-Faced Dakini when she brought special earth ("sa-chu") from the mountains to feed Gotsangpa during his meditation.',
                zh: '狮面空行母从附近大山取来"萨夏"（可食用的特殊白色泥土）供养郭仓巴修行时留下的脚印。',
              },
            },
          },
          {
            id: 'three-protectors-palace',
            name: { en: 'Three Protectors Palace', zh: '三怙主宫殿' },
            tibetan: 'རིགས་གསུམ་མགོན་པོའི་ཕོ་བྲང་།',
            type: 'sacred',
            content: {
              key: {
                en: 'Three mountains in front of Kailash, visible from Drirapuk/Gangga.',
                zh: '从芝热寺/岗加看冈仁波齐前方的三座大山。',
              },
              context: {
                en: "Palaces of Manjushri (wisdom), Avalokiteshvara (compassion), and Vajrapani (power) — the Three Protectors of Tibetan Buddhism. The same three deities as Yading's three holy mountains in Sichuan (Yangmaiyong, Xiannairi, Xianuo Dorje).",
                zh: '文殊菩萨（智慧）、观世音菩萨（慈悲）、金刚手菩萨（力量）的宫殿，合称"三怙主"。与四川稻城亚丁三神山（央迈勇、仙乃日、夏诺多吉）代表的是同样三位菩萨。',
              },
            },
          },
          {
            id: 'kailash-north-face',
            name: { en: 'Kailash North Face', zh: '冈仁波齐北壁' },
            type: 'landmark',
            content: {
              key: {
                en: 'Best viewed from Drirapuk area. Spectacular golden sunrise May–Oct. North face appears nearly vertical.',
                zh: '从芝热寺区域观赏最佳。5至10月天气好时可见壮观的日照金山。北壁整体近乎垂直。',
              },
              context: {
                en: "Author debunks the \"mysterious phenomenon\" myth that the sunny south face has snow while the shady north doesn't. Simple reason: the north face is nearly vertical, so snow slides off. Not mysterious at all.",
                zh: '作者辟谣所谓"冈仁波齐神秘现象"（向阳南面积雪而背阴北面无雪）。原因很简单：北壁极陡近乎垂直，雪会滑落，并非什么神秘现象。',
              },
            },
          },
        ],
      },
    ],
  },
};
