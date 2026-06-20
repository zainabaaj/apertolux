import Link from 'next/link';
import Image from 'next/image';

import PoolSlider from "@/components/PoolSlider";
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Full Cassette Retractable Awnings | Apertolux',
  description: 'Extend your living space outward with our premium full-cassette motorized retractable awnings.',
};

export default function RetractableAwningsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/awning/3.png" // Update with your actual image path
          alt="Apertolux Full Cassette Retractable Awnings"
          fill
          priority
          className="object-cover"
        />
      
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      
        {/* Hero Content */}
       <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Retractable Awnings
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Seamless architectural integration. Extend your living space outward with our motorized, fully enclosed cassette awnings.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            Total Protection. Streamlined Design.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Our QHC Full Cassette Awnings are designed to blend invisibly into your home&apos;s exterior. Unlike standard awnings, the fabric and articulating arms retract completely into a sleek, sealed aluminum casing. This unique inner-box design not only creates a flawless architectural aesthetic, but dramatically extends the lifespan of your canopy by protecting it from the elements when not in use.
          </p>
        </div>

        {/* Feature 1: The Cassette */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Flawless Architectural Cassette</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              We engineered the outer shell to be as beautiful as it is robust. The extruded aluminum casing features an integrated baffle design with absolutely zero exposed screws or hardware, ensuring a smooth, uninterrupted profile against your wall.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Full Cassette: 100% protection for the fabric roller and arms</li>
              <li style={listItemStyle}>✓ Invisible Hardware: Screwless exterior for a clean, modern look</li>
              <li style={listItemStyle}>✓ Premium Finish: High-quality electrostatic powder coating</li>
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
                src="/pergolas/awning/1.png" // Update with your actual image path
                alt="Full Cassette Awning Detail"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: High Performance Mechanics */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem', flexDirection: 'row-reverse' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>High-Performance Mechanics</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The strength of the awning lies in its heavy-duty, arch-bridge chain folding arms. These rust-proof articulation joints provide massive tension to keep the premium Spanish Sauleda canvas perfectly taut, even at a maximum 3-meter projection. 
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              As evening falls, the awning transforms your patio with a built-in LED lighting system, elegantly embedded directly into the arm tubes and the base of the cassette.
            </p>
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
                src="/pergolas/awning/2.png" // Update with your actual image path
                alt="Awning Chain Arms and LED Lighting"
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
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>Technical Specifications</h2>
          
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Specification</th>
                  <th style={thStyle}>QHC Full Cassette System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyleLeft}>Frame Material</td>
                  <td style={tdStyle}>Full aluminum alloy structure with electrostatic powder coating</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Cassette Design</td>
                  <td style={tdStyle}>Fully enclosed inner-box design; Integrated baffle with zero exposed screws</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Fabric System</td>
                  <td style={tdStyle}>Premium Spanish Sauleda® canvas (10-year fade-resistant warranty)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Folding Arms</td>
                  <td style={tdStyle}>Heavy-duty, rust-proof arch-bridge internal chain mechanism</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Dimensions</td>
                  <td style={tdStyle}>Custom Width: 2.0m up to 6.0m | Extension (Projection): 1.5m up to 3.0m</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Adjustable Pitch</td>
                  <td style={tdStyle}>Wall-mounted inclination angle is fully adjustable from 0° to 25°</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Installation Types</td>
                  <td style={tdStyle}>Standard Wall Mount (Flat) or Custom Ceiling Mount (Suspended)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Motorization</td>
                  <td style={tdStyle}>Tubular motor integration with remote (Premium Somfy® or Dooya® options)</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Integrated Lighting</td>
                  <td style={tdStyle}>Embedded LED lighting system in the folding arm tubes and cassette base</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Bespoke Finishes</td>
                  <td style={tdStyle}>Custom side-panel covers (Chrome Rings, Standard Wood Grain, Black Walnut)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Consult an Awning Specialist
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
  width: '30%'
};

const tdStyle = {
  padding: '1.2rem',
  borderBottom: '1px solid #eaeaea',
  borderRight: '1px solid #eaeaea',
  color: 'var(--text-muted)',
  lineHeight: '1.5'
};

const rowStripeStyle = {
  backgroundColor: '#f9fbfd'
};