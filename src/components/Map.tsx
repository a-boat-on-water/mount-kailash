"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Protocol } from "pmtiles";
import { waypoints, routeSegments } from "@/data/waypoints";
import { koraRoute } from "@/data/route";
import { photoPoints } from "@/data/photoPoints";
import { useLanguage } from "@/contexts/LanguageContext";

const KAILASH_CENTER: [number, number] = [81.3119, 31.067];
const INITIAL_ZOOM = 11.5;
const PMTILES_URL = "/tiles/kailash.pmtiles";

// Stage colors matching the reference map
const stageColors = {
  1: "#2563EB", // blue (Stage 1)
  2: "#DC2626", // red (Stage 2)
  3: "#16A34A", // green (Stage 3)
};

const typeIcons: Record<string, string> = {
  monastery: "🏛",
  pass: "⛰",
  campsite: "🏕",
  viewpoint: "👁",
  sacred: "🙏",
  village: "🏘",
  lake: "💧",
  landmark: "📍",
  supply: "🎒",
  medical: "🏥",
};

function formatDurationEn(min: number | null): string {
  if (!min) return '';
  const hours = Math.floor(min / 60);
  const mins = min % 60;
  if (hours > 0 && mins > 0) return `${hours}h ${mins}min`;
  if (hours > 0) return `${hours === 1 ? '1 hr' : `${hours} hrs`}`;
  return `${mins} min`;
}

