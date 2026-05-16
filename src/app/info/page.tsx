import { loadGuideData } from "@/data/guide-data";
import { koraRoute } from "@/data/route";
import InfoContent from "./InfoContent";

export default function InfoPage() {
  const guideData = loadGuideData();
  const coordinates = koraRoute.geometry.coordinates;

  return (
    <InfoContent
      weatherByMonth={guideData.weatherByMonth}
      gear={guideData.gear}
      coordinates={coordinates}
    />
  );
}
