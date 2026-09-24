import type { Metadata } from "next";
import "./globals.css";
import "./coderabbit.css";

export const metadata: Metadata = {
  title: "AI Code Reviews | CodeRabbit | Try for Free.",
  description: "AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      data-theme="dark" 
      data-scroll-behavior="smooth" 
      className="geist_89c9bedd-module__2-mPEG__variable hack_8e460d3c-module__nIrdQq__variable lato_c725fdf9-module__2MLKnG__variable relative scroll-pt-32 scroll-smooth motion-reduce:scroll-auto dark"
    >
      <body className="antialiased bg-cream-300 dark:bg-neutral-1000 font-sans text-gray-900 dark:text-white transition-colors duration-100">
        {children}
      </body>
    </html>
  );
}
