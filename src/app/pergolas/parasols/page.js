import Link from 'next/link';
import Image from 'next/image';



export const metadata = {
  title: 'Luxury Parasols | Apertolux',
  description: 'Freestanding architectural parasols featuring 360° rotation, premium UV80+ canvas, and integrated smart lighting.',
};

export default function ParasolsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/parasols/7.jpg" // Update with your actual image path
          alt="Apertolux Luxury Architectural Parasols"
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
              Luxury Parasol Collection
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Uncompromising shade. Freestanding, 360-degree rotating architectural parasols designed for premium outdoor living.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
       <section className="relative z-10 -mt-20 px-6">

  <div className="mx-auto max-w-7xl rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl md:p-12 lg:p-16">

    <div className="text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Svalbard Collection
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl">
        The Art Of Luxury Shade
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
        Elegant freestanding parasols designed to create
        sophisticated outdoor environments while providing
        exceptional protection from sun and weather.
      </p>

    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        "360° Rotation",
        "UV80+ Protection",
        "Premium Aluminum",
        "Smart Accessories",
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
        src="/pergolas/parasols/1.jpg"
        alt="Svalbard Cantilever Parasol"
        fill
        className="object-cover"
      />

    </div>

    <div>

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Dynamic Shade
      </p>

      <h2 className="mb-8 text-4xl font-light text-[#0A192F]">
        Follow The Sun
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-gray-600">
        Our cantilever parasols rotate a full 360 degrees,
        allowing you to reposition shade effortlessly throughout
        the day without moving furniture or bases.
      </p>

      <p className="mb-8 text-lg leading-relaxed text-gray-600">
        The side-post design keeps the shaded area completely
        unobstructed while maintaining exceptional structural stability.
      </p>

      <div className="space-y-4">

        <div className="rounded-xl border border-gray-200 p-4">
          Full 360° Rotation
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          Space-Saving Cantilever Design
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          Smooth Crank Operation
        </div>

      </div>

    </div>

  </div>

</section>

<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Applications
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Designed For Exceptional Outdoor Spaces
      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {[
        "Luxury Villas",
        "Poolside Lounges",
        "Hotel Terraces",
        "Beach Clubs",
        "Outdoor Restaurants",
        "Private Gardens",
      ].map((item) => (

        <div
          key={item}
          className="rounded-[28px] border border-gray-200 p-8 text-center transition duration-300 hover:shadow-lg"
        >

          <h3 className="text-xl font-light text-[#0A192F]">
            {item}
          </h3>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="bg-gray-50 py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Customization
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Tailored To Your Environment
      </h2>

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      <div className="rounded-[32px] bg-white p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Fabric Colors
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• White</li>
          <li>• Dove Grey</li>
          <li>• Dark Grey</li>
        </ul>

      </div>

      <div className="rounded-[32px] bg-white p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Frame Finishes
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• White</li>
          <li>• Dove Grey</li>
          <li>• Graphite</li>
          <li>• Teak Wood Effect</li>
        </ul>

      </div>

    </div>

  </div>

</section>

<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
      Lifestyle
    </p>

    <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-6xl">
      From Sunny Afternoons To Elegant Evenings
    </h2>

    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
      Integrated lighting and optional Bluetooth audio transform
      your parasol into the focal point of outdoor entertaining.
      Enjoy relaxed lunches, sunset cocktails, and evening
      gatherings beneath beautifully illuminated shade.
    </p>

  </div>

</section>
<section className="bg-[#0A192F] py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center text-white">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
        Why Svalbard
      </p>

      <h2 className="text-4xl font-light md:text-6xl">
        Luxury In Every Detail
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Architectural Design",
          text: "Sophisticated forms that elevate outdoor environments.",
        },

        {
          title: "Premium Protection",
          text: "Waterproof fabric with certified UV80+ performance.",
        },

        {
          title: "Dynamic Coverage",
          text: "360° rotation for shade exactly where you need it.",
        },

        {
          title: "Smart Accessories",
          text: "Integrated lighting and Bluetooth entertainment options.",
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

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Specifications
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Built To Perform
      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          title: "Fabric",
          value: "250g Waterproof Polyester",
        },

        {
          title: "UV Protection",
          value: "UV80+ Certified",
        },

        {
          title: "Rotation",
          value: "360° Cantilever System",
        },

        {
          title: "Frame",
          value: "Powder-Coated Aluminum",
        },

        {
          title: "Operation",
          value: "Manual Crank System",
        },

        {
          title: "Base",
          value: "Granite or Steel",
        },

        {
          title: "Lighting",
          value: "Optional LED System",
        },

        {
          title: "Audio",
          value: "Bluetooth Speaker Option",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-[28px] border border-gray-200 bg-white p-8"
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

  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
      Start Your Project
    </p>

    <h2 className="mb-8 text-4xl font-light text-white md:text-6xl">
      Create Your Perfect Shade Experience
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300">
      Discover how the Svalbard Collection can transform
      terraces, poolside lounges, and outdoor living spaces
      into elegant destinations for relaxation and entertaining.
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
    </div>
  );
}
