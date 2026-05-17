import { useTheme } from '../context/ThemeContext'

const projects = [
  {
    title: 'Geneva Auto',
    desc: 'A full-stack web application using Flask and MySQL to manage vehicle inventory and sales. Features role-based access control, dynamic UI rendering, and secure transaction workflows.',
    tags: ['Python', 'Flask', 'MySQL', 'Jinja2'],
    link: '#',
  },
  {
    title: 'DegreeFlow',
    desc: 'A student degree tracking web application built with Vue.js and TypeScript. Fetches and displays real student data from a REST API hosted on AWS.',
    tags: ['Vue.js', 'TypeScript', 'Axios', 'AWS'],
    link: '#',
  },
  {
    title: 'Project Three',
    desc: 'A full-stack application built with modern web technologies. Features a clean interface and robust backend architecture with real-time data processing.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
    placeholder: true,
  },
]

function Projects() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="projects" style={{ padding: '120px 80px' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Projects</p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: isDark ? '#fff' : '#1a1a18', lineHeight: 1.1, marginBottom: '64px' }}>Things I've built</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {projects.map((project) => (
  <div key={project.title} style={{
      background: 'var(--surface)',
      border: '0.5px solid rgba(92, 122, 94, 0.12)',
      borderRadius: '16px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{ height: '180px', background: 'var(--bg)', borderBottom: '0.5px solid rgba(92, 122, 94, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '11px', color: 'var(--highlight)', opacity: 0.3, letterSpacing: '0.08em', textTransform: 'uppercase' }}>preview</span>
      </div>
      <div style={{ padding: '20px' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 700, color: isDark ? '#fff' : '#1a1a18', marginBottom: '10px' }}>{project.title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: isDark ? '#fff' : '#1a1a18', opacity: 0.6, lineHeight: 1.7, marginBottom: '16px' }}>{project.desc}</p>
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

      {project.placeholder && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          background: isDark ? 'rgba(10, 10, 10, 0.4)' : 'rgba(204, 200, 190, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '16px',
        }}>
          <span style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '16px',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            border: '0.5px solid rgba(212, 184, 150, 0.3)',
            padding: '10px 24px',
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
          }}>
          Coming Soon
        </span>
      </div>
    )}
  </div>
))}
      </div>
    </section>
  )
}

export default Projects