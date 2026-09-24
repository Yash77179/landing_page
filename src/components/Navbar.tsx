import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/[0.07]">
      <div className="container mx-auto px-6 h-full flex items-center justify-center max-w-7xl">
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
              fontFamily: "'Cinzel', 'Playfair Display', serif",
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '0.2em',
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
      </div>
    </header>
  );
}
