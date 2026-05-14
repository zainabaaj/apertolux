export const metadata = {
  title: 'Terms of Service | Apertolux',
  description: 'Terms and conditions for using the Apertolux website.',
};

export default function TermsOfService() {
  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Terms of Service</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc' }}>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="container" style={{ maxWidth: '800px', padding: '4rem 2rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginTop: '-4rem', position: 'relative', zIndex: 10, marginBottom: '4rem' }}>
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: '1rem' }}>
            By accessing and using the Apertolux website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>2. Intellectual Property</h2>
          <p style={{ marginBottom: '1rem' }}>
            All content on this website, including texts, graphics, logos, images, and software, is the property of Apertolux and is protected by Israeli and international copyright laws. Unauthorized use, reproduction, or distribution is strictly prohibited.
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>3. Limitation of Liability</h2>
          <p style={{ marginBottom: '1rem' }}>
            While we strive to provide accurate product information regarding our pergolas, pool covers, and movable floors, the website content is provided "as is". Apertolux shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website.
          </p>

          <h2 style={{ color: 'var(--navy-primary)', marginBottom: '1rem', marginTop: '2rem' }}>4. Governing Law and Jurisdiction</h2>
          <p style={{ marginBottom: '1rem' }}>
            These terms shall be governed by and construed in accordance with the laws of the State of Israel. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Tel Aviv, Israel.
          </p>
        </div>
      </div>
    </div>
  );
}