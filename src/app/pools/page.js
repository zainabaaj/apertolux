"use client";

import { useState } from 'react';

export default function Pools() {
  const [activeTab, setActiveTab] = useState('covers');

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      {/* High-End Hero Section */}
      <div className="page-hero" style={{ minHeight: '45vh' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Smart Pool Solutions</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '700px' }}>
          Seamlessly blend safety, automation, and architectural beauty with our invisible pool covers and movable floors.
        </p>
      </div>

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
              <div className="feature-image-placeholder" style={{ height: '550px' }}>
                [ High-Res Slatted Cover Image ]
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
                <button className="btn-outline">View Cover Specifications</button>
              </div>
            </div>
          ) : (
            <div className="feature-section" style={{ paddingTop: '2rem', borderBottom: 'none', flexDirection: 'row-reverse' }}>
              <div className="feature-image-placeholder" style={{ height: '550px', backgroundColor: '#1B263B' }}>
                [ High-Res Movable Floor Image ]
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
                <button className="btn-outline">Explore Movable Floors</button>
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