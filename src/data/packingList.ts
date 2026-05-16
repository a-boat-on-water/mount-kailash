export interface PackingItem {
  id: string;
  name: { en: string; zh: string };
  note: { en: string; zh: string };
  category: 'footwear' | 'clothing' | 'gear' | 'food' | 'optional' | 'skip' | 'documents';
}

export const packingCategoryLabels: Record<PackingItem['category'], { en: string; zh: string }> = {
  footwear: { en: 'Footwear & Poles', zh: '鞋与登山杖' },
  clothing: { en: 'Clothing', zh: '衣物' },
  gear: { en: 'Gear', zh: '装备' },
  food: { en: 'Food', zh: '食物' },
  optional: { en: 'Optional (before June)', zh: '可选（6月前）' },
  skip: { en: 'Usually NOT needed', zh: '一般不必带' },
  documents: { en: 'Documents', zh: '证件' },
};

export const packingList: PackingItem[] = [
  // === FOOTWEAR & POLES ===
  {
    id: 'boots',
    name: { en: 'Hiking boots', zh: '徒步鞋/登山鞋' },
    note: {
      en: 'Mid or high-top, waterproof. Go half to one size up — downhill toe-jamming can cause toenail loss. Thick hard sole protects feet on rocky trail. Break in before trip. Test: lace up, kick toe-down hard — toes should not hit front.',
      zh: '中或高帮、防水。比平时大半到一码，避免下坡顶脚趾导致指甲脱落。厚硬鞋底保护脚板，全程乱石路多。新鞋应先磨合；必须穿新鞋的在易摩擦处贴创可贴防水泡。测试方法：绑好鞋带后鞋头朝下用力踢地，脚趾不应顶到鞋尖。',
    },
    category: 'footwear',
  },
  {
    id: 'poles',
    name: { en: 'Trekking poles', zh: '登山杖' },
    note: {
      en: 'Like having extra legs. ~100 CNY online is fine. Don\'t buy in Tarchen — low quality and unreliable.',
      zh: '正确使用相当于多一两条"腿"。电商平台100元左右即可。塔钦店铺售卖的多为低端，可靠性差。',
    },
    category: 'footwear',
  },

  // === CLOTHING ===
  {
    id: 'layers',
    name: { en: 'Layered clothing system', zh: '多层衣物（洋葱穿法）' },
    note: {
      en: 'Shell: windproof + water-resistant. NO cotton (stays wet). Base layer: moisture-wicking. May-Jun & Sep-Oct: prepare for -10~-15°C. Jul-Sep: prepare for -5~-10°C.',
      zh: '外套防风防泼水，不要选纯棉（湿水后难干），贴身衣物需排汗速干。5-6月、9月中-10月中按-10~-15℃准备，7-9月初按-5~-10℃准备。',
    },
    category: 'clothing',
  },
  {
    id: 'headwear',
    name: { en: 'Buff / face mask, sun hat, sunglasses', zh: '头巾/防晒面罩、遮阳帽、墨镜' },
    note: {
      en: 'UV is intense at 5000m+. Sunglasses prevent snow blindness near the pass. High SPF sunscreen essential.',
      zh: '高海拔紫外线强烈。墨镜防雪盲（垭口段尤其重要）。必带高倍数防晒霜。',
    },
    category: 'clothing',
  },
  {
    id: 'gloves-socks',
    name: { en: 'Touchscreen gloves + 1-2 extra socks', zh: '触屏手套+1-2双备用袜子' },
    note: {
      en: 'Bring a spare pair of gloves. Extra socks prevent blisters — change when damp.',
      zh: '可带备用手套。多带1-2双袜子更换防水泡。',
    },
    category: 'clothing',
  },
  {
    id: 'knee-braces',
    name: { en: 'Knee braces', zh: '护膝' },
    note: {
      en: 'Essential for the 3km steep descent after Dolma La pass. Protects knees under heavy downhill load.',
      zh: '垭口后有3公里较陡下坡，膝盖不好者必备。',
    },
    category: 'clothing',
  },
  {
    id: 'rain-poncho',
    name: { en: 'Rain poncho', zh: '雨衣' },
    note: {
      en: 'Must-have Jul-Aug (rainy season). 20-30 CNY ones from Tarchen shops work fine.',
      zh: '7-8月雨季必带。塔钦商店20-30元的质量已可用。',
    },
    category: 'clothing',
  },
  {
    id: 'hand-warmers',
    name: { en: 'Hand warmers', zh: '暖宝宝' },
    note: {
      en: 'Useful before June and after late September. Not needed Jul-Aug.',
      zh: '6月前、9月下旬后可带，7-8月不需要。',
    },
    category: 'clothing',
  },

  // === GEAR ===
  {
    id: 'thermos',
    name: { en: '0.5L thermos', zh: '0.5升保温杯' },
    note: {
      en: '0.5L is enough — refill hot water at supply points along the way.',
      zh: '0.5升足够，沿途补给点可加热水。',
    },
    category: 'gear',
  },
  {
    id: 'headlamp',
    name: { en: 'Headlamp', zh: '头灯' },
    note: {
      en: 'Day 2 may start before dawn. Toilets at supply points often have no lighting. Phone flashlight ties up your hands.',
      zh: '第二天可能日出前出发，补给点附近厕所可能无照明。手机/手电不便。',
    },
    category: 'gear',
  },
  {
    id: 'slippers',
    name: { en: 'Light slippers', zh: '轻便拖鞋' },
    note: {
      en: 'For switching into at guesthouses. Non-woven disposable type is lightest.',
      zh: '酒店房间换鞋方便。轻便无纺布拖鞋最轻。',
    },
    category: 'gear',
  },
  {
    id: 'toiletries',
    name: { en: 'Minimal toiletries', zh: '少量洗漱用品' },
    note: {
      en: 'NO showers anywhere on the trail. Just enough for brushing teeth and wiping face.',
      zh: '沿途所有住宿点均无洗澡条件，只能简单刷牙擦脸。',
    },
    category: 'gear',
  },
  {
    id: 'medicine',
    name: { en: 'Medicine', zh: '药物' },
    note: {
      en: 'Cold/headache pills, band-aids (double as blister prevention). Jul-Aug: small bottle of insect repellent.',
      zh: '感冒药、头痛药、创可贴（也可防水泡）。7-8月可带小瓶驱风油驱蚊。',
    },
    category: 'gear',
  },
  {
    id: 'electronics',
    name: { en: 'Phone, camera, power bank', zh: '手机、相机、充电宝' },
    note: {
      en: 'All lodging has 24h electricity. Bring cables and spare batteries.',
      zh: '沿途住宿点均全天有电。带好数据线和备用电池。',
    },
    category: 'gear',
  },
  {
    id: 'backpack',
    name: { en: '25L daypack with hip belt', zh: '25升背包（带腰带）' },
    note: {
      en: '25L is enough. Hip belt and chest strap transfer weight off shoulders.',
      zh: '25升足够，有腰带胸带可减轻肩压。',
    },
    category: 'gear',
  },
  {
    id: 'sunscreen',
    name: { en: 'High SPF sunscreen', zh: '高倍防晒霜' },
    note: {
      en: 'UV at 5000m+ is extreme. Reapply frequently, especially near snow at the pass.',
      zh: '5000米以上紫外线极强。垭口附近雪面反射更强烈，务必勤补。',
    },
    category: 'gear',
  },

  // === FOOD ===
  {
    id: 'snacks',
    name: { en: 'High-calorie snacks (~500g)', zh: '高热量干粮（约500克）' },
    note: {
      en: '≥2000kJ/100g: nuts, chocolate, energy bars/gels, compressed biscuits. ~500g per person for the whole trip. Avoid strong flavors — they cause thirst.',
      zh: '≥2000千焦/100克：坚果、巧克力、能量胶/棒、压缩饼干。全程每人500克足够，味道不宜过重以免口渴。',
    },
    category: 'food',
  },

  // === OPTIONAL (before June) ===
  {
    id: 'gaiters',
    name: { en: 'Gaiters', zh: '雪套' },
    note: {
      en: 'Or substitute with plastic bags + packing tape — local rescue workers do this too. Tarchen shops sell simple ones.',
      zh: '可用大塑料袋+封箱胶带替代，当地救援人员也是这样做的。塔钦大超市有简易雪套出售。',
    },
    category: 'optional',
  },
  {
    id: 'crampons',
    name: { en: 'Simple crampons', zh: '简易冰爪' },
    note: {
      en: 'Or tie a thick sock crosswise under each boot for grip. Tarchen shops sell basic ones.',
      zh: '可带一双长厚袜子，横着绑鞋底可增加摩擦防滑。塔钦大超市有简易冰爪出售。',
    },
    category: 'optional',
  },

  // === USUALLY NOT NEEDED ===
  {
    id: 'tent',
    name: { en: 'Tent', zh: '帐篷' },
    note: {
      en: 'Lodging at every supply point along the trail. Not needed.',
      zh: '沿途N多补给点可住宿，不必带。',
    },
    category: 'skip',
  },
  {
    id: 'sleeping-bag',
    name: { en: 'Sleeping bag', zh: '常规睡袋' },
    note: {
      en: 'Bedding provided everywhere (blankets + quilts, some have electric blankets). Bring a liner if hygiene-sensitive.',
      zh: '沿途均配被子+毯子，部分有电热毯。高卫生要求者可带轻便隔离睡袋。',
    },
    category: 'skip',
  },

  // === DOCUMENTS ===
  {
    id: 'border-permit',
    name: { en: 'Border permit', zh: '边防证' },
    note: {
      en: 'Electronic since 2026-04-15. Mainland/HK/Macau: apply via "移民局12367" app, WeChat, or Alipay mini-program.',
      zh: '2026年4月15日起启用电子边防证。大陆/港澳居民可通过"移民局12367"APP或微信/支付宝小程序在线申请。',
    },
    category: 'documents',
  },
  {
    id: 'entry-permit',
    name: { en: 'Tibet entry permit (foreign passport)', zh: '入藏函（台湾及外国护照）' },
    note: {
      en: 'Required for Taiwan and foreign passport holders. Must join a guided tour with a licensed guide.',
      zh: '台湾及外国护照持有者必须先取得入藏函，且参加配导游的旅行团。',
    },
    category: 'documents',
  },
];
