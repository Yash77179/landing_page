import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#0b0b0b]/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
            <Image
              src="/codeanvil-logo.png"
              alt="Acode Reviewer logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
              priority
            />
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
