"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // Tracks which dropdown is currently open
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { 
      name: 'Pools', 
      path: '/pools',
      sub: [
        { name: 'Folding Deck Covers', path: '/pools/folding' },
        { name: 'Sliding Covers', path: '/pools/sliding' },
        { name: 'Movable Floors', path: '/pools/movable-floor' }
      ]
    },
    { 
      name: 'Pergolas', 
      path: '/pergolas',
      sub: [
        { name: 'Smart Folding', path: '/pergolas/smart-folding' },
        { name: 'Electric Retractable Carport', path: '/pergolas/carport' },
        { name: 'Sun Sails', path: '/pergolas/sun-sails' },
        { name: 'Aluminum & Wooden', path: '/pergolas/aluminum-wooden' },
        { name: 'Retractable Awning', path: '/pergolas/retractable-awning' },
        { name: 'Winter Garden', path: '/pergolas/winter-garden' }
      ]
    },
    { 
      name: 'Hot Tubs', 
      path: '/hot-tubs',
      sub: [
        { name: 'Original', path: '/hot-tubs/original' },
        { name: 'Comfort', path: '/hot-tubs/comfort' },
        { name: 'Premium', path: '/hot-tubs/premium' }
      ]
    },
    { 
      name: 'Shades & Shutters', 
      path: '/shades-shutters',
      sub: [
        { name: 'Motorized Zip Screens', path: '/shades-shutters/zip-screens' },
        { name: 'Roller Shutters', path: '/shades-shutters/roller-shutters' },
        { name: 'Electric Outdoor Blinds', path: '/shades-shutters/outdoor-blinds' },
        { name: 'Horizontal Sliding Walls', path: '/shades-shutters/sliding-walls' }
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        
        {/* Logo */}
        <Link href="/" style={styles.logo}>
          APERTOLUX
        </Link>
        
        {/* Main Menu */}
        <ul style={styles.menuList}>
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              style={styles.menuItem}
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link href={item.path} style={styles.navLink}>
                {item.name}
                {item.sub && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px', marginTop: '2px' }}>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                )}
              </Link>

              {/* Dropdown Menu - Only renders if there are sub-items AND it is currently hovered */}
              {item.sub && (
                <div style={{
                  ...styles.dropdown,
                  opacity: activeMenu === item.name ? 1 : 0,
                  visibility: activeMenu === item.name ? 'visible' : 'hidden',
                  transform: activeMenu === item.name ? 'translateY(0)' : 'translateY(10px)',
                }}>
                  {item.sub.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      href={subItem.path} 
                      style={styles.dropdownItem}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#f8f9fa';
                        e.target.style.color = '#0A192F';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#555';
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}

// All styles are encapsulated here to prevent any global CSS conflicts
const styles = {
  header: {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    position: 'sticky',
    top: 0,
    zIndex: 9999,
    borderBottom: '1px solid #eaeaea',
  },
  nav: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '90px',
  },
  logo: {
    color: '#0A192F', // Navy Primary
    fontSize: '1.8rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textDecoration: 'none',
  },
  menuList: {
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
    height: '100%',
    alignItems: 'center',
  },
  menuItem: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: '#172A45', // Navy Light
    fontWeight: '600',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 0',
    cursor: 'pointer',
  },
  dropdown: {
    position: 'absolute',
    top: '90px', // Matches header height
    left: '-1rem',
    backgroundColor: '#ffffff',
    minWidth: '260px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    borderRadius: '0 0 8px 8px',
    border: '1px solid #eaeaea',
    borderTop: '3px solid #0A192F',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.2s ease-in-out',
    padding: '0.5rem 0',
  },
  dropdownItem: {
    padding: '0.8rem 1.5rem',
    color: '#555',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    display: 'block',
  }
};