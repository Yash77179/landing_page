import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/[0.07]">
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl">

        {/* LEFT: empty spacer (mirrors right side width for true centering) */}
        <div className="w-[260px]" />

        {/* CENTER: Logo + Brand name */}
        <Link href="/" className="group flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
            <Image
              src="/codeanvil-logo.png"
              alt="CodeAnvil"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span
            style={{
              fontFamily: "'Georgia', 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: '1.15rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #ffffff 0%, #999 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transition: 'opacity 0.2s',
            }}
            className="group-hover:opacity-70"
          >
            CodeAnvil
          </span>
        </Link>

        {/* RIGHT: Two app CTAs */}
        <div className="flex items-center gap-2.5 w-[260px] justify-end">

          {/* ChatOps Bot */}
          <a
            href="https://github.com/apps/chatopsbot001"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
          >
            <span className="flex flex-col items-start leading-none">
              <span className="text-[0.6rem] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors">ChatBot</span>
              <span className="text-[0.78rem] font-medium text-zinc-300 group-hover:text-white transition-colors mt-0.5 whitespace-nowrap">PR Explainer</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </a>

          <div className="w-px h-5 bg-white/10 shrink-0" />

          {/* PR Reviewer */}
          <a
            href="https://github.com/apps/pr-security-reviewer-01"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 py-2 rounded-lg border border-[#ff6b2b]/25 bg-[#ff6b2b]/[0.06] hover:bg-[#ff6b2b]/[0.14] hover:border-[#ff6b2b]/45 transition-all duration-200"
          >
            <span className="flex flex-col items-start leading-none">
              <span className="text-[0.6rem] font-mono uppercase tracking-widest text-[#ff6b2b]/60 group-hover:text-[#ff6b2b] transition-colors">Security</span>
              <span className="text-[0.78rem] font-medium text-zinc-300 group-hover:text-white transition-colors mt-0.5 whitespace-nowrap">PR Reviewer</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6b2b]/40 group-hover:text-[#ff6b2b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </a>

        </div>
      </div>
    </header>
  );
}
