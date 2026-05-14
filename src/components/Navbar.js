import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Pools', path: '/pools' },
    { name: 'Pergolas', path: '/pergolas' },
    { name: 'Shades & Shutters', path: '/shades-shutters' }
  ];

  return (
    <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
        <Link
  href="/"
  style={{
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <Image
    src="/logo.png"
    alt="Apertolux Logo"
    width={50}
    height={50}
    priority
    style={{
      objectFit: "contain",
    }}
  />

  <div
    style={{
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1,
    }}
  >
    <h1
      style={{
        color: "var(--navy-primary)",
        fontSize: "1.8rem",
        margin: 0,
        letterSpacing: "1px",
        fontWeight: "700",
      }}
    >
      APERTOLUX
    </h1>

    <span
      style={{
        color: "var(--navy-primary)",
        fontSize: "0.75rem",
        letterSpacing: "2px",
        textTransform: "uppercase",
        opacity: 0.8,
        marginTop: "2px",
      }}
    >
      Architectural Outdoor Systems
    </span>
  </div>
</Link>
        
        <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem', margin: 0 }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} style={{ textDecoration: 'none', color: 'var(--navy-light)', fontWeight: '500', fontSize: '1rem' }}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Get a Quote
        </button>
      </nav>
    </header>
  );
}