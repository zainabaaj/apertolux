import Link from 'next/link';
import Image from 'next/image';
import ModelComparison from "@/components/ModelComparison";

export const metadata = {
  title: 'Original Nordic Hot Tubs | Apertolux',
  description: 'Authentic wood-fired hot tubs. Experience the genuine scent of Finnish ThermoWood and traditional bathing.',
};

const ProductGallery = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
    {items.map((item, index) => (
      <div key={index} className="group flex flex-col items-center">
        {/* Image Container: Added white bg and padding for aesthetics */}
        <div className="w-full aspect-square relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white p-6 mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-2" // object-contain ensures the whole image is visible
          />
        </div>
        
        {/* Enhanced Typography Style */}
        <div className="text-center">
          <h3 className="text-lg font-bold text-[#0A192F] uppercase tracking-widest border-b border-[#C5A880] pb-2 inline-block">
            {item.name}
          </h3>
          <p className="text-[#C5A880] text-xs font-semibold mt-3 uppercase tracking-tighter">
            {item.collection || "Original Collection"}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default function OriginalHotTubsPage() {
const originalModels = [
  {
    name: "Original Tiny",
    image: "/hot-tubs/original/original-tiny.png",
    description:
      "Compact luxury for couples and smaller outdoor spaces. Fast heating, elegant design, and effortless maintenance.",
    capacity: "1–2 People",
    volume: "615 L",
    diameter: "170 cm",
    heater: "Cult-si",
    weight: "92 kg",
  },

  {
    name: "Breezy M",
    image: "/hot-tubs/original/original-breezy-m.png",
    description:
      "A versatile family favorite with easy-care construction and timeless Nordic styling.",
    capacity: "4–6 People",
    volume: "1540 L",
    diameter: "170 cm",
    heater: "Cult-si",
    weight: "142 kg",
  },

  {
    name: "Hazy M",
    image: "/hot-tubs/original/original-hazy-m.png",
    description:
      "Modern comfort featuring an integrated bench and ergonomic support for a relaxing bathing experience.",
    capacity: "4–6 People",
    volume: "1420 L",
    diameter: "170 cm",
    heater: "Cult-si",
    weight: "157 kg",
  },

  {
    name: "Wood Tiny",
    image: "/hot-tubs/original/original-wood-tiny.png",
    description:
      "Authentic ThermoWood craftsmanship in a compact format, ideal for couples and intimate outdoor settings.",
    capacity: "1–2 People",
    volume: "760 L",
    diameter: "170 cm",
    heater: "Cult-si",
    weight: "140 kg",
  },

  {
    name: "Wood M",
    image: "/hot-tubs/original/original-wood-m.png",
    description:
      "The classic ThermoWood hot tub, combining genuine wood-fired tradition with family-sized capacity.",
    capacity: "4–6 People",
    volume: "1860 L",
    diameter: "170 cm",
    heater: "CUBE",
    weight: "209 kg",
  },

  {
    name: "Wood L",
    image: "/hot-tubs/original/original-wood-l.png",
    description:
      "Our largest traditional hot tub, designed for larger groups and unforgettable outdoor gatherings.",
    capacity: "6–8 People",
    volume: "2600 L",
    diameter: "200 cm",
    heater: "CUBE",
    weight: "240 kg",
  },

  {
    name: "Tiny Dippy",
    image: "/hot-tubs/original/original-tiny-dippy.png",
    description:
      "A dedicated cold-plunge tub without a heater, perfect for recovery, sauna cooling, and winter swimming.",
    capacity: "1–2 People",
    volume: "615 L",
    diameter: "170 cm",
    heater: "None",
    weight: "53.5 kg",
  },

  {
    name: "Wood Tiny Dippy",
    image: "/hot-tubs/original/original-wood-tiny-dippy.png",
    description:
      "A compact solid-wood cold-plunge tub designed for refreshing recovery and year-round wellness rituals.",
    capacity: "1–2 People",
    volume: "760 L",
    diameter: "170 cm",
    heater: "None",
    weight: "100 kg",
  },

  {
    name: "Wood M Dippy",
    image: "/hot-tubs/original/original-wood-m-dippy.png",
    description:
      "The authentic ThermoWood cold-plunge experience for athletes, wellness enthusiasts, and sauna lovers.",
    capacity: "4–6 People",
    volume: "1860 L",
    diameter: "170 cm",
    heater: "None",
    weight: "140 kg",
  },
];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      {/* Hero */}
        <section className="relative min-h-[85vh] overflow-hidden">

        <Image
            src="/hot-tubs/original/original-hero.png"
            alt="Original Collection"
            fill
            priority
            className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1700px] items-center px-6 lg:px-12">

            <div className="max-w-4xl text-white">

            <p className="mb-6 text-xs uppercase tracking-[0.45em] text-gray-300">
                Original Collection
            </p>

            <h1 className="mb-8 text-5xl font-light leading-none md:text-7xl lg:text-8xl">
                Authentic
                <br />
                Nordic Wellness
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
                Inspired by generations of Scandinavian bathing traditions,
                the Original Collection combines genuine wood-fired heating,
                premium ThermoWood craftsmanship, and timeless outdoor living.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

                <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-sm font-medium tracking-wide text-[#0A192F] transition duration-300 hover:scale-105"
                >
                Request Consultation
                </Link>

                <Link
                href="#models"
                className="rounded-full border border-white/30 px-8 py-4 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition duration-300 hover:bg-white/10"
                >
                Explore Models
                </Link>

            </div>

            </div>

        </div>

        </section>
      {/* Nordic Heritage */}
        <section className="py-24 lg:py-36">

  <div className="mx-auto grid max-w-[1700px] items-center gap-20 px-6 lg:grid-cols-2 lg:px-12">

    <div>

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Nordic Heritage
      </p>

      <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
        Tradition Meets
        Modern Craftsmanship
      </h2>

      <p className="mb-6 text-lg leading-relaxed text-gray-600">
        The Original Collection celebrates the authentic Nordic bathing experience.
        Crafted using premium ThermoWood and marine-grade aluminum heating systems,
        every model is designed to create unforgettable moments of relaxation.
      </p>

      <p className="text-lg leading-relaxed text-gray-600">
        From compact couples&apos; tubs to spacious family models,
        the collection offers timeless design, exceptional durability,
        and the unmistakable atmosphere of wood-fired wellness.
      </p>

    </div>

    <div className="overflow-hidden rounded-[36px]">

      <Image
        src="/hot-tubs/original/original-hero2.png"
        alt="Nordic Heritage"
        width={900}
        height={1100}
        className="h-full w-full object-cover"
      />

    </div>

  </div>

        </section>
        {/* Why Original */}
        <section className="bg-[#F8F8F8] py-24 lg:py-32">

  <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

    <div className="mb-20 text-center">

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Why Original
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl">
        Authentic Nordic Wellness
      </h2>

    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-[32px] bg-white p-10">
        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          ThermoWood
        </h3>

        <p className="leading-relaxed text-gray-600">
          Sustainably treated Finnish wood with exceptional durability
          and natural beauty.
        </p>
      </div>

      <div className="rounded-[32px] bg-white p-10">
        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Wood-Fired Heating
        </h3>

        <p className="leading-relaxed text-gray-600">
          Traditional heating systems delivering genuine outdoor
          bathing experiences.
        </p>
      </div>

      <div className="rounded-[32px] bg-white p-10">
        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Scandinavian Design
        </h3>

        <p className="leading-relaxed text-gray-600">
          Minimalist forms inspired by Nordic architecture
          and nature.
        </p>
      </div>

      <div className="rounded-[32px] bg-white p-10">
        <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
          Built To Last
        </h3>

        <p className="leading-relaxed text-gray-600">
          Marine-grade aluminum components and premium materials
          engineered for decades of enjoyment.
        </p>
      </div>

    </div>

  </div>

        </section>
        {/* Collection Overview */}
        <section id="models" className="py-24 lg:py-32">

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-20 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Product Collection
            </p>

            <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
                Crafted For Every Lifestyle
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                From compact couples&apos; tubs to spacious family models and
                refreshing cold-plunge solutions, the Original Collection
                offers authentic Nordic wellness for every setting.
            </p>

            </div>

        </div>

        </section>
        {/* Original Series */}
        <section className="pb-24">

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-14">

            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-gray-500">
                Original Series
            </p>

            <h2 className="text-4xl font-light text-[#0A192F]">
                Easy-Care Nordic Classics
            </h2>

            </div>

            <div className="grid gap-10 lg:grid-cols-3">

            {[
                {
                name: "Original Tiny",
                image: "/hot-tubs/original/original-tiny.png",
                desc: "Compact luxury designed for couples and smaller outdoor spaces.",
                capacity: "1–2 People",
                volume: "615 L",
                },
                {
                name: "Breezy M",
                image: "/hot-tubs/original/original-breezy-m.png",
                desc: "A versatile family favorite combining simplicity and durability.",
                capacity: "4–6 People",
                volume: "1540 L",
                },
                {
                name: "Hazy M",
                image: "/hot-tubs/original/original-hazy-m.png",
                desc: "Modern styling with integrated seating and exceptional comfort.",
                capacity: "4–6 People",
                volume: "1420 L",
                },
            ].map((item) => (
                <div
                key={item.name}
                className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                <div className="aspect-square bg-[#FAFAFA] p-10">

                    <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={700}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />

                </div>

                <div className="p-10">

                    <h3 className="mb-4 text-3xl font-light text-[#0A192F]">
                    {item.name}
                    </h3>

                    <p className="mb-6 text-gray-600">
                    {item.desc}
                    </p>

                    <div className="flex justify-between border-t border-gray-200 pt-5 text-sm uppercase tracking-wider text-gray-500">

                    <span>{item.capacity}</span>

                    <span>{item.volume}</span>

                    </div>

                </div>

                </div>
            ))}

            </div>

        </div>

        </section>
        {/* Wood Series */}
        <section className="bg-[#F8F8F8] py-24 lg:py-32">

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-16 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Wood Series
            </p>

            <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
                The Authentic ThermoWood Experience
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                Crafted entirely from premium Finnish ThermoWood, these models
                represent the purest expression of traditional Nordic bathing.
                The warmth, aroma, and natural beauty of real wood create a
                uniquely authentic wellness experience.
            </p>

            </div>

            <div className="grid gap-10 lg:grid-cols-3">

            {[
                {
                name: "Wood Tiny",
                image: "/hot-tubs/original/original-wood-tiny.png",
                capacity: "1–2 People",
                volume: "760 L",
                heater: "Cult-si",
                description:
                    "Compact and elegant, designed for couples and intimate outdoor spaces.",
                },

                {
                name: "Wood M",
                image: "/hot-tubs/original/original-wood-m.png",
                capacity: "4–6 People",
                volume: "1860 L",
                heater: "CUBE",
                description:
                    "Our classic family-sized ThermoWood hot tub, balancing tradition and performance.",
                },

                {
                name: "Wood L",
                image: "/hot-tubs/original/original-wood-l.png",
                capacity: "6–8 People",
                volume: "2600 L",
                heater: "CUBE",
                description:
                    "The largest Original model, built for unforgettable gatherings and luxury retreats.",
                },
            ].map((item) => (
                <div
                key={item.name}
                className="group overflow-hidden rounded-[36px] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                <div className="aspect-square bg-white p-12">

                    <Image
                    src={item.image}
                    alt={item.name}
                    width={700}
                    height={700}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />

                </div>

                <div className="p-10">

                    <h3 className="mb-4 text-3xl font-light text-[#0A192F]">
                    {item.name}
                    </h3>

                    <p className="mb-8 text-gray-600">
                    {item.description}
                    </p>

                    <div className="space-y-3 border-t border-gray-200 pt-6">

                    <div className="flex justify-between">
                        <span className="text-gray-500">Capacity</span>
                        <span className="font-medium text-[#0A192F]">
                        {item.capacity}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Volume</span>
                        <span className="font-medium text-[#0A192F]">
                        {item.volume}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Heater</span>
                        <span className="font-medium text-[#0A192F]">
                        {item.heater}
                        </span>
                    </div>

                    </div>

                </div>

                </div>
            ))}

            </div>

        </div>

        </section>
        {/* Dippy Collection */}
        <section className="py-24 lg:py-32">

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-16 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Dippy Collection
            </p>

            <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
                Refreshing Cold Plunge Experiences
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                Designed without heaters, Dippy models are perfect for cold-water
                immersion, sauna recovery, athletic recovery, and year-round
                wellness rituals.
            </p>

            </div>

            <div className="grid gap-8 lg:grid-cols-3">

  {[
    {
      name: "Tiny Dippy",
      image: "/hot-tubs/original/original-tiny-dippy.png",
      capacity: "1–2 People",
      volume: "615 L",
    },

    {
      name: "Wood Tiny Dippy",
      image: "/hot-tubs/original/original-wood-tiny-dippy.png",
      capacity: "1–2 People",
      volume: "760 L",
    },

    {
      name: "Wood M Dippy",
      image: "/hot-tubs/original/original-wood-m-dippy.png",
      capacity: "4–6 People",
      volume: "1860 L",
    },
  ].map((item) => (
    <div
      key={item.name}
      className="group overflow-hidden rounded-[36px] border border-gray-200 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >

      <div className="aspect-square bg-[#FAFAFA] p-10">

        <Image
          src={item.image}
          alt={item.name}
          width={700}
          height={700}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

      </div>

      <div className="p-10">

        <h3 className="mb-4 text-3xl font-light text-[#0A192F]">
          {item.name}
        </h3>

        <p className="mb-6 text-gray-600">
          Dedicated cold-plunge model engineered for recovery,
          cold-water immersion, sauna cooling, and year-round wellness.
        </p>

        <div className="space-y-3 border-t border-gray-200 pt-5">

          <div className="flex justify-between">
            <span className="text-gray-500">Capacity</span>
            <span className="font-medium text-[#0A192F]">
              {item.capacity}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Volume</span>
            <span className="font-medium text-[#0A192F]">
              {item.volume}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Heating System</span>
            <span className="font-medium text-[#0A192F]">
              None
            </span>
          </div>

        </div>

      </div>

    </div>
  ))}

</div>

        </div>

        </section>

        {/* Compare Models */}
        <section className="bg-[#F8F8F8] py-24 lg:py-32">

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-16 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Compare Models
            </p>

            <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
                Find Your Perfect Fit
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Compare key specifications across our most popular Original Collection models.
            </p>

            </div>

            

        </div>

        </section>
        <ModelComparison models={originalModels} />
        {/* CTA */}
        <section className="bg-[#0A192F] py-28 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-400">
            Original Collection
            </p>

            <h2 className="mb-8 text-4xl font-light md:text-6xl">
            Experience Authentic
            Nordic Wellness
            </h2>

            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-300">
            Discover the warmth, craftsmanship, and timeless beauty
            of traditional wood-fired hot tubs.
            </p>

            <Link
            href="/contact"
            className="inline-flex rounded-full bg-white px-10 py-5 text-[#0A192F] transition duration-300 hover:scale-105"
            >
            Request Consultation
            </Link>

        </div>

        </section>
    </div>
  );
}
