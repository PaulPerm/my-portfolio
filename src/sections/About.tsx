function About() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 80px',
      gap: '80px',
    }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>About me</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>I build things that live at the intersection of hardware and software</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#fff', opacity: 0.85, lineHeight: 1.8, marginBottom: '16px' }}>
          I'm Paul, a software developer student based in Pennsylvania. I love building things — from web interfaces to embedded systems. I think on paper first, then bring ideas to life in code.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#fff', opacity: 0.5, lineHeight: 1.8 }}>
          When I'm not coding I'm sketching out my next idea, debugging with my rubber duck, or tinkering with microcontrollers.
        </p>
      </div>
      <div style={{
        width: '320px',
        height: '400px',
        borderRadius: '24px',
        background: 'var(--surface)',
        border: '0.5px solid rgba(92, 122, 94, 0.15)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--highlight)', opacity: 0.3 }}>photo here</p>
      </div>
    </section>
  )
}
export default About