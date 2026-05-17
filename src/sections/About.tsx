import { useTheme } from '../context/ThemeContext'

function About() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 80px',
      gap: '80px',
    }}>
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

      <div style={{ flex: 1 }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>Learning. Building. Improving.</p>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: isDark ? '#fff' : '#1a1a18', lineHeight: 1.1, marginBottom: '24px' }}>My Journey Into Tech</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '20px', color: isDark ? '#fff' : '#1a1a18', opacity: 0.85, lineHeight: 1.8 }}>
          I got hooked on programming in high school the moment I saw my first lines of code compile and print "Hello World".  I fell in love with the process of figuring out how to break down problems and translating that into something a computer can actually run. I'm currently a sophomore CS student at Geneva College, minoring in Embedded Systems and Software Development as well as playing on the men's soccer team. Outside of coding I love to fly fish quiet streams, create art, or play piano. I'm most excited about software engineering right now since my whole CS journey has been centered around it, but I've always been drawn to getting that software to affect the physical world through hardware.
        </p>
      </div>
    </section>
  )
}

export default About