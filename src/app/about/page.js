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
        <div className="absolute inset-0 bg-[url('/proj1.png')] bg-cover bg-center" />

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

{/* Our Story */}
<section className="py-24 lg:py-36">
  <div className="mx-auto max-w-[1600px] px-6 lg:px-12">

    <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
          Our Story
        </p>

        <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
          A Legacy Built
          <br />
          on Precision
        </h2>

        <p className="mb-6 text-lg leading-relaxed text-gray-600">
          Founded in 2006, Apertolux began with a vision to redefine outdoor
          living through engineering excellence, premium materials, and
          innovative design.
        </p>

        <p className="text-lg leading-relaxed text-gray-600">
          Today, we collaborate with homeowners, architects, developers,
          and hospitality brands to create bespoke outdoor spaces that
          combine beauty, comfort, and performance.
        </p>
      </div>

      <div className="overflow-hidden rounded-[32px]">
        <Image
          width={1200}
          height={1200}
          src="/about-story.png"
          alt="Apertolux Story"
          className="h-[350px] w-full object-cover md:h-[500px] lg:h-[650px]"
        />
      </div>

    </div>
  </div>
</section>

{/* Numbers */}
<section className="bg-[#081321] py-24 lg:py-32">
  <div className="mx-auto max-w-[1600px] px-6 lg:px-12">

    <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">

      <div>
        <h3 className="text-5xl font-light text-white lg:text-7xl">
          20+
        </h3>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-400">
          Years Experience
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-light text-white lg:text-7xl">
          500+
        </h3>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-400">
          Projects Delivered
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-light text-white lg:text-7xl">
          8+
        </h3>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-400">
          Countries Sourced
        </p>
      </div>

      <div>
        <h3 className="text-5xl font-light text-white lg:text-7xl">
          100%
        </h3>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-400">
          Tailored Solutions
        </p>
      </div>

    </div>
  </div>
</section>

{/* Global Partnerships */}
<section className="py-24 lg:py-36">
  <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">

    <div className="overflow-hidden rounded-[32px]">
      <Image
        width={1200}
        height={1200}
        src="/about-partners.png"
        alt="Global Partnerships"
        className="h-[350px] w-full object-cover md:h-[500px] lg:h-[650px]"
      />
    </div>

    <div>
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        International Network
      </p>

      <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
        Global Partnerships
      </h2>

      <p className="mb-10 text-lg leading-relaxed text-gray-600">
        We work exclusively with trusted international manufacturers and
        suppliers to ensure every Apertolux project meets the highest
        standards of luxury, durability, and innovation.
      </p>

      <div className="space-y-5 text-lg text-gray-700">
        <div>Italy & Spain — Architectural Systems</div>
        <div>Germany — Engineering Components</div>
        <div>Finland & Poland — Premium Materials</div>
        <div>China — Smart Automation Technologies</div>
      </div>
    </div>

  </div>
</section>

{/* Process */}
<section className="bg-[#F8F8F8] py-24 lg:py-36">
  <div className="mx-auto max-w-[1400px] px-6">

    <div className="mb-24 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Our Process
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
        From Vision to Reality
      </h2>
    </div>

    <div className="grid gap-12 lg:grid-cols-3">

      <div>
        <span className="text-7xl font-light text-[#0A192F]/15">
          01
        </span>

        <h3 className="mt-6 mb-4 text-3xl font-light text-[#0A192F]">
          Consultation
        </h3>

        <p className="text-gray-600">
          Understanding your vision, requirements, and architectural goals.
        </p>
      </div>

      <div>
        <span className="text-7xl font-light text-[#0A192F]/15">
          02
        </span>

        <h3 className="mt-6 mb-4 text-3xl font-light text-[#0A192F]">
          Engineering
        </h3>

        <p className="text-gray-600">
          Detailed planning, technical development, and project coordination.
        </p>
      </div>

      <div>
        <span className="text-7xl font-light text-[#0A192F]/15">
          03
        </span>

        <h3 className="mt-6 mb-4 text-3xl font-light text-[#0A192F]">
          Delivery
        </h3>

        <p className="text-gray-600">
          Precision installation and long-term support for every project.
        </p>
      </div>

    </div>

  </div>
</section>


