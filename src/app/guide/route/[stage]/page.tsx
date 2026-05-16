import { stages } from "@/data/guide/stages";
import StageContent from "./StageContent";

export function generateStaticParams() {
  return stages.map((s) => ({ stage: String(s.id) }));
}

export default async function StagePage({ params }: { params: Promise<{ stage: string }> }) {
  const { stage: stageParam } = await params;
  const stageId = parseInt(stageParam, 10);
  const stage = stages.find((s) => s.id === stageId);

  if (!stage) {
    return <div className="px-4 pt-6">Stage not found</div>;
  }

  return <StageContent stage={stage} />;
}
