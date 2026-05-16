import fs from 'fs';
import path from 'path';
import type {
  ContactCategoryGroup,
  ContactsMeta,
  ContactsWarnings,
  ExtendedContact,
} from './types';

/**
 * Extended, richer contacts loader backed by /doc/contacts-cleaned.json.
 *
 * This is a SIBLING to the existing `./contacts.ts` (which has 8 hand-curated
 * entries with bilingual {en, zh} labels). The dataset here has ~21 entries
 * with more metadata (address, purpose, location, warnings).
 *
 * Why two contact sources?
 *   - `contacts.ts` powers existing UI components (don't break them).
 *   - This file backs richer features like an Emergency Action Sheet,
 *     a per-supply-point phone listing, or a Tarchen Contacts directory.
 *
 * Migrate when ready — the IDs in both files are compatible (e.g. both have
 * a porter / horse / scenic-hotline entry).
 */
interface ContactsFile {
  _meta: ContactsMeta;
  categories: ContactCategoryGroup[];
  _warnings: ContactsWarnings;
}

let cached: ContactsFile | null = null;

function readFile(): ContactsFile {
  if (cached) return cached;
  const filePath = path.join(process.cwd(), 'doc', 'contacts-cleaned.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  cached = JSON.parse(raw) as ContactsFile;
  return cached;
}

/**
 * Load all contact category groups.
 * Categories: 紧急救援, 医疗, 塔钦交通(进出), 门票售票点, 背夫与马匹,
 * 沿途主要宾馆, 本地资讯.
 */
export function loadExtendedContactCategories(): ContactCategoryGroup[] {
  return readFile().categories;
}

/**
 * Flatten all contacts across categories. Useful for search and the
 * "show all phone numbers" overview screen.
 */
export function loadAllExtendedContacts(): (ExtendedContact & {
  category: string;
})[] {
  return readFile().categories.flatMap((cat) =>
    cat.contacts.map((c) => ({ ...c, category: cat.category }))
  );
}

/**
 * Find a single contact by id.
 */
export function findExtendedContact(id: string): ExtendedContact | undefined {
  for (const cat of readFile().categories) {
    const found = cat.contacts.find((c) => c.id === id);
    if (found) return found;
  }
  return undefined;
}

/**
 * Find contacts for a specific stage (Day 1 / 2 / 3 hotels along the route).
 */
export function loadContactsByStage(stage: 1 | 2 | 3): ExtendedContact[] {
  return loadAllExtendedContacts().filter((c) => c.stage === stage);
}

/**
 * Find all contacts in a given category by its Chinese name.
 */
export function findContactCategory(
  category_zh: string
): ContactCategoryGroup | undefined {
  return readFile().categories.find((c) => c.category === category_zh);
}

/**
 * Load only the highest-priority categories (紧急救援 + 医疗).
 * Use this to power an Emergency Action Sheet that surfaces critical
 * numbers within one tap.
 */
export function loadEmergencyContacts(): ExtendedContact[] {
  return readFile()
    .categories.filter((cat) => cat.priority === 'highest')
    .flatMap((cat) => cat.contacts);
}

/**
 * Warnings & disclaimers about contact reliability (private car warning,
 * scenic-area regulations, verification disclaimer).
 */
export function loadContactsWarnings(): ContactsWarnings {
  return readFile()._warnings;
}

/**
 * Metadata about the contacts dataset.
 */
export function loadExtendedContactsMeta(): ContactsMeta {
  return readFile()._meta;
}

/**
 * Convenience: return all phone numbers a contact exposes (handles both
 * single `phone` and multi `phones[]` shapes).
 */
export function getContactPhones(c: ExtendedContact): string[] {
  if (c.phones && c.phones.length > 0) return c.phones;
  if (c.phone) return [c.phone];
  return [];
}
