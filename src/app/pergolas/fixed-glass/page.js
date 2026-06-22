import Link from 'next/link';
import Image from 'next/image';

// Assuming you are using your standard slider component
import PoolSlider from "@/components/PoolSlider"; 
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Panoramic Glass Pergolas | Apertolux',
  description: 'Expand your space and views without limits using our fixed and motorized glass roof systems.',
};

export default function GlassRoofPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/glass-roof/5.png" // Update with your actual image path
          alt="Apertolux Panoramic Glass Pergola"
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
              Panoramic Glass Pergolas
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Expanding spaces and views without limits. Fully enjoy the natural light while remaining protected from the elements.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        <section className="relative z-10 -mt-20 px-6">

  <div className="mx-auto max-w-7xl rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl md:p-12 lg:p-16">

    <div className="text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Architectural Glass Systems
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl">
        A Window To The Sky
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
        Create elegant outdoor living environments flooded with
        natural light while remaining fully protected from rain,
        wind, and seasonal weather conditions.
      </p>

    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        "Panoramic Views",
        "Natural Daylight",
        "Weather Protection",
        "Architectural Design",
      ].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-gray-200 p-6 text-center"
        >
          <p className="font-medium text-[#0A192F]">
            {item}
          </p>
        </div>
      ))}

    </div>

  </div>

</section>

<section className="py-24 lg:py-32">

  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

    <div className="relative h-[450px] overflow-hidden rounded-[32px]">

      <Image
        src="/pergolas/glass-roof/6.png"
        alt="Panoramic Glass Pergola"
        fill
        className="object-cover"
      />

    </div>

    <div>

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Panoramic Architecture
      </p>

      <h2 className="mb-8 text-4xl font-light text-[#0A192F]">
        Natural Light Without Compromise
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-gray-600">
        Glass pergola systems transform terraces, patios, and
        outdoor living areas into bright architectural spaces
        that maintain an uninterrupted connection with nature.
      </p>

      <p className="mb-8 text-lg leading-relaxed text-gray-600">
        The minimalist structural design maximizes transparency,
        allowing daylight to flood the space while preserving
        unobstructed views throughout every season.
      </p>

      <div className="space-y-4">

        <div className="rounded-xl border border-gray-200 p-4">
          Panoramic views in every direction
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          Maximum daylight transmission
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          Seamless architectural integration
        </div>

      </div>

    </div>

  </div>

</section>

<section className="bg-gray-50 py-24 lg:py-32">

  <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

    <div>

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Motorized Innovation
      </p>

      <h2 className="mb-8 text-4xl font-light text-[#0A192F]">
        Effortless Open-Air Living
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-gray-600">
        Motorized sliding glass roof systems allow panels to open
        smoothly to any desired position, creating the perfect
        balance between shade, ventilation, and sunlight.
      </p>

      <p className="mb-8 text-lg leading-relaxed text-gray-600">
        Advanced wheel-free track technology minimizes maintenance
        requirements while delivering silent, reliable operation
        for years of daily use.
      </p>

      <div className="space-y-4">

        <div className="rounded-xl bg-white p-4">
          Up to 80% roof opening
        </div>

        <div className="rounded-xl bg-white p-4">
          2–5 panel configurations
        </div>

        <div className="rounded-xl bg-white p-4">
          Wheel-free sliding technology
        </div>

      </div>

    </div>

    <div className="relative h-[450px] overflow-hidden rounded-[32px]">

      <Image
        src="/pergolas/glass-roof/7.png"
        alt="Motorized Sliding Glass Roof"
        fill
        className="object-cover"
      />

    </div>

  </div>

</section>