{/* Signature Projects */}
<section className="py-24 lg:py-36">
  <div className="mx-auto max-w-[1600px] px-6 lg:px-12">

    {/* Section Header */}
    <div className="mb-24 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
        Portfolio Highlights
      </p>

      <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl lg:text-6xl">
        Signature Projects
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-gray-600">
        Every project reflects our commitment to engineering excellence,
        premium materials, and timeless design.
      </p>
    </div>

    <div className="space-y-32 lg:space-y-40">

      {/* Project 1 */}
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <div className="overflow-hidden rounded-[32px]">
          <Image
            width={1400}
            height={1000}
            src="/projects/1/ta3.jpg"
            alt="Luxury Villa Retreat"
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 md:h-[500px] lg:h-[650px]"
          />
        </div>

        <div className="max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            Private Residence
          </p>

          <h3 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-5xl">
            Luxury Villa Retreat
          </h3>

          <p className="text-lg leading-relaxed text-gray-600">
            A bespoke outdoor environment combining automated pergolas,
            architectural lighting, premium materials, and intelligent
            outdoor living systems designed to elevate everyday life.
          </p>
        </div>

      </div>

      {/* Project 2 */}
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <div className="order-2 max-w-xl lg:order-1">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            Hospitality
          </p>

          <h3 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-5xl">
            Premium Wellness Resort
          </h3>

          <p className="text-lg leading-relaxed text-gray-600">
            Large-scale outdoor structures engineered for comfort,
            luxury, and unforgettable guest experiences while maintaining
            exceptional durability in demanding environments.
          </p>
        </div>

        <div className="order-1 overflow-hidden rounded-[32px] lg:order-2">
          <Image
            width={1400}
            height={1000}
            src="/projects/2/1.jpg"
            alt="Premium Wellness Resort"
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 md:h-[500px] lg:h-[650px]"
          />
        </div>

      </div>

      {/* Project 3 */}
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

        <div className="overflow-hidden rounded-[32px]">
          <Image
            width={1400}
            height={1000}
            src="/projects/3/3.jpg"
            alt="Coastal Modern Residence"
            className="h-[350px] w-full object-cover transition duration-700 hover:scale-105 md:h-[500px] lg:h-[650px]"
          />
        </div>

        <div className="max-w-xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
            Contemporary Architecture
          </p>

          <h3 className="mb-8 text-4xl font-light text-[#0A192F] lg:text-5xl">
            Coastal Modern Residence
          </h3>

          <p className="text-lg leading-relaxed text-gray-600">
            A seamless integration of architecture, automation,
            engineering, and outdoor lifestyle design resulting in
            timeless luxury and functionality.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>


<section className="py-24">
  <div className="overflow-hidden">
    <Image
      src="/projects/2/nst1.jpg"
      width={2200}
      height={1400}
      alt="proj2"
      className="h-[60vh] lg:h-[90vh] w-full object-cover"
    />
  </div>
</section>

{/* Heritage Statement */}
<section className="py-32 lg:py-40">
  <div className="mx-auto max-w-6xl px-6 text-center">

    <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-500">
      Since 2006
    </p>

    <h2 className="mx-auto max-w-5xl text-4xl font-light leading-tight text-[#0A192F] md:text-5xl lg:text-7xl">
      Nearly Two Decades
      <br />
      of Engineering Excellence
    </h2>

    <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed text-gray-600">
      For almost twenty years, Apertolux has combined premium materials,
      international expertise, and precision engineering to create
      exceptional outdoor environments for discerning clients.
    </p>

  </div>
</section>

{/* Vision */}
<section className="bg-[#081321] py-32 lg:py-40 text-white">
  <div className="mx-auto max-w-5xl px-6 text-center">

    <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-400">
      Our Vision
    </p>

    <h2 className="mx-auto mb-12 max-w-4xl text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
      Building the Future
      <br />
      of Outdoor Architecture
    </h2>

    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
      We envision a future where outdoor spaces become seamless extensions
      of modern architecture. Through innovation, engineering precision,
      and timeless design, Apertolux continues to create environments that
      elevate the way people live, relax, and connect.
    </p>

  </div>
</section>

{/* Closing Statement */}
<section className="py-32 lg:py-40">
  <div className="mx-auto max-w-6xl px-6 text-center">

    <p className="mb-8 text-xs uppercase tracking-[0.4em] text-gray-500">
      Since 2006
    </p>

    <h2 className="mx-auto max-w-5xl text-4xl font-light leading-tight text-[#0A192F] md:text-5xl lg:text-7xl">
      Transforming Outdoor Spaces
      Through Design,
      Engineering, and Innovation.
    </h2>

  </div>
</section>

{/* Luxury CTA */}
<section className="pb-32">
  <div className="mx-auto max-w-7xl px-6">

    <div className="overflow-hidden rounded-[40px] bg-[#0A192F] px-8 py-20 text-center text-white md:px-16 md:py-28">

      <p className="mb-6 text-xs uppercase tracking-[0.4em] text-gray-400">
        Start Your Project
      </p>

      <h2 className="mx-auto mb-8 max-w-4xl text-4xl font-light md:text-5xl lg:text-6xl">
        Let's Create Something Extraordinary
      </h2>

      <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300">
        Whether it's a private residence, luxury hospitality project,
        or bespoke architectural concept, our team is ready to bring
        your vision to life.
      </p>

      <a
        href="/contact"
        className="inline-flex items-center rounded-full bg-white px-10 py-4 text-[#0A192F] transition hover:scale-105"
      >
        Schedule a Consultation
      </a>

    </div>

  </div>
</section>

    </main>
  );
}

