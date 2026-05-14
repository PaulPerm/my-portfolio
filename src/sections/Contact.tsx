function Contact() {
  return (
    <section id="contact" style={{ padding: '120px 80px', maxWidth: '640px' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Contact</p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>Let's work together</h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--sand)', opacity: 0.6, lineHeight: 1.8, marginBottom: '48px' }}>Have a project in mind or just want to say hi? My inbox is always open.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <input placeholder="Your name" style={{
            flex: 1, background: 'var(--surface)', border: '0.5px solid rgba(92, 122, 94, 0.15)',
            borderRadius: '12px', padding: '14px 18px', color: '#fff', fontFamily: 'var(--font-body)',
            fontSize: '15px', outline: 'none',
          }} />
          <input placeholder="Your email" style={{
            flex: 1, background: 'var(--surface)', border: '0.5px solid rgba(92, 122, 94, 0.15)',
            borderRadius: '12px', padding: '14px 18px', color: '#fff', fontFamily: 'var(--font-body)',
            fontSize: '15px', outline: 'none',
          }} />
        </div>
        <textarea placeholder="Your message" rows={5} style={{
          background: 'var(--surface)', border: '0.5px solid rgba(92, 122, 94, 0.15)',
          borderRadius: '12px', padding: '14px 18px', color: '#fff', fontFamily: 'var(--font-body)',
          fontSize: '15px', outline: 'none', resize: 'none',
        }} />
        <button style={{
          alignSelf: 'flex-start', background: 'var(--accent)', color: 'var(--bg)',
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '13px',
          padding: '12px 28px', borderRadius: '24px', border: 'none', cursor: 'pointer',
          letterSpacing: '0.04em',
        }}>
          Send message
        </button>
      </div>
    </section>
  )
}
export default Contact