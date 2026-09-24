import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/[0.07]">
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl">

        {/* Brand */}
        <Link href="/" className="group shrink-0">
          <span
            style={{
              fontFamily: "'Georgia', 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: '1.2rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #ffffff 0%, #888 50%, #ffffff 100%)',
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

        {/* App CTAs */}
        <div className="flex items-center gap-3">

          {/* ChatOps Bot */}
          <a
            href="https://github.com/apps/chatopsbot001"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
          >
            <span className="flex flex-col items-start leading-none">
              <span className="text-[0.65rem] font-mono uppercase tracking-widest text-zinc-500 group-hover:text-zinc-400 transition-colors">ChatBot</span>
              <span className="text-[0.82rem] font-medium text-zinc-300 group-hover:text-white transition-colors mt-0.5">PR Explainer</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ml-0.5 shrink-0">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </a>

          {/* Divider */}
          <div className="w-px h-6 bg-white/10" />

          {/* PR Reviewer */}
          <a
            href="https://github.com/apps/pr-security-reviewer-01"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 px-4 py-2 rounded-lg border border-[#ff6b2b]/25 bg-[#ff6b2b]/[0.06] hover:bg-[#ff6b2b]/[0.12] hover:border-[#ff6b2b]/40 transition-all duration-200"
          >
            <span className="flex flex-col items-start leading-none">
              <span className="text-[0.65rem] font-mono uppercase tracking-widest text-[#ff6b2b]/60 group-hover:text-[#ff6b2b]/90 transition-colors">Security</span>
              <span className="text-[0.82rem] font-medium text-zinc-300 group-hover:text-white transition-colors mt-0.5">PR Reviewer</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff6b2b]/50 group-hover:text-[#ff6b2b]/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ml-0.5 shrink-0">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </a>

        </div>
      </div>
    </header>
  );
}
