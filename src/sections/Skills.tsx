import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import { SiPython, SiJavascript, SiTypescript, SiMysql, SiHtml5, SiCss, SiReact, SiVuedotjs, SiFlask, SiTailwindcss, SiGit } from 'react-icons/si'
import { VscCode, VscCloud } from 'react-icons/vsc'

const skills = [
  { name: 'Python', icon: SiPython, category: 'Languages', color: '#3776ab' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Languages', color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Languages', color: '#3178c6' },
  { name: 'SQL', icon: SiMysql, category: 'Languages', color: '#4479a1' },
  { name: 'HTML', icon: SiHtml5, category: 'Languages', color: '#e34f26' },
  { name: 'CSS', icon: SiCss, category: 'Languages', color: '#1572b6' },
  { name: 'React', icon: SiReact, category: 'Frameworks', color: '#61dafb' },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'Frameworks', color: '#42b883' },
  { name: 'Flask', icon: SiFlask, category: 'Frameworks', color: '#ffffff' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frameworks', color: '#38bdf8' },
  { name: 'Git', icon: SiGit, category: 'Tools', color: '#f05032' },
  { name: 'VS Code', icon: VscCode, category: 'Tools', color: '#007acc' },
  { name: 'AWS', icon: VscCloud, category: 'Tools', color: '#ff9900' },
]

const categories = ['Languages', 'Frameworks', 'Tools']

function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="skills" style={{ padding: '120px 80px' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Skills</p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: isDark ? '#fff' : '#1a1a18', lineHeight: 1.1, marginBottom: '64px' }}>What I work with</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
        {categories.map((category) => (
          <div key={category}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              {category}
            </motion.p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {skills.filter(s => s.category === category).map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.07, ease: 'easeOut' }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                    boxShadow: `0 0 24px ${skill.color}40, 0 0 8px ${skill.color}20`,
                    borderColor: `${skill.color}60`
                  }}
                  className="glass-btn"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--surface)',
                    border: `0.5px solid rgba(255,255,255,0.1)`,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(255,255,255,0.05)',
                    borderRadius: '16px',
                    padding: '20px 24px',
                    minWidth: '90px',
                    cursor: 'default',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                  }}
                >
                  <skill.icon size={32} color={skill.color} />
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: isDark ? '#fff' : '#1a1a18',
                    opacity: 0.75,
                    textAlign: 'center',
                  }}>
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills