import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Comfort Nordic Hot Tubs | Apertolux',
  description: 'Family-friendly hot tubs with ergonomic seating, easy-care surfaces, and safe, accessible design.',
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
          <p className="text-[#C5A880] text-xs font-semibold mt-3 uppercase tracking-tighter">Collection: Comfort</p>
        </div>
      </div>
    ))}
  </div>
);

export default function ComfortHotTubsPage() {
  const comfortModels = [
    { name: "Family M", image: "/hot-tubs/comfort/comfort-family-m.png" },
    { name: "Family L", image: "/hot-tubs/comfort/comfort-family-l.png" },
    { name: "Steady M", image: "/hot-tubs/comfort/comfort-steady-m.png" },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/hot-tubs/comfort/comfort-hero.png" 
          alt="Apertolux Comfort Family Hot Tubs"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="z-10 text-center text-white max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg">Comfort Collection</h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Family-first wellness. Ergonomic, safe, and accessible design for all ages.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>Designed for Every Generation</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            The Comfort range is developed to meet the needs of the whole family, regardless of age or physical condition. Featuring specially designed benches that double as cooling steps and child-friendly seating, these tubs ensure safety and ease of entry while providing luxurious back and arm support.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="bg-white p-8 rounded-lg mb-16 shadow-sm border border-gray-100">
            <h3 style={{ fontSize: '2rem', color: 'var(--navy-primary)', marginBottom: '1rem', textAlign: 'center' }}>Comfort Models</h3>
            <ProductGallery items={comfortModels} />
        </div>

        {/* Technical Specs Table */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '3rem' }}>Comfort Collection Specifications</h2>
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '900px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Model</th>
                  <th style={thStyle}>Capacity</th>
                  <th style={thStyle}>Volume</th>
                  <th style={thStyle}>Heating System</th>
                  <th style={thStyle}>Exterior Finish</th>
                </tr>
              </thead>
              <tbody>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Comfort Family M</td>
                  <td style={tdStyle}>3-5 People</td>
                  <td style={tdStyle}>1370 L</td>
                  <td style={tdStyle}>MACU Stove (29 kW net)</td>
                  <td style={tdStyle}>ThermoWood</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Comfort Family L</td>
                  <td style={tdStyle}>6-8 People</td>
                  <td style={tdStyle}>1930 L</td>
                  <td style={tdStyle}>CUBE Stove (35 kW net)</td>
                  <td style={tdStyle}>Finnish Spruce (Coal Tint)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Comfort Steady M</td>
                  <td style={tdStyle}>4-6 People</td>
                  <td style={tdStyle}>1420 L</td>
                  <td style={tdStyle}>MACU Stove (29 kW net)</td>
                  <td style={tdStyle}>Recycled Night Black Plastic</td>
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