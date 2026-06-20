import Link from 'next/link';
import Image from 'next/image';

// Assuming you have your standard slider component
import PoolSlider from "@/components/PoolSlider"; 
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Luxury Nordic Hot Tubs | Apertolux',
  description: 'Experience authentic wood-fired and smart-heated outdoor bathing with our Original, Comfort, and Premium hot tub collections.',
};

export default function HotTubsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/hot-tubs/hero.png" // Update with your actual image path
          alt="Apertolux Luxury Nordic Hot Tubs"
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
              Nordic Hot Tubs
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Authentic wellness. Immerse yourself in the elements with our wood-fired, electric, and climate-controlled spa collections.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <div style={{ backgroundColor: 'white', padding: '3rem 4rem', borderRadius: '8px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', marginBottom: '4rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1.5rem' }}>
            The Art of Outdoor Bathing
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
            Whether you are looking for the traditional scent of ThermoWood and a crackling wood-fire, a family-friendly ergonomic oasis, or a high-tech spa with air-source heat pumps and hydrotherapy jets, our hot tub collections are engineered for absolute relaxation. Beautifully clad in Finnish spruce, composite, or heat-treated pine, they blend seamlessly into any natural or modern architectural environment.
          </p>
        </div>

        {/* Feature 1: Original Collection */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>The Original Collection</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Designed for bathers who value tradition and authenticity. The Original range features genuine ThermoWood exteriors that release a calming, earthy scent when heated. 
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Choose from compact 1-2 person &quot;Tiny&quot;  models for small patios, up to 6-8 person &quot;Large&quot; tubs. Powered by marine-grade aluminum Cult-si or Cube wood heaters, they warm up rapidly. We also offer &quot;Dippy&quot; variants with no heater—perfect for invigorating winter swimming or cooling down after a sauna.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Authentic Feel: Solid Finnish ThermoWood options</li>
              <li style={listItemStyle}>✓ Wood-Fired Power: High-output Cult-si (36kW) & CUBE (48kW) heaters</li>
              <li style={listItemStyle}>✓ Dippy Options: Unheated tubs for cold-plunge therapy</li>
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
                src="/hot-tubs/original-collection.png" // Update with your actual image path
                alt="Original ThermoWood Hot Tub"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Comfort Collection */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem', flexDirection: 'row-reverse' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>The Comfort Collection</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Developed with the whole family in mind, regardless of age or physical condition. The Comfort series features easy-care, velvety smooth interior plastics with built-in ergonomic seating.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The specially designed internal benches serve as comfortable backrests, armrests, and cooling steps, making it incredibly safe and easy for children or elderly users to climb in and out. Powered by the shapely MACU or high-efficiency Cube heaters, it&apos;s the ultimate stress-free family spa.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Ergonomic Seating: Built-in benches for easy access and cooling</li>
              <li style={listItemStyle}>✓ Easy-Care Interior: Smooth, durable translucent plastics</li>
              <li style={listItemStyle}>✓ Ambient Lighting: Factory-fitted LED systems available</li>
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
                src="/hot-tubs/comfort-collection.png" // Update with your actual image path
                alt="Comfort Family Hot Tub"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* Feature 3: Premium Collection */}
        <div style={{ ...flexRowStyle, marginBottom: '6rem' }}>
          <div style={flexHalfStyle}>
            <h3 style={configHeaderStyle}>The Premium Collection</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              The pinnacle of modern spa luxury. The Premium line introduces advanced climate control, hydrotherapy, and elite materials like the champagne-colored ABS-acrylic inner tub found in the Pearly M.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Experience the &quot;Dual&quot; models featuring a complete air-source heat pump system that can both *heat and cool* the water at 4–8°C per hour, alongside ozone purification. Alternatively, choose the &quot;Steady Flow&quot; model, equipped with a 3kW electric heater, advanced filtration, and four adjustable WaterJets to gently massage your back muscles.
            </p>
            <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
              <li style={listItemStyle}>✓ Climate Control: Dual heat pumps for active heating and cooling</li>
              <li style={listItemStyle}>✓ Hydrotherapy: Built-in WaterJets flow systems</li>
              <li style={listItemStyle}>✓ Elite Materials: Glossy ABS-acrylic and grooved composite paneling</li>
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
                src="/hot-tubs/premium-collection.png" // Update with your actual image path
                alt="Premium Hot Tub with WaterJets"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        {/* =========================================
            PROJECT GALLERY SLIDER SECTION
        ========================================= */}
        <PoolSlider />
       
        {/* =========================================
            TECHNICAL SPECIFICATIONS TABLE
        ========================================= */}
        <div style={{ padding: '4rem 0', borderTop: '1px solid #eaeaea' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--navy-primary)', marginBottom: '1rem' }}>Model Specifications</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>All heated models utilize high-quality marine-grade aluminum stoves. Dippy models are unheated for cold-plunge use.</p>
          
          <div style={{ overflowX: 'auto', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #eaeaea' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '1000px' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Collection</th>
                  <th style={thStyle}>Model Name</th>
                  <th style={thStyle}>Capacity</th>
                  <th style={thStyle}>Volume / Dia.</th>
                  <th style={thStyle}>Heating System</th>
                  <th style={thStyle}>Exterior Finish</th>
                </tr>
              </thead>
              <tbody>
                {/* ORIGINAL COLLECTION */}
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft} rowSpan={9}><strong>ORIGINAL</strong></td>
                  <td style={tdStyle}>Original Tiny</td>
                  <td style={tdStyle}>1 - 2 People</td>
                  <td style={tdStyle}>615 L / 170 cm</td>
                  <td style={tdStyle}>Cult-si Stove (36kW / 22kW net)</td>
                  <td style={tdStyle}>Heat-Treated Pine (ThermoWood)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Breezy M</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1540 L / 170 cm</td>
                  <td style={tdStyle}>Cult-si Stove (36kW / 22kW net)</td>
                  <td style={tdStyle}>Finnish Spruce (Coal Tint)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Hazy M</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1420 L / 170 cm</td>
                  <td style={tdStyle}>Cult-si Stove (36kW / 22kW net)</td>
                  <td style={tdStyle}>Finnish Spruce (Coal Tint)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Wood Tiny</td>
                  <td style={tdStyle}>1 - 2 People</td>
                  <td style={tdStyle}>760 L / 170 cm</td>
                  <td style={tdStyle}>Cult-si Stove (36kW / 22kW net)</td>
                  <td style={tdStyle}>Solid ThermoWood</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Wood M</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1860 L / 170 cm</td>
                  <td style={tdStyle}>CUBE Stove (48kW / 35kW net)</td>
                  <td style={tdStyle}>Solid ThermoWood</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Original Wood L</td>
                  <td style={tdStyle}>6 - 8 People</td>
                  <td style={tdStyle}>2600 L / 200 cm</td>
                  <td style={tdStyle}>CUBE Stove (48kW / 35kW net)</td>
                  <td style={tdStyle}>Solid ThermoWood</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Tiny Dippy (Cold Plunge)</td>
                  <td style={tdStyle}>1 - 2 People</td>
                  <td style={tdStyle}>615 L / 170 cm</td>
                  <td style={tdStyle}><em>No Heater</em></td>
                  <td style={tdStyle}>Heat-Treated Pine</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Wood Tiny Dippy</td>
                  <td style={tdStyle}>1 - 2 People</td>
                  <td style={tdStyle}>760 L / 170 cm</td>
                  <td style={tdStyle}><em>No Heater</em></td>
                  <td style={tdStyle}>Solid ThermoWood</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Wood M Dippy</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1860 L / 170 cm</td>
                  <td style={tdStyle}><em>No Heater</em></td>
                  <td style={tdStyle}>Solid ThermoWood</td>
                </tr>

                {/* COMFORT COLLECTION */}
                <tr>
                  <td style={tdStyleLeft} rowSpan={3}><strong>COMFORT</strong></td>
                  <td style={tdStyle}>Comfort Family M</td>
                  <td style={tdStyle}>3 - 5 People</td>
                  <td style={tdStyle}>1370 L / 170 cm</td>
                  <td style={tdStyle}>MACU Stove (40kW / 29kW net)</td>
                  <td style={tdStyle}>Heat-Treated Pine (ThermoWood)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Comfort Family L</td>
                  <td style={tdStyle}>6 - 8 People</td>
                  <td style={tdStyle}>1930 L / 200 cm</td>
                  <td style={tdStyle}>CUBE Stove (48kW / 35kW net)</td>
                  <td style={tdStyle}>Finnish Spruce (Coal Tint)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Comfort Steady M</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1420 L / 170 cm</td>
                  <td style={tdStyle}>MACU Stove (40kW / 29kW net)</td>
                  <td style={tdStyle}>Recycled Plastic Panels (Night Black)</td>
                </tr>

                {/* PREMIUM COLLECTION */}
                <tr style={rowStripeStyle}>
                  <td style={tdStyleLeft} rowSpan={4}><strong>PREMIUM</strong></td>
                  <td style={tdStyle}>Premium Breezy M Dual</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1540 L / 170 cm</td>
                  <td style={tdStyle}>Dual Air-Source Heat Pump (5kW)</td>
                  <td style={tdStyle}>Heat-Treated Pine (ThermoWood)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Premium Family L Dual</td>
                  <td style={tdStyle}>6 - 8 People</td>
                  <td style={tdStyle}>1930 L / 200 cm</td>
                  <td style={tdStyle}>Dual Air-Source Heat Pump (5kW)</td>
                  <td style={tdStyle}>Heat-Treated Pine (ThermoWood)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Premium Pearly M</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1420 L / 172 cm</td>
                  <td style={tdStyle}>CUBE Stove (48kW / 35kW net)</td>
                  <td style={tdStyle}>Grooved Composite (Mocca)</td>
                </tr>
                <tr style={rowStripeStyle}>
                  <td style={tdStyle}>Steady M Flow (WaterJets)</td>
                  <td style={tdStyle}>4 - 6 People</td>
                  <td style={tdStyle}>1420 L / 170 cm</td>
                  <td style={tdStyle}>3kW Electric System + Filtration</td>
                  <td style={tdStyle}>Heat-Treated Pine (ThermoWood)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link href="/contact" style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: 'var(--navy-primary)', color: 'white', border: 'none', padding: '1rem 3rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px', fontWeight: 'bold' }}>
                Consult a Hot Tub Specialist
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
  width: '15%'
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