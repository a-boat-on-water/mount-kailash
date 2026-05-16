import { koraRoute } from "@/data/route";
import RouteContent from "./RouteContent";

export default function RoutePage() {
  const coordinates = koraRoute.geometry.coordinates;
  return <RouteContent coordinates={coordinates} />;
}
