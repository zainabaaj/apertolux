export const metadata = {
  title: 'About Us | Apertolux',
  description: 'Learn about Apertolux, a market leader in luxury outdoor architectural solutions since 2006.',
};

export default function AboutUs() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      {/* High-End Hero Section */}
      <div className="page-hero" style={{ minHeight: '50vh', backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8))' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'white' }}>Our Heritage</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px' }}>
          Engineering luxury outdoor spaces with uncompromising quality since 2006.
        </p>
      </div>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        {/* Main Introduction Card */}
        <div style={{ backgroundColor: 'white', padding: '4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem', textAlign: 'center' }}>
            A Legacy of Excellence
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            Apertolux is a premier contracting, entrepreneurial, and executive firm with decades of specialized experience. Founded as a family company in 2006, we have grown into a market leader by maintaining an unwavering dedication to quality, innovation, and client commitment. 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            Our core specialization lies in the execution of unique architectural works, seamlessly blending local craftsmanship with the world&apos;s finest imported products for the luxury private construction market.
          </p>
        </div>

        {/* Alternating Feature 1: Global Sourcing */}
        <div className="feature-section" style={{ borderBottom: 'none', paddingTop: '2rem' }}>
          <div className="feature-image-placeholder" style={{ height: '400px' }}>
            [ Image: Global Sourcing / Materials ]
          </div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>Global Partnerships</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              To ensure our outdoor solutions meet the highest standards of luxury and durability, we import exclusively from a curated network of leading business partners worldwide. 
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ <strong>Italy & Spain:</strong> Premium architectural mechanisms</li>
              <li style={listItemStyle}>✓ <strong>Poland & Finland:</strong> High-grade, weather-resistant woods and metals</li>
              <li style={listItemStyle}>✓ <strong>China:</strong> Advanced smart-automation technologies</li>
            </ul>
          </div>
        </div>

        {/* Alternating Feature 2: End-to-End Management */}
        <div className="feature-section" style={{ borderBottom: 'none', flexDirection: 'row-reverse' }}>
          <div className="feature-image-placeholder" style={{ height: '400px', backgroundColor: 'var(--navy-light)' }}>
            [ Image: Architectural Planning / Engineering ]
          </div>
          <div className="feature-content">
            <h3 style={{ fontSize: '2.2rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>End-to-End Execution</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              We do more than supply products; we engineer visions. From the very first blueprint to the final installation, our in-house experts manage every detail of the project.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Our services include comprehensive budget management, on-site supervision, and dedicated engineering consulting for architects and inspectors to ensure flawless integration.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div style={{ padding: '6rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>Our Commitment</h2>
          <div className="grid-3">
            <div style={cardStyle}>
              <h4 style={cardHeaderStyle}>Uncompromising Quality</h4>
              <p style={{ color: 'var(--text-muted)' }}>We meet strict quality requirements and the highest safety standards on every single job site.</p>
            </div>
            <div style={cardStyle}>
              <h4 style={cardHeaderStyle}>Precision & Punctuality</h4>
              <p style={{ color: 'var(--text-muted)' }}>We respect your time and resources, consistently meeting project deadlines while strictly maintaining the customer&apos;s budget.</p>
            </div>
            <div style={cardStyle}>
              <h4 style={cardHeaderStyle}>Creative Innovation</h4>
              <p style={{ color: 'var(--text-muted)' }}>We utilize creative thinking and modern engineering to fulfill the unique architectural dream of each and every customer.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan Banner */}
      <div style={{ backgroundColor: 'var(--navy-primary)', color: 'white', padding: '5rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontStyle: 'italic', fontWeight: '400', letterSpacing: '1px' }}>
          Apertolux,  Your Vision. Our Engineering.
        </h2>
      </div>
    </div>
  );
}

// Reusable inline styles
const listItemStyle = {
  marginBottom: '0.8rem', 
  color: 'var(--navy-light)', 
  fontSize: '1.1rem',
};

const cardStyle = {
  backgroundColor: '#fafafa',
  padding: '2.5rem',
  borderRadius: '8px',
  border: '1px solid #eaeaea',
  textAlign: 'center'
};

const cardHeaderStyle = {
  color: 'var(--navy-primary)',
  fontSize: '1.3rem',
  marginBottom: '1rem'
};