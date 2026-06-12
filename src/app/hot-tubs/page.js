import Link from 'next/link';

export default function HotTubShowcase() {
  return (
    <section style={{ backgroundColor: 'var(--bg-light)', padding: '6rem 0', borderTop: '1px solid #eaeaea' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>
            Bespoke Wellness & Spa
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
            Transform your outdoor space into a private sanctuary. Our architectural hot tubs are engineered for ultimate relaxation and flawless integration.
          </p>
        </div>

        {/* Feature Layout */}
        <div className="feature-section" style={{ padding: '0', borderBottom: 'none' }}>
          <div className="feature-image-placeholder" style={{ height: '500px', backgroundColor: 'var(--navy-light)' }}>
            [ High-Res Built-in Hot Tub Image ]
          </div>
          
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
              Architectural Hydrotherapy
            </h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Whether seamlessly sunken into your decking, integrated alongside a movable pool floor, or designed as a stunning standalone feature, our hot tubs represent the pinnacle of outdoor wellness. 
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Engineered with whisper-quiet mechanics and advanced thermal retention, they offer a year-round luxury spa experience in the comfort of your own home.
            </p>
            
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2.5rem' }}>
              <li style={listItemStyle}>✓ Custom jet configurations for targeted hydrotherapy</li>
              <li style={listItemStyle}>✓ Smart-app controlled heating and LED mood lighting</li>
              <li style={listItemStyle}>✓ Ultra-quiet, multi-stage water filtration</li>
              <li style={listItemStyle}>✓ Flush-mount integration with existing patio materials</li>
            </ul>

            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button className="btn-outline">Consult a Spa Designer</button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

// Reusable styling for the checklist
const listItemStyle = {
  marginBottom: '1rem', 
  color: 'var(--navy-light)', 
  fontWeight: '600',
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center'
};