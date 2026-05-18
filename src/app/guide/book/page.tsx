import { getAllChapters, categoryLabels } from "@/data/guide-chapters";
import BookContent from "./BookContent";

export default function BookPage() {
  const chapters = getAllChapters();
  return <BookContent chapters={chapters} categoryLabels={categoryLabels} />;
}
