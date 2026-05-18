import type { GuideChapter } from '../types';

// ---------------------------------------------------------------------------
// Chapter 10 — Stage 3: Zutulpuk → Tarchen
// ---------------------------------------------------------------------------

export const chapter10: GuideChapter = {
  id: 10,
  slug: 'stage-3',
  title: { en: 'Stage 3: Zutulpuk to Tarchen', zh: '阶段三：尊珠寺→塔钦' },
  type: 'stage',
  stageData: {
    distance: '10.6 km',
    duration: '3.5–4 hours',
    elevationGain: '−120 m net',
    startElevation: 4810,
    endElevation: 4690,
    timingTip: {
      en: 'An easy final leg if you overnighted at Zutulpuk. Depart early morning, arrive before lunch. The trail is mostly gentle descent along the Zong River valley with green meadows and flowing water — refreshing after the intensity of Stage 2.',
      zh: '若在尊珠寺过夜，这是轻松的最后一段。早上出发，午前可回塔钦。大部分路沿宗曲河谷缓降，绿草流水，神清气爽。',
    },
    segments: [
      // ── III-1: Zutulpuk → Zongdui Supply Point ──
      {
        id: 'III-1',
        from: { en: 'Zutulpuk Monastery', zh: '尊珠寺' },
        to: { en: 'Zongdui Supply Point', zh: '宗堆补给点' },
        distance: '6.7 km',
        duration: '2 hours',
        elevationChange: '−130 m',
        terrain: {
          en: 'Gradual descent with gentle undulations along river valley',
          zh: '整体缓慢下降有多段起伏',
        },
        trailNote: {
          en: 'Leave Zutulpuk via the west gate and follow the hillside path down to the main trail. The valley walk is pleasant — low altitude (~4700 m), green in season. Watch for the cliff section near Zong River (~800 m of narrow path with 30 m drop, railings on some parts). One side-trip option: Cracked Boulder (~400 m uphill off-trail, not recommended for inexperienced hikers).',
          zh: '从尊珠寺西门沿山腰小路汇入主路。河谷漫步舒适——海拔不高（约4700米），暖季遍地绿草。注意宗曲旁悬崖路段（约800米窄路，落差30多米，部分有护栏）。可选岔路：裂缝巨石（离主路约400米上坡，不建议经验不足者前往）。',
        },
        sites: [
          {
            id: 'zutulpuk-monastery-temple',
            name: { en: 'Zutulpuk Monastery & Magic Cave', zh: '尊珠寺及神通洞' },
            tibetan: 'རྫུ་འཕྲུལ་ཕུག་དགོན་པ',
            elevation: 4830,
            type: 'sacred',
            content: {
              key: {
                en: '"Zutulpuk" means "Magic Cave Monastery." Small Drikung Kagyu monastery built around a cave where Milarepa and Naro Bonchung had a shelter-building contest using supernatural powers. Inside: Milarepa\'s head, hand, and foot prints on the cave ceiling/roof.',
                zh: '"尊珠普"意为"神通洞"。直贡噶举派小寺，建在米拉日巴与那若本琼以神通比赛建造避雨屋的山洞上。洞内顶部有米拉日巴头印、手印，外顶有脚印。',
              },
              deepDive: {
                en: 'The story: Milarepa proposed building a shelter when rain came. Naro Bonchung chose to build walls, cutting rock slabs with magic — but Milarepa shattered them into fragments. After Naro rebuilt with different stones, Milarepa levitated a huge slab as a roof. Finding it too low, he pushed up with his head (leaving a print), then jumped on top to press it down (leaving a footprint). Two stone rods inside are said to be his walking staffs. The monastery courtyard also houses several sacred stones moved here for protection, including the Kham Woman\'s Arm Print.',
                zh: '故事：下大雨时米拉日巴提议建屋。那若本琼选择修墙，用法力切石——米拉日巴将其变成碎块。那若本琼用别的石头建好墙，米拉日巴让大石块飞起来做屋顶。嫌矮用头顶高（留头印），又嫌高跳上去踩低（留脚印）。洞内两根石条据说是他的法杖。院子内存放了多块从附近转山路上移来保护的神迹石头。',
              },
            },
          },
          {
            id: 'kham-woman-arm-print',
            name: { en: 'Kham Woman\'s Arm Print', zh: '康巴妇人手臂印' },
            tibetan: 'ཁམས་མའི་ཕུག་རྗེས',
            type: 'sacred',
            content: {
              key: {
                en: 'Now in the monastery courtyard. The arm imprint left when the Kham woman rested against a stone on her 13th circuit — the miracle that showed divine forgiveness for her child\'s drowning in the Dakini Bathing Pool. Origin of the 13-circuit kora tradition.',
                zh: '现存放于尊珠寺院内。康巴妇人转到第十三圈时靠在石头上休息留下的手臂印——神明宽恕她孩子在空行母沐浴池溺亡的指示。转冈仁波齐十三圈习俗的由来。',
              },
            },
          },
          {
            id: 'drukpa-kunley-print',
            name: { en: 'Mad Yogi Drukpa Kunley\'s Phallus Print', zh: '疯狂瑜伽士竹巴衮列阳具印' },
            tibetan: 'འབྲུག་པ་ཀུན་ལེགས་ཀྱི་ཕོ་མཚན་གྱི་རྗེས',
            type: 'sacred',
            content: {
              key: {
                en: 'A flat stone with mantra carvings in the monastery courtyard, with a distinctive depression. Left by Drukpa Kunley (1455–1529), the famous "mad yogi" and poet who used unconventional methods to teach dharma.',
                zh: '寺院内一块刻满观音心咒的平板状石头，中间有特殊凹陷。竹巴衮列（1455-1529）所留，他以荒诞行为弘扬佛法，被称"疯狂瑜伽士"，风格像济公。',
              },
              context: {
                en: 'Drukpa Kunley is beloved across Tibet and Bhutan. The colorful phallus paintings and wooden models on Bhutanese houses originate from his legendary feats of subduing demons with his member. This stone was originally by the kora trail and moved to the monastery for safekeeping.',
                zh: '竹巴衮列在不丹更是备受尊崇。不丹房屋上的"飞天阳具"图案源于他用阳具击败妖魔的传奇。此石原在转山路旁，后移至寺内保护。',
              },
            },
          },
          {
            id: 'garuda-palace',
            name: { en: 'Wisdom Garuda Palace', zh: '智慧大鹏鸟宫殿' },
            tibetan: 'ཡེ་ཤིས་ཁྱུང་གི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'The three-peaked mountain directly across the Zong River from Zutulpuk, shaped like a giant bird with spread wings. "Garuda Tears" — spring water from two eyes on the mountain — is sold as sacred eye medicine at Zutulpuk and along the kora.',
                zh: '尊珠寺正对面（东南）三个峰顶的大山，整体像展翅大鹏鸟。山上左右两泉眼为"大鹏鸟眼泪"，据说可明目治眼疾，寺庙有售（分左右眼两瓶装）。',
              },
              context: {
                en: 'Garuda (Khyung) is a Buddhist protector deity, one of the "Eight Classes of Beings." The "Wisdom Garuda" is a specific form manifested by buddhas to subdue poisonous nagas. Some scholars argue the Tibetan Khyung (from Zhang Zhung culture) is related but distinct from the Indian Garuda. Mountain elevation is ~5800 m (not 6200 m as some bottle labels claim).',
                zh: '大鹏金翅鸟是佛教护法、天龙八部之一。"智慧大鹏鸟"是诸佛为治毒龙而化身。有观点认为源于象雄文化的"琼鸟"与"大鹏鸟"虽相似但不同。山峰海拔约5800米（非某些瓶身标签所写6200米）。',
              },
            },
          },
          {
            id: 'kailash-se-protector-palace',
            name: { en: 'Kailash Pure Land Protector Palace', zh: '底斯刹土保护神宫殿' },
            tibetan: 'རི་སི་ཞིང་སྐྱོང་གི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'The mountain directly behind (north of) Zutulpuk monastery.',
                zh: '尊珠寺背后（北面）的大山——底斯（冈仁波齐）刹土保护神宫殿。',
              },
            },
          },
          {
            id: 'a-cave',
            name: { en: 'A-Phug Meditation Cave', zh: '阿普修行洞' },
            tibetan: 'ཨ་ཕུག',
            type: 'sacred',
            content: {
              key: {
                en: 'A famous meditation cave NE of Zutulpuk on the mountainside. The Tibetan letter "ༀ" (A) on the ceiling was carved by Milarepa\'s finger — hence the name. Not on the main trail; not recommended for inexperienced visitors.',
                zh: '尊珠寺东北侧山腰上的著名修行洞。顶部石头上的藏文字母"ༀ"据说是米拉日巴用手指刻出。不在主路上，不建议经验不足者前往。',
              },
              context: {
                en: 'ༀ (A) is the last of 30 Tibetan consonants, symbolizing the primordial sound of the universe. It is also a tantric "seed syllable" — a condensed representation of doctrine, representing the essence of all phenomena and Buddhist wisdom.',
                zh: 'ༀ（阿）是藏文30个辅音字母最后一个，象征宇宙原始之声。也是密宗"种子字"之一，代表一切万物本质、佛法智慧精华。',
              },
            },
          },
          {
            id: 'se-buddha-footprint',
            name: { en: 'Southeast Buddha Footprint (SE Earth Nail)', zh: '东南佛祖脚印（东南不动地钉）' },
            tibetan: 'རི་སི་ཤར་ལྷོ་གི་འཇིགས་བྱེད་བཤིགས་གཟེར།',
            type: 'sacred',
            content: {
              key: {
                en: 'On a rock behind Zutulpuk on the hillside — a naturally "embedded" light-colored granite footprint on darker stone. One of four Buddha footprints / earth nails around Kailash. Also called "White Footprint." Off-trail; guide needed.',
                zh: '尊珠寺西侧附近后山石上——深色砾岩上天然"镶嵌"的浅色花岗岩脚印。冈仁波齐四个佛祖脚印/不动地钉之一，又称"白色脚印"。不在主路上。',
              },
            },
          },
          {
            id: 'ngorchen-footprint',
            name: { en: 'Ngorchen Kunga Zangpo\'s Footprint', zh: '俄尔钦·贡噶桑波脚印' },
            tibetan: 'ངོར་ཆེན་ཀུན་དགའ་བཟང་པོའི་ཞབས་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'In an orange cage ~850 m from Zutulpuk. Footprint of Ngorchen Kunga Zangpo (1382–1456), the Sakya master who founded the Ngor sub-school and the famous Ngor Monastery near Shigatse.',
                zh: '尊珠寺前行约850米，路右侧橘色铁笼内石头上的脚印。俄尔钦·贡噶桑波（1382-1456），萨迦派高僧、俄尔支派创始人，创建了著名的俄尔寺。',
              },
            },
          },
          {
            id: 'gendun-lachu',
            name: { en: 'Gendun Lachu River', zh: '根敦拉曲' },
            tibetan: 'དགེ་འདུན་ལ་ཆུ',
            type: 'landmark',
            content: {
              key: {
                en: 'A milky glacier-fed river ~1.4 km from Zutulpuk, crossed by an iron bridge. Bathing feet here is said to relieve post-kora muscle soreness. Many Tibetan pilgrims wade in when warm enough.',
                zh: '尊珠寺前行约1.4公里，乳白色冰川河流，铁桥通过。据说下河洗脚可免除转山后肌肉酸痛。天气暖和时不少藏区转山者专门下去洗。',
              },
            },
          },
          {
            id: 'cracked-boulder',
            name: { en: 'Cracked Boulder', zh: '裂缝巨石' },
            tibetan: 'པ་བོང་གས་པ',
            type: 'sacred',
            content: {
              key: {
                en: 'A house-sized boulder ~400 m uphill from the trail, split in two by a crack. ~3.6 km from Zutulpuk. Off the main path — not recommended for inexperienced hikers.',
                zh: '离转山路约400米的山脚处，小房子般大的巨石被裂缝分成两半。距尊珠寺约3.6公里。偏离主路，不建议经验不足者前往。',
              },
              deepDive: {
                en: 'From the King Gesar epic: Minister Denma was fighting demon general Biza by the Zong River. Biza swung his sword at Denma but missed, cleaving the boulder in two. As Biza pulled his sword from the rock and leaped again, Denma shot a lightning-fast arrow and killed him.',
                zh: '格萨尔王大臣典玛与魔国大将比扎在宗曲河边对战。比扎挥刀砍向典玛落空，将大石砍成两半。比扎抽刀再砍，典玛以迅雷之势射箭将其杀死。',
              },
            },
          },
          {
            id: 'dakini-dance-ground',
            name: { en: 'Dakini Dancing Ground', zh: '空行母舞场' },
            tibetan: 'མཁའ་འགྲོའི་རོལ་ར',
            type: 'sacred',
            content: {
              key: {
                en: 'A large sloping meadow ~4 km from Zutulpuk where the dakinis are said to have danced. Orange cages hold the "Five Dakini Families\' Footprints" stone. A nice rest stop.',
                zh: '尊珠寺约4公里处一大块倾斜平坦草地，相传众空行母曾在此起舞。铁笼内有"五部空行母脚印"石。适合坐下休息。',
              },
              context: {
                en: 'The Five Dakini Families: Buddha, Vajra, Ratna (Jewel), Padma (Lotus), and Karma dakinis — representing five aspects of enlightened feminine wisdom in tantric Buddhism.',
                zh: '五部空行母：佛陀空行母、金刚空行母、珍宝空行母、莲花空行母、羯磨空行母——密宗中象征五种智慧与慈悲的女神。',
              },
            },
          },
          {
            id: 'hunter-gonpo-dorje',
            name: { en: 'Hunter Gonpo Dorje\'s Footprint', zh: '猎人贡布多吉脚印' },
            tibetan: 'རི་ར་མགོན་པོ་རྡོ་རྗེའི་ཞབས་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'In an orange cage ~5 km from Zutulpuk. From the famous story of Milarepa taming a hunter and his dog through song — one of the most beloved tales in Tibetan culture, later adapted into the classic Tibetan opera "Milarepa\'s Persuasion."',
                zh: '尊珠寺约5公里处橘色铁笼内。源于米拉日巴以道歌感化猎人和猎狗的著名故事——后编成藏戏经典《米拉日巴劝化记》（又名《猎人与小鹿》）。',
              },
              deepDive: {
                en: 'A hunter\'s dog chased a deer to Milarepa\'s meditation spot. He sang to the deer, calming its terror; then to the dog, calming its rage — both sat peacefully beside him. When the hunter arrived and tried to shoot Milarepa, he missed (a first for an expert marksman). Milarepa sang him a teaching on the preciousness of human life and the evil of killing. The hunter repented, vowed never to kill again, and became Milarepa\'s disciple. This story appears in countless thangkas and art.',
                zh: '猎狗追鹿到米拉日巴修行处。他对鹿唱道歌平息恐惧，对狗唱道歌平息嗔怒——两者安详坐在他身旁。猎人赶到射箭竟射不中（向来百发百中），米拉日巴以道歌劝说人身难得、不要杀生。猎人醒悟忏悔，拜师修佛。故事见于无数唐卡与艺术品。',
              },
            },
          },
          {
            id: 'wild-yak-innards',
            name: { en: 'Wild Yak Innards Stone', zh: '野牦牛内脏' },
            tibetan: 'འབྲོང་གི་ནང་ཁྲོལ',
            type: 'sacred',
            content: {
              key: {
                en: 'Worn stones in an orange cage on a slope ~5.1 km from Zutulpuk. Said to be the innards of an evil demon in yak form, slain by King Gesar along the Yellow-Red Perilous Path.',
                zh: '尊珠寺约5.1公里处陡坡旁铁笼内被磨出坑洼的大石头。据说是格萨尔王杀死的恶魔化身野牦牛的内脏。',
              },
            },
          },
          {
            id: 'fourth-prostration-point',
            name: { en: 'Fourth Prostration Point (Southeast)', zh: '第四朝拜处（东南朝拜处）' },
            tibetan: 'ཞག་འཚལ་སྐོར་བཞི་པ',
            elevation: 4700,
            type: 'sacred',
            content: {
              key: {
                en: 'Last of the four prostration points on the kora, at 4700 m. The only one from which Kailash is NOT visible. Views south to the Barkha plain, Namnani peak, and Rakshas Tal. Marks the end of the cliff section.',
                zh: '转山路上最后一个朝拜处，海拔4700米。四个朝拜处中唯一看不到冈仁波齐的。向南可见巴嘎平原、纳木那尼峰、拉昂错。悬崖路段终点。',
              },
            },
          },
          {
            id: 'yellow-red-perilous-path',
            name: { en: 'Yellow-Red Perilous Path', zh: '黄红色险路' },
            tibetan: 'འཕྲང་སེར་འཕྲང་དམར།',
            type: 'sacred',
            content: {
              key: {
                en: 'The ~800 m cliff path along the Zong River with yellow and red-stained rocks. Named from the legend that King Gesar killed a demon yak here, and its blood turned the yellow stones red. Now mostly railed.',
                zh: '宗曲旁约800米的悬崖路段，石头沙土有大片红色黄色。传说格萨尔王在此杀死恶魔化身野牦牛，牛血把黄色泥石染红。现大部分装有护栏。',
              },
            },
          },
          {
            id: 'zongdui-supply',
            name: { en: 'Zongdui Supply Point', zh: '宗堆补给点' },
            elevation: 4680,
            type: 'supply',
            content: {
              key: {
                en: 'Last permanent supply point on the kora, 4680 m. Multiple buildings with simple food & lodging. Good views of Namnani peak. Shuttle buses available back to Tarchen (~3.9 km, 1 hour walk remaining).',
                zh: '转山最后一个固定补给点，海拔4680米。多间板房石头房，简单饮食住宿。观赏纳木那尼好位置。有接驳车可回塔钦（步行约3.9公里，1小时）。',
              },
            },
          },
        ],
      },

      // ── III-2: Zongdui Supply Point → Tarchen ──
      {
        id: 'III-2',
        from: { en: 'Zongdui Supply Point', zh: '宗堆补给点' },
        to: { en: 'Tarchen', zh: '塔钦' },
        distance: '3.9 km',
        duration: '1 hour',
        elevationChange: '+10 m net',
        terrain: {
          en: 'Gentle descent then slight rise, small undulations',
          zh: '先降后升有多段小起伏',
        },
        trailNote: {
          en: 'At the fork after Zongdui, take the RIGHT path along the hillside (with mani stones), NOT the left vehicle road. Namnani peak accompanies you on the left all the way. A temporary supply point at ~2.3 km, then the trail merges with the vehicle road for the final stretch.',
          zh: '离开宗堆后的分岔路走右侧山边（有玛尼石堆的路），不要走左边车路。纳木那尼一路伴随在左。约2.3公里处有临时补给点，最后一段汇入车路。',
        },
        sites: [
          {
            id: 'rakshasi-breasts',
            name: { en: 'Rakshasi\'s Breasts', zh: '罗刹女双乳' },
            tibetan: 'སྲིན་མོའི་ནུ་མ',
            type: 'sacred',
            content: {
              key: {
                en: 'Two peaks to the north resembling a reclining woman\'s breasts — said to be the demoness subdued by Padmasambhava.',
                zh: '北侧两座山峰像仰卧妇人的乳房——据说是被莲花生大师降伏镇压的罗刹魔女。',
              },
            },
          },
          {
            id: 'tarchen-labrang-ruins',
            name: { en: 'Tarchen Labrang Ruins', zh: '塔钦拉章废墟' },
            tibetan: 'ངར་ཆེན་བླ་བྲང',
            type: 'landmark',
            content: {
              key: {
                en: 'A ruined stone building enclosed by a wall on the eastern edge of Tarchen, just past the river bridge. Also called "Drukpa Labrang" — the residence of a high lama, witnessing over 200 years of Kailash\'s special history. Now collapsed, barely recognizable.',
                zh: '塔钦东侧过水泥桥后右前方约40米处的围墙石头废墟。又名"竹巴拉章"——见证冈仁波齐周边两百多年特殊历史的喇嘛府邸。现已大部分倒塌，不为外人所知。',
              },
              context: {
                en: 'Local Tibetan friends say that in the early 2000s, wall paintings were still visible inside. Today the building is mostly collapsed with only broken walls remaining. Reaching this point marks the completion of one full Kailash kora.',
                zh: '据当地藏族朋友说，2000年初期还能看到墙上壁画。如今大部分倒塌，只余残垣断瓦。到达此处即圆满完成一圈冈仁波齐转山。',
              },
            },
          },
        ],
      },
    ],
  },
};
