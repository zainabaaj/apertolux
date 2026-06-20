import Image from "next/image";

export default function Pergolas() {
const products = [
  {
    title: "Bioclimatic Pergolas",
    image: "/pergolas/winter-garden/1.png",
    description:
      "Master the elements with our state-of-the-art bioclimatic systems. Featuring motorized aluminum louvers, you can effortlessly control sunlight, shade, and natural ventilation. Integrated rain sensors automatically close the roof during bad weather.",
    features: [
      "Motorized adjustable louvers",
      "Integrated LED lighting options",
      "Hidden drainage system",
    ],
  },
  {
    title: "Retractable Roof Systems",
    image: "/pergolas/aluminum/1.png",
    description:
      "Experience total freedom. Our retractable pergolas allow you to completely open your outdoor space to the sky on clear nights, or seal it tightly with 100% waterproof PVC fabrics during the rain, ensuring uninterrupted outdoor living.",
    features: [
      "Heavy-duty weatherproof fabric",
      "Smooth motorized operation",
      "Withstands high winds",
    ],
  },
  {
    title: "Fixed Glass Architectures",
    image: "/pergolas/glass-roof/5.png",
    description:
      "Sleek, minimalist, and deeply modern. Our fixed glass structures provide a permanent shelter that bathes your patio in natural light while protecting your furnishings from UV rays and rain.",
    features: [
      "Tempered safety glass",
      "UV filtering technology",
      "Seamless aluminum framing",
    ],
  },
];

  return (
    <div>
      
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
              Architectural Pergolas            
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
             Expand your living space with bespoke structures engineered for perfect climate control and absolute luxury.
             
            </p>
          </div>
        </div>
      </section>
      <div className="container">
        {products.map((product, index) => (
          <div className="feature-section" key={index}>
            <div className="feature-image-placeholder">
            <div className="relative w-full  h-80 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
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