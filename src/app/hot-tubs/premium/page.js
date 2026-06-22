import Link from 'next/link';
import Image from 'next/image';
import ModelComparison from '@/components/ModelComparison';
export const metadata = {
  title: 'Premium Nordic Spas | Apertolux',
  description: 'The pinnacle of luxury: climate-controlled hot tubs with heat pumps, hydrotherapy jets, and elite materials.',
};


export default function PremiumHotTubsPage() {
    const premiumModels = [
    {
        name: "Breezy M Dual",
        image: "/hot-tubs/premium/premium-breezy-m-dual.png",
        description: "Heating and cooling technology with ozone purification.",
        capacity: "4–6 People",
        volume: "1540 L",
        diameter: "170 cm",
        heater: "Dual Heat Pump",
        heatingPower: "5 kW",
        weight: "138 kg",
        exterior: "ThermoWood",
        interior: "Light Grey",
    },

    {
        name: "Family L Dual",
        image: "/hot-tubs/premium/premium-family-l-dual.png",
        description: "Large-capacity premium spa with climate control.",
        capacity: "6–8 People",
        volume: "1930 L",
        diameter: "200 cm",
        heater: "Dual Heat Pump",
        heatingPower: "5 kW",
        weight: "175 kg",
        exterior: "ThermoWood",
        interior: "Light Grey",
    },

    {
        name: "Pearly M",
        image: "/hot-tubs/premium/premium-pearly-m.png",
        description: "Champagne ABS-acrylic interior with premium finish.",
        capacity: "4–6 People",
        volume: "1420 L",
        diameter: "172 cm",
        heater: "CUBE",
        heatingPower: "35 kW",
        weight: "157 kg",
        exterior: "Mocca Composite",
        interior: "Champagne ABS-Acrylic",
    },

    {
        name: "Steady M Flow",
        image: "/hot-tubs/premium/premium-steady-m-flow.png",
        description: "Hydrotherapy jets with electric heating and filtration.",
        capacity: "4–6 People",
        volume: "1420 L",
        diameter: "170 cm",
        heater: "WaterJets Flow",
        heatingPower: "3 kW",
        weight: "128 kg",
        exterior: "ThermoWood",
        interior: "Casual Grey",
    },
    ];

  return (

        <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
        
            {/* High-End Hero Section */}
            <section className="relative h-[80vh] min-h-[700px] overflow-hidden">

            <Image
                src="/hot-tubs/premium/premium-hero2.png"
                alt="Premium Collection"
                fill
                priority
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex items-center justify-center">

                <div className="max-w-5xl px-6 text-center text-white">

                <p className="mb-6 text-xs uppercase tracking-[0.5em] text-gray-300">
                    APERTOLUX PREMIUM COLLECTION
                </p>

                <h1 className="mb-8 text-5xl font-light md:text-7xl">
                    The Future of Outdoor Wellness
                </h1>

                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200 md:text-2xl">
                    Advanced climate control, hydrotherapy systems,
                    premium materials, and Nordic craftsmanship
                    combined into the most sophisticated hot tubs
                    in our collection.
                </p>

                </div>

            </div>

            </section>        
            {/* premiuim heritage Block */}
            <section className="relative z-10 -mt-24 px-6">

    <div className="mx-auto max-w-7xl rounded-[40px] border border-gray-200 bg-white p-10 shadow-xl md:p-16">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

        <div>

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
            Premium Experience
            </p>

            <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-5xl">
            Luxury Without Compromise
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
            The Premium Collection represents the highest level
            of outdoor wellness engineering available from Apertolux.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
            Featuring advanced heating and cooling systems,
            integrated hydrotherapy, superior insulation,
            and refined interior finishes, these models are
            designed for homeowners who expect exceptional
            performance and comfort year-round.
            </p>

        </div>

        <div className="rounded-[32px] bg-[#F8F8F8] p-10">

            <div className="grid gap-6 sm:grid-cols-2">

            <div>
                <div className="mb-2 text-4xl font-light text-[#0A192F]">
                4
                </div>
                <p className="text-gray-600">
                Premium Models
                </p>
            </div>

            <div>
                <div className="mb-2 text-4xl font-light text-[#0A192F]">
                5 kW
                </div>
                <p className="text-gray-600">
                Heat Pump Systems
                </p>
            </div>

            <div>
                <div className="mb-2 text-4xl font-light text-[#0A192F]">
                4
                </div>
                <p className="text-gray-600">
                Hydrotherapy Jets
                </p>
            </div>

            <div>
                <div className="mb-2 text-4xl font-light text-[#0A192F]">
                Year
                </div>
                <p className="text-gray-600">
                Round Comfort
                </p>
            </div>

            </div>

        </div>

        </div>

    </div>

            </section>
            {/* why premium Section */}
            <section className="py-24 lg:py-32">

    <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
            Why Premium
        </p>

        <h2 className="text-4xl font-light text-[#0A192F] md:text-5xl">
            Advanced Wellness Technology
        </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {[
            {
            title: "Heating & Cooling",
            text: "Dual systems allow year-round temperature control."
            },
            {
            title: "Hydrotherapy",
            text: "Targeted water jets deliver therapeutic relaxation."
            },
            {
            title: "Premium Materials",
            text: "ABS-acrylic, ThermoWood and marine-grade aluminium."
            },
            {
            title: "Energy Efficiency",
            text: "Insulated systems reduce operating costs."
            },
        ].map((item) => (
            <div
            key={item.title}
            className="rounded-[32px] border border-gray-200 p-10"
            >
            <h3 className="mb-4 text-2xl font-light text-[#0A192F]">
                {item.title}
            </h3>

            <p className="leading-relaxed text-gray-600">
                {item.text}
            </p>
            </div>
        ))}

        </div>

    </div>

            </section>
            {/* Premium Technologies */}
            <section className="bg-[#F8F8F8] py-24 lg:py-32">

            <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

                <div className="mb-16 text-center">

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                    Premium Technologies
                </p>

                <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
                    Engineered Beyond Traditional Hot Tubs
                </h2>

                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                    Premium models incorporate advanced climate systems,
                    hydrotherapy solutions, intelligent filtration, and
                    high-efficiency heating technologies designed for
                    year-round comfort.
                </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-2">

                {/* Dual Heat Pump */}

                <div className="rounded-[36px] bg-white p-10 lg:p-14">

                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
                    Dual Technology
                    </p>

                    <h3 className="mb-6 text-3xl font-light text-[#0A192F]">
                    Heating & Cooling System
                    </h3>

                    <p className="mb-8 leading-relaxed text-gray-600">
                    Found in the Breezy M Dual and Family L Dual,
                    the integrated air-source heat pump allows both
                    heating and cooling from a single system.
                    </p>

                    <ul className="space-y-4 text-gray-600">

                    <li>• Heating and cooling functions</li>
                    <li>• Integrated circulation pump</li>
                    <li>• Ozone purification system</li>
                    <li>• Advanced filtration</li>
                    <li>• Approx. 4–5°C temperature change per hour</li>

                    </ul>

                </div>

                {/* WaterJets */}

                <div className="rounded-[36px] bg-white p-10 lg:p-14">

                    <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
                    Hydrotherapy
                    </p>

                    <h3 className="mb-6 text-3xl font-light text-[#0A192F]">
                    WaterJets Flow System
                    </h3>

                    <p className="mb-8 leading-relaxed text-gray-600">
                    Featured in the Steady M Flow, the WaterJets
                    system combines filtration, electric heating,
                    and therapeutic massage jets.
                    </p>

                    <ul className="space-y-4 text-gray-600">

                    <li>• Four adjustable water therapy jets</li>
                    <li>• Full filtration system</li>
                    <li>• Electric heating</li>
                    <li>• Fully insulated construction</li>
                    <li>• Energy-efficient operation</li>

                    </ul>

                </div>

                </div>

            </div>

            </section>
            {/* Premium Models */}
            <section className="py-24 lg:py-32">

            <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

                <div className="mb-16 text-center">

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                    Premium Models
                </p>

                <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
                    Discover the Collection
                </h2>

                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                    Four distinct interpretations of luxury wellness,
                    each engineered for a different experience.
                </p>

                </div>

                <div className="grid gap-10 lg:grid-cols-2">

                {[
                    {
                    name: "Breezy M Dual",
                    image: "/hot-tubs/premium/premium-breezy-m-dual.png",
                    tag: "Climate Control",
                    description:
                        "An easy-care premium spa featuring advanced heating and cooling technology with integrated filtration and ozone purification.",
                    specs: "4–6 People • 1540 L • Dual Heat Pump",
                    },

                    {
                    name: "Family L Dual",
                    image: "/hot-tubs/premium/premium-family-l-dual.png",
                    tag: "Large Capacity",
                    description:
                        "Designed for larger groups with generous seating, family-friendly ergonomics, and year-round temperature management.",
                    specs: "6–8 People • 1930 L • Dual Heat Pump",
                    },

                    {
                    name: "Pearly M",
                    image: "/hot-tubs/premium/premium-pearly-m.png",
                    tag: "Luxury Finish",
                    description:
                        "Featuring a champagne ABS-acrylic interior and premium composite exterior, Pearly M delivers a refined spa experience.",
                    specs: "4–6 People • 1420 L • CUBE Heating",
                    },

                    {
                    name: "Steady M Flow",
                    image: "/hot-tubs/premium/premium-steady-m-flow.png",
                    tag: "Hydrotherapy",
                    description:
                        "Combines electric heating, filtration, and four adjustable therapy jets for the ultimate relaxation experience.",
                    specs: "4–6 People • 1420 L • WaterJets Flow",
                    },
                ].map((model) => (

                    <div
                    key={model.name}
                    className="group overflow-hidden rounded-[40px] border border-gray-200 bg-white transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >

                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F8F8]">

                        <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        className="object-contain p-10 transition duration-700 group-hover:scale-105"
                        />

                    </div>

                    <div className="p-10">

                        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-500">
                        {model.tag}
                        </p>

                        <h3 className="mb-4 text-3xl font-light text-[#0A192F]">
                        {model.name}
                        </h3>

                        <p className="mb-6 leading-relaxed text-gray-600">
                        {model.description}
                        </p>

                        <div className="border-t border-gray-200 pt-6">

                        <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
                            {model.specs}
                        </p>

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
                    Compare key specifications across our most popular Premium Collection models.
                </p>
    
                </div>
    
                
    
            </div>
    
            </section>
            <ModelComparison models={premiumModels} />

            {/* Materials & Finishes */}
            <section className="bg-[#F8F8F8] py-24 lg:py-32">

            <div className="mx-auto max-w-[1700px] px-6 lg:px-12">

                <div className="mb-16 text-center">

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                    Materials & Finishes
                </p>

                <h2 className="mb-6 text-4xl font-light text-[#0A192F] md:text-5xl">
                    Crafted for Lasting Luxury
                </h2>

                <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
                    Every Premium model is built using carefully selected
                    Nordic materials and advanced engineering components
                    designed to perform beautifully for years.
                </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                {[
                    {
                    title: "ThermoWood",
                    text: "Heat-treated Finnish pine with exceptional durability and a naturally elegant appearance.",
                    },

                    {
                    title: "ABS-Acrylic",
                    text: "Premium spa-grade interiors offering a luxurious finish and effortless maintenance.",
                    },

                    {
                    title: "Marine Aluminium",
                    text: "Corrosion-resistant heating systems engineered for demanding outdoor environments.",
                    },

                    {
                    title: "Composite Finishes",
                    text: "Modern low-maintenance exterior materials designed for contemporary architecture.",
                    },
                ].map((item) => (

                    <div
                    key={item.title}
                    className="rounded-[32px] border border-gray-200 bg-white p-10"
                    >

                    <h3 className="mb-4 text-2xl font-light text-[#0A192F]">
                        {item.title}
                    </h3>

                    <p className="leading-relaxed text-gray-600">
                        {item.text}
                    </p>

                    </div>

                ))}

                </div>

            </div>

            </section>
            {/* CTA */}
            <section className="py-24 lg:py-32">

            <div className="mx-auto max-w-5xl px-6 text-center">

                <p className="mb-4 text-xs uppercase tracking-[0.4em] text-gray-500">
                Premium Consultation
                </p>

                <h2 className="mb-8 text-4xl font-light text-[#0A192F] md:text-6xl">
                Discover Your Perfect Wellness Retreat
                </h2>

                <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-gray-600">
                Whether you're designing a private spa experience,
                luxury residence, wellness resort, or hospitality destination,
                our specialists can help you select the ideal Premium model.
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
        </div>
   );
}

