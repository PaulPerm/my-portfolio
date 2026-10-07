import { SiPython, SiJavascript, SiTypescript, SiMysql, SiHtml5, SiCss, SiReact, SiVuedotjs, SiFlask, SiTailwindcss, SiGit, SiCplusplus, SiFastapi, SiNodedotjs, SiPinia, SiGithub, SiDocker, SiLinux, SiVercel, SiRailway, SiEspressif, SiArduino } from 'react-icons/si'
import { VscCode, VscCloud } from 'react-icons/vsc'
import { DiJava } from 'react-icons/di'
import { TbBrandCSharp } from 'react-icons/tb'
import { CircuitBoard, Cable } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'


const skills = [
  { name: 'Python', icon: SiPython, category: 'Languages', color: '#3776ab' },
  { name: 'JavaScript', icon: SiJavascript, category: 'Languages', color: '#f7df1e' },
  { name: 'TypeScript', icon: SiTypescript, category: 'Languages', color: '#3178c6' },
  { name: 'Java', icon: DiJava, category: 'Languages', color: '#e76f00' },
  { name: 'C++', icon: SiCplusplus, category: 'Languages', color: '#00599c' },
  { name: 'C#', icon: TbBrandCSharp, category: 'Languages', color: '#9b4f96' },
  { name: 'SQL', icon: SiMysql, category: 'Languages', color: '#4479a1' },
  { name: 'HTML', icon: SiHtml5, category: 'Languages', color: '#e34f26' },
  { name: 'CSS', icon: SiCss, category: 'Languages', color: '#1572b6' },
  { name: 'React', icon: SiReact, category: 'Frameworks', color: '#61dafb' },
  { name: 'Vue.js', icon: SiVuedotjs, category: 'Frameworks', color: '#42b883' },
  { name: 'FastAPI', icon: SiFastapi, category: 'Frameworks', color: '#009688' },
  { name: 'Flask', icon: SiFlask, category: 'Frameworks', color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, category: 'Frameworks', color: '#5fa04e' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frameworks', color: '#38bdf8' },
  { name: 'Pinia', icon: SiPinia, category: 'Frameworks', color: '#ffd859' },
  { name: 'Git', icon: SiGit, category: 'Tools & Cloud', color: '#f05032' },
  { name: 'GitHub', icon: SiGithub, category: 'Tools & Cloud', color: '#ffffff' },
  { name: 'VS Code', icon: VscCode, category: 'Tools & Cloud', color: '#007acc' },
  { name: 'Docker', icon: SiDocker, category: 'Tools & Cloud', color: '#2496ed' },
  { name: 'AWS', icon: VscCloud, category: 'Tools & Cloud', color: '#ff9900' },
  { name: 'Linux', icon: SiLinux, category: 'Tools & Cloud', color: '#fcc624' },
  { name: 'Vercel', icon: SiVercel, category: 'Tools & Cloud', color: '#ffffff' },
  { name: 'Railway', icon: SiRailway, category: 'Tools & Cloud', color: '#ffffff' },
  { name: 'ESP32', icon: SiEspressif, category: 'Embedded & Hardware', color: '#e7352c' },
  { name: 'Arduino', icon: SiArduino, category: 'Embedded & Hardware', color: '#00878f' },
  { name: 'Embedded C++', icon: SiCplusplus, category: 'Embedded & Hardware', color: '#00599c' },
  { name: 'I2C', icon: CircuitBoard, category: 'Embedded & Hardware', color: '#8aaa8c' },
  { name: 'Serial', icon: Cable, category: 'Embedded & Hardware', color: '#8aaa8c' },
]

const categories = ['Languages', 'Frameworks', 'Tools & Cloud', 'Embedded & Hardware']


function Skills() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section id="skills" style={{ padding: '120px 80px' }}>
      {/* <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Skills</p> */}
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
                fontSize: '14px',
                fontWeight: 700,
                color: isDark ? '#fff' : '#1a1a18',
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