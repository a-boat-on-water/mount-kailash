import fs from "fs";
import path from "path";
import MarkdownPage from "@/components/MarkdownPage";

export default function RitualsPage() {
  const content = fs.readFileSync(
    path.join(process.cwd(), "assets-source", "markdown", "rituals.md"),
    "utf-8"
  );
  return <MarkdownPage titleKey="rituals" content={content} backHref="/guide" />;
}
