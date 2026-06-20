import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Original Nordic Hot Tubs | Apertolux',
  description: 'Authentic wood-fired hot tubs. Experience the genuine scent of Finnish ThermoWood and traditional bathing.',
};

const ProductGallery = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
    {items.map((item, index) => (
      <div key={index} className="group flex flex-col items-center">
        {/* Image Container: Added white bg and padding for aesthetics */}
        <div className="w-full aspect-square relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white p-6 mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-2" // object-contain ensures the whole image is visible
          />
        </div>
        
        {/* Enhanced Typography Style */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-[#0A192F] uppercase tracking-widest border-b border-[#C5A880] pb-2 inline-block">
            {item.name}
          </h3>
          <p className="text-[#C5A880] text-xs font-semibold mt-3 uppercase tracking-tighter">
            {item.collection || "Original Collection"}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default function OriginalHotTubsPage() {
  const originalModels = [
    { name: "Original Tiny", image: "/hot-tubs/original/original-tiny.png" },
    { name: "Breezy M", image: "/hot-tubs/original/original-breezy-m.png" },
    { name: "Hazy M", image: "/hot-tubs/original/original-hazy-m.png" },
    { name: "Wood Tiny", image: "/hot-tubs/original/original-wood-tiny.png" },
    { name: "Wood M", image: "/hot-tubs/original/original-wood-m.png" },
    { name: "Wood L", image: "/hot-tubs/original/original-wood-l.png" },
    { name: "Tiny Dippy", image: "/hot-tubs/original/original-tiny-dippy.png" },
    { name: "Wood Tiny Dippy", image: "/hot-tubs/original/original-wood-tiny-dippy.png" },
    { name: "Wood M Dippy", image: "/hot-tubs/original/original-wood-m-dippy.png" },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/hot-tubs/original/original-hero.png" 
          alt="Apertolux Original Nordic Hot Tubs"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="z-10 text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">Original Collection</h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Authentic wellness. The genuine scent of fresh ThermoWood combined with traditional wood-fired heating.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>Tradition Meets Performance</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            The Original range is for those who value tradition and the raw, earthy connection to nature. Clad in high-quality heat-treated pine (ThermoWood), these tubs offer a warm brown finish that maintains its shape and integrity even in harsh conditions.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="bg-white p-8 rounded-lg mb-16">
            <h3 style={{ fontSize: '2rem', color: 'var(--navy-primary)', marginBottom: '1rem', textAlign: 'center' }}>Product Showcase</h3>
            <ProductGallery items={originalModels} />
        </div>

        {/* Technical Specs Table */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>Original Collection Master Specifications</h2>
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '900px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Model</th>
                  <th style={thStyle}>Capacity</th>
                  <th style={thStyle}>Volume</th>
                  <th style={thStyle}>Heating System</th>
                  <th style={thStyle}>Dry Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Tiny</td>
                  <td style={tdStyle}>1-2 People</td>
                  <td style={tdStyle}>615 L</td>
                  <td style={tdStyle}>Cult-si (22 kW net)</td>
                  <td style={tdStyle}>92 kg</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Original Wood Tiny</td>
                  <td style={tdStyle}>1-2 People</td>
                  <td style={tdStyle}>760 L</td>
                  <td style={tdStyle}>Cult-si (22 kW net)</td>
                  <td style={tdStyle}>140 kg</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Breezy M</td>
                  <td style={tdStyle}>4-6 People</td>
                  <td style={tdStyle}>1540 L</td>
                  <td style={tdStyle}>Cult-si (22 kW net)</td>
                  <td style={tdStyle}>142 kg</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Original Hazy M</td>
                  <td style={tdStyle}>4-6 People</td>
                  <td style={tdStyle}>1420 L</td>
                  <td style={tdStyle}>Cult-si (22 kW net)</td>
                  <td style={tdStyle}>157 kg</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Wood M</td>
                  <td style={tdStyle}>4-6 People</td>
                  <td style={tdStyle}>1860 L</td>
                  <td style={tdStyle}>CUBE (35 kW net)</td>
                  <td style={tdStyle}>209 kg</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Original Wood L</td>
                  <td style={tdStyle}>6-8 People</td>
                  <td style={tdStyle}>2600 L</td>
                  <td style={tdStyle}>CUBE (35 kW net)</td>
                  <td style={tdStyle}>240 kg</td>
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