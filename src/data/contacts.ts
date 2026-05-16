export interface Contact {
  id: string;
  label: { en: string; zh: string };
  phones: string[];
  category: 'emergency' | 'transport' | 'accommodation' | 'services';
  verified?: string;
}

export const contacts: Contact[] = [
  // Emergency
  {
    id: 'hotline',
    label: { en: 'Scenic Area Hotline', zh: '冈仁波齐景区服务热线' },
    phones: ['400-6666-712'],
    category: 'emergency',
    verified: '2026-04',
  },

  // Services
  {
    id: 'porter',
    label: { en: 'Porter Booking', zh: '背夫联系预约' },
    phones: ['13618975212', '18908972227'],
    category: 'services',
    verified: '2026-04',
  },
  {
    id: 'horse-yak',
    label: { en: 'Horse / Yak Booking', zh: '马匹/牦牛联系预约' },
    phones: ['13638976023', '17708978855'],
    category: 'services',
    verified: '2026-04',
  },

  // Transport
  {
    id: 'shuttle',
    label: { en: 'Kora Shuttle Service', zh: '转山有偿转运车' },
    phones: ['0897-2607026', '0897-2601374'],
    category: 'transport',
    verified: '2026-04',
  },
  {
    id: 'airport-shuttle',
    label: { en: 'Airport Shuttle', zh: '机场班车' },
    phones: ['18989975777', '13618975655'],
    category: 'transport',
    verified: '2026-04',
  },

  // Accommodation
  {
    id: 'kangka-guesthouse',
    label: { en: 'Kangka Guesthouse (Day 1)', zh: '岗加香客宾馆（第一天住宿）' },
    phones: ['17308972225'],
    category: 'accommodation',
    verified: '2026-04',
  },
  {
    id: 'zutulpuk-guesthouse',
    label: { en: 'Zutul Puk Guesthouse (Day 2)', zh: '尊珠普香客宾馆（第二天住宿）' },
    phones: ['18308078910'],
    category: 'accommodation',
    verified: '2026-04',
  },
  {
    id: 'chuku-bridge-lodging',
    label: { en: 'Chuku Bridge Lodging & Meals', zh: '曲古桥补给点住宿餐饮' },
    phones: ['13658978885'],
    category: 'accommodation',
    verified: '2026-04',
  },
];

export const contactCategories = {
  emergency: { en: 'Emergency', zh: '紧急联系' },
  services: { en: 'Services', zh: '服务预约' },
  transport: { en: 'Transport', zh: '交通出行' },
  accommodation: { en: 'Accommodation', zh: '住宿餐饮' },
} as const;
