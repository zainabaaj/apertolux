export default function Pergolas() {
  const products = [
    {
      title: "Bioclimatic Pergolas",
      description: "Master the elements with our state-of-the-art bioclimatic systems. Featuring motorized aluminum louvers, you can effortlessly control sunlight, shade, and natural ventilation. Integrated rain sensors automatically close the roof during bad weather.",
      features: ["Motorized adjustable louvers", "Integrated LED lighting options", "Hidden drainage system"]
    },
    {
      title: "Retractable Roof Systems",
      description: "Experience total freedom. Our retractable pergolas allow you to completely open your outdoor space to the sky on clear nights, or seal it tightly with 100% waterproof PVC fabrics during the rain, ensuring uninterrupted outdoor living.",
      features: ["Heavy-duty weatherproof fabric", "Smooth motorized operation", "Withstands high winds"]
    },
    {
      title: "Fixed Glass Architectures",
      description: "Sleek, minimalist, and deeply modern. Our fixed glass structures provide a permanent shelter that bathes your patio in natural light while protecting your furnishings from UV rays and rain.",
      features: ["Tempered safety glass", "UV filtering technology", "Seamless aluminum framing"]
    }
  ];

  return (
    <div>
      <div className="page-hero">
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Architectural Pergolas</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px' }}>
          Expand your living space with bespoke structures engineered for perfect climate control and absolute luxury.
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
              <button className="btn-outline">Download Brochure</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}