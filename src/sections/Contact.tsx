import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import emailjs from '@emailjs/browser'
import { MailIcon  } from 'lucide-react'
import { SiGithub  } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

function Contact() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    
    if (!form.name || !form.email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    }  catch (error) {
      console.log('EmailJS error:', error)
      setStatus('error')
    }
  }

  const inputStyle = {
    background: 'var(--surface)',
    border: '0.5px solid rgba(255,255,255,0.1)',
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '14px 18px',
    color: isDark ? '#fff' : '#1a1a18',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    outline: 'none',
    width: '100%',
  }

 return (
    <section id="contact" style={{ padding: '120px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px', alignSelf: 'center' }}>Contact</p>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, color: isDark ? '#fff' : '#1a1a18', lineHeight: 1.1, marginBottom: '16px', textAlign: 'center' }}>Let's work together</h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: isDark ? '#fff' : '#1a1a18', opacity: 0.6, lineHeight: 1.8, marginBottom: '48px', maxWidth: '480px', textAlign: 'center' }}>
        Have a project in mind or just want to say hello? <br /> My inbox is always open.
      </p>

      <div style={{
        width: '100%', 
        maxWidth: '560px',
        background: 'var(--surface)',
        border: '0.5px solid rgba(255,255,255,0.1)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
        borderRadius: '24px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: 'none' }}
        />
        <button
          onClick={handleSubmit}
          disabled={status === 'sending' || status === 'sent'}
          className="glass-btn"
          style={{
            alignSelf: 'center',
            width: '100%',
            background: status === 'sent' ? 'rgba(92,122,94,0.3)' : 'rgba(92, 122, 94, 0.15)',
            border: '0.5px solid rgba(255,255,255,0.2)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
            color: isDark ? '#fff' : '#1a1a18',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '13px',
            padding: '12px 28px',
            borderRadius: '24px',
            cursor: status === 'sent' ? 'default' : 'pointer',
            letterSpacing: '0.04em',
          }}
        >
          {status === 'idle' && 'Send message'}
          {status === 'sending' && 'Sending...'}
          {status === 'sent' && 'Message sent!'}
          {status === 'error' && 'Something went wrong — try again'}
        </button>

        <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'center', gap: '32px' }}>
          <a href="mailto:paulpermyashkin17@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: isDark ? '#fff' : '#1a1a18', opacity: 0.7, fontFamily: 'var(--font-body)', fontSize: '14px' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            <MailIcon size={16} color="var(--sand)" />
            Email
          </a>
          <a href="https://github.com/PaulPerm" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: isDark ? '#fff' : '#1a1a18', opacity: 0.7, fontFamily: 'var(--font-body)', fontSize: '14px' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            <SiGithub size={16} color={isDark ? '#fff' : '#1a1a18'} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/paul-permyashkin-3760343b9/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: isDark ? '#fff' : '#1a1a18', opacity: 0.7, fontFamily: 'var(--font-body)', fontSize: '14px' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
          >
            <FaLinkedin size={16} color="#0A66C2" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact