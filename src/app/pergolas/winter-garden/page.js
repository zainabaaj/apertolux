import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Bioclimatic Winter Gardens | Apertolux',
  description: 'Transform your outdoor space into a 365-day living area with our bespoke bioclimatic winter garden glass and screen enclosures.',
};

export default function WinterGardenPage() {
  return (
    <div className="w-full bg-gray-50 animate-[fadeIn_0.5s_ease-in]">
      
      {/* High-End Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] lg:h-[70vh] bg-[#172A45] flex items-center justify-center overflow-hidden">
        <Image
          src="/pergolas/winter-garden/1.png" // Update with your actual image path
          alt="Apertolux Bioclimatic Winter Garden"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight">
            Bioclimatic Winter Gardens
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed drop-shadow-md font-light">
            Absolute climate control for all four seasons. Enclose your bioclimatic roof with premium architectural glass and dynamic zip screens.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 lg:-mt-24 pb-16 lg:pb-24 flex flex-col items-center">
        
        {/* Intro Block */}
        <section className="py-24 lg:py-32">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
      Lifestyle
    </p>

    <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-6xl">
      Outdoor Living Without Seasons
    </h2>

    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
      Experience your terrace, garden, pool area, or rooftop
      throughout the entire year. Protected from rain, wind,
      snow, and excessive heat, your Winter Garden becomes
      a seamless extension of your home.
    </p>

  </div>

</section>
        {/* Feature 1: Architectural Glass Systems */}
      <section className="bg-[#F8F8F8] py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Intelligent Engineering
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        A Complete Climate Ecosystem
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "Adjustable Louvers",
          text: "Control sunlight and natural ventilation."
        },

        {
          title: "Motorized Glass",
          text: "Transform open terraces into enclosed spaces."
        },

        {
          title: "Zip Screens",
          text: "Block wind, rain, and excessive glare."
        },

        {
          title: "Weather Sensors",
          text: "Automatically respond to changing conditions."
        },
      ].map((item) => (

        <div
          key={item.title}
          className="rounded-[28px] bg-white p-8"
        >

          <h3 className="mb-4 text-xl text-[#0A192F]">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

        {/* Feature 2: Zip Screens & Climate Control */}
       <section className="py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Tailored To Every Project
      </h2>

    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      <div className="rounded-[32px] border border-gray-200 p-10">
        <h3 className="mb-4 text-2xl text-[#0A192F]">
          Freestanding
        </h3>

        <p className="text-gray-600">
          Independent garden pavilions and poolside retreats.
        </p>
      </div>

      <div className="rounded-[32px] border border-gray-200 p-10">
        <h3 className="mb-4 text-2xl text-[#0A192F]">
          Wall Mounted
        </h3>

        <p className="text-gray-600">
          Seamless integration with residential architecture.
        </p>
      </div>

      <div className="rounded-[32px] border border-gray-200 p-10">
        <h3 className="mb-4 text-2xl text-[#0A192F]">
          Commercial
        </h3>

        <p className="text-gray-600">
          Hotels, restaurants, rooftop lounges and resorts.
        </p>
      </div>

    </div>

  </div>

</section>
<section className="py-24 lg:py-32">

  <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

    <div className="relative h-[650px] overflow-hidden rounded-[40px]">

      <Image
        src="/pergolas/winter-garden/4.png"
        alt="Luxury Winter Garden"
        fill
        className="object-cover"
      />

    </div>

    <div>

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Luxury Living
      </p>

      <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-5xl">
        A Space That Evolves With Your Lifestyle
      </h2>

      <p className="text-lg leading-relaxed text-gray-600 mb-8">
        From intimate family gatherings to elegant entertaining,
        a Winter Garden becomes the most versatile space in your home.
        Bright, protected, and seamlessly connected to nature,
        it creates a unique environment for everyday living.
      </p>

      <div className="space-y-4">

        <div className="rounded-xl border border-gray-200 p-4">
          Year-Round Dining
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          Outdoor Lounge Areas
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          Poolside Retreats
        </div>

        <div className="rounded-xl border border-gray-200 p-4">
          Hospitality Spaces
        </div>

      </div>

    </div>

  </div>

</section>
        
      <section className="bg-[#0A192F] py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center text-white">

      <h2 className="text-4xl font-light md:text-6xl">
        Designed For Exceptional Spaces
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        "Luxury Villas",
        "Pool Enclosures",
        "Hotels & Resorts",
        "Rooftop Lounges",
      ].map((item) => (

        <div
          key={item}
          className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center text-white"
        >
          {item}
        </div>

      ))}

    </div>

  </div>

