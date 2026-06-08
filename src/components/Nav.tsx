import { useEffect, useState } from 'react'
import { config, links } from '../config'
import { IconInstagram } from '../icons'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.wrap}>
        <a href="#" className={styles.logo}>{config.name}</a>
        <div className={styles.links}>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
          >
            <IconInstagram size={18} />
            <span>@{config.instagram}</span>
          </a>
          <a
            href={links.whatsapp('Oi! Quero saber mais sobre o acompanhamento.')}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </nav>
  )
}
