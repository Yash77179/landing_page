import fs from "fs";
import path from "path";

export default function Home() {
  const htmlPath = path.join(process.cwd(), "src/content/page-content.html");
  const html = fs.readFileSync(htmlPath, "utf8");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      suppressHydrationWarning
    />
  );
}
