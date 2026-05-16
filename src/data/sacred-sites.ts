export interface SacredSite {
  id: string;
  name_zh: string;
  name_tibetan: string;
  stage: number;
  elevation_m: number | null;
  description: string;
  description_full?: string;
  source_page: number;
  has_legend: boolean;
  has_ritual: boolean;
  legend: string | null;
  ritual_practices: string | null;
}

export function loadSacredSites(): SacredSite[] {
  // Server-only: loads JSON at build time
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(process.cwd(), 'doc', 'kailash_pilgrimage_guide.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return data.categorizedData.sacredSites;
}
