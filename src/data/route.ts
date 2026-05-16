import type { Waypoint } from './waypoints';
import { waypoints } from './waypoints';

export interface KoraRoute {
  type: 'Feature';
  geometry: {
    type: 'LineString';
    coordinates: [number, number, number][]; // [longitude, latitude, elevation]
  };
  properties: {
    name: { en: string; zh: string };
    totalDistance: number; // km
    highestPoint: number; // meters
    stages: number;
  };
}

/**
 * GeoJSON LineString representing the Mount Kailash kora route.
 * Coordinates include intermediate points to better approximate
 * the actual trail between waypoints.
 */
export const koraRoute: KoraRoute = {
  type: 'Feature',
  geometry: {
    type: 'LineString',
    coordinates: [
      // Stage 1: Darchen to Drirapuk (south to west to north)
      [81.2856, 30.9978, 4675], // Darchen
      [81.278, 31.002, 4700], // trail heading west
      [81.27, 31.008, 4720], // approaching Tarboche
      [81.265, 31.016, 4750], // Tarboche flagpole
      [81.26, 31.024, 4780], // heading north
      [81.258, 31.035, 4820], // Kangkyam
      [81.262, 31.045, 4920], // Chuku Monastery
      [81.265, 31.055, 4950], // northwest valley
      [81.272, 31.065, 4980], // turning northeast
      [81.28, 31.072, 5000], // north valley approach
      [81.29, 31.078, 5030], // nearing Drirapuk
      [81.298, 31.082, 5060], // final approach
      [81.305, 31.085, 5080], // Drirapuk Monastery

      // Stage 2: Drirapuk to Zutul Puk (north face, over pass, down east)
      [81.31, 31.087, 5100], // leaving Drirapuk
      [81.315, 31.088, 5210], // Sky Burial Site
      [81.32, 31.089, 5270], // ascending
      [81.325, 31.09, 5330], // Shiva-tshal
      [81.33, 31.089, 5400], // steep ascent
      [81.335, 31.087, 5480], // approaching pass
      [81.34, 31.085, 5540], // near pass
      [81.345, 31.082, 5590], // final push
      [81.35, 31.08, 5630], // Dolma La Pass
      [81.353, 31.078, 5600], // initial descent
      [81.355, 31.075, 5560], // Gauri Kund
      [81.357, 31.07, 5450], // descending
      [81.358, 31.065, 5350], // steep descent
      [81.36, 31.06, 5200], // Lham Chu Khir campsite
      [81.358, 31.055, 5050], // continuing south
      [81.355, 31.052, 4920], // valley floor
      [81.35, 31.05, 4820], // Zutul Puk Monastery

      // Stage 3: Zutul Puk back to Darchen (south through eastern valley)
      [81.347, 31.045, 4850], // leaving Zutul Puk
      [81.344, 31.04, 4900], // ascending slightly
      [81.34, 31.035, 4980], // Gyangdrak Monastery area
      [81.335, 31.028, 4880], // descending
      [81.33, 31.022, 4800], // eastern valley
      [81.32, 31.02, 4750], // Eastern Valley viewpoint
      [81.312, 31.015, 4720], // continuing south
      [81.305, 31.01, 4700], // approaching Darchen
      [81.298, 31.005, 4690], // near town
      [81.29, 31.0, 4680], // outskirts
      [81.2856, 30.9978, 4675], // Darchen (return)
    ],
  },
  properties: {
    name: {
      en: 'Mount Kailash Kora (Circumambulation Route)',
      zh: '冈仁波齐转山路线',
    },
    totalDistance: 52,
    highestPoint: 5630,
    stages: 3,
  },
};

/**
 * Get waypoints for a specific stage of the kora.
 */
export function getWaypointsByStage(stage: 1 | 2 | 3): Waypoint[] {
  return waypoints.filter((w) => w.stage === stage);
}

/**
 * Get route coordinates for a specific stage.
 * Stage 1: indices 0-12 (Darchen to Drirapuk)
 * Stage 2: indices 12-26 (Drirapuk to Zutul Puk)
 * Stage 3: indices 26-end (Zutul Puk to Darchen)
 */
export function getRouteByStage(stage: 1 | 2 | 3): [number, number, number][] {
  const coords = koraRoute.geometry.coordinates;
  switch (stage) {
    case 1:
      return coords.slice(0, 13);
    case 2:
      return coords.slice(12, 27);
    case 3:
      return coords.slice(26);
  }
}
