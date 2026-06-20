import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Premium Nordic Spas | Apertolux',
  description: 'The pinnacle of luxury: climate-controlled hot tubs with heat pumps, hydrotherapy jets, and elite materials.',
};

const ProductGallery = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
    {items.map((item, index) => (
      <div key={index} className="group flex flex-col items-center">
        <div className="w-full aspect-square relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white p-6 mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-[#0A192F] uppercase tracking-widest border-b border-[#C5A880] pb-2 inline-block">
            {item.name}
          </h3>
          <p className="text-[#C5A880] text-xs font-semibold mt-3 uppercase tracking-tighter">Collection: Premium</p>
        </div>
      </div>
    ))}
  </div>
);

export default function PremiumHotTubsPage() {
  const premiumModels = [
    { name: "Breezy M Dual", image: "/hot-tubs/premium/premium-breezy-m-dual.png" },
    { name: "Family L Dual", image: "/hot-tubs/premium/premium-family-l-dual.png" },
    { name: "Pearly M", image: "/hot-tubs/premium/premium-pearly-m.png" },
    { name: "Steady M Flow", image: "/hot-tubs/premium/premium-steady-m-flow.png" },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/hot-tubs/premium/premium-hero2.png" 
          alt="Apertolux Premium Nordic Spas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="z-10 text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">Premium Collection</h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              The pinnacle of spa luxury. Precision climate control, hydrotherapy, and elite materials.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>Elite Wellness Engineering</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Our Premium line represents the absolute apex of outdoor bathing. Featuring advanced climate systems, such as dual-function air-source heat pumps capable of both heating and cooling, and targeted WaterJets hydrotherapy, these tubs are designed for those who accept nothing less than total indulgence.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="bg-white p-8 rounded-lg mb-16 shadow-sm border border-gray-100">
            <h3 style={{ fontSize: '2rem', color: 'var(--navy-primary)', marginBottom: '1rem', textAlign: 'center' }}>Premium Models</h3>
            <ProductGallery items={premiumModels} />
        </div>

        {/* Technical Specs Table */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>Premium Collection Specifications</h2>
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '900px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Model</th>
                  <th style={thStyle}>Technology</th>
                  <th style={thStyle}>Performance</th>
                  <th style={thStyle}>Interior Finish</th>
                </tr>
              </thead>
              <tbody>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Breezy M Dual</td>
                  <td style={tdStyle}>Dual Heat Pump (5kW)</td>
                  <td style={tdStyle}>Heat/Cool 4-5°C/hr</td>
                  <td style={tdStyle}>Translucent Grey Plastic</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Family L Dual</td>
                  <td style={tdStyle}>Dual Heat Pump (5kW)</td>
                  <td style={tdStyle}>Heat/Cool 4-5°C/hr</td>
                  <td style={tdStyle}>Translucent Grey Plastic</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Pearly M</td>
                  <td style={tdStyle}>CUBE Stove (35 kW net)</td>
                  <td style={tdStyle}>High-Efficiency Wood</td>
                  <td style={tdStyle}>Champagne ABS-Acrylic</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Steady M Flow</td>
                  <td style={tdStyle}>WaterJets + 3kW Electric</td>
                  <td style={tdStyle}>4x Adjustable Jets</td>
                  <td style={tdStyle}>Translucent Grey Plastic</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const thStyle = { backgroundColor: 'var(--navy-primary)', color: 'white', padding: '1.2rem', fontWeight: '600' };
const tdStyle = { padding: '1.2rem', borderBottom: '1px solid #eaeaea', color: 'var(--text-muted)' };
const rowStripeStyle = { backgroundColor: '#f9fbfd' };