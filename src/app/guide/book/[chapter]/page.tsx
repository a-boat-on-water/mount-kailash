import { redirect } from "next/navigation";
import { getAllChapters, getChapter } from "@/data/guide-chapters";
import ChapterPage from "./ChapterPage";

export function generateStaticParams() {
  return getAllChapters()
    .filter((ch) => ch.type === "flat")
    .map((ch) => ({ chapter: String(ch.number) }));
}

export default async function BookChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterParam } = await params;
  const num = parseInt(chapterParam, 10);
  const chapter = getChapter(num);

  if (!chapter) {
    redirect("/guide/book");
  }

  // Stage chapters redirect to journey pages
  if (chapter.type === "stage") {
    const stageNum = chapter.number - 7;
    redirect(`/journey/${stageNum}`);
  }

  return <ChapterPage chapter={chapter} />;
}
