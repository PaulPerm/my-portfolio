const projects = [
  { title: 'Project One', desc: 'A short description of what this project does and the problem it solves.', tags: ['React', 'TypeScript'] },
  { title: 'Project Two', desc: 'A short description of what this project does and the problem it solves.', tags: ['Three.js', 'GSAP'] },
  { title: 'Project Three', desc: 'A short description of what this project does and the problem it solves.', tags: ['Arduino', 'C++'] },
]

function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 80px' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Projects</p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '64px' }}>Things I've built</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {projects.map((project) => (
          <div key={project.title} style={{
            background: 'var(--surface)',
            border: '0.5px solid rgba(92, 122, 94, 0.12)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}>
            <div style={{ height: '180px', background: 'var(--bg)', borderBottom: '0.5px solid rgba(92, 122, 94, 0.08)' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{project.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--sand)', opacity: 0.6, lineHeight: 1.7, marginBottom: '16px' }}>{project.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '11px',
                    color: 'var(--highlight)',
                    border: '0.5px solid rgba(92, 122, 94, 0.25)',
                    borderRadius: '20px',
                    padding: '3px 10px',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Projects