const skills = {
  'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
  'Backend': ['Node.js', 'Express', 'Python', 'REST APIs', 'Firebase'],
  'Hardware': ['Arduino', 'ESP32', 'Raspberry Pi', 'C++', 'Embedded Systems'],
  'Tools': ['Git', 'GitHub', 'Figma', 'VS Code', 'Vercel'],
}

function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 80px' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Skills</p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '64px' }}>What I work with</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{
            background: 'var(--surface)',
            border: '0.5px solid rgba(92, 122, 94, 0.12)',
            borderRadius: '16px',
            padding: '24px',
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '16px' }}>{category}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {items.map(skill => (
                <span key={skill} style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'var(--sand)', opacity: 0.75 }}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Skills