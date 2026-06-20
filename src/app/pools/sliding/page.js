import Link from 'next/link';
import Image from 'next/image';
export const metadata = {
  title: 'Sliding Pool Decks | Apertolux',
  description: 'Transform your pool into a load-bearing patio with our motorized horizontal sliding decks.',
};

export default function SlidingDeckPage() {
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
        Sliding Deck Covers
      </h1>

      <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
        Fluid architectural movement. Glide your terrace effortlessly over the
        water to reclaim your outdoor living space.
      </p>
    </div>
  </div>
</section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            Two Spaces. One Footprint.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Maximize your backyard&apos;s potential. Our sliding pool decks operate horizontally along discrete tracks, allowing you to seamlessly cover your pool and instantly create a load-bearing patio for dining, lounging, or entertaining. When you are ready to swim, the deck glides away at the push of a button.
          </p>
        </div>

        {/* Feature 1: The Glide System */}
        <div className="feature-section" style={{ paddingTop: '2rem', borderBottom: 'none' }}>
                <div className="relative w-[450px] h-[450px] overflow-hidden rounded-xl">
                  <Image
                    src="/pools/sliding/slide/2.png"
                    alt="Structural Frame"
                    fill
                    className="object-cover"
                  />
                </div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>Whisper-Quiet Track System</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The secret to the sliding deck is our proprietary low-profile aluminum rail system. Engineered for perfect alignment, the deck rolls on heavy-duty, corrosion-resistant wheels that ensure a smooth, silent glide every single time.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Ultra-low profile tracks blend into the pavement</li>
              <li style={listItemStyle}>✓ Fully motorized or effortless manual operation</li>
              <li style={listItemStyle}>✓ 1-part or 2-part bi-parting sliding configurations</li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Complete Insulation & Safety */}
        <div className="feature-section" style={{ borderBottom: 'none', flexDirection: 'row-reverse' }}>
          <div className="relative w-[450px] h-[450px] overflow-hidden rounded-xl">
  <Image
    src="/pools/sliding/step/2.png"
    alt="Structural Frame"
    fill
    className="object-cover"
  />
