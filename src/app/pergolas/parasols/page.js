import Link from 'next/link';
import Image from 'next/image';



export const metadata = {
  title: 'Luxury Parasols | Apertolux',
  description: 'Freestanding architectural parasols featuring 360° rotation, premium UV80+ canvas, and integrated smart lighting.',
};

export default function ParasolsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/parasols/7.jpg" // Update with your actual image path
          alt="Apertolux Luxury Architectural Parasols"
          fill
          priority
          className="object-cover"
        />
      
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      
        {/* Hero Content */}
       <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">
              Luxury Parasol Collection
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Uncompromising shade. Freestanding, 360-degree rotating architectural parasols designed for premium outdoor living.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            The Apollo Collection
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Elevate your terrace or poolside with our Apollo series parasols. Engineered with heavy-duty aluminum frames and 250g PU-coated waterproof polyester, these parasols offer effortless operation and dynamic coverage. Whether you require a sleek center-pole design or a massive side-post cantilever system, enjoy ultimate UV80+ protection with a refined aesthetic.
          </p>
        </div>

        {/* Feature 1: Cantilever & Rotation */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>360° Cantilever System</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Our flagship 3x4m and 4x4m cantilever models are designed to maximize your usable space beneath the canopy. The heavy-duty 120x76mm aluminum side-post features an integrated turning mechanism, allowing the entire parasol to rotate a full 360 degrees to track the sun.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Opening and closing is effortless via a removable hand crank. When closed, the specialized retractable system allows the canopy to fold cleanly parallel against the mast, keeping your deck completely unobstructed.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ 360° Rotation: Follow the sun without moving the heavy base</li>
              <li style={listItemStyle}>✓ Parallel Retraction: Folds tightly against the pole to save space</li>
              <li style={listItemStyle}>✓ Wheeled Granite Base: 180kg stone base with integrated mobility wheels</li>
            </ul>
          </div>
          <div style={flexHalfStyle}>
            <div
              style={{
                width: '100%',
                height: '400px',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/pergolas/parasols/1.jpg" // Update with your actual image path
                alt="360 Degree Cantilever Parasol Rotation"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Canvas & Smart Accessories */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem', flexDirection: 'row-reverse' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Premium Canvas & Smart Tech</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The canopy is tailored from high-density 250g polyester, treated with a specialized polyurethane (PU) coating to ensure absolute waterproof performance while delivering a certified UV80+ protection rating.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Transition seamlessly into the night with our smart integrated accessories. The central hub can be equipped with a rechargeable LED lighting system and a Bluetooth audio speaker, turning your parasol into an entertainment centerpiece.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ UV80+ Canvas: Available in White, Dove, and Dark Gray</li>
              <li style={listItemStyle}>✓ Frame Finishes: White, Dove, Graphite, or Teak Wood effect</li>
              <li style={listItemStyle}>✓ Smart Hub: Optional LED lighting and Bluetooth audio integration</li>
            </ul>
          </div>
          <div style={flexHalfStyle}>
             <div
              style={{
                width: '100%',
                height: '400px',
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/pergolas/parasols/2.jpg" // Update with your actual image path
                alt="Parasol LED Lighting and Fabric Detail"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>


        {/* =========================================
            TECHNICAL SPECIFICATIONS TABLE
        ========================================= */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>System Specifications</h2>
          
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Specification</th>
                  <th style={thStyle}>Apollo Standard (Center Pole)</th>
                  <th style={thStyle}>Apollo Cantilever (Side Post)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyleLeft}>Canopy Dimensions</td>
                  <td style={tdStyle}>200 x 200 cm</td>
                  <td style={tdStyle}>300 x 400 cm  |  400 x 400 cm</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Total Height</td>
                  <td style={tdStyle}>250 cm</td>
                  <td style={tdStyle}>300 cm</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Aluminum Mast / Pole</td>
                  <td style={tdStyle}>38 mm diameter (Chrome-plated tip)</td>
                  <td style={tdStyle}>120 x 76 mm heavy-duty oval profile</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Rib Architecture</td>
                  <td style={tdStyle}>4 Aluminum Ribs (20 mm)</td>
                  <td style={tdStyle}>7 Aluminum Ribs (20 x 35 mm)</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Fabric System</td>
                  <td colSpan={2} style={tdStyle}>250g Polyester with PU coating (Waterproof & UV80+ Certified)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Opening Mechanism</td>
                  <td style={tdStyle}>Intuitive Manual Push-Up (locks into place)</td>
                  <td style={tdStyle}>Removable Hand Crank with Sliding Guides</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Rotation & Retraction</td>
                  <td style={tdStyle}>Static Canopy</td>
                  <td style={tdStyle}>360° turning mast; canopy closes parallel to the pole</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Base Unit</td>
                  <td style={tdStyle}>40 Kg Steel Base (50x50x2 cm)</td>
                  <td style={tdStyle}>180 Kg Granite Base with integrated wheels (80x80x10 cm)</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Smart Options</td>
                  <td style={tdStyle}>Not Available</td>
                  <td style={tdStyle}>Rechargeable LED umbrella lights & Bluetooth speaker system</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Consult a Shade Specialist
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// REUSABLE INLINE STYLES
// ==========================================

const flexRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '4rem',
};

const flexHalfStyle = {
  flex: '1 1 400px',
};

const configHeaderStyle = {
  fontSize: '2.2rem',
  color: 'var(--navy-primary)',
  marginBottom: '1.5rem',
  fontWeight: '700'
};

const listItemStyle = {
  marginBottom: '1rem', 
  color: 'var(--navy-light)', 
  fontSize: '1.1rem',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center'
};

// Table Styles
const thStyle = {
  backgroundColor: 'var(--navy-primary)',
  color: 'white',
  padding: '1.2rem',
  fontWeight: '600',
  borderBottom: '2px solid #0A192F',
  borderRight: '1px solid rgba(255,255,255,0.1)'
};

const tdStyleLeft = {
  padding: '1.2rem',
  borderBottom: '1px solid #eaeaea',
  borderRight: '1px solid #eaeaea',
  color: 'var(--navy-primary)',
  fontWeight: '600',
  width: '25%'
};

const tdStyle = {
  padding: '1.2rem',
  borderBottom: '1px solid #eaeaea',
  borderRight: '1px solid #eaeaea',
  color: 'var(--text-muted)',
  lineHeight: '1.5',
  width: '37.5%'
};

const rowStripeStyle = {
  backgroundColor: '#f9fbfd'
};