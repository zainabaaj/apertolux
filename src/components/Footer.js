import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--navy-primary)', color: 'white', padding: '4rem 0 2rem 0', marginTop: 'auto' }}>
      <div className="container grid-3">
        <div>
          <h2 style={{ marginBottom: '1rem' }}>APERTOLUX</h2>
          <p style={{ color: '#ccc' }}>Premium outdoor solutions engineered for luxury, comfort, and durability.</p>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Solutions</h3>
          <ul style={{ listStyle: 'none', color: '#ccc', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link href="/pools" style={{ color: 'inherit', textDecoration: 'none' }}>Pool Covers & Floors</Link></li>
            <li><Link href="/pergolas" style={{ color: 'inherit', textDecoration: 'none' }}>Bioclimatic Pergolas</Link></li>
            <li><Link href="/shades-shutters" style={{ color: 'inherit', textDecoration: 'none' }}>Outdoor Shades & Shutters</Link></li>
          </ul>
        </div>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Contact</h3>
          <p style={{ color: '#ccc', marginBottom: '1rem' }}>Email: info@apertolux.com<br/>Phone: +1 (800) 555-0199</p>
        </div>
      </div>

      {/* Legal Links Bar */}
      <div className="container" style={{ textAlign: 'center', color: '#888', marginTop: '3rem', borderTop: '1px solid #172A45', paddingTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
          <Link href="/privacy" style={{ color: '#ccc', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: '#ccc', textDecoration: 'none' }}>Terms of Service</Link>
          <Link href="/accessibility" style={{ color: '#ccc', textDecoration: 'none' }}>Accessibility Statement</Link>
        </div>
        <p>© {new Date().getFullYear()} Apertolux. All rights reserved.</p>
      </div>
    </footer>
  );
}