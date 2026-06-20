import Link from "next/link";

const collections = [
  {
    title: "Smart Pools",
    description:
      "Movable pool floors, automatic covers, and intelligent water solutions.",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Pergolas",
    description:
      "Bioclimatic and retractable pergola systems designed for modern living.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Smart Carports",
    description:
      "Elegant vehicle protection engineered for all weather conditions.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Shades & Shutters",
    description:
      "Automated shading and privacy solutions for luxury spaces.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Hot Tubs",
    description:
      "Premium wellness experiences tailored to your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Outdoor Living",
    description:
      "Integrated outdoor environments that redefine luxury.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function HomePage() {
  const container =
    "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 xl:px-12";

  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2200&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 flex min-h-[100svh] items-center">
          <div className={container}>
            <div className="max-w-5xl">
              <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.35em] text-zinc-300">
                Luxury Outdoor Living
              </p>

              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-[0.95]">
                Transform Outdoor Spaces Into
                <span className="block font-medium">
                  Intelligent Luxury Living
                </span>
              </h1>

              <p className="mb-10 max-w-3xl text-base md:text-lg xl:text-xl text-zinc-300">
                Premium movable pool floors, retractable pergolas,
                smart carports, and architectural shading systems
                engineered for exceptional spaces.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/collections"
                  className="rounded-full bg-white px-6 py-3 md:px-8 md:py-4 text-black transition hover:bg-zinc-200"
                >
                  Explore Collections
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white px-6 py-3 md:px-8 md:py-4 transition hover:bg-white hover:text-black"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-zinc-800 bg-zinc-950">
        <div className={`${container} py-6 md:py-8`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>✓ Custom Engineered</div>
            <div>✓ Premium Materials</div>
            <div>✓ Smart Automation</div>
            <div>✓ Residential & Commercial</div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className={`${container} py-16 md:py-24 xl:py-32`}>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 uppercase tracking-[0.3em] text-zinc-500">
            Collections
          </p>

          <h2 className="text-3xl md:text-5xl xl:text-6xl">
            Crafted For Extraordinary Spaces
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {collections.map((item) => (
            <div
              key={item.title}
              className="group h-full overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl">{item.title}</h3>

                <p className="mb-4 text-zinc-400">
                  {item.description}
                </p>

                <Link
                  href="#"
                  className="text-sm uppercase tracking-widest text-white"
                >
                  Discover →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="bg-zinc-950 py-16 md:py-24 xl:py-32">
        <div
          className={`${container} grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center`}
        >
          <div>
            <p className="mb-3 uppercase tracking-[0.3em] text-zinc-500">
              Featured Project
            </p>

            <h2 className="mb-6 text-3xl md:text-5xl xl:text-6xl">
              Designed Around Extraordinary Spaces
            </h2>

            <p className="mb-8 text-zinc-400 text-lg">
              Every Apertolux project is tailored to complement
              architecture, lifestyle, and environment while
              delivering exceptional performance.
            </p>

            <Link
              href="/projects"
              className="rounded-full border border-white px-8 py-4 transition hover:bg-white hover:text-black"
            >
              View Projects
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop"
            alt="Luxury Project"
            className="w-full aspect-[16/10] object-cover rounded-[32px]"
          />
        </div>
      </section>

      {/* WHY APERTOLUX */}
      <section className={`${container} py-16 md:py-24 xl:py-32`}>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl xl:text-6xl">
            Why Apertolux
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-[32px] border border-zinc-800 p-8">
            <h3 className="mb-4 text-2xl">Engineering</h3>
            <p className="text-zinc-400">
              Built for demanding environmental conditions with
              long-term reliability.
            </p>
          </div>

          <div className="rounded-[32px] border border-zinc-800 p-8">
            <h3 className="mb-4 text-2xl">Design</h3>
            <p className="text-zinc-400">
              Architectural elegance that integrates seamlessly
              into modern projects.
            </p>
          </div>

          <div className="rounded-[32px] border border-zinc-800 p-8">
            <h3 className="mb-4 text-2xl">Innovation</h3>
            <p className="text-zinc-400">
              Smart automation and premium technology for
              effortless everyday use.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-zinc-950 py-16 md:py-24 xl:py-32">
        <div className={container}>
          <h2 className="mb-16 text-center text-3xl md:text-5xl xl:text-6xl">
            Our Process
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "Consultation",
              "Design",
              "Engineering",
              "Manufacturing",
              "Installation",
            ].map((step) => (
              <div
                key={step}
                className="rounded-[24px] border border-zinc-800 p-6 text-center"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 xl:py-36">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl md:text-5xl xl:text-6xl">
            Let’s Create Your Outdoor Masterpiece
          </h2>

          <p className="mb-10 text-base md:text-lg text-zinc-400">
            Collaborate with our team to design a bespoke outdoor
            experience tailored to your vision.
          </p>

          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-4 text-black transition hover:bg-zinc-200"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}