<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Hidden Engineering
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Invisible Comfort
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Every detail is designed to remain unseen, preserving
        clean architectural lines while delivering exceptional
        performance.
      </p>

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      <div className="rounded-[32px] border border-gray-200 p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Integrated Drainage
        </h3>

        <p className="leading-relaxed text-gray-600">
          Rainwater is collected through concealed channels and
          guided through internal 80mm drainage systems hidden
          within the structure's posts, ensuring efficient
          evacuation without visible gutters.
        </p>

      </div>

      <div className="rounded-[32px] border border-gray-200 p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Architectural LED Lighting
        </h3>

        <p className="leading-relaxed text-gray-600">
          Optional integrated LED lighting can be embedded directly
          into the structural beams, creating elegant illumination
          that extends the usability of the space long after sunset.
        </p>

      </div>

    </div>

  </div>

</section>


<section className="bg-gray-50 py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Applications
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Designed For Exceptional Spaces
      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        "Luxury Residences",
        "Poolside Lounges",
        "Outdoor Dining Areas",
        "Hotel Terraces",
        "Winter Gardens",
        "Commercial Spaces",
      ].map((item) => (

        <div
          key={item}
          className="rounded-[28px] bg-white p-8 text-center shadow-sm"
        >

          <h3 className="text-xl font-light text-[#0A192F]">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Glazing Options
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Tailored Performance
      </h2>

    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      <div className="rounded-[32px] border border-gray-200 p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Laminated Glass
        </h3>

        <p className="leading-relaxed text-gray-600">
          Premium transparency, enhanced safety,
          acoustic insulation, and a refined architectural appearance.
        </p>

      </div>

      <div className="rounded-[32px] border border-gray-200 p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Chamber Glass
        </h3>

        <p className="leading-relaxed text-gray-600">
          Improved thermal performance and enhanced energy efficiency
          for year-round comfort.
        </p>

      </div>

      <div className="rounded-[32px] border border-gray-200 p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Polycarbonate
        </h3>

        <p className="leading-relaxed text-gray-600">
          Lightweight, highly impact-resistant,
          and ideal for demanding environments.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="bg-gray-50 py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Performance
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Engineered For Every Season
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Developed to meet demanding architectural standards,
        our glass pergola systems combine durability,
        weather resistance, and long-term reliability.
      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          title: "Wind Resistance",
          value: "CE Certified",
        },
        {
          title: "Snow Loads",
          value: "Architectural Grade",
        },
        {
          title: "Water Tightness",
          value: "Integrated Drainage",
        },
        {
          title: "Structure",
          value: "Powder-Coated Aluminum",
        },
        {
          title: "Roof Options",
          value: "Glass or Polycarbonate",
        },
        {
          title: "Opening",
          value: "Up To 80%",
        },
        {
          title: "Lighting",
          value: "Integrated LEDs",
        },
        {
          title: "Warranty",
          value: "Structural Guarantee",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-[28px] bg-white p-8 shadow-sm"
        >

          <div className="mb-3 text-sm uppercase tracking-wider text-gray-500">
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

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center text-white">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
        Architectural Benefits
      </p>

      <h2 className="text-4xl font-light md:text-6xl">
        Why Designers Choose Glass
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Maximum Natural Light",
          text: "Flood outdoor spaces with daylight while maintaining protection."
        },
        {
          title: "Minimal Visual Impact",
          text: "Preserve views and architectural openness."
        },
        {
          title: "Elegant Integration",
          text: "Complements both contemporary and traditional architecture."
        },
        {
          title: "Year-Round Enjoyment",
          text: "Extend outdoor living regardless of weather conditions."
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


<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
      Start Your Project
    </p>

    <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-6xl">
      Bring More Light Into Your Architecture
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
      Create elegant outdoor spaces that remain bright,
      open, and protected throughout every season.
      Our team will help you design a bespoke solution
      tailored to your property.
    </p>

    <div className="flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        href="/contact"
        className="rounded-full bg-[#0A192F] px-10 py-4 text-white transition hover:bg-[#172A45]"
      >
        Request Consultation
      </Link>

      <Link
        href="/collections"
        className="rounded-full border border-[#0A192F] px-10 py-4 text-[#0A192F] transition hover:bg-[#0A192F] hover:text-white"
      >
        Explore Collections
      </Link>

    </div>

  </div>

</section>
       </div>
    </div>
  );
}

