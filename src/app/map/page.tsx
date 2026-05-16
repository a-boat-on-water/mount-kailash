"use client";

import dynamic from "next/dynamic";
import PrayerWheelLoader from "@/components/PrayerWheelLoader";
import { DistanceOverlay } from "@/components/DistanceOverlay";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <PrayerWheelLoader text="Loading map..." />,
});

export default function MapPage() {
  return (
    <div className="fixed inset-0 pb-20">
      <Map />
      <DistanceOverlay />
    </div>
  );
}
