import { loadSacredSites } from "@/data/sacred-sites";
import SacredSitesList from "@/app/guide/sacred-sites/SacredSitesList";

export default function SacredSitesPage() {
  const sites = loadSacredSites();
  return <SacredSitesList sites={sites} />;
}
