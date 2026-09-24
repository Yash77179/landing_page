import fs from "fs";
import path from "path";
import ClientInteractivity from "../components/ClientInteractivity";

export default function Home() {
  const filePath = path.join(process.cwd(), "src/content/page.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <ClientInteractivity />
    </>
  );
}
