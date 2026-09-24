import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Code Reviews | CodeRabbit | Try for Free.",
  description:
    "AI-first pull request reviewer with context-aware feedback, line-by-line code suggestions, and real-time chat.",
  icons: {
    icon: "https://www.coderabbit.ai/favicon.ico?v=4",
    shortcut: "https://www.coderabbit.ai/favicon.ico?v=4",
    apple: "https://www.coderabbit.ai/apple-touch-icon.png?v=4",
  },
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
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="antialiased bg-cream-300 dark:bg-neutral-1000 font-sans text-gray-900 dark:text-white transition-colors duration-100">
        {children}
      </body>
    </html>
  );
}
