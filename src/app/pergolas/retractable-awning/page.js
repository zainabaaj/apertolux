import Link from 'next/link';
import Image from 'next/image';

import PoolSlider from "@/components/PoolSlider";
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Full Cassette Retractable Awnings | Apertolux',
  description: 'Extend your living space outward with our premium full-cassette motorized retractable awnings.',
};

export default function RetractableAwningsPage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/awning/3.png" // Update with your actual image path
          alt="Apertolux Full Cassette Retractable Awnings"
          fill
          priority
          className="object-cover"
        />
      
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      
        {/* Hero Content */}
       <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Retractable Awnings
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Seamless architectural integration. Extend your living space outward with our motorized, fully enclosed cassette awnings.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10, paddingBottom: '4rem' }}>
        
        {/* Intro Block */}
        <section className="relative z-10 -mt-20 px-6">

  <div className="mx-auto max-w-7xl rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl md:p-12 lg:p-16">

    <div className="text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Full Cassette Awnings
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl">
        Luxury Shade On Demand
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
        Designed to disappear when not in use and transform
        outdoor spaces when needed, our full cassette awnings
        combine architectural elegance with effortless comfort.
      </p>

    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        "Motorized Operation",
        "Full Cassette Protection",
        "Integrated LED Lighting",
        "Premium European Fabrics",
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

        {/* Feature 1: The Cassette */}
        <section className="py-24 lg:py-32">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
      Full Cassette Technology
    </p>

    <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-6xl">
      Protection Beyond Ordinary Awnings
    </h2>

    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
      Unlike conventional awnings, the entire fabric,
      roller, and folding arm system retract into a
      sealed aluminum cassette, protecting every
      component from rain, dust, and UV exposure.
    </p>

  </div>

</section>
        {/* Feature 2: High Performance Mechanics */}
    <section className="pb-28">

  <div className="mx-auto max-w-7xl px-6 lg:px-12">

    <div className="grid md:grid-cols-3 gap-8">

      <div className="rounded-[30px] border border-gray-200 p-10">

        <h3 className="mb-4 text-2xl font-light text-[#0A192F]">
          Spanish Fabric
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Premium Sauleda fabrics from Spain deliver exceptional UV
          resistance and long-term color stability with up to 10 years
          fade-resistance performance.
        </p>

      </div>

      <div className="rounded-[30px] border border-gray-200 p-10">

        <h3 className="mb-4 text-2xl font-light text-[#0A192F]">
          Integrated LED Lighting
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Seamlessly integrated LED strips within the cassette and arms
          create a sophisticated atmosphere long after sunset.
        </p>

      </div>

      <div className="rounded-[30px] border border-gray-200 p-10">

        <h3 className="mb-4 text-2xl font-light text-[#0A192F]">
          Chain Arm Technology
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Advanced chain-arm engineering ensures exceptional fabric
          tension, smooth movement, and outstanding durability.
        </p>

      </div>

    </div>

  </div>

</section>
   
   <section className="py-28 bg-[#F8F8F8]">

  <div className="mx-auto max-w-7xl px-6 lg:px-12">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      <div className="relative h-[650px] overflow-hidden rounded-[40px]">

        <Image
          src="/pergolas/awning/4.png"
          alt="Retractable Awning"
          fill
          className="object-cover"
        />

      </div>

      <div>

        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#C5A880]">
          Architectural Design
        </p>

        <h2 className="mb-8 text-4xl md:text-5xl font-light text-[#0A192F]">
          Invisible When Closed
        </h2>

        <p className="text-lg leading-relaxed text-gray-600 mb-8">
          The elegant oval-shaped cassette completely conceals all
          mechanical components when retracted. The result is a clean,
          refined architectural detail rather than a visible outdoor
          mechanism.
        </p>

        <div className="space-y-4">

          <div>✓ Hidden hardware</div>
          <div>✓ Flush side covers</div>
          <div>✓ Seamless appearance</div>
          <div>✓ Modern architectural aesthetics</div>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="py-28">

  <div className="mx-auto max-w-7xl px-6 lg:px-12">

    <div className="mb-20 text-center">

      <h2 className="text-4xl md:text-5xl font-light text-[#0A192F]">
        Designed For Exceptional Spaces
      </h2>

    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      <div>

        <div className="grid sm:grid-cols-2 gap-6">

          {[
            "Luxury Villas",
            "Private Residences",
            "Hotels",
            "Restaurants",
            "Beach Clubs",
            "Rooftop Terraces",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[24px] border border-gray-200 p-6"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

      <div className="relative h-[600px] overflow-hidden rounded-[40px]">

        <Image
          src="/pergolas/awning/2.png"
          alt="Applications"
          fill
          className="object-cover"
        />

      </div>

    </div>

  </div>

</section>

<section className="py-28 bg-[#0A192F] text-white">

  <div className="mx-auto max-w-7xl px-6 lg:px-12">

    <div className="mb-20 text-center">

      <h2 className="text-4xl md:text-5xl font-light">
        Technical Specifications
      </h2>

    </div>

    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

      {[
        ["Width", "2m – 6m"],
        ["Projection", "1.5m – 3m"],
        ["Pitch", "0° – 25°"],
        ["Frame", "Aluminum"],
        ["Control", "Motorized"],
        ["Lighting", "Integrated LED"],
      ].map(([title, value]) => (
        <div
          key={title}
          className="rounded-[24px] border border-white/10 p-8 text-center"
        >
          <div className="text-sm uppercase tracking-widest text-gray-400 mb-3">
            {title}
          </div>

          <div className="text-xl font-light">
            {value}
          </div>
        </div>
      ))}

    </div>

  </div>

</section>
<section className="py-32">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <h2 className="mb-8 text-4xl md:text-6xl font-light text-[#0A192F]">
      Extend Your Living Space Outdoors
    </h2>

    <p className="mb-12 text-xl text-gray-600">
      Discover fully customized retractable awning solutions designed
      specifically for your property.
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center rounded-full bg-[#0A192F] px-10 py-5 text-white transition hover:bg-[#172A45]"
    >
      Request A Consultation
    </Link>

  </div>

</section>
      </div>
    </div>
  );
}

