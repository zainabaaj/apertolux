import Link from 'next/link';
import Image from 'next/image';


export const metadata = {
  title: 'Smart Retractable Carports | Apertolux',
  description: 'Protect your vehicles with our premium telescopic aluminum and polycarbonate smart carports.',
};

export default function SmartCarportPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/carport/1.png" // Update with your actual image path
          alt="Apertolux Telescopic Smart Carport"
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
              Smart Retractable Carports
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Tech-luxury vehicle protection. A highly engineered, telescopic enclosure that vanishes when you don&apos;t need it.
            </p>
          </div>
        </div>
      </section>

        
        {/* Intro Block */}
        <section className="relative z-10 -mt-20 px-6">

            <div className="mx-auto max-w-7xl rounded-[32px] bg-white p-8 md:p-12 lg:p-16 shadow-xl">

                <div className="text-center">

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                    Architectural Vehicle Protection
                </p>

                <h2 className="text-4xl md:text-5xl font-light text-[#0A192F]">
                    The Evolution Of The Garage
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg text-gray-600 leading-relaxed">
                    Combining advanced telescopic engineering with luxury
                    architectural design, Apertolux Smart Carports provide
                    complete protection while preserving the elegance of
                    your outdoor space.
                </p>

                </div>

            </div>

            </section>


{/* Feature 1 */}

<section className="py-24 lg:py-32">

  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

<div className="relative h-[450px] overflow-hidden rounded-[32px]">

  <Image
    src="/pergolas/carport/1.png"
    alt="Heavy Duty Architecture"
    fill
    className="object-cover"
  />

</div>

<div>

  <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
    Engineering
  </p>

  <h2 className="mb-8 text-4xl font-light text-[#0A192F]">
    Heavy-Duty Architecture
  </h2>

  <p className="mb-6 text-lg leading-relaxed text-gray-600">
    Built entirely from architectural-grade powder-coated aluminum,
    the structure delivers exceptional durability while remaining
    lightweight, corrosion-resistant, and visually refined.
  </p>

  <p className="mb-8 text-lg leading-relaxed text-gray-600">
    The canopy can be configured with impact-resistant solid
    polycarbonate or tempered safety glass, providing premium
    aesthetics together with long-term protection against harsh
    weather conditions.
  </p>

  <div className="space-y-4">

    <div className="rounded-xl border border-gray-200 p-4">
      Marine-grade aluminum construction
    </div>

    <div className="rounded-xl border border-gray-200 p-4">
      Hail, debris and UV protection
    </div>

    <div className="rounded-xl border border-gray-200 p-4">
      Engineered for wind and snow loads
    </div>

  </div>

</div>

  </div>

</section>

{/* Feature 2 */}

<section className="bg-gray-50 py-24 lg:py-32">

  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

<div>

  <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
    Innovation
  </p>

  <h2 className="mb-8 text-4xl font-light text-[#0A192F]">
    Telescopic Glide Technology
  </h2>

  <p className="mb-6 text-lg leading-relaxed text-gray-600">
    Precision-engineered modules nest seamlessly inside one
    another, allowing the structure to retract to a fraction
    of its total footprint.
  </p>

  <p className="mb-8 text-lg leading-relaxed text-gray-600">
    When closed, your vehicles are completely protected.
    When open, the structure virtually disappears, restoring
    the openness of your outdoor environment.
  </p>

  <div className="space-y-4">

    <div className="rounded-xl bg-white p-4">
      Space-saving telescopic design
    </div>

    <div className="rounded-xl bg-white p-4">
      Precision nylon & stainless-steel rollers
    </div>

    <div className="rounded-xl bg-white p-4">
      Smooth and silent operation
    </div>

  </div>

</div>

<div className="relative h-[450px] overflow-hidden rounded-[32px]">

  <Image
    src="/pergolas/carport/2.png"
    alt="Telescopic System"
    fill
    className="object-cover"
  />

</div>

  </div>

</section>
{/* Smart Automation */}
      <section className="py-24 lg:py-32">

  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

    <div className="relative h-[450px] overflow-hidden rounded-[32px]">

      <Image
        src="/pergolas/carport/3.png"
        alt="Smart Automation"
        fill
        className="object-cover"
      />

    </div>

    <div>

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Automation
      </p>

      <h2 className="mb-8 text-4xl font-light text-[#0A192F]">
        Intelligent Operation
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-gray-600">
        Luxury should feel effortless. Larger systems can be equipped
        with fully motorized operation, allowing the structure to
        open and close at the touch of a button.
      </p>

      <p className="mb-8 text-lg leading-relaxed text-gray-600">
        Remote controls, smartphone integration, and future-ready
        smart home connectivity ensure a seamless ownership
        experience.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">

        <div className="rounded-2xl border border-gray-200 p-5">
          Remote Control Access
        </div>

        <div className="rounded-2xl border border-gray-200 p-5">
          Smartphone Integration
        </div>

        <div className="rounded-2xl border border-gray-200 p-5">
          Quiet Motorized Movement
        </div>

        <div className="rounded-2xl border border-gray-200 p-5">
          Future Smart Home Ready
        </div>

      </div>

    </div>

  </div>

</section>
{/* why carport Section */}
<section className="bg-[#0A192F] py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center text-white">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
        Why Choose Apertolux
      </p>

      <h2 className="text-4xl font-light md:text-6xl">
        More Than Vehicle Protection
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Protect Luxury Vehicles",
          text: "Shield valuable vehicles from weather, debris, and UV exposure."
        },

        {
          title: "Preserve Open Space",
          text: "Retracts when not needed, maintaining clean architectural lines."
        },

        {
          title: "Increase Property Value",
          text: "Adds a sophisticated and highly functional architectural feature."
        },

        {
          title: "Designed To Impress",
          text: "Transforms a practical necessity into a statement piece."
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-[28px] border border-white/10 bg-white/5 p-8"
        >

          <h3 className="mb-4 text-xl text-white">
            {item.title}
          </h3>

          <p className="leading-relaxed text-gray-300">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* protection Section */}
<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Protection
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Designed To Defend
      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        "UV Radiation",
        "Rain & Snow",
        "Hail Damage",
        "Tree Debris",
        "Dust & Sand",
        "Bird Droppings",
      ].map((item) => (

        <div
          key={item}
          className="rounded-[28px] border border-gray-200 p-8 text-center"
        >

          <h3 className="text-xl font-light text-[#0A192F]">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>
{/* Applications Section */}
<section className="bg-gray-50 py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Custom Configuration
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Tailored To Your Property
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2">

      <div className="rounded-[32px] bg-white p-10">
        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Structure
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Custom Widths</li>
          <li>• Custom Lengths</li>
          <li>• Single or Multi Vehicle</li>
          <li>• Architectural Color Matching</li>
        </ul>
      </div>

      <div className="rounded-[32px] bg-white p-10">
        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Canopy Options
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Clear Polycarbonate</li>
          <li>• Tinted Polycarbonate</li>
          <li>• Tempered Glass</li>
          <li>• UV Filtering Panels</li>
        </ul>
      </div>

    </div>

  </div>

</section>

<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Technical Specifications
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Engineered Performance
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Every component is selected to deliver exceptional durability,
        smooth operation, and long-term reliability.
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Frame Material",
          value: "Architectural Aluminum",
        },

        {
          title: "Roof Options",
          value: "Polycarbonate or Tempered Glass",
        },

        {
          title: "Operation",
          value: "Manual or Motorized",
        },

        {
          title: "Protection",
          value: "UV, Hail, Rain & Snow",
        },

        {
          title: "Track System",
          value: "Low Profile Integrated Rails",
        },

        {
          title: "Automation",
          value: "Remote & Smartphone Control",
        },

        {
          title: "Roller System",
          value: "Precision Nylon & Stainless Steel",
        },

        {
          title: "Customization",
          value: "Fully Bespoke Dimensions",
        },

        {
          title: "Applications",
          value: "Vehicles, Pools, Patios & Spas",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-[28px] border border-gray-200 bg-white p-8 transition duration-300 hover:shadow-xl"
        >

          <div className="mb-3 text-sm uppercase tracking-widest text-gray-500">
            {item.title}
          </div>

          <div className="text-xl font-light text-[#0A192F]">
            {item.value}
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="bg-[#0A192F] py-24 lg:py-32">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
      Start Your Project
    </p>

    <h2 className="mb-8 text-4xl font-light text-white md:text-6xl">
      Protect What Moves You
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300">
      Every Apertolux Smart Carport is custom engineered around
      your vehicle, architecture, and lifestyle. Create a solution
      that delivers protection without compromising design.
    </p>

    <div className="flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        href="/contact"
        className="rounded-full bg-white px-10 py-4 text-[#0A192F] transition hover:bg-gray-100"
      >
        Request Consultation
      </Link>

      <Link
        href="/collections"
        className="rounded-full border border-white px-10 py-4 text-white transition hover:bg-white hover:text-[#0A192F]"
      >
        Explore Collections
      </Link>

    </div>

  </div>

</section>
    </div>
  );
}

