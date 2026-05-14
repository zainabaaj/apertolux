export default function ShadesShutters() {
  const products = [
    {
      title: "Motorized Zip Screens",
      description: "Transform your pergola or patio into a bug-free, climate-controlled oasis. Our zip screens feature a unique side-retention system that prevents the fabric from blowing out of the tracks, even in high winds.",
      features: ["Wind resistant up to 130 km/h", "Micro-perforated fabric for visibility", "Insect and UV protection"]
    },
    {
      title: "Security Rolling Shutters",
      description: "Protect your home with elegance. Our extruded aluminum rolling shutters offer unparalleled security, noise reduction, and thermal insulation. Fully automated to integrate with your smart home system.",
      features: ["Anti-lift security mechanisms", "Exceptional thermal insulation", "Smart home compatible"]
    }
  ];

  return (
    <div>
      <div className="page-hero" style={{ minHeight: '40vh' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Shades & Shutters</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px' }}>
          Premium exterior shading and security solutions for ultimate comfort and peace of mind.
        </p>
      </div>

      <div className="container">
        {products.map((product, index) => (
          <div className="feature-section" key={index}>
            <div className="feature-image-placeholder">
              [ High-Res {product.title} Image ]
            </div>
            <div className="feature-content">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
                {product.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem', color: 'var(--navy-light)', fontWeight: '500' }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button className="btn-outline">Request Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Global Call to Action Block */}
      <section style={{ backgroundColor: 'var(--bg-light)', padding: '6rem 0', textAlign: 'center', marginTop: '4rem' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>Ready to Transform Your Outdoors?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Contact our design team today for a custom consultation and detailed 3D rendering of your project.
          </p>
          <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
}