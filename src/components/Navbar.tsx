import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = ['about', 'projects', 'skills', 'contact']

function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      height: '64px',
      background: isDark ? 'rgba(10, 10, 10, 0.4)' : 'rgba(255, 255, 255, 0.15)',backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
     
    }}>

      <span style={{
        fontFamily: 'var(--font-heading)',
        fontWeight: 900,
        fontSize: '18px',
        color: 'var(--highlight)',
        letterSpacing: '0.02em',
      }}>
        PP
      </span>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              color: isDark ? '#fff' : '#1a1a18',
              opacity: 0.75,
              textDecoration: 'none',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
          >
            {link}
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button
          onClick={toggleTheme}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '0.5px solid rgba(255,255,255,0.15)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: isDark ? 'var(--highlight)' : '#1a1a18',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

       
      </div>

    </nav>
  )
}

export default Navbar