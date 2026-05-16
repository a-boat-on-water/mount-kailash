"use client";

import { useState, useEffect, useCallback } from "react";
import { Geolocation } from "@capacitor/geolocation";
import { waypoints } from "@/data/waypoints";

interface Position {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number;
}

interface NearestWaypoint {
  id: string;
  name: { en: string; zh: string };
  distance: number; // km
  bearing: number; // degrees
}

function haversineDistance(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function bearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const y = Math.sin(dLon) * Math.cos((lat2 * Math.PI) / 180);
  const x =
    Math.cos((lat1 * Math.PI) / 180) * Math.sin((lat2 * Math.PI) / 180) -
    Math.sin((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.cos(dLon);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

export function useGeolocation() {
  const [position, setPosition] = useState<Position | null>(null);
  const [nearest, setNearest] = useState<NearestWaypoint | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [watching, setWatching] = useState(false);
  const [watchId, setWatchId] = useState<string | null>(null);

  const findNearest = useCallback((lat: number, lon: number) => {
    let minDist = Infinity;
    let closest: NearestWaypoint | null = null;

    for (const wp of waypoints) {
      const [wpLon, wpLat] = wp.coordinate;
      const dist = haversineDistance(lat, lon, wpLat, wpLon);
      if (dist < minDist) {
        minDist = dist;
        closest = {
          id: wp.id,
          name: wp.name,
          distance: Math.round(dist * 10) / 10,
          bearing: Math.round(bearing(lat, lon, wpLat, wpLon)),
        };
      }
    }

    setNearest(closest);
  }, []);

  const startWatching = useCallback(async () => {
    try {
      const perm = await Geolocation.checkPermissions();
      if (perm.location === "denied") {
        const req = await Geolocation.requestPermissions();
        if (req.location === "denied") {
          setError("Location permission denied");
          return;
        }
      }

      const id = await Geolocation.watchPosition(
        { enableHighAccuracy: true, timeout: 10000 },
        (pos, err) => {
          if (err) {
            setError(err.message);
            return;
          }
          if (pos) {
            const p: Position = {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              altitude: pos.coords.altitude,
              accuracy: pos.coords.accuracy,
            };
            setPosition(p);
            setError(null);
            findNearest(p.latitude, p.longitude);
          }
        }
      );

      setWatchId(id);
      setWatching(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Geolocation unavailable");
    }
  }, [findNearest]);

  const stopWatching = useCallback(async () => {
    if (watchId) {
      await Geolocation.clearWatch({ id: watchId });
      setWatchId(null);
      setWatching(false);
    }
  }, [watchId]);

  useEffect(() => {
    return () => {
      if (watchId) {
        Geolocation.clearWatch({ id: watchId });
      }
    };
  }, [watchId]);

  return { position, nearest, error, watching, startWatching, stopWatching };
}
