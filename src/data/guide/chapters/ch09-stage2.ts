import type { GuideChapter } from '../types';

// ---------------------------------------------------------------------------
// Chapter 9 — Stage 2: Gangga/Drirapuk → Zutulpuk (via Dolma La)
// ---------------------------------------------------------------------------

export const chapter9: GuideChapter = {
  id: 9,
  slug: 'stage-2',
  title: { en: 'Stage 2: Dolma La Pass', zh: '阶段二：岗加/芝热寺→尊珠寺' },
  type: 'stage',
  stageData: {
    distance: '~20 km',
    duration: '10–11 hours',
    elevationGain: '+560/590 m, then −840 m',
    startElevation: 5090,
    endElevation: 4810,
    highPoint: 5650,
    timingTip: {
      en: 'Two departure strategies: (A) leave before sunrise to catch golden light on Kailash NE face en route, or (B) watch sunrise on the north face from camp then depart quickly. Either way, prepare everything the night before.',
      zh: '两种出发方案：(A)日出前出发，途中看冈仁波齐东北侧日照金山；(B)在营地看完北壁日出后迅速上路。无论哪种，前一晚都要准备好装备食物。',
    },
    safetyAlert: {
      en: 'Dolma La (5650 m) is the highest and hardest section. Steep descent after the pass is dangerous when icy. Strong headwinds common in the afternoon on the return valley. Knee protection essential for the 3 km descent.',
      zh: '卓玛拉（5650米）是全程最高最难路段。垭口后陡坡下山遇结冰很危险。午后回程河谷常遇强逆风。3公里下坡路注意保护膝盖。',
    },
    segments: [
      // ── II-1: Gangga/Drirapuk → Sky Burial West Supply Point ──
      {
        id: 'II-1',
        from: { en: 'Gangga / Drirapuk', zh: '岗加/芝热寺' },
        to: { en: 'Small Sky Burial West Supply Point', zh: '小天葬台西侧补给点' },
        distance: '2.1/2.4 km',
        duration: '80 min',
        elevationChange: '+200/230 m',
        terrain: {
          en: 'Steep climb then gentler slope',
          zh: '陡坡+缓坡',
        },
        trailNote: {
          en: 'From Drirapuk guesthouse, take the small path south (facing Kailash, go left). After the iron bridge, take the right path with vehicle tracks — easier terrain. The steep section is ~650 m gaining ~120 m, manageable in 30–40 min.',
          zh: '从芝热寺宾馆南侧小路向东走，过铁桥后建议走右侧有车辙印的路，路面更平整。陡坡段约650米升高约120米，30-40分钟可爬完。',
        },
        sites: [
          {
            id: 'liberation-from-evil-realms-path',
            name: { en: 'Path of Liberation from Evil Realms', zh: '免除恶道轮回之路' },
            tibetan: 'ངན་སོང་སྲིང་གྲོལ།',
            elevation: 5090,
            type: 'sacred',
            content: {
              key: {
                en: 'The steep climb east of Gangga/Drirapuk. Completing this slope is said to free pilgrims from rebirth in the three lower realms.',
                zh: '岗加/芝热寺东面的爬坡路段。据说转山者爬完这段坡，能免于在六道轮回时堕入三恶道。',
              },
              context: {
                en: 'Buddhist cosmology describes six realms of rebirth: three higher (gods, demigods, humans) and three lower (animals, hungry ghosts, hell). Another interpretation: if the climb feels extremely exhausting, your negative karma is still heavy; if you climb easily, it has been purified.',
                zh: '佛教世界观认为凡夫因善恶业不同，轮回有六道：三善道（天、阿修罗、人）与三恶道（畜生、饿鬼、地狱）。另一说法：爬坡非常累说明恶业还重，轻松爬上去则恶业已洗净。',
              },
            },
          },
          {
            id: 'kailash-ne-viewpoint',
            name: { en: 'Kailash North & East Face Viewpoint', zh: '冈仁波齐北及东壁最佳观赏位置' },
            elevation: 5270,
            type: 'landmark',
            content: {
              key: {
                en: 'Best viewpoint for Kailash north + east face, at 5270 m. Positioned between Avalokiteshvara and Manjushri Palaces. After 500–600 m further, Kailash disappears behind peaks — last complete view before Dolma La.',
                zh: '海拔5270米，在观世音菩萨宫殿与文殊菩萨宫殿之间，是朝拜、拍摄冈仁波齐北壁和东壁的最佳位置。再往前走5-600米后神山就被挡住，后面再也不能完整看到。',
              },
              context: {
                en: 'The shape here differs dramatically from the Drirapuk view — you can see the east face and a long ridge forming Kailash\'s "left arm". If sunrise hasn\'t happened yet and weather looks decent, worth waiting here. Communication cables installed in 2022 can obstruct photos — move to the left slope for better angles.',
                zh: '这里看到的形状与芝热寺所见大不同，可见东壁及与之相连的长山脊（神山的"左手臂"）。若太阳还没出而天气还行，建议稍等看日出。2022年架设的通信线缆对拍照有干扰，可往左侧斜坡走上一点找角度。',
              },
            },
          },
          {
            id: 'wolf-footprint',
            name: { en: 'Wolf Footprint', zh: '狼脚印' },
            tibetan: 'སྤྱང་གི་ཞབས་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'A stone with a canine paw print, housed in an orange cage beside the trail. Said to be left by Tara manifesting as a wolf to guide Götsangpa in finding the kora route.',
                zh: '路旁橘色铁笼内，一块比足球稍大的石头表面有犬科脚印。据说是度母化身为狼为郭仓巴指路时留下的脚印。',
              },
              deepDive: {
                en: 'When Götsangpa (13th c.) was searching for a circumambulation route around Kailash, Tara appeared as a wolf to guide him. This footprint is one of the traces she left. The story culminates at Dolma La, where 21 wolves (the 21 Taras) led him to the pass and vanished into a boulder.',
                zh: '郭仓巴（13世纪）寻找冈仁波齐转山路线时，度母化身成狼为他指路。这个脚印就是她留下的痕迹。故事的高潮在卓玛拉——二十一匹狼（二十一位度母）引着他到垭口后钻进巨石消失。',
              },
            },
          },
          {
            id: 'crow-claw-mahakala',
            name: { en: 'Crow Claw Print / Crow-Faced Mahakala Palace', zh: '乌鸦爪印/鸦面玛哈嘎拉宫殿' },
            tibetan: 'བྱ་རོག་གི་བྱ་རྗེས། ཨཁོབ་པ་བྱ་རོག་གདོང་ཅན་གྱི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'Beside the wolf footprint stone, a larger flat stone has claw-like scratches — the Crow Claw Print. The mountain to the north is the Crow-Faced Mahakala Palace.',
                zh: '狼脚印石旁，地上大石头表面有交叉直线纹路像鸟爪印——乌鸦爪印。转山路左侧大山为鸦面玛哈嘎拉宫殿。',
              },
              deepDive: {
                en: 'While Götsangpa was meditating nearby, local deities offered him torma daily. One day a crow snatched his entire offering plate — he recognized it as an emanation of Crow-Faced Mahakala (a form of the great protector deity). The crow flew into a nearby stone and vanished, leaving these claw marks. Mahakala ("Great Black One") is the most important protector deity in Tibetan Buddhism.',
                zh: '郭仓巴在此修行时，当地神祇每天供养朵玛。一天乌鸦叼走了整盘朵玛，他看出是护法神鸦面玛哈嘎拉的化身。乌鸦飞入石头消失，留下爪印。玛哈嘎拉（大黑天）是藏传佛教最重要的护法神。',
              },
            },
          },
          {
            id: 'sky-burial-west-supply',
            name: { en: 'Small Sky Burial West Supply Point', zh: '小天葬台西侧补给点' },
            elevation: 5290,
            type: 'supply',
            content: {
              key: {
                en: 'Highest permanent supply point on the kora (5290 m). Two teahouses with meals & beds. Medical service point. Last fixed supply before Dolma La (next is 500 m ahead, temporary). Phone: +86 13658978885.',
                zh: '转山途中最高的固定补给点（5290米）。两家茶馆提供饮食住宿，设有医疗服务点。翻卓玛拉前最后一个固定补给点。电话：+86 13658978885。',
              },
              context: {
                en: 'Some 2-day itineraries overnight here to save ~1 hour on day 2. Author advises against it for average hikers — conditions worse than Gangga/Drirapuk, altitude too high for most to sleep well, especially first-timers. Also the furthest point reachable by transfer vehicles on the western valley road (¥1000/car back to Tarchen).',
                zh: '部分两天行程安排在此过夜以第二天省1小时。作者不建议身体状况一般者在此住，条件不如岗加/芝热寺且海拔太高难入睡。这也是西侧河谷转运车最远能到之处（返塔钦1000元/车）。',
              },
            },
          },
        ],
      },

      // ── II-2: Sky Burial West → Start of Dolma La Climb ──
      {
        id: 'II-2',
        from: { en: 'Small Sky Burial West Supply Point', zh: '小天葬台西侧补给点' },
        to: { en: 'Start of Dolma La Climb', zh: '开始爬卓玛拉处' },
        distance: '2.5 km',
        duration: '1.5 hours',
        elevationChange: '+190 m',
        terrain: {
          en: 'Gentle slope, short steep section, then long gentle slope',
          zh: '缓坡接小段陡坡后大段缓坡',
        },
        trailNote: {
          en: 'Stone-paved raised path after the supply point — uneven surface, watch ankles. At the steep section (~650 m in), take the left trail up the slope, not the right raised road. The small sky burial platform is on the slope.',
          zh: '离开补给点后的石砌抬高路段路面高低不平，小心崴脚。约650米后遇陡坡不要走右侧石砌路，从左侧小路爬坡，小天葬台就在斜坡上。',
        },
        sites: [
          {
            id: 'sipachal-sky-burial',
            name: { en: 'Sipachal Sky Burial Platform (Small Sky Burial)', zh: '斯巴恰天葬台（小天葬台）' },
            tibetan: 'བསིལ་བ་ཚལ་གྱི་དུར་ཁྲོད།',
            elevation: 5370,
            type: 'sacred',
            content: {
              key: {
                en: 'One of four sky burial sites around Kailash, at 5370 m. Named "Sipachal" (Cool Grove/Sitavana) — a Buddhist charnel ground concept from ancient India. No longer active; only the large sky burial at Sershong is still used.',
                zh: '冈仁波齐周边四个天葬台之一，海拔5370米。"斯巴恰"意为"寒冷的树林"，源于梵语Sitavana，即汉传佛教所称"尸陀林"。现已不再进行天葬，只有色雄大天葬台仍在使用。',
              },
              deepDive: {
                en: 'Ancient India had eight great Sitavana (cool grove charnel grounds) where the deceased were offered to nature. Some pilgrims perform prayers here hoping for auspicious rebirth, and formerly left old clothes or hair — a practice discouraged by Lama Dorje Tsewang (who organized kora trail cleanups) as both non-traditional and environmentally harmful.',
                zh: '古印度有八大尸陀林。部分转山信众在此祈祷期望死后顺利投生，以前还留下旧衣服、头发等。喇嘛多杰才周（组织过多次转山路垃圾清理）不建议这种做法，认为既有违佛教习俗还破坏环境。',
              },
            },
          },
          {
            id: 'charnel-mistress-eye',
            name: { en: 'Eye of the Charnel Mistress', zh: '尸陀林女主之眼' },
            tibetan: 'དུར་བདག་མའི་སྤྱན།',
            type: 'sacred',
            content: {
              key: {
                en: 'A flat elongated stone with a round hole, ~20 m north of the sky burial platform. The hole represents the "third eye of wisdom" on the forehead of the Charnel Mistress.',
                zh: '天葬台北侧约20米，一块中间有圆孔的扁长型石头。圆孔代表尸陀林女主额头上象征智慧的第三只眼。',
              },
              context: {
                en: 'The Charnel Lords (Durdag) are deities presiding over burial grounds — important protectors in Tibetan Buddhism, always appearing as a male-female pair of white skeletons.',
                zh: '"尸陀林主"是掌管墓葬之地的神明、藏传佛教重要护法，通常以一男一女白骷髅形象成双出现。',
              },
            },
          },
          {
            id: 'norsang-yidrog-palace',
            name: { en: 'Palace of Prince Norsang & Yidrog Lhamo', zh: '诺桑王子与益卓拉姆宫殿' },
            tibetan: 'རྒྱལ་བུ་ཨོར་བཟང་དང་ཡིད་འཕྲོག་ལྷ་མའི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'A distinctive rock peak east of the Manjushri Palace, visible from the slope. Named after the legendary Prince Norsang and the celestial maiden Yidrog Lhamo — the most famous traditional Tibetan opera.',
                zh: '文殊菩萨宫殿左（东）侧旁形状特别的岩石山峰。以传奇藏戏《诺桑王子》命名——最著名的传统藏戏剧目。',
              },
              deepDive: {
                en: 'Yidrog Lhamo, a celestial maiden, married Prince Norsang. Jealous consorts conspired with a sorcerer to banish her back to heaven while the prince was away. After his return, he endured many trials to retrieve her from the celestial realm. Some say the story took place in Purang County (where Kailash is), and Purang\'s famous "flying costumes" derive from it. The nearby Gongpu Temple (the "hanging temple") is where Yidrog Lhamo supposedly flew back to heaven.',
                zh: '益卓拉姆是天上仙女，下凡嫁与诺桑王子。其他妃嫔妒忌，勾结巫师将王子派去远征，益卓拉姆被迫飞回天界。王子历经磨难终在天界将她接回。民间说法称故事发生在普兰县，普兰"飞天服饰"便源于此。附近贡普寺（"悬空寺"）相传是益卓拉姆飞回天上之处。',
              },
            },
          },
          {
            id: 'milarepa-footprint-sky-burial',
            name: { en: 'Milarepa Footprint (near Sky Burial)', zh: '米拉日巴脚印（小天葬台附近）' },
            tibetan: 'མི་ལ་རས་པའི་ཞབས་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'Near the top of the slope, a half-buried ~80 cm stone with a dark red footprint — one of Milarepa\'s many imprints around Kailash. GPS: 31.096705 N, 81.347304 E.',
                zh: '接近陡坡坡顶，路右侧一块半嵌入泥土的石头上有暗红色脚印——米拉日巴在冈仁波齐留下的众多脚印之一。坐标：31.096705 N, 81.347304 E。',
              },
            },
          },
          {
            id: 'simhamukha-palace',
            name: { en: 'Lion-Faced Dakini Palace', zh: '狮面空行母宫殿' },
            tibetan: 'མཁའའ་འགྲོ་སེང་གདོང་མའི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'The large mountain to the right (SE) of the trail after the sky burial slope. Also home to the Karma Mirror and the Self-Arisen Snow Lion on its NE face.',
                zh: '小天葬台陡坡顶后，路右（东南）侧的大山。其山脚有"业之镜"，东北面山顶有"自生雪狮"。',
              },
            },
          },
          {
            id: 'karma-mirror',
            name: { en: 'Mirror of Karma', zh: '业之镜' },
            tibetan: 'ལས་ཀྱི་མེ་ལོང།',
            type: 'sacred',
            content: {
              key: {
                en: 'An oval ~1 m tall flat-faced stone painted brownish-red, at the base of the Lion-Faced Dakini Palace mountain. Pilgrims close their eyes then look at it — said to show different colors depending on one\'s karma.',
                zh: '狮面空行母宫殿山脚处，一块约1米多高、近椭圆形、正面平整、被涂成棕红色的大石——"业之镜"。据说造业不同的人看到的颜色不同。',
              },
              deepDive: {
                en: 'Also called "Yama\'s Mirror" — the mirror the King of Death uses to judge the good and evil of the deceased, determining their rebirth destiny. Bronze mirrors are important Tibetan religious implements used for "circular divination" (traphag) — seers can perceive images, symbols, and texts in reflective surfaces including mirrors, water, and the sky. Pilgrims vow here to abandon evil deeds.',
                zh: '"业之镜"也称"阎王之镜"——阎王用它评判亡灵生前善恶以决定轮回去向。铜镜是藏地宗教重要法器，可用于"圆光占卜"。转山者在此发愿决心洗净罪恶，今后不再做恶业。',
              },
            },
          },
          {
            id: 'three-layer-contest-stone',
            name: { en: 'Three-Layer Contest Stone', zh: '三层斗力石' },
            tibetan: 'གྲེས་རྡོ་གསུམ་བརྩེགས།',
            type: 'sacred',
            content: {
              key: {
                en: 'Three boulders stacked on top of each other in an orange cage beside the trail. From a legendary stone-lifting contest between Milarepa and Naro Bonchung.',
                zh: '路右侧橘色大铁笼内，三块叠罗汉般垒起的大石头。源于米拉日巴与那若本琼的抱石比力气传说。',
              },
              deepDive: {
                en: 'Milarepa and Naro Bonchung met here during their rival circumambulations (clockwise vs. counterclockwise). Naro Bonchung stacked one stone, then dropped a larger one. Milarepa then lifted a boulder twice the size and placed it firmly on top. Another victory for Milarepa in their ongoing contest for Kailash.',
                zh: '米拉日巴与那若本琼各自顺/逆时针转山再次碰面。那若本琼先放一石，再叠更大的失手了。米拉日巴举起两倍大的巨石稳稳压在顶上。这局依然是米拉日巴胜。',
              },
            },
          },
          {
            id: 'good-evil-crevice',
            name: { en: 'Good-and-Evil Testing Crevice', zh: '善恶检验石缝' },
            tibetan: 'སྡིག་པ་དཀར་ནག',
            type: 'sacred',
            content: {
              key: {
                en: 'Three boulders with a narrow crevice between them. Those with heavy sins supposedly cannot squeeze through.',
                zh: '三块巨石间的窄缝。据说罪孽深的人钻不过去。',
              },
              deepDive: {
                en: 'Legend tells of a fat person, a thin person, and a child who tried squeezing through. The fat one passed easily, but the thin one got stuck — revealing heavier sins. The child also got stuck, explained as karma carried from a past life (or, in another version, from throwing stones at birds). Another tale says a sinner got so thoroughly stuck he had to be cut free, leaving bloodstains still visible as orange marks on the rocks. The correct method (per a Gangdise Tibetan Medicine scholar): enter from the right crevice\'s back, exit front, then enter the left (narrower) crevice — passing the left side is what counts.',
                zh: '传说一胖一瘦一小孩来钻，胖子轻松通过，瘦子被卡（罪恶更大），小孩也被卡（上辈子的业）。据冈底斯藏医学院其美多吉老师，应从右侧缝隙背后钻入前面出来，再钻左侧更窄的缝隙，过左侧才算。',
              },
            },
          },
        ],
      },

      // ── II-3: Start of Dolma La Climb → Dolma La Pass ──
      {
        id: 'II-3',
        from: { en: 'Start of Dolma La Climb', zh: '开始爬卓玛拉处' },
        to: { en: 'Dolma La Pass', zh: '卓玛拉垭口' },
        distance: '1.4 km',
        duration: '1.5 hours',
        elevationChange: '+170 m',
        terrain: {
          en: 'Steep climb then gentler slope to pass',
          zh: '先陡坡后缓坡',
        },
        trailNote: {
          en: 'Before early June, heavy snow may force a detour, skipping some sites. Climbing tip: walk at your own pace, rest when 70–80% spent, stand (don\'t sit) during breaks, resume at 80–90%. Roughly 20–30 steps between rests at this altitude.',
          zh: '每年6月上旬前积雪可能改道。爬坡经验：匀速走，体力用七八成就停下休息，站着休息不建议经常坐下，恢复到八九成继续走。约20-30步休息一次。',
        },
        sites: [
          {
            id: 'bodhi-stupa-mountain',
            name: { en: 'Bodhi Stupa (Mountain)', zh: '菩提塔' },
            tibetan: 'བྱང་ཆུབ་མཆོད་རྟེན།',
            type: 'sacred',
            content: {
              key: {
                en: 'The mountain to the left of the climbing path. Named after the second of the Eight Great Stupas — commemorating the Buddha\'s enlightenment under the Bodhi tree at age 35.',
                zh: '爬坡路左侧的山。以八大佛塔第二座命名——纪念释迦牟尼三十五岁在菩提迦耶菩提树下降魔成佛。又名"降魔塔"。',
              },
            },
          },
          {
            id: 'heavenly-silk-ribbon',
            name: { en: 'Heavenly Silk Ribbon Path', zh: '天路绸带' },
            tibetan: 'ལྷ་ལམ་དར་ཟབ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Looking up from the base, the narrow trail to Dolma La looks like a ribbon dancing into the sky. Starting elevation here is 5480 m — only 170 m and 1.4 km to the pass.',
                zh: '从山脚往上看，爬卓玛拉的窄小路像一条飘舞的丝带延绵到天际。此处海拔已5480米，离垭口仅差170米、路程约1.4公里。',
              },
            },
          },
          {
            id: 'filial-piety-stone',
            name: { en: 'Filial Piety Testing Stone', zh: '孝敬父母检验石' },
            tibetan: 'ཕ་མའི་དྲིན་ལན་འཇལ་ས།',
            type: 'sacred',
            content: {
              key: {
                en: 'A dark, butter-polished stele-like stone ~130 m up from the start of the climb. Close your eyes and try to poke a finger into the small hole — success means you can repay your parents\' kindness.',
                zh: '开始爬坡约130米处，路右侧一块被酥油涂得乌黑发亮的石碑状石头。闭眼伸手指，能插进小洞就说明能孝敬父母。',
              },
            },
          },
          {
            id: 'shenpa-hand-wash',
            name: { en: 'General Shenpa\'s Sin-Cleansing Hand Print', zh: '贤巴将军洗罪恶之手处' },
            tibetan: 'དཔའ་བའི་སྡིག་ལག་འཁྲུས་ས།',
            type: 'sacred',
            content: {
              key: {
                en: 'A hand-shaped imprint on a stone by a seasonal stream, ~240 m up. General Shenpa, one of King Gesar\'s most famous warriors, washed his killer\'s hands here and vowed to never kill again.',
                zh: '爬坡约240米处，小溪旁石头上有手掌形凹陷。格萨尔王大将军贤巴在此用溪水清洗罪恶双手，立誓不再杀生。',
              },
              context: {
                en: 'Pilgrims vow not to kill here to cleanse karma from past hunting or butchering. Tibetan pilgrims scoop water into the hand print to wash their hands. Easy to miss — the V-shaped terrain is heavily draped with prayer flags. Look for the old explanation board on the ground.',
                zh: '转山者在此发誓不再杀生，可洗净以前猎杀屠宰的罪孽。藏区朝圣者将溪水舀到石头手印内洗手。V字地形经幡遮挡严重，圣迹很容易错过。',
              },
            },
          },
          {
            id: 'self-arisen-snow-lion',
            name: { en: 'Self-Arisen Snow Lion', zh: '自生雪狮' },
            tibetan: 'གངས་སེང་རང་བྱོན།',
            type: 'sacred',
            content: {
              key: {
                en: 'The NE face of the Lion-Faced Dakini Palace mountain has a large ice formation at the summit that resembles a lion — the turquoise-maned snow lion, Tibet\'s totemic animal symbolizing fearlessness and power.',
                zh: '狮面空行母宫殿山东北面山顶的大冰层，形似一头狮子——绿松石色鬃毛的雪狮是藏族图腾，象征力量、无畏和战胜一切障碍。',
              },
            },
          },
          {
            id: 'merchant-brown-sugar',
            name: { en: 'Merchant God Lobsangbu\'s Brown Sugar', zh: '商神罗布桑布的红糖' },
            tibetan: 'ཚོང་དཔོན་ཨོར་བུ་བཟང་པོའི་བུ་རམ།',
            type: 'sacred',
            content: {
              key: {
                en: 'Brownish-yellow stones at a steep bend, said to be brown sugar blocks dropped by the legendary merchant Lobsangbu\'s caravan during kora.',
                zh: '陡弯处路左侧几块棕黄色石头。据说是传奇大商人罗布桑布商队转山时遗落的红糖块变成的。',
              },
              context: {
                en: 'Brown sugar (cane sugar) is essential in Tibetan traditional food — many daily and offering foods use it. Historically imported from India and once a luxury. The Tibetan word "buram" is borrowed from Hindi/Nepali. Some Tibetan pilgrims apply boiled brown sugar mixed with warm water to their faces as sunscreen — the brownish-red coating visible on some faces along the trail.',
                zh: '红糖是藏区传统饮食重要材料。以前从印度进口，属奢侈品。藏语"布让"是印地语/尼泊尔语借词。有些藏族人将红糖熬制后涂在脸上防晒护肤——途中可见一些人脸上棕红色涂抹。',
              },
            },
          },
          {
            id: 'karma-horse',
            name: { en: 'Horse of Karma', zh: '业之马' },
            tibetan: 'ལས་ཀྱི་རྟ་ཕོ།',
            elevation: 5570,
            type: 'sacred',
            content: {
              key: {
                en: 'A large boulder at 5570 m, ~550 m up from the base. Male pilgrims climb on and mime riding toward Dolma La — praying for protection during difficult journeys. Marks the end of the steepest climb; gentler terrain to the pass from here (~30 min).',
                zh: '海拔5570米的巨石，距山脚约550米。男性朝圣者爬上做骑马姿势，祈愿旅途化险为夷。这里是最陡路段终点，往后到垭口约30分钟再无陡坡。',
              },
              deepDive: {
                en: 'Also called "afterlife horse" — pilgrims pray that during the bardo (intermediate state after death), this horse will carry them when they can no longer walk. Women traditionally do not ride it. Since ~2024, social media influencers rebranded it as "rebirth stone" and promoted photo-pasting services (up to ¥500), causing environmental damage with laminated photos, strong adhesives, and litter. Authorities now periodically clean the stone.',
                zh: '也有人祈愿死后中阴阶段走不动时能骑上它。传统上女性不能骑。约2024年起被社交平台炒作成"往生石"，收费代贴照片最高500元。过塑大照片、强力胶带严重污染环境，管理部门定期清理。',
              },
            },
          },
          {
            id: 'yama-scale',
            name: { en: 'Scale of Yama', zh: '阎王之秤' },
            tibetan: 'གཤིན་རྗེ་ཀི་སྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'A tall narrow stone ~190 m past the Horse of Karma, draped with small stones on cloth strips. Represents Yama\'s scale for weighing the good and evil of the deceased.',
                zh: '业之马前方约190米，路左侧竖立的长条石头，上面挂了很多小石头。代表阎王称量亡灵善恶多少的秤。',
              },
            },
          },
          {
            id: '21-tara-palace',
            name: { en: 'Palace of the 21 Taras', zh: '二十一度母宫殿' },
            tibetan: 'སྒྲོལ་མ་ཉེར་གཅིག་གི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'A large boulder near the pass, usually wrapped in prayer flags so thick it\'s barely visible as rock. The 21 wolves (21 Taras) that guided Götsangpa vanished into this stone — giving the pass its name "Dolma La" (Tara Pass).',
                zh: '垭口附近一块巨石，常被经幡裹得严严实实。二十一匹狼（二十一位度母化身）引着郭仓巴到此后钻入石中消失——垭口因此得名"卓玛拉"（度母垭口）。',
              },
              deepDive: {
                en: 'When Götsangpa was searching for the kora route near the small sky burial, he saw two possible paths and hesitated. Suddenly 21 wolves appeared — he recognized them as the 21 Taras in manifestation. He followed them to this mountain pass, where they entered the boulder and disappeared. Tara is said to have been born from Avalokiteshvara\'s tears of compassion.',
                zh: '郭仓巴在小天葬台附近犹豫走哪条路时，面前出现二十一匹狼。他知道是二十一位度母化身，就跟着走到垭口，狼群钻进巨石消失。度母相传由观世音菩萨慈悲之泪化现。',
              },
            },
          },
          {
            id: 'dolma-la',
            name: { en: 'Dolma La (Tara Pass)', zh: '卓玛拉垭口' },
            tibetan: 'སྒྲོལ་མ་ལ།',
            elevation: 5650,
            type: 'landmark',
            content: {
              key: {
                en: 'Highest point of the entire kora at 5650 m. Pilgrims pray, burn juniper, and scatter wind horses (lungta). Crossing Dolma La represents purification of this life\'s sins.',
                zh: '转山全程最高点，海拔5650米。转山信众在此诵经、煨桑、撒龙达。翻过卓玛拉代表洗去今生罪业、积累福报。',
              },
              context: {
                en: 'Note: "Dolma La" means "Tara Pass" — "la" means pass/col, NOT mountain. The mountain itself is called Bodhi Stupa. Windy conditions — don\'t linger. Prayer flag environmental note: most flags are now factory-made synthetic materials that don\'t decompose, creating microplastic pollution in soil and water. Traditional biodegradable flags are recommended but hard to find.',
                zh: '"卓玛拉"的"拉"是垭口而非山。此山本名"菩提塔"。风大不宜久留。环保提示：现在的化纤经幡难以降解，微塑料污染土壤河流。建议使用传统可降解经幡但销售渠道有限。',
              },
            },
          },
        ],
      },

      // ── II-4: Dolma La → Phakna Rigzin Supply Point ──
      {
        id: 'II-4',
        from: { en: 'Dolma La Pass', zh: '卓玛拉垭口' },
        to: { en: 'Phakna Rigzin Supply Point', zh: '不动地钉补给点' },
        distance: '3 km',
        duration: '1.5 hours',
        elevationChange: '−410 m',
        terrain: {
          en: 'Steep descent, then moderate slopes to valley floor',
          zh: '下山陡坡及缓坡',
        },
        trailNote: {
          en: 'DANGER: Initial descent is steep with loose/sandy surface — use trekking poles first, then move feet. If icy, bend knees low. The 3 km descent is the hardest section on the knees for the entire kora. Incorrect maps show this as 5–6 km — it is only 3 km per GPS.',
          zh: '危险路段：开始小段坡陡路面沙化易滑倒，先用登山杖支撑再移步。结冰时弯曲双腿放低重心。这3公里是全程最"废"膝盖的路段。网上地图标5-6公里是错误的，GPS实测仅3公里。',
        },
        sites: [
          {
            id: 'dakini-bathing-pool',
            name: { en: 'Dakini Bathing Pool (Lake of Compassion)', zh: '空行母沐浴池（慈悲湖）' },
            tibetan: 'མཁའའ་འགྲོ་མའི་ཁྲུས་གྱི་མཚིང་བུ།',
            elevation: 5570,
            type: 'sacred',
            content: {
              key: {
                en: 'A small high-altitude lake below Dolma La at 5570 m. Usually frozen mid-Oct to mid-Jun. Best viewed from the narrow path after the initial descent.',
                zh: '卓玛拉下方小湖，海拔5570米。通常10月中至次年6月中冰封。从初段下坡后的狭窄小路上观赏角度最佳。',
              },
              deepDive: {
                en: 'The Chinese name "Compassion Lake" is a mistranslation that spread through English sources. The Tibetan name means "Dakini Bathing Pool" — local scholars and monks confirm there is no Tibetan name meaning "compassion." The error traces to a 1930s–40s Indian explorer who transliterated the Tibetan "Thuki Zingboo" (bathing pool), which was later confused with "Thugje Chenpo" (great compassion). Origin story: a Kham woman carrying her child on a kora bent to drink from this lake and the child fell in and drowned. She walked 13 circuits in grief, and a miracle showed divine forgiveness — establishing 13 circuits as the standard Kailash kora.',
                zh: '"慈悲湖"是误传——源于早期英文资料将藏语"沐浴池"音误认为"大慈悲"。当地学者僧人均确认无此含义的藏语名。故事：一位康区妇人背着孩子转山，在此喝水时孩子掉入湖中溺亡。她极度悲伤连续转了十三圈，得到神明宽恕的指示。自此有了转冈仁波齐十三圈为基本标准的习俗。',
              },
            },
          },
          {
            id: 'karma-axe',
            name: { en: 'Axe of Karma / Horse-Head King Palace', zh: '业之斧/马头明王宫殿' },
            tibetan: 'ལས་ཀྱི་སྟ་རེ། རྟ་མགྲིན་གྱི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'A distinctive rock on the mountain ahead, shaped like both an axe and a horse head. The rock is the "Axe of Karma" (Yama\'s axe), also called "Hayagriva\'s Horse Head." The entire mountain is the Hayagriva (Horse-Head King) Palace.',
                zh: '前方山顶形状像斧头也像马头的岩石——"业之斧"（阎王之斧），也称"马头明王的马头"。整座山为"马头明王宫殿"。',
              },
              context: {
                en: 'The dangerous narrow descent path from Dolma La past the Dakini Bathing Pool is called "Hayagriva\'s Perilous Path" because it passes beside this palace.',
                zh: '从卓玛拉下来经过慈悲湖的危险狭窄陡路因在马头明王宫殿旁而称"马头明王险路"。',
              },
            },
          },
          {
            id: 'milarepa-naro-footprints',
            name: { en: 'Milarepa & Naro Bonchung Footprints', zh: '米拉日巴与那若本琼脚印' },
            tibetan: 'མི་ལ་རས་པ་དང་ན་རོ་བོན་ཆུང་གི་ཞབས་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'A flat stone behind a boulder at the end of an abandoned stone road, ~760 m past the ice field. Multiple chaotic imprints where Milarepa and Naro Bonchung pulled each other, each insisting on their own kora direction.',
                zh: '过冰层约760米后，废弃石头路尽头巨石后面的平石上有混乱印记——米拉日巴与那若本琼互相拉扯要按自己的转山方向走而留下的。',
              },
            },
          },
          {
            id: 'five-longevity-sisters',
            name: { en: 'Palace of the Five Longevity Sisters', zh: '长寿五仙女宫殿' },
            tibetan: 'ཚེ་རིང་མཆེད་ལྔའི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'A triangular-shaped mountain with five peaks, visible ahead from the descent. Home of the Five Longevity Sisters — mountain goddesses tamed by Padmasambhava and converted to Buddhist protectors.',
                zh: '从卓玛拉开始就一路可见、正面近三角形、顶部五个山尖的山峰。长寿五仙女——被莲花生大师降服后成为藏传佛教护法。',
              },
            },
          },
          {
            id: 'iron-thorn-forest',
            name: { en: 'Iron Pillar Mountain Hell-Thorn Forest', zh: '铁柱山地狱铁刺林' },
            tibetan: 'དལ་མ་རི་ཡིས་ཤིང་ཕོ།',
            type: 'sacred',
            content: {
              key: {
                en: 'A stone mountain near the trail whose rock formations resemble standing trees or swords — representing the "iron thorn forest" of Buddhist hell, where those who sinned through passion are pierced repeatedly.',
                zh: '路右侧石头山，岩石像树木又像竖立的刀剑——佛教"铁柱山地狱"中的铁刺林。因情感造恶业者堕入此地狱被铁刺反复刺穿。',
              },
            },
          },
          {
            id: 'ne-buddha-footprint',
            name: { en: 'Northeast Buddha Footprint (Phakna Rigzin)', zh: '东北佛祖脚印（东北不动地钉）' },
            tibetan: 'རི་སི་བྱང་ཤར་གྱི་འཇིགས་བྱེད་བཤིགས་གཟེར།',
            elevation: 5240,
            type: 'sacred',
            content: {
              key: {
                en: 'A >2.5 m boulder behind the supply point, with the Buddha\'s footprint on top — one of four "immovable earth nails" around Kailash. Must climb the rock to see it. This is the most commonly referenced "Phakna Rigzin."',
                zh: '补给点背后超过2.5米的巨石，顶部有佛祖脚印——冈仁波齐四周四个"不动地钉"之一。需爬上去才能看到。通常所说的"不动地钉"即指此处。',
              },
            },
          },
          {
            id: 'phakna-supply',
            name: { en: 'Phakna Rigzin Supply Point', zh: '不动地钉补给点' },
            elevation: 5240,
            type: 'supply',
            content: {
              key: {
                en: 'Second-highest permanent supply point (5240 m). Multiple buildings with basic food, beds, rice dishes, noodles. Medical service point. First supply after Dolma La. Transfer vehicles available (furthest point reachable post-pass).',
                zh: '转山路第二高固定补给点（5240米）。多间板房石头房提供基础饮食住宿，可现做盖饭面条。设有医疗服务点。翻卓玛拉后首个补给点，有转运车可返塔钦。',
              },
              context: {
                en: 'B-Plan: If you arrive after 6:30 PM and feel depleted, overnight here rather than pushing on. Zutulpuk is still 10 km away and could take 4+ hours in poor condition, with early darkness due to western valley mountains blocking light. Still 21 km back to Tarchen from here.',
                zh: 'B计划：下午6点半后到达且体力耗尽的话，建议在此过夜。尊珠寺还有10公里，状态不佳可能走4小时以上，且河谷西侧高山遮挡天色暗得早。距塔钦仍有21公里。',
              },
            },
          },
        ],
      },

      // ── II-5: Phakna Rigzin → Medicine Buddha Valley Supply Point ──
      {
        id: 'II-5',
        from: { en: 'Phakna Rigzin Supply Point', zh: '不动地钉补给点' },
        to: { en: 'Medicine Buddha Valley Supply Point', zh: '药师佛沟补给点' },
        distance: '5.7 km',
        duration: '100 min',
        elevationChange: '−270 m',
        terrain: {
          en: 'Gradual descent with multiple gentle undulations',
          zh: '整体缓慢下坡有多段起伏',
        },
        trailNote: {
          en: 'Strong headwinds likely from midday onward (SW to SE, 30–60 km/h, gusts to 80 km/h in Sep–Oct). Cover mouth/nose, wear glasses. Rest facing away from wind. River-bed shortcuts on the right exist but can be muddy in snowmelt season — stay on the main path.',
          zh: '午后大概率遇迎面大风（西南到东南，时速30-60公里，9月后阵风可达80公里）。口鼻遮住，戴眼镜。河床捷径融雪季泥泞，无经验者沿主路走。',
        },
        sites: [
          {
            id: 'polonggu-supply',
            name: { en: 'Polonggu Supply Point', zh: '坡龙古补给点' },
            elevation: 5150,
            type: 'supply',
            content: {
              key: {
                en: 'Glass-walled cabin supply point, 1.8 km (30 min) from Phakna Rigzin. Beds with electric blankets, cooked meals available. Named "Tent Boulder" after a tent-shaped rock nearby.',
                zh: '不动地钉补给点1.8公里（30分钟）后的玻璃幕墙板房补给点。有电热毯床位，可现做餐食。"坡龙古"意为"帐篷巨石"。',
              },
            },
          },
          {
            id: 'third-prostration-point',
            name: { en: 'Third Prostration Point (East)', zh: '第三朝拜处（东朝拜处）' },
            tibetan: 'ཞག་འཚལ་སྐོར་གསུམ་པ',
            elevation: 5150,
            type: 'sacred',
            content: {
              key: {
                en: 'At the mani stone pile near Polonggu. In good weather, a small portion of Kailash\'s peak (east + north + south faces) is visible — the ONLY place after Dolma La where Kailash can be seen until returning to Tarchen.',
                zh: '坡龙古补给点旁玛尼石堆处。天气好可见冈仁波齐峰顶一小块（东壁及北、南壁一点）——翻卓玛拉后唯一能再次看到神山的地方，之后回到塔钦前一路不可再见。',
              },
            },
          },
          {
            id: 'auspicious-longevity-palace',
            name: { en: 'Auspicious Longevity Goddess Palace', zh: '祥寿仙女宫殿' },
            tibetan: 'བཀྲ་ཤིས་ཚེ་རིང་མའི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'The nearest of three connected peaks on the west side of the valley, visible from the Third Prostration Point. Home of the leader of the Five Longevity Sisters, who governs blessings and longevity.',
                zh: '从第三朝拜处看琅曲河谷西岸三座相连山峰中最近的一座。长寿五仙女首领祥寿仙女的宫殿，主管福寿。',
              },
            },
          },
          {
            id: 'vaishravana-palace',
            name: { en: 'Vaishravana (Heavenly King) Palace', zh: '多闻天王宫殿' },
            tibetan: 'རྣམ་ཐོས་སྲས་གྱི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'The middle peak of the three. Vaishravana is the leader of the Four Heavenly Kings, guardian of the North, god of knowledge and wealth.',
                zh: '三座相连山峰中间一座。多闻天王是四大天王首领，守护北俱卢洲，知识与财富守护之神。',
              },
            },
          },
          {
            id: 'auspicious-many-doors-stupa',
            name: { en: 'Auspicious Many-Doors Stupa', zh: '吉祥多门塔' },
            tibetan: 'བཀྲ་ཤིས་སྒོ་མང་གི་མཆོད་རྟེན།',
            type: 'sacred',
            content: {
              key: {
                en: 'The southern peak. Third of the Eight Great Stupas — commemorating the Buddha\'s first sermon at Deer Park (turning the dharma wheel). Multiple doors symbolize the 84,000 dharma gates to enlightenment. Gyantse\'s Kumbum is an example.',
                zh: '最南面山峰。八大佛塔第三座——纪念佛陀鹿野苑初转法轮。多个门寓意通往觉悟的八万四千法门。江孜白居塔即为一座吉祥多门塔。',
              },
            },
          },
          {
            id: 'medicine-buddha-palace',
            name: { en: 'Medicine Buddha Palace', zh: '药师佛宫殿' },
            tibetan: 'སངས་རྒྱས་སྨན་བླའི་ཕོ་བྲང།',
            type: 'sacred',
            content: {
              key: {
                en: 'A massive building-shaped mountain on the east side of the valley, visible after crossing a bridge ~3.9 km from Phakna Rigzin.',
                zh: '不动地钉补给点约3.9公里后过桥处，河谷东侧一座形如大型建筑的大山。',
              },
            },
          },
          {
            id: 'medicine-buddha-supply',
            name: { en: 'Medicine Buddha Valley Supply Point', zh: '药师佛沟补给点' },
            tibetan: 'སངས་རྒྱས་སྨན་ལུང',
            elevation: 4970,
            type: 'supply',
            content: {
              key: {
                en: 'Supply point at 4970 m opposite the Medicine Buddha Palace ravine. Basic food & lodging. Medical service point. "Sangjé Menlüng" means "Medicine Buddha Valley."',
                zh: '海拔4970米，在药师佛宫殿山北侧山沟对面。提供简单食宿，设有医疗服务点。"桑杰缅碧"意为"药师佛沟"。',
              },
            },
          },
        ],
      },

      // ── II-6: Medicine Buddha Valley → Zutulpuk Monastery ──
      {
        id: 'II-6',
        from: { en: 'Medicine Buddha Valley Supply Point', zh: '药师佛沟补给点' },
        to: { en: 'Zutulpuk Monastery', zh: '尊珠寺' },
        distance: '4.6 km',
        duration: '80 min',
        elevationChange: '−160 m',
        terrain: {
          en: 'Gradual descent with gentle undulations',
          zh: '整体缓慢下坡有多段起伏',
        },
        sites: [
          {
            id: 'medicine-buddha-pouch',
            name: { en: 'Medicine Buddha\'s Medicine Pouch', zh: '药师佛药囊' },
            tibetan: 'སངས་རྒྱས་སྨན་བླའི་སྨན་ཁུག',
            type: 'sacred',
            content: {
              key: {
                en: 'A tent-sized conglomerate rock ~120 m from the trail in the riverbed meadow, ~450 m from the supply point. Use a telephoto lens to see it. Represents the Medicine Buddha\'s bag of prepared medicines.',
                zh: '离补给点约450米后，左侧河床草甸上一块小帐篷般大的砾岩，距路约120米。代表药师佛装各种成药的袋子。可用长焦镜头拉近看。',
              },
            },
          },
          {
            id: 'self-arisen-medicine-buddha',
            name: { en: 'Self-Arisen Medicine Buddha Image', zh: '自生药师佛像' },
            tibetan: 'སངས་རྒྱས་སྨན་བླའི་སྐུ་རང་བྱོན།',
            type: 'sacred',
            content: {
              key: {
                en: 'On the mountain peak to the right (west) after a long uphill section ~1.3 km from the supply point. A human-shaped figure in the rock face — visible only from a short stretch of trail directly west of the Medicine Buddha Palace.',
                zh: '离补给点约1.3公里后一段上坡路上，右侧山峰顶部岩石表面的人形图像。在药师佛宫殿正西面路段可见，可见路段不长。',
              },
            },
          },
          {
            id: 'karmapa-black-hat',
            name: { en: 'Karmapa Black Hat Crown Imprint', zh: '噶玛巴黑帽宝冠印记' },
            tibetan: 'ཀརྨ་པའི་དབུ་ཞྭའི་རྗེས།',
            type: 'sacred',
            content: {
              key: {
                en: 'Two orange cages ~2.1 km from the supply point. A dark stone "embedded" in lighter rock — said to be the imprint of a Karmapa\'s Black Hat Crown. The overall stone also resembles the crown shape.',
                zh: '离补给点约2.1公里处两个橘色铁笼。浅色大石头内"镶嵌"的灰黑色石块——据说是某一世噶玛巴的黑帽宝冠触碰形成。整块石头形状也像黑帽宝冠。',
              },
              context: {
                en: 'The Black Hat Crown is the symbol of the Karmapa lineage (Karma Kagyu school). Legend says it was woven from the hair of dakinis and offered to the 1st Karmapa Düsum Khyenpa.',
                zh: '黑帽宝冠是噶玛噶举派最高领袖噶玛巴传承的标志。相传由众多空行母以头发织成供奉给第一世噶玛巴杜松虔巴。',
              },
            },
          },
          {
            id: 'eight-great-stupas',
            name: { en: 'Eight Great Stupas', zh: '八大佛塔' },
            tibetan: 'བདེ་གཤེགས་མཆོད་རྟེན་བརྒྱད།',
            type: 'sacred',
            content: {
              key: {
                en: 'At the base of the Garuda Palace mountain ahead, layered rock formations resemble a row of stupas — the Eight Great Stupas commemorating eight key events of the Buddha\'s life.',
                zh: '前方智慧大鹏鸟宫殿山底部，岩石层叠像一排宝塔——纪念佛陀在世八个重要事件的八大佛塔。',
              },
              deepDive: {
                en: 'The eight stupas: (1) Lotus — birth; (2) Bodhi/Enlightenment — defeating Mara; (3) Dharma Wheel/Many Doors — first sermon; (4) Miracles — subduing heretics; (5) Descent from Heaven — returning from teaching his mother; (6) Reconciliation — uniting the sangha; (7) Victory — extending his lifespan; (8) Nirvana — final passing.',
                zh: '八大佛塔：(1)莲花塔——诞生；(2)菩提塔——降魔成佛；(3)法轮塔/多门塔——初转法轮；(4)神变塔——降伏外道；(5)天降塔——从天返回人间；(6)和合塔——平息僧团纷争；(7)胜利塔——延长世寿；(8)涅槃塔——涅槃入灭。',
              },
            },
          },
          {
            id: 'gaize-teahouse-supply',
            name: { en: 'Gaize Teahouse Supply Point', zh: '改则茶馆（原名）补给点' },
            elevation: 4825,
            type: 'supply',
            content: {
              key: {
                en: 'Supply point at 4825 m, ~1.2 km past the Karmapa imprint. Basic food & lodging. Only 1.3 km (20 min) from Zutulpuk — can skip if energy permits.',
                zh: '海拔4825米，距噶玛巴印记约1.2公里。简单食宿。距尊珠寺仅1.3公里（20分钟），体力够可不停。',
              },
            },
          },
          {
            id: 'zutulpuk-monastery',
            name: { en: 'Zutulpuk Monastery', zh: '尊珠寺' },
            elevation: 4810,
            type: 'accommodation',
            content: {
              key: {
                en: 'End of Stage 2. Monastery with attached guesthouse (new rooms built 2023, good views). Below: Zutulpuk Pilgrim Guesthouse + multiple food/lodging buildings. Elevation 4810 m, only ~100 m higher than Tarchen.',
                zh: '第二阶段终点。寺庙附属宾馆（2023年新修，视野佳）。下方：尊珠普香客宾馆及多间板房。海拔4810米，仅比塔钦高约100米。',
              },
              context: {
                en: 'Author strongly recommends overnighting here for average hikers rather than pushing to Tarchen (11 km more). After resting, Stage 3 takes only ~3 hours the next morning. Two-day hikers who skip this arrive in Tarchen late at night, mechanically dragging numb legs. Monastery guesthouse: +86 13628970955. Pilgrim guesthouse: +86 18308078910.',
                zh: '作者建议体能一般的转山者在此过夜而非硬赶回塔钦（还有11公里）。休息后第三天早上3小时即可回到塔钦。两天转完的人跳过这里，往往入夜后甚至接近午夜才到塔钦，机械地拖着双腿强撑。寺庙宾馆：+86 13628970955。香客宾馆：+86 18308078910。',
              },
            },
          },
        ],
      },
    ],
  },
};
