import Link from 'next/link';
import Image from 'next/image';
export const metadata = {
  title: 'Folding Deck Pool Covers | Apertolux',
  description: 'Reclaim your space with our motorized, load-bearing folding deck pool covers.',
};

export default function FoldingDeckPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <div className="page-hero" style={{ minHeight: '45vh', backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.7), rgba(10, 25, 47, 0.8))' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Folding Deck Covers</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px' }}>
          One click to unlock quality life. Transform your swimming pool into a solid, load-bearing entertainment space in seconds.
        </p>
      </div>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            Multi-Functional Interior & Exterior Spaces
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Why choose between a luxury pool and a spacious recreation area when you can have both? Our Folding Deck Pool Covers lead the industry in spatial efficiency, utilizing an innovative stacking fold that parks completely independent of your walls while securing your water beneath a structural terrace.
          </p>
        </div>

        {/* Feature 1: Load Bearing */}
        <div className="feature-section" style={{ paddingTop: '2rem', borderBottom: 'none' }}>
          <div className="feature-image-placeholder" style={{ height: '450px' }}>
            <Image src="/folding/fold/1.png" alt="Folding Deck Load Bearing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} width={800} height={450} ></Image>
          </div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>Unmatched Load-Bearing Capacity</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Built upon a commercial-grade 304 stainless steel hanging system, our folding covers act as a true structural floor. With a customized load-bearing capacity reaching 100-300kg/m², it is a deck you can confidently walk, dance, and place heavy patio furniture upon.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ 100-300kg/m² structural safety rating</li>
              <li style={listItemStyle}>✓ 24-hour safeguard for children and pets</li>
              <li style={listItemStyle}>✓ Retains pool heat and prevents water evaporation</li>
            </ul>
          </div>
        </div>

        {/* Feature 2: The Fold Mechanism */}
        <div className="feature-section" style={{ borderBottom: 'none', flexDirection: 'row-reverse' }}>
          <div className="feature-image-placeholder" style={{ height: '450px', backgroundColor: 'var(--navy-light)' }}>
                        <Image src="/folding/fold/3.png" alt="Folding Deck Load Bearing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} width={800} height={450} ></Image>

          </div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>The Architectural Fold</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Unlike traditional covers, our system utilizes a brilliant geometric folding action. As it opens, the cover plates fold upwards to form an incredibly stable, freestanding triangular shape.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              It does not need to lean against a wall, and requires a minimal footprint of just 800mm outside the pool edge to park.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Independent, highly stable triangular parking</li>
              <li style={listItemStyle}>✓ Operates smoothly on wear-resistant rubber wheels</li>
              <li style={listItemStyle}>✓ Moves via short side or long side of the pool</li>
            </ul>
          </div>
        </div>

        {/* Feature 3: Smart Control & Finishes */}
        <div className="feature-section" style={{ borderBottom: 'none' }}>
          <div className="feature-image-placeholder" style={{ height: '450px' }}>
                        <Image src="/folding/fold/4-1.jpg" alt="Folding Deck Load Bearing" width={800} height={450} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}  ></Image>

          </div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>Smart Drive & Bespoke Finishes</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Intelligent living is at your fingertips. Choose between a dedicated remote controller or full PLC smart home integration to command your deck via Direct Current or Hydraulic drive systems. 
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Because aesthetics matter, the external decoration can be matched precisely to your yard. We finish the cover in your choice of antiseptical woods, natural stones, or premium tiles.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-outline" style={{ marginTop: '1rem' }}>Request Technical Drawings</button>
            </Link>
          </div>
        </div>

        {/* Technical Specifications Grid */}
        <div style={{ padding: '4rem 0', marginTop: '2rem', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>System Specifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            
            <div style={specCardStyle}>
              <h4 style={specHeaderStyle}>Dimensions</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Thickness: 15-20cm<br/>Max Width: 10m<br/>Max Length: Unlimited</p>
            </div>
            
            <div style={specCardStyle}>
              <h4 style={specHeaderStyle}>Structural Frame</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>304 Stainless Steel Hanging System<br/>Active Wheels: 304 SS<br/>Passive Wheels: Rubber</p>
            </div>

            <div style={specCardStyle}>
              <h4 style={specHeaderStyle}>Drive & Control</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Direct Current or Hydraulic<br/>Remote Controller + Key Button<br/>PLC Integration Available</p>
            </div>

            <div style={specCardStyle}>
              <h4 style={specHeaderStyle}>Installation</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Concealing / Above-ground<br/>Requires vertical/horizontal pool walls<br/>Parking space: ≥800mm</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// Reusable Inline Styles
const listItemStyle = {
  marginBottom: '0.8rem', 
  color: 'var(--navy-light)', 
  fontSize: '1.1rem',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center'
};

const specCardStyle = {
  backgroundColor: '#fafafa',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #eaeaea',
  textAlign: 'center'
};

const specHeaderStyle = {
  color: 'var(--navy-primary)',
  fontSize: '1.2rem',
  marginBottom: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '1px'
};