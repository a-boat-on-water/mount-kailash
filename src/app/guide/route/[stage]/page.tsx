import { stages } from "@/data/guide/stages";
import { chapter8, chapter9, chapter10 } from "@/data/guide/chapters";
import type { GuideChapter } from "@/data/guide/types";
import StageContent from "./StageContent";

const chapterMap: Record<number, GuideChapter> = {
  1: chapter8,
  2: chapter9,
  3: chapter10,
};

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

  const chapter = chapterMap[stageId];

  return <StageContent stage={stage} chapter={chapter} />;
}
