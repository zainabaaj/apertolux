import Link from 'next/link';
import Image from 'next/image';

// Assuming you have your PoolSlider/PergolaSlider component
import PoolSlider from "@/components/PoolSlider"; 
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Fixed & Retractable Pergolas | Apertolux',
  description: 'Choose between dynamic retractable bioclimatic roofs and permanent fixed architectural pergolas.',
};

export default function FixedAndRetractablePage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/aluminum/1.png" // Update with your actual image path
          alt="Apertolux Fixed and Retractable Pergolas"
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
              Fixed & Retractable Pergolas
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Absolute climate control or permanent architectural shelter. Engineer your outdoor living space exactly how you envision it.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            Two Philosophies. One Standard of Luxury.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Whether you desire the dynamic flexibility of a motorized bioclimatic roof that adapts to the weather in real-time, or the heavy-duty reassurance of a permanent, fixed-roof structure designed for year-round shelter, Apertolux delivers uncompromising marine-grade engineering. 
          </p>
        </div>

        {/* Feature 1: Retractable System */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Dynamic Retractable Systems</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Experience total freedom over your environment. Our retractable and bioclimatic pergolas feature motorized aluminum louvers that rotate to precisely control sunlight and natural ventilation, or fold away completely to reveal the open sky.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Fully Retractable: Fold the roof back for a completely open view</li>
              <li style={listItemStyle}>✓ Micro-Climate Control: Angled louvers create refreshing natural drafts</li>
              <li style={listItemStyle}>✓ Smart Automation: Integrated rain and wind sensors for auto-closure</li>
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
                src="/pergolas/aluminum/2.png" // Update with your actual image path
                alt="Retractable Bioclimatic Pergola"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Fixed System */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem', flexDirection: 'row-reverse' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Permanent Fixed Structures</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Designed for absolute permanence. Our fixed pergolas provide a steadfast architectural extension to your home. Choose from insulated sandwich panels for total thermal block, static angled louvers, or tempered safety glass to let the light in while keeping the rain out.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Built to withstand extreme snow loads and hurricane-force winds, fixed structures offer the ultimate peace of mind for heavy-duty, year-round outdoor kitchens and living rooms.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Extreme Durability: Engineered for maximum snow and wind loads</li>
              <li style={listItemStyle}>✓ Roof Variations: Glass, insulated aluminum, or fixed louvers</li>
              <li style={listItemStyle}>✓ Zero Maintenance: No moving parts means decades of static reliability</li>
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
                src="/pergolas/aluminum/3.png" // Update with your actual image path
                alt="Permanent Fixed Pergola"
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
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>System Comparison</h2>
          
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Feature</th>
                  <th style={thStyle}>Smart Retractable (Bioclimatic)</th>
                  <th style={thStyle}>Fixed Structure (Solid / Glass)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyleLeft}>Roof Functionality</td>
                  <td style={tdStyle}>Motorized rotation (0°-135°) & full sliding retraction</td>
                  <td style={tdStyle}>Static. Permanent solid panels, glass, or fixed louvers</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Weather Response</td>
                  <td style={tdStyle}>Dynamic. Auto-closes during rain via integrated sensors</td>
                  <td style={tdStyle}>Permanent. 100% weatherproof 24/7 without intervention</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Ventilation</td>
                  <td style={tdStyle}>Active. Tilting louvers create natural chimney-effect drafts</td>
                  <td style={tdStyle}>Passive. Relies on open sides or integrated zip screens</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Snow Load Capacity</td>
                  <td style={tdStyle}>Moderate to High (up to 120 kg/㎡). Requires opening in heavy freezes</td>
                  <td style={tdStyle}>Extreme (up to 250+ kg/㎡). Designed for heavy winter accumulation</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Maintenance</td>
                  <td style={tdStyle}>Annual motor and track inspection recommended</td>
                  <td style={tdStyle}>Zero mechanical maintenance (No moving parts)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Drainage System</td>
                  <td style={tdStyle}>Integrated hidden gutters inside structural posts</td>
                  <td style={tdStyle}>Integrated hidden gutters inside structural posts</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Customization</td>
                  <td style={tdStyle}>LED lighting, weather sensors, app control</td>
                  <td style={tdStyle}>LED lighting, insulated panels, skylight integration</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Consult a Pergola Specialist
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