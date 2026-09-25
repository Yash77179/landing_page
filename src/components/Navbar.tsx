import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4rem',
        backgroundColor: '#090a0f',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.9)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '80rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.625rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Image
              src="/codeanvil-logo.png"
              alt="CodeAnvil"
              width={32}
              height={32}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
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
          >
            CodeAnvil
          </span>
        </Link>
      </div>
    </header>
  );
}
