import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>

<section className="relative h-[700px] overflow-hidden">
  <Image
    src="/hero.png"
    alt="ApertoLux Luxury Outdoor Systems"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Hero Content */}
  <div className="absolute inset-0 flex items-center justify-center px-6">
    <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-8 max-w-4xl">
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Redefine Your
        <br />
        Outdoor Experience
      </h1>

      <p className="text-xl md:text-2xl leading-relaxed max-w-2xl text-gray-200">
        State-of-the-art pool covers, movable floors, and luxury pergolas
        tailored for architectural perfection.
      </p>

      <Link
        href="/products"
        className="mt-4 inline-flex items-center rounded-md bg-[#C6A46A] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#b28f57] hover:scale-105"
      >
        Explore Collections
      </Link>
    </div>
  </div>
</section>

      <section className="container" style={{ marginTop: '5rem' }}>
        <div className="grid-3">
          {['Smart Pools', 'Pergolas', 'Shades & Shutters'].map((title, i) => (
            <div key={i} style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem' }}>{title}</h2>
              <p style={{ color: 'var(--text-muted)' }}>Discover our premium range of automated {title.toLowerCase()} designed to integrate seamlessly with your outdoor space.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}