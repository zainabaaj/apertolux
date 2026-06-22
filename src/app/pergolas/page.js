import Image from "next/image";
import Link from "next/link";
export default function Pergolas() {
const collections = [
  {
    title: "Retractable Awnings",
    image: "/pergolas/awning/1.png",
    href: "/pergolas/retractable-awning",
    description:
      "Elegant motorized awnings that extend comfort and shade while preserving architectural beauty.",
  },

  {
    title: "Electric Retractable Carports",
    image: "/pergolas/carport/3.png",
    href: "/pergolas/carports",
    description:
      "Smart motorized protection for vehicles with sleek architectural styling.",
  },

  {
    title: "Fixed Glass Pergolas",
    image: "/pergolas/glass-roof/5.png",
    href: "/pergolas/fixed-glass",
    description:
      "Transparent architectural structures designed to maximize daylight and views.",
  },

  {
    title: "Aluminum Pergolas",
    image: "/pergolas/aluminum/1.png",
    href: "/pergolas/aluminum",
    description:
      "Fixed and retractable aluminum systems engineered for year-round outdoor living.",
  },

  {
    title: "Winter Gardens",
    image: "/pergolas/winter-garden/1.png",
    href: "/pergolas/winter-garden",
    description:
      "Create elegant all-season living spaces protected from wind, rain and cold.",
  },

  {
    title: "Luxury Parasols",
    image: "/pergolas/parasols/1.jpg",
    href: "/pergolas/parasols",
    description:
      "Designer freestanding shade solutions combining flexibility with timeless elegance.",
  },
];

  return (
    <div>
      
      <section className="relative h-[700px] overflow-hidden">
        <Image
          src="/pergolas/aluminum/1.png" 
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
              Architectural Pergolas            
            </h1>
      
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
             Expand your living space with bespoke structures engineered for perfect climate control and absolute luxury.
             
            </p>
          </div>
        </div>
      </section>
      {/* intro section */}
      <section className="py-24 lg:py-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
            Outdoor Architecture
          </p>

          <h2 className="mb-8 text-4xl md:text-6xl font-light text-[#0A192F]">
            More Than Shade
          </h2>

          <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
            Apertolux pergolas are engineered architectural systems that
            redefine how outdoor spaces are experienced. From luxury
            residences and rooftop terraces to hotels, restaurants and
            wellness resorts, every structure is designed to create a
            seamless transition between indoor comfort and outdoor living.
          </p>

        </div>

      </section>
      {/* Collections Showcase */}
      <section className="py-24 lg:py-32 bg-[#F8F8F6]">

      <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

      <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
      Collections
      </p>

      <h2 className="text-4xl md:text-6xl font-light text-[#0A192F]">
      Outdoor Living Solutions
      </h2>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

      {collections.map((item) => (

      <Link
      key={item.title}
      href={item.href}
      className="group overflow-hidden rounded-[32px] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >

      <div className="relative h-[320px] overflow-hidden">

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

      </div>

      <div className="p-8">

        <h3 className="mb-4 text-2xl font-light text-[#0A192F]">
          {item.title}
        </h3>

        <p className="text-gray-600 leading-relaxed">
          {item.description}
        </p>

      </div>

      </Link>

      ))}

      </div>

      </div>

      </section>
      {/* why apertolux Section */}
        <section className="py-24 lg:py-32">

          <div className="mx-auto max-w-7xl px-6 lg:px-12">

          <div className="mb-20 text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
            Why Apertolux
          </p>

          <h2 className="text-4xl md:text-6xl font-light text-[#0A192F]">
            Engineered For Every Season
          </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "Premium Aluminium",
              text: "Marine-grade aluminum structures built for exceptional durability."
            },

            {
              title: "Smart Automation",
              text: "Motorized systems with remote control and optional smart integration."
            },

            {
              title: "Weather Protection",
              text: "Engineered to withstand sun, rain and changing seasonal conditions."
            },

            {
              title: "Bespoke Design",
              text: "Tailored dimensions, colours and finishes for every project."
            },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[28px] border border-gray-200 p-10"
              >

                <h3 className="mb-4 text-xl font-medium text-[#0A192F]">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

        </section>
        {/* application section */}
        {/* Applications */}
        <section className="py-24 lg:py-32 bg-[#0A192F]">

          <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-16 text-center text-white">

              <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
                Applications
              </p>

              <h2 className="text-4xl md:text-6xl font-light">
                Designed For Extraordinary Spaces
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
                From luxury residences to hospitality destinations,
                Apertolux pergolas transform outdoor environments into
                sophisticated architectural experiences.
              </p>

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
                  image: "/pergolas/applications/outdoor.jpg",
                },

                {
                  title: "Commercial Spaces",
                  image: "/pergolas/applications/commercial2.jpg",
                },

                {
                  title: "Winter Gardens",
                  image: "/pergolas/applications/wintergarden.jpg",
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
       {/* CTA Sections */}
      <section className="py-32 bg-[#0A192F] text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
            Bespoke Consultation
          </p>

          <h2 className="mb-8 text-4xl md:text-6xl font-light">
            Design Your Outdoor Sanctuary
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300">
            Our specialists will help you select the ideal pergola system
            for your residence, hospitality project, rooftop or commercial space.
          </p>

          <Link
            href="/contact"
            className="rounded-full bg-white px-10 py-4 text-[#0A192F]"
          >
            Request Consultation
          </Link>

        </div>

      </section>
    </div>
  );
}