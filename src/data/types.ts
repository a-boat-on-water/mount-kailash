/**
 * Shared TypeScript types for cleaned data files in /doc.
 *
 * Loaders in this directory (supply-points.ts, fees.ts, extended-contacts.ts)
 * read JSON files from /doc and return data conforming to these interfaces.
 *
 * Naming convention:
 *   - Fields with `_zh` / `_en` / `_tibetan` suffix follow the SacredSite pattern.
 *   - Fields shaped as `{ en, zh }` follow the koraRoute / contacts pattern.
 *   - Both patterns coexist in the codebase for historical reasons; new code
 *     should prefer `_zh` suffix for primary content (matches data file fields)
 *     and `{ en, zh }` only for UI-facing labels.
 */

// ============================================================================
// Supply Points
// ============================================================================

export type FacilityType =
  | 'new_panel_building'
  | 'old_panel_building'
  | 'stone_house'
  | 'tent'
  | 'large_hotel';

export interface PhoneEntry {
  label: string;
  number: string;
  verified: string; // ISO date prefix, e.g. "2026-04"
}

export interface GpsCoord {
  lat: number;
  lng: number;
}

export interface SupplyPoint {
  id: string;
  order: number;
  name_zh: string;
  name_tibetan: string;
  name_pinyin: string;
  name_en_meaning: string;
  stage: 1 | 2 | 3;
  km_from_tarchen: number;
  km_to_tarchen?: number; // only set when relevant (e.g., the last point)
  elevation_m: number;
  elevation_m_hotel?: number;
  elevation_m_monastery?: number;
  gps: GpsCoord | null;
  facility_types: FacilityType[];
  has_medical_post: boolean;
  has_electric_blanket: boolean;
  has_dining: boolean;
  has_lodging: boolean;
  dining_options_zh: string;
  lodging_options_zh: string;
  phones: PhoneEntry[];
  notes_zh: string;
  view_quality_zh?: string;
  key_role_zh?: string;
  paired_with?: string; // id of related supply point (e.g. Gangja <-> Drira Phug)
  nearby_landmarks_zh: string[];
}

export interface SupplyPointsMeta {
  schema_version: string;
  description: string;
  stage_legend: Record<string, string>;
  facility_types: FacilityType[];
  last_verified: string;
  field_notes: string;
  total_fixed_supply_points: number;
  naming_note: string;
}

export interface SupplyPointsDispatchPhone {
  number: string;
  verified: string;
  note?: string;
}

// ============================================================================
// Fees
// ============================================================================

export interface PurchaseLocation {
  name_zh: string;
  phone: string;
}

export interface FeeItem {
  id: string;
  label_zh: string;
  label_en: string;
  /** Single price in CNY. Mutually exclusive with price_cny_range / price_cny_from / price_cny_up_to / price_cny_around. */
  price_cny?: number | null;
  /** Range [min, max] when price varies. */
  price_cny_range?: [number, number];
  /** Used when only a minimum is known (e.g., "from 35元"). */
  price_cny_from?: number;
  /** Used when only an upper bound is known (e.g., "up to 1000元"). */
  price_cny_up_to?: number;
  /** Used for approximate single price (e.g., "around 100元"). */
  price_cny_around?: number;
  price_cny_original?: number; // for 2026 promo pricing
  price_cny_per_day?: number; // for per-day breakdowns of horse/porter
  extension_cny_per_day?: number; // additional day rate
  unit: string;
  valid_days?: number;
  notes_zh?: string;
  warning_zh?: string;
  applies_to?: string;
  source_page?: number;
  purchase_locations?: PurchaseLocation[];
  phones?: string[];
  phone?: string;
  departure_zh?: string;
  arrival_zh?: string;
  purchase_zh?: string;
  duration_hours?: number;
  frequency_zh?: string;
  frequency_2026_zh?: string;
  distance_to_tarchen_km?: number;
  ridable_distance_km?: number;
  ride_route_zh?: string;
}

export interface FeeCategory {
  category: string;
  category_en: string;
  _note?: string;
  items: FeeItem[];
  booking_phones?: { label: string; number: string }[];
  wait_time_note_zh?: string;
  general_note_zh?: string;
}

export interface FeesMeta {
  schema_version: string;
  description: string;
  currency: string;
  last_verified: string;
  year_specific_note: string;
}

// ============================================================================
// Extended Contacts
// ============================================================================

export interface ExtendedContact {
  id: string;
  label_zh: string;
  label_en: string;
  phone?: string | null;
  phones?: string[];
  wechat_id?: string;
  wechat_official?: string;
  email?: string;
  zhihu?: string;
  platform?: string;
  address_zh?: string;
  location_zh?: string;
  stage?: 1 | 2 | 3;
  purpose_zh: string;
  phone_note_zh?: string;
  view_note_zh?: string;
  warning_zh?: string;
  verified: string;
}

export interface ContactCategoryGroup {
  category: string;
  category_en: string;
  priority?: 'highest' | 'high' | 'normal';
  contacts: ExtendedContact[];
  _app_note_zh?: string;
  supply_route_medical_posts_zh?: string;
}

export interface ContactsMeta {
  schema_version: string;
  description: string;
  last_verified: string;
  field_notes: string;
}

export interface ContactsWarnings {
  private_car_warning_zh?: string;
  scenic_regulation_zh?: string;
  verification_disclaimer_zh?: string;
}
