export const metadata = {
  title: 'Accessibility Statement | Apertolux',
  description: 'Our commitment to digital accessibility for all users.',
};

export default function Accessibility() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Accessibility Statement</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Committed to equal access for all.</p>
      </div>

      <div className="container" style={{ maxWidth: '800px', padding: '4rem 2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginTop: '-4rem', position: 'relative', zIndex: 10, marginBottom: '4rem' }}>
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem' }}>Our Commitment</h2>
          <p style={{ marginBottom: '1rem' }}>
            Apertolux views the provision of equal, accessible, and professional service to all our customers as a fundamental obligation. We invest significant resources in making this website accessible in accordance with the <strong>Equal Rights for Persons with Disabilities (Accessibility Adjustments for Service) Regulations, 5773-2013</strong>.
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>Accessibility Standard</h2>
          <p style={{ marginBottom: '1rem' }}>
            Our website is tailored to comply with the Israeli Standard (IS 5568) for web content accessibility at the AA level, and the international WCAG 2.0 guidelines. The site provides semantic structure for assistive technologies and support for standard keyboard operation pattern (Arrow keys, Enter, and Esc to exit menus/windows).
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>Encountered a Problem?</h2>
          <p style={{ marginBottom: '1rem' }}>
            Despite our efforts to make all pages accessible, parts of the site may still be in the process of being updated. If you encounter any accessibility issues, please contact our Accessibility Coordinator so we can address the problem immediately.
          </p>

          <div style={{ backgroundColor: 'var(--bg-light)', padding: '2rem', borderRadius: '4px', marginTop: '2rem', borderLeft: '4px solid var(--navy-primary)' }}>
            <h3 style={{ color: 'var(--navy-primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Accessibility Coordinator Contact:</h3>
            <p style={{ margin: 0 }}>
              <strong>Name:</strong> [Your Coordinator Name]<br />
              <strong>Phone:</strong> +1 (800) 555-0199<br />
              <strong>Email:</strong> info@eviez.com.tr
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}