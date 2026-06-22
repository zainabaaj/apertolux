import Link from 'next/link';
import Image from 'next/image';
import ModelComparison from "@/components/ModelComparison";
export const metadata = {
  title: 'Comfort Nordic Hot Tubs | Apertolux',
  description: 'Family-friendly hot tubs with ergonomic seating, easy-care surfaces, and safe, accessible design.',
};

const ProductGallery = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
    {items.map((item, index) => (
      <div key={index} className="group flex flex-col items-center">
        <div className="w-full aspect-square relative overflow-hidden rounded-xl shadow-lg border border-gray-100 bg-white p-6 mb-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-[#0A192F] uppercase tracking-widest border-b border-[#C5A880] pb-2 inline-block">
            {item.name}
          </h3>
          <p className="text-[#C5A880] text-xs font-semibold mt-3 uppercase tracking-tighter">Collection: Comfort</p>
        </div>
      </div>
    ))}
  </div>
);

export default function ComfortHotTubsPage() {
  const comfortModels = [
    { name: "Family M", image: "/hot-tubs/comfort/comfort-family-m.png" },
    { name: "Family L", image: "/hot-tubs/comfort/comfort-family-l.png" },
    { name: "Steady M", image: "/hot-tubs/comfort/comfort-steady-m.png" },
  ];

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* High-End Hero Section */}
      <section className="relative min-h-[85vh] overflow-hidden">

  <Image
    src="/hot-tubs/comfort/comfort-hero.png"
    alt="Comfort Collection"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

  <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1700px] items-center px-6 lg:px-12">

    <div className="max-w-4xl text-white">

      <p className="mb-6 text-xs uppercase tracking-[0.45em] text-gray-300">
        Comfort Collection
      </p>

      <h1 className="mb-8 text-5xl font-light leading-none md:text-7xl lg:text-8xl">
        Designed For
        <br />
        Every Generation
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
        Family-focused Nordic hot tubs combining accessibility,
        safety, and timeless Scandinavian design for everyday wellness.
      </p>

    </div>

  </div>

      </section>
      {/* Family Wellness Section */}
        <section className="py-24 lg:py-36">

        <div className="mx-auto grid max-w-[1700px] items-center gap-20 px-6 lg:grid-cols-2 lg:px-12">

            <div className="overflow-hidden rounded-[36px]">

            <Image
                src="/hot-tubs/comfort/comfort-fam.png"
                alt="Family Wellness"
                width={900}
                height={1100}
                className="h-full w-full object-cover"
            />

            </div>

            <div>

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Family Wellness
            </p>

            <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
                Built Around Comfort,
                Not Compromise
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                The Comfort Collection has been engineered to provide
                an exceptional bathing experience for every member of the family.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Integrated cooling benches, ergonomic seating, and safe entry points
                make every hot tub welcoming and accessible while preserving the
                premium craftsmanship expected from Nordic wellness products.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
                Whether you&apos;re enjoying a peaceful evening with your partner or
                entertaining friends and family, Comfort delivers effortless relaxation.
            </p>

            </div>

        </div>

        </section>
        {/* Why Comfort Section */}
        <section className="bg-[#F8F8F8] py-24 lg:py-32">

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-20 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Why Comfort
            </p>

            <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl">
                Designed Around Real Life
            </h2>

            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-[32px] bg-white p-10">
                <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
                Safe Entry & Exit
                </h3>

                <p className="leading-relaxed text-gray-600">
                Integrated benches and carefully designed access points
                improve safety and convenience for users of all ages.
                </p>
            </div>

            <div className="rounded-[32px] bg-white p-10">
                <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
                Ergonomic Seating
                </h3>

                <p className="leading-relaxed text-gray-600">
                Specially designed seating supports the body naturally,
                providing exceptional comfort during long bathing sessions.
                </p>
            </div>

            <div className="rounded-[32px] bg-white p-10">
                <h3 className="mb-6 text-2xl font-light text-[#0A192F]">
                Easy Ownership
                </h3>

                <p className="leading-relaxed text-gray-600">
                Durable materials and low-maintenance surfaces
                ensure years of enjoyment with minimal upkeep.
                </p>
            </div>

            </div>

        </div>

        </section>
        {/* Models */}
        <section className="py-24 lg:py-36">

        <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

            <div className="mb-20 text-center">

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Available Models
            </p>

            <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
                Choose Your Comfort
            </h2>

            </div>

            <div className="space-y-32">

            {/* Family M */}

            <div className="grid items-center gap-16 lg:grid-cols-2">

                <div className="overflow-hidden rounded-[36px]">
                <Image
                    src="/hot-tubs/comfort/comfort-family-m.png"
                    alt="Comfort Family M"
                    width={900}
                    height={900}
                    className="w-full object-contain"
                />
                </div>

                <div>

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                    Family Series
                </p>

                <h3 className="mb-6 text-4xl font-light text-[#0A192F]">
                    Comfort Family M
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Designed for families seeking everyday wellness,
                    Family M combines ergonomic seating, integrated cooling benches,
                    and effortless accessibility in a perfectly balanced size.
                </p>

                <div className="grid grid-cols-2 gap-8">

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Capacity
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        3–5 People
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Volume
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        1370 L
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Heating
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        MACU Heater
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Exterior
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        ThermoWood
                    </p>
                    </div>

                </div>

                </div>

            </div>

            {/* Family L */}

            <div className="grid items-center gap-16 lg:grid-cols-2">

                <div className="order-2 lg:order-1">

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                    Family Series
                </p>

                <h3 className="mb-6 text-4xl font-light text-[#0A192F]">
                    Comfort Family L
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Built for larger gatherings, Family L offers generous capacity,
                    enhanced comfort, and exceptional performance for entertaining
                    friends and family.
                </p>

                <div className="grid grid-cols-2 gap-8">

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Capacity
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        6–8 People
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Volume
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        1930 L
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Heating
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        CUBE Heater
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Exterior
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        Coal-Tinted Spruce
                    </p>
                    </div>

                </div>

                </div>

                <div className="order-1 overflow-hidden rounded-[36px] lg:order-2">
                <Image
                    src="/hot-tubs/comfort/comfort-family-l.png"
                    alt="Comfort Family L"
                    width={900}
                    height={900}
                    className="w-full object-contain"
                />
                </div>

            </div>

            {/* Steady M */}

            <div className="grid items-center gap-16 lg:grid-cols-2">

                <div className="overflow-hidden rounded-[36px]">
                <Image
                    src="/hot-tubs/comfort/comfort-steady-m.png"
                    alt="Comfort Steady M"
                    width={900}
                    height={900}
                    className="w-full object-contain"
                />
                </div>

                <div>

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                    Contemporary Series
                </p>

                <h3 className="mb-6 text-4xl font-light text-[#0A192F]">
                    Comfort Steady M
                </h3>

                <p className="mb-8 text-lg leading-relaxed text-gray-600">
                    Featuring a modern recycled composite exterior,
                    Steady M combines contemporary aesthetics with
                    exceptional practicality and low maintenance.
                </p>

                <div className="grid grid-cols-2 gap-8">

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Capacity
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        4–6 People
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Volume
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        1420 L
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Heating
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        MACU Heater
                    </p>
                    </div>

                    <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                        Exterior
                    </p>
                    <p className="mt-2 text-xl text-[#0A192F]">
                        Night Black Composite
                    </p>
                    </div>

                </div>

                </div>

            </div>

            </div>

        </div>

        </section>


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

const thStyle = { backgroundColor: 'var(--navy-primary)', color: 'white', padding: '1.2rem', fontWeight: '600' };
const tdStyle = { padding: '1.2rem', borderBottom: '1px solid #eaeaea', color: 'var(--text-muted)' };
const rowStripeStyle = { backgroundColor: '#f9fbfd' };