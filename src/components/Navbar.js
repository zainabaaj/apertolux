"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Pools",
      path: "/pools",
      sub: [
        { name: "Folding Deck Covers", path: "/pools/folding" },
        { name: "Sliding Covers", path: "/pools/sliding" },
        { name: "Movable Floors", path: "/pools/movable-floor" },
      ],
    },
    {
      name: "Pergolas",
      path: "/pergolas",
      sub: [
        { name: "Retractable Awning", path: "/pergolas/retractable-awning" },
        { name: "Electric Retractable Carport", path: "/pergolas/carport" },
        { name: "Fixed Glass", path: "/pergolas/fixed-glass" },
        {
          name: "Fixed and Retractable Aluminum",
          path: "/pergolas/aluminum",
        },
        { name: "Winter Garden", path: "/pergolas/winter-garden" },
        { name: "Parasols", path: "/pergolas/parasols" },
      ],
    },
    {
      name: "Hot Tubs",
      path: "/hot-tubs",
      sub: [
        { name: "Original", path: "/hot-tubs/original" },
        { name: "Comfort", path: "/hot-tubs/comfort" },
        { name: "Premium", path: "/hot-tubs/premium" },
      ],
    },
    {
      name: "Shades & Shutters",
      path: "/shades-shutters",
      sub: [
        {
          name: "Motorized Zip Screens",
          path: "/shades-shutters/zip-screens",
        },
        {
          name: "Roller Shutters",
          path: "/shades-shutters/roller-shutters",
        },
        {
          name: "Electric Outdoor Blinds",
          path: "/shades-shutters/outdoor-blinds",
        },
        {
          name: "Horizontal Sliding Walls",
          path: "/shades-shutters/sliding-walls",
        },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-20 lg:h-24 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Logo */}
<Link href="/" className="flex items-center gap-4">
  <Image
     width={24}
    height={24}
    src="/logo.png"
    alt="Apertolux"
    className="h-12 w-12"
  />

  <div className="flex flex-col">
    <span className="text-3xl font-bold tracking-[0.15em] text-[#0A192F]">
      APERTOLUX
    </span>

    <span className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
      Premium Outdoor Living
    </span>
  </div>
</Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-12">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.path}
                className="flex items-center px-2 py-8 text-[17px] xl:text-lg font-semibold text-[#172A45] transition-colors duration-200 hover:text-[#0A192F]"
              >
                {item.name}

                {item.sub && (
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
              </Link>

              {item.sub && (
                <div
                  className={`absolute left-0 top-full min-w-[320px] rounded-b-xl border border-gray-200 border-t-[3px] border-t-[#0A192F] bg-white py-3 shadow-2xl transition-all duration-200 ${
                    activeMenu === item.name
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  {item.sub.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.path}
                      className="block px-8 py-4 text-base font-medium text-gray-600 transition-all duration-200 hover:bg-gray-50 hover:pl-10 hover:text-[#0A192F]"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
    
<button
  className="p-2 lg:hidden"
  onClick={() => setMobileMenuOpen((prev) => !prev)}
>
  <svg
    className={`h-7 w-7 text-[#0A192F] transition-transform duration-300 ${
      mobileMenuOpen ? "rotate-90" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    {mobileMenuOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    )}
  </svg>
</button>


      </nav>

      {/* Mobile Menu */}
      
{/* Mobile Menu */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
    mobileMenuOpen
      ? "max-h-[1000px] opacity-100"
      : "max-h-0 opacity-0"
  }`}
>
  <div className="border-t border-gray-200 bg-white">
    <div className="px-5 py-4">
      {menuItems.map((item) => (
        <div key={item.name} className="border-b border-gray-100 py-3">
          <Link
            href={item.path}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-lg font-semibold text-[#172A45] transition-all duration-200 active:scale-95"
          >
            {item.name}
          </Link>

          {item.sub && (
            <div className="ml-4 mt-2 space-y-2">
              {item.sub.map((subItem) => (
                <Link
                  key={subItem.name}
                  href={subItem.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base text-gray-600 transition-all duration-200 active:scale-95"
                >
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
    </header>
  );
}