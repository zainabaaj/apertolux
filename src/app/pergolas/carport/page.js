import Link from 'next/link';
import Image from 'next/image';

// Assuming you are using your standard slider component
import PoolSlider from "@/components/PoolSlider"; 
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Smart Retractable Carports | Apertolux',
  description: 'Protect your vehicles with our premium telescopic aluminum and polycarbonate smart carports.',
};

export default function SmartCarportPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/carport/1.png" // Update with your actual image path
          alt="Apertolux Telescopic Smart Carport"
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
              Smart Retractable Carports
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Tech-luxury vehicle protection. A highly engineered, telescopic enclosure that vanishes when you don&apos;t need it.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            The Evolution of the Garage
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Transform a purely functional necessity into a premium architectural feature. Our smart carports utilize an innovative telescopic design, offering the absolute security and weather protection of a closed garage without permanently consuming your driveway or yard space. 
          </p>
        </div>

        {/* Feature 1: Frame and Glazing */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Heavy-Duty Architecture</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The structural skeleton is constructed entirely from heavy-duty, powder-coated aluminum, ensuring a lightweight glide while remaining entirely rust-proof and capable of bearing heavy snow and wind loads.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              For the canopy, we replace standard fragile glass with impact-resistant solid polycarbonate or tempered safety glass. This provides a glass-like luxury aesthetic while delivering extreme durability against hail, debris, and harmful UV rays.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Anti-Corrosion: 100% rust-proof aluminum framework</li>
              <li style={listItemStyle}>✓ Impact Resistant: Protects luxury vehicles from hail and falling debris</li>
              <li style={listItemStyle}>✓ UV Block: Tinted or clear panels protect your car&apos;s paint and interior</li>
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
                src="/pergolas/carport/2.png" // Update with your actual image path
                alt="Impact Resistant Polycarbonate Glazing"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Telescopic Mechanism */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem', flexDirection: 'row-reverse' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Telescopic Glide System</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Operating on a low-profile track system integrated directly into your paving, the individual structural modules are precisely scaled to nest seamlessly inside one another—just like a telescope.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Smaller setups can be effortlessly glided open by hand via precision nylon and stainless steel rollers. For larger, premium installations, the entire structure is fully motorized and can be commanded to open or close via remote control or a dedicated smartphone app.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Space Optimization: Retracts to a fraction of its total length</li>
              <li style={listItemStyle}>✓ Smart Drive: Remote and smartphone app motorization available</li>
              <li style={listItemStyle}>✓ Seamless Tracks: Ultra-low profile floor guides</li>
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
                src="/pergolas/carport/3.png" // Update with your actual image path
                alt="Telescopic Nesting Mechanism"
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
                  <th style={thStyle}>Apertolux Telescopic System</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyleLeft}>Frame Engineering</td>
                  <td style={tdStyle}>Heavy-duty, rust-proof extruded architectural aluminum</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Canopy Glazing</td>
                  <td style={tdStyle}>Impact-resistant solid polycarbonate or tempered safety glass (Clear or Tinted)</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Protection Profile</td>
                  <td style={tdStyle}>100% UV Protection, Hail & Debris resistant, Snow load capable</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Retraction Mechanism</td>
                  <td style={tdStyle}>Descending modular telescopic nesting system</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Track System</td>
                  <td style={tdStyle}>Low-profile floor tracks integrated into paving or concrete</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Roller Hardware</td>
                  <td style={tdStyle}>High-tensile nylon or stainless steel precision rollers for silent glide</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Operation Mode</td>
                  <td style={tdStyle}>Manual Glide (Standard) or Motorized Smart-Drive (Optional)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Smart Motorization</td>
                  <td style={tdStyle}>Remote control and smartphone app integration available on motorized units</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Versatile Scaling</td>
                  <td style={tdStyle}>Can be custom-scaled to enclose hot tubs, swimming pools, or outdoor dining patios</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Request a Custom Quote
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