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
      [81.2856, 30.9978, 4690], // Darchen
      [81.278, 31.002, 4720], // trail heading west
      [81.27, 31.008, 4780], // approaching first prostration
      [81.265, 31.016, 4760], // Tarboche flagpole
      [81.26, 31.024, 4800], // heading north
      [81.258, 31.035, 4830], // Chuku Bridge supply
      [81.262, 31.045, 4870], // Chuku Monastery
      [81.265, 31.055, 4900], // Second Prostration Point
      [81.272, 31.065, 4900], // Hayagriva Station
      [81.28, 31.072, 4950], // north valley approach
      [81.29, 31.078, 5000], // nearing Drirapuk
      [81.298, 31.082, 5040], // final approach
      [81.305, 31.085, 5085], // Drirapuk Monastery

      // Stage 2: Drirapuk to Zutul Puk (north face, over pass, down east)
      [81.31, 31.087, 5120], // leaving Drirapuk
      [81.315, 31.088, 5290], // Sky Burial W. Supply
      [81.32, 31.089, 5330], // ascending
      [81.325, 31.09, 5400], // Shiva-tshal
      [81.33, 31.089, 5450], // steep ascent
      [81.335, 31.087, 5480], // approaching pass
      [81.34, 31.085, 5550], // near pass
      [81.345, 31.082, 5600], // final push
      [81.35, 31.08, 5650], // Dolma La Pass
      [81.353, 31.078, 5610], // initial descent
      [81.355, 31.075, 5560], // Gauri Kund
      [81.357, 31.07, 5450], // descending
      [81.358, 31.065, 5350], // steep descent
      [81.36, 31.06, 5240], // Akshobhya Supply
      [81.358, 31.055, 5050], // continuing south
      [81.355, 31.052, 4970], // Medicine Buddha Valley
      [81.35, 31.05, 4910], // Zutul Puk Monastery

      // Stage 3: Zutul Puk back to Darchen (south through eastern valley)
      [81.347, 31.045, 4870], // leaving Zutul Puk
      [81.344, 31.04, 4850], // Government Teahouse supply
      [81.34, 31.035, 4830], // descending
      [81.335, 31.028, 4810], // descending
      [81.33, 31.022, 4780], // eastern valley
      [81.32, 31.02, 4750], // Fourth Prostration Point
      [81.312, 31.015, 4730], // continuing south
      [81.305, 31.01, 4830], // Dzongdui supply
      [81.298, 31.005, 4760], // near town
      [81.29, 31.0, 4720], // outskirts
      [81.2856, 30.9978, 4690], // Darchen (return)
    ],
  },
  properties: {
    name: {
      en: 'Mount Kailash Kora (Circumambulation Route)',
      zh: '冈仁波齐转山路线',
    },
    totalDistance: 52,
    highestPoint: 5650,
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
