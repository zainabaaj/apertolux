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

<section className="py-24 lg:py-36">
  <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

    <div className="mb-24 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Collections
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
        Explore Our Collections
      </h2>
    </div>

    <div className="space-y-32">

      {collections.map((item, index) => (
        <Link
          key={item.title}
          href={item.href}
          className="group block"
        >
          <div
            className={`grid items-center gap-12 lg:gap-24 ${
              index % 2 === 0
                ? "lg:grid-cols-2"
                : "lg:grid-cols-2"
            }`}
          >

            <div
              className={`overflow-hidden rounded-[32px] ${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={1400}
                height={1000}
                className="h-[350px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[500px] lg:h-[700px]"
              />
            </div>

            <div
              className={`max-w-xl ${
                index % 2 !== 0 ? "lg:order-1" : ""
              }`}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
                Collection
              </p>

              <h3 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-6xl">
                {item.title}
              </h3>

              <p className="mb-10 text-lg leading-relaxed text-gray-600">
                {item.description}
              </p>

              <span className="text-lg text-[#0A192F]">
                Explore Collection →
              </span>
            </div>

          </div>
        </Link>
      ))}

    </div>
  </div>
</section>
      {/* CTA */}
<section className="pb-32">
  <div className="mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[40px] bg-[#0A192F] px-8 py-20 text-center text-white md:px-16 md:py-28">

      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-400">
        Custom Solutions
      </p>

      <h2 className="mx-auto mb-8 max-w-4xl text-4xl font-light md:text-5xl lg:text-6xl">
        Let&apos;s Create Something Extraordinary
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300">
        Every project is unique. Our team works closely with homeowners,
        architects, and developers to deliver tailored outdoor solutions.
      </p>

      <Link
        href="/contact"
        className="inline-flex rounded-full bg-white px-10 py-4 text-[#0A192F] transition hover:scale-105"
      >
        Request a Consultation
      </Link>

    </div>

  </div>
</section>
    </main>
  );
}