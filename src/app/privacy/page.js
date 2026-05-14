export const metadata = {
  title: 'Privacy Policy | Apertolux',
  description: 'How Apertolux collects, uses, and protects your data.',
};

export default function PrivacyPolicy() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="container" style={{ maxWidth: '800px', padding: '4rem 2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginTop: '-4rem', position: 'relative', zIndex: 10, marginBottom: '4rem' }}>
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>1. General Overview</h2>
          <p style={{ marginBottom: '1rem' }}>
            Apertolux ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This policy outlines our practices in accordance with the <strong>Israeli Protection of Privacy Law, 5741-1981</strong>, and other applicable regulations.
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>2. Data Collection</h2>
          <p style={{ marginBottom: '1rem' }}>
            When you use our "Contact Us" form or request a consultation, we collect personal data including your name, email address, phone number, and project details. We use this information solely to provide our services, respond to inquiries, and improve user experience.
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>3. Data Storage and Security</h2>
          <p style={{ marginBottom: '1rem' }}>
            Your information is stored securely on servers compliant with industry standards. We do not sell, rent, or trade your personal information to third parties without your explicit consent, except as required by Israeli law enforcement or judicial orders.
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>4. User Rights</h2>
          <p style={{ marginBottom: '1rem' }}>
            Under Israeli law, you have the right to review the information held about you in our database. If you find the information is incorrect, incomplete, or outdated, you may contact us to amend or delete it.
          </p>

          <p style={{ marginTop: '3rem', fontWeight: 'bold' }}>
            For privacy inquiries, contact us at: info@eviez.com.tr
          </p>
        </div>
      </div>
    </div>
  );
}