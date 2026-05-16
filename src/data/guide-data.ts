import fs from 'fs';
import path from 'path';

interface WeatherMonth {
  month: number;
  raw_spec: string;
  description: string;
}

interface GearItem {
  item: string;
  notes: string;
}

interface GuideJSON {
  categorizedData: {
    weatherByMonth: WeatherMonth[];
    gear: GearItem[];
    fees?: { item: string; amount: string; notes: string }[];
    contacts?: { name: string; phone: string; notes: string }[];
    supplyPoints?: { name: string; stage: number; services: string }[];
  };
}

export function loadGuideData() {
  const filePath = path.join(process.cwd(), 'doc', 'kailash_pilgrimage_guide.json');
  const data: GuideJSON = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return data.categorizedData;
}
