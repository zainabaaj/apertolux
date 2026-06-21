import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "About Us | Apertolux",
  description:
    "Learn about Apertolux, a market leader in luxury outdoor architectural solutions since 2006.",
};
 
export default function AboutUs() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#0A192F]">
        <div className="absolute inset-0 bg-black/40" />

        {/* Replace with hero image */}
        <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-300">
            Since 2006
          </p>

          <h1 className="mb-8 text-5xl font-bold md:text-6xl lg:text-7xl">
            Engineering Exceptional
            <br />
            Outdoor Living
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200 md:text-xl">
            Apertolux designs, sources, and delivers world-class outdoor
            architectural solutions for luxury residential and commercial
            projects.
          </p>
        </div>
      </section>

      {/* Story Card */}
      <section className="relative z-10 -mt-20 px-6">
        <div className="mx-auto max-w-7xl rounded-xl bg-white p-8 shadow-2xl md:p-12 lg:p-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-[#0A192F]">
                A Legacy Built on Precision
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Founded in 2006, Apertolux began with a vision to redefine
                outdoor living through engineering excellence, premium
                materials, and innovative design.
              </p>

              <p className="text-lg leading-relaxed text-gray-600">
                Today, we collaborate with homeowners, architects, developers,
                and hospitality brands to create bespoke outdoor spaces that
                combine beauty, comfort, and performance.
              </p>
            </div>

            <div className="h-[300px] rounded-2xl bg-gray-100 md:h-[450px]">
            <Image
            width={600}
            height={600}
                src="/about-story.png"
                alt="Apertolux Story" 
                className="h-full w-full object-cover rounded-2xl"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              ["20+", "Years Experience"],
              ["500+", "Projects Delivered"],
              ["8+", "Countries Sourced"],
              ["100%", "Custom Solutions"],
            ].map(([number, text]) => (
              <div
                key={text}
                className="rounded-2xl border border-gray-200 p-8 text-center"
              >
                <div className="mb-3 text-4xl font-bold text-[#0A192F]">
                  {number}
                </div>

                <div className="text-gray-600">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div className="h-[350px] rounded-3xl bg-gray-100 lg:h-[500px]">
            <Image
            width={600}
            height={600}
                src="/about-partners.png"
                alt="Global Partnerships" 
                className="h-full w-full object-cover rounded-3xl"
                />
          </div>

          <div>
            <p className="mb-3 uppercase tracking-[0.25em] text-gray-500">
              International Network
            </p>

            <h2 className="mb-6 text-4xl font-bold text-[#0A192F]">
              Global Partnerships
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              We work exclusively with trusted international manufacturers and
              suppliers to ensure every Apertolux project meets the highest
              standards of luxury, durability, and innovation.
            </p>

            <ul className="space-y-4 text-lg text-gray-700">
              <li>✓ Italy & Spain – Architectural systems</li>
              <li>✓ Germany – Engineering components</li>
              <li>✓ Finland & Poland – Premium materials</li>
              <li>✓ China – Smart automation technologies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 uppercase tracking-[0.25em] text-gray-500">
              Our Process
            </p>

            <h2 className="text-4xl font-bold text-[#0A192F]">
              From Vision to Reality
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              [
                "01",
                "Consultation & Design",
                "Understanding your goals and developing a tailored concept.",
              ],
              [
                "02",
                "Engineering & Planning",
                "Technical detailing, budgeting, and project preparation.",
              ],
              [
                "03",
                "Installation & Support",
                "Professional execution and long-term customer care.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="mb-4 text-5xl font-bold text-[#0A192F]/20">
                  {number}
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#0A192F]">
                  {title}
                </h3>

                <p className="leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Apertolux */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-[#0A192F]">
              Why Choose Apertolux
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Premium Materials",
              "Custom Engineering",
              "Turnkey Project Delivery",
              "International Supply Chain",
              "Safety & Quality Standards",
              "Long-Term Support",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-200 p-8"
              >
                <h3 className="text-xl font-semibold text-[#0A192F]">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-4 uppercase tracking-[0.3em] text-gray-300">
            Our Vision
          </p>

          <h2 className="mb-8 text-4xl font-bold md:text-5xl">
            Building the Future of Outdoor Architecture
          </h2>

          <p className="text-lg leading-relaxed text-gray-300">
            We strive to become the benchmark for luxury outdoor architecture by
            combining innovative engineering, exceptional craftsmanship, and
            timeless design.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-[#0A192F]">
            Let&apos;s Build Something Extraordinary
          </h2>

          <p className="mb-10 text-lg text-gray-600">
            Whether you&apos;re creating a private residence, hospitality
            destination, or architectural landmark, our team is ready to bring
            your vision to life.
          </p>

          <a
            href="/contact"
            className="inline-flex rounded-full bg-[#0A192F] px-8 py-4 text-white transition hover:bg-[#172A45]"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}

