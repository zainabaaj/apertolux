import Link from 'next/link';
import Image from 'next/image';


export const metadata = {
  title: 'Luxury Nordic Hot Tubs | Apertolux',
  description: 'Experience authentic wood-fired and smart-heated outdoor bathing with our Original, Comfort, and Premium hot tub collections.',
};

export default function HotTubsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
     {/* Hero */}
      <section className="relative min-h-[80vh] overflow-hidden">

        <Image
          src="/hot-tubs/hero.png"
          alt="Apertolux Nordic Hot Tubs"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-6">

          <div className="max-w-5xl text-center text-white">

            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-gray-300">
              Luxury Nordic Wellness
            </p>

            <h1 className="mb-8 text-5xl font-light leading-none md:text-7xl lg:text-8xl">
              Nordic
              <br />
              Hot Tubs
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
              Authentic wood-fired bathing, intelligent climate control,
              and handcrafted Nordic design for extraordinary outdoor
              wellness experiences.
            </p>

          </div>

        </div>

      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
       {/* Introduction */}
        <section className="py-24 lg:py-36">

          <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
              The Art of Outdoor Bathing
            </p>

            <h2 className="mb-10 text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
              A Modern Interpretation
              <br />
              of Nordic Tradition
            </h2>

            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
              Whether you seek the authenticity of traditional wood-fired
              bathing, a family-friendly wellness retreat, or a fully
              climate-controlled hydrotherapy experience, our collections
              are engineered to deliver exceptional comfort, performance,
              and timeless design.
            </p>

          </div>

        </section>

       {/* Original Collection */}
        <section className="py-24 lg:py-36">

          <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

              <div className="overflow-hidden rounded-[32px]">

                <Image
                  src="/hot-tubs/original/original-hero.png"
                  alt="Original Collection"
                  width={1400}
                  height={1000}
                  className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 md:h-[500px] lg:h-[700px]"
                />

              </div>

              <div className="max-w-xl">

                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
                  Collection One
                </p>

                <h2 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-6xl">
                  Original
                </h2>

                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  Designed for those who appreciate authentic Nordic bathing,
                  the Original Collection celebrates traditional craftsmanship,
                  natural materials, and the timeless experience of wood-fired
                  relaxation.
                </p>

                <p className="mb-10 text-lg leading-relaxed text-gray-600">
                  From compact two-person tubs to large family models,
                  every Original hot tub combines handcrafted beauty,
                  premium ThermoWood construction, and powerful marine-grade
                  heating systems.
                </p>

                <div className="space-y-5">

                  <div className="flex gap-4">
                    <span className="text-[#0A192F]">✓</span>
                    <span className="text-gray-700">
                      Genuine Finnish ThermoWood construction
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-[#0A192F]">✓</span>
                    <span className="text-gray-700">
                      High-performance wood-fired heating systems
                    </span>
                  </div>

                  <div className="flex gap-4">
                    <span className="text-[#0A192F]">✓</span>
                    <span className="text-gray-700">
                      Cold-plunge Dippy models available
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
       {/* Comfort Collection */}
        <section className="py-24 lg:py-36 bg-[#F8F8F8]">

          <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

              <div className="order-2 max-w-xl lg:order-1">

                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
                  Collection Two
                </p>

                <h2 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-6xl">
                  Comfort
                </h2>

                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  Created for families and everyday wellness,
                  the Comfort Collection focuses on ergonomics,
                  accessibility, and effortless enjoyment.
                </p>

                <p className="mb-10 text-lg leading-relaxed text-gray-600">
                  Integrated seating, smooth maintenance-free interiors,
                  and intelligent layouts make every bathing experience
                  comfortable and welcoming for users of all ages.
                </p>

                <div className="space-y-5">

                  <div className="flex gap-4">
                    <span>✓</span>
                    <span>Integrated ergonomic seating</span>
                  </div>

                  <div className="flex gap-4">
                    <span>✓</span>
                    <span>Family-friendly design and access</span>
                  </div>

                  <div className="flex gap-4">
                    <span>✓</span>
                    <span>Optional ambient LED lighting</span>
                  </div>

                </div>

              </div>

              <div className="order-1 overflow-hidden rounded-[32px] lg:order-2">

                <Image
                  src="/hot-tubs/comfort/comfort-hero.png"
                  alt="Comfort Collection"
                  width={1400}
                  height={1000}
                  className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 md:h-[500px] lg:h-[700px]"
                />

              </div>

            </div>

          </div>

        </section>

              {/* Premium Collection */}
        <section className="py-24 lg:py-36">

          <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">

              <div className="overflow-hidden rounded-[32px]">

                <Image
                  src="/hot-tubs/premium/premium-hero2.png"
                  alt="Premium Collection"
                  width={1400}
                  height={1000}
                  className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 md:h-[500px] lg:h-[700px]"
                />

              </div>

              <div className="max-w-xl">

                <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
                  Collection Three
                </p>

                <h2 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-6xl">
                  Premium
                </h2>

                <p className="mb-6 text-lg leading-relaxed text-gray-600">
                  The Premium Collection represents the pinnacle
                  of outdoor wellness technology.
                </p>

                <p className="mb-10 text-lg leading-relaxed text-gray-600">
                  Combining advanced climate control, hydrotherapy,
                  filtration systems, and luxurious materials,
                  these models deliver a spa experience unlike any other.
                </p>

                <div className="space-y-5">

                  <div className="flex gap-4">
                    <span>✓</span>
                    <span>Heating and cooling systems</span>
                  </div>

                  <div className="flex gap-4">
                    <span>✓</span>
                    <span>Integrated hydrotherapy jets</span>
                  </div>

                  <div className="flex gap-4">
                    <span>✓</span>
                    <span>Premium composite and ABS-acrylic finishes</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>
            
              {/* Specifications */}
        <section className="bg-[#F8F8F8] py-24 lg:py-36 mb-12">

          <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-24 text-center">

              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Model Specifications
              </p>

              <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
                Find Your Perfect Fit
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600">
                Explore our collections and compare capacities,
                heating systems, and finishes.
              </p>

            </div>
            
            <div className="mb-24">

          <h3 className="mb-12 text-3xl font-light text-[#0A192F]">
            Original Collection
          </h3>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                name: "Original Tiny",
                capacity: "1–2 People",
                volume: "615 L / 170 cm",
                heating: "Cult-si Stove",
                exterior: "ThermoWood",
              },
              {
                name: "Original Breezy M",
                capacity: "4–6 People",
                volume: "1540 L / 170 cm",
                heating: "Cult-si Stove",
                exterior: "Finnish Spruce",
              },
              {
                name: "Original Hazy M",
                capacity: "4–6 People",
                volume: "1420 L / 170 cm",
                heating: "Cult-si Stove",
                exterior: "Finnish Spruce",
              },
              {
                name: "Original Wood Tiny",
                capacity: "1–2 People",
                volume: "760 L / 170 cm",
                heating: "Cult-si Stove",
                exterior: "Solid ThermoWood",
              },
              {
                name: "Original Wood M",
                capacity: "4–6 People",
                volume: "1860 L / 170 cm",
                heating: "CUBE Stove",
                exterior: "Solid ThermoWood",
              },
              {
                name: "Original Wood L",
                capacity: "6–8 People",
                volume: "2600 L / 200 cm",
                heating: "CUBE Stove",
                exterior: "Solid ThermoWood",
              },
            ].map((model) => (
              <div
                key={model.name}
                className="rounded-[28px] bg-white p-8"
              >
                <h4 className="mb-8 text-2xl font-light text-[#0A192F]">
                  {model.name}
                </h4>

                <div className="space-y-5">

                  <SpecItem label="Capacity" value={model.capacity} />
                  <SpecItem label="Volume" value={model.volume} />
                  <SpecItem label="Heating" value={model.heating} />
                  <SpecItem label="Exterior" value={model.exterior} />

                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">

          <h3 className="mb-12 text-3xl font-light text-[#0A192F]">
            Comfort Collection
          </h3>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              {
                name: "Comfort Family M",
                capacity: "3–5 People",
                volume: "1370 L / 170 cm",
                heating: "MACU Stove",
                exterior: "ThermoWood",
              },
              {
                name: "Comfort Family L",
                capacity: "6–8 People",
                volume: "1930 L / 200 cm",
                heating: "CUBE Stove",
                exterior: "Finnish Spruce",
              },
              {
                name: "Comfort Steady M",
                capacity: "4–6 People",
                volume: "1420 L / 170 cm",
                heating: "MACU Stove",
                exterior: "Night Black Panels",
              },
            ].map((model) => (
              <div
                key={model.name}
                className="rounded-[28px] bg-white p-8"
              >
                <h4 className="mb-8 text-2xl font-light text-[#0A192F]">
                  {model.name}
                </h4>

                <div className="space-y-5">
                  <SpecItem label="Capacity" value={model.capacity} />
                  <SpecItem label="Volume" value={model.volume} />
                  <SpecItem label="Heating" value={model.heating} />
                  <SpecItem label="Exterior" value={model.exterior} />
                </div>
              </div>
            ))}
          </div>

        </div>

        <div>

          <h3 className="mb-12 text-3xl font-light text-[#0A192F]">
            Premium Collection
          </h3>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                name: "Breezy M Dual",
                capacity: "4–6 People",
                volume: "1540 L",
                heating: "Heat Pump",
                exterior: "ThermoWood",
              },
              {
                name: "Family L Dual",
                capacity: "6–8 People",
                volume: "1930 L",
                heating: "Heat Pump",
                exterior: "ThermoWood",
              },
              {
                name: "Pearly M",
                capacity: "4–6 People",
                volume: "1420 L",
                heating: "CUBE Stove",
                exterior: "Composite Mocca",
              },
              {
                name: "Steady M Flow",
                capacity: "4–6 People",
                volume: "1420 L",
                heating: "Electric + Jets",
                exterior: "ThermoWood",
              },
            ].map((model) => (
              <div
                key={model.name}
                className="rounded-[28px] bg-white p-8"
              >
                <h4 className="mb-8 text-2xl font-light text-[#0A192F]">
                  {model.name}
                </h4>

                <div className="space-y-5">
                  <SpecItem label="Capacity" value={model.capacity} />
                  <SpecItem label="Volume" value={model.volume} />
                  <SpecItem label="Heating" value={model.heating} />
                  <SpecItem label="Exterior" value={model.exterior} />
                </div>
              </div>
            ))}
          </div>

        </div>

        </div>
        </section>

        <section className="pb-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[40px] bg-[#0A192F] px-8 py-20 text-center text-white md:px-16 md:py-28">

      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-400">
        Personalized Consultation
      </p>

      <h2 className="mx-auto mb-8 max-w-4xl text-4xl font-light md:text-5xl lg:text-6xl">
        Discover Your Ideal
        Wellness Experience
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300">
        Our specialists can help you select the perfect
        model, heating system, and finish for your space.
      </p>

      <Link
        href="/contact"
        className="inline-flex rounded-full bg-white px-10 py-4 text-[#0A192F] transition hover:scale-105"
      >
        Consult a Hot Tub Specialist
      </Link>

    </div>

  </div>

        </section>
       </div>
    
    </div>  


  );
}

function SpecItem({ label, value }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
        {label}
      </p>

      <p className="mt-2 text-lg text-[#0A192F]">
        {value}
      </p>
    </div>
  );
}