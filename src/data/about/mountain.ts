export interface MountainSection {
  id: string;
  title: { en: string; zh: string };
  content: { en: string; zh: string };
}

export const mountainSections: MountainSection[] = [
  {
    id: 'overview',
    title: { en: 'The Sacred Peak', zh: '神山概述' },
    content: {
      en: 'Mount Kailash (Tibetan: "Precious Snow Mountain"; Sanskrit: "Crystal") lies in Pulan County, Ngari Prefecture, Tibet, at approximately 6,638m elevation (Chinese Academy of Sciences data). It is the second-highest peak of the Gangdise Range. It is the shared sacred mountain of four religions — Bon, Hinduism, Jainism, and Tibetan Buddhism. In Tibetan Buddhism, it is regarded as the "body mandala" of Chakrasamvara.',
      zh: '冈仁波齐峰（藏语意为"珍贵的雪山"，梵语Kailash即"水晶"）位于西藏阿里普兰县，海拔约6638米（中科院数据），是冈底斯山脉第二高峰。它是本教、印度教、耆那教、藏传佛教四大宗教共同的圣山——藏传佛教视其为胜乐金刚的"身坛城"。',
    },
  },
  {
    id: 'rivers',
    title: { en: 'Four Rivers Myth', zh: '四河之源' },
    content: {
      en: 'Tibetan tradition regards Kailash as the source of four great rivers: the Elephant River (Sutlej), Peacock River (Karnali), Horse River (Brahmaputra), and Lion River (Indus). Hydrologically, the actual sources are 36-137km from the peak — but the cultural significance transcends geography.',
      zh: '藏地"嘴涌四河"之说在文化层面将其视为象泉河、孔雀河、马泉河、狮泉河的源头，但从水文学角度，四河真正的源头距山峰36～137公里不等。',
    },
  },
  {
    id: 'kora-meaning',
    title: { en: 'What is Kora?', zh: '什么是转山' },
    content: {
      en: 'Kora (Tibetan: "circumambulation") means walking around a sacred object to purify karma and accumulate merit. This is NOT a hiking trail — treating the kora as a marathon or trail race is a fundamental misunderstanding of its cultural essence.',
      zh: '转山在藏语称"廓拉"，即"转经"，是绕行圣物以消业积福的朝圣仪式。这不是户外徒步线路——把转山当成跑马拉松或山地越野赛，是对其文化本质的误读。',
    },
  },
  {
    id: 'horse-year',
    title: { en: '2026: Year of the Horse', zh: '2026马年' },
    content: {
      en: 'In a Horse Year (such as 2026), one kora circuit equals the merit of 13 circuits in a normal year. This makes 2026 an especially significant year for pilgrimage.',
      zh: '马年（如2026年）转一圈相当于平年13圈的功德，使2026年成为格外重要的朝圣年。',
    },
  },
];
