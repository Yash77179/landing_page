import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#0b0b0b]/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#8b5cf6] to-[#06b6d4] p-[1px]">
            <div className="w-full h-full bg-[#0b0b0b] rounded-[7px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#logo-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="logo-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
               </svg>
            </div>
          </div>
          <span className="font-semibold text-lg tracking-tight">Acode Reviewer</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#how-it-works" className="hover:text-white transition-colors">How it works</Link>
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#use-cases" className="hover:text-white transition-colors">Use Cases</Link>
        </nav>
        
        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Log In
          </Link>
          <Link href="/trial" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-zinc-200 transition-colors active:scale-95 duration-150">
            Get a free trial
          </Link>
        </div>
      </div>
    </header>
  );
}
