import fs from "fs";
import path from "path";
import MarkdownPage from "@/components/MarkdownPage";

export default function LegendsPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "doc", "markdown", "legends.md"),
    "utf-8"
  );
  return <MarkdownPage titleKey="legends" content={content} />;
}
