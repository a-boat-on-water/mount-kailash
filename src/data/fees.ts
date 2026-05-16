import fs from 'fs';
import path from 'path';
import type { FeeCategory, FeeItem, FeesMeta } from './types';

/**
 * Shape of /doc/fees-cleaned.json.
 * Loaded server-side only.
 */
interface FeesFile {
  _meta: FeesMeta;
  categories: FeeCategory[];
}

let cached: FeesFile | null = null;

function readFile(): FeesFile {
  if (cached) return cached;
  const filePath = path.join(process.cwd(), 'doc', 'fees-cleaned.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  cached = JSON.parse(raw) as FeesFile;
  return cached;
}

/**
 * Load all fee categories with their items.
 * Categories include: 门票, 景区接驳车, 转运车, 背夫与马匹服务, 长途交通,
 * 塔钦住宿, 塔钦餐饮, 装备购置.
 */
export function loadFeeCategories(): FeeCategory[] {
  return readFile().categories;
}

/**
 * Load a single fee category by its Chinese name (e.g. "门票").
 */
export function findFeeCategory(category_zh: string): FeeCategory | undefined {
  return readFile().categories.find((c) => c.category === category_zh);
}

/**
 * Flatten all fee items across categories. Useful for a search index
 * or a "show me everything I'll pay for" overview.
 */
export function loadAllFeeItems(): (FeeItem & { category: string })[] {
  return readFile().categories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );
}

/**
 * Find a single fee item by id (e.g. "fee-ticket-kailash").
 */
export function findFeeItem(id: string): FeeItem | undefined {
  for (const cat of readFile().categories) {
    const item = cat.items.find((i) => i.id === id);
    if (item) return item;
  }
  return undefined;
}

/**
 * Metadata about the fees dataset (currency, year-specific notes, etc).
 */
export function loadFeesMeta(): FeesMeta {
  return readFile()._meta;
}

/**
 * Helper to render a fee as a human-readable price string.
 * Handles the various price shapes (single / range / from / up_to / around).
 *
 * @example
 *   formatFeePrice(item) // "¥150 / per person"
 *   formatFeePrice(item) // "¥500-¥600 / per night"
 *   formatFeePrice(item) // "From ¥35 / per dish"
 */
export function formatFeePrice(item: FeeItem): string {
  const unit = item.unit ? ` / ${item.unit}` : '';
  if (item.price_cny != null) return `¥${item.price_cny}${unit}`;
  if (item.price_cny_range)
    return `¥${item.price_cny_range[0]}–¥${item.price_cny_range[1]}${unit}`;
  if (item.price_cny_from != null) return `From ¥${item.price_cny_from}${unit}`;
  if (item.price_cny_up_to != null)
    return `Up to ¥${item.price_cny_up_to}${unit}`;
  if (item.price_cny_around != null)
    return `~¥${item.price_cny_around}${unit}`;
  return 'Price TBC';
}