</section>
<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-20 text-center">

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Technical Highlights
      </h2>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {[
        ["Roof System", "Motorized Louvers"],
        ["Glass", "Tempered / Double Glazed"],
        ["Screens", "Zip Track Technology"],
        ["Drainage", "Hidden Internal"],
        ["Automation", "Smart Home Ready"],
        ["Lighting", "Integrated LED"],
        ["Sensors", "Rain & Wind"],
        ["Structure", "Powder Coated Aluminum"],
      ].map(([title, value]) => (

        <div
          key={title}
          className="rounded-[28px] border border-gray-200 p-8"
        >

          <div className="mb-3 text-sm uppercase tracking-wider text-gray-500">
            {title}
          </div>

          <div className="text-xl text-[#0A192F]">
            {value}
          </div>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-6xl px-6">

    <div className="rounded-[40px] bg-[#F8F8F8] p-10 md:p-16 lg:p-20">

      <div className="text-center">

        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
          Long-Term Value
        </p>

        <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-6xl">
          More Than An Outdoor Structure
        </h2>

        <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
          A professionally designed Winter Garden adds usable living
          space, increases property appeal, and creates a year-round
          entertainment environment. It transforms underutilized
          outdoor areas into premium architectural assets.
        </p>

      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">

        <div className="text-center">
          <div className="mb-4 text-4xl font-light text-[#0A192F]">
            365
          </div>
          <div className="text-gray-600">
            Days of Outdoor Living
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 text-4xl font-light text-[#0A192F]">
            4
          </div>
          <div className="text-gray-600">
            Seasons of Comfort
          </div>
        </div>

        <div className="text-center">
          <div className="mb-4 text-4xl font-light text-[#0A192F]">
            100%
          </div>
          <div className="text-gray-600">
            Custom Designed
          </div>
        </div>

      </div>

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
        Designed Without Compromise
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {[
        {
          title: "European Engineering",
          text: "Precision-built systems developed for long-term durability."
        },

        {
          title: "Architectural Integration",
          text: "Designed to complement contemporary and classic architecture."
        },

        {
          title: "Climate Intelligence",
          text: "Automated weather response for year-round comfort."
        },

        {
          title: "Fully Custom",
          text: "Every project is tailored to the property and lifestyle."
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
        Customization
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-6xl">
        Tailored To Your Vision
      </h2>

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      <div className="rounded-[32px] border border-gray-200 p-10">

        <h3 className="mb-6 text-2xl text-[#0A192F]">
          Structure Options
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Wall Mounted</li>
          <li>• Freestanding</li>
          <li>• Corner Installation</li>
          <li>• Large Commercial Layouts</li>
        </ul>

      </div>

      <div className="rounded-[32px] border border-gray-200 p-10">

        <h3 className="mb-6 text-2xl text-[#0A192F]">
          Finishes & Features
        </h3>

        <ul className="space-y-3 text-gray-600">
          <li>• Custom RAL Colors</li>
          <li>• Integrated LED Lighting</li>
          <li>• Sliding Glass Systems</li>
          <li>• Motorized Zip Screens</li>
          <li>• Smart Home Controls</li>
        </ul>

      </div>

    </div>

  </div>

</section>
<section className="py-24 lg:py-32">

  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
      Start Your Project
    </p>

    <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-6xl">
      Create Your Year-Round Retreat
    </h2>

    <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
      Discover how a custom Apertolux Winter Garden can transform
      your terrace, garden, rooftop, or poolside area into a
      sophisticated four-season living environment.
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

      </main>
    </div>
  );
}