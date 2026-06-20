import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Bioclimatic Winter Gardens | Apertolux',
  description: 'Transform your outdoor space into a 365-day living area with our bespoke bioclimatic winter garden glass and screen enclosures.',
};

export default function WinterGardenPage() {
  return (
    <div className="w-full bg-gray-50 animate-[fadeIn_0.5s_ease-in]">
      
      {/* High-End Hero Section */}
      <section className="relative w-full h-[50vh] min-h-[400px] lg:h-[70vh] bg-[#172A45] flex items-center justify-center overflow-hidden">
        <Image
          src="/pergolas/winter-garden/1.png" // Update with your actual image path
          alt="Apertolux Bioclimatic Winter Garden"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg tracking-tight">
            Bioclimatic Winter Gardens
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed drop-shadow-md font-light">
            Absolute climate control for all four seasons. Enclose your bioclimatic roof with premium architectural glass and dynamic zip screens.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 lg:-mt-24 pb-16 lg:pb-24 flex flex-col items-center">
        
        {/* Intro Block */}
        <div className="w-full bg-white p-8 sm:p-12 lg:p-16 rounded-2xl shadow-xl mb-16 lg:mb-24 text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl text-[#0A192F] font-bold mb-6 tracking-tight">
            A 365-Day Living Space
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-4xl text-center">
            A true Winter Garden is the ultimate architectural extension. By seamlessly integrating our cutting-edge thermal glass facades and motorized zip screens directly into the perimeter of your bioclimatic pergola, we create a fully sealed, temperature-controlled outdoor room. Enjoy the beauty of your surroundings wrapped in total comfort, completely shielded from freezing winds, rain, and snow.
          </p>
        </div>

        {/* Feature 1: Architectural Glass Systems */}
        <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 mb-16 lg:mb-24">
          <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl text-[#0A192F] font-bold mb-6">
              Thermal Glass Integration
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              Create an impenetrable barrier against the cold without sacrificing your panoramic views. Our structural glass enclosures are custom-engineered to integrate flawlessly with our pergola columns, utilizing EPDM weather seals for maximum thermal retention.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start text-base sm:text-lg text-[#172A45] font-medium">
                <span className="mr-4 text-[#C5A880] font-bold shrink-0">✓</span> 
                <span>Motorized Guillotine: Vertically sliding glass panels that double as a balustrade when open.</span>
              </li>
              <li className="flex items-start text-base sm:text-lg text-[#172A45] font-medium">
                <span className="mr-4 text-[#C5A880] font-bold shrink-0">✓</span> 
                <span>Hebeschiebe (Lift & Slide): Ultra-smooth, highly insulated horizontal sliding tracks.</span>
              </li>
              <li className="flex items-start text-base sm:text-lg text-[#172A45] font-medium">
                <span className="mr-4 text-[#C5A880] font-bold shrink-0">✓</span> 
                <span>Double Glazing: Engineered to minimize heat loss and prevent interior condensation.</span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
             <div className="w-full aspect-video lg:aspect-[4/3] max-w-[600px] bg-[#172A45] rounded-2xl flex items-center justify-center text-white/50 shadow-lg overflow-hidden">
                <Image
                  src="/pergolas/winter-garden/2.png" // Update with your actual image path
                  alt="Motorized Guillotine Glass Facade"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full opacity-80"
                />
             </div>
          </div>
        </section>

        {/* Feature 2: Zip Screens & Climate Control */}
        <section className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-10 lg:gap-16 mb-16 lg:mb-24">
          <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl text-[#0A192F] font-bold mb-6">
              Dynamic Screens & Climate Control
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              For highly versatile weather protection, our motorized Zip Screens operate on an impenetrable zipper track hidden within the structural posts. The micro-perforated fabric blocks freezing winds, heavy rain, and harsh sunlight while maintaining privacy.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Combined with the bioclimatic roof&apos;s adjustable louvers and hidden 80mm internal drainage system, the entire structure acts as an autonomous climate engine. Intelligent sensors automatically close the roof and screens at the first sign of severe weather.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
             <div className="w-full aspect-video lg:aspect-[4/3] max-w-[600px] bg-slate-800 rounded-2xl flex items-center justify-center text-white/50 shadow-lg overflow-hidden">
                <Image
                  src="/pergolas/winter-garden/3.png" // Update with your actual image path
                  alt="Motorized Zip Screen Enclosure"
                  width={600}
                  height={450}
                  className="object-cover w-full h-full opacity-80"
                />
             </div>
          </div>
        </section>

        {/* =========================================
            TECHNICAL SPECIFICATIONS TABLE
        ========================================= */}
        <section className="w-full pt-12 lg:pt-16 border-t border-gray-200 flex flex-col items-center">
          <h2 className="text-center text-3xl sm:text-4xl text-[#0A192F] font-bold mb-8 lg:mb-12">
            System Specifications
          </h2>
          
          <div className="w-full max-w-5xl overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr>
                  <th className="bg-[#0A192F] text-white p-5 font-semibold border-b-2 border-[#0A192F] border-r border-white/10 w-1/4">
                    Feature
                  </th>
                  <th className="bg-[#0A192F] text-white p-5 font-semibold border-b-2 border-[#0A192F] border-r border-white/10 w-3/8">
                    Glass Facades (Guillotine/Sliding)
                  </th>
                  <th className="bg-[#0A192F] text-white p-5 font-semibold border-b-2 border-[#0A192F] w-3/8">
                    Zip Screens & PVC Enclosures
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm sm:text-base">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-5 border-r border-gray-100 text-[#0A192F] font-bold align-top bg-gray-50">System Types</td>
                  <td className="p-5 border-r border-gray-100 text-gray-600 align-top">Motorized Vertical Guillotine or Lift & Slide (Hebeschiebe)</td>
                  <td className="p-5 text-gray-600 align-top">Zip-Track Micro-perforated Screen or Transparent Marine PVC</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-5 border-r border-gray-100 text-[#0A192F] font-bold align-top bg-gray-50">Glazing / Fabric</td>
                  <td className="p-5 border-r border-gray-100 text-gray-600 align-top">Tempered safety glass or highly insulated double-glazing</td>
                  <td className="p-5 text-gray-600 align-top">Breathable water-resistant mesh or 100% clear marine PVC</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-5 border-r border-gray-100 text-[#0A192F] font-bold align-top bg-gray-50">Structural Integration</td>
                  <td className="p-5 border-r border-gray-100 text-gray-600 align-top">Flush-mounts to columns; acts as a structural safety balustrade when open</td>
                  <td className="p-5 text-gray-600 align-top">Concealed top cassette; zipper tracks mount invisibly inside structural columns</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-5 border-r border-gray-100 text-[#0A192F] font-bold align-top bg-gray-50">Motorization</td>
                  <td className="p-5 border-r border-gray-100 text-gray-600 align-top">Heavy-duty tubular lifting motors with remote and smart-home integration</td>
                  <td className="p-5 text-gray-600 align-top">Somfy® 20 NM tubular motors with multi-channel remote</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="p-5 border-r border-gray-100 text-[#0A192F] font-bold align-top bg-gray-50">Weather Sealing</td>
                  <td className="p-5 border-r border-gray-100 text-gray-600 align-top">EPDM gaskets and thermal breaks for maximum heat retention</td>
                  <td className="p-5 text-gray-600 align-top">High-tension zip-track prevents fabric blowout in severe winds</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          {/* Call to Action */}
          <div className="flex justify-center w-full mt-12">
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#0A192F] hover:bg-[#172A45] text-white px-10 py-4 text-base sm:text-lg rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-[#0A192F]/20 active:scale-[0.98]">
                Consult a Winter Garden Expert
              </button>
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}