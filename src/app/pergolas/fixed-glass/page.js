import Link from 'next/link';
import Image from 'next/image';

// Assuming you are using your standard slider component
import PoolSlider from "@/components/PoolSlider"; 
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Panoramic Glass Pergolas | Apertolux',
  description: 'Expand your space and views without limits using our fixed and motorized glass roof systems.',
};

export default function GlassRoofPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/glass-roof/5.png" // Update with your actual image path
          alt="Apertolux Panoramic Glass Pergola"
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
              Panoramic Glass Pergolas
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Expanding spaces and views without limits. Fully enjoy the natural light while remaining protected from the elements.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            A Window to the Sky
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            With our glass roofs, you will be able to create new usable spaces and enjoy your terrace, patio, or garden all year long without the need for any lengthy and expensive building works. Built with materials and finishes of prime quality and durability, it perfectly integrates with its surroundings without distorting the view.
          </p>
        </div>

        {/* Feature 1: Motorized Glide System */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Minimalist Motorized Glide</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Our movable systems feature motorized sliding panels which can be opened and closed to any desired position, allowing for a pleasant and gradual ventilation of the room. 
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Engineered for absolute longevity, the panels slide open without using any wheels in the rails. This innovative wheel-less friction system reduces maintenance to an absolute minimum while ensuring a silent, flawless glide.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Custom Configurations: Choose between 2 to 5 panels per rail.</li>
              <li style={listItemStyle}>✓ Gradual Opening: Achieve a roof opening of 50%, 66%, 75%, or up to 80%.</li>
              <li style={listItemStyle}>✓ Safe Installation: The installation for the panels can be easily made from the inside of the structure, without risks.</li>
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
                src="/pergolas/glass-roof/6.png" // Update with your actual image path
                alt="Wheel-less Sliding Glass Roof Mechanism"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Heavy-Duty Architecture & Illumination */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem', flexDirection: 'row-reverse' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Intelligent Drainage & Illumination</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Aesthetically beautiful, structurally impenetrable. The system utilizes an integrated 80mm diameter drainage system. This ensures water is easily driven towards the posts from where it seamlessly evacuates, keeping your outdoor space perfectly dry.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              To extend your living space into the evening, LED lights can be beautifully installed directly into the structural beams, allowing you to enjoy the roof day and night.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Weather Resistance: CE Certified for wind, snow, and watertightness.</li>
              <li style={listItemStyle}>✓ Integrated Drainage: Concealed 80mm internal post evacuation.</li>
              <li style={listItemStyle}>✓ Glazing Options: Choose Laminated Glass, Chamber Glass, or Polycarbonate.</li>
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
                src="/pergolas/glass-roof/7.png" // Update with your actual image path
                alt="Integrated LED Lighting and Drainage System"
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
                  <th style={thStyle}>FIX System (Static)</th>
                  <th style={thStyle}>MOV System (Motorized Sliding)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyleLeft}>Glazing Materials</td>
                  <td style={tdStyle}>Laminated (5+5), Chamber (3+3/6/4), or 16mm Polycarbonate.</td>
                  <td style={tdStyle}>Chamber (3+3/6/4), Laminated (5+5), or 16mm Polycarbonate.</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Maximum Projection</td>
                  <td style={tdStyle}>Up to 6000 mm.</td>
                  <td style={tdStyle}>Up to 6000 mm.</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Panel Configuration</td>
                  <td style={tdStyle}>Fixed continuous surface.</td>
                  <td style={tdStyle}>2, 3, 4, or 5 panels per rail (allowing 50% to 80% opening).</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Sliding Mechanism</td>
                  <td style={tdStyle}>N/A (Fixed Roof)</td>
                  <td style={tdStyle}>Wheel-less track design for minimal maintenance.</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Water Drainage</td>
                  <td colSpan={2} style={tdStyle}>Internal 80mm diameter post evacuation system.</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Integrated Lighting</td>
                  <td colSpan={2} style={tdStyle}>Optional LED lights installed directly into structural beams.</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Installation</td>
                  <td colSpan={2} style={tdStyle}>Panels are safely installed from the inside of the structure.</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Certifications & Warranty</td>
                  <td colSpan={2} style={tdStyle}>CE Certified, Qualanod, with a 3-year structural guarantee.</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Consult an Architectural Expert
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