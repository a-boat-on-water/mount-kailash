import fs from "fs";
import path from "path";
import MarkdownPage from "@/components/MarkdownPage";

export default function GlossaryPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "doc", "markdown", "glossary.md"),
    "utf-8"
  );
  return <MarkdownPage titleKey="glossary" content={content} />;
}
