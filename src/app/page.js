export default function Home() {
  return (
    <>
      <section style={{ backgroundColor: 'var(--navy-primary)', color: 'white', padding: '120px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Redefine Your<br/>Outdoor Experience</h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            State-of-the-art pool covers, movable floors, and luxury pergolas tailored for architectural perfection.
          </p>
          <button style={{ backgroundColor: 'var(--accent-gold)', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.1rem', cursor: 'pointer', borderRadius: '4px' }}>
            Explore Collections
          </button>
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