import fs from 'fs';
import path from 'path';
import type {
  SupplyPoint,
  SupplyPointsMeta,
  SupplyPointsDispatchPhone,
} from './types';

/**
 * Shape of /doc/supply-points-cleaned.json.
 * Loaded server-side at build/request time only.
 */
interface SupplyPointsFile {
  _meta: SupplyPointsMeta;
  supplyPoints: SupplyPoint[];
  _temporary_supply_points_note: string;
  _dispatch_phones: Record<string, SupplyPointsDispatchPhone>;
}

/**
 * Cached read — Next.js may re-import this module across requests.
 */
let cached: SupplyPointsFile | null = null;

function readFile(): SupplyPointsFile {
  if (cached) return cached;
  const filePath = path.join(process.cwd(), 'doc', 'supply-points-cleaned.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  cached = JSON.parse(raw) as SupplyPointsFile;
  return cached;
}

/**
 * Load all supply points along the kora route, in route order.
 *
 * Note: this returns 12 entries even though the original guide counts 11 —
 * Gangja and Drira Phug are listed separately because pilgrims must choose
 * one as their Day 1 night stop, and they have very different views & access.
 * See `supplyPoint.paired_with` to traverse the relationship.
 */
export function loadSupplyPoints(): SupplyPoint[] {
  return readFile().supplyPoints;
}

/**
 * Load supply points for a specific stage of the kora.
 */
export function loadSupplyPointsByStage(stage: 1 | 2 | 3): SupplyPoint[] {
  return readFile().supplyPoints.filter((sp) => sp.stage === stage);
}

/**
 * Load only supply points that have a medical post (制氧机/AED/常用药品).
 * Useful for the "where can I get help" filter view.
 */
export function loadMedicalSupplyPoints(): SupplyPoint[] {
  return readFile().supplyPoints.filter((sp) => sp.has_medical_post);
}

/**
 * Find a single supply point by id.
 */
export function findSupplyPoint(id: string): SupplyPoint | undefined {
  return readFile().supplyPoints.find((sp) => sp.id === id);
}

/**
 * Find the supply point paired with the given one (e.g. Gangja ↔ Drira Phug).
 */
export function findPairedSupplyPoint(sp: SupplyPoint): SupplyPoint | undefined {
  if (!sp.paired_with) return undefined;
  return findSupplyPoint(sp.paired_with);
}

/**
 * Metadata about the supply points dataset (schema version, last verified, etc).
 */
export function loadSupplyPointsMeta(): SupplyPointsMeta {
  return readFile()._meta;
}

/**
 * Note about temporary (seasonal) supply points not listed individually.
 */
export function loadTemporarySupplyPointsNote(): string {
  return readFile()._temporary_supply_points_note;
}

/**
 * Emergency rescue / scenic-area dispatch phone numbers.
 * Returns a map keyed by purpose (e.g. "rescue_dispatch_1").
 */
export function loadDispatchPhones(): Record<string, SupplyPointsDispatchPhone> {
  return readFile()._dispatch_phones;
}