</div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>Thermal Lock & Total Security</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Unlike fabric covers, a sliding deck completely seals the pool environment. This dramatically reduces water evaporation, locks in chemical treatments, and acts as a powerful thermal insulator to keep your pool warm year-round.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Most importantly, it serves as an impenetrable safety barrier, supporting the weight of adults, children, and pets with zero risk of water exposure.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Blocks 100% of debris and UV light (prevents algae)</li>
              <li style={listItemStyle}>✓ Commercial-grade aluminum sub-frame</li>
              <li style={listItemStyle}>✓ Complies with international pool safety standards</li>
            </ul>
          </div>
        </div>

        {/* Feature 3: Custom Cladding */}
        <div className="feature-section" style={{ borderBottom: 'none' }}>
          <div className="relative w-[450px] h-[450px] overflow-hidden rounded-xl">
            <Image
              src="/pools/sliding/step/4.png"
              alt="Structural Frame"
              fill
              className="object-cover"
            />
          </div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>Flawless Architectural Integration</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Your pool cover should look like an intentional piece of luxury architecture. We deliver the sliding frame ready to be clad in the exact material of your surrounding patio.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Choose from premium composite decking, natural hardwoods, or high-end porcelain tiles to create an invisible transition between the deck and your yard.
            </p>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-outline" style={{ marginTop: '1rem' }}>Request a Custom Quote</button>
            </Link>
          </div>
        </div>


        <div style={{ paddingTop: '4rem', borderTop: '1px solid #eaeaea', paddingBottom: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>System Configurations</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Tailored movement to fit your landscape.
            </p>
          </div>

          {/* Configuration 1: Slide */}
          <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
            <div style={flexHalfStyle}>
              <h3 style={configHeaderStyle}>01. Slide Configuration</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                A single, solid deck that glides entirely to the left or right side of your pool. 
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Designed for ultimate spatial purity, this configuration can be <strong>invisibly integrated</strong> beneath an existing raised deck structure or adjacent floor, completely vanishing from sight when the pool is open.
              </p>
            </div>
            {/* The 3-Image Custom Grid */}
            <div style={{ ...flexHalfStyle, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <div
  style={{
    ...imageBoxTop,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/slide/1.png"
    alt="Slide Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
              <div
  style={{
    ...imageBoxTop,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/slide/2.png"
    alt="Slide Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
<div
  style={{
    ...imageBoxBottom,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/slide/3.png"
    alt="Slide Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
            </div>
          </div>

          {/* Configuration 2: Split */}
          <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
            <div style={flexHalfStyle}>
              <h3 style={configHeaderStyle}>02. Split Configuration</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                A bi-parting design where the deck splits gracefully in the center, sliding out to opposite sides simultaneously. 
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Ideal for perfectly symmetrical backyard layouts. Just like the single slide, the split configuration allows for seamless, <strong>invisible concealing installation</strong> when retracted into the surrounding architecture.
              </p>
            </div>
            {/* The 3-Image Custom Grid */}
            <div style={{ ...flexHalfStyle, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <div
  style={{
    ...imageBoxTop,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/split/split1.png"
    alt="Split Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div><div
  style={{
    ...imageBoxTop,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/split/split2.png"
    alt="Split Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div><div
  style={{
    ...imageBoxBottom,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/split/split3.png"
    alt="Split Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
            </div>
          </div>

          {/* Configuration 3: Step */}
          <div style={{ ...flexRowStyle, marginBottom: '4rem' }}>
            <div style={flexHalfStyle}>
              <h3 style={configHeaderStyle}>03. Step Configuration</h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                A telescopic masterclass. The step design features multiple deck panels that stack smoothly over one another as they retract.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Because the panels nest vertically into a multi-tiered platform, this configuration requires <strong>50% less parking space</strong>. While it does not integrate invisibly, it creates a stunning, visible architectural feature (like tiered seating or a raised stage) when the pool is in use.
              </p>
            </div>
            {/* The 3-Image Custom Grid */}
            <div style={{ ...flexHalfStyle, display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <div
  style={{
    ...imageBoxTop,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/step/1.png"
    alt="Step Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div><div
  style={{
    ...imageBoxTop,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/step/2.png"
    alt="Step Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div><div
  style={{
    ...imageBoxBottom,
    overflow: 'hidden',
    position: 'relative',
  }}
>
  <Image
    src="/pools/sliding/step/3.png"
    alt="Step Detail"
    fill
    style={{ objectFit: 'cover' }}
  />
</div>
            </div>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>Technical Specifications</h2>
          
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Model</th>
                  <th style={thStyle}>BR-PY-MINI</th>
                  <th style={thStyle}>BR-PY-STYLE</th>
                  <th style={thStyle}>BR-PY-PLUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyleLeft}>Pool Cover Size</td>
                  <td style={tdStyle}>Length or Width &lt; 6m;<br/>Or area &lt; 24㎡</td>
                  <td style={tdStyle}>Length or Width is 6-12m;<br/>Or area is 24㎡-80㎡</td>
                  <td style={tdStyle}>Length or Width &gt; 12m;<br/>Or area &gt; 80㎡</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Pool Shape</td>
                  <td colSpan={3} style={tdStyle}>For any shape pool</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Advantages</td>
                  <td colSpan={3} style={tdStyle}>Space Savings. 24-hour safeguard, keeps water thermal and clean.</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Move Direction</td>
                  <td colSpan={3} style={tdStyle}>Move to the long side or short side</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Installation</td>
                  <td colSpan={3} style={tdStyle}>Concealing installation</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Bearing</td>
                  <td colSpan={3} style={tdStyle}>100-400 KG/㎡</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Dynamic</td>
                  <td colSpan={3} style={tdStyle}>Direct current or Hydraulic</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Driving</td>
                  <td style={tdStyle}>1-4 Grade</td>
                  <td style={tdStyle}>1-8 Grade</td>
                  <td style={tdStyle}>1-8 Grade</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Control</td>
                  <td colSpan={3} style={tdStyle}>Remote controller + Key button</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Frame</td>
                  <td colSpan={3} style={tdStyle}>304 stainless steel hanging system</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Cover Surface</td>
                  <td colSpan={3} style={tdStyle}>Antiseptical wood, tiles</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Active Wheels</td>
                  <td colSpan={3} style={tdStyle}>304 stainless steel</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Passive Wheels</td>
                  <td colSpan={3} style={tdStyle}>Wear-resistant rubber wheel</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Track Materials</td>
                  <td colSpan={3} style={tdStyle}>304 stainless steel</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Thickness</td>
                  <td colSpan={3} style={tdStyle}>15-40cm</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft}>Max Size</td>
                  <td colSpan={3} style={tdStyle}>W 15M * L 50M</td>
                </tr>
                <tr>
                  <td style={tdStyleLeft}>Options</td>
                  <td colSpan={3} style={tdStyle}>Lamp lights, audio, special requirements for keeping water heat</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Request Technical Drawings
              </button>
            </Link>
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
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '8px',
  border: '1px solid #eaeaea',
  textAlign: 'center',
  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
};

const specHeaderStyle = {
  color: 'var(--navy-primary)',
  fontSize: '1.4rem',
  marginBottom: '1rem',
  fontWeight: '700'
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
  color: 'var(--text-muted)'
};

const rowStripeStyle = {
  backgroundColor: '#f9fbfd'
};

const flexRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '4rem',
};

const flexHalfStyle = {
  flex: '1 1 400px', // Ensures it stacks beautifully on mobile
};
const configHeaderStyle = {
  fontSize: '2rem',
  color: 'var(--navy-primary)',
  marginBottom: '1.5rem',
  borderBottom: '2px solid var(--accent-gold)',
  display: 'inline-block',
  paddingBottom: '0.5rem'
};

const imageBoxTop = {
  width: 'calc(50% - 0.5rem)', // Takes up 50% minus half the gap
  height: '220px',
  backgroundColor: '#f1f5f9',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#94a3b8',
  fontSize: '0.9rem'
};

const imageBoxBottom = {
  width: '100%', // Takes up the full width under the top two
  height: '280px',
  backgroundColor: 'var(--navy-light)',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255,255,255,0.6)',
  fontSize: '0.9rem'
};