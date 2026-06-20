import Link from "next/link";
import Image from "next/image";

export default function CollectionsPage() {
  const collections = [
    {
      title: "Pool Covers",
      description:
        "Innovative pool cover systems combining safety, elegance, and functionality.",
      image: "/pools/sliding/slide/2.png",
      href: "/pools",
    },
    {
      title: "Pergolas",
      description:
        "Modern pergolas designed to transform outdoor living spaces.",
      image: "/pergolas/aluminum/4.png",
      href: "/pergolas",
    },
    {
      title: "Hot Tubs",
      description:
        "Luxury wellness solutions for private and commercial spaces.",
      image: "/hot-tubs/hero.png",
      href: "/hot-tubs",
    },
    {
      title: "Shades & Shutters",
      description:
        "Motorized protection systems for comfort and privacy.",
      image: "/shades-shutters/hero.png",
      href: "/shades-shutters",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative flex h-[500px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            width={1600}
            height={500}
            src="/collections-hero.png"
            alt="Collections"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white">
          <p className="mb-4 uppercase tracking-[0.4em] text-sm">
            APERTOLUX COLLECTIONS
          </p>

          <h1 className="mb-6 text-5xl font-bold lg:text-7xl">
            Outdoor Luxury
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Discover our collection of premium pergolas, pool covers,
            retractable structures, hot tubs, and shading solutions.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 lg:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#0A192F]">
            Explore Collections
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Designed for modern architecture and outdoor living.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-72 overflow-hidden">
                <Image
                width={400}
                height={300}
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-8">
                <h3 className="mb-3 text-2xl font-semibold text-[#0A192F]">
                  {item.title}
                </h3>

                <p className="mb-6 text-gray-600">
                  {item.description}
                </p>

                <span className="font-medium text-[#0A192F]">
                  View Collection →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A192F] py-24 text-center text-white">
        <h2 className="mb-6 text-4xl font-bold">
          Looking for a Custom Solution?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
          Our team can help you design the perfect outdoor living space.
        </p>

        <a
          href="/contact"
          className="rounded-full bg-white px-8 py-4 font-semibold text-[#0A192F] transition hover:bg-gray-100"
        >
          Request a Consultation
        </a>
      </section>
    </main>
  );
}