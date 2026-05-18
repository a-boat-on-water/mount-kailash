export interface MountainSection {
  id: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
  context?: { en: string; zh: string };
  deepDive?: { en: string; zh: string };
}

export const mountainSections: MountainSection[] = [
  {
    id: 'overview',
    title: { en: 'The Sacred Peak', zh: '神山概述' },
    content: {
      en: 'Mount Kailash lies in Pulan County, Ngari Prefecture, Tibet, at approximately 6,638m elevation (Chinese Academy of Sciences data). It is the second-highest peak of the Gangdise Range. It is the shared sacred mountain of four religions — Bon, Hinduism, Jainism, and Tibetan Buddhism. In Tibetan Buddhism, it is regarded as the "body mandala" of Chakrasamvara.',
      zh: '冈仁波齐峰位于西藏阿里普兰县，海拔约6638米（中科院数据），是冈底斯山脉第二高峰。它是本教、印度教、耆那教、藏传佛教四大宗教共同的圣山——藏传佛教视其为胜乐金刚的"身坛城"。',
    },
    context: {
      en: 'Various elevation figures exist (6,638m, 6,650m, 6,656m, 6,714m) — all from early 20th-century expeditions. The Chinese Academy of Sciences figure of 6,638m is now the standard used in research. Mount Kailash is often mistakenly called the highest peak of the Gangdise Range; the actual highest is Lengbu Gangri (7,095m) in Saga County. But in traditional Tibetan texts, "Gangdise" refers specifically to Kailash itself.',
      zh: '冈仁波齐峰有6638米、6650米、6656米、6714米等不同海拔说法，均为20世纪初期各国探险家的测量数值。中科院2022年发布数据标为6638米，现为科研界通用。冈底斯山脉真正的最高峰是日喀则萨嘎县的冷布岗日（7095米），但在藏族传统典籍中"冈底斯"单指冈仁波齐峰本身。',
    },
    deepDive: {
      en: 'From Highway 219, Kailash\'s crystal-like snow peak stands above surrounding mountains. From the east it resembles a majestic lion; from the west, a celestial pyramid. The south face bears a distinctive vertical groove — said to be the mark left when Naro Bonchung fell from the summit during his contest with Milarepa.',
      zh: '从219国道远望，冈仁波齐水晶塔般的雪顶屹立于群峰之上。从东面看犹如一头威武的狮子，从西面看则像一座天上的金字塔。南壁中间那条由上至下的长长槽壑，据说是那若本琼从峰顶跌落时划出的痕迹。',
    },
  },
  {
    id: 'names',
    title: { en: 'Names of the Mountain', zh: '神山之名' },
    content: {
      en: 'Tibetan: "Gang Rinpoche" (གངས་རིན་པོ་ཆེ) — "Precious Snow Mountain." Also called "Tise" (ཏི་སེ) or "Gangdise" (གངས་ཏི་སེ). English name "Kailash" comes from Sanskrit "Kelāsa" meaning "crystal."',
      zh: '藏语"冈仁波齐"（གངས་རིན་པོ་ཆེ）意为"珍贵的雪山"。更古老的名称为"底斯"（ཏི་སེ）或"冈底斯"（གངས་ཏི་སེ）。英文名Kailash源于梵语Kelāsa，意为"水晶"。',
    },
    context: {
      en: '"Gang" means snow/snow mountain; "Rinpoche" means precious — the same honorific title used for revered lamas. One theory says "Tise" derives from Sanskrit for "snow mountain," making "Gangdise" a Tibetan-Sanskrit compound meaning "Great Snow Mountain." Another theory holds "Tise" is the Zhangzhung word for "water deity."',
      zh: '"冈（岗）"藏语为雪、雪山；"仁波齐"即"仁波切"，意为珍宝、珍贵的——与用于尊称上师的"仁波切"同词。一种观点认为"底斯"来自梵语"雪山"之意，"冈底斯"为藏梵组合词，可理解为"大雪山"；另一种观点则称"底斯"是象雄语"水神"的意思。',
    },
  },
  {
    id: 'four-religions',
    title: { en: 'Sacred to Four Religions', zh: '四教圣山' },
    content: {
      en: 'Kailash is the shared sacred mountain of Bon, Hinduism, Jainism, and Tibetan Buddhism — possibly the only peak on earth revered by four major faiths simultaneously.',
      zh: '冈仁波齐是本教、印度教、耆那教、藏传佛教共同认定的圣山——可能是世界上唯一同时被四大宗教尊崇的山峰。',
    },
    context: {
      en: 'Bon, Tibet\'s indigenous religion, originated around Kailash. In Bon cosmology (Three Realms), Kailash\'s peak reaches the upper realm (Lha), its base penetrates the lower realm (Lu), connecting all three realms of the universe. Hinduism considers Kailash the abode of Lord Shiva and his consort Parvati. Jainism holds that its founder Rishabhadeva attained enlightenment here. Tibetan Buddhism regards Kailash as the abode of Chakrasamvara — his "body mandala."',
      zh: '本教是西藏本土宗教，发源于冈仁波齐周边。本教"三界宇宙观"——拉界（天界）、念界（人间）、鲁界（地底水中）的中心就是冈仁波齐峰，其高耸的山尖可达上界，雄浑的山底深入下界，贯通宇宙三界。印度教认为主神湿婆（Shiva）与妻子帕尔瓦蒂（Parvati）居住于此。耆那教称其初祖里沙布得瓦（Rishabhadeva）在此苦修得道。藏传佛教认为冈仁波齐是密宗胜乐金刚的居所，为其"身坛城"。',
    },
    deepDive: {
      en: 'Mount Sumeru (Meru) is a concept shared by Hinduism, Jainism, and Buddhism — the axis of the cosmos. Some scholars believe Kailash is its real-world counterpart. Note: "Center of the universe" refers to these religions\' cosmological center, not to a modern astronomical or geographical concept.',
      zh: '须弥山（Sumeru / Meru）是印度教、耆那教、佛教共有的宇宙中心概念。一些学者根据典籍描述，认为其在现实世界对应的就是冈仁波齐峰。注意：所谓冈仁波齐是"宇宙中心"指的是各宗教宇宙观的中心，勿将其套入现代天文学、地理学的"宇宙/地球中心"概念来理解。',
    },
  },
  {
    id: 'rivers',
    title: { en: 'Four Rivers Myth', zh: '四河之源' },
    content: {
      en: 'Tibetan tradition regards Kailash as the source of four great rivers flowing from the mouths of an elephant (Sutlej), peacock (Karnali), horse (Brahmaputra), and lion (Indus). The cultural significance transcends geography.',
      zh: '藏地传统视冈仁波齐为四大河的源头——分别从象嘴（象泉河）、孔雀嘴（孔雀河）、马嘴（马泉河）、狮嘴（狮泉河）涌出。文化意义超越了地理事实。',
    },
    context: {
      en: 'Hydrologically, the four rivers\' actual sources are 36–137km from the peak. Kailash\'s five small glaciers (totaling only 6.77 km²) all drain into Lake Rakshas Tal to the south — a closed lake with no outflow. The rivers have no hydrological connection to Kailash\'s meltwater.',
      zh: '从水文学角度，四河真正的源头距冈仁波齐峰36～137公里不等。冈仁波齐的5条小冰川（总面积仅6.77平方公里）融水全部注入南面的拉昂错——一个无出水口的封闭湖泊。四河实际上与冈仁波齐的冰雪融水没有水文关系。',
    },
    deepDive: {
      en: 'The traditional "Four Rivers from the Mouth" (ཁ་བབས་བཞི) describes these rivers as first flowing underground for great distances before emerging at their respective animal-mouth sources. Of the four, only the Horse River (Ma Quan He) is a true headwater of the Brahmaputra, and the Lion River (Shiquan He) a true headwater of the Indus. The Elephant River (Xiangquan He) is a tributary of the Indus, and the Peacock River (Kongque He) is one of many tributaries of the Ganges.',
      zh: '传统"嘴涌四河"（ཁ་བབས་བཞི）说法称四条大河先在地底流淌了很远，再分别从象嘴、孔雀嘴、马嘴、狮嘴涌出地面。实际上只有马泉河是雅鲁藏布江/布拉马普特拉河的源头，狮泉河是印度河源头；象泉河只是汇入印度河的支流，孔雀河则是恒河众多支流之一。',
    },
  },
  {
    id: 'milarepa',
    title: { en: 'Milarepa vs Naro Bonchung', zh: '米拉日巴与那若本琼' },
    content: {
      en: 'The legendary contest between Buddhist master Milarepa (1040–1123) and Bon master Naro Bonchung for ownership of Mount Kailash is one of Tibetan culture\'s most beloved stories.',
      zh: '藏传佛教噶举派大师米拉日巴（1040-1123）与本教的那若本琼争夺冈仁波齐归属权的斗法故事，是藏文化中最脍炙人口的传说之一。',
    },
    context: {
      en: 'Their final and most famous contest: Naro Bonchung challenged Milarepa — whoever reaches the summit first wins the mountain. At dawn, Naro Bonchung flew upward on his magic drum. Milarepa\'s panicked disciples woke him: "Master! He\'s already halfway up!" Milarepa calmly cast a spell, freezing Naro Bonchung mid-flight. Then, as the first ray of sunrise appeared, Milarepa flew to the summit in an instant. When Naro Bonchung finally reached the top, he saw Milarepa already seated there — and fell from the peak in shock.',
      zh: '最著名的一场斗法：那若本琼约定谁先登上冈仁波齐峰顶，神山就归谁。当天凌晨那若本琼骑着法鼓飞向山顶。弟子们慌忙叫醒酣睡的米拉日巴："师父！那若本琼已经到半山腰了！"米拉日巴悠悠答道："徒儿莫慌，为师知道了。"他念了个咒语，那若本琼便只能在山腰转圈。太阳升起那一刻，米拉日巴飞身瞬间到达峰顶。那若本琼终于也飞到山顶，见米拉日巴早已安坐于此，一不留神连人带鼓从峰顶跌了下去。',
    },
    deepDive: {
      en: 'The vertical groove on Kailash\'s south face is said to be the mark left by Naro Bonchung\'s fall. Many sacred sites along the kora trail are linked to their various contests. Some scholars note that Naro Bonchung may not be historical — early versions of Milarepa\'s biography contain no Kailash episodes; these stories may have been added later to serve religious competition. Milarepa\'s Kagyu school subsequently sent disciples to practice around Kailash, leaving numerous meditation caves still visible today. The kora route itself is attributed to Gotsangpa (རྒོད་ཚང་པ, 1189–1258), founder of a Kagyu sub-school.',
      zh: '冈仁波齐南壁中间的长长槽壑据说就是那若本琼跌落时划出的痕迹。转山路上有不少与他们斗法相关的圣迹。有学者指出历史上可能并不存在那若本琼这个人——早期《米拉日巴传》中并无在冈仁波齐斗法的内容，认为这些故事是后人因应宗教竞争的需要而演绎。尔后噶举派持续遣派弟子到冈仁波齐修行，留下大量修行洞。如今的转山线路相传由噶举派大师郭仓巴（རྒོད་ཚང་པ，1189-1258）开创。',
    },
  },
  {
    id: 'climbing',
    title: { en: 'The Unclimbed Peak', zh: '从未被攀登的神山' },
    content: {
      en: 'No human has ever stood atop Mount Kailash. It remains unclimbed out of reverence, not difficulty.',
      zh: '除了传说中米拉日巴与那若本琼的斗法，冈仁波齐从未有"凡人"登顶的记录。',
    },
    context: {
      en: 'In 1926, British officers Wilson and Ruttledge surveyed possible routes but couldn\'t attempt the climb due to bad weather. In 1985, famed mountaineer Reinhold Messner received a climbing permit. After surveying, he declared the peak "easily climbable by skilled mountaineers" — but abandoned the attempt, calling it sacrilege to use ice axes on this sacred mountain. He walked the kora twice instead.',
      zh: '1926年英国军官Wilson和Ruttledge勘察了攀登路线，但因天气恶化未能实施。1985年"登山皇帝"梅斯纳尔获得登山许可，勘察后认为"优秀登山者能轻松应对"，但主动放弃，认为用冰爪、冰镐"征服"这座宗教圣山是对神明的亵渎。他沿转山路绕行了两圈。',
    },
    deepDive: {
      en: 'In 2001, Spanish climber Jesús Martínez Novas also obtained a permit. By then, the internet enabled global protest from mountaineers worldwide, and he withdrew his plan. Messner commented: "If we conquer this mountain, then we conquer something in other people\'s souls. I would suggest they go and climb something a little harder. Kailash is not so high and not so hard."',
      zh: '2001年西班牙登山家诺瓦斯也获得许可，但在互联网时代遭到各国登山者广泛反对和抗议，随后放弃。梅斯纳尔对此评论："如果我们征服了这座山，那我们就征服了其他人灵魂中的一些东西。我建议他们去爬一些更难的山，冈仁波齐峰没那么高、也没那么难。"',
    },
  },
  {
    id: 'kora-meaning',
    title: { en: 'What is Kora?', zh: '什么是转山' },
    content: {
      en: 'Kora (Tibetan: "circumambulation") means walking around a sacred object to purify karma and accumulate merit. The 50km outer kora around Kailash was pioneered by Gotsangpa over 800 years ago. This is NOT a hiking trail — treating the kora as a marathon is a fundamental misunderstanding of its cultural essence.',
      zh: '转山在藏语称"廓拉"，即"转经"，是绕行圣物以消业积福的朝圣仪式。冈仁波齐的外转山路约50公里，由郭仓巴大师800多年前开创。这不是户外徒步线路——把转山当成跑马拉松或山地越野赛，是对其文化本质的误读。',
    },
    context: {
      en: 'This guide covers only the outer kora (Tibetan: "Nangkhor"). The "inner kora" and "Dakini Secret Path" require 13 completed outer koras by tradition, and are officially forbidden to tourists due to extreme danger — multiple fatalities in 2024 and 2025. These areas have no phone signal and no rescue infrastructure.',
      zh: '本指南只涉及外转山路（"外圈"）。"内转（内圈）"和"空行母密道"按传统习俗须先完成13圈外转才有资格走，且景区公司已明令禁止游客进入——2024年6月和2025年9月都有游客不顾警告执意进入而丧生。这些区域无手机信号，无任何救援保障。',
    },
    deepDive: {
      en: 'Some claim that in a Horse Year, one circuit equals 13, so completing one Horse Year kora qualifies you for the inner kora. The author personally asked the abbot of Zhire Monastery, Tenzin Namgyal Rinpoche, who stated clearly: "The Horse Year merit-multiplication applies to spiritual merit only. To walk the inner kora, you must actually complete 13 full outer circuits."',
      zh: '有说法称"马年一圈相当于13圈"即可转内转。作者专门就此请教冈仁波齐芝热寺住持丁增南江仁波切，他明确说："马年一圈相当于往年13圈指的是功德相当于13倍，如果要转内转，还是得先真真正正转满13次外转。"',
    },
  },
  {
    id: 'horse-year',
    title: { en: '2026: Year of the Horse', zh: '2026马年' },
    content: {
      en: 'In a Horse Year (such as 2026), one kora circuit equals the merit of 13 circuits in a normal year. This makes 2026 an especially significant year for pilgrimage.',
      zh: '马年（如2026年）转一圈相当于平年13圈的功德，使2026年成为格外重要的朝圣年。',
    },
    context: {
      en: 'Tibetan tradition holds that Shakyamuni Buddha was born and attained enlightenment in a Horse Year, and is said to have visited Kailash (a story told along the kora trail). In a Horse Year, Buddhas, bodhisattvas, and devas gather around the mountain, making it an especially auspicious time.',
      zh: '藏地有说法称释迦牟尼诞生、成道都是在马年，并相传佛祖曾到过冈仁波齐。每逢马年十方诸佛菩萨、人、天、非天都聚集在冈仁波齐周围，非常殊胜，所以马年转山活动特别隆重热闹。',
    },
  },
];
