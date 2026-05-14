function Navbar() {
  const links = ['about', 'projects', 'skills', 'contact']

  return (
    <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:100,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 48px',height:'64px'
    ,background: 'rgba(10, 10, 10, 0.4)',
    backdropFilter: 'blur(24px)',
    borderBottom: '0.5px solid rgba(92, 122, 94, 0.2)',
    boxShadow: '0 2px 6px #fff',}}>

      <span style={{fontFamily:'var(--font-heading)',fontWeight:900,fontSize:'18px',color:'var(--highlight)',letterSpacing:'0.02em'}}>
        PP
      </span>

      <div style={{display:'flex',gap:'32px',alignItems:'center'}}>
        {links.map((link: string) => (
          <a key={link} href={`#${link}`}
            style={{fontFamily:'var(--font-body)',fontSize:'15px',color:'var(--highlight)',opacity:0.6,textDecoration:'none'}}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
            {link}
          </a>
        ))}
      </div>

      <a href="#contact"
        style={{fontFamily:'var(--font-heading)',fontWeight:700,fontSize:'13px',color:'var(--bg)',background:'var(--accent)',padding:'8px 20px',borderRadius:'24px',textDecoration:'none',letterSpacing:'0.04em'}}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
        hire me
      </a>

    </nav>
  )
}

export default Navbar