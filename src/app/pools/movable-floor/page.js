import Link from 'next/link';
import Image from 'next/image';

import PoolSlider from "@/components/PoolSlider";
import "swiper/css";
import "swiper/css/navigation";


export const metadata = {
  title: 'Movable Pool Floors | Apertolux',
  description: 'Experience the ultimate luxury of space optimization with our vertical lifting movable pool floors.',
};

export default function MovableFloorPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pools/sliding/slide/2.png"
          alt="ApertoLux Sliding Deck Covers"
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
              Movable Pool Floors
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Vertical evolution. Reclaim your environment by commanding your pool floor to rise seamlessly to ground level.
            </p>
          </div>
        </div>
      </section>
     

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            Absolute Space Optimization
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Change the depth of your pool or make it disappear entirely. Our movable floors travel vertically from the pool bed to the deck line, turning a deep-water swimming pool into a safe wading pool, an aqua-fitness platform, or a completely flush architectural terrace capable of supporting massive gatherings.
          </p>
        </div>

        {/* Feature 1: Variable Depth */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Variable Depth Technology</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Unlike traditional hard covers, our movable floor gives you absolute control over water levels. At the touch of a single key-button, adapt the depth to suit any scenario.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Shallow Wading: Perfect, safe depths for infants and toddlers</li>
              <li style={listItemStyle}>✓ Mid-Level Depth: Ideal for aquatic exercise and water aerobics</li>
              <li style={listItemStyle}>✓ Full Depth: Instantly clear the floor to the bottom for traditional swimming</li>
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
    src="/pools/movable-floor/1.png"
    alt="Variable Depth Showcase"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
          </div>
        </div>

        {/* Feature 2: Invisible Engineering */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem', flexDirection: 'row-reverse' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>Concealed Marine Engineering</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The entire system is completely hidden underwater. Operating on a robust 304 stainless steel hanging grid, active stainless wheels, and passive wear-resistant rubber tracks, the floor lifts with near-silent direct current or hydraulic drive systems.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The platform structure allows you to clad the surface with antiseptical wood or heavy stone tiles that align exactly with your surrounding landscape layout. When completely raised, the pool vanishes completely.
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
    src="/pools/movable-floor/9.png"
    alt="Stainless Steel Sub-Frame"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
          </div>
        </div>








{/* =========================================
            VIDEO SHOWCASE SECTION
        ========================================= */}
{/* Video Section */}
<div className="mb-24">
  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl text-[#0A192F] font-bold mb-4">
      See It In Action
    </h2>

    <p className="text-lg text-gray-600 max-w-2xl m-auto">
      Experience the silent, seamless movement of our vertical lifting floors
      in real-world architectural settings.
    </p>
  </div>

  <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200">
    
    {/* Video */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="metadata"
    >
      <source
        src="/videos/movablefloor.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/35 pointer-events-none"></div>

    {/* Center Content */}
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <div className="text-center px-6">
        <h3 className="text-white text-2xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Vertical Lifting Pool Floor
        </h3>

        <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto drop-shadow-lg">
          Transform your pool into a functional architectural space with
          smooth, silent, and precise movement.
        </p>
      </div>
    </div>

    {/* Bottom Gradient */}
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"></div>

    {/* Project Label */}
    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 pointer-events-none">
      <span className="text-white font-medium tracking-wider text-sm md:text-base uppercase drop-shadow-md">
        Villa Azure Integration
      </span>
    </div>
  </div>
</div>
        {/* =========================================f
            PROJECT GALLERY SLIDER SECTION
        ========================================= */}
        <PoolSlider />
       
        {/* =========================================
            TECHNICAL SPECIFICATIONS TABLE
        ========================================= */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>Technical Specifications</h2>
          
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Model</th>
                  <th style={thStyle}>BR-SJ-MINI</th>
                  <th style={thStyle}>BR-SJ-STYLE</th>
                  <th style={thStyle}>BR-SJ-PLUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyleLeft}>Pool Cover Size</td>
                  <td style={tdStyle}>Pool length or Width less than 6m;<br/>Or total area less than 24㎡</td>
                  <td style={tdStyle}>Pool length or Width is 6-12m;<br/>Or total area is 24㎡ to 80㎡</td>
                  <td style={tdStyle}>Pool length or Width greater than 12m;<br/>Or total area greater than 80㎡</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Pool Shape</td>
                  <td colSpan={3} style={tdStyle}>Engineered for any shape pool</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Advantages</td>
                  <td colSpan={3} style={tdStyle}>Ultimate space savings. 24-hour structural safeguard, locks water thermal heating and maintains cleanliness.</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Move Direction</td>
                  <td colSpan={3} style={tdStyle}>Moving vertically back and forth from the bottom of the pool to the surface ground level</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Installation</td>
                  <td colSpan={3} style={tdStyle}>Fully concealing submerged installation</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Bearing Capacity</td>
                  <td colSpan={3} style={tdStyle}>100 - 400 KG/㎡ structural load-bearing capacity</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Dynamic System</td>
                  <td colSpan={3} style={tdStyle}>Direct current or heavy-duty Hydraulic power</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Driving Grade</td>
                  <td style={tdStyle}>2 - 8 Grade</td>
                  <td style={tdStyle}>2 - 16 Grade</td>
                  <td style={tdStyle}>2 - 16 Grade</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Control Options</td>
                  <td colSpan={3} style={tdStyle}>Secure remote controller + mechanical key button interface</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Structural Frame</td>
                  <td colSpan={3} style={tdStyle}>Marine-grade 304 stainless steel hanging suspension system</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Cover Surface</td>
                  <td colSpan={3} style={tdStyle}>Bespoke cladding: Antiseptical wood, natural stones, or premium porcelain tiles</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Active Wheels</td>
                  <td colSpan={3} style={tdStyle}>304 stainless steel reinforced active guidance wheels</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Passive Wheels</td>
                  <td colSpan={3} style={tdStyle}>Wear-resistant heavy rubber tracking wheels</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Track Materials</td>
                  <td colSpan={3} style={tdStyle}>High-durability 304 stainless steel profile tracks</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>System Thickness</td>
                  <td colSpan={3} style={tdStyle}>15 - 20cm built-in depth profile</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Maximum Size</td>
                  <td colSpan={3} style={tdStyle}>Width: No limit * Length: No limit (Custom architectural scaling)</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Optional Extras</td>
                  <td colSpan={3} style={tdStyle}>Submerged lamp lights, underwater marine audio, specialized high-thermal insulation reinforcement packages</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Consult an Engineering Specialist
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
  width: '20%'
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