async function hasPMTiles(): Promise<boolean> {
  try {
    const res = await fetch(PMTILES_URL, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
}

function getOnlineStyle(): maplibregl.StyleSpecification {
  return {
    version: 8,
    sources: {
      satellite: {
        type: "raster",
        tiles: [
          "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        ],
        tileSize: 256,
        attribution: "&copy; Esri, Maxar, Earthstar Geographics",
        maxzoom: 18,
      },
    },
    layers: [{ id: "satellite", type: "raster", source: "satellite" }],
  };
}

function getOfflineStyle(): maplibregl.StyleSpecification {
  return {
    version: 8,
    sources: {
      kailash: {
        type: "vector",
        url: `pmtiles://${PMTILES_URL}`,
        attribution: "&copy; OpenStreetMap contributors",
      },
    },
    layers: [
      { id: "background", type: "background", paint: { "background-color": "#F0ECE6" } },
      { id: "landcover", type: "fill", source: "kailash", "source-layer": "landcover", paint: { "fill-color": "#E8DFD3", "fill-opacity": 0.5 } },
      { id: "water", type: "fill", source: "kailash", "source-layer": "water", paint: { "fill-color": "#A0C4D8" } },
      { id: "roads", type: "line", source: "kailash", "source-layer": "transportation", paint: { "line-color": "#D4C5B0", "line-width": 1 } },
      { id: "place-labels", type: "symbol", source: "kailash", "source-layer": "place", layout: { "text-field": "{name}", "text-size": 11 }, paint: { "text-color": "#5A4F48", "text-halo-color": "#FAF8F5", "text-halo-width": 1 } },
    ],
  };
}

function buildSegmentPopup(wp: typeof waypoints[0], lang: 'en' | 'zh'): string {
  const seg = wp.segment ? routeSegments.find((s) => s.id === wp.segment) : null;
  const segHtml = seg
    ? `<div style="margin-top:6px;padding-top:6px;border-top:1px solid #E8E2DA;">
        <p style="font-size:11px;color:#C2714F;font-weight:600;margin:0 0 2px;">
          ${seg.id}: ${seg.from[lang]} → ${seg.to[lang]}
        </p>
        <p style="font-size:10px;color:#9C9590;margin:0;">
          ${seg.distance}km · ${seg.terrain[lang]} · ${lang === 'en' ? formatDurationEn(seg.durationMin) : seg.duration}
          ${seg.elevationChange > 0 ? ` · ↑${seg.elevationChange}m` : seg.elevationChange < 0 ? ` · ↓${Math.abs(seg.elevationChange)}m` : ''}
        </p>
      </div>`
    : '';

  return `
    <div style="font-family:'DM Sans',sans-serif;padding:4px;max-width:240px;">
      <div style="display:flex;align-items:center;gap:4px;margin-bottom:2px;">
        <span style="font-size:14px;">${typeIcons[wp.type] || '📍'}</span>
        <p style="font-weight:600;font-size:14px;margin:0;color:#1C1917;">
          ${wp.name[lang]}
        </p>
      </div>
      <p style="font-size:11px;color:#9C9590;margin:0 0 4px;">
        ${wp.elevation}m · km ${wp.distanceFromStart} · Stage ${wp.stage}
      </p>
      <p style="font-size:12px;color:#5A4F48;margin:0;line-height:1.4;">
        ${wp.description[lang]}
      </p>
      ${segHtml}
    </div>
  `;
}

export default function Map() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const { lang } = useLanguage();
  const langRef = useRef(lang);
  langRef.current = lang;

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    const protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
    let cancelled = false;

    async function initMap() {
      if (cancelled || !mapContainer.current) return;

      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: getOnlineStyle(),
        center: KAILASH_CENTER,
        zoom: INITIAL_ZOOM,
        maxZoom: 16,
        minZoom: 8,
      });

      const m = map.current;
      m.addControl(new maplibregl.NavigationControl({ showCompass: true }), "top-right");
      m.addControl(new maplibregl.GeolocateControl({ positionOptions: { enableHighAccuracy: true }, trackUserLocation: true }), "top-right");

      m.on("load", () => {
        // === Route lines (colored by stage) ===
        const coords = koraRoute.geometry.coordinates;

        // Split route into stage segments based on known km markers
        // Stage 1: coords 0-12, Stage 2: coords 12-22, Stage 3: coords 22-end
        const stage1Coords = coords.slice(0, 13);
        const stage2Coords = coords.slice(12, 23);
        const stage3Coords = coords.slice(22);

        [
          { id: "stage-1", coords: stage1Coords, color: stageColors[1] },
          { id: "stage-2", coords: stage2Coords, color: stageColors[2] },
          { id: "stage-3", coords: stage3Coords, color: stageColors[3] },
        ].forEach(({ id, coords: c, color }) => {
          m.addSource(id, {
            type: "geojson",
            data: { type: "Feature", geometry: { type: "LineString", coordinates: c }, properties: {} },
          });
          m.addLayer({
            id: `${id}-line`,
            type: "line",
            source: id,
            layout: { "line-cap": "round", "line-join": "round" },
            paint: { "line-color": color, "line-width": 4, "line-opacity": 0.85 },
          });
        });

        // === Waypoint markers ===
        waypoints.forEach((wp) => {
          const color = stageColors[wp.stage];
          const isSupply = wp.type === 'supply' || wp.type === 'medical';
          const isKeyPoint = wp.type === 'pass' || wp.type === 'monastery' || wp.type === 'village';
          const size = isKeyPoint ? 20 : isSupply ? 16 : 14;

          const el = document.createElement("div");
          el.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: ${wp.segment ? color : isSupply ? '#F59E0B' : color};
            border: 2.5px solid white;
            box-shadow: 0 2px 6px rgba(0,0,0,0.35);
            cursor: pointer;
            transition: transform 0.15s;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: ${size < 16 ? 7 : 8}px;
          `;

          // Show segment label for waypoints that start a segment
          if (wp.segment) {
            el.style.borderRadius = '4px';
            el.style.width = 'auto';
            el.style.padding = '1px 4px';
            el.style.fontSize = '9px';
            el.style.fontWeight = '700';
            el.style.color = 'white';
            el.style.fontFamily = "'DM Sans', sans-serif";
            el.style.whiteSpace = 'nowrap';
            el.textContent = isSupply ? `${wp.segment} ★` : wp.segment;
          }


          const popup = new maplibregl.Popup({ offset: 14, maxWidth: "260px", closeButton: true, anchor: "bottom" })
            .setHTML(buildSegmentPopup(wp, langRef.current));

          new maplibregl.Marker({ element: el, anchor: "center" })
            .setLngLat(wp.coordinate)
            .setPopup(popup)
            .addTo(m);
        });

        // === Photo point markers ===
        const photoMarkers: maplibregl.Marker[] = [];
        const nonLinkedPhotos = photoPoints.filter((p) => !p.linkedWaypointId);
        nonLinkedPhotos.forEach((pp) => {
          const color = stageColors[pp.stage];
          const el = document.createElement("div");
          el.style.cssText = `
            width: 8px; height: 8px;
            transform: rotate(45deg);
            background: ${color};
            opacity: 0.7;
            border: 1.5px solid white;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
            cursor: pointer;
          `;

          const popup = new maplibregl.Popup({ offset: 10, maxWidth: "200px", closeButton: true, anchor: "bottom" })
            .setHTML(`
              <div style="font-family:'DM Sans',sans-serif;padding:2px;">
                <p style="font-weight:600;font-size:12px;margin:0;color:#1C1917;">${pp.id}</p>
                <p style="font-size:11px;color:#5A4F48;margin:2px 0 0;line-height:1.3;">
                  ${pp.name[langRef.current]}
                </p>
              </div>
            `);

          const marker = new maplibregl.Marker({ element: el, anchor: "center" })
            .setLngLat(pp.coordinate)
            .setPopup(popup)
            .addTo(m);
          photoMarkers.push(marker);
        });

        // === Legend overlay ===
        const l = langRef.current;
        const legend = document.createElement("div");
        legend.style.cssText = `
          position: absolute; top: 12px; left: 12px; z-index: 10;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
          border-radius: 10px; padding: 8px 10px; font-family: 'DM Sans', sans-serif;
          font-size: 10px; line-height: 1.6; box-shadow: 0 2px 8px rgba(0,0,0,0.12);
          border: 1px solid #E8E2DA;
        `;
        legend.innerHTML = `
          <div style="font-weight:600;margin-bottom:3px;font-size:11px;">${l === 'en' ? 'Kora Route' : '转山路线'}</div>
          <div><span style="display:inline-block;width:14px;height:3px;background:${stageColors[1]};border-radius:2px;vertical-align:middle;margin-right:4px;"></span>D1: ${l === 'en' ? 'Darchen→Drirapuk' : '塔钦→止热寺'} 20km</div>
          <div><span style="display:inline-block;width:14px;height:3px;background:${stageColors[2]};border-radius:2px;vertical-align:middle;margin-right:4px;"></span>D2: ${l === 'en' ? 'Drirapuk→Zutul Puk' : '止热寺→尊珠寺'} 20km</div>
          <div><span style="display:inline-block;width:14px;height:3px;background:${stageColors[3]};border-radius:2px;vertical-align:middle;margin-right:4px;"></span>D3: ${l === 'en' ? 'Zutul Puk→Darchen' : '尊珠寺→塔钦'} 11km</div>
          <div style="margin-top:3px;"><span style="display:inline-block;width:8px;height:8px;background:#F59E0B;border-radius:50%;border:1.5px solid white;vertical-align:middle;margin-right:4px;"></span>${l === 'en' ? 'Supply point' : '补给点'}</div>
          <div><span style="display:inline-block;width:8px;height:8px;transform:rotate(45deg);background:#666;opacity:0.7;border:1px solid white;vertical-align:middle;margin-right:4px;"></span>${l === 'en' ? 'Photo point' : '拍摄点'}</div>
        `;
        m.getContainer().appendChild(legend);
      });
    }

    initMap();

    return () => {
      cancelled = true;
      maplibregl.removeProtocol("pmtiles");
      map.current?.remove();
      map.current = null;
    };
  }, []);

  return <div ref={mapContainer} className="w-full h-full" />;
}
