"use client";
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
export default function Pools() {
  const [activeTab, setActiveTab] = useState('covers');

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      {/* High-End Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
  <Image
    src="/pools/sliding/slide/3.png"
    alt="ApertoLux Folding Pool Cover"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/40" />

  <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-6 max-w-4xl">

      <h1 className="text-5xl md:text-7xl font-bold">
        Smart Pool Solutions 
      </h1>
      <p className="mt-6 text-xl max-w-2xl mx-auto">
        Elegant, secure, and engineered for year-round pool protection.
      </p>
    </div>
  </div>
</section>

      <div className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 10 }}>
        {/* Luxury Tab Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2rem', 
          backgroundColor: 'white',
          padding: '1rem 2rem',
          borderRadius: '8px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          maxWidth: '600px',
          margin: '0 auto 4rem auto'
        }}>
          <button 
            onClick={() => setActiveTab('covers')}
            style={activeTab === 'covers' ? activeTabStyle : inactiveTabStyle}
          >
            Automated Covers
          </button>
          <div style={{ width: '1px', backgroundColor: '#e2e8f0' }}></div>
          <button 
            onClick={() => setActiveTab('floors')}
            style={activeTab === 'floors' ? activeTabStyle : inactiveTabStyle}
          >
            Movable Floors
          </button>
        </div>

        {/* Tab Content Area using the Luxury Feature Layout */}
        <div style={{ minHeight: '600px' }}>
          {activeTab === 'covers' ? (
            <div className="feature-section" style={{ paddingTop: '2rem', borderBottom: 'none' }}>
              <div
                className="feature-image-placeholder"
                style={{
                  height: "550px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/pools/sliding/slide/2.png"
                  alt="Slatted Pool Cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="feature-content">
                <h2 style={{ fontSize: '2.8rem' }}>Invisible Protection. <br/>Natural Heating.</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                  Our submerged slatted covers are engineered to disappear completely when open. When closed, they provide uncompromised child and pet safety while harnessing solar energy to naturally heat your pool water.
                </p>
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2.5rem' }}>
                  <li style={listItemStyle}>✓ Submerged motor for zero visual impact</li>
                  <li style={listItemStyle}>✓ Anti-algae polycarbonate solar slats</li>
                  <li style={listItemStyle}>✓ Compliant with NF P90-308 safety standards</li>
                  <li style={listItemStyle}>✓ Smartphone app integration</li>
                </ul>
                <Link href="/pools/sliding" className="btn-outline">
                  View Cover Specifications
                </Link>
              </div>
            </div>
          ) : (
            <div className="feature-section" style={{ paddingTop: '2rem', borderBottom: 'none', flexDirection: 'row-reverse' }}>
              <div className="feature-image-placeholder" style={{ height: '550px', position: 'relative', overflow: 'hidden' }}>
                 <Image
                  src="/pools/movable-floor/4.png"
                  alt="Slatted Pool Cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="feature-content">
                <h2 style={{ fontSize: '2.8rem' }}>Reclaim Your <br/>Square Footage.</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                  Transform your swimming pool into a solid, load-bearing terrace at the touch of a button. Our movable floors offer the ultimate luxury of space optimization, allowing your patio to adapt to any occasion.
                </p>
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2.5rem' }}>
                  <li style={listItemStyle}>✓ Adjustable depth (wading pool to full depth)</li>
                  <li style={listItemStyle}>✓ Supports heavy furniture and event gatherings</li>
                  <li style={listItemStyle}>✓ Finished with your exact premium patio tile or wood</li>
                  <li style={listItemStyle}>✓ Whisper-quiet hydraulic lifting system</li>
                </ul>
               <Link href="/pools/movable-floor" className="btn-outline">
  Explore Movable Floors
</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Reusable inline styles for the tabs and lists to keep the code clean
const activeTabStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1.2rem',
  fontWeight: '700',
  color: 'var(--navy-primary)',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  transition: 'color 0.3s ease'
};

const inactiveTabStyle = {
  background: 'none',
  border: 'none',
  fontSize: '1.2rem',
  fontWeight: '500',
  color: 'var(--text-muted)',
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  transition: 'color 0.3s ease'
};

const listItemStyle = {
  marginBottom: '1rem', 
  color: 'var(--navy-light)', 
  fontWeight: '600',
  fontSize: '1.1rem',
  display: 'flex',
  alignItems: 'center'
};