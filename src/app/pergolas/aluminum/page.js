import Link from 'next/link';
import Image from 'next/image';

// Assuming you have your PoolSlider/PergolaSlider component
import PoolSlider from "@/components/PoolSlider"; 
import "swiper/css";
import "swiper/css/navigation";

export const metadata = {
  title: 'Fixed & Retractable Pergolas | Apertolux',
  description: 'Choose between dynamic retractable bioclimatic roofs and permanent fixed architectural pergolas.',
};

export default function FixedAndRetractablePage() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
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
              Fixed & Retractable Pergolas
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Absolute climate control or permanent architectural shelter. Engineer your outdoor living space exactly how you envision it.
            </p>
          </div>
        </div>
      </section>
<section className="relative -mt-20 z-10 px-6">
  <div className="mx-auto max-w-7xl rounded-[32px] border border-gray-200 bg-white p-8 md:p-12 lg:p-16">

    <div className="text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Architectural Pergola Systems
      </p>

      <h2 className="mx-auto max-w-4xl text-4xl font-light text-[#0A192F] md:text-5xl">
        Fixed & Retractable Aluminum Pergolas
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
        Engineered for luxury residences, hospitality projects,
        rooftop terraces, and commercial environments. Choose between
        permanent architectural shelter or dynamic climate-responsive
        retractable systems.
      </p>

    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        "Marine-Grade Aluminum",
        "Motorized Automation",
        "Hidden Drainage System",
        "Custom Built Solutions",
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


<section className="bg-gray-50 py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">

      <h2 className="text-4xl font-light text-[#0A192F]">
        Feature Comparison
      </h2>

    </div>

    <div className="space-y-5">

      {[
        ["Weather Protection", "Permanent", "Adaptive"],
        ["Sun Control", "Limited", "Fully Adjustable"],
        ["Ventilation", "Passive", "Active"],
        ["Automation", "Optional", "Standard"],
        ["Maintenance", "Minimal", "Low"],
        ["Open Sky Experience", "No", "Yes"],
      ].map(([feature, fixed, retractable]) => (
        <div
          key={feature}
          className="grid grid-cols-3 rounded-2xl border border-gray-200 bg-white p-6"
        >
          <div className="font-medium text-[#0A192F]">
            {feature}
          </div>

          <div className="text-center text-gray-600">
            {fixed}
          </div>

          <div className="text-center font-medium text-[#0A192F]">
            {retractable}
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
        Engineering Excellence
      </p>

      <h2 className="text-4xl font-light md:text-6xl">
        Built For Every Season
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
        Every Apertolux pergola is engineered to deliver
        exceptional performance, durability, and comfort
        in demanding environments.
      </p>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Hidden Drainage",
          text: "Integrated drainage channels direct rainwater discreetly through the structure."
        },

        {
          title: "Premium Powder Coating",
          text: "Architectural-grade finishes provide exceptional resistance to corrosion and fading."
        },

        {
          title: "Smart Sensors",
          text: "Automatic weather sensors respond instantly to wind, rain and changing conditions."
        },

        {
          title: "Integrated Lighting",
          text: "Ambient LED solutions create sophisticated outdoor environments day and night."
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
        >

          <h3 className="mb-4 text-xl font-medium text-white">
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

  <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

    <div className="mb-16 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Applications
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Designed For Extraordinary Spaces
      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        {
          title: "Luxury Villas",
          image: "/pergolas/applications/villa.jpg",
        },

        {
          title: "Poolside Retreats",
          image: "/pergolas/applications/pool.jpg",
        },

        {
          title: "Hotels & Resorts",
          image: "/pergolas/applications/hotel.jpg",
        },

        {
          title: "Restaurants",
          image: "/pergolas/applications/restaurant.jpg",
        },

        {
          title: "Rooftop Terraces",
          image: "/pergolas/applications/rooftop.jpg",
        },

        {
          title: "Outdoor Lounges",
          image: "/pergolas/applications/outdoor2.png",
        },

        {
          title: "Commercial Spaces",
          image: "/pergolas/applications/commercial2.png",
        },

        {
          title: "Winter Gardens",
          image: "/pergolas/applications/wintergarden2.png",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="group relative h-[320px] overflow-hidden rounded-[28px]"
        >

          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8">

            <h3 className="text-2xl font-light text-white">
              {item.title}
            </h3>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>


<section className="bg-gray-50 py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Configuration Options
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Tailored To Your Project
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2">

      <div className="rounded-[32px] bg-white p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Roof Systems
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Fixed Aluminum Roof</li>
          <li>• Retractable Aluminum Roof</li>
          <li>• Tempered Glass Roof</li>
          <li>• Insulated Panels</li>
        </ul>

      </div>

      <div className="rounded-[32px] bg-white p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Side Enclosures
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Zip Screens</li>
          <li>• Sliding Glass Systems</li>
          <li>• Sliding Walls</li>
          <li>• Roller Shutters</li>
        </ul>

      </div>

      <div className="rounded-[32px] bg-white p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Lighting
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Integrated LED Strips</li>
          <li>• Ambient Lighting</li>
          <li>• Spot Lighting</li>
          <li>• Dimmable Controls</li>
        </ul>

      </div>

      <div className="rounded-[32px] bg-white p-10">

        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Controls
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Remote Control</li>
          <li>• Wall Switches</li>
          <li>• Smartphone Integration</li>
          <li>• Weather Automation</li>
        </ul>

      </div>

    </div>

  </div>

</section>


<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Signature Projects
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Built Around Real Lifestyles
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
        Every Apertolux pergola is designed around the architecture,
        climate, and lifestyle of its owners.
      </p>

    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      {[
        "/pergolas/aluminum/2.png",
        "/pergolas/aluminum/1.png",
        "/pergolas/aluminum/4.png",
      ].map((image, index) => (

        <div
          key={index}
          className="group overflow-hidden rounded-[32px]"
        >

          <div className="relative h-[520px]">

            <Image
              src={image}
              alt="Pergola Project"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

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
        Why Apertolux
      </p>

      <h2 className="text-4xl font-light md:text-6xl">
        The Difference Is In The Details
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Custom Engineering",
          text: "Every pergola is configured specifically for your project requirements.",
        },

        {
          title: "Premium Materials",
          text: "Marine-grade aluminum, architectural coatings, and proven components.",
        },

        {
          title: "Professional Installation",
          text: "Delivered and installed with precision by experienced specialists.",
        },

        {
          title: "Long-Term Support",
          text: "Ongoing service and assistance long after installation.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-[28px] border border-white/10 bg-white/5 p-8"
        >

          <h3 className="mb-4 text-xl font-medium text-white">
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
      Design Your Perfect Outdoor Space
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
      Whether you&apos;re planning a private residence, rooftop terrace,
      hospitality destination, or commercial project,
      our specialists are ready to help bring your vision to life.
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
  );
}
