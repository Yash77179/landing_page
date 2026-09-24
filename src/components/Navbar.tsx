import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-[#0b0b0b]/70 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-full flex items-center justify-center max-w-7xl">
        <Link href="/" className="group">
          <span
            style={{
              fontFamily: "'Georgia', 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 700,
              fontSize: '1.35rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              background: 'linear-gradient(90deg, #ffffff 0%, #a0a0a0 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              transition: 'opacity 0.2s',
            }}
            className="group-hover:opacity-75"
          >
            CodeAnvil
          </span>
        </Link>
      </div>
    </header>
  );
}
