import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { chapters } from "@/data/chapters";
import ChapterContent from "./ChapterContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return chapters.map((ch) => ({ slug: ch.slug }));
}

export default async function ChapterPage({ params }: PageProps) {
  const { slug } = await params;

  const chapter = chapters.find((ch) => ch.slug === slug);
  if (!chapter) notFound();

  const filePath = path.join(process.cwd(), "doc", "markdown", chapter.file);
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch {
    content = "Content not available.";
  }

  return <ChapterContent chapter={chapter} content={content} />;
